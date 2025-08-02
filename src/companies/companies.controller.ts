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
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async findAll() {
    return {
      msg: 'Ok',
      enterprise: await this.companiesService.findAll(),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async findOne(@Param('id') id: string) {
    return {
      msg: 'Ok',
      enterprise: await this.companiesService.findOne(id),
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return this.companiesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companiesService.remove(+id);
  }
}
