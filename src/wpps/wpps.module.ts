// Nest
import { Module } from '@nestjs/common';

// Services
import { WppsService } from './wpps.service';

// Controller
import { WppsController } from './wpps.controller';

// Gateway
import { WppsGateway } from './gateway/wpps.gateway';

@Module({
  controllers: [WppsController],
  providers: [WppsService, WppsGateway],
})
export class WppsModule {}
