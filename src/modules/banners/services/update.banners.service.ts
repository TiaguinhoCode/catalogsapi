// Services
import { PrismaService } from '../../../database/prisma.service';
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { BannersMessages } from '../../../utils/common/messages/banners.menssages';

// Tipagem
import { UpdateBannerDto } from '../dto/update-banner.dto';

interface updateBannersProps {
  client: PrismaService;
  id?: string;
  data: UpdateBannerDto;
}

export async function updateBanners({ client, id, data }: updateBannersProps) {
  await ensureUniqueField({
    client,
    model: 'banners',
    field: 'id',
    id: true,
    value: id,
    msg: BannersMessages.BANNERS_NOT_FOUND,
  });

  const banner = await client.banners.update({
    where: { id },
    omit: { product_id: true },
    data,
  });

  return banner;
}
