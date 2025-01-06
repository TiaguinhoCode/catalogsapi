// Client
import prismaCatalogs from "../../prisma/catalogs";

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
  company: string;
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
    company,
  }: EditUserServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("Usuário não encontrado!");
    }

    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        name,
        surname,
        email,
        cep,
        phone,
        photo: photo || user.photo, // Atualiza a foto apenas se uma nova for enviada
        role,
        is_active,
        updated_at: new Date(),
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
