// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { SuppliersMessages } from '../../../utils/common/messages/suppliers.messages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface RemoveServiceProps {
  client: PrismaService;
  id: string;
}

export async function removeSupplier({ client, id }: RemoveServiceProps) {
  await ensureUniqueField({
    client,
    model: 'suppliers',
    field: 'id',
    value: id,
    id: true,
    msg: SuppliersMessages.SUPPLIERS_NOT_FOUND,
  });

  const supplier = await client.suppliers.delete({
    where: { id },
  });

  return supplier;
}
