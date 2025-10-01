// Nest
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Nome da categoria não pode estar vazio' })
  name: string;
}
