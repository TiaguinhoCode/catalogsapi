// Servidor
import { Request, Response } from "express";

// Service
import { ListBannerService } from "../../Services/banner/listBannersService";

class ListBannerController {
  async handle(req: Request, res: Response) {
    const listBannerController = new ListBannerService();

    const banners = await listBannerController.execute();

    return res.json({ banners: banners });
  }
}

export { ListBannerController };
