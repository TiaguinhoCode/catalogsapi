// Nest
import { Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Modulo
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
