// Servidor
import { Request, Response } from "express";

// Service
import { ListStatusService } from "../../Services/status/listStatusServices";

class ListStatusController {
  async handle(req: Request, res: Response) {
    const company = (req.query.company as string) || "nenhum";

    const listStatusService = new ListStatusService();

    const status = await listStatusService.execute(company);

    return res.json({ status: status });
  }
}

export { ListStatusController };
