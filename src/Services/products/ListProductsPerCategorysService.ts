// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface ListProductsPerCategorysServiceProps {
  id: string;
  isActive?: boolean;
  company: string;
}

class ListProductsPerCategorysService {
  async execute({
    id,
    isActive,
    company,
  }: ListProductsPerCategorysServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const products = await prismaClient.product.findMany({
      where: {
        category: {
          id,
        },
        ...(isActive !== undefined && { is_active: isActive }),
      },

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

export { ListProductsPerCategorysService };
