// whatsapp.service.ts
import { Injectable, Logger } from '@nestjs/common';
import * as wppconnect from '@wppconnect-team/wppconnect';

export interface ChatOverview {
  id: string;
  contactName: string;
  profilePic: string;
  lastMessage: string;
  isSentByMe: boolean;
  chatType: 'individual' | 'group' | 'channel';
  groupName?: string;
}

export interface InitSessionResult {
  qr?: string; // base64 ou URL do QR
  status: 'initialized' | 'connected' | 'error';
  message?: string;
}

@Injectable()
export class ChatsService {
  private client: any;
  private readonly logger = new Logger(ChatsService.name);
  private session = 'default-session'; // ou parametrizar
  private currentQr: string | null = null;

  /** Inicializa a sessão, retorna QR ou status */
  async initSession(): Promise<InitSessionResult> {
    if (this.client && this.client.isConnected) {
      return { status: 'connected' };
    }

    try {
      this.currentQr = null;

      this.client = await wppconnect.create({
        session: this.session,
        useChrome: true,
        puppeteerOptions: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        catchQR: (base64QrImage, asciiQR, attempt, urlCode) => {
          this.logger.log(`QR code recebido, tentativa ${attempt}`);
          this.currentQr = base64QrImage;
        },
        statusFind: (statusSession) => {
          switch (statusSession) {
            case 'isLogged':
              this.logger.log('Cliente WhatsApp conectado');
              break;
            case 'notLogged':
              this.logger.log('Cliente WhatsApp não está conectado');
              break;
            default:
              this.logger.log(`Status da sessão: ${statusSession}`);
              break;
          }
        },
      });

      if (this.currentQr) {
        return { status: 'initialized', qr: this.currentQr };
      } else {
        return { status: 'connected' };
      }
    } catch (err) {
      this.logger.error('Erro ao iniciar sessão WhatsApp', err);
      return { status: 'error', message: err.message };
    }
  }

  async listChats(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<ChatOverview[]> {
    if (!this.client) {
      throw new Error('WhatsApp client not initialized');
    }

    try {
      const chats = await this.client.listChats({ count: page * pageSize });
      const paginatedChats = chats.slice(
        (page - 1) * pageSize,
        page * pageSize,
      );
      const chatOverviews: ChatOverview[] = [];

      for (const chat of paginatedChats) {
        const messages = await this.client.getMessages(chat.id._serialized, {
          count: 1,
        });
        const lastMessage = messages[0] || {};

        let chatType: 'individual' | 'group' | 'channel' = 'individual';
        if (chat.isGroup) {
          chatType = 'group';
        } else if (chat.isBroadcast) {
          chatType = 'channel';
        }

        let messageText = 'Sem mensagens';
        if (lastMessage) {
          if (
            lastMessage.type === 'image' ||
            lastMessage.type === 'video' ||
            lastMessage.type === 'document'
          ) {
            messageText = lastMessage.caption || '(Mídia sem legenda)';
          } else if (lastMessage.body) {
            messageText = lastMessage.body;
          }
        }

        const contactName =
          chat.contact?.pushname || chat.name || 'Desconhecido';

        chatOverviews.push({
          id: chat.id._serialized,
          contactName,
          profilePic: chat.contact?.profilePicThumbObj?.img || '',
          lastMessage: messageText,
          isSentByMe: lastMessage.fromMe || false,
          chatType,
          groupName: chatType === 'group' ? chat.name : undefined,
        });
      }

      return chatOverviews;
    } catch (err) {
      this.logger.error('Failed to list chats', err);
      throw err;
    }
  }
}
