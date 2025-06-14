// Servidor
import { Request, Response } from "express";

// Service
import { RemoveItemsService } from "../../Services/items/removeItemsService";

class RemoveItemsController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const removeItemsService = new RemoveItemsService();

    const removeItems = await removeItemsService.execute({ id, company });

    return res.json({ message: "success", removeItems });
  }
}

export { RemoveItemsController };
