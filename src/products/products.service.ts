// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Service
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { ProductsMessages } from './../utils/common/messages/products.menssages';
import { WarehousesMessages } from './../utils/common/messages/warehouses.menssages';
import { BrandsMenssages } from './../utils/common/messages/brands.menssages';
import { CategoriesMessages } from './../utils/common/messages/categories.menssages';

// Tipagem
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly client: PrismaService) {}

  async findAllProducts() {
    const products = await this.client.products.findMany({
      where: { is_active: true },
      select: {
        id: true,
        name: true,
        description: true,
        brand: { select: { name: true } },
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
      },
    });

    if (!products)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = products.map((item) => ({
      id: item.id,
      url_imagem: item.url_imagem,
      name: item.name,
      description: item.description,
      brand: item.brand?.name ?? null,
      category: item.category?.name ?? null,
      price: item.stock?.price ?? null,
      current_quantity: item.stock?.current_quantity ?? null,
      has_discount: item.stock?.has_discount ?? null,
      discount_percentage: item.stock?.discount_percentage ?? null,
    }));

    return formatted;
  }

  async findAllProductsByFilter(brandsId?: string, categoriesId?: string) {
    const where = {
      is_active: true,
      ...(brandsId && { brand_id: { in: brandsId.split(',') } }),
      ...(categoriesId && { category_id: { in: categoriesId.split(',') } }),
    };

    const products = await this.client.products.findMany({ where });

    if (products.length === 0)
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);

    return products;
  }

  async findOne(id: string) {
    const product = await this.client.products.findUnique({
      where: { id, AND: { is_active: true } },
      select: {
        id: true,
        name: true,
        description: true,
        brand: { select: { name: true } },
        category: { select: { name: true } },
        url_imagem: true,
        created_at: true,
        updated_at: true,
        stock: {
          select: {
            price: true,
            current_quantity: true,
            has_discount: true,
            discount_percentage: true,
          },
        },
      },
    });

    if (!product)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = {
      id: product.id,
      url_imagem: product.url_imagem,
      name: product.name,
      description: product.description,
      brand: product.brand?.name ?? null,
      category: product.category?.name ?? null,
      price: product.stock?.price ?? null,
      current_quantity: product.stock?.current_quantity ?? null,
      has_discount: product.stock?.has_discount ?? null,
      discount_percentage: product.stock?.discount_percentage ?? null,
    };

    return formatted;
  }

  async findAllStock() {
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
        stock: true,
      },
    });

    if (!products)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = products.map((item) => ({
      ...item,
      brand: item.brand?.name ?? null,
      category: item.category?.name ?? null,
    }));

    return formatted;
  }

  // async update(id: string, data: UpdateProductDto) {
  //   const product = await this.client.stocks.update({
  //     where: { id },
  //     data: {
  //       warehouse_id: data.stock_id,
  //       current_quantity: data.current_quantity,
  //       minimium_quantity: data.minimium_quantity,
  //       maximum_quantity: data.maximum_quantity,
  //       price: data.price,
  //       purchase_price: data.purchase_price,
  //       cost_price: data.cost_price,
  //       has_discount: data.has_discount && data.has_discount,
  //       discount_percentage: data.has_discount
  //         ? data.discount_percentage
  //         : null,
  //       Products: {
  //         update: {
  //           name: data.name,
  //           category_id: data.category_id,
  //           brand_id: data.brand_id,
  //           product_code: data.product_code,
  //           description: data.description,
  //           sales_unit: data.sales_unit,
  //           url_imagem: data.url_imagem,
  //         },
  //       },
  //     },
  //     select: { Products: true },
  //   });

  //   return `This action updates a #${id} product`;
  // }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }

  async findAProductByStock(id: string) {
    const product = await this.client.products.findFirst({
      where: { id },
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
        stock: true,
      },
    });

    if (!product)
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);

    const formatted = {
      id: product.id,
      url_imagem: product.url_imagem,
      name: product.name,
      description: product.description,
      product_code: product.product_code,
      sales_unit: product.sales_unit,
      brand: product.brand.name,
      category: product.category.name,
      is_active: product.is_active,
      date_of_inactivation: product.date_of_inactivation,
      created_at: product.created_at,
      updated_at: product.updated_at,
      stock: {
        id: product.stock.id,
        warehouse_id: product.stock.warehouse_id,
        current_quantity: product.stock.current_quantity,
        minimium_quantity: product.stock.minimium_quantity,
        maximum_quantity: product.stock.maximum_quantity,
        price: product.stock.price,
        purchase_price: product.stock.purchase_price,
        cost_price: product.stock.cost_price,
        has_discount: product.stock.has_discount,
        discount_percentage: product.stock.discount_percentage,
        created_at: product.stock.created_at,
        updated_at: product.stock.updated_at,
      },
    };

    return formatted;
  }

  async filtersForProductsInStock(
    brandsId?: string,
    categoriesId?: string,
    warehouse_id?: string,
  ) {
    const where: any = {};

    if (brandsId) {
      where.brand_id = { in: brandsId.split(',') };
    }
    if (categoriesId) {
      where.category_id = { in: categoriesId.split(',') };
    }
    if (warehouse_id) {
      where.stock = {
        is: { warehouse_id },
      };
    }

    const products = await this.client.products.findMany({ where });

    if (products.length === 0)
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);

    return products;
  }
}
