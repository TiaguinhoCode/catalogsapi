// Servidor
import { Request, Response } from "express";

// Service
import { EditUserService } from "../../Services/user/editUserService";

class EditUserController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const { cep, email, is_active, name, phone, photo, role, surname } =
      req.body;

    try {
      const editUserService = new EditUserService();

      const editUser = await editUserService.execute({
        id,
        cep,
        email,
        is_active,
        name,
        phone,
        photo,
        role,
        surname,
      });

      return res.json({ message: "success", user: editUser });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Usuário não encontrado!") {
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

export { EditUserController };
