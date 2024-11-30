// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface RemoveItemServiceProps {
  id: string;
  company: string;
}

class RemoveItemsService {
  async execute({ id, company }: RemoveItemServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const removeItems = await prismaClient.item.delete({
      where: {
        id,
      },
    });

    return removeItems;
  }
}

export { RemoveItemsService };
