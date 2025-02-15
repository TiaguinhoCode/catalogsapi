// Servidor
import { Request, Response } from "express";

// Service
import { ListOrdersStatusService } from "../../Services/order/listOrdersStatusService";

class ListOrderStatusController {
  async handle(req: Request, res: Response) {
    const statusId = req.query.statusId as string;
    const company = (req.query.company as string) || "nenhum";

    const listOrdersStatusService = new ListOrdersStatusService();

    const orders = await listOrdersStatusService.execute({
      company,
      statusId,
    });

    return res.status(200).json({ orders: orders });
  }
}

export { ListOrderStatusController };
