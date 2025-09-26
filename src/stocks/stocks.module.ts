// Nest
import { Module } from '@nestjs/common';

// Service
import { StocksService } from './stocks.service';
import { FiltersService } from './filters/filters.service';

// Contorller
import { StocksController } from './stocks.controller';
import { FiltersController } from './filters/filters.controller';

@Module({
  controllers: [StocksController, FiltersController],
  providers: [StocksService, FiltersService],
})
export class StocksModule {}