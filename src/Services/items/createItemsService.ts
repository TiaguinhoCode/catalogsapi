// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CreateItemsServiceProps {
  orderId: string;
  productId: string;
  quantity: number;
  company: string;
}

class CreateItemsService {
  async execute({
    orderId,
    productId,
    quantity,
    company,
  }: CreateItemsServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const item = await prismaClient.item.create({
      data: {
        order_id: orderId,
        product_id: productId,
        quantity,
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

    return item;
  }
}

export { CreateItemsService };
