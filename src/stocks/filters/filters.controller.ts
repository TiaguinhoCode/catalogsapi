// Nest
import { Controller, Get, Query, UseGuards } from '@nestjs/common';

// Service
import { RulesGuard } from '../../rules/guards/rules.guard';
import { FiltersService } from './filters.service';

// Middleware
import { AuthGuard } from '../../users/auth/auth.guard';
import { Rules } from '../../rules/decorators/rules.decorator';
import { rules } from '../../rules/rules.enum';

// Utils
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';

// Tipagem
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('stocks/filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findProductFilter(
    @Query('is_active') is_active?: string,
    @Query('brands') brandsId?: string,
    @Query('categories') categoriesId?: string,
    @Query('warehouse') warehouseId?: string,
    @Query('search') search?: string,
    @Query('orderByStock') orderByStock?: 'asc' | 'desc',
    @Query('lowStock') lowStock?: string,
    @Query() paginationDto?: PaginationDto,
  ) {
    const isActiveParsed =
      is_active === 'true' ? true : is_active === 'false' ? false : undefined;
    const isLowStockParsed =
      lowStock === 'true' ? true : is_active === 'false' ? false : undefined;

    const result = await this.filtersService.findStockByFilter({
      params: {
        is_active: isActiveParsed,
        brand_id: brandsId,
        category_id: categoriesId,
        stock: { warehouse_id: warehouseId },
        search,
        orderByStock,
        lowStock: isLowStockParsed,
      },
      pagination: paginationDto,
    });

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: result.formatted,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    };
  }
}
