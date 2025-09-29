// Tipagem
type FilterValue = string | number | boolean | Date | FilterValue[] | null;

interface FilterCondition {
  [key: string]: FilterValue | { [key: string]: FilterValue };
}

export function buildWhereFilter(
  model: string,
  filters: FilterCondition,
): Record<string, any> {
  const where: Record<string, any> = {};

  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null) continue;

    if (typeof value === 'object' && !Array.isArray(value)) {
      where[key] = buildWhereFilter(model, value as FilterCondition);
    } else if (Array.isArray(value)) {
      where[key] = { in: value };
    } else if (typeof value === 'string') {
      if (key === 'search') {
        where.OR = [
          { name: { contains: value, mode: 'insensitive' } },
          { description: { contains: value, mode: 'insensitive' } },
          { brand: { name: { contains: value, mode: 'insensitive' } } },
          { category: { name: { contains: value, mode: 'insensitive' } } },
          { product_code: { contains: value, mode: 'insensitive' } },
        ];
      } else {
        where[key] = value;
      }
    } else {
      where[key] = value;
    }
  }

  return where;
}
