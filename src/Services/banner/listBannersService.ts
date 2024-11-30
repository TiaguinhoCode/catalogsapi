// Client
import prismaCatalogs from "../../prisma/catalogs";

class ListBannerService {
  async execute(company: string) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

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
