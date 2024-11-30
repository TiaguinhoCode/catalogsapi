// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListOrderService {
  async execute(company: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const orders = await prismaClient.order.findMany({
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

    return orders;
  }
}

export { ListOrderService };
