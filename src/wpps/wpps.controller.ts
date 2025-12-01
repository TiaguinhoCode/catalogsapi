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
<<<<<<< HEAD
    return await this.wppsService.initSessionByPhone({
      sessionName,
      phoneNumber: data.phone,
    });
=======
    const resp = await this.wppsService.initSessionByPhone(data.phone, sessionName);

    return {msg: 'ok', code: resp}
>>>>>>> 45ae3b1cf6dc48bca5c9c11eca96e26ca877ebf2
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
