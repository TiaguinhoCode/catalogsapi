// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CrateBannerServiceProps {
  imageUrl: string;
  productId: string;
  company: string;
}

class CreateBannerService {
  async execute({ imageUrl, productId, company }: CrateBannerServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
