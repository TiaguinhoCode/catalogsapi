// Nest
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty({ message: 'Url da imagem não pode estar vazio' })
  url_imagem: string;

  @IsOptional()
  product_id?: string;

  @IsOptional()
  display_order?: number;
}
