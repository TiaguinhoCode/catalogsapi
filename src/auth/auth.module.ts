// Nest
import { forwardRef, Global, Module } from '@nestjs/common';

// Bibliotecas
import { JwtModule } from '@nestjs/jwt';

// Services
import { AuthService } from './auth.service';

// Module
import { UsersModule } from 'src/users/users.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Global()
@Module({
  imports: [
    forwardRef(() => UsersModule),
    PrismaModule,
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
