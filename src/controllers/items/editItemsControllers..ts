// Servidor
import { Request, Response } from "express";

// Service
import { EditItemsService } from "../../Services/items/editItemsService";

class EditItemsControllers {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const { productId, quantity } = req.body;

    try {
      const editItemsService = new EditItemsService();

      const editItems = await editItemsService.execute({
        id,
        productId,
        quantity,
      });

      return res.json({ message: "success", items: editItems });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Item não encontrado!") {
          return res.status(404).json({ error: err.message });
        } else if (err.message === "Produto não encontrado!") {
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

export { EditItemsControllers };
