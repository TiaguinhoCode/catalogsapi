// Servidor
import { Request, Response } from "express";

// Service
import { ListUsersService } from "../../Services/user/listUsersService";

class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json({ users: users });
  }
}

export { ListUsersController };
