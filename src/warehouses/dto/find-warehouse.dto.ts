// Next
import { IsBoolean, IsOptional, IsString } from 'class-validator';

// Dto
import { PaginationDto } from 'src/pagination/dto/pagination.dto';

export class FindWarehouseDto {
  pagination: PaginationDto;

  @IsOptional()
  @IsString()
  search?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
