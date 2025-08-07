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
import { ProductsService } from './products.service';

// Middleware
import { AuthGuard } from './../users/auth/auth.guard';
import { RulesGuard } from './../rules/guards/rules.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';

// Tipagem
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { requestResponseMessages } from './../utils/common/messages/requestResponse.messages';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async create(@Body() createProductDto: CreateProductDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Produto'),
      product: await this.productsService.create(createProductDto),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
