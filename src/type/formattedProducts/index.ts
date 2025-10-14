export type ItemsStock = {
  id: string;
  url_imagem: string | null;
  name: string;
  description: string | null;
  product_code: string;
  sales_unit: string;
  brand: string | null;
  category: string | null;
  is_active: boolean;
  date_of_inactivation: Date | null;
  banners: {
    id: string;
    url_imagem: string | null;
  };
  stock: {
    id: string;
    warehouse_id: string;
    current_quantity: number;
    minimium_quantity: number;
    maximum_quantity: number;
    price: number;
    purchase_price: number;
    cost_price: number;
    has_discount: boolean;
    discount_percentage: number | null;
    created_at: Date;
    updated_at: Date;
    warehouse_name: string | null;
  };
  created_at: Date;
  updated_at: Date;
};

export type FormattedStock = {
  id: number;
  brand: string | null;
  category: string | null;
  stock: {
    quantity: number;
    warehouse_name: string | null;
  } | null;
};
