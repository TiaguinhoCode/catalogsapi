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
import { AuthGuard } from './../users/auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

// Utils
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Categoria'),
      category: await this.categoriesService.create(createCategoryDto),
    };
  }

  @Get()
  async findAll(@Query() paginationDto?: PaginationDto) {
    const resp = await this.categoriesService.findAll(paginationDto);

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      categories: (resp as any).categories,
      totalItems: (resp as any).totalItems,
      totalPages: (resp as any).totalPages,
      currentPage: (resp as any).currentPage,
    };
  }

  @Get('filter')
  async findPerFilter(
    @Query('search') search?: string,
    @Query() paginationDto?: PaginationDto,
  ) {
    const resp = await this.categoriesService.findPerFilter(
      search,
      paginationDto,
    );

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      categories: (resp as any).categories,
      totalItems: (resp as any).totalItems,
      totalPages: (resp as any).totalPages,
      currentPage: (resp as any).currentPage,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      category: await this.categoriesService.findPerId(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Categoria'),
      category: await this.categoriesService.update(id, updateCategoryDto),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('Categoria'),
      category: await this.categoriesService.remove(id),
    };
  }
}
