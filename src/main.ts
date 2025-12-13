// Nest
import { NestFactory } from '@nestjs/core';
import 'dotenv/config';

// Modulos
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Guard
import { RulesGuard } from './guard/rules/rules.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('v0');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
