// Servidor
import { Request, Response } from "express";

// Service
import { CreateProductsPromotionService } from "../../Services/products/createProductsPromotionService";

class CreateProductsPromotionController {
  async handle(req: Request, res: Response) {
    try {
      const company = (req.query.company as string) || "nenhum";
      const { id } = req.query;

      const { discountPercentage } = req.body;

      if (!id) {
        return res
          .status(400)
          .json({ error: "O parâmetro 'id' é obrigatório na query string!" });
      }

      if (discountPercentage === undefined) {
        return res
          .status(400)
          .json({
            error:
              "O parâmetro 'discountPercentage' é obrigatório no corpo da requisição!",
          });
      }

      const createProductsPromotionService =
        new CreateProductsPromotionService();

      const updatedProduct = await createProductsPromotionService.execute({
        id: id as string,
        discountPercentage: Number(discountPercentage),
        company
      });

      return res.status(200).json({
        message: "Promoção criada com sucesso!",
        product: updatedProduct,
      });
    } catch (error: any) {
      return res.status(400).json({
        error: error.message || "Erro ao atualizar o produto!",
      });
    }
  }
}

export { CreateProductsPromotionController };
