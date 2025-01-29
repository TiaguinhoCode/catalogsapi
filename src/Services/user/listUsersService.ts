// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListUsersService {
  async execute(company: string, id: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    if (!prismaClient) {
      throw new Error("Invalid company");
    }

    if (id) {
      const users = await prismaClient.user.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          surname: true,
          email: true,
          cep: true,
          phone: true,
          photo: true,
          role: true,
          is_active: true,
          created_at: true,
          updated_at: true,
        },
      });

      return users
    }

    const users = await prismaClient.user.findMany({
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        cep: true,
        phone: true,
        photo: true,
        role: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });

    return users;
  }
}

export { ListUsersService };
