// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Tipagem
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FindCategoriesDto } from './dto/find-categories.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly client: PrismaService) {}

  async createCategory(data: CreateCategoryDto) {
    try {
      return await this.client.categories.create({ data });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new BadRequestException('Já existe uma marca com esse nome');
      }
      throw err;
    }
  }

  async findCategories({ search, page = 1, limit = 10 }: FindCategoriesDto) {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.client.categories.findMany({
        skip,
        take: limit,
        where: search
          ? { name: { contains: search, mode: 'insensitive' } }
          : {},
      }),
      this.client.categories.count(),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
    };
  }

  async findAllCategories() {
    return await this.client.categories.findMany();
  }

  async findOneCategories(id: string) {
    const category = await this.client.categories.findUnique({ where: { id } });

    if (!category) throw new NotFoundException('Categoria não encontrada');

    return category;
  }

  async updateCategories({
    id,
    data,
  }: {
    id: string;
    data: UpdateCategoryDto;
  }) {
    try {
      const updated = await this.client.categories.update({
        where: { id },
        data,
      });

      return updated;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException('Categoria não encontrada');
      }
      throw err;
    }
  }

  async removeCategories(ids: string[]) {
    if (!ids || ids.length === 0) {
      throw new BadRequestException(
        'É necessário fornecer ao menos um ID para deletar',
      );
    }

    if (ids.length > 100) {
      throw new BadRequestException(
        'Não é permitido deletar mais de 100 marcas de uma vez',
      );
    }

    try {
      const deleted = await this.client.categories.deleteMany({
        where: { id: { in: ids } },
      });

      if (deleted.count === 0) {
        throw new NotFoundException('Categoria não encontrada');
      }

      return deleted;
    } catch (err) {
      if (
        err instanceof NotFoundException ||
        err instanceof BadRequestException
      ) {
        throw err;
      }
      throw err;
    }
  }
}
