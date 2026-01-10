// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';

// Services
import { StocksService } from './stocks.service';

// Middleware
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';
import { FindProductDto } from './dto/find-product.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async createStock(@Body() data: CreateStockDto) {
    console.log('Dados: ', data);
    const stock = await this.stocksService.createStock(data);

    if ('statusCode' in stock) {
      return stock;
    }

    return {
      msg: 'Successfully Created',
      ...stock,
    };
  }

  @Get('all')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async findAllStock() {
    return { msg: 'ok', stocks: await this.stocksService.findAllStock() };
  }

  @Get('')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async findStock(@Query() query: FindProductDto) {
    const { page, limit, search } = query;

    return {
      msg: 'ok',
      stocks: await this.stocksService.findStock({ page, limit, search }),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stocksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stocksService.update(+id, updateStockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
