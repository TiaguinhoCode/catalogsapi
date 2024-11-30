// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListProductsService {
  async execute(company: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        is_active: true,
        category: {
          select: {
            name: true,
          },
        },
        price: true,
        Banner: {
          select: {
            image_url: true,
          },
        },
        promotion: true,
        discount_percentage: true,
        discount_price: true,
        created_at: true,
        updated_at: true,
      },
    });

    return products;
  }
}

export { ListProductsService };
