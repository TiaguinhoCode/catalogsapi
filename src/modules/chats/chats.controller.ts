import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { requestResponseMessages } from 'src/utils/common/messages/requestResponse.messages';

@Controller('/chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Get('/auth/qr')
  getQRCode() {
    return this.chatsService.initSession();
  }

  @Get('overview')
  async chat() {
    const chats = await this.chatsService.listChats();

    return { msg: requestResponseMessages.SUCCESSFUL_REQUEST, chats };
  }

  @Post('send')
  async sendMenssagem(@Body() body: { to: string; msg: string }) {
    const { to, msg } = body;

    return this.chatsService.sendMessage(to, msg);
  }
}
