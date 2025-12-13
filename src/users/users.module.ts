// Nest
import { Module } from '@nestjs/common';

// Services
import { UsersService } from './users.service';

// Controller
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
