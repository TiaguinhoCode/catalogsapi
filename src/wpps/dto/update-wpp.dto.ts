import { PartialType } from '@nestjs/mapped-types';
import { CreateWppDto } from './create-wpp.dto';

export class UpdateWppDto extends PartialType(CreateWppDto) {}
