// Servidor
import { Request, Response } from "express";

// Service
import { CreateCategoryService } from "../../Services/category/createCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService();

    try {
      const category = await createCategoryService.execute({ name });

      return res.json({ message: "Successfully", category: category });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Categoria já existe") {
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

export { CreateCategoryController };
