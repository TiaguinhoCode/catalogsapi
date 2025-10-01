// Nest
import { Controller, Get, Param, Query } from '@nestjs/common';

// Service
import { ProductsService } from './products.service';

// Tipagem
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts(@Query() paginationDto?: PaginationDto) {
    const result = await this.productsService.findAll(paginationDto);

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: (result as any).formatted,
      totalItems: (result as any).totalItems,
      totalPages: (result as any).totalPages,
      currentPage: (result as any).currentPage,
    };
  }

  @Get('filter')
  async findAllProductsByFilter(
    @Query('brands') brandsId?: string,
    @Query('categories') categoriesId?: string,
    @Query('search') search?: string,
    @Query() paginationDto?: PaginationDto,
  ) {
    const result = await this.productsService.findPerFilter({
      params: {
        is_active: true,
        stock: { warehouse_name: 'Estoque Online' },
        brandsId,
        categoriesId,
        search,
      },
      pagination: paginationDto,
    });

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: (result as any).formatted,
      totalItems: (result as any).totalItems,
      totalPages: (result as any).totalPages,
      currentPage: (result as any).currentPage,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      product: await this.productsService.findOne(id),
    };
  }
}
