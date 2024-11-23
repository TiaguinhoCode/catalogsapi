// Client
import prismaClient from "../../prisma";

// Tipagem
interface CreateCategoryServiceProps {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CreateCategoryServiceProps) {
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
