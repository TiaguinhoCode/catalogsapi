// Nest
import { NotFoundException } from '@nestjs/common';

// Utils
import { ProductsMessages } from '../../../utils/common/messages/products.menssages';
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { SuppliersMessages } from '../../../utils/common/messages/suppliers.messages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface unlinkSupplierProductsProps {
  client: PrismaService;
  id: string;
  data: string[];
}

export async function unlinkSupplierProducts({
  client,
  id,
  data,
}: unlinkSupplierProductsProps) {
  const foundProducts = await client.products.findMany({
    where: {
      id: { in: data },
    },
    select: { id: true },
  });

  if (foundProducts.length <= 0) {
    throw new NotFoundException(ProductsMessages.PRODUCT_NOT_FOUND);
  }

  const supplier = await client.suppliers.update({
    where: { id },
    data: {
      products: {
        disconnect: data.map((id) => ({ id })),
      },
    },
    select: { products: true },
  });

  return supplier;
}
