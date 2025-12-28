// Nest
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';

// Service
import { WppsService } from './wpps.service';

// Guards
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

@Controller('wpps')
export class WppsController {
  constructor(private readonly wppsService: WppsService) {}

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
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

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
  @Get('session/:sessionName/qrcode')
  async getAuthQrCode(
    @Param('sessionName') sessionName: string,
    @Param('isImg') isImg?: string,
  ) {
    let isImgBolean = isImg === 'true' ? true : false;

    const createSession = await this.wppsService.initSessionForQr(
      sessionName,
      isImgBolean,
    );

    if (createSession === "Sessão '11342' já está em execução.")
      return { status: createSession };

    return createSession;
  }

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
  @Get('session/:sessionName/status')
  async getStatusSession(@Param('sessionName') sessionName: string) {
    return this.wppsService.getStatusSession(sessionName);
  }

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
  @Get('session/:sessionName/chat')
  async listChat(@Param('sessionName') sessionName: string) {
    return {
      msg: 'ok',
      chats: await this.wppsService.listChatsOverview(sessionName),
    };
  }

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
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

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
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

  @UseGuards(AuthGuard /*RulesGuard*/)
  // @Roles('Support')
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

  @UseGuards(AuthGuard)
  @Get('session/:sessionName/contact/:contactId')
  async getContact(
    @Param('sessionName') sessionName: string,
    @Param('contactId') contactId: string,
  ) {
    return {
      msg: 'filter applied',
      contact: await this.wppsService.getContactById(sessionName, contactId),
    };
  }
}
