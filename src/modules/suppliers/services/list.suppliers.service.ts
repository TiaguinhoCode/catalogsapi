// Utils
import { SuppliersMessages } from './../../../utils/common/messages/suppliers.messages';

// Tipagem
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from './../../../database/prisma.service';
interface ListSuppliersProps {
  client: PrismaService;
  id?: string;
}

export async function listSuppliers({ client, id }: ListSuppliersProps) {
  if (id) {
    const supplier = await client.suppliers.findUnique({
      where: { id },
      include: { products: true },
    });

    if (!supplier)
      throw new NotFoundException(SuppliersMessages.SUPPLIERS_NOT_FOUND);

    return supplier;
  }

  const suppliers = await client.suppliers.findMany({
    include: { products: true },
  });

  return suppliers;
}
