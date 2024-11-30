// Servidor
import { Request, Response } from "express";

// Services
import { DeleteUserService } from "../../Services/user/userDeleteService";

class UserDeleteController {
  async handle(req: Request, res: Response) {
    const company = (req.query.company as string) || "nenhum";
    const user_id = req.query.user_id as string;

    const deleteUserService = new DeleteUserService();

    const deleteUser = await deleteUserService.execute({
      id: user_id,
      company,
    });

    return res.json({ message: "success", deleteUser });
  }
}

export { UserDeleteController };
