// Client
import prismaClient from "../../prisma";

class DeleteUserService {
  async execute(user_id: string) {
    const userDelete = await prismaClient.user.delete({
      where: {
        id: user_id,
      },
    });

    return userDelete;
  }
}

export { DeleteUserService };
