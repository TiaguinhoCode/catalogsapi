// Nest
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

// Services
import { ChatsService } from './chats.service';
import { WppAuthService } from './services/whatsapp-auth.service';
import { WppClientService } from './services/whatsapp-client.service';

// Controller
import { ChatsController } from './chats.controller';

// Gateway
import { ChatsGateway } from './chat.gateway';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [EventEmitterModule.forRoot(), HttpModule],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsGateway, WppAuthService, WppClientService],
  exports: [ChatsService],
})
export class ChatsModule {}
