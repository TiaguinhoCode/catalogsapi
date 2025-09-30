// Utils
import { paginations } from './../../../utils/paginations';
import { WarehousesMessages } from './../../../utils/common/messages/warehouses.menssages';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PaginationDto } from './../../../modules/pagination/dto/pagination.dto';
import { PrismaService } from './../../../database/prisma.service';
import { buildWhereFilter } from './../../../utils/buildWhereFilter/index';
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
      await this.paginationService.paginate('warehouses', pagination);
const params: Record<string, any> = {
      is_active: is_active === 'true' ? true : false,
      search,
    };

    const params: Record<string, any> = {
      is_active: is_active === 'true' ? true : false,
      search,
    };
    const where = params ? buildWhereFilter('warehouses', params) : undefined;
    const warehouse = await client.warehouses.findMany({
      where,
      skip,
      take: limit,
    });

    if (warehouse.length <= 0)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return {
      warehouse,
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
