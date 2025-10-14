// Nest
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSupplierDto {
  @IsNotEmpty({ message: 'Nome fantasia não pode estar vazio' })
  company_fantasy: string;

  @IsNotEmpty({ message: 'Razão social fantasia não pode estar vazio' })
  company_reason: string;

  @IsNotEmpty({ message: 'Sigla da empresa fantasia não pode estar vazio' })
  company_acronym: string;

  @IsNotEmpty({ message: 'CNPJ não pode estar vazio' })
  cnpj: string;

  @IsNotEmpty({ message: 'CNPJ não pode estar vazio' })
  email: string;

  @IsNotEmpty({ message: 'Telefone não pode estar vazio' })
  phone: string;

  @IsOptional()
  products_ids: string[];

  @IsOptional()
  is_active?: boolean;
}
