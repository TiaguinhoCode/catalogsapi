// Client
import prismaClient from "../../prisma";

class RemoveProductsService {
  async execute(id: string) {
    const removeProduct = await prismaClient.product.delete({
      where: {
        id,
      },
    });

    return removeProduct;
  }
}

export { RemoveProductsService };
