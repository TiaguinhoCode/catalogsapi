// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Service
import { PrismaService } from './../database/prisma.service';

// Utils
import { ProductsMessages } from './../utils/common/messages/products.menssages';
import { Prisma } from 'generated/prisma';

@Injectable()
export class ProductsService {
  constructor(private readonly client: PrismaService) {}

  async findAllProducts() {
    const products = await this.client.products.findMany({
      where: {
        is_active: true,
        stock: {
          warehouse: {
            name: { contains: 'Estoque Online', mode: 'insensitive' },
          },
        },
      },
      select: {
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
      },
    });

    if (!products)
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = products.map((item) => ({
      id: item.id,
      url_imagem: item.url_imagem,
      name: item.name,
      description: item.description,
      brand_id: item.brand_id,
      brand: item.brand?.name ?? null,
      category_id: item.category_id,
      category: item.category?.name ?? null,
      price: item.stock?.price ?? null,
      current_quantity: item.stock?.current_quantity ?? null,
      has_discount: item.stock?.has_discount ?? null,
      discount_percentage: item.stock?.discount_percentage ?? null,
    }));

    return formatted;
  }

  async findAllProductsByFilter(brandsId?: string, categoriesId?: string) {
    const where: Prisma.ProductsWhereInput = {
      is_active: true,
      stock: {
        warehouse: {
          name: {
            contains: 'Estoque Online',
            mode: 'insensitive',
          },
        },
      },
      ...(brandsId && {
        brand_id: {
          in: brandsId.split(','),
        },
      }),
      ...(categoriesId && {
        category_id: {
          in: categoriesId.split(','),
        },
      }),
    };

    const products = await this.client.products.findMany({
      select: {
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
      },
      where,
    });

    if (products.length === 0)
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);

    const formatted = products.map((item) => ({
      id: item.id,
      url_imagem: item.url_imagem,
      name: item.name,
      description: item.description,
      brand_id: item.brand_id,
      brand: item.brand?.name ?? null,
      category_id: item.category_id,
      category: item.category?.name ?? null,
      price: item.stock?.price ?? null,
      current_quantity: item.stock?.current_quantity ?? null,
      has_discount: item.stock?.has_discount ?? null,
      discount_percentage: item.stock?.discount_percentage ?? null,
    }));

    return formatted;
  }

  async findOne(id: string) {
    const product = await this.client.products.findUnique({
      where: {
        id,
        AND: { is_active: true },
        stock: {
          warehouse: {
            name: { contains: 'Estoque Online', mode: 'insensitive' },
          },
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        brand_id: true,
        brand: { select: { name: true } },
        category_id: true,
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
      brand_id: product.brand_id,
      brand: product.brand?.name ?? null,
      category_id: product.category_id,
      category: product.category?.name ?? null,
      price: product.stock?.price ?? null,
      current_quantity: product.stock?.current_quantity ?? null,
      has_discount: product.stock?.has_discount ?? null,
      discount_percentage: product.stock?.discount_percentage ?? null,
    };

    return formatted;
  }
}
