// Nest
import { forwardRef, Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Data
import { DatabaseModule } from './database/database.module';

// Modulo
import { RulesModule } from './rules/rules.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './users/auth/auth.module';

// Service
import { MailService } from './mail/mail.service';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    RulesModule,
    CompaniesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [MailService],
})
export class AppModule {}
