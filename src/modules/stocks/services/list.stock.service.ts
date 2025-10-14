// Nest
import { NotFoundException } from '@nestjs/common';

// Services
import { PrismaService } from './../../../database/prisma.service';

// Utils
import { paginations } from './../../../utils/paginations';
import { ProductsMessages } from './../../../utils/common/messages/products.menssages';
import { formatData } from './../../../utils/formattedData';
import { fieldMap } from './../../../utils/fieldsFormatted/stocks';
import { buildWhereFilter } from './../../../utils/buildWhereFilter';

// Types
import { PaginationDto } from './../../../modules/pagination/dto/pagination.dto';
import { FormattedStock, ItemsStock } from './../../../type/formattedProducts';
import { filterParams } from './../../../type/filterParams';

interface ListStockServiceProps {
  client: PrismaService;
  params?: filterParams;
  id?: string;
  orderByStock?: 'asc' | 'desc';
  pagination?: PaginationDto;
}

const productSelect = {
  id: true,
  name: true,
  description: true,
  product_code: true,
  sales_unit: true,
  brand: { select: { id: true, name: true } },
  category: { select: { id: true, name: true } },
  is_active: true,
  date_of_inactivation: true,
  banners: {
    orderBy: { display_order: 'asc' as const },
    select: {
      id: true,
      url_imagem: true,
    },
  },
  stock: {
    select: {
      id: true,
      warehouse_id: true,
      current_quantity: true,
      minimium_quantity: true,
      maximum_quantity: true,
      price: true,
      purchase_price: true,
      cost_price: true,
      has_discount: true,
      discount_percentage: true,
      created_at: true,
      updated_at: true,
      warehouse: { select: { id: true, name: true } },
    },
  },
};

export async function listStockService({
  client,
  params,
  id,
  orderByStock,
  pagination,
}: ListStockServiceProps) {
  if (id) {
    const product = await client.products.findUnique({
      where: { id },
      select: productSelect,
    });

    if (!product) {
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);
    }

    return formatData<ItemsStock, FormattedStock>(product as any, fieldMap);
  }

  const orderBy = orderByStock
    ? [{ stock: { current_quantity: orderByStock } }]
    : undefined;

  const where = params ? buildWhereFilter('products', params) : undefined;

  const { skip, totalItems, limit, totalPages, currentPage } =
    await paginations({
      client,
      model: 'products',
      pagination,
    });

  const products = await client.products.findMany({
    select: productSelect,
    orderBy,
    where,
    skip,
    take: limit,
  });

  if (!products.length) {
    throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);
  }

  const formatted = formatData<ItemsStock, FormattedStock>(
    products as any,
    fieldMap,
  );

  return {
    formatted,
    totalItems,
    totalPages,
    currentPage,
  };
}
