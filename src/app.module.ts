// Nest
import { Module } from '@nestjs/common';

// Controler
import { AppController } from './app.controller';

// Modulo
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
