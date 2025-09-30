// Nest
import { Injectable } from '@nestjs/common';

// Bibliotecas
import { PrismaService } from './../../database/prisma.service';

// Services
import { createWarehouse } from './services/create.warehouse.service';
import { listWarehouse } from './services/list.warehouse.service';
import { updateWarehouse } from './services/update.warehouse.service';
import { removeWarehouse } from './services/remove.warehouse.service';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

// Tipagem
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class WarehousesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateWarehouseDto) {
    return createWarehouse({ client: this.client, data });
  }

  async findAll(pagination?: PaginationDto) {
    return listWarehouse({ client: this.client, pagination });
  }

  async findPerFilter(
    is_active?: string,
    search?: string,
    pagination?: PaginationDto,
  ) {
    return listWarehouse({
      client: this.client,
      is_active,
      search,
      pagination,
    });
  }

  async findOne(id: string) {
    return listWarehouse({ client: this.client, id });
  }

  async update(id: string, data: UpdateWarehouseDto) {
    return updateWarehouse({ client: this.client, id, data });
  }

  async remove(id: string) {
    return removeWarehouse({ client: this.client, id });
  }
}
