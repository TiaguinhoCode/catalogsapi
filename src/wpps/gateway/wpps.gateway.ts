// Nest
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
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
    // console.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    // console.log(`Cliente desconectado: ${client.id}`);
  }

  emitNewMessage(sessionName: string, data: any) {
    this.server.to(sessionName).emit('new_message', data);
  }

  @SubscribeMessage('join_session')
  handleJoinSession(client: Socket, { sessionName }: { sessionName: string }) {
    // console.log(`Client joined session: ${sessionName}`);
    client.join(sessionName);
  }

  @OnEvent('wpp.message')
  async handleWhatsappMessage(payload: any) {
    // console.log('📨 Mensagem recebida:', payload);

    // ✅ ADICIONE: Filtrar apenas mensagens recebidas (não suas)
    if (payload.fromMe) {
      console.log('⏭️ Ignorando mensagem enviada por mim');
      return;
    }

    this.server.emit('newMessage', payload);

    const webhookUrl =
      'https://logichub.vps-kinghost.net/webhook-test/3af945f9-d454-44ba-97bd-5a844530ab3a';

    try {
      // console.log('🔄 Enviando webhook para n8n...');

      const response = await firstValueFrom(
        this.httpService.post(webhookUrl, payload, {
          timeout: 10000, // ✅ ADICIONE: timeout de 10s
          headers: {
            'Content-Type': 'application/json',
          },
        }),
      );

      // console.log('✅ Webhook enviado com sucesso:', response.status);
      // console.log('📦 Resposta do n8n:', response.data);
    } catch (error) {
      console.error('❌ Erro ao enviar webhook pro n8n:');
      console.error('Status:', error.response?.status);
      console.error('Mensagem:', error.message);
      console.error('Dados:', error.response?.data);
    }
  }
}
