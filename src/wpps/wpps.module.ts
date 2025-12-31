// Nest
import { Module } from '@nestjs/common';

// Services
import { WppsService } from './wpps.service';

// Controller
import { WppsController } from './wpps.controller';

// Gateway
import { WppsGateway } from './gateway/wpps.gateway';

// Bibliotecas
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [HttpModule, ConfigModule, EventEmitterModule.forRoot()],
  controllers: [WppsController],
  providers: [WppsService, WppsGateway],
})
export class WppsModule {}
