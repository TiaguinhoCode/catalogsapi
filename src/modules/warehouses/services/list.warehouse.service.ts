// Utils
import { WarehousesMessages } from './../../../utils/common/messages/warehouses.menssages';
import { buildWhereFilter } from './../../../utils/buildWhereFilter/index';
import { paginations } from './../../../utils/paginations';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PaginationDto } from './../../../modules/pagination/dto/pagination.dto';
import { PrismaService } from './../../../database/prisma.service';
interface ListWarehouseProps {
  client: PrismaService;
  id?: string;
  is_active?: string;
  search?: string;
  pagination?: PaginationDto;
}

export async function listWarehouse({
  client,
  id,
  is_active,
  search,
  pagination,
}: ListWarehouseProps) {
  if (!id) {
    const { skip, limit, totalItems, totalPages, currentPage } =
      await paginations({ client, model: 'warehouses', pagination });

    const params: Record<string, any> = {
      is_active: is_active === 'true' ? true : false,
      search,
    };

    const where = params ? buildWhereFilter('warehouses', params) : undefined;
    console.log('filtro: ', where);
    const warehouses = await client.warehouses.findMany({
      where,
      skip,
      take: limit,
    });
    if (warehouses.length <= 0)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return {
      warehouses,
      totalItems,
      totalPages,
      currentPage,
    };
  }
  const warehouse = await client.warehouses.findUnique({ where: { id } });

  if (!warehouse) {
    throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);
  }

  return warehouse;
}
