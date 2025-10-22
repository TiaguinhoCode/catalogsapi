// Nest
import { Injectable, Logger } from '@nestjs/common';
import * as wppconnect from '@wppconnect-team/wppconnect';

import { InitSessionResult } from '../../type/chat/InitSession/index';
import { ChatOverview } from '../../type/chat/chatOverview/index';
import { SendMenssagemDto } from '../categories/dto/send-menssagem.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class ChatsService {
  private client: any;
  private readonly logger = new Logger(ChatsService.name);
  private readonly session = 'default-session';
  private currentQr: string | null = null;
  private isInitializing = false;
  constructor(private eventEmitter: EventEmitter2) {}

  private async ensureSession(): Promise<void> {
    if (this.client && this.client.isConnected) {
      this.logger.log('Sessão já conectada, pulando inicialização.');
      return;
    }

    if (this.isInitializing) {
      this.logger.warn('Sessão já está sendo inicializada, aguardando...');
      while (this.isInitializing) {
        await new Promise((r) => setTimeout(r, 500));
      }
      return;
    }

    this.isInitializing = true;
    try {
      this.currentQr = null;

      this.logger.log('Criando nova sessão wppconnect...');
      this.client = await wppconnect.create({
        headless: true,
        session: this.session,
        useChrome: true,
        puppeteerOptions: {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        catchQR: (base64QrImage, asciiQR, attempt, urlCode) => {
          this.logger.log(`QR code recebido (tentativa ${attempt})`);
          this.currentQr = base64QrImage;
        },
        statusFind: (statusSession) => {
          this.logger.log(`Status da sessão: ${statusSession}`);
        },
      });

      this.client.onMessage((message) => {
        this.logger.log(
          `Mensagem recebida de ${message.from}: ${message.body}`,
        );
        this.eventEmitter.emit('whatsapp.message', message);
      });

      this.logger.log(
        'Sessão criada. Aguardando estado “connected” ou carregamento de chats.',
      );

      // Aguardar até que listChats retorne algo ou timeout
      const maxAttempts = 10;
      let attempt = 0;
      let chats: any[] = [];
      do {
        await new Promise((r) => setTimeout(r, 1000));
        chats = (await this.client.listChats({ count: 1 })) || [];
        this.logger.log(
          `Tentativa ${attempt + 1}: chats carregados = ${chats.length}`,
        );
        attempt++;
      } while (attempt < maxAttempts && chats.length === 0);

      if (chats.length === 0) {
        this.logger.warn(
          'Não foi possível carregar chats após espera — pode haver sincronização pendente.',
        );
      } else {
        this.logger.log('Chats carregados com sucesso.');
      }
    } catch (err) {
      this.logger.error('Erro ao iniciar sessão WhatsApp', err);
      throw new Error('Falha ao inicializar sessão WhatsApp');
    } finally {
      this.isInitializing = false;
    }
  }

  async initSession(): Promise<InitSessionResult> {
    try {
      await this.ensureSession();
      return this.currentQr
        ? { status: 'initialized', qr: this.currentQr }
        : { status: 'connected' };
    } catch (err) {
      return { status: 'error', message: err.message };
    }
  }

  async listChats(
    page: number = 1,
    pageSize: number = 10,
  ): Promise<ChatOverview[]> {
    await this.ensureSession();

    try {
      const chats = await this.client.listChats({ count: page * pageSize });
      this.logger.log(
        `listChats retornou ${Array.isArray(chats) ? chats.length : 0} itens.`,
      );

      if (!Array.isArray(chats) || chats.length === 0) {
        this.logger.warn('Nenhum chat disponível para listar.');
        return [];
      }

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

  /**
   * Envia uma mensagem de texto para um chat/contato.
   * @param to Número no formato apropriado (ex: '55119xxxxxxxx@c.us')
   * @param message Texto da mensagem a ser enviada
   */
  async sendMessage(msg: SendMenssagemDto): Promise<any> {
    await this.ensureSession();

    try {
      this.logger.log(`Enviando mensagem para ${msg.to}: "${msg.message}"`);
      const result = this.client.sendText(msg.to, msg.message);
      this.logger.log(`Mensagem enviada para ${msg.to} com sucesso`, result);
      return result;
    } catch (err) {
      this.logger.error(`Erro ao enviar mensagem para ${msg.to}`, err);
      throw err;
    }
  }
}
