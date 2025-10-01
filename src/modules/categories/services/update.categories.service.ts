// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
import { UpdateCategoryDto } from './../dto/update-category.dto';
import { CategoriesMessages } from './../../../utils/common/messages/categories.menssages';
interface UpdateCategoriesProps {
  client: PrismaService;
  id: string;
  data: UpdateCategoryDto;
}

export async function updateCategories({
  client,
  id,
  data,
}: UpdateCategoriesProps) {
  await ensureUniqueField({
    client,
    model: 'categories',
    field: 'id',
    id: true,
    value: id,
    msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
  });

  const category = await client.categories.update({
    where: { id },
    data,
  });

  return category;
}
