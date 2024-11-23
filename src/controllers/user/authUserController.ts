// Servidor
import { Request, Response } from "express";

// Service
import { AuthUserService } from "../../Services/user/authUserService";

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const authUserService = new AuthUserService();

      const auth = await authUserService.execute({ email, password });

      return res.json({ message: "Authorization success", user: auth.user });
    } catch (err) {
      if (err.message === "E-mail invalido!") {
        return res.status(404).json({ error: err.message });
      } else if (err.message === "Senha invalida!") {
        return res.status(404).json({ error: err.message });
      } else {
        return res.status(500).json({ error: "Erro interno do servidor" });
      }
    }
  }
}

export { AuthUserController };
