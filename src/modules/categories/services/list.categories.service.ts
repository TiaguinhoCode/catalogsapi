// Utils
import { paginations } from './../../../utils/paginations';
import { CategoriesMessages } from './../../../utils/common/messages/categories.menssages';
import { buildWhereFilter } from './../../../utils/buildWhereFilter/index';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PaginationDto } from './../../pagination/dto/pagination.dto';
import { PrismaService } from './../../../database/prisma.service';
interface ListCategoriesProps {
  client: PrismaService;
  id?: string;
  search?: string;
  pagination?: PaginationDto;
}

export async function listCategories({
  client,
  id,
  search,
  pagination,
}: ListCategoriesProps) {
  if (id) {
    const categorie = await client.categories.findUnique({ where: { id } });

    if (!categorie)
      throw new NotFoundException(CategoriesMessages.CATEGORIES_NOT_FOUND);

    return categorie;
  }

  const where = search ? buildWhereFilter('categories', { search }) : undefined;

  const { skip, totalItems, limit, totalPages, currentPage } =
    await paginations({
      client,
      model: 'categories',
      pagination,
      where,
    });

  const categories = await client.categories.findMany({
    where,
    skip,
    take: limit,
  });

  if (!categories)
    throw new NotFoundException(CategoriesMessages.CATEGORIES_NOT_FOUND);

  return {
    categories,
    totalItems,
    totalPages,
    currentPage,
  };
}
