// Servidor
import { Request, Response } from "express";

// Service
import { EditProductsService } from "../../Services/products/editProductsService";

class EditProductsContronller {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";
    const { bannerId, categoryId, description, isActive, name, price, costPrice } =
      req.body;

    try {
      const editProductsService = new EditProductsService();

      const editProduct = await editProductsService.execute({
        id,
        bannerId,
        categoryId,
        description,
        isActive,
        name,
        price,
        company,
        costPrice
      });

      return res.json({ message: "success", user: editProduct });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Produto não encontrado!") {
          return res.status(404).json({ error: err.message });
        } else {
          console.log("Error: ", err.message)
          return res.status(500).json({ error: "Erro interno do servidor" });
        }
      } else {
        return res.status(500).json({ error: "Erro desconhecido" });
      }
    }
  }
}

export { EditProductsContronller };
