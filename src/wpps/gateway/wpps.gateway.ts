// Nest
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { OnEvent } from '@nestjs/event-emitter';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

// Bibliotecas
import { Server, Socket } from 'socket.io';
import { firstValueFrom } from 'rxjs';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class WppsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly httpService: HttpService) {}

  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  emitNewMessage(sessionName: string, message: any) {
    this.server.emit('nova-mensagem', { sessionName, message });
  }

  @OnEvent('wpp.message')
  async handleWhatsappMessage(payload: any) {
    // console.log('Payload: ', payload);
    this.server.emit('newMessage', payload);
    const webhookUrl =
      'https://economicaautocenter.autotasker.com.br/webhook-test/whatsapp';
    // 'https://economicaautocenter.autotasker.com.br/webhook/whatsapp';
    try {
      const response = await firstValueFrom(
        this.httpService.post(webhookUrl, payload),
      );
    } catch (error) {
      // console.error('Erro ao enviar webhook pro n8n:', error);
    }
  }
}
