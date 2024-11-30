// Servidor
import { Request, Response } from "express";

// Service
import { RemoveProductsService } from "../../Services/products/removeProductsService";

class RemoveProductsController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const removeProductsService = new RemoveProductsService();

    const removeProducts = await removeProductsService.execute({ id, company });

    return res.json({ message: "success", removeProducts });
  }
}

export { RemoveProductsController };
