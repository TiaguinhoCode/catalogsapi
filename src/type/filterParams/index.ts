export type filterParams = Record<string, any> & {
  is_active?: boolean;
  brand_id?: string;
  category_id?: string;
  stock?: { warehouse_id?: string; warehouse_name?: string };
  search?: string;
};
