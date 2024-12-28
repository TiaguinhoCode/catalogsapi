// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListProductsService {
  async execute(company: string, id?: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    if (!prismaClient) {
      throw new Error("Invalid company");
    }

    if (id) {
      const product = await prismaClient.product.findUnique({
        where: { id: id },
        select: {
          id: true,
          name: true,
          description: true,
          is_active: true,
          category: {
            select: {
              id: true,
              name: true,
            },
          },
          price: true,
          Banner: {
            select: {
              id: true,
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

      return product;
    }

    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        is_active: true,
        category: {
          select: {
            id: true,
            name: true,
          },
        },
        price: true,
        Banner: {
          select: {
            id: true,
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
