// Nest
import { Module } from '@nestjs/common';

// Service
import { StocksService } from './stocks.service';

// Contorller
import { StocksController } from './stocks.controller';

@Module({
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
