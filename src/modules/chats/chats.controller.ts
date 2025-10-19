import { Controller, Get } from '@nestjs/common';
import { ChatsService } from './chats.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('auth/qr')
  qr() {
    return this.chatsService.initSession();
  }

  @Get()
  chat() {
    return this.chatsService.listChats(2, 10);
  }
}
