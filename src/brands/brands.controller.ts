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
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      brands: await this.brandsService.findAll(),
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
