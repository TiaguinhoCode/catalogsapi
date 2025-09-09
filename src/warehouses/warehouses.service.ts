// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Bibliotecas
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { WarehousesMessages } from './../utils/common/messages/warehouses.menssages';

// Tipagem
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

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

  async findAll() {
    const warehouse = await this.client.warehouses.findMany();

    if (!warehouse)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return warehouse;
  }

  async findAllWarehousesByFilter(is_active?: string) {
    const active = is_active === 'true' ? true : false;

    const warehouse = await this.client.warehouses.findMany({
      where: { is_active: active },
    });

    if (!warehouse)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return warehouse;
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
    await ensureUniqueField({
      client: this.client,
      model: 'Warehouses',
      field: 'id',
      id: true,
      value: id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });

    const warehouse = await this.client.warehouses.delete({
      where: { id },
    });

    return warehouse;
  }
}
