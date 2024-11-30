// Servidor
import { Request, Response } from "express";

// Service
import { ListProductsPerCategorysService } from "../../Services/products/ListProductsPerCategorysService";

class ListProductsPerCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";
    const isActive = req.query.isActive
      ? req.query.isActive === "true"
      : undefined;

    const listProductsPerCategorysService =
      new ListProductsPerCategorysService();
    
      const products = await listProductsPerCategorysService.execute({
      id,
      isActive,
      company
    });

    return res.status(200).json({ products });
  }
}

export { ListProductsPerCategoryController };
