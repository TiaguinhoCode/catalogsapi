// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListCategoryService {
  async execute(company: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
