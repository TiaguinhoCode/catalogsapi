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
    return await this.wppsService.initSessionByPhone(sessionName, data.phone);
  }

  @Post('session/:sessionName/chat')
  async getChat(
    @Param('sessionName') sessionName: string,
    @Body()
    data: {
      count?: number;
      onlyUsers?: boolean;
      onlyGroups?: boolean;
      onlyWithUnread?: boolean;
    },
  ) {
    return await this.wppsService.listChats(sessionName, data);
  }
}
