// Utils
import { paginations } from './../../../utils/paginations';
import { BannersMessages } from './../../../utils/common/messages/banners.menssages';

// Tipagem
import { PrismaService } from '../../../database/prisma.service';
import { PaginationDto } from '../../pagination/dto/pagination.dto';
import { NotFoundException } from '@nestjs/common';

interface ListBannersProps {
  client: PrismaService;
  id?: string;
  pagination?: PaginationDto;
}

export async function listBanners({ client, id }: ListBannersProps) {
  if (id) {
    const banner = await client.banners.findFirst({
      where: { id },
      omit: { product_id: true },
    });

    if (!banner) throw new NotFoundException(BannersMessages.BANNERS_NOT_FOUND);

    return banner;
  }

  const banners = await client.banners.findMany({
    where: { product_id: null },
    omit: { product_id: true },
    orderBy: { display_order: { sort: 'asc' } },
  });

  return banners;
}
