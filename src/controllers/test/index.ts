// Servidor
import { Request, Response } from "express";

// Clients
import prismaEmpresaX from "../../prisma/empresaX";
import prismaEmpresaY from "../../prisma/empresaY";

class TestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const empresa = (req.query.empresa as string) || "default";

    // Determinar qual instância do Prisma usar
    const prisma = empresa === "empresaY" ? prismaEmpresaY : prismaEmpresaX;

    try {
      // Consultando os produtos do banco de dados selecionado
      const products = await prisma.product.findMany({
        where: {
          is_active: true, // Só produtos ativos
        },
        include: {
          category: true, // Incluir a categoria associada ao produto
        },
      });

      return res.status(200).json({
        message: `Produtos da ${empresa}`,
        data: products,
      });
    } catch (error) {
      console.error("Erro ao consultar produtos:", error);
      return res.status(500).json({
        error: "Erro ao consultar produtos",
      });
    }
  }
}

export { TestController };
