// Servidor
import { Request, Response } from "express";

// Service
import { RemoveProductsService } from "../../Services/products/removeProductsService";

class RemoveProductsController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const removeProductsService = new RemoveProductsService();

    try {
      const removeProducts = await removeProductsService.execute({
        id,
        company,
      });

      return res.json({ message: "success", removeProducts });
    } catch (err) {
      console.log(err.message);
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }
}

export { RemoveProductsController };
