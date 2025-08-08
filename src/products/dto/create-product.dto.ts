// Nest
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsNotEmpty({ message: 'Estoque não pode estar vazio' })
  stock_id: string;

  @IsNotEmpty({ message: 'Categoria não pode estar vazio' })
  category_id: string;

  @IsNotEmpty({ message: 'Marca não pode estar vazio' })
  brand_id: string;

  @IsNotEmpty({ message: 'Código do produto não pode estar vazio' })
  product_code: string;

  @IsOptional()
  description: string;

  @IsNotEmpty({ message: 'Unidade de venda não pode estar vazio' })
  sales_unit: string;

  @IsOptional()
  is_active: boolean;

  @IsOptional()
  url_imagem: string;

  @IsOptional()
  date_of_inactivation: Date;

  @IsNotEmpty({ message: 'Quantidade atual não pode estar vazio' })
  current_quantity: number;

  @IsNotEmpty({ message: 'Quantidade mínima não pode estar vazio' })
  minimium_quantity: number;

  @IsNotEmpty({ message: 'Quantidade máxima não pode estar vazio' })
  maximum_quantity: number;

  @IsNotEmpty({ message: 'Preço máxima não pode estar vazio' })
  price: number;

  @IsNotEmpty({ message: 'Preço de compra não pode estar vazio' })
  purchase_price: number;

  @IsNotEmpty({ message: 'Preço de custo não pode estar vazio' })
  cost_price: number;

  @IsOptional()
  discount_percentage: number;

  @IsOptional()
  has_discount: boolean;
}
