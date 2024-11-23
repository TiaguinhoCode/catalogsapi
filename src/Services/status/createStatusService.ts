// Client
import prismaClient from "../../prisma";

// Tipagem
interface CreateStatusServiceProps {
  name: string;
}

class CreateStatusService {
  async execute({ name }: CreateStatusServiceProps) {
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
