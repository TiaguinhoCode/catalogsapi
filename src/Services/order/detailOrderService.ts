// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface DetailOrderServiceProps {
  company: string;
  id: string;
}

class DetailOrderService {
  async execute({ id, company }: DetailOrderServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
