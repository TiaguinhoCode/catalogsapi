import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateWarehouseDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome do almoxarifado pode estar vazio' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'O id da empresa pode estar vazio' })
  company_id: string;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
