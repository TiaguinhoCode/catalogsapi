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
    return { msg: 'ok', companies: await this.companiesService.findAll() };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async findOne(@Param('id') id: string) {
    return { msg: 'ok', companie: await this.companiesService.findOne(id) };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return {
      msg: 'Alteração feita com sucesso!',
      companie: await this.companiesService.update(id, updateCompanyDto),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async remove(@Param('id') id: string) {
    return {
      msg: 'Usuário removido com sucesso!',
      companie: await this.companiesService.remove(id),
    };
  }
}
