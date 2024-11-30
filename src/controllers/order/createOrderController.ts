// Servidor
import { Request, Response } from "express";

// Service
import { CreateOrderService } from "../../Services/order/createOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { client, statusId, table } = req.body;
    const company = (req.query.company as string) || "nenhum";

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({ client, statusId, table, company });

    return res.json({ message: "Successfully", order: order });
  }
}

export { CreateOrderController };
