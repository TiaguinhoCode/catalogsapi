// client
import prismaClient from "../../prisma";

// Tipagem
interface EditItemsServiceProps {
  id: string;
  productId?: string;
  quantity?: number;
}

class EditItemsService {
  async execute({ id, productId, quantity }: EditItemsServiceProps) {
    const item = await prismaClient.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new Error("Item não encontrado!");
    }

    if (productId) {
      const product = await prismaClient.product.findUnique({
        where: { id: productId },
      });

      if (!product) {
        throw new Error("Produto não encontrado!");
      }
    }

    const updateItems = await prismaClient.item.update({
      where: { id },
      data: {
        product: productId ? { connect: { id: productId } } : undefined,
        quantity: quantity !== undefined ? quantity : undefined,
      },
    });

    return updateItems;
  }
}

export { EditItemsService };
