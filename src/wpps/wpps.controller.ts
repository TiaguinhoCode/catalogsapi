// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

// Service
import { WppsService } from './wpps.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('wpps')
export class WppsController {
  constructor(private readonly wppsService: WppsService) {}

  @Post('session/:sessionName/phone')
  async startByPhone(
    @Param('sessionName') sessionName: string,
    @Body() data: { phone: string },
  ) {
    return {
      msg: 'ok',
      code: await this.wppsService.initSessionByPhone(data.phone, sessionName),
    };
  }

  @Get('session/:sessionName/qrcode')
  async getAuthQrCode(@Param('sessionName') sessionName: string) {
    const createSession = await this.wppsService.initSessionForQr(sessionName);

    if (createSession === "Sessão '11342' já está em execução.")
      return { status: createSession };

    return createSession;
  }

  @Get('session/:sessionName/status')
  async getStatusSession(@Param('sessionName') sessionName: string) {
    return this.wppsService.getStatusSession(sessionName);
  }

  @Get('session/:sessionName/chat')
  async listChat(@Param('sessionName') sessionName: string) {
    return {
      msg: 'ok',
      chats: await this.wppsService.listChatsOverview(sessionName),
    };
  }

  @Get('session/:sessionName/chat/:chatId')
  async listChatMessages(
    @Param('sessionName') sessionName: string,
    @Param('chatId') chatId: string,
  ) {
    return {
      msg: 'filter applied',
      chats: await this.wppsService.listChatsPeerId(sessionName, chatId),
    };
  }

  @Post('session/:sessionName/chat/sendmsg/:phone')
  async sendMsg(
    @Param('sessionName') sessionName: string,
    @Param('phone') phone: string,
    @Body() data: { msg: string },
  ) {
    return {
      msg: 'Message sent successfully',
      chat: await this.wppsService.sendMsg({
        sessionName,
        to: phone,
        msg: data.msg,
      }),
    };
  }

  @Post('session/:sessionName/chat/file/:phone')
  async sendMsgWithImg(
    @Param('sessionName') sessionName: string,
    @Param('phone') phone: string,
    @Body() data: { msg: string; imgUrl: string },
  ) {
    return {
      msg: 'Message sent successfully',
      chat: await this.wppsService.sendMsgWithImg({
        sessionName,
        to: phone,
        imgUri: data.imgUrl,
        msg: data.msg,
      }),
    };
  }
}
