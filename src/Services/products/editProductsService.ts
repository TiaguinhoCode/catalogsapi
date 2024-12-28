// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface EditProductsServiceProps {
  id: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  categoryId?: string;
  price?: number;
  bannerId?: string;
  imagemUrl?: string;
  company: string;
  costPrice: number;
}

class EditProductsService {
  async execute({
    id,
    name,
    description,
    isActive,
    price,
    categoryId,
    bannerId,
    imagemUrl,
    company,
    costPrice,
  }: EditProductsServiceProps) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const product = await prismaClient.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    const banner = await prismaClient.banner.findUnique({
      where: { id: bannerId },
    });

    if (!banner) {
      throw new Error("Banner não encontrado!");
    }

    const updatedBanner = await prismaClient.banner.update({
      where: { id: bannerId },
      data: { image_url: imagemUrl },
    });

    const updateProduct = await prismaClient.product.update({
      where: { id },
      data: {
        name,
        description,
        is_active: isActive,
        price,
        cost_price: costPrice,
        updated_at: new Date(),
        category: categoryId
          ? {
              connect: { id: categoryId },
            }
          : undefined,
        Banner: bannerId
          ? {
              connect: { id: bannerId },
            }
          : undefined,
      },
    });

    return updateProduct;
  }
}

export { EditProductsService };
