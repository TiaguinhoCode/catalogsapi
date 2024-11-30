// Servidor
import { Request, Response } from "express";

// Service
import { ListBannerService } from "../../Services/banner/listBannersService";

class ListBannerController {
  async handle(req: Request, res: Response) {
    const listBannerController = new ListBannerService();
    const company = (req.query.company as string) || "nenhum";

    const banners = await listBannerController.execute(company);

    return res.json({ banners: banners });
  }
}

export { ListBannerController };
