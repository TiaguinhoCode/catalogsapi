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
import { CategoriesService } from './categories.service';

// Middleware
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

// Tipagem
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async createCategory(@Body() data: CreateCategoryDto) {
    return {
      msg: 'Successfully Created',
      category: await this.categoriesService.createCategory(data),
    };
  }

  @Get()
  async findCategories(
    @Query() pagination: PaginationDto,
    @Query('search') search?: string,
  ) {
    return {
      msg: 'ok',
      categories: await this.categoriesService.findCategories({
        pagination,
        search,
      }),
    };
  }

  @Get('all')
  async findAllCategories() {
    return {
      msg: 'ok',
      categories: await this.categoriesService.findAllCategories(),
    };
  }

  @Get(':id')
  async findOneCategories(@Param('id') id: string) {
    return {
      msg: 'ok',
      brand: await this.categoriesService.findOneCategories(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async updateCategory(
    @Param('id') id: string,
    @Body() data: UpdateCategoryDto,
  ) {
    return {
      msg: 'ok',
      category: await this.categoriesService.updateCategories({
        id,
        data,
      }),
    };
  }

  @Delete('')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async removeCategories(@Body('ids') ids: string[]) {
    return {
      msg: 'remove successfully',
      categories: await this.categoriesService.removeCategories(ids),
    };
  }
}
