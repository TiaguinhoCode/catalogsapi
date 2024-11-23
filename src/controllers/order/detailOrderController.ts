// Servidor
import { Request, Response } from "express";

// Service
import { DetailOrderService } from "../../Services/order/detailOrderService";

class DetailOrderController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const detailOrderService = new DetailOrderService();

    const detailOrder = await detailOrderService.execute(id);

    return res.json({ message: "ok", order: detailOrder });
  }
}

export { DetailOrderController };
