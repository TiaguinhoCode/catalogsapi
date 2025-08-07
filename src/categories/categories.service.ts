// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Service
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { CategoriesMessages } from './../utils/common/messages/categories.menssages';

// Tipagem
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateCategoryDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'name',
      value: data.name,
      msg: CategoriesMessages.CATEGORIES_ALREADY_HAS_REGISTRATION,
    });

    const category = await this.client.categories.create({ data });

    return category;
  }

  async findAll() {
    const categories = await this.client.categories.findMany();

    if (!categories)
      throw new NotFoundException(CategoriesMessages.CATEGORIES_NOT_FOUND);

    return categories;
  }

  async findOne(id: string) {
    const category = await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'id',
      id: true,
      value: id,
      msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
    });

    return category;
  }

  async update(id: string, data: UpdateCategoryDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'id',
      id: true,
      value: id,
      msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
    });

    const category = await this.client.categories.update({
      where: { id },
      data,
    });

    return category;
  }

  async remove(id: string) {
    await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'id',
      id: true,
      value: id,
      msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
    });

    const category = await this.client.categories.delete({ where: { id } });

    return category;
  }
}
