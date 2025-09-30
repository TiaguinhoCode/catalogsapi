export const fielMap = {
  id: (value: any) => value,
  url_imagem: (value: any) => value,
  name: (value: any) => value,
  description: (value: any) => value,
  brand_id: (value: any) => value ?? null,
  brand: (value: any) => value?.name ?? null,
  category_id: (value: any) => value ?? null,
  category: (value: any) => value?.name ?? null,
  price: (value: any) => value?.stock.price ?? null,
  current_quantity: (value: any) => value?.stock.current_quantity ?? null,
  has_discount: (value: any) => value?.stock.has_discount ?? null,
  discount_percentage: (value: any) => value?.stock.discount_percentage ?? null,
};
