// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { BrandsMenssages } from './../../../utils/common/messages/brands.menssages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface removeBrandsProps {
  client: PrismaService;
  id: string;
}

export async function removeBrands({ client, id }: removeBrandsProps) {
  await ensureUniqueField({
    client,
    model: 'brands',
    field: 'id',
    id: true,
    value: id,
    msg: BrandsMenssages.BRANDS_NOT_FOUND,
  });

  const brand = await this.client.brands.delete({ where: { id } });

  return brand;
}
