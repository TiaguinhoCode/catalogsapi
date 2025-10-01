// Utils
import { ensureUniqueField } from 'src/utils/fieldValidation/validation';
import { BrandsMenssages } from '../../../utils/common/messages/brands.menssages';

// Tipagem
import { PrismaService } from '../../../database/prisma.service';
import { CreateBrandDto } from '../dto/create-brand.dto';
interface CreateBrandsProps {
  client: PrismaService;
  data: CreateBrandDto;
}

export async function createBrands({ client, data }: CreateBrandsProps) {
  await ensureUniqueField({
    client: this.client,
    model: 'brands',
    field: 'name',
    value: data.name.toLowerCase(),
    msg: BrandsMenssages.BRANDS_ALREADY_HAS_REGISTRATION,
  });

  const brand = await this.client.brands.create({
    data,
  });

  return brand;
}
