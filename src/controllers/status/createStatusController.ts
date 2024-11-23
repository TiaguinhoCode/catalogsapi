// Servidor
import { Request, Response } from "express";

// Service
import { CreateStatusService } from "../../Services/status/createStatusService";

class CreateStatusController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createStatusService = new CreateStatusService();

    try {
      const status = await createStatusService.execute({ name });

      return res.json({ message: "Successfully", status: status });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Status já existe") {
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

export { CreateStatusController };
