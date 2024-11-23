// Client
import prismaClient from "../../prisma";

class DetailUserService {
  async execute(id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
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

    return user;
  }
}

export { DetailUserService };
