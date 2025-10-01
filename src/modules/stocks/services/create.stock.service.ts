// Database
import { PrismaService } from './../../../database/prisma.service';

// Utils
import { validateStockData } from '../stock.validations';

// Tipagem
import { CreateStockDto } from '../dto/create-stock.dto';

export async function createStock({
  client,
  data,
}: {
  client: PrismaService;
  data: CreateStockDto;
}) {
  await validateStockData({ client, data });

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
      discount_percentage: data.has_discount ? data.discount_percentage : null,
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
