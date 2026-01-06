import { IsNotEmpty } from 'class-validator';

export class CreateSubcategoryDto {
  @IsNotEmpty({ message: 'Nome da subcategoria não pode estar vazio' })
  name: string;

  @IsNotEmpty({ message: 'ID da categoria não pode estar vazio' })
  category_id: string;
}
