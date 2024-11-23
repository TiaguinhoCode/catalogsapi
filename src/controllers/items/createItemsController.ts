// Servidor
import { Request, Response } from "express";

// Service
import { CreateItemsService } from "../../Services/items/createItemsService";

class CreateItemsController {
  async handle(req: Request, res: Response) {
    const { orderId, productId, quantity } = req.body;

    const createItemsService = new CreateItemsService();

    const items = await createItemsService.execute({
      orderId,
      productId,
      quantity,
    });

    return res.json({ message: "Successfully", item: items });
  }
}

export { CreateItemsController };
