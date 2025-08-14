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

@Injectable()
export class StocksService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateStockDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'name',
      value: data.name,
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

  async findAll() {
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
      throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);

    const formatted = {
      ...product,
      brand: product.brand?.name ?? null,
      category: product.category?.name ?? null,
    };

    return formatted;
  }

  async update(id: string, data: UpdateStockDto) {
    const product = await this.client.products.update({
      where: { id },
      data: {
        url_imagem: data.url_imagem,
        name: data.name,
        description: data.description,
        product_code: data.product_code,
        sales_unit: data.sales_unit,
        brand_id: data.brand_id,
        category_id: data.category_id,
        is_active: data.is_active,
        date_of_inactivation: data.date_of_inactivation,
        stock: {
          update: {
            current_quantity: data.current_quantity,
          },
        },
      },
    });

    return `This action updates a #${id} stock`;
  }

  async remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}
