// Client
import prismaClient from "../../prisma";

class ListBannerService {
  async execute() {
    const banner = await prismaClient.banner.findMany({
      select: {
        id: true,
        image_url: true,
        product_id: true,
        product: {
          select: {
            name: true,
          },
        },
        created_at: true,
        updated_at: true,
      },
    });

    return { banner };
  }
}

export { ListBannerService };
