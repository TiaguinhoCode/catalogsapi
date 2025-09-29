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
import { PrismaService } from './../../database/prisma.service';

// Utils
import { ensureUniqueField } from './../../utils/fieldValidation/validation';
import { CompaniesMessages } from './../../utils/common/messages/companies.menssages';
import { WarehousesMessages } from './../../utils/common/messages/warehouses.menssages';

@Injectable()
export class CompaniesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateCompanyDto) {
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'companies',
        field: 'cnpj',
        value: data.cnpj,
        msg: CompaniesMessages.COMPANY_ALREADY_HAS_REGISTRATION,
      }),
    ]);

    if (data.warehouse_id) {
      const warehouseExits = await ensureUniqueField({
        client: this.client,
        model: 'Warehouses',
        field: 'id',
        id: true,
        value: data.warehouse_id,
        msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
      });

      if ((warehouseExits as any).is_active === false)
        throw new BadRequestException(CompaniesMessages.DEACTIVATED_WAREHOUSE);
    }

    const enterprise = await this.client.companies.create({
      data,
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

    if (!companies)
      throw new NotFoundException(CompaniesMessages.COMPANY_NOT_FOUND);

    return companies;
  }

  async findOne(id: string) {
    const companies = await ensureUniqueField({
      client: this.client,
      model: 'companies',
      field: 'id',
      id: true,
      value: id,
      msg: CompaniesMessages.COMPANY_NOT_FOUND,
    });

    return companies;
  }

  async findCompaniesByWarehouses(name: string) {
    const companies = await this.client.companies.findMany({
      where: {
        warehouse: {
          is: {
            name: { equals: name, mode: 'insensitive' },
          },
        },
      },
      include: { warehouse: { select: { name: true } } },
    });

    if (companies.length <= 0)
      throw new NotFoundException(WarehousesMessages.WAREHOUSE_NOT_FOUND);

    return companies;
  }

  async update(id: string, data: UpdateCompanyDto) {
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'companies',
        field: 'id',
        id: true,
        value: id,
        msg: CompaniesMessages.COMPANY_NOT_FOUND,
      }),
    ]);

    if (data.warehouse_id) {
      const warehouseExits = await ensureUniqueField({
        client: this.client,
        model: 'Warehouses',
        field: 'id',
        id: true,
        value: data.warehouse_id,
        msg: WarehousesMessages.WAREHOUSE_NOT_FOUND,
      });

      if ((warehouseExits as any).is_active === false)
        throw new BadRequestException(CompaniesMessages.DEACTIVATED_WAREHOUSE);
    }

    const companie = await this.client.companies.update({
      where: { id },
      data,
    });

    return companie;
  }

  async remove(id: string) {
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'companies',
        field: 'id',
        value: id,
        msg: CompaniesMessages.COMPANY_NOT_FOUND,
      }),
    ]);

    const companie = await this.client.companies.delete({
      where: { id },
    });

    return companie;
  }
}
