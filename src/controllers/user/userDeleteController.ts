// Servidor
import { Request, Response } from "express";

// Services
import { DeleteUserService } from "../../Services/user/userDeleteService";

class UserDeleteController {
  async handle(req: Request, res: Response) {
    const user_id = req.query.user_id as string;

    const deleteUserService = new DeleteUserService();

    const deleteUser = await deleteUserService.execute(user_id);

    return res.json({ message: "success", deleteUser });
  }
}

export { UserDeleteController };
