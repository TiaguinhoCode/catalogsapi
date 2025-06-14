// Servidor
import { Request, Response } from "express";

// Service
import { RemoveOrderService } from "../../Services/order/removeOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const removeOrderService = new RemoveOrderService();

    const removeOrder = await removeOrderService.execute({ id, company });

    return res.json({ message: "success", removeOrder });
  }
}

export { RemoveOrderController };
