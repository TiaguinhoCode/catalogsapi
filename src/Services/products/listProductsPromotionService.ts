// Client
import prismaClient from "../../prisma";

// Tipagem
interface ListProductsPromotionServiceProps {
  promotion: boolean;
  isActive?: boolean;
}

class ListProductsPromotionService {
  async execute({ promotion, isActive }: ListProductsPromotionServiceProps) {
    const products = await prismaClient.product.findMany({
      where: {
        promotion,
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

export { ListProductsPromotionService };
