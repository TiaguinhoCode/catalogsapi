// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { ProductsMessages } from './../../../utils/common/messages/products.menssages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface RemoveStockProps {
  client: PrismaService;
  id?: string;
}

export async function removeStock({ client, id }: RemoveStockProps) {
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
