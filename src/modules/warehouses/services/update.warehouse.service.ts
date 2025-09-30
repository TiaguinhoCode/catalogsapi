// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { WarehousesMessages } from './../../../utils/common/messages/warehouses.menssages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
import { UpdateWarehouseDto } from './../dto/update-warehouse.dto';
interface updateWarehouseProps {
  client: PrismaService;
  id: string;
  data: UpdateWarehouseDto;
}

export async function updateWarehouse({
  client,
  id,
  data,
}: updateWarehouseProps) {
  await ensureUniqueField({
    client: this.client,
    model: 'Warehouses',
    field: 'id',
    id: true,
    value: id,
    msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
  });

  const warehouse = await client.warehouses.update({
    where: { id },
    data,
  });

  return warehouse;
}
