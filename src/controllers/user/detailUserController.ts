// Servidor
import { Request, Response } from "express";

// Service
import { DetailUserService } from "../../Services/user/detailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const id = req.user_id;
    const company = (req.query.company as string) || "nenhum";

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute({ id, company });

    return res.json({ message: "ok", user: user });
  }
}

export { DetailUserController };
