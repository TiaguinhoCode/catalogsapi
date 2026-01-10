// Nest
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

// Dto
import { CreateProductDTO } from './create-product.dto';

export class CreateStockDto {
  @IsNotEmpty({ message: 'O id do almoxarifado não pode estar vazio' })
  @IsString()
  warehouse_id: string;

  @IsNotEmpty({ message: 'A quantidade atual não pode estar vazio' })
  @IsInt({ message: 'Quantidade atual deve ser um inteiro' })
  @Min(0, { message: 'Quantidade atual não pode ser negativa' })
  current_quantity: number;

  @IsNotEmpty({ message: 'A quantidade mínima não pode estar vazio' })
  @IsInt({ message: 'Quantidade mínima deve ser um inteiro' })
  @Min(0, { message: 'A quantidade mínima não pode ser negativa' })
  minimum_quantity: number;

  @IsNotEmpty({ message: 'A quantidade máxima não pode estar vazio' })
  @IsInt({ message: 'Quantidade máxima deve ser um inteiro' })
  @Min(0, { message: 'Quantidade máxima não pode ser negativa' })
  maximum_quantity: number;

  @IsNotEmpty({ message: 'O preço não pode estar vazio' })
  @IsNumber({}, { message: 'O preço deve ser um número' })
  @Min(0, { message: 'O preço não pode ser negativo' })
  price: number;

  @IsNotEmpty({ message: 'O preço de compra não pode estar vazio' })
  @IsNumber({}, { message: 'O preço de compra deve ser um número' })
  @Min(0, { message: 'O preço de compra não pode ser negativo' })
  purchase_price: number;

  @IsNotEmpty({ message: 'O preço de custo não pode estar vazio' })
  @IsNumber({}, { message: 'O preço de custo deve ser um número' })
  @Min(0, { message: 'O preço de custo não pode ser negativo' })
  coast_price: number;

  @IsBoolean({ message: 'desconto deve ser um booleano' })
  @IsOptional()
  has_discount?: boolean;

  @IsOptional()
  @IsNumber({}, { message: 'A porcentagem de desconto deve ser um número' })
  @Min(0, { message: 'A porcentagem de desconto não pode ser negativa' })
  discount_percentage?: number;

  @ValidateNested()
  @Type(() => CreateProductDTO)
  product: CreateProductDTO;
}
