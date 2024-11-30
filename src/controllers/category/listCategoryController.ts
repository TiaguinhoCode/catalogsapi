// Servidor
import { Request, Response } from "express";

// Service
import { ListCategoryService } from "../../Services/category/listCategoryServices";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();

    const company = (req.query.company as string) || "nenhum";

    const category = await listCategoryService.execute(company);

    return res.json({ category: category });
  }
}

export { ListCategoryController };
