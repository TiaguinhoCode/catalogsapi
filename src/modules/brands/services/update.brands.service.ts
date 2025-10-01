// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { BrandsMenssages } from './../../../utils/common/messages/brands.menssages';

// Tipagem
import { UpdateBrandDto } from '../dto/update-brand.dto';
import { PrismaService } from './../../../database/prisma.service';
interface UpdateBrandsProps {
  client: PrismaService;
  id: string;
  data: UpdateBrandDto;
}

export async function updateBrands({ client, id, data }: UpdateBrandsProps) {
  await ensureUniqueField({
    client,
    model: 'brands',
    field: 'id',
    id: true,
    value: id,
    msg: BrandsMenssages.BRANDS_NOT_FOUND,
  });

  const brand = await client.brands.update({ where: { id }, data });

  return brand;
}
