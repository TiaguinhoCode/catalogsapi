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
import { SubcategoriesService } from './subcategories.service';

// Middleware
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

// Tipagem
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('subcategories')
export class SubcategoriesController {
  constructor(private readonly subcategoriesService: SubcategoriesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async createSubcategory(@Body() data: CreateSubcategoryDto) {
    return {
      msg: 'Successfully Created',
      subcategory: await this.subcategoriesService.createSubCategory(data),
    };
  }

  @Get('all')
  async findAllSubcategories() {
    return {
      msg: 'ok',
      subcategories: await this.subcategoriesService.findAllSubcategories(),
    };
  }

  @Get('')
  async findSubcategories(
    @Query() pagination: PaginationDto,
    @Query('search') search?: string,
  ) {
    return {
      msg: 'ok',
      subcategories: await this.subcategoriesService.findSubcategories({
        pagination,
        search,
      }),
    };
  }

  @Get(':id')
  async findOneSubcategories(@Param('id') id: string) {
    return {
      msg: 'ok',
      subcategory: await this.subcategoriesService.findOneSubcategory(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async updateSubcategory(
    @Param('id') id: string,
    @Body() data: UpdateSubcategoryDto,
  ) {
    return {
      msg: 'update successfully',
      subcategory: await this.subcategoriesService.updateSubCategory({
        id,
        data,
      }),
    };
  }

  @Delete()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async removeSubcategories(@Body('ids') ids: string[]) {
    return {
      msg: 'remove successfully',
      subcategories: await this.subcategoriesService.removeSubcategories(ids),
    };
  }
}
