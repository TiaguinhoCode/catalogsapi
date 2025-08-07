// Nest
import { Injectable } from '@nestjs/common';

// Service
import { PrismaService } from './../database/prisma.service';

// Utils
import { ensureUniqueField } from './../utils/fieldValidation/validation';
import { ProductsMessages } from './../utils/common/messages/products.menssages';

// Tipagem
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateProductDto) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'name',
      value: data.name,
      msg: ProductsMessages.PRODUCT_ALREADY_HAS_REGISTRATION,
    });

    const product = await this.client.products.create({ data });

    return product;
  }

  async findAll() {
    return `This action returns all products`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, data: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
