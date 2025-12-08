// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Bibliotecas
import { create, StatusFind, Whatsapp } from '@wppconnect-team/wppconnect';
import sharp from 'sharp';
import { WppsGateway } from './gateway/wpps.gateway';

// wppconnect.defaultLogger.level = 'silly';
// wppconnect.defaultLogger.transports.forEach((t) => (t.silent = true));

@Injectable()
export class WppsService {
  private clients = new Map<string, Whatsapp>();
  private status = new Map<string, StatusFind>();

  constructor(private wppsGateway: WppsGateway) {}

  private setupRealtimeTime(client: Whatsapp, sessionName: string) {
    client.onMessage(async (msg) => {
      this.wppsGateway.emitNewMessage(sessionName, {
        from: msg.from,
        body: msg.body,
        type: msg.type,
        timestamp: msg.timestamp,
        fromMe: msg.fromMe,
      });
    });
  }

  async initSessionByPhone(
    phone: string,
    sessionName: string,
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      create({
        session: sessionName,
        phoneNumber: phone,
        catchLinkCode: (code: string) => {
          resolve(code);
        },
      })
        .then((client: Whatsapp) => {
          this.clients.set(sessionName, client);
        })
        .catch((err) => reject(err));
    });
  }

  async initSessionForQr(sessionName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let resolved = false;

      const timer = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          reject(new BadRequestException('Timeout gerando QR-code'));
        }
      }, 15000);

      create({
        session: sessionName,
        useChrome: true,
        puppeteerOptions: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        catchQR: (base64Qrimg: string, asciiQr: string) => {
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            resolve(asciiQr);
          }
        },
        statusFind: (statusSession: StatusFind, session: string) => {
          // console.log('WPP statusFind:', statusSession, 'session:', session);
          // Se quiser, também pode resolver por um status que indique QR pronto
          if (!resolved) {
            if (statusSession === 'inChat') {
              resolve(`Sessão '${sessionName}' já está em execução.`);
            }
          }
        },
        logQR: false,
      })
        .then((client: Whatsapp) => {
          this.clients.set(sessionName, client);
          this.setupRealtimeTime(client, sessionName);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(new BadRequestException(`Já existe instacia criada`));
        });
    });
  }

  async getStatusSession(sessionName: string) {
    // console.log('Status: ', this.status);

    if (!this.status.has(sessionName)) {
      throw new NotFoundException('Sessão não inicializada');
    }

    const status = this.status.get(sessionName);

    return { status };
  }

  async listChatsOverview(sessionName: string) {
    const client = this.clients.get(sessionName);

    if (!client) throw new BadRequestException('Sessão não inicializada');

    const chats = await client.listChats({ onlyUsers: true, count: 50 });

    const result = await Promise.all(
      chats.map(async (chat) => {
        const chatId = chat.id._serialized;
        let lastMessage: {
          type: string;
          body?: string;
          fromMe: boolean;
          timestamp: number; //teste
        } | null = null;

        try {
          const messages = await client.getMessages(chatId, { count: 1 });
          if (messages.length > 0) {
            const msg = messages[0];
            lastMessage = {
              type: msg.type,
              body: msg.body,
              fromMe: msg.fromMe,
              timestamp: msg.t,
            };
          }
        } catch (e) {}

        return {
          id: chatId,
          phone: chat.id.user,
          name: chat.name ?? chat.contact.pushname,
          photo: chat.contact.profilePicThumbObj?.eurl,
          unreadCount: chat.unreadCount,
          lastMessage,
        };
      }),
    );

    return result;
  }

  async listChatsPeerId(sessionName: string, chatId: string) {
    const client = this.clients.get(sessionName);

    if (!client) throw new BadRequestException('Sessão não inicializada');

    try {
      const msgs = await client.getMessages(chatId, { count: 100 });
      // console.log('msg: ', msgs);
      const results = await Promise.all(
        msgs
          .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
          .map(async (m) => {
            const quoted = m.quotedMsgObj;
            let mediaBase64: string | null = null;

            if (m.type === 'sticker') {
              const buffer = await client.decryptFile(m);
              const compressedBuffer = await sharp(buffer)
                .resize(64, 64, { fit: 'inside' })
                .webp({ quality: 50 })
                .toBuffer();
              mediaBase64 = compressedBuffer.toString('base64');
            }

            return {
              from: m.from,
              to: m.to,
              type: m.type,
              msg: m.body ?? null,
              isNewMsg: m.recvFresh,
              from_msg: quoted ? { body: (quoted as any).body ?? null } : null,
              fromMe: m.fromMe,
              timestamp: m.t || m.timestamp,
              profilePicThumbUrl: m.sender?.profilePicThumbObj?.eurl ?? null,
              mimetype: m.mimetype ?? null,
              mediaBase64,
            };
          }),
      );

      return results;
    } catch (err) {
      console.log('Error: ', err);
      if (err)
        throw new BadRequestException(
          "O campo 'chatId' é obrigatório e não pode estar vazio.",
        );
    }
  }

  async sendMsg({
    sessionName,
    to,
    msg,
  }: {
    sessionName: string;
    to: string;
    msg: string;
  }) {
    const client = this.clients.get(sessionName);

    if (!client) throw new BadRequestException('Sessão não inicializada');

    // if (!msg) adicionar DTO
    //   throw new BadRequestException('Campo messagem é um campo obrigatório');
    // if (!to)
    //   throw new BadRequestException('Campo telefone é um campo obrigatório');

    const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
    await client.sendText(chatId, msg);

    return { to: chatId, msg };
  }

  async sendMsgWithImg({
    sessionName,
    to,
    imgUri,
    msg,
  }: {
    sessionName: string;
    to: string;
    imgUri: string;
    msg: string;
  }) {
    const client = this.clients.get(sessionName);

    // console.log('Url: ', imgUri);
    if (!client) throw new BadRequestException('Sessão não inicializada');

    const chatId = to.includes('@c.us') ? to : `${to}@c.us`;

    await client.sendFile(chatId, imgUri, { caption: msg });

    return { to: chatId, msg };
  }
}
