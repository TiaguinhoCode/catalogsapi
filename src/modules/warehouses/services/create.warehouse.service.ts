// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { WarehousesMessages } from './../../../utils/common/messages/warehouses.menssages';

// Tipagem
import { CreateWarehouseDto } from '../dto/create-warehouse.dto';
import { PrismaService } from './../../../database/prisma.service';
interface CreateWarehouseProps {
  data: CreateWarehouseDto;
  client: PrismaService;
}

export async function createWarehouse({ data, client }: CreateWarehouseProps) {
  await ensureUniqueField({
    client,
    model: 'warehouses',
    field: 'name',
    value: data.name.toLowerCase(),
    msg: WarehousesMessages.WAREHOUSE_ALREADY_REGISTERED,
  });

  const warehouse = await client.warehouses.create({
    data,
  });

  return warehouse;
}
