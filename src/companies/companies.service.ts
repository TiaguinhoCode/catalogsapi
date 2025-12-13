// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Utils
import { formatTime } from 'src/utils/mask/formatTime';

// Dto
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly client: PrismaService) {}

  async createCompanies(data: CreateCompanyDto) {
    const lastUserWithSession = await this.client.companies.findFirst({
      orderBy: { session_id: 'desc' },
      select: { session_id: true },
    });

    const lastSessionIdNumber = lastUserWithSession?.session_id ?? 0;
    const nextSessionId = String(Number(lastSessionIdNumber) + 1).padStart(
      5,
      '0',
    );

    const cnpjExists = await this.client.companies.findFirst({
      where: { cnpj: data.cnpj },
    });

    if (cnpjExists)
      throw new BadRequestException('Essa empresa já foi cadastrado!');

    const company = await this.client.companies.create({
      data: { ...data, session_id: nextSessionId },
    });

    return company;
  }

  async findAllCompanies() {
    const companies = await this.client.companies.findMany();

    return companies.map((company) => ({
      ...company,
      opening_hours: formatTime(company.opening_hours),
      close_hours: formatTime(company.close_hours),
    }));
  }

  async findCompanyByID(id: string) {
    const company = await this.client.companies.findUnique({ where: { id } });

    if (!company) throw new NotFoundException('Empresa não foi encontrado');

    return {
      ...company,
      opening_hours: formatTime(company.opening_hours),
      close_hours: formatTime(company.close_hours),
    };
  }

  async updateCompany({ id, data }: { id: string; data: UpdateCompanyDto }) {
    try {
      const company = await this.client.companies.update({
        where: { id },
        data,
      });

      return company;
    } catch (err) {
      throw new NotFoundException('Empresa não foi encontrada');
    }
  }

  async removeCompany(id: string) {
    try {
      const company = await this.client.companies.delete({
        where: { id },
      });
      return company;
    } catch (err) {
      if (err.code === 'P2025') {
        throw new NotFoundException('Empresa não foi encontrada');
      }
    }
  }
}
