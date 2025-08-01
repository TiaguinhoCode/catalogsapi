// Nest
import { Module } from '@nestjs/common';

// Services
import { UsersService } from './users.service';

// Controller
import { UsersController } from './users.controller';

// Modulo
import { MailModule } from './../mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
