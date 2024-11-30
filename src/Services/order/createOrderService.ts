// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CreateOrderServiceProps {
  statusId: string;
  client?: string;
  table: number;
  company: string;
}

class CreateOrderService {
  async execute({ client, statusId, table, company }: CreateOrderServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const order = await prismaClient.order.create({
      data: {
        client,
        table,
        status_id: "37a62c52-89d3-4b9e-b070-a9667d631f7b",
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
      },
    });

    return order;
  }
}

export { CreateOrderService };
