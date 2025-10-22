import { IsNotEmpty } from 'class-validator';

export class SendMenssagemDto {
  @IsNotEmpty({ message: 'Enviar para quem não pode estar vazio' })
  to: string;

  @IsNotEmpty({ message: 'Menssagem não pode estar vazio' })
  message: string;
}
