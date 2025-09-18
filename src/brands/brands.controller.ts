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
import { BrandsService } from './brands.service';

// Middleware
import { AuthGuard } from './../users/auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

// Utils
import { requestResponseMessages } from './../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async create(@Body() data: CreateBrandDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Marcas'),
      brand: await this.brandsService.create(data),
    };
  }

  @Get()
  async findAll(@Query() PaginationDto?: PaginationDto) {
    const result = await this.brandsService.findAll(PaginationDto);

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      brands: result.brands,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    };
  }

  @Get('filter')
  async findFilterServices(
    @Query('search') search?: string,
    @Query() paginationDto?: PaginationDto,
  ) {
    const result = await this.brandsService.findFilterServices(
      search,
      paginationDto,
    );

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      brands: result.brands,
      totalItems: result.totalItems,
      totalPages: result.totalPages,
      currentPage: result.currentPage,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      brand: await this.brandsService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Marcas'),
      brand: await this.brandsService.update(id, data),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('Marcas'),
      brand: await this.brandsService.remove(id),
    };
  }
}
