// Cliente
import prismaCatalogs from "../../prisma/catalogs";

// Biblioteca
import { hash } from "bcrypt";

// Tipagem
interface userRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  phone: string;
  cep: string;
  role: string;
  company: string;
}

class CreateUserService {
  async execute({
    name,
    surname,
    email,
    password,
    phone,
    cep,
    role,
    company,
  }: userRequest) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Usuario já existe");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=._-]).{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new Error(
        "A senha deve conter pelo menos uma letra minúscula, um número, um caractere especial e ter pelo menos 8 caracteres"
      );
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        surname,
        email,
        password: passwordHash,
        phone,
        cep,
        role,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        photo: true,
        email: true,
        cep: true,
        phone: true,
        role: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
