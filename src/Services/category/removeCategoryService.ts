// client
import prismaClient from "../../prisma";

class RemoveCategoryService {
  async execute(id: string) {
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
