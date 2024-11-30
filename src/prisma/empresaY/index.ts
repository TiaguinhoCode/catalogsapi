// Client
import { PrismaClient } from "@prisma/client";

const prismaEmpresaY = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_EMPRESA_Y, // URL do banco de dados da empresaY
    },
  },
});

export default prismaEmpresaY;
