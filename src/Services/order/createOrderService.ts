// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
type Items = {
  productId: string;
  quantity: number;
};

interface CreateOrderServiceProps {
  statusId: string;
  client?: string;
  table: number;
  items: Items[];
  company: string;
}

class CreateOrderService {
  async execute({
    client,
    statusId,
    table,
    items,
    company,
  }: CreateOrderServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const order = await prismaClient.order.create({
      data: {
        client,
        table,
        status_id: "37a62c52-89d3-4b9e-b070-a9667d631f7b",
        Items: {
          create: items.map((item) => ({
            product_id: item.productId,
            quantity: item.quantity,
          })),
        },
      },
      select: {
        id: true,
        client: true,
        table: true,
        status: {
          select: {
            name: true,
          },
        },
        created_at: true,
        updated_at: true,
        Items: {
          select: {
            id: true,
            quantity: true,
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
          },
        },
      },
    });

    return order;
  }
}

export { CreateOrderService };
