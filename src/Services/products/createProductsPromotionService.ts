// Client
import { Decimal } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";

// Tipagem
interface CreateProductsPromotionServiceProps {
  id: string;
  discountPercentage: number;
}

class CreateProductsPromotionService {
  async execute({ id, discountPercentage }: CreateProductsPromotionServiceProps) {
    const product = await prismaClient.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new Error("Produto não encontrado!");
    }

    const price = Number(product.price);

    const discountPrice = Number(
      (price - (price * discountPercentage) / 100).toFixed(2)
    );


    const updatedProduct = await prismaClient.product.update({
      where: { id },
      data: {
        promotion: true,
        discount_percentage: discountPercentage,
        discount_price: new Decimal(discountPrice), 
        updated_at: new Date()
      },
    });

    return updatedProduct;
  }
}

export { CreateProductsPromotionService };
