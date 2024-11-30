// Servidor
import { Request, Response } from "express";

// Service
import { RemoveBannerService } from "../../Services/banner/removeBannerService";

class RemoveBannerController {
  async handle(req: Request, res: Response) {
    const id = req.query.id as string;
    const company = (req.query.company as string) || "nenhum";

    try {
      const removeBannerService = new RemoveBannerService();

      const removeBanner = await removeBannerService.execute({ id, company });

      return res.json({ message: "success", banner: removeBanner });
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === "Banner não encontrado!") {
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

export { RemoveBannerController };
