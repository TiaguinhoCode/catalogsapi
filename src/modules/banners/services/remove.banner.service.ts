// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { BannersMessages } from '../../../utils/common/messages/banners.menssages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';

interface RemoveBannersProps {
  client: PrismaService;
  id: string;
}

export async function removeBanners({ client, id }: RemoveBannersProps) {
  await ensureUniqueField({
    client,
    model: 'banners',
    field: 'id',
    id: true,
    value: id,
    msg: BannersMessages.BANNERS_NOT_FOUND,
  });

  const banner = client.banners.delete({
    where: { id },
    omit: { product_id: true },
  });

  return banner;
}
