// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

// Service
import { WppsService } from './wpps.service';

@Controller('wpps')
export class WppsController {
  constructor(private readonly wppsService: WppsService) {}

  @Post('session/:sessionName/phone')
  async startByPhone(
    @Param('sessionName') sessionName: string,
    @Body() data: { phone: string },
  ) {
    const resp = await this.wppsService.initSessionByPhone(data.phone, sessionName);

    return {msg: 'ok', code: resp}
  }

  @Get('session/:sessionName/qrcode')
  async getAuthQrCode(@Param('sessionName') sessionName: string) {
    return this.wppsService.initSessionForQr(sessionName)
  }

  @Get('session/:sessionName/chat')
  async listCHat(@Param('sessionName') sessionName: string) {
    return this.wppsService.listConversations(sessionName)
  }
}
