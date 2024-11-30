// Client
import prismaCatalogs from "../../prisma/catalogs";

interface RemoveBannerServiceProps {
  id: string;
  company: string;
}

class RemoveBannerService {
  async execute({ id, company }: RemoveBannerServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const banner = await prismaClient.banner.findUnique({
      where: {
        id,
      },
    });

    if (!banner) {
      throw new Error("Banner não encontrado!");
    }

    const removeBanner = await prismaClient.banner.delete({
      where: {
        id,
      },
    });

    return removeBanner;
  }
}

export { RemoveBannerService };
