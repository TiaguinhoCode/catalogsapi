// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Bibliotecas
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { BrandsMenssages } from './../utils/common/messages/brands.menssages';

// Tipagem
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateBrandDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'name',
      value: data.name,
      msg: BrandsMenssages.BRANDS_ALREADY_HAS_REGISTRATION,
    });

    const brand = await this.client.brands.create({
      data,
    });

    return brand;
  }

  async findAll() {
    const brands = await this.client.brands.findMany();

    if (!brands) throw new NotFoundException(BrandsMenssages.BRANDS_NOT_FOUND);

    return brands;
  }

  async findOne(id: string) {
    const brands = await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'id',
      id: true,
      value: id,
      msg: BrandsMenssages.BRANDS_NOT_FOUND,
    });

    return brands;
  }

  async update(id: string, data: UpdateBrandDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'id',
      id: true,
      value: id,
      msg: BrandsMenssages.BRANDS_NOT_FOUND,
    });

    const brand = await this.client.brands.update({ where: { id }, data });

    return brand;
  }

  async remove(id: string) {
    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'id',
      id: true,
      value: id,
      msg: BrandsMenssages.BRANDS_NOT_FOUND,
    });

    const brand = await this.client.brands.delete({ where: { id } });

    return brand;
  }
}
