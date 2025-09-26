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
      if (value.startsWith('%') && value.endsWith('%')) {
        where[key] = { contains: value.slice(1, -1) };
      } else if (value.startsWith('%')) {
        where[key] = { endsWith: value.slice(1) };
      } else if (value.endsWith('%')) {
        where[key] = { startsWith: value.slice(0, -1) };
      } else {
        where[key] = value;
      }
    } else {
      where[key] = value;
    }
  }

  return where;
}
