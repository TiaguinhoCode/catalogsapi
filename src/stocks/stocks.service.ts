// Nest
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Dto
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Prisma } from 'generated/prisma/client';
import { FindProductDto } from './dto/find-product.dto';

@Injectable()
export class StocksService {
  constructor(private readonly client: PrismaService) {}

  async createStock(data: CreateStockDto) {
    try {
      return await this.client.$transaction(async (prisma) => {
        const category = await prisma.categories.findUnique({
          where: { id: data.product.category_id },
          select: { id: true },
        });
        const subcategory = await prisma.subcategories.findFirst({
          where: {
            id: data.product.subcategory_id,
            category_id: data.product.category_id,
          },
          select: { id: true },
        });

        const brand = await prisma.brands.findUnique({
          where: { id: data.product.brand_id },
          select: { id: true },
        });
        const warehouse = await prisma.warehouses.findUnique({
          where: { id: data.warehouse_id },
          select: { id: true },
        });

        if (!category) {
          throw new NotFoundException('Categoria não encontrada');
        }
        if (!subcategory)
          throw new NotFoundException(
            'Subcategoria não encontrada ou não pertence à categoria informada',
          );
        if (!brand) throw new NotFoundException('Marca não encontrado');
        if (!warehouse)
          throw new NotFoundException('Almoxarifado não encontrado');

        const product = await prisma.products.create({
          data: {
            name: data.product.name,
            description: data.product.description,
            subcategory_id: data.product.subcategory_id,
            category_id: data.product.category_id,
            brand_id: data.product.brand_id,
            product_code: data.product.product_code,
            sales_unit: data.product.sales_unit,
          },
        });

        const stock = await prisma.stocks.create({
          data: {
            warehouses_id: data.warehouse_id,
            product_id: product.id,
            current_quantity: data.current_quantity,
            minimium_quantity: data.minimum_quantity,
            maximum_quantity: data.maximum_quantity,
            price: data.price,
            purchase_price: data.purchase_price,
            coast_price: data.coast_price,
            has_discount: data.has_discount ?? false,
            discount_percentage: data.discount_percentage,
          },
        });

        return {
          product,
          stock,
        };
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === 'P2002'
      ) {
        throw new BadRequestException(
          'Esse produto já existe cadastrado neste almoxarifado.',
        );
      }

      return err.response;
    }
  }

  async findAllStock() {
    return await this.client.products.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        product_code: true,
        sales_unit: true,
        is_active: true,

        category: {
          select: {
            id: true,
            name: true,
          },
        },

        subcategory: {
          select: {
            id: true,
            name: true,
          },
        },

        brand: {
          select: {
            id: true,
            name: true,
          },
        },

        banners: {
          select: { id: true, url_imagem: true, display_order: true },
        },

        stock: {
          select: {
            id: true,
            warehouse: { select: { id: true, name: true } },
            current_quantity: true,
            minimium_quantity: true,
            maximum_quantity: true,
            price: true,
            purchase_price: true,
            coast_price: true,
            has_discount: true,
            discount_percentage: true,
          },
        },

        date_of_inactivation: true,
        created_at: true,
        updated_at: true,
      },
    });
  }

  async findStock({ page = 1, limit = 10, search }: FindProductDto) {
    const skip = (page - 1) * limit;

    const whereClause: Prisma.ProductsWhereInput = search
      ? {
          OR: [
            { name: { contains: search, mode: Prisma.QueryMode.insensitive } },

            {
              description: {
                contains: search,
                mode: Prisma.QueryMode.insensitive,
              },
            },

            {
              product_code: {
                contains: search,
                mode: Prisma.QueryMode.insensitive,
              },
            },

            {
              sales_unit: {
                contains: search,
                mode: Prisma.QueryMode.insensitive,
              },
            },

            {
              category: {
                name: { contains: search, mode: Prisma.QueryMode.insensitive },
              },
            },

            {
              subcategory: {
                name: { contains: search, mode: Prisma.QueryMode.insensitive },
              },
            },

            {
              stock: {
                warehouse: {
                  name: {
                    contains: search,
                    mode: Prisma.QueryMode.insensitive,
                  },
                },
              },
            },
          ],
        }
      : {};

    const [data, total] = await Promise.all([
      this.client.products.findMany({
        skip,
        take: limit,
        where: whereClause,
        select: {
          id: true,
          name: true,
          description: true,
          product_code: true,
          sales_unit: true,
          is_active: true,

          category: { select: { id: true, name: true } },
          subcategory: { select: { id: true, name: true } },
          brand: { select: { id: true, name: true } },

          banners: {
            select: { id: true, url_imagem: true, display_order: true },
          },

          stock: {
            select: {
              id: true,
              warehouse: { select: { id: true, name: true } },
              current_quantity: true,
              minimium_quantity: true,
              maximum_quantity: true,
              price: true,
              purchase_price: true,
              coast_price: true,
              has_discount: true,
              discount_percentage: true,
            },
          },

          date_of_inactivation: true,
          created_at: true,
          updated_at: true,
        },
      }),

      this.client.products.count({ where: whereClause }),
    ]);

    return {
      data,
      meta: { total, page, limit, totalPage: Math.ceil(total / limit) },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} stock`;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
