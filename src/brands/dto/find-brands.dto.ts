// Dto
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

// Nest
import { IsOptional, IsString } from 'class-validator';

export class FindBrandsDto {
  pagination: PaginationDto;

  @IsOptional()
  @IsString()
  search?: string;
}
