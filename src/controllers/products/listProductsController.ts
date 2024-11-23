// Servidor
import { Request, Response } from "express";

// Service
import { ListProductsService } from "../../Services/products/listProductsService";

class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return res.json({ products: products });
  }
}

export { ListProductsController };
