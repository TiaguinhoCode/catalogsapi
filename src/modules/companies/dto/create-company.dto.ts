// Nest
import { IsNotEmpty } from 'class-validator';
import { IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Nome fantasia da empresa não pode estar vazio' })
  company_fantasy: string;

  @IsNotEmpty({ message: 'Razão da empresa não pode estar vazio' })
  company_reason: string;

  @IsNotEmpty({ message: 'Sigla da empresa não pode estar vazio' })
  company_acronym: string;

  @IsOptional()
  logo_company: string;

  @IsNotEmpty({ message: 'CNPJ não pode estar vazio' })
  cnpj: string;

  @IsNotEmpty({ message: 'CNPJ não pode estar vazio' })
  cep_address: string;

  @IsNotEmpty({ message: 'Número do local não pode estar vazio' })
  company_number: number;

  @IsOptional()
  phone: string;

  @IsOptional()
  is_active: boolean;

  @IsOptional()
  warehouse_id: string;

  @IsNotEmpty({ message: 'Horario de abertura não pode estar vazio' })
  opening_hours: string;

  @IsNotEmpty({ message: 'Horario de abertura não pode estar vazio' })
  close_hours: string;
}
