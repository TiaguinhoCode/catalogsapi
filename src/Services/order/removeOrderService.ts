// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface RemoveOrderServiceProps {
  id: string;
  company: string;
}

class RemoveOrderService {
  async execute({ id, company }: RemoveOrderServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const removeOrder = await prismaClient.order.delete({
      where: {
        id,
      },
    });

    return removeOrder;
  }
}

export { RemoveOrderService };
