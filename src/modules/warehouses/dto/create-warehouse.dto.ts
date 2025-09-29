// Nest
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateWarehouseDto {
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsOptional()
  is_active: boolean;
}
