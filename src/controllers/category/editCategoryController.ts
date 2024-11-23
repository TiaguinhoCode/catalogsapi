// Servidor
import { Request, Response } from "express";

// Service
import { EditCategoryService } from "../../Services/category/editCategoryService";

class EditCategoryController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const { name } = req.body;

    const editCategoryService = new EditCategoryService();

    try {
      const editCategory = await editCategoryService.execute({ id, name });

      return res.json({ message: "success", category: editCategory });
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

export { EditCategoryController };
