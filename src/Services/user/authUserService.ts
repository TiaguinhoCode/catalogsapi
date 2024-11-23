// Client
import prismaClient from "../../prisma";

// Biblioteca
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

// Tipagem
interface authRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: authRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      select: {
        id: true,
        name: true,
        surname: true,
        email: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      throw new Error("E-mail invalido!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Senha invalida!");
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        token: token,
      },
    };
  }
}

export { AuthUserService };
