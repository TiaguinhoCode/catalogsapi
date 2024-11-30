// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tiapgem
interface EditBannerServiceProps {
  id: string;
  imageUrl?: string;
  productId?: string;
  company: string;
}

class EditBannerService {
  async execute({ id, imageUrl, productId, company }: EditBannerServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const banner = await prismaClient.banner.findUnique({
      where: { id },
    });
    const product = await prismaClient.product.findUnique({
      where: { id: productId },
    });

    if (!banner) {
      throw new Error("Banner não encontrado!");
    }

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    const updateBanner = await prismaClient.banner.update({
      where: { id },
      data: {
        image_url: imageUrl,
        product: productId ? { connect: { id: productId } } : undefined,
        updated_at: new Date(),
      },
    });

    return updateBanner;
  }
}

export { EditBannerService };
