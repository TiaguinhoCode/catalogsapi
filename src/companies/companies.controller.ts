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

// Guards
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { RulesGuard } from 'src/guard/rules/rules.guard';
import { Roles } from 'src/guard/rules/roles.decorator';

// Tipagem
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Post()
  async createCompany(@Body() data: CreateCompanyDto) {
    return {
      msg: 'Successfully created company',
      company: await this.companiesService.createCompanies(data),
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Get()
  async findAllCompanies() {
    return {
      msg: 'Ok',
      companys: await this.companiesService.findAllCompanies(),
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Get(':id')
  async findCompanyByID(@Param('id') id: string) {
    return {
      msg: 'Ok',
      company: await this.companiesService.findCompanyByID(id),
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Patch(':id')
  async updateCompany(@Param('id') id: string, @Body() data: UpdateCompanyDto) {
    return {
      msg: 'Successfully update company',
      company: await this.companiesService.updateCompany({ id, data }),
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Delete(':id')
  async removeCompany(@Param('id') id: string) {
    return {
      msg: 'Remove the company success',
      company: await this.companiesService.removeCompany(id),
    };
  }
}
