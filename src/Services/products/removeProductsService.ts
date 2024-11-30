// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface RemovePRoductsServiceProps {
  id: string;
  company: string;
}

class RemoveProductsService {
  async execute({ id, company }: RemovePRoductsServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const removeProduct = await prismaClient.product.delete({
      where: {
        id,
      },
    });

    return removeProduct;
  }
}

export { RemoveProductsService };
