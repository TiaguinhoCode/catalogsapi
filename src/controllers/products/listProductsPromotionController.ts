// Servidor
import { Request, Response } from "express";

// Service
import { ListProductsPromotionService } from "../../Services/products/listProductsPromotionService";

class ListProductsPromotionController {
  async handle(req: Request, res: Response) {
    const promotion = req.query.promotion === "true";
    const company = (req.query.company as string) || "nenhum";
    const isActive = req.query.isActive
      ? req.query.isActive === "true"
      : undefined;

    const listProductsPromotionService = new ListProductsPromotionService();

    const products = await listProductsPromotionService.execute({
      isActive,
      promotion,
      company
    });

    return res.status(200).json({ products });
  }
}

export { ListProductsPromotionController };
