// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

// Services
import { CompaniesService } from './companies.service';

// Middleware
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

// Tipagem
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { AuthGuard } from './../users/auth/auth.guard';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return {
      msg: 'Empresa criado com sucesso',
      enterprise: await this.companiesService.create(createCompanyDto),
    };
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
