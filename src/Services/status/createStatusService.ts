// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CreateStatusServiceProps {
  name: string;
  company: string;
}

class CreateStatusService {
  async execute({ name, company }: CreateStatusServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const statusAlreadyExists = await prismaClient.status.findFirst({
      where: {
        name: name,
      },
    });

    if (statusAlreadyExists) {
      throw new Error("Status já existe");
    }

    const status = await prismaClient.status.create({
      data: {
        name,
      },
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

export { CreateStatusService };
