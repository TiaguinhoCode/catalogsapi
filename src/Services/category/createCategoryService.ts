// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CreateCategoryServiceProps {
  name: string;
  company: string;
}

class CreateCategoryService {
  async execute({ name, company }: CreateCategoryServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryAlreadyExists) {
      throw new Error("Categoria já existe");
    }

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
    });

    return category;
  }
}

export { CreateCategoryService };
