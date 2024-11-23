// Client
import prismaClient from "../../prisma";

// Tipagem
interface CreateItemsServiceProps {
  orderId: string;
  productId: string;
  quantity: number;
}

class CreateItemsService {
  async execute({ orderId, productId, quantity }: CreateItemsServiceProps) {
    const item = await prismaClient.item.create({
      data: {
        order_id: orderId,
        product_id: productId,
        quantity,
      },
      select: {
        id: true,
        order_id: true,
        product: {
          select: {
            id: true,
            name: true,
            description: true,
            price: true,
            promotion: true,
            discount_price: true,
          },
        },
        quantity: true,
      },
    });

    return item;
  }
}

export { CreateItemsService };
