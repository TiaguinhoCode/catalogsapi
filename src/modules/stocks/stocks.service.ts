// Nest
import { Injectable } from '@nestjs/common';

// Services
import { PrismaService } from './../../database/prisma.service';
import { createStock } from './services/create.stock.service';
import { updateStock } from './services/update.stock.service';
import { listStockService } from './services/list.stock.service';
import { removeStock } from './services/remove.stock.service';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';
import { filterParams } from './../../type/filterParams/index';

@Injectable()
export class StocksService {
  constructor(private readonly client: PrismaService) {}

  create(data: CreateStockDto) {
    return createStock({ client: this.client, data });
  }

  findAll(pagination?: PaginationDto) {
    return listStockService({ client: this.client, pagination });
  }

  async findPerFilter({
    params,
    orderByStock,
    pagination,
  }: {
    params: filterParams;
    orderByStock?: 'asc' | 'desc';
    pagination?: PaginationDto;
  }) {
    return listStockService({
      client: this.client,
      params,
      orderByStock,
      pagination,
    });
  }

  async findPeerId(id: string) {
    return listStockService({ client: this.client, id });
  }

  async update(id: string, data: UpdateStockDto) {
    return updateStock({ client: this.client, id, data });
  }

  async remove(id: string) {
    return removeStock({ client: this.client, id });
  }
}
