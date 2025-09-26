// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Services
import { PrismaService } from '../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { ProductsMessages } from '../utils/common/messages/products.menssages';

// Utils
import { paginations } from '../utils/paginations';
import { formatData } from './../utils/formattedData/index';
import { fieldMap } from './../utils/fieldsFormatted/stocks/index';
import { validateStockData } from './stock.validations';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';
import { FormattedStock, ItemsStock } from '../type/formattedProducts/index';


@Injectable()
export class StocksService {
  constructor(private readonly client: PrismaService) {}

  async createStock(data: CreateStockDto) {
    await validateStockData({ client: this.client, data });

    const product = await this.client.stocks.create({
      data: {
        warehouse_id: data.stock_id,
        current_quantity: data.current_quantity,
        minimium_quantity: data.minimium_quantity,
        maximum_quantity: data.maximum_quantity,
        price: data.price,
        purchase_price: data.purchase_price,
        cost_price: data.cost_price,
        has_discount: data.has_discount && data.has_discount,
        discount_percentage: data.has_discount
          ? data.discount_percentage
          : null,
        Products: {
          create: {
            name: data.name,
            category_id: data.category_id,
            brand_id: data.brand_id,
            product_code: data.product_code,
            description: data.description,
            sales_unit: data.sales_unit,
            url_imagem: data.url_imagem,
          },
        },
      },
      select: { Products: true },
    });

    return product.Products;
  }

  async findAllStock(pagination?: PaginationDto) {
    const { skip, totalItems, limit, totalPages, currentPage } =
      await paginations({
        client: this.client,
        model: 'products',
        pagination,
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
        category: {
          select: { name: true },
        },
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
      skip: skip,
      take: limit,
    });

    if (!products)
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

  // async findStockByFilter({
  //   params,
  //   pagination,
  // }: {
  //   params: filterParams;
  //   pagination?: PaginationDto;
  // }) {
  //   const orderBy: any = [];
  //   const where = buildWhereFilter('products', params);

  //   if (params.orderByStock) {
  //     orderBy.push({ stock: { current_quantity: params.orderByStock } });
  //   }

  //   const { skip, totalItems, limit, totalPages, currentPage } =
  //     await paginations({
  //       client: this.client,
  //       model: 'products',
  //       pagination,
  //       where,
  //     });

  //   const products = await this.client.products.findMany({
  //     select: {
  //       id: true,
  //       url_imagem: true,
  //       name: true,
  //       description: true,
  //       product_code: true,
  //       sales_unit: true,
  //       brand: { select: { name: true } },
  //       category: { select: { name: true } },
  //       is_active: true,
  //       date_of_inactivation: true,
  //       created_at: true,
  //       updated_at: true,
  //       stock: {
  //         select: {
  //           id: true,
  //           warehouse_id: true,
  //           current_quantity: true,
  //           minimium_quantity: true,
  //           maximum_quantity: true,
  //           price: true,
  //           purchase_price: true,
  //           cost_price: true,
  //           has_discount: true,
  //           discount_percentage: true,
  //           created_at: true,
  //           updated_at: true,
  //           warehouse: { select: { id: true, name: true } },
  //         },
  //       },
  //     },
  //     where,
  //     orderBy,
  //     skip,
  //     take: limit,
  //   });

  //   if (products.length <= 0)
  //     throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

  //   const formatted = formatData<ItemsStock, FormattedStock>(
  //     products as any,
  //     fieldMap,
  //   );

  //   return {
  //     formatted,
  //     totalItems,
  //     totalPages,
  //     currentPage,
  //   };
  // }

  async findOne(id: string) {
    const product = await this.client.products.findUnique({
      where: { id },
      select: {
        id: true,
        url_imagem: true,
        name: true,
        description: true,
        product_code: true,
        sales_unit: true,
        brand: { select: { id: true, name: true } },
        category: {
          select: { id: true, name: true },
        },
        is_active: true,
        date_of_inactivation: true,
        created_at: true,
        updated_at: true,
        stock: {
          select: {
            id: true,
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
    });

    if (!product)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = formatData<ItemsStock, FormattedStock>(
      product as any,
      fieldMap,
    );

    return formatted;
  }

  async update(id: string, data: UpdateStockDto) {
    await validateStockData({ client: this.client, data, isUpdate: true, id });

    const product = await this.client.products.update({
      where: { id },
      data: {
        url_imagem: data.url_imagem,
        name: data.name,
        description: data.description,
        product_code: data.product_code,
        sales_unit: data.sales_unit,
        ...(data.brand_id ? { brand: { connect: { id: data.brand_id } } } : {}),
        ...(data.category_id
          ? { category: { connect: { id: data.category_id } } }
          : {}),
        is_active: data.is_active,
        date_of_inactivation: data.date_of_inactivation,
        stock: {
          update: {
            ...(data.stock_id
              ? { warehouse: { connect: { id: data.stock_id } } }
              : {}),
            current_quantity: data.current_quantity,
            minimium_quantity: data.minimium_quantity,
            maximum_quantity: data.maximum_quantity,
            price: data.price,
            purchase_price: data.purchase_price,
            cost_price: data.cost_price,
            has_discount: data.has_discount,
            discount_percentage: data.discount_percentage,
          },
        },
      },
    });

    return product;
  }

  async remove(id: string) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'id',
      id: true,
      value: id,
      msg: ProductsMessages.PRODUCT_NOT_FOUND,
    });

    const product = await this.client.products.delete({ where: { id } });

    return product;
  }
}
