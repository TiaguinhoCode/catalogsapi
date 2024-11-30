// Servidor
import { Request, Response } from "express";

// Services
import { RemoveCategoryService } from "../../Services/category/removeCategoryService";

class RemoveCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    const removeCategoryService = new RemoveCategoryService();

    try {
      const removeCategory = await removeCategoryService.execute({id, company});

      return res.json({ message: "success", category: removeCategory });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Categoria não encontrado!") {
          return res.status(404).json({ error: err.message });
        } else {
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
      } else {
        return res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}

export { RemoveCategoryController };
