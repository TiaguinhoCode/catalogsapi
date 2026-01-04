// Nest
import { IsOptional } from 'class-validator';

// Tipagem
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

export class FindCategoriesDto {
  pagination: PaginationDto;

  @IsOptional()
  search?: string;
}
