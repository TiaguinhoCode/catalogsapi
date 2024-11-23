// Servidor
import { Request, Response } from "express";

// Service
import { CreateUserService } from "../../Services/user/createUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, surname, email, password, phone, cep, role } = req.body;

    const createUserService = new CreateUserService();

    try {
      const user = await createUserService.execute({
        name,
        surname,
        email,
        password,
        phone,
        cep,
        role,
      });

      return res.json({ message: "Successfully created", user: user });
    } catch (err) {
      if (err instanceof Error) {
        // Verifica se `err` é uma instância de `Error`
        if (err.message === "Usuario já existe") {
          return res.status(404).json({ error: err.message });
        } else if (
          err.message ===
          "A senha deve conter pelo menos uma letra minúscula, um número, um caractere especial e ter pelo menos 8 caracteres"
        ) {
          return res.status(404).json({ error: err.message });
        } else {
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
      } else {
        return res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}

export { CreateUserController };
