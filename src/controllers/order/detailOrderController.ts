// Servidor
import { Request, Response } from "express";

// Service
import { DetailOrderService } from "../../Services/order/detailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const detailOrderService = new DetailOrderService();

    const detailOrder = await detailOrderService.execute({id, company});

    return res.json({ message: "ok", order: detailOrder });
  }
}

export { DetailOrderController };
