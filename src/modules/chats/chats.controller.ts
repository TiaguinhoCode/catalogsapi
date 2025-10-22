// Nest
import { Body, Controller, Get, Post } from '@nestjs/common';

// Services
import { ChatsService } from './chats.service';

// Tipagem
import { SendMenssagemDto } from '../categories/dto/send-menssagem.dto';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('auth/qr')
  qr() {
    return this.chatsService.initSession();
  }

  @Get('overview')
  chat() {
    return this.chatsService.listChats(1, 10);
  }

  @Post('send')
  async send(@Body() msg: SendMenssagemDto) {
    return this.chatsService.sendMessage(msg);
  }
}
