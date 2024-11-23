// Client
import prismaClient from "../../prisma";

class DetailItemsService {
  async execute(id: string) {
    const items = await prismaClient.item.findMany({
      where: {
        order_id: id,
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

    return items;
  }
}

export { DetailItemsService };
