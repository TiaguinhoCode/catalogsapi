// Servidor
import { Request, Response } from "express";

// Service
import { DetailItemsService } from "../../Services/items/detailItemsService";

class DetailItemController {
  async handle(req: Request, res: Response) {
    const id = req.body.id as string;
    const company = (req.query.company as string) || "nenhum";

    const detailItemsService = new DetailItemsService();

    const detailItems = await detailItemsService.execute({ id, company });

    return res.status(200).json({ message: "ok", items: detailItems });
  }
}

export { DetailItemController };
