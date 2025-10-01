// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { CategoriesMessages } from './../../../utils/common/messages/categories.menssages';

// Tipagem
import { CreateCategoryDto } from '../dto/create-category.dto';
import { PrismaService } from './../../../database/prisma.service';
interface CreateCategoriesProps {
  client: PrismaService;
  data: CreateCategoryDto;
}

export async function createCategories({
  client,
  data,
}: CreateCategoriesProps) {
  await ensureUniqueField({
    client,
    model: 'categories',
    field: 'name',
    value: data.name.toLowerCase(),
    msg: CategoriesMessages.CATEGORIES_ALREADY_HAS_REGISTRATION,
  });

  const category = await client.categories.create({ data });

  return category;
}
