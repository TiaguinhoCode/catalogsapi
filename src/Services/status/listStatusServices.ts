// Client
import prismaClient from "../../prisma";

class ListStatusService {
  async execute() {
    const status = await prismaClient.status.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
        updated_at: true,
      },
    });

    return status;
  }
}

export { ListStatusService };
