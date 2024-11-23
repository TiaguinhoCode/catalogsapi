// Client
import prismaClient from "../../prisma";

// Tipagem
interface EditUserServiceProps {
  id: string;
  name?: string;
  surname?: string;
  email?: string;
  cep?: string;
  phone?: string;
  photo?: string | null;
  role?: string;
  is_active?: boolean;
}

class EditUserService {
  async execute({
    id,
    name,
    surname,
    email,
    cep,
    phone,
    photo,
    role,
    is_active,
  }: EditUserServiceProps) {
    // Primeiro, verifica se o usuário existe
    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("Usuário não encontrado!"); // Lança erro se o usuário não existir
    }

    // Atualiza o usuário com os dados fornecidos
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        name,
        surname,
        email,
        cep,
        phone,
        photo,
        role,
        is_active,
        updated_at: new Date(), // Atualiza o campo updated_at com a data atual
      },
      select: {
        id: true,
        name: true,
        surname: true,
        photo: true,
        email: true,
        phone: true,
        cep: true,
        role: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });

    return updatedUser;
  }
}

export { EditUserService };
