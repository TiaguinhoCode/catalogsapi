// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

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

  async findAll() {
    const companies = await this.client.companies.findMany({
      include: {
        warehouse: {
          select: {
            name: true,
          },
        },
      },
      omit: {
        warehouse_id: true,
      },
    });

    return companies;
  }

  async findOne(id: string) {
    const companies = await this.client.companies.findFirst({
      where: { id },
      include: {
        warehouse: {
          select: {
            name: true,
          },
        },
      },
      omit: {
        warehouse_id: true,
      },
    });

    if (!companies) throw new NotFoundException('Empresa não encontrada');

    return companies;
  }

  async update(id: string, data: UpdateCompanyDto) {
    const companiesAlreadyExist = await this.client.companies.findFirst({
      where: { id },
    });

    if (!companiesAlreadyExist)
      throw new NotFoundException('Empresa não encontrada');

    const companie = await this.client.companies.update({
      where: { id },
      data,
    });

    return companie;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
