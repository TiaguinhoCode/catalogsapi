// Client
import { PrismaClient } from "@prisma/client";

const prismaEmpresaX = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL, // URL do banco de dados padrão
    },
  },
});

export default prismaEmpresaX;
