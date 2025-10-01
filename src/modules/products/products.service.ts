// Nest
import { Injectable } from '@nestjs/common';

// Service
import { PrismaService } from './../../database/prisma.service';
import { listProducts } from './services/list.products.services';

// Tipagem
import { PaginationDto } from './../pagination/dto/pagination.dto';
import { filterParams } from './../../type/filterParams';

@Injectable()
export class ProductsService {
  constructor(private readonly client: PrismaService) {}

  async findAll(pagination?: PaginationDto) {
    return listProducts({ client: this.client, pagination });
  }

  async findPerFilter({
    params,
    pagination,
  }: {
    params: filterParams;
    pagination?: PaginationDto;
  }) {
    return listProducts({ client: this.client, params, pagination });
  }

  async findOne(id: string) {
    return listProducts({ client: this.client, id });
  }
}
