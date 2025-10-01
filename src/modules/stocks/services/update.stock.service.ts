// Service
import { PrismaService } from './../../../database/prisma.service';

// Utils
import { validateStockData } from '../stock.validations';

// Tipagem
import { UpdateStockDto } from '../dto/update-stock.dto';
interface UpdateStockServiceProps {
  client: PrismaService;
  id: string;
  data: UpdateStockDto;
}

export async function updateStock({
  client,
  id,
  data,
}: UpdateStockServiceProps) {
  await validateStockData({ client: client, data, isUpdate: true, id });

  const product = await client.products.update({
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
