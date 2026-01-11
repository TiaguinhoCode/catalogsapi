// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Prisma } from 'generated/prisma/client';
import { FindWarehouseDto } from './dto/find-warehouse.dto';

@Injectable()
export class WarehousesService {
  constructor(private readonly client: PrismaService) {}

  async createWarehouse(data: CreateWarehouseDto) {
    try {
      return await this.client.warehouses.create({ data });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2003'
      ) {
        throw new NotFoundException('Empresa não foi encontrado');
      } else if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new NotFoundException(
          'Já existe um almoxarifado cadastrado com esse nome',
        );
      }
      throw err;
    }
  }

  async findAllWarehouses() {
    return await this.client.warehouses.findMany({
      select: {
        id: true,
        name: true,
        is_active: true,
        company: {
          select: {
            id: true,
            company_fantasy: true,
            company_reason: true,
            company_acronym: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });
  }

  async findWarehouses({
    page = 1,
    limit = 10,
    search,
    isActive,
  }: FindWarehouseDto) {
    const skip = (page - 1) * limit;
    const whereClause: any = {};

    if (search) {
      whereClause.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        {
          company: {
            company_fantasy: { contains: search, mode: 'insensitive' },
          },
        },
      ];
    }

    if (isActive !== undefined) {
      whereClause.is_active = isActive === 'true' ? true : false;
    }

    const [data, total] = await Promise.all([
      this.client.warehouses.findMany({
        skip,
        take: limit,
        where: whereClause,
      }),
      this.client.warehouses.count({
        where: whereClause,
      }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
    };
  }

  async findOneWarehouse(id: string) {
    const warehouse = await this.client.warehouses.findUnique({
      where: { id },
    });

    if (!warehouse) throw new NotFoundException('Almoxarifado não encontrado');

    return warehouse;
  }

  async updateWarehouse({
    id,
    data,
  }: {
    id: string;
    data: UpdateWarehouseDto;
  }) {
    try {
      const update = await this.client.warehouses.update({
        where: { id },
        data,
      });

      return update;
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
        throw new NotFoundException('Empresa associada não existe');
      }
    }
  }

  async removeWarehouse(ids: string[]) {
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
      const deleted = await this.client.warehouses.deleteMany({
        where: { id: { in: validIds } },
      });

      if (deleted.count === 0)
        throw new NotFoundException('Almoxarifado não encontrado');

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
