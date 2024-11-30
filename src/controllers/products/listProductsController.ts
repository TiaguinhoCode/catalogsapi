// Servidor
import { Request, Response } from "express";

// Service
import { ListProductsService } from "../../Services/products/listProductsService";

class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const company = (req.query.company as string) || "nenhum";

    const products = await listProductsService.execute(company);

    return res.json({ products: products });
  }
}

export { ListProductsController };
