// Servidor
import { Request, Response } from "express";

// Service
import { EditBannerService } from "../../Services/banner/editBannerService";

class EditBannerController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;

    const { imageUrl, productId } = req.body;

    try {
      const editBannerService = new EditBannerService();

      const editBanner = await editBannerService.execute({
        id,
        imageUrl,
        productId,
      });

      return res.json({ message: "success", banner: editBanner });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Banner não encontrado!") {
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

export { EditBannerController };
