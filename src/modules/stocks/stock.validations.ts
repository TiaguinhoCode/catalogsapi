// Utils
import { ProductsMessages } from './../../utils/common/messages/products.menssages';
import { WarehousesMessages } from './../../utils/common/messages/warehouses.menssages';
import { BrandsMenssages } from './../../utils/common/messages/brands.menssages';
import { CategoriesMessages } from './../../utils/common/messages/categories.menssages';
import { ensureUniqueField } from './../../utils/fieldValidation/validation';

// Tipagem
import { CreateStockDto } from './dto/create-stock.dto';
import { PrismaService } from './../../database/prisma.service';

interface ValidadeStockDataProps {
  client: PrismaService;
  data: Partial<CreateStockDto>;
  isUpdate?: boolean;
  id?: string;
}

export async function validateStockData({
  client,
  data,
  isUpdate = false,
  id,
}: ValidadeStockDataProps) {
  if (isUpdate) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'id',
      id: true,
      value: id,
      msg: ProductsMessages.PRODUCT_NOT_FOUND,
    });
  }

  if (isUpdate && data.stock_id) {
    await ensureUniqueField({
      client: this.client,
      model: 'warehouses',
      field: 'id',
      id: true,
      value: data.stock_id,
      msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
    });
  }

  if (isUpdate && data.category_id) {
    await ensureUniqueField({
      client: this.client,
      model: 'categories',
      field: 'id',
      id: true,
      value: data.category_id,
      msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
    });
  }

  if (isUpdate && data.brand_id) {
    await ensureUniqueField({
      client: this.client,
      model: 'brands',
      field: 'id',
      id: true,
      value: data.brand_id,
      msg: BrandsMenssages.BRANDS_NOT_FOUND,
    });
  }

  if (isUpdate && data.product_code) {
    await ensureUniqueField({
      client: this.client,
      model: 'products',
      field: 'product_code',
      value: data.product_code,
      msg: ProductsMessages.BARCODE_ALREADY_REGISTERED,
    });
  }

  await ensureUniqueField({
    client,
    model: 'products',
    field: 'name',
    value: (data as any).name.toLowerCase(),
    msg: ProductsMessages.PRODUCT_ALREADY_HAS_REGISTRATION,
  });
  await ensureUniqueField({
    client,
    model: 'warehouses',
    field: 'id',
    id: true,
    value: data.stock_id,
    msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
  });
  await ensureUniqueField({
    client,
    model: 'brands',
    field: 'id',
    id: true,
    value: data.brand_id,
    msg: BrandsMenssages.BRANDS_NOT_FOUND,
  });
  await ensureUniqueField({
    client,
    model: 'categories',
    field: 'id',
    id: true,
    value: data.category_id,
    msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
  });
  await ensureUniqueField({
    client,
    model: 'products',
    field: 'product_code',
    value: data.product_code,
    msg: ProductsMessages.BARCODE_ALREADY_REGISTERED,
  });
}
