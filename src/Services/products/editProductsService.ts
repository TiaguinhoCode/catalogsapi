// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface EditProductsServiceProps {
  id: string;
  name?: string;
  description?: string;
  isActive?: boolean;
  categoryId?: string; // Novo id da categoria
  price?: number;
  bannerId?: string;
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

    const updateProduct = await prismaClient.product.update({
      where: { id },
      data: {
        name,
        description,
        is_active: isActive,
        price,
        category: categoryId
          ? {
              connect: { id: categoryId },
            }
          : undefined,
        cost_price: costPrice,
        updated_at: new Date(),
      },
    });

    return updateProduct;
  }
}

export { EditProductsService };
