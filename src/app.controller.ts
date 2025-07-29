// Nest
import { Controller, Get, Request } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getInfo(@Request() req) {
    const url = `${req.protocol}://${req.get('host')}`;

    return {
      docs: url,
      version: 1,
      health: true,
    };
  }
}
