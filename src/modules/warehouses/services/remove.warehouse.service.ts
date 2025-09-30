// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { WarehousesMessages } from './../../../utils/common/messages/warehouses.menssages';

// Nest
import { BadRequestException } from '@nestjs/common';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface RemoveWarehouseProps {
  client: PrismaService;
  id: string;
}

export async function removeWarehouse({ client, id }: RemoveWarehouseProps) {
  const warehouseValidation = await ensureUniqueField({
    client,
    model: 'Warehouses',
    field: 'id',
    id: true,
    value: id,
    msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
  });

  if ((warehouseValidation as any).name === 'Estoque Online') {
    throw new BadRequestException(
      'Não é permitido excluir o almoxarifado Estoque Online, pois ele está vinculado ao catálogo digital é essencial para o funcionamento do estoque online.',
    );
  }

  const warehouse = await client.warehouses.delete({
    where: { id },
  });

  return warehouse;
}
