// Servidor
import { Request, Response } from "express";

// Service
import { DetailUserService } from "../../Services/user/detailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const id = req.body;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(id);

    return res.json({ message: "ok", user: user });
  }
}

export { DetailUserController };
