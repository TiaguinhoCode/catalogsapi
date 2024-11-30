// Client
import { PrismaClient } from "@prisma/client";

const prismaCatalogs = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL_CATALOGS, 
    },
  },
});

export default prismaCatalogs;
