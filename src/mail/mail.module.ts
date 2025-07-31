// Nest
import { Module } from '@nestjs/common';

// Service
import { MailService } from './mail.service';

@Module({
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
