import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ChatsGateway } from './chat.gateway';

@Module({
  imports: [EventEmitterModule],
  controllers: [ChatsController],
  providers: [ChatsService, ChatsGateway],
  exports: [ChatsService],
})
export class ChatsModule {}
