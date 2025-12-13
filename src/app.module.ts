// Nest
import { forwardRef, Module } from '@nestjs/common';

// Controller
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Modulos
import { WppsModule } from './wpps/wpps.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompaniesModule } from './companies/companies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// Guards
import { RulesGuard } from './guard/rules/rules.guard';

@Module({
  imports: [
    WppsModule,
    PrismaModule,
    CompaniesModule,
    UsersModule,
    AuthModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [AppService, RulesGuard],
})
export class AppModule {}
