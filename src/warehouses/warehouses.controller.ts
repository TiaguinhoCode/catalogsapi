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
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { FindWarehouseDto } from './dto/find-warehouse.dto';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async createWarehouse(@Body() data: CreateWarehouseDto) {
    return {
      msg: 'Successfully Created',
      warehouse: await this.warehousesService.createWarehouse(data),
    };
  }

  @Get('all')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async findAllWarehouse() {
    return {
      msg: 'ok',
      warehouses: await this.warehousesService.findAllWarehouses(),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async findWarehouse(@Query() query: FindWarehouseDto) {
    const { isActive, limit, page, search } = query;

    return {
      msg: 'ok',
      warehouses: await this.warehousesService.findWarehouses({
        page,
        limit,
        search,
        isActive,
      }),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async findOneWarehouse(@Param('id') id: string) {
    return {
      msg: 'ok',
      warehouse: await this.warehousesService.findOneWarehouse(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async updateWarehouse(
    @Param('id') id: string,
    @Body() data: UpdateWarehouseDto,
  ) {
    return {
      msg: 'update successfully',
      warehouse: await this.warehousesService.updateWarehouse({ id, data }),
    };
  }

  @Delete()
  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  async removeWarehouse(@Body('ids') ids: string[]) {
    return {
      msg: 'remove successfully',
      warehouses: await this.warehousesService.removeWarehouse(ids),
    };
  }
}
