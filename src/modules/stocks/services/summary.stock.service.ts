// Tipagem
import { filterParams } from './../../../type/filterParams';
import { PrismaService } from './../../../database/prisma.service';
interface SummaryStockProps {
  client: PrismaService;
  params?: filterParams;
}

export async function summaryStock({ client, params }: SummaryStockProps) {
  const products = await client.products.aggregate({
    _min: {
        
    }
    include: {
      stock: true,
    },
  });
console.log("Dados: ", products)
  return;
}
