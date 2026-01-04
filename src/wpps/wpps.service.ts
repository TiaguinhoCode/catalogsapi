// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  OnModuleInit,
} from '@nestjs/common';

// Bibliotecas
import { create, StatusFind, Whatsapp } from '@wppconnect-team/wppconnect';
import { WppsGateway } from './gateway/wpps.gateway';
import { EventEmitter2 } from '@nestjs/event-emitter';

import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';

@Injectable()
export class WppsService implements OnModuleInit {
  private clients = new Map<string, Whatsapp>();
  private status = new Map<string, StatusFind | string>();
  private qrCodes = new Map<string, { base64: string; timestamp: number }>();
  private qrTimers = new Map<string, NodeJS.Timeout>();
  private reconnectionAttempts = new Map<string, number>();
  private isReconnecting = new Map<string, boolean>();
  private isInitializing = new Map<string, boolean>(); // ✅ NOVO: Lock de inicialização
  private initializationPromises = new Map<string, Promise<any>>(); // ✅ NOVO: Promises em andamento
  private readonly tokensPath = path.join(process.cwd(), 'tokens');
  private readonly MAX_RECONNECT_ATTEMPTS = 3;

  constructor(
    private wppsGateway: WppsGateway,
    private eventEmitter: EventEmitter2,
  ) {}

  async onModuleInit() {
    // console.log('🔄 Iniciando restauração de sessões...');
    this.restoreAllSessions().catch((err) => {
      console.error('❌ Erro ao restaurar sessões:', err.message);
    });
  }

  private async restoreAllSessions() {
    try {
      if (!fs.existsSync(this.tokensPath)) {
        // console.log('📁 Nenhuma sessão anterior encontrada.');
        return;
      }

      const sessionFolders = fs
        .readdirSync(this.tokensPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

      if (sessionFolders.length === 0) {
        // console.log('📁 Nenhuma sessão anterior encontrada.');
        return;
      }

      // console.log(
      //   `📱 Encontradas ${sessionFolders.length} sessão(ões) para restaurar`,
      // );

      const restorePromises = sessionFolders.map((sessionName) =>
        this.restoreSession(sessionName)
          .then(() => {
            // console.log(`✅ Sessão '${sessionName}' restaurada com sucesso`);
          })
          .catch((error) => {
            console.error(
              `⚠️ Sessão '${sessionName}' não pôde ser restaurada:`,
              error.message,
            );
            this.status.set(sessionName, 'disconnectedMobile');
          }),
      );

      await Promise.allSettled(restorePromises);
      // console.log('✅ Processo de restauração concluído');
    } catch (error) {
      console.error('❌ Erro ao restaurar sessões:', error);
    }
  }

  private async restoreSession(sessionName: string): Promise<string | void> {
    // ✅ Verifica se já está inicializando
    if (this.isInitializing.get(sessionName)) {
      // console.log(`⏳ Sessão '${sessionName}' já está sendo inicializada`);
      return this.initializationPromises.get(sessionName);
    }

    // ✅ Verifica se já tem cliente conectado
    if (this.clients.has(sessionName)) {
      const status = this.status.get(sessionName);
      if (status === 'inChat') {
        // console.log(`✅ Sessão '${sessionName}' já está conectada`);
        return Promise.resolve();
      }
    }

    // ✅ Marca como inicializando
    this.isInitializing.set(sessionName, true);

    const promise = new Promise<string | void>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.isInitializing.set(sessionName, false);
        this.initializationPromises.delete(sessionName);
        reject(new Error('Timeout ao restaurar sessão'));
      }, 20000);

      create({
        session: sessionName,
        useChrome: true,
        puppeteerOptions: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        catchQR: (base64Qrimg: string, asciiQr: string) => {
          this.saveQrCodeInMemory(sessionName, base64Qrimg);
          // resolve(isImg ? asciiQr : base64Qrimg);
          resolve(base64Qrimg);
        },
        statusFind: (statusSession: StatusFind) => {
          this.status.set(sessionName, statusSession);

          if (statusSession === 'inChat' || statusSession === 'qrReadSuccess') {
            clearTimeout(timeout);
            this.isInitializing.set(sessionName, false);
            this.initializationPromises.delete(sessionName);
            resolve();
          }

          if (statusSession === 'disconnectedMobile') {
            clearTimeout(timeout);
            this.isInitializing.set(sessionName, false);
            this.initializationPromises.delete(sessionName);
            this.scheduleReconnection(sessionName);
            resolve();
          }
        },
        logQR: false,
      })
        .then((client: Whatsapp) => {
          this.clients.set(sessionName, client);
          this.setupRealtimeTime(client, sessionName);
          this.reconnectionAttempts.set(sessionName, 0);
          this.isInitializing.set(sessionName, false);
          this.initializationPromises.delete(sessionName);
          clearTimeout(timeout);
          resolve();
        })
        .catch((err) => {
          clearTimeout(timeout);
          this.isInitializing.set(sessionName, false);
          this.initializationPromises.delete(sessionName);
          reject(err);
        });
    });

    // ✅ Salva a promise para reutilizar
    this.initializationPromises.set(sessionName, promise);
    return promise;
  }

  private scheduleReconnection(sessionName: string) {
    if (this.isReconnecting.get(sessionName)) {
      return;
    }

    const attempts = this.reconnectionAttempts.get(sessionName) || 0;

    if (attempts >= this.MAX_RECONNECT_ATTEMPTS) {
      // console.log(
      //   `⚠️ Sessão '${sessionName}' atingiu o máximo de tentativas de reconexão`,
      // );
      this.status.set(sessionName, 'disconnectedMobile');
      return;
    }

    this.isReconnecting.set(sessionName, true);
    this.reconnectionAttempts.set(sessionName, attempts + 1);

    // console.log(
    //   `🔄 Agendando reconexão para '${sessionName}' (tentativa ${attempts + 1}/${this.MAX_RECONNECT_ATTEMPTS})`,
    // );

    const delay = Math.min(5000 * Math.pow(2, attempts), 30000);

    setTimeout(async () => {
      try {
        await this.restoreSession(sessionName);
        // console.log(`✅ Sessão '${sessionName}' reconectada com sucesso`);
        this.isReconnecting.set(sessionName, false);
      } catch (error) {
        console.error(
          `❌ Falha na reconexão de '${sessionName}':`,
          error.message,
        );
        this.isReconnecting.set(sessionName, false);
        if (attempts + 1 < this.MAX_RECONNECT_ATTEMPTS) {
          this.scheduleReconnection(sessionName);
        }
      }
    }, delay);
  }

  private saveQrCodeInMemory(sessionName: string, base64Qrimg: string) {
    if (this.qrTimers.has(sessionName)) {
      clearTimeout(this.qrTimers.get(sessionName));
    }

    this.qrCodes.set(sessionName, {
      base64: base64Qrimg,
      timestamp: Date.now(),
    });

    const timer = setTimeout(() => {
      this.qrCodes.delete(sessionName);
      this.qrTimers.delete(sessionName);
      // console.log(`QR Code da sessão '${sessionName}' removido da memória`);
    }, 50000);

    this.qrTimers.set(sessionName, timer);
  }

  getQrCodeFromMemory(sessionName: string): string | null {
    const qrData = this.qrCodes.get(sessionName);

    if (!qrData) {
      return null;
    }

    const elapsed = Date.now() - qrData.timestamp;
    if (elapsed > 50000) {
      this.qrCodes.delete(sessionName);
      return null;
    }

    return qrData.base64;
  }

  private setupRealtimeTime(client: Whatsapp, sessionName: string) {
    client.onStateChange((state) => {
      this.status.set(sessionName, state);

      if (state === 'CONFLICT' || state === 'UNPAIRED') {
        // console.log(`⚠️ Sessão '${sessionName}' desconectada`);
        this.clients.delete(sessionName);
        this.scheduleReconnection(sessionName);
      }
    });

    client.onMessage(async (msg) => {
      try {
        let contactName = 'Desconhecido';
        let photo: string | undefined;

        try {
          const contact = await client.getContact(msg.from);
          contactName =
            contact.name || contact.pushname || msg.from.split('@')[0];
        } catch (e) {
          console.log('⚠️ Erro ao buscar contato:', e.message);
        }

        try {
          const profilePic = await client.getProfilePicFromServer(msg.from);
          photo = profilePic?.eurl;
        } catch (e) {
          console.log('⚠️ Erro ao buscar foto:', e.message);
        }

        const quoted = (msg as any).quotedMsg;
        let quotedMediaBase64: string | null = null;

        if (quoted && ['sticker', 'image'].includes(quoted.type)) {
          try {
            const quotedBuffer = await client.decryptFile(quoted);

            if (quoted.type === 'sticker') {
              const compressedBuffer = await sharp(quotedBuffer)
                .resize(64, 64, { fit: 'inside' })
                .webp({ quality: 40 })
                .toBuffer();
              quotedMediaBase64 = compressedBuffer.toString('base64');
            } else if (quoted.type === 'image') {
              const thumbnail = await sharp(quotedBuffer)
                .resize(500, 500, { fit: 'inside' })
                .jpeg({
                  quality: 80,
                  chromaSubsampling: '4:4:4',
                  mozjpeg: true,
                })
                .toBuffer();
              quotedMediaBase64 = thumbnail.toString('base64');
            }
          } catch (e) {
            console.error(
              '❌ Erro ao processar mídia da mensagem respondida:',
              e.message,
            );
          }
        }

        let mediaBase64: string | null = null;
        let mimetype: string | undefined;

        if (['sticker', 'image'].includes(msg.type)) {
          try {
            mimetype = msg.mimetype;
            const buffer = await client.decryptFile(msg);

            if (msg.type === 'sticker') {
              const compressedBuffer = await sharp(buffer)
                .resize(64, 64, { fit: 'inside' })
                .webp({ quality: 40 })
                .toBuffer();
              mediaBase64 = compressedBuffer.toString('base64');
              mimetype = 'image/webp';
              // console.log('✅ Sticker processado');
            } else if (msg.type === 'image') {
              const thumbnail = await sharp(buffer)
                .resize(500, 500, { fit: 'inside' })
                .jpeg({
                  quality: 80,
                  chromaSubsampling: '4:4:4',
                  mozjpeg: true,
                })
                .toBuffer();
              mediaBase64 = thumbnail.toString('base64');
              mimetype = 'image/jpeg';
              // console.log('✅ Imagem processada');
            }
          } catch (e) {
            console.error(
              `❌ Erro ao processar mídia do tipo ${msg.type}:`,
              e.message,
            );
            mediaBase64 = null;
          }
        }

        const messageData = {
          sessionName,
          id: msg.from,
          phone: msg.from.split('@')[0],
          name: contactName,
          photo,
          lastMessage: {
            type: msg.type,
            msg: msg.body,
            mediaBase64,
            mimetype,
            fromMe: msg.fromMe,
            timestamp: msg.timestamp,
            isReply: quoted ? true : false,
            from_msg: quoted
              ? {
                  body: quoted.body ?? null,
                  type: quoted.type ?? null,
                  mimetype: quoted.mimetype ?? null,
                  mediaBase64: quotedMediaBase64,
                }
              : null,
          },
        };
        this.wppsGateway.emitNewMessage(sessionName, messageData);
        this.eventEmitter.emit('wpp.message', messageData);
      } catch (error) {
        console.error('❌ Erro ao processar mensagem:', error.message);

        const basicMessageData = {
          id: msg.from,
          sessionName,
          phone: msg.from.split('@')[0],
          name: 'Desconhecido',
          unreadCount: 0,
          lastMessage: {
            type: msg.type,
            body: msg.body,
            fromMe: msg.fromMe,
            timestamp: msg.timestamp,
            isReply: false,
            from_msg: null,
          },
        };

        this.wppsGateway.emitNewMessage(sessionName, basicMessageData);
        this.eventEmitter.emit('wpp.message', basicMessageData);
      }
    });
  }

  async initSessionByPhone(
    phone: string,
    sessionName: string,
  ): Promise<string> {
    // ✅ Verifica se já está inicializando
    if (this.isInitializing.get(sessionName)) {
      throw new BadRequestException(
        'Sessão já está sendo inicializada. Aguarde alguns segundos.',
      );
    }

    // ✅ Verifica se já está conectado
    if (this.clients.has(sessionName)) {
      const status = this.status.get(sessionName);
      if (status === 'inChat') {
        throw new BadRequestException('Sessão já está conectada.');
      }
    }

    this.isInitializing.set(sessionName, true);

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.isInitializing.set(sessionName, false);
        reject(new BadRequestException('Timeout ao iniciar sessão'));
      }, 30000);

      create({
        session: sessionName,
        phoneNumber: phone,
        catchLinkCode: (code: string) => {
          clearTimeout(timeout);
          this.isInitializing.set(sessionName, false);
          resolve(code);
        },
      })
        .then((client: Whatsapp) => {
          this.clients.set(sessionName, client);
          this.setupRealtimeTime(client, sessionName);
          this.isInitializing.set(sessionName, false);
          clearTimeout(timeout);
        })
        .catch((err) => {
          clearTimeout(timeout);
          this.isInitializing.set(sessionName, false);
          reject(err);
        });
    });
  }

  async initSessionForQr(
    sessionName: string,
    isImg?: boolean,
  ): Promise<string> {
    // ✅ Verifica se já tem QR Code válido
    const existingQr = this.getQrCodeFromMemory(sessionName);
    if (existingQr) {
      // console.log(`✅ QR Code existente retornado para '${sessionName}'`);
      return Promise.resolve(existingQr);
    }

    // ✅ Verifica se já está conectado
    if (this.clients.has(sessionName)) {
      const status = this.status.get(sessionName);
      if (status === 'inChat') {
        return Promise.resolve(`Sessão '${sessionName}' já está conectada.`);
      }
    }

    // ✅ Verifica se já está inicializando
    if (this.isInitializing.get(sessionName)) {
      throw new BadRequestException(
        'Sessão já está sendo inicializada. Aguarde alguns segundos e tente novamente.',
      );
    }

    // ✅ Se tem promise em andamento, aguarda ela
    if (this.initializationPromises.has(sessionName)) {
      // console.log(`⏳ Aguardando inicialização existente de '${sessionName}'`);
      try {
        await this.initializationPromises.get(sessionName);
        // Após aguardar, tenta novamente
        return this.initSessionForQr(sessionName, isImg);
      } catch (err) {
        // Se falhou, tenta criar nova sessão
        console.log(`⚠️ Inicialização anterior falhou, tentando novamente...`);
      }
    }

    this.isInitializing.set(sessionName, true);

    return new Promise((resolve, reject) => {
      let resolved = false;

      const timer = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          this.isInitializing.set(sessionName, false);
          reject(new BadRequestException('Timeout gerando QR-code'));
        }
      }, 30000);

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
            this.saveQrCodeInMemory(sessionName, base64Qrimg);
            this.isInitializing.set(sessionName, false);
            clearTimeout(timer);
            resolve(isImg ? asciiQr : base64Qrimg);
          }
        },
        statusFind: (statusSession: StatusFind) => {
          this.status.set(sessionName, statusSession);

          if (!resolved && statusSession === 'inChat') {
            resolved = true;
            this.isInitializing.set(sessionName, false);
            clearTimeout(timer);
            resolve(`Sessão '${sessionName}' conectada com sucesso.`);
          }
        },
        logQR: false,
      })
        .then((client: Whatsapp) => {
          this.clients.set(sessionName, client);
          this.setupRealtimeTime(client, sessionName);
          this.isInitializing.set(sessionName, false);
        })
        .catch((err) => {
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            this.isInitializing.set(sessionName, false);
            reject(
              new BadRequestException(`Erro ao criar sessão: ${err.message}`),
            );
          }
        });
    });
  }

  async getStatusSession(sessionName: string) {
    const hasClient = this.clients.has(sessionName);
    const hasStatus = this.status.has(sessionName);

    if (!hasClient && !hasStatus) {
      return {
        id: null,
        sessionName,
        status: 'Sessão não encontrada',
        isConnected: false,
        isReconnecting: this.isReconnecting.get(sessionName) || false,
        isInitializing: this.isInitializing.get(sessionName) || false, // ✅ NOVO
        reconnectAttempts: this.reconnectionAttempts.get(sessionName) || 0,
      };
    }

    const status = this.status.get(sessionName) || 'notLogged';
    const client = this.clients.get(sessionName);
    let phone;

    if (client) {
      try {
        phone = await client.getWid();
      } catch (e) {}
    }

    return {
      id: phone,
      sessionName,
      status: this.getStatusDescription(status),
      isConnected: (hasClient && status === 'inChat') || status === 'CONNECTED',
      isReconnecting: this.isReconnecting.get(sessionName) || false,
      isInitializing: this.isInitializing.get(sessionName) || false, // ✅ NOVO
      reconnectAttempts: this.reconnectionAttempts.get(sessionName) || 0,
    };
  }

  async forceReconnect(sessionName: string): Promise<void> {
    // console.log(`🔄 Forçando reconexão de '${sessionName}'`);

    // ✅ Verifica se já está inicializando
    if (this.isInitializing.get(sessionName)) {
      throw new BadRequestException(
        'Sessão já está sendo inicializada. Aguarde alguns segundos.',
      );
    }

    // Limpa cliente antigo
    if (this.clients.has(sessionName)) {
      try {
        const client = this.clients.get(sessionName);
        await (client as any).close();
      } catch (e) {}
      this.clients.delete(sessionName);
    }

    // Reset flags
    this.reconnectionAttempts.set(sessionName, 0);
    this.isReconnecting.set(sessionName, false);
    this.isInitializing.set(sessionName, false);
    this.initializationPromises.delete(sessionName);

    // ✅ Aguarda um pouco para garantir que o navegador fechou
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Inicia nova conexão
    await this.restoreSession(sessionName);
  }

  async disconnectSession(sessionName: string): Promise<void> {
    const client = this.clients.get(sessionName);

    if (client) {
      try {
        await client.close();
        this.clients.delete(sessionName);
        this.status.set(sessionName, 'disconnectedMobile');
        // console.log(`✅ Sessão '${sessionName}' desconectada`);
      } catch (err) {
        throw new BadRequestException(
          `Erro ao desconectar sessão: ${err.message}`,
        );
      }
    }

    // Limpa todas as flags
    this.isReconnecting.delete(sessionName);
    this.reconnectionAttempts.delete(sessionName);
    this.isInitializing.delete(sessionName);
    this.initializationPromises.delete(sessionName);
    this.qrCodes.delete(sessionName);

    if (this.qrTimers.has(sessionName)) {
      clearTimeout(this.qrTimers.get(sessionName));
      this.qrTimers.delete(sessionName);
    }
  }

  private getStatusDescription(status: StatusFind | string): string {
    const descriptions: Record<string, string> = {
      notLogged: 'Não autenticado',
      qrReadSuccess: 'QR Code lido com sucesso',
      qrReadFail: 'Falha ao ler QR Code',
      autocloseCalled: 'Sessão fechada automaticamente',
      disconnectedMobile: 'Desconectado do celular',
      deleteToken: 'Token deletado',
      chatsAvailable: 'Chats disponíveis',
      deviceNotConnected: 'Dispositivo não conectado',
      serverWssNotConnected: 'Servidor WSS não conectado',
      noOpenBrowser: 'Navegador não aberto',
      initBrowser: 'Navegador iniciando',
      inChat: 'Conectado e pronto',
      initWhatsapp: 'WhatsApp iniciando',
      erroQRCode: 'Erro no QR Code',
      successChat: 'Chat iniciado com sucesso',
      waitForLogin: 'Aguardando login',
      waitChat: 'Aguardando chat',
      successOpenBrowser: 'Navegador aberto com sucesso',
      connected: 'Conectado',
      CONFLICT: 'Conflito - outra sessão ativa',
      UNPAIRED: 'Dispositivo desemparelhado',
    };

    return descriptions[status] || status;
  }

  // ... resto dos métodos (listChatsOverview, listChatsPeerId, etc.) permanecem iguais
  async listChatsOverview(sessionName: string) {
    const client = this.clients.get(sessionName);

    if (!client) {
      throw new BadRequestException(
        'Sessão não conectada. Use /status para verificar o estado.',
      );
    }

    const chats = await client.listChats({ onlyUsers: true, count: 50 });

    const result = await Promise.all(
      chats.map(async (chat) => {
        const chatId = chat.id._serialized;
        let lastMessage: {
          type: string;
          body?: string;
          fromMe: boolean;
          timestamp: number;
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

    if (!client) {
      throw new BadRequestException(
        'Sessão não conectada. Use /status para verificar o estado.',
      );
    }

    try {
      const msgs = await client.getMessages(chatId, { count: 50 });

      let chatProfilePic;
      try {
        chatProfilePic = await client.getProfilePicFromServer(chatId);
      } catch (e) {}

      const results = await Promise.all(
        msgs
          .sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
          .map(async (m) => {
            const quoted = (m as any).quotedMsg;
            let mediaBase64: string | null = null;

            let senderProfilePic;
            try {
              if (m.sender?.id) {
                senderProfilePic = await client.getProfilePicFromServer(
                  (m.sender.id as any)._serialized,
                );
              }
            } catch (e) {}

            if (['sticker', 'image'].includes(m.type)) {
              try {
                const buffer = await client.decryptFile(m);

                if (m.type === 'sticker') {
                  const compressedBuffer = await sharp(buffer)
                    .resize(64, 64, { fit: 'inside' })
                    .webp({ quality: 40 })
                    .toBuffer();
                  mediaBase64 = compressedBuffer.toString('base64');
                } else if (m.type === 'image') {
                  const thumbnail = await sharp(buffer)
                    .resize(500, 500, { fit: 'inside' })
                    .jpeg({
                      quality: 80,
                      chromaSubsampling: '4:4:4',
                      mozjpeg: true,
                    })
                    .toBuffer();
                  mediaBase64 = thumbnail.toString('base64');
                }
              } catch (e) {
                console.error(
                  `Erro ao processar mídia do tipo ${m.type}:`,
                  e.message,
                );
                mediaBase64 = null;
              }
            }

            return {
              from: m.from,
              to: m.to,
              type: m.type,
              msg: m.type === 'image' ? m.caption : (m.body ?? null),
              isNewMsg: m.recvFresh,
              isReply: quoted ? true : false,
              from_msg: quoted
                ? {
                    body: (quoted as any).body ?? null,
                    type: (quoted as any).type ?? null,
                    mimetype: (quoted as any).mimetype ?? null,
                  }
                : null,
              fromMe: m.fromMe,
              timestamp: m.t || m.timestamp,
              profilePicThumbUrl:
                senderProfilePic?.eurl || chatProfilePic?.eurl || '',
              mimetype: m.mimetype ?? null,
              mediaBase64,
            };
          }),
      );

      return results;
    } catch (err) {
      console.log('Error: ', err);
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

    if (!client) {
      throw new BadRequestException(
        'Sessão não conectada. Use /status para verificar o estado.',
      );
    }

    await client.sendText(to, msg);

    return { to, msg };
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

    if (!client) {
      throw new BadRequestException(
        'Sessão não conectada. Use /status para verificar o estado.',
      );
    }

    const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
    await client.sendFile(chatId, imgUri, { caption: msg });

    return { to: chatId, msg };
  }

  async getContactById(sessionName: string, contactId: string) {
    const client = this.clients.get(sessionName);

    if (!client) {
      throw new BadRequestException(
        'Sessão não conectada. Use /status para verificar o estado.',
      );
    }

    try {
      const contact = await client.getContact(contactId);

      if (!contact) {
        throw new NotFoundException('Contato não encontrado');
      }

      let profilePic;
      try {
        profilePic = await client.getProfilePicFromServer(contactId);
      } catch (e) {}

      return {
        id: (contact.id as any)._serialized,
        phone: (contact.id as any).user,
        name: contact.name || contact.pushname,
        pushname: contact.pushname,
        isMyContact: contact.isMyContact,
        profilePic,
      };
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }
      throw new BadRequestException('Erro ao buscar contato: ' + err.message);
    }
  }
}
