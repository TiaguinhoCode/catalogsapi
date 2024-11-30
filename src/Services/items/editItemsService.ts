// client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface EditItemsServiceProps {
  id: string;
  productId?: string;
  quantity?: number;
  company: string;
}

class EditItemsService {
  async execute({ id, productId, quantity, company }: EditItemsServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
