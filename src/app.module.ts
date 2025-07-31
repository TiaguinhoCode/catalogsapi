// Nest
import { Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Modulo
import { DatabaseModule } from './database/database.module';
import { RulesModule } from './rules/rules.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [DatabaseModule, RulesModule, CompaniesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
