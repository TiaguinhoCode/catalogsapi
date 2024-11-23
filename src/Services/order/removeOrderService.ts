// Client
import prismaClient from "../../prisma";

class RemoveOrderService {
  async execute(id: string) {
    const removeOrder = await prismaClient.order.delete({
      where: {
        id,
      },
    });

    return removeOrder;
  }
}

export { RemoveOrderService };
