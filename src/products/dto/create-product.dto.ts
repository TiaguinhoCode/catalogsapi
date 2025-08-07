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

  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  current_quantity: number;
}
