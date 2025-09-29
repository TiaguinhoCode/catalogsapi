// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Bibliotecas
import { PrismaService } from './../../database/prisma.service';

// Utils
import { ensureUniqueField } from './../../utils/fieldValidation/validation';
import { BrandsMenssages } from './../../utils/common/messages/brands.menssages';
import { paginations } from './../../utils/paginations/index';

// Tipagem
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly client: PrismaService) {}

  async createBrands(data: CreateBrandDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'name',
      value: data.name.toLowerCase(),
      msg: BrandsMenssages.BRANDS_ALREADY_HAS_REGISTRATION,
    });

    const brand = await this.client.brands.create({
      data,
    });

    return brand;
  }

  async findAllBrands(pagination?: PaginationDto) {
    const { skip, totalItems, limit, totalPages, currentPage } =
      await paginations({
        client: this.client,
        model: 'products',
        pagination,
      });

    const brands = await this.client.brands.findMany({ skip, take: limit });

    if (brands.length <= 0)
      throw new NotFoundException(BrandsMenssages.BRANDS_NOT_FOUND);

    return {
      brands,
      totalItems,
      totalPages: totalPages,
      currentPage,
    };
  }

  async findBrandByFilter({
    search,
    pagination,
  }: {
    search?: string;
    pagination?: PaginationDto;
  }) {
    const { skip, totalItems, limit, totalPages, currentPage } =
      await paginations({
        client: this.client,
        model: 'products',
        pagination,
      });

    const brands = await this.client.brands.findMany({
      where: { name: { contains: search, mode: 'insensitive' } },
      skip,
      take: limit,
    });

    if (brands.length <= 0) {
      throw new NotFoundException(BrandsMenssages.BRANDS_NOT_FOUND);
    }

    return {
      brands,
      totalItems,
      totalPages: totalPages,
      currentPage,
    };
  }

  async findBrandPeerId(id: string) {
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

  async updateBrand({ id, data }: { id: string; data: UpdateBrandDto }) {
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

  async removeBrand(id: string) {
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
