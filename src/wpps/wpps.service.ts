// Nest
import { BadRequestException, Injectable } from '@nestjs/common';

// Bibliotecas
import { create, Whatsapp } from '@wppconnect-team/wppconnect';

// wppconnect.defaultLogger.level = 'silly';
// wppconnect.defaultLogger.transports.forEach((t) => (t.silent = true));

@Injectable()
export class WppsService {
  private clients = new Map<string, Whatsapp>();

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
      create({
        session: sessionName,
        catchQR: (base64Qrimg, asciiQr) => {
          resolve(asciiQr);
        },
      })
        .then((client) => {
          this.clients.set(sessionName, client);
        })
        .catch((err) => reject(err));
    });
  }

  async listConversations(sessionName: string) {
    const client = this.clients.get(sessionName);

    if (!client) throw new BadRequestException('Sessão não inicializada');

    const chats = await client.listChats({ onlyUsers: true, count: 50 });

    const result = await Promise.all(
      chats.map(async (chat) => {
        const chatId = chat.id._serialized;
        let lastMessage: {
          body?: string;
          fromMe: boolean;
          timestamp: number;
        } | null = null;

        try {
          const messages = await client.getMessages(chatId, { count: 1 });
          console.log('Msg: ', messages);
          if (messages.length > 0) {
            const msg = messages[0];
            lastMessage = {
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
          lastMessage,
        };
      }),
    );

    return result;
  }
}
