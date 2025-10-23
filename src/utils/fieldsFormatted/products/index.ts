export const fieldMap = {
  id: (value: any, item: any) => {
    return value ?? item.id;
  },
  banners: (value: any) => value,
  name: (value: any, item: any) => {
    return value ?? item.name;
  },
  description: (value: any, item: any) => {
    return value ?? item.description;
  },
  brand_id: (value: any, item: any) => {
    return value ?? item.brand?.id ?? null;
  },
  brand: (value: any, item: any) => {
    if (typeof value === 'string') {
      return value;
    }

    if (value && typeof value === 'object' && 'name' in value) {
      return (value as any).name;
    }
    return item.brand?.name ?? null;
  },
  category_id: (value: any, item: any) => {
    return value ?? item.category?.id ?? null;
  },
  category: (value: any, item: any) => {
    if (typeof value === 'string') {
      return value;
    }

    if (value && typeof value === 'object' && 'name' in value) {
      return (value as any).name;
    }

    return value ?? item.category?.name ?? null;
  },
  price: (value: any, item: any) => {
    if (value !== undefined && value !== null) {
      return value;
    }
    return item.stock?.price ?? null;
  },
  current_quantity: (value: any, item: any) => {
    if (value !== undefined && value !== null) {
      return value;
    }
    return item.stock?.current_quantity ?? null;
  },
  has_discount: (value: any, item: any) => {
    if (value !== undefined && value !== null) {
      return value;
    }
    return item.stock?.has_discount ?? null;
  },
  discount_percentage: (value: any, item: any) => {
    if (value !== undefined && value !== null) {
      return value;
    }
    return item.stock?.discount_percentage ?? null;
  },
};
