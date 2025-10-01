// Utils
import { paginations } from './../../../utils/paginations';
import { ProductsMessages } from './../../../utils/common/messages/products.menssages';
import { formatData } from './../../../utils/formattedData/index';
import { fieldMap } from './../../../utils/fieldsFormatted/products/index';
import { buildWhereFilter } from './../../../utils/buildWhereFilter/index';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
import { PaginationDto } from './../../pagination/dto/pagination.dto';
import { filterParams } from './../../../type/filterParams';
interface ListProducts {
  client: PrismaService;
  id?: string;
  params?: filterParams;
  pagination?: PaginationDto;
}

const productSelect = {
  id: true,
  name: true,
  description: true,
  brand_id: true,
  brand: { select: { name: true } },
  category_id: true,
  category: { select: { name: true } },
  url_imagem: true,
  stock: {
    select: {
      price: true,
      current_quantity: true,
      has_discount: true,
      discount_percentage: true,
    },
  },
};

export async function listProducts({
  client,
  id,
  params,
  pagination,
}: ListProducts) {
  if (id) {
    const product = await client.products.findUnique({
      select: productSelect,
      where: {
        id,
        AND: { is_active: true },
        stock: {
          warehouse: {
            name: { contains: 'Estoque Online', mode: 'insensitive' },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);
    }

    return formatData(product as any, fieldMap);
  }

  const { skip, totalItems, limit, totalPages, currentPage } =
    await paginations({
      client,
      model: 'products',
      pagination,
    });

  const where = params ? buildWhereFilter('products', params) : undefined;
  const products = await client.products.findMany({
    select: productSelect,
    where,
    skip,
    take: limit,
  });

  if (!products.length) {
    throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);
  }

  const formatted = formatData(products as any, fieldMap);

  return {
    formatted,
    totalItems,
    totalPages,
    currentPage,
  };
}
