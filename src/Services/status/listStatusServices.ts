// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListStatusService {
  async execute(company: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
