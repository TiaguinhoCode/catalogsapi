// Nest
import { forwardRef, Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

// Service
import { AuthService } from './auth.service';

// Module
import { UsersModule } from './../users.module';
import { DatabaseModule } from './../../../database/database.module';

@Global()
@Module({
  imports: [
    forwardRef(() => UsersModule),
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
