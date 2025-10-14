// Utils
import { ProductsMessages } from '../../../utils/common/messages/products.menssages';
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';

// Nest
import { BadRequestException } from '@nestjs/common';

// Tipagem
import { CreateBannerDto } from '../dto/create-banner.dto';
import { PrismaService } from '../../../database/prisma.service';
interface CreateBannerProps {
  data: CreateBannerDto;
  client: PrismaService;
}

export async function createBanner({ data, client }: CreateBannerProps) {
  await ensureUniqueField({
    client,
    model: 'products',
    field: 'id',
    value: data.url_imagem.toLowerCase(),
    msg: ProductsMessages.PRODUCT_NOT_FOUND,
  });

  const total = await client.banners.count({
    where: { product_id: data.product_id ? data.product_id : null },
  });

  if (total >= 10) {
    throw new BadRequestException(
      'Limite máximo de 10 banners atingido. Exclua um banner existente antes de criar um novo.',
    );
  }

  const banners = await client.banners.create({
    data,
    omit: { product_id: true },
  });

  return banners;
}
