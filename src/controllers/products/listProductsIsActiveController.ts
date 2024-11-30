// Servidor
import { Request, Response } from "express";

// Service
import { ListProductsIsActive } from "../../Services/products/listProductsIsActiveService";

class ListProductsIsActiveController {
  async handle(req: Request, res: Response) {
    // Obtendo is_active da query string
    const { is_active } = req.query;
    const company = (req.query.company as string) || "nenhum";

    // Convertendo para boolean (query strings sempre são strings)
    const active = is_active === "true";

    const listProductsIsActiveService = new ListProductsIsActive();
    const products = await listProductsIsActiveService.execute({
      is_active: active,
      company
    });

    return res.json({ products });
  }
}

export { ListProductsIsActiveController };
