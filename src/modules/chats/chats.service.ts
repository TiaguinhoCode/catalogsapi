// Nest
import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

// Bibliotecas
import * as wppconnect from '@wppconnect-team/wppconnect';

// Tipagem
import { ChatOverview } from 'src/type/chat/chatOverview';

export interface InitSessionResult {
  status: 'initialized' | 'connected' | 'error';
  qr?: string;
  message?: string;
}
interface ChatMessage {
  id: string;
  body: string;
  type: string;
  from: string;
  to: string;
  author?: string;
  isMe: boolean;
  contactName: string;
  profilePic: string;
  timestamp: string;
  chatId: string;
}

export interface MessagesResponse {
  messages: {
    contactName: string;
    profilePic: string;
    contactNumber: string;
    chat: ChatMessage[];
  }[];
  nextBeforeId?: string;
}

@Injectable()
export class ChatsService {
  private client: any;
  private readonly logger = new Logger(ChatsService.name);
  private session = 'default-session';

  constructor(private eventEmitter: EventEmitter2) {}

  async simulateTyping(to: string, durationMs: number = 2000) {
    await this.initSession();
    if (!this.client) throw new Error('WhatsApp client not initialized');

    const chatId = to.includes('@c.us') ? to : `${to}@c.us`;

    try {
      await this.client.markComposing(chatId);

      await new Promise((resolve) => setTimeout(resolve, durationMs));

      await this.client.markPaused(chatId);

      this.logger.log(`Simulação de digitação feita para ${chatId}`);
    } catch (err) {
      this.logger.error('Erro ao simular digitação', err);
    }
  }

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
        if (!chatId) continue;

        const messages = await this.client.getMessages(chatId, { count: 1 });
        const lastMessage = messages[0] || {};
        const chatType: 'individual' | 'group' | 'channel' = chat.isGroup
          ? 'group'
          : chat.isBroadcast
            ? 'channel'
            : 'individual';

        // Determine text / figurinha
        let messageText: string;
        if (lastMessage.type === 'sticker') {
          messageText = 'Figurinha'; // ou "Sticker" — escolhe seu idioma
        } else if (
          lastMessage.type === 'image' ||
          lastMessage.type === 'video' ||
          lastMessage.type === 'document'
        ) {
          messageText = lastMessage.caption || '(Mídia sem legenda)';
        } else {
          messageText = lastMessage.body || 'Sem mensagens';
        }
        // console.log('Dados: ', messages);
        let senderName = 'Desconhecido';
        if (lastMessage.fromMe) {
          senderName = 'Você';
        } else if (lastMessage.sender) {
          senderName =
            lastMessage.sender.pushname ||
            lastMessage.sender.verifiedName ||
            lastMessage.sender.formattedName ||
            lastMessage.sender.name ||
            lastMessage.sender.id?.user ||
            'Desconhecido';
        }

        const isSentByMe = !!lastMessage.fromMe;
        const ack = lastMessage.ack;
        const isRead = ack === 3;
        const isDelivered = ack === 2;
        const unreadCount = chat.unreadCount ?? 0;
        const lastMessageTime = lastMessage.timestamp
          ? new Date(lastMessage.timestamp * 1000)
          : null;

        let profilePic = chat.contact?.profilePicThumbObj?.img || '';
        if (!profilePic) {
          try {
            const picObj = await this.client.getProfilePicFromServer(chatId);
            profilePic = picObj?.img || '';
          } catch (err) {
            this.logger.warn(
              `Não conseguiu buscar foto para chatId ${chatId}: ${err}`,
            );
            profilePic = '';
          }
        }

        chatOverviews.push({
          id: chatId,
          contactName: chat.contact?.pushname || chat.name || 'Desconhecido',
          profilePic,
          lastMessage: messageText,
          senderName,
          isSentByMe,
          chatType,
          groupName: chatType === 'group' ? chat.name : undefined,
          unreadCount,
          isRead,
          isDelivered,
          lastMessageTime,
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
      const chatId = to.includes('@c.us') ? to : `${to}@c.us`;
      await this.simulateTyping(chatId, 2500);
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

  async getMessagesByChatId(
    chatId: string,
    page: number = 1,
    pageSize: number = 5,
    beforeId?: string,
  ): Promise<MessagesResponse> {
    await this.initSession();
    const targetId = chatId.includes('@c.us') ? chatId : `${chatId}@c.us`;

    const options: any = { count: pageSize };
    if (beforeId) {
      options.direction = 'before';
      options.id = beforeId;
    }

    const rawMessages = await this.client.getMessages(targetId, options);
    rawMessages.sort((a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0));

    // Buscar info do contato (nome + foto) uma única vez
    let contactName = 'Desconhecido';
    let profilePic = '';
    let contactNumber = targetId;

    try {
      const contact = await this.client.getContact(targetId);
      contactName =
        contact.pushname ||
        contact.verifiedName ||
        contact.formattedName ||
        contact.name ||
        contact.id?.user ||
        contactName;
    } catch (e) {
      this.logger.warn(`Erro ao buscar contato ${targetId}`, e);
    }
    try {
      const picObj = await this.client.getProfilePicFromServer(targetId);
      profilePic = picObj?.img || '';
    } catch (e) {
      this.logger.warn(`Não conseguiu buscar foto para ${targetId}`, e);
    }

    const chatMessages: ChatMessage[] = rawMessages.map((msg) => {
      const id =
        typeof msg.id === 'string' ? msg.id : msg.id?._serialized || '';
      const from = msg.from ?? '';
      const to = msg.to ?? '';
      const author = msg.author ?? undefined;
      const isMe = !!msg.fromMe;
      let body = msg.body ?? '';
      if (
        msg.type === 'image' ||
        msg.type === 'video' ||
        msg.type === 'document'
      ) {
        body = msg.caption || body;
      }
      const timestamp = msg.timestamp
        ? new Date(msg.timestamp * 1000).toISOString()
        : '';
      return {
        id,
        body,
        type: msg.type,
        from,
        to,
        author,
        isMe,
        contactName,
        profilePic,
        timestamp,
        chatId: targetId,
      };
    });

    const lastMsg = rawMessages[rawMessages.length - 1];
    const nextBeforeId = lastMsg
      ? typeof lastMsg.id === 'string'
        ? lastMsg.id
        : lastMsg.id?._serialized
      : undefined;

    return {
      messages: [
        {
          contactName,
          profilePic,
          contactNumber,
          chat: chatMessages,
        },
      ],
      nextBeforeId,
    };
  }

  async sendImage(
    to: string,
    pathOrBase64OrUrl: string,
    caption?: string,
  ): Promise<any> {
    await this.initSession();
    if (!this.client) throw new Error('WhatsApp client not initialized');

    const chatId = to.includes('@c.us') ? to : `${to}@c.us`;

    try {
      const result = await this.client.sendFile(chatId, pathOrBase64OrUrl, {
        caption: caption || '',
      });
      this.logger.log(`Imagem enviada para ${chatId} com legenda: ${caption}`);
      return { status: 'success', to: chatId, caption, result };
    } catch (err) {
      this.logger.error('Erro ao enviar imagem', err);
      throw err;
    }
  }
}
