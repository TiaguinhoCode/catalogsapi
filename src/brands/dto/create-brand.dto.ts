// Nest
import { IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'Nome da marca não pode estar vazio' })
  name: string;
}
