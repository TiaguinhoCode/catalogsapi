// Client
import prismaClient from "../../prisma";

class ListCategoryService {
  async execute() {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
    });

    return { category };
  }
}

export { ListCategoryService };
