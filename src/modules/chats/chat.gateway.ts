import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@WebSocketGateway({ cors: true })
@Injectable()
export class ChatsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly httpService: HttpService) {}

  handleConnection(client: any) {
    console.log('Cliente conectado:', client.id);
  }

  handleDisconnect(client: any) {
    console.log('Cliente desconectado:', client.id);
  }

  @OnEvent('whatsapp.message')
  async handleWhatsappMessage(payload: any) {
    // payload = a nova mensagem que chegou
    this.server.emit('newMessage', payload);

    const webhookUrl =
      //'https://economicaautocenter.autotasker.com.br/webhook-test/whatsapp';
      'https://economicaautocenter.autotasker.com.br/webhook/whatsapp';

    try {
      const response = await firstValueFrom(
        this.httpService.post(webhookUrl, payload),
      );
      // console.log('Webhook enviado com sucesso:', response.data);
      // console.log('pyload:', payload);
    } catch (error) {
      console.error('Erro ao enviar webhook pro n8n:', error);
    }
  }
}
