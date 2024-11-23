// Client
import prismaClient from "../../prisma";

class DetailOrderService {
  async execute(id: string) {
    const order = await prismaClient.order.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
        client: true,
        status: {
          select: {
            name: true,
          },
        },
        Items: {
          select: {
            id: true,
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
        },
        table: true,
        created_at: true,
        updated_at: true,
      },
    });

    return order;
  }
}

export { DetailOrderService };
