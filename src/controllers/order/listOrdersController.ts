// Servidor
import { Request, Response } from "express";

// Service
import { ListOrderService } from "../../Services/order/listOrderService";

class ListOrderController {
  async handle(req: Request, res: Response) {
    const listOrdersService = new ListOrderService();

    const orders = await listOrdersService.execute();

    return res.status(200).json({ orders: orders });
  }
}

export { ListOrderController };
