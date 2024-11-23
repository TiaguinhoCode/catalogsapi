// Client
import prismaClient from "../../prisma";

class ListUsersService {
  async execute() {
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
