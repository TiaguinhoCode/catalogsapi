// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Bibliotecas
import { PrismaService } from 'src/prisma/prisma.service';

// Dto
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { FindBrandsDto } from './dto/find-brands.dto';
import { Prisma } from 'generated/prisma/client';

@Injectable()
export class BrandsService {
  constructor(private readonly client: PrismaService) {}

  async createBrands(data: CreateBrandDto) {
    return await this.client.brands.create({ data });
  }

  async findAllBrands() {
    return await this.client.brands.findMany();
  }

  async findBrands({ pagination, search }: FindBrandsDto) {
    const { page = 1, limit = 10 } = pagination;

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.client.brands.findMany({
        skip,
        take: limit,
        where: search
          ? { name: { contains: search, mode: 'insensitive' } }
          : {},
      }),
      this.client.brands.count(),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
    };
  }

  async findOneBrand(id: string) {
    const brand = await this.client.brands.findUnique({ where: { id } });

    if (!brand) throw new NotFoundException('Marca não encontrada');

    return brand;
  }

  async updatBrandse({ id, data }: { id: string; data: UpdateBrandDto }) {
    try {
      const updated = await this.client.brands.update({
        where: { id },
        data,
      });

      return updated;
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2025'
      ) {
        throw new NotFoundException('Marca não encontrada');
      }
      throw err;
    }
  }

  async removeBrands(ids: string[]) {
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
        'Não é permitido deletar mais de 100 marcas de uma vez',
      );
    }

    try {
      const deleted = await this.client.brands.deleteMany({
        where: { id: { in: validIds } },
      });

      if (deleted.count === 0) {
        throw new NotFoundException('Marca não encontrada');
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
