// Nest
import { Injectable } from '@nestjs/common';

// Service
import { PrismaService } from './../../database/prisma.service';

// Utils
import { createCategories } from './services/create.categories.service';
import { listCategories } from './services/list.categories.service';
import { updateCategories } from './services/update.categories.service';
import { removeCategories } from './services/remove.categories.service';

// Tipagem
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateCategoryDto) {
    return createCategories({ client: this.client, data });
  }

  async findAll(pagination?: PaginationDto) {
    return listCategories({ client: this.client, pagination });
  }

  async findPerFilter(search?: string, pagination?: PaginationDto) {
    return listCategories({ client: this.client, search, pagination });
  }

  async findPerId(id: string) {
    return listCategories({ client: this.client, id });
  }

  async update(id: string, data: UpdateCategoryDto) {
    return updateCategories({ client: this.client, id, data });
  }

  async remove(id: string) {
    return removeCategories({ client: this.client, id });
  }
}
