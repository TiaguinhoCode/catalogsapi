// Utils
import { paginations } from './../../../utils/paginations';
import { BrandsMenssages } from './../../../utils/common/messages/brands.menssages';
import { buildWhereFilter } from './../../../utils/buildWhereFilter/index';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PaginationDto } from './../../pagination/dto/pagination.dto';
import { PrismaService } from './../../../database/prisma.service';
interface ListBrandsProps {
  client: PrismaService;
  id?: string;
  search?: string;
  pagination?: PaginationDto;
}

export async function listBrands({
  client,
  id,
  search,
  pagination,
}: ListBrandsProps) {
  if (id) {
    const brand = await client.brands.findUnique({ where: { id } });

    return brand;
  }

  const where = search ? buildWhereFilter('brands', { search }) : undefined;

  const { skip, totalItems, limit, totalPages, currentPage } =
    await paginations({
      client,
      model: 'brands',
      pagination,
      where,
    });

  const brands = await client.brands.findMany({ where, skip, take: limit });

  if (brands.length <= 0)
    throw new NotFoundException(BrandsMenssages.BRANDS_NOT_FOUND);

  return {
    brands,
    totalItems,
    totalPages,
    currentPage,
  };
}
