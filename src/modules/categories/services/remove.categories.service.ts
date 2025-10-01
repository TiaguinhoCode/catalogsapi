// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { CategoriesMessages } from './../../../utils/common/messages/categories.menssages';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface RemoveCategoriesProps {
  client: PrismaService;
  id: string;
}

export async function removeCategories({ client, id }: RemoveCategoriesProps) {
  await ensureUniqueField({
    client,
    model: 'categories',
    field: 'id',
    id: true,
    value: id,
    msg: CategoriesMessages.CATEGORIES_NOT_FOUND,
  });

  const category = await client.categories.delete({ where: { id } });

  return category;
}
