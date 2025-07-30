// Nest
import { Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Data
import { DatabaseModule } from './database/database.module';

// Modulo
import { RulesModule } from './rules/rules.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, RulesModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
