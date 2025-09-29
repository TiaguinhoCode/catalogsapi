// Nest
import { IsNotEmpty } from 'class-validator';

export class CreateRuleDto {
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;
}
