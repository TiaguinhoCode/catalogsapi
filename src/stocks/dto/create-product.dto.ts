// Nest
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'Nome do produto não pode estar vazio' })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty({ message: 'O id da categoria não pode estar vazio' })
  @IsString()
  category_id: string;

  @IsNotEmpty({ message: 'O id da subcategoria não pode estar vazio' })
  @IsString()
  subcategory_id: string;

  @IsNotEmpty({ message: 'O id da marca não pode estar vazio' })
  @IsString()
  brand_id: string;

  @IsNotEmpty({ message: 'O código do produto não pode estar vazio' })
  @IsString()
  product_code: string;

  @IsNotEmpty({ message: 'A unidade de venda não pode estar vazia' })
  @IsString()
  sales_unit: string;
}
