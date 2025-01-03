// Servidor
import { Request, Response } from "express";

// Service
import { EditProductsService } from "../../Services/products/editProductsService";

class EditProductsContronller {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";
    const {
      name,
      description,
      price,
      costPrice,
      categoryId,
      bannerId,
      imagemUrl,
      isActive,
      promotion,
    } = req.body;

    try {
      const editProductsService = new EditProductsService();

      const editProduct = await editProductsService.execute({
        id,
        name,
        description,
        isActive,
        promotion,
        price,
        categoryId,
        bannerId,
        imagemUrl,
        company,
        costPrice,
      });

      return res.json({ message: "success", user: editProduct });
    } catch (err) {
      if (err instanceof Error) {
        if (
          err.message === "Produto não encontrado!" ||
          err.message === "Banner não encontrado!"
        ) {
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

export { EditProductsContronller };
