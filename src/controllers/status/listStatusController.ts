// Servidor
import { Request, Response } from "express";

// Service
import { ListStatusService } from "../../Services/status/listStatusServices";

class ListStatusController {
  async handle(req: Request, res: Response) {
    const listStatusService = new ListStatusService();

    const status = await listStatusService.execute();

    return res.json({ status: status });
  }
}

export { ListStatusController };
