// Client
import prismaClient from "../../prisma";

class RemoveBannerService {
  async execute(id: string) {
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

    return removeBanner
  }
}

export { RemoveBannerService };
