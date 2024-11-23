// Client
import prismaClient from "../../prisma";

// Tipagem
interface EditOrderServiceProps {
  id: string;
  client?: string;
  table?: number;
  statusId?: string; 
}

class EditOrderService {
  async execute({ id, client, statusId, table }: EditOrderServiceProps) {
    const order = await prismaClient.order.findUnique({
      where: { id },
    });

    if (!order) {
      throw new Error("Order não encontrada!");
    }

    const updateOrder = await prismaClient.order.update({
      where: { id },
      data: {
        client,
        table,
        status: statusId ? { connect: { id: statusId } } : undefined,
        updated_at: new Date(),
      },
    });

    return updateOrder;
  }
}

export { EditOrderService };
