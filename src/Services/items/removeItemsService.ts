// Client
import prismaClient from "../../prisma";

class RemoveItemsService {
  async execute(id: string) {
    const removeItems = await prismaClient.item.delete({
      where: {
        id,
      },
    });

    return removeItems;
  }
}

export { RemoveItemsService };
