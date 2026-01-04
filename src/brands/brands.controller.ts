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
import { Roles } from 'src/guard/rules/roles.decorator';
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';

// Dto
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async createBrands(@Body() data: CreateBrandDto) {
    return {
      msg: 'Successfully Created',
      brand: await this.brandsService.createBrands(data),
    };
  }

  @Get()
  async findBrands(
    @Query() pagination: PaginationDto,
    @Query('search') search?: string,
  ) {
    return await this.brandsService.findBrands({
      pagination,
      search,
    });
  }

  @Get('all')
  async findAllBrands() {
    return { msg: 'ok', brands: await this.brandsService.findAllBrands() };
  }

  @Get(':id')
  async findOneBrand(@Param('id') id: string) {
    return { msg: 'ok', brand: await this.brandsService.findOneBrand(id) };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async updateBrands(@Param('id') id: string, @Body() data: UpdateBrandDto) {
    return {
      msg: 'update successfully',
      brand: await this.brandsService.updatBrandse({ id, data }),
    };
  }

  @Delete()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async removeBrands(@Body('ids') ids: string[]) {
    return {
      msg: 'remove successfully',
      brand: await this.brandsService.removeBrands(ids),
    };
  }
}
