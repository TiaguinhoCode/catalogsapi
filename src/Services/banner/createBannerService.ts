// Client
import prismaClient from "../../prisma";

// Tipagem
interface CrateBannerServiceProps {
  imageUrl: string;
  productId: string;
}

class CreateBannerService {
  async execute({ imageUrl, productId }: CrateBannerServiceProps) {
    const banner = await prismaClient.banner.create({
      data: {
        image_url: imageUrl,
        product_id: productId,
      },
      select: {
        id: true,
        image_url: true,
        product_id: true,
        created_at: true,
        updated_at: true,
      },
    });

    return banner;
  }
}

export { CreateBannerService };
