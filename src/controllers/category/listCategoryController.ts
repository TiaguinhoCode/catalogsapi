// Servidor
import { Request, Response } from "express";

// Service
import { ListCategoryService } from "../../Services/category/listCategoryServices";

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();

    const category = await listCategoryService.execute();

    return res.json({ category: category });
  }
}

export { ListCategoryController };
