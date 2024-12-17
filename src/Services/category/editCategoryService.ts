// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface EditCategoryProps {
  id: string;
  name: string;
  company: string;
}

class EditCategoryService {
  async execute({ id, name, company }: EditCategoryProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;
console.log("Empresa: ", company)
    const category = await prismaClient.category.findUnique({
      where: { id },
    });

    if (!category) {
      throw new Error("Categoria não encontrado!");
    }

    const updateCategory = await prismaClient.category.update({
      where: { id },
      data: {
        name,
        updated_at: new Date(),
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
    });

    return updateCategory;
  }
}

export { EditCategoryService };
