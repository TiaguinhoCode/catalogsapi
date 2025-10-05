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

// Service
import { StocksService } from './stocks.service';

// Utils
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';

// Midldleware
import { AuthGuard } from './../users/auth/auth.guard';
import { RulesGuard } from './../rules/guards/rules.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Controller('/stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async create(@Body() data: CreateStockDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Produto'),
      product: await this.stocksService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findAll(@Query() paginationDto?: PaginationDto) {
    const result = await this.stocksService.findAll(paginationDto);

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: (result as any).formatted,
      totalItems: (result as any).totalItems,
      totalPages: (result as any).totalPages,
      currentPage: (result as any).currentPage,
    };
  }

  @Get('filters')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findPerFilter(
    @Query('is_active') is_active?: string,
    @Query('brands') brandsId?: string,
    @Query('categories') categoriesId?: string,
    @Query('warehouse') warehouseId?: string,
    @Query('search') search?: string,
    @Query('orderByStock') orderByStock?: 'asc' | 'desc',
    @Query() paginationDto?: PaginationDto,
  ) {
    const isActiveParsed =
      is_active === 'true' ? true : is_active === 'false' ? false : undefined;

    const result = await this.stocksService.findPerFilter({
      params: {
        is_active: isActiveParsed,
        brand_id: brandsId,
        category_id: categoriesId,
        stock: { warehouse_id: warehouseId },
        search,
      },
      orderByStock,
      pagination: paginationDto,
    });

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      product: (result as any).formatted,
    };
  }

  @Get('filters/summary')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async stockSummary(
    @Query('is_active') is_active?: string,
    @Query('brands') brandsId?: string,
    @Query('categories') categoriesId?: string,
    @Query('warehouse') warehouseId?: string,
    @Query('search') search?: string,
  ) {
    const isActiveParsed =
      is_active === 'true' ? true : is_active === 'false' ? false : undefined;

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      stock: await this.stocksService.summary({
        is_active: isActiveParsed,
        brand_id: brandsId,
        category_id: categoriesId,
        stock: { warehouse_id: warehouseId },
        search,
      }),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findPeerId(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      product: await this.stocksService.findPeerId(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async update(@Param('id') id: string, @Body() data: UpdateStockDto) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Produto'),
      product: await this.stocksService.update(id, data),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('Produto'),
      product: await this.stocksService.remove(id),
    };
  }
}
