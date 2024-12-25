// servidor
import { Request, Response } from "express";

// Service
import { ListProductsService } from "../../Services/products/listProductsService";

class ListProductsController {
  async handle(req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const company = (req.query.company as string) || "nenhum";
    const id = req.query.id as string;
    
    try {
      const products = await listProductsService.execute(company, id);

      if (!products) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json({ products });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}

export { ListProductsController };
