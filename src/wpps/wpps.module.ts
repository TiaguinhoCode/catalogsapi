import { Module } from '@nestjs/common';
import { WppsService } from './wpps.service';
import { WppsController } from './wpps.controller';

@Module({
  controllers: [WppsController],
  providers: [WppsService],
})
export class WppsModule {}
