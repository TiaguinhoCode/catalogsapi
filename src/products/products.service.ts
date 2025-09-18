// Nest
import { Injectable, NotFoundException } from '@nestjs/common';

// Service
import { PrismaService } from './../database/prisma.service';

// Utils
import { ProductsMessages } from './../utils/common/messages/products.menssages';
import { Prisma } from 'generated/prisma';

// Tipagem
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly client: PrismaService) {}

  async findAllProducts(pagination?: PaginationDto) {
    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.products.count();
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

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
      where: {
        is_active: true,
        stock: {
          warehouse: {
            name: { contains: 'Estoque Online', mode: 'insensitive' },
          },
        },
      },
      skip,
      take: limit,
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

    return {
      formatted,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
  }

  async findAllProductsByFilter(
    brandsId?: string,
    categoriesId?: string,
    search?: string,
    pagination?: PaginationDto,
  ) {
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
      ...(search && {
        OR: [
          {
            name: { contains: search, mode: 'insensitive' },
          },
          {
            description: { contains: search, mode: 'insensitive' },
          },
          {
            product_code: { contains: search, mode: 'insensitive' },
          },
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

    const page = pagination?.page ?? 1;
    const limit = pagination?.limit ?? 10;
    const total = await this.client.products.count({ where });
    const totalPages = Math.ceil(total / limit);
    const skip = (page - 1) * limit;

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
      skip,
      take: limit,
    });

    if (products.length === 0)
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);

    const formatted = products.map((item) => {
      return {
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
      };
    });

    return {
      formatted,
      totalItems: total,
      totalPages: totalPages,
      currentPage: page,
    };
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
