// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Tipagem
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { Prisma } from 'generated/prisma/client';
import { FindSubCategoriesDto } from './dto/find-subcategories.dto';

@Injectable()
export class SubcategoriesService {
  constructor(private readonly client: PrismaService) {}

  async createSubCategory(data: CreateSubcategoryDto) {
    try {
      return await this.client.subcategories.create({ data });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new BadRequestException('Já existe uma categoria com esse nome');
      } else if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2003'
      ) {
        throw new BadRequestException('Categoria associada não existe');
      }
      throw err;
    }
  }

  async findAllSubcategories() {
    return await this.client.subcategories.findMany({
      select: {
        id: true,
        name: true,
        category: {
          select: { id: true, name: true },
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async findSubcategories({ pagination, search }: FindSubCategoriesDto) {
    const { page = 1, limit = 10 } = pagination;

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.client.subcategories.findMany({
        skip,
        take: limit,
        where: search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                {
                  category: { name: { contains: search, mode: 'insensitive' } },
                },
              ],
            }
          : {},
        select: {
          id: true,
          name: true,
          category: {
            select: { id: true, name: true },
          },
          created_at: true,
          updated_at: true,
        },
      }),
      this.client.subcategories.count({
        where: search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                {
                  category: { name: { contains: search, mode: 'insensitive' } },
                },
              ],
            }
          : {},
      }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
    };
  }

  async findOneSubcategory(id: string) {
    const subcategory = await this.client.subcategories.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        category: {
          select: { id: true, name: true },
        },
        created_at: true,
        updated_at: true,
      },
    });

    if (!subcategory)
      throw new NotFoundException('Subcategoria não encontrada');

    return subcategory;
  }

  async updateSubCategory({
    id,
    data,
  }: {
    id: string;
    data: UpdateSubcategoryDto;
  }) {
    try {
      const updated = await this.client.subcategories.update({
        where: { id },
        data,
      });

      return updated;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException('Subcategoria não encontrada');
      } else if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2003'
      ) {
        throw new NotFoundException('Categoria associada não existe');
      } else if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new BadRequestException('Já existe uma categoria com esse nome');
      }
      throw err;
    }
  }

  async removeSubcategories(ids: string[]) {
    if (!ids || ids.length === 0) {
      throw new BadRequestException(
        'É necessário fornecer ao menos um ID para deletar',
      );
    }

    const validIds = ids.filter(
      (id) => id && typeof id === 'string' && id.trim() !== '',
    );

    if (validIds.length > 100) {
      throw new BadRequestException(
        'Não é permitido deletar mais de 100 subcategorias de uma vez',
      );
    }

    try {
      const deleted = await this.client.subcategories.deleteMany({
        where: { id: { in: validIds } },
      });

      if (deleted.count === 0) {
        throw new NotFoundException('Subcategoria não encontrada');
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
