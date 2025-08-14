// Nest
import { Controller, Get, Param, Query } from '@nestjs/common';

// Service
import { ProductsService } from './products.service';

// Tipagem
import { requestResponseMessages } from './../utils/common/messages/requestResponse.messages';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAllProducts() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: await this.productsService.findAllProducts(),
    };
  }

  @Get('filter')
  async findAllProductsByFilter(
    @Query('brands') brandsId?: string,
    @Query('categories') categoriesId?: string,
  ) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      products: await this.productsService.findAllProductsByFilter(
        brandsId,
        categoriesId,
      ),
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
