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
import { WarehousesService } from './warehouses.service';

// Middleware
import { AuthGuard } from './../users/auth/auth.guard';
import { RulesGuard } from './../rules/guards/rules.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';

// Utils
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async create(@Body() data: CreateWarehouseDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Almoxarifado'),
      warehouse: await this.warehousesService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async findAll(@Query() paginationDto?: PaginationDto) {
    const result = await this.warehousesService.findAll(paginationDto);

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      warehouses: (result as any).warehouses,
      totalItems: (result as any).totalItems,
      totalPages: (result as any).totalPages,
      currentPage: (result as any).currentPage,
    };
  }

  @Get('filter')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async findAllWarehousesByFilter(
    @Query('is_active') is_active?: string,
    @Query('search') search?: string,
    @Query() paginationDto?: PaginationDto,
  ) {
    const result = await this.warehousesService.findPerFilter(
      is_active,
      search,
      paginationDto,
    );

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      warehouses: (result as any).warehouses,
      totalItems: (result as any).totalItems,
      totalPages: (result as any).totalPages,
      currentPage: (result as any).currentPage,
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      warehouse: await this.warehousesService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async update(
    @Param('id') id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('almoxarifado'),
      warehouse: await this.warehousesService.update(id, updateWarehouseDto),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.ESTOQUE, rules.DONO)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('almoxarifado'),
      warehouse: await this.warehousesService.remove(id),
    };
  }
}
