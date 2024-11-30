// Servidor
import { Request, Response } from "express";

// Service
import { ListOrderService } from "../../Services/order/listOrderService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrderService();
    const company = (req.query.company as string) || "nenhum";

    const orders = await listOrdersService.execute(company);

    return res.status(200).json({ orders: orders });
  }
}

export { ListOrderController };
