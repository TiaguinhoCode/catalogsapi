// Tipagem
import { filterParams } from './../../../type/filterParams';
import { PrismaService } from './../../../database/prisma.service';
import { Prisma } from 'generated/prisma';

interface SummaryStockProps {
  client: PrismaService;
  params?: filterParams;
}

export async function summaryStock({ client, params }: SummaryStockProps) {
  const whereClause: Prisma.StocksWhereInput = {
    Products: {
      some: {
        is_active: params?.is_active,
        brand_id: params?.brand_id,
        category_id: params?.category_id,
        stock: {
          warehouse_id: params?.stock?.warehouse_id,
        },
        OR: [
          {
            name: {
              contains: params?.search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            description: {
              contains: params?.search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
          {
            brand: {
              name: {
                contains: params?.search,
                mode: Prisma.QueryMode.insensitive,
              },
            },
          },
          {
            category: {
              name: {
                contains: params?.search,
                mode: Prisma.QueryMode.insensitive,
              },
            },
          },
          {
            product_code: {
              contains: params?.search,
              mode: Prisma.QueryMode.insensitive,
            },
          },
        ],
      },
    },
  };

  const lowStockCount = await client.stocks.count({
    where: {
      current_quantity: {
        lte: client.stocks.fields.minimium_quantity,
      },
      ...whereClause,
    },
  });
  const highStockCount = await client.stocks.count({
    where: {
      current_quantity: {
        gte: client.stocks.fields.maximum_quantity,
      },
      ...whereClause,
    },
  });
  const stock = await client.stocks.aggregate({
    _sum: {
      current_quantity: true,
      cost_price: true,
      price: true,
    },
    where: {
      ...whereClause,
    },
  });

  const currentQuantity = stock._sum.current_quantity ?? 0;
  const costPrice = stock._sum.cost_price ?? 0;
  const price = stock._sum.price ?? 0;

  const totalCost = currentQuantity * costPrice;
  const totalRevenue = price * currentQuantity;
  const stockProfit = (price - costPrice) * currentQuantity;
  const marginPercentage =
    totalRevenue > 0 ? (stockProfit / totalRevenue) * 100 : 0;

  return {
    total_cost: totalCost,
    quantity_lowStock: lowStockCount,
    quantity_highStock: highStockCount,
    potential_profit_percentage: marginPercentage.toFixed(2),
  };
}
