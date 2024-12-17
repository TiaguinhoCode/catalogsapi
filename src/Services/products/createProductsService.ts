// Client
import prismaCatalogs from "../../prisma/catalogs";

// Tipagem
interface CreateProductsServicePros {
  name: string;
  description: string;
  price: number;
  category_id: string;
  company: string;
  costPrice?: number;
}

class CreateProductService {
  async execute({
    name,
    description,
    price,
    category_id,
    company,
    costPrice,
  }: CreateProductsServicePros) {
    const prismaClient = company === "catalogs" && prismaCatalogs;

    const productAlreadyExists = await prismaClient.product.findMany({
      where: {
        name: name,
      },
    });

    const product = await prismaClient.product.create({
      data: {
        name,
        description,
        price,
        category_id,
        cost_price: costPrice,
      },
      select: {
        id: true,
        name: true,
        description: true,
        is_active: true,
        price: true,
        cost_price: true,
        category_id: true,
        category: {
          select: {
            name: true,
          },
        },
        Banner: {
          select: {
            image_url: true,
          },
        },
        promotion: true,
        discount_percentage: true,
        discount_price: true,
        created_at: true,
        updated_at: true,
      },
    });

    return product;
  }
}

export { CreateProductService };
