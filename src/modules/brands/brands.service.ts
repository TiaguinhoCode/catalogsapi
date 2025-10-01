// Nest
import { Injectable } from '@nestjs/common';

// Service
import { PrismaService } from './../../database/prisma.service';
import { createBrands } from './services/create.brands.service';
import { listBrands } from './services/list.brands.service';
import { updateBrands } from './services/update.brands.service';
import { removeBrands } from './services/remove.brands.service';

// Tipagem
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateBrandDto) {
    return createBrands({ client: this.client, data });
  }

  async findAll(pagination?: PaginationDto) {
    return listBrands({ client: this.client, pagination });
  }

  async findBrandPeerId(id: string) {
    return listBrands({ client: this.client, id });
  }

  async findPerFilter({
    search,
    pagination,
  }: {
    search?: string;
    pagination?: PaginationDto;
  }) {
    return listBrands({ client: this.client, search, pagination });
  }

  async update({ id, data }: { id: string; data: UpdateBrandDto }) {
    return updateBrands({ client: this.client, id, data });
  }

  async remove(id: string) {
    return removeBrands({ client: this.client, id });
  }
}
