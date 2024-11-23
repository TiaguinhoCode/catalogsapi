// Servidor
import { Request, Response } from "express";

// Service
import { EditOrderService } from "../../Services/order/editOrderService";

class EditOrderController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const {client, statusId, table} = req.body;

    try {
      const editOrderService = new EditOrderService();

      const editOrders = await editOrderService.execute({
        id,
        client,
        statusId,
        table,
      });

      return res.json({ message: "success", user: editOrders });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Order não encontrada!") {
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

export { EditOrderController };
