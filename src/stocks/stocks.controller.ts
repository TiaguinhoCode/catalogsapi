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
} from '@nestjs/common';

// Service
import { StocksService } from './stocks.service';

// Utils
import { requestResponseMessages } from '../utils/common/messages/requestResponse.messages';

// Midldleware
import { AuthGuard } from '../users/auth/auth.guard';
import { RulesGuard } from '../rules/guards/rules.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('/stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async create(@Body() data: CreateStockDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Produto'),
      product: await this.stocksService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: await this.stocksService.findAll(),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      product: await this.stocksService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async update(
    @Param('id') id: string,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Produto'),
      product: await this.stocksService.update(+id, updateStockDto),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
