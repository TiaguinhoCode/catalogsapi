// Nest
import { Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Modulo
import { DatabaseModule } from './database/database.module';
import { RulesModule } from './rules/rules.module';

@Module({
  imports: [DatabaseModule, RulesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
