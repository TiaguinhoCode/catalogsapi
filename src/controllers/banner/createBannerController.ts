// Servidor
import { Request, Response } from "express";

// Service
import { CreateBannerService } from "../../Services/banner/createBannerService";

class CreateBaannerController {
  async handle(req: Request, res: Response) {
    const { imageUrl, productId } = req.body;

    const createBannerService = new CreateBannerService();

    const banner = await createBannerService.execute({ imageUrl, productId });
    console.log("Banner: ", banner);
    return res.json({ message: "Successfully", banner: banner });
  }
}

export { CreateBaannerController };
