// Servidor
import { Request, Response } from "express";

// Service
import { CreateProductService } from "../../Services/products/createProductsService";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const { name, description, price, category_id } = req.body;
    const company = (req.query.company as string) || "nenhum";

    const createProductsService = new CreateProductService();

    try {
      const products = await createProductsService.execute({
        name,
        description,
        price,
        category_id,
        company
      });

      return res.json({ message: "Successfully", category: products });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: "Erro interno do servidor" });
      } else {
        return res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}

export { CreateProductsController };
