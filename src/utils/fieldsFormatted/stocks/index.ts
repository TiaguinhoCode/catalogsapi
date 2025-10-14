export const fieldMap = {
  id: (value: any) => value,
  banners: (value: any) => value,
  name: (value: any) => value,
  description: (value: any) => value,
  product_code: (value: any) => value,
  sales_unit: (value: any) => value,
  brand: (value: any) => value?.name ?? null,
  category: (value: any) => value?.name ?? null,
  is_active: (value: any) => value,
  date_of_inactivation: (value: any) => value,
  stock: (value: any) =>
    value
      ? {
          id: value.id,
          warehouse_id: value.warehouse_id,
          current_quantity: value.current_quantity,
          minimium_quantity: value.minimium_quantity,
          maximum_quantity: value.maximum_quantity,
          price: value.price,
          purchase_price: value.purchase_price,
          cost_price: value.cost_price,
          has_discount: value.has_discount,
          discount_percentage: value.discount_percentage,
          created_at: value.created_at,
          updated_at: value.updated_at,
          warehouse_name: value.warehouse?.name ?? null,
        }
      : null,
  created_at: (value: any) => value,
  updated_at: (value: any) => value,
};
