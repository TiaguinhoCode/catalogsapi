// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Services
import { PrismaService } from '../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { ProductsMessages } from '../utils/common/messages/products.menssages';
import { WarehousesMessages } from '../utils/common/messages/warehouses.menssages';
import { BrandsMenssages } from '../utils/common/messages/brands.menssages';
import { CategoriesMessages } from '../utils/common/messages/categories.menssages';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PaginationDto } from './../pagination/dto/pagination.dto';

@Injectable()
export class StocksService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateStockDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'name',
      value: data.name.toLowerCase(),
      msg: ProductsMessages.PRODUCT_ALREADY_HAS_REGISTRATION,
    });

    await ensureUniqueField({
      client: this.client,
      model: 'warehouses',
      field: 'id',
      id: true,
      value: data.stock_id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });

    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'id',
      id: true,
      value: data.brand_id,
      msg: BrandsMenssages.BRANDS_NOT_FOUND,
    });

    await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'id',
      id: true,
      value: data.category_id,
      msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
    });

    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'product_code',
      value: data.product_code,
      msg: ProductsMessages.BARCODE_ALREADY_REGISTERED,
    });

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

  async findAll(pagination?: PaginationDto) {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.products.count();
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

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

    const formatted = products.map((item) => {
      const formattedStock = item.stock
        ? {
            ...item.stock,
            warehouse_name: item.stock.warehouse?.name ?? null,
          }
        : null;

      if (formattedStock) delete (formattedStock as any).warehouse;

      return {
        ...item,
        brand: item.brand?.name ?? null,
        category: item.category?.name ?? null,
        stock: formattedStock,
      };
    });

    return {
      formatted,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
  }

  async findAllProductsByFilters(
    is_active?: boolean,
    brandsId?: string,
    categoriesId?: string,
    warehouseId?: string,
    search?: string,
    orderByStock?: 'asc' | 'desc',
    lowStock?: boolean,
    pagination?: PaginationDto,
  ) {
    const orderBy: any = [];

    if (orderByStock) {
      orderBy.push({ stock: { current_quantity: orderByStock } });
    }

    const where: any = {
      ...(is_active !== undefined && { is_active }),
      ...(brandsId && {
        brand_id: { in: brandsId.split(',') },
      }),
      ...(categoriesId && {
        category_id: { in: categoriesId.split(',') },
      }),
      ...(warehouseId && {
        stock: { warehouse_id: { in: warehouseId.split(',') } },
      }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          { product_code: { contains: search, mode: 'insensitive' } },
          {
            brand: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            category: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            stock: {
              warehouse: {
                name: { contains: search, mode: 'insensitive' },
              },
            },
          },
        ],
      }),
      ...(lowStock && {
        stock: {
          current_quantity: {
            lte: this.client.stocks.fields.minimium_quantity,
          },
        },
      }),
    };

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.products.count({ where });
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

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
      where,
      orderBy,
      skip,
      take: limit,
    });

    if (products.length <= 0)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = products.map((item) => {
      const formattedStock = item.stock
        ? {
            ...item.stock,
            warehouse_name: item.stock.warehouse?.name ?? null,
          }
        : null;

      if (formattedStock) delete (formattedStock as any).warehouse;

      return {
        ...item,
        brand: item.brand?.name ?? null,
        category: item.category?.name ?? null,
        stock: formattedStock,
      };
    });

    return {
      formatted,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
  }

  async stockSummary(
    is_active?: boolean,
    brandsId?: string,
    categoriesId?: string,
    warehouseId?: string,
    search?: string,
  ) {
    const where: any = {
      ...(is_active !== undefined && { is_active }),
      ...(brandsId && {
        brand_id: { in: brandsId.split(',') },
      }),
      ...(categoriesId && {
        category_id: { in: categoriesId.split(',') },
      }),
      ...(warehouseId && {
        stock: { warehouse_id: { in: warehouseId.split(',') } },
      }),
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { description: { contains: search, mode: 'insensitive' } },
          { product_code: { contains: search, mode: 'insensitive' } },
          {
            brand: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            category: {
              name: { contains: search, mode: 'insensitive' },
            },
          },
          {
            stock: {
              warehouse: {
                name: { contains: search, mode: 'insensitive' },
              },
            },
          },
        ],
      }),
    };

    // Obtenha os IDs dos produtos que atendem aos critérios de pesquisa
    const products = await this.client.products.findMany({
      where,
      select: {
        id: true,
        stock_id: true,
      },
    });

    // Obtenha os dados de estoque correspondentes aos produtos encontrados
    const stockData = await this.client.stocks.aggregate({
      where: {
        id: { in: products.map((p) => p.stock_id) },
      },
      _sum: {
        current_quantity: true,
        minimium_quantity: true,
        maximum_quantity: true,
        price: true,
        purchase_price: true,
        cost_price: true,
      },
    });

    // Calcule os totais desejados
    const totalProducts = products.length;
    const totalStockMin = stockData._sum.minimium_quantity || 0;
    const totalStockMax = stockData._sum.maximum_quantity || 0;
    const totalCost =
      stockData._sum.cost_price || 0 * stockData._sum.current_quantity || 0;
    // const potentialProfit =
    //   totalStockMax * (stockData._sum.price - stockData._sum.cost_price);

    return {
      totalProducts,
      totalStockMin,
      totalStockMax,
      totalCost,
      // potentialProfit,
    };
  }

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
            warehouse: { select: { id: true, name: true } }, // aqui pegamos o nome do warehouse
          },
        },
      },
    });

    if (!product)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = {
      ...product,
      stock: product.stock
        ? {
            warehouse_id: product.stock.warehouse?.id ?? null,
            warehouse_name: product.stock.warehouse?.name ?? null,
            ...product.stock,
          }
        : null,
    };

    if (formatted.stock) {
      delete (formatted.stock as any).warehouse;
    }

    return formatted;
  }

  async update(id: string, data: UpdateStockDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'id',
      id: true,
      value: id,
      msg: ProductsMessages.PRODUCT_NOT_FOUND,
    });

    if (data.stock_id) {
      await ensureUniqueField({
        client: this.client,
        model: 'warehouses',
        field: 'id',
        id: true,
        value: data.stock_id,
        msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
      });
    }

    if (data.brand_id) {
      await ensureUniqueField({
        client: this.client,
        model: 'brands',
        field: 'id',
        id: true,
        value: data.brand_id,
        msg: BrandsMenssages.BRANDS_NOT_FOUND,
      });
    }

    if (data.category_id) {
      await ensureUniqueField({
        client: this.client,
        model: 'categories',
        field: 'id',
        id: true,
        value: data.category_id,
        msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
      });
    }

    if (data.product_code) {
      await ensureUniqueField({
        client: this.client,
        model: 'products',
        field: 'product_code',
        value: data.product_code,
        msg: ProductsMessages.BARCODE_ALREADY_REGISTERED,
      });
    }

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
