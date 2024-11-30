// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface DetailItemsServiceProps {
  id: string;
  company: string;
}

class DetailItemsService {
  async execute({ id, company }: DetailItemsServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
