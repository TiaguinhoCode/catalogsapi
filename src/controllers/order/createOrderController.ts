// Servidor
import { Request, Response } from "express";

// Service
import { CreateOrderService } from "../../Services/order/createOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response) {
    const { client, statusId, table } = req.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({ client, statusId, table });

    return res.json({ message: "Successfully", order: order });
  }
}

export { CreateOrderController };
