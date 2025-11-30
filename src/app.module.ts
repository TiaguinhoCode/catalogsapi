import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WppsModule } from './wpps/wpps.module';

@Module({
  imports: [WppsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
