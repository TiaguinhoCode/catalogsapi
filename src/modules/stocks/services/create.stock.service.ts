// Database
import { PrismaService } from './../../../database/prisma.service';

// Utils
import { validateStockData } from '../stock.validations';

// Tipagem
import { CreateStockDto } from '../dto/create-stock.dto';

export async function createStock({
  client,
  data,
}: {
  client: PrismaService;
  data: CreateStockDto;
}) {
  await validateStockData({ client, data });

  const bannersArr: string[] = (() => {
    if (!data.banners) return [];
    if (typeof data.banners === 'string') {
      return data.banners
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
    }
    if (Array.isArray(data.banners)) {
      return data.banners.map(String).filter(Boolean);
    }
    return [];
  })();

  const product = await client.stocks.create({
    data: {
      // seu Stocks model tem warehouse_id — você estava usando data.stock_id antes
      warehouse_id: data.stock_id, // verifique se 'data.stock_id' é o id do warehouse
      current_quantity: data.current_quantity,
      minimium_quantity: data.minimium_quantity,
      maximum_quantity: data.maximum_quantity,
      price: data.price,
      purchase_price: data.purchase_price,
      cost_price: data.cost_price,
      has_discount: !!data.has_discount,
      discount_percentage: data.has_discount
        ? (data.discount_percentage ?? null)
        : null,
      Products: {
        create: {
          name: data.name,
          category_id: data.category_id,
          brand_id: data.brand_id,
          product_code: data.product_code,
          description: data.description,
          sales_unit: data.sales_unit,
          // cria banners em nested create (array de objetos com url_imagem)
          ...(bannersArr.length > 0
            ? {
                banners: {
                  create: bannersArr.map((url) => ({
                    url_imagem: url,
                    // display_order não definido aqui — Prisma preencherá null ou use lógica para setar ordem
                  })),
                },
              }
            : {}),
        },
      },
    },
    // selecione o que quiser retornar — aqui retorna o product com banners
    select: {
      Products: {
        include: {
          banners: true,
        },
      },
    },
  });

  return product.Products;
}
