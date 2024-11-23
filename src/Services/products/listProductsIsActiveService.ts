// Client
import prismaClient from "../../prisma";

// Tipagem
interface ListProductsIsActiveProps {
  is_active: boolean;
}

class ListProductsIsActive {
  async execute({ is_active }: ListProductsIsActiveProps) {
    const products = await prismaClient.product.findMany({
      where: {
        is_active,
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

export { ListProductsIsActive };
