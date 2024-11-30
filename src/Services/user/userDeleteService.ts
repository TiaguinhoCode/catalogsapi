// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface DeleteUserServiceProps {
  id: string;
  company: string;
}

class DeleteUserService {
  async execute({ id, company }: DeleteUserServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const userDelete = await prismaClient.user.delete({
      where: {
        id,
      },
    });

    return userDelete;
  }
}

export { DeleteUserService };
