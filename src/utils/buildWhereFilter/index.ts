export function buildWhereFilter(
  model: string,
  filters: Record<string, any>,
): Record<string, any> {
  const where: Record<string, any> = {};

  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null) continue;

    // --- Suporte para chaves com ponto ("stock.warehouse.name") ---
    if (key.includes('.')) {
      const keys = key.split('.');
      let current = where;

      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (i === keys.length - 1) {
          current[k] =
            typeof value === 'string'
              ? { contains: value, mode: 'insensitive' }
              : value;
        } else {
          current[k] = current[k] || {};
          current = current[k];
        }
      }

      continue;
    }

    // --- Filtro normal ---
    if (typeof value === 'object' && !Array.isArray(value)) {
      where[key] = buildWhereFilter(model, value);
    } else if (Array.isArray(value)) {
      where[key] = { in: value };
    } else if (typeof value === 'string') {
      if (key === 'search') {
        if (model === 'products') {
          where.OR = [
            { name: { contains: value, mode: 'insensitive' } },
            { description: { contains: value, mode: 'insensitive' } },
            { brand: { name: { contains: value, mode: 'insensitive' } } },
            { category: { name: { contains: value, mode: 'insensitive' } } },
            { product_code: { contains: value, mode: 'insensitive' } },
            {
              stock: {
                warehouse: {
                  name: { contains: value, mode: 'insensitive' },
                },
              },
            },
          ];
        } else {
          where.OR = [{ name: { contains: value, mode: 'insensitive' } }];
        }
      } else {
        where[key] = value;
      }
    } else {
      where[key] = value;
    }
  }

  return where;
}
