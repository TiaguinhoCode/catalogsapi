// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Bibliotecas
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { WarehousesMessages } from './../utils/common/messages/warehouses.menssages';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

// Tipagem
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class WarehousesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateWarehouseDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'Warehouses',
      field: 'name',
      value: data.name.toLowerCase(),
      msg: WarehousesMessages.WAREHOUSE_ALREADY_REGISTERED,
    });

    const warehouse = await this.client.warehouses.create({
      data,
    });

    return warehouse;
  }

  async findAll(pagination?: PaginationDto) {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.warehouses.count();
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const warehouse = await this.client.warehouses.findMany({
      skip,
      take: limit,
    });

    if (warehouse.length <= 0)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return {
      warehouse,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
  }

  async findAllWarehousesByFilter(
    is_active?: string,
    search?: string,
    pagination?: PaginationDto,
  ) {
    const active = is_active === 'true' ? true : false;

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.warehouses.count({
      where: {
        is_active: active,
        name: { contains: search, mode: 'insensitive' },
      },
    });
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

    const warehouse = await this.client.warehouses.findMany({
      where: {
        is_active: active,
        name: { contains: search, mode: 'insensitive' },
      },
      skip,
      take: limit,
    });

    if (warehouse.length <= 0)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return {
      warehouse,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
  }

  async findOne(id: string) {
    const warehouse = await ensureUniqueField({
      client: this.client,
      model: 'Warehouses',
      field: 'id',
      id: true,
      value: id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });

    return warehouse;
  }

  async update(id: string, data: UpdateWarehouseDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'Warehouses',
      field: 'id',
      id: true,
      value: id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });

    const warehouse = await this.client.warehouses.update({
      where: { id },
      data,
    });

    return warehouse;
  }

  async remove(id: string) {
    const warehouseValidation = await ensureUniqueField({
      client: this.client,
      model: 'Warehouses',
      field: 'id',
      id: true,
      value: id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });

    if ((warehouseValidation as any).name === 'Estoque Online') {
      throw new BadRequestException(
        'Não é permitido excluir o almoxarifado Estoque Online, pois ele está vinculado ao catálogo digital é essencial para o funcionamento do estoque online.',
      );
    }

    const warehouse = await this.client.warehouses.delete({
      where: { id },
    });

    return warehouse;
  }
}
