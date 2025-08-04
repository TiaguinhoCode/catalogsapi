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
import { AuthGuard } from './../users/auth/auth.guard';

// Utils
import { requestResponseMessages } from './../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Empresa'),
      enterprise: await this.companiesService.create(createCompanyDto),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      enterprise: await this.companiesService.findAll(),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      enterprise: await this.companiesService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async update(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Empresa'),
      enterprise: await this.companiesService.update(id, data),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.DONO, rules.SUPORTE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('Empresa'),
      enterprise: await this.companiesService.remove(id),
    };
  }
}
