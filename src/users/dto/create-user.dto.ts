// Nest
import { IsNotEmpty, IsOptional, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome não pode estar vazio' })
  name: string;

  @IsNotEmpty({ message: 'Sobrenome não pode estar vazio' })
  surname: string;

  @IsNotEmpty({ message: 'Telefone não pode estar vazio' })
  phone: string;

  @IsNotEmpty({ message: 'Email não pode estar vazio' })
  email: string;

  @IsNotEmpty({ message: 'Empresa não pode estar vazio' })
  company_id;

  @IsNotEmpty({ message: 'Senha não pode estar vazio' })
  @MinLength(8, { message: 'Senha deve ter ao menos 8 caracteres' })
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).+$/, {
    message:
      'Senha precisa ter 1 maiúscula, 1 minúscula e 1 caractere especial',
  })
  password: string;

  @IsOptional()
  cep: string;

  @IsOptional()
  photo: string;

  @IsNotEmpty({ message: 'Regra não pode estar vazio' })
  rule_id: string;
}
