// client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface RemoveCategoryServiceProps {
  id: string;
  company: string;
}

class RemoveCategoryService {
  async execute({ id, company }: RemoveCategoryServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const category = await prismaClient.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) {
      throw new Error("Categoria não encontrado!");
    }

    const removeCategory = await prismaClient.category.delete({
      where: {
        id,
      },
    });

    return removeCategory;
  }
}

export { RemoveCategoryService };
