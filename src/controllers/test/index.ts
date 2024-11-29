import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

class TestController {
  async handle(req: Request, res: Response): Promise<Response> {
    const empresa = (req.query.empresa as string) || "default"; // Pegando o parâmetro da query string 'empresa' ou 'default'

    // Determinar qual banco de dados usar
    let prisma: PrismaClient;
// aadfadfaf
    if (empresa === "empresaY") {
      prisma = new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_EMPRESA_Y, // Usando a URL do banco de dados da empresaY
          },
        },
      });
    } else {
      prisma = new PrismaClient({
        datasources: {
          db: {
            url: process.env.DATABASE_URL, // Usando a URL do banco de dados default (padrão)
          },
        },
      });
    }

    try {
      // Consultando os produtos da empresa selecionada
      const products = await prisma.product.findMany({
        where: {
          is_active: true, // Só produtos ativos
        },
        include: {
          category: true, // Incluir a categoria associada ao produto
        },
      });

      // Retornando os produtos encontrados
      return res.status(200).json({
        message: `Produtos da ${empresa}`,
        data: products,
      });
    } catch (error) {
      console.error("Erro ao consultar produtos:", error);
      return res.status(500).json({
        error: "Erro ao consultar produtos",
      });
    } finally {
      await prisma.$disconnect(); // Fechar a conexão do Prisma
    }
  }
}

export { TestController };
