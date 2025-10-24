// whatsapp.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import * as wppconnect from '@wppconnect-team/wppconnect';
import { ChatOverview } from 'src/type/chat/chatOverview';

export interface InitSessionResult {
  status: 'initialized' | 'connected' | 'error';
  qr?: string;
  message?: string;
}

@Injectable()
export class ChatsService {
  private client: any;
  private readonly logger = new Logger(ChatsService.name);
  private session = 'default-session';

  constructor(private eventEmitter: EventEmitter2) {}

  async initSession(): Promise<InitSessionResult> {
    if (this.client && this.client.isConnected) {
      return { status: 'connected' };
    }

    try {
      const qrPromise = new Promise<InitSessionResult>((resolve, reject) => {
        let resolved = false;

        wppconnect
          .create({
            session: this.session,
            useChrome: true,
            puppeteerOptions: {
              headless: true,
              args: ['--no-sandbox', '--disable-setuid-sandbox'],
            },
            catchQR: (base64QrImage, attempt) => {
              if (!resolved) {
                resolved = true;
                resolve({ status: 'initialized', qr: base64QrImage });
              }
            },
            statusFind: (status, session) => {
              this.logger.log(`Status da sessão ${session}: ${status}`);
            },
          })
          .then(async (client) => {
            this.client = client;

            client.onAnyMessage((message) => {
              this.logger.log(`Nova mensagem: ${message.body}`);
              this.eventEmitter.emit('whatsapp.message', message);
            });

            client.onAck((ack) => {
              this.eventEmitter.emit('whatsapp.ack', ack);
            });

            client.onStateChange((state) => {
              this.eventEmitter.emit('whatsapp.state', state);
            });

            client.onStreamChange((streamState) => {
              this.eventEmitter.emit('whatsapp.stream', streamState);
            });

            client.onStreamChange(async (state: string) => {
              if (state === 'CONNECTED') {
                this.logger.log('Sessão sincronizada com sucesso!');
                if (!resolved) {
                  resolved = true;
                  resolve({ status: 'connected' });
                }
              }
            });
          })
          .catch((err) => {
            if (!resolved) reject(err);
          });
      });

      return await qrPromise;
    } catch (err) {
      this.logger.error('Erro ao iniciar sessão WhatsApp', err);
      return { status: 'error', message: err.message };
    }
  }

  async listChats(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<ChatOverview[]> {
    await this.initSession();

    try {
      const chats = await this.client.listChats({ count: page * pageSize });

      const paginatedChats = chats.slice(
        (page - 1) * pageSize,
        page * pageSize,
      );
      const chatOverviews: ChatOverview[] = [];

      for (const chat of paginatedChats) {
        const chatId =
          typeof chat.id === 'string' ? chat.id : chat.id?._serialized;
        const messages = chatId
          ? await this.client.getMessages(chatId, { count: 1 })
          : [];
        const lastMessage = messages[0] || {};

        const chatType: 'individual' | 'group' | 'channel' = chat.isGroup
          ? 'group'
          : chat.isBroadcast
            ? 'channel'
            : 'individual';

        const messageText =
          lastMessage.type === 'image' ||
          lastMessage.type === 'video' ||
          lastMessage.type === 'document'
            ? lastMessage.caption || '(Mídia sem legenda)'
            : lastMessage.body || 'Sem mensagens';

        chatOverviews.push({
          id: chatId,
          contactName: chat.contact?.pushname || chat.name || 'Desconhecido',
          profilePic: chat.contact?.profilePicThumbObj?.img || '',
          lastMessage: messageText,
          isSentByMe: !!lastMessage.fromMe,
          chatType,
          groupName: chatType === 'group' ? chat.name : undefined,
        });
      }

      return chatOverviews;
    } catch (err) {
      this.logger.error('Erro ao listar chats', err);
      throw err;
    }
  }

  async sendMessage(to: string, message: string) {
    await this.initSession();

    if (!this.client) {
      throw new Error('Cliente WhatsApp não inicializado.');
    }

    try {
      // O número precisa estar no formato: 5511999999999@c.us
      const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
      const result = await this.client.sendText(chatId, message);

      this.logger.log(`Mensagem enviada para ${chatId}: ${message}`);
      return {
        status: 'success',
        to: chatId,
        message: message,
        result,
      };
    } catch (err) {
      this.logger.error('Erro ao enviar mensagem', err);
      return { status: 'error', message: err.message };
    }
  }
}
