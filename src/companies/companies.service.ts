// Nest
import { BadRequestException, Injectable } from '@nestjs/common';

// Tipagem
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

// Database
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateCompanyDto) {
    const companiesAlreadyExist = await this.client.companies.findFirst({
      where: { cnpj: data.cnpj },
    });

    if (companiesAlreadyExist) {
      throw new BadRequestException('Empresa já tem cadastrado');
    }

    const enterprise = await this.client.companies.create({
      data: {
        company_fantasy: data.company_fantasy,
        company_reason: data.company_reason,
        company_acronym: data.company_acronym,
        logo_company: data.logo_company,
        cnpj: data.cnpj,
        cep_address: data.cep_address,
        company_number: data.company_number,
        phone: data.phone,
        is_active: data.is_active,
        warehouse_id: data.warehouse_id,
        opening_hours: data.opening_hours,
        close_hours: data.close_hours,
      },
    });

    return enterprise;
  }

  findAll() {
    return `This action returns all companies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
