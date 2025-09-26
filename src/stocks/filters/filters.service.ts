// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Utils
import { buildWhereFilter } from '../../utils/buildWhereFilter/index';
import { paginations } from '../../utils/paginations';
import { ProductsMessages } from '../../utils/common/messages/products.menssages';
import { formatData } from './../../utils/formattedData/index';
import { fieldMap } from '../../utils/fieldsFormatted/stocks/index';

// Service
import { PrismaService } from '../../database/prisma.service';

// Tipagem
import { PaginationDto } from './../../pagination/dto/pagination.dto';
import { FormattedStock, ItemsStock } from '../../type/formattedProducts/index';

type filterParams = Record<string, any> & {
  is_active?: boolean;
  brand_id?: string;
  category_id?: string;
  stock?: { warehouse_id?: string };
  search?: string;
  orderByStock?: 'asc' | 'desc';
  lowStock?: boolean;
};

@Injectable()
export class FiltersService {
  constructor(private readonly client: PrismaService) {}

  async findStockByFilter({
    params,
    pagination,
  }: {
    params: filterParams;
    pagination?: PaginationDto;
  }) {
    const orderBy: any = [];
    const where = buildWhereFilter('products', params);

    if (params.orderByStock) {
      orderBy.push({ stock: { current_quantity: params.orderByStock } });
    }

    const { skip, totalItems, limit, totalPages, currentPage } =
      await paginations({
        client: this.client,
        model: 'products',
        pagination,
        where,
      });

    const products = await this.client.products.findMany({
      select: {
        id: true,
        url_imagem: true,
        name: true,
        description: true,
        product_code: true,
        sales_unit: true,
        brand: { select: { name: true } },
        category: { select: { name: true } },
        is_active: true,
        date_of_inactivation: true,
        created_at: true,
        updated_at: true,
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
      },
      where,
      orderBy,
      skip,
      take: limit,
    });

    if (products.length <= 0)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

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
}
