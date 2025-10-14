// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { SuppliersMessages } from '../../../utils/common/messages/suppliers.messages';

// Nest
import { NotFoundException } from '@nestjs/common';

// Utils
import { ProductsMessages } from './../../../utils/common/messages/products.menssages';

// Tipagem
import { CreateSupplierDto } from './../dto/create-supplier.dto';
import { PrismaService } from '../../../database/prisma.service';

interface CreateSuppliersProps {
  data: CreateSupplierDto;
  client: PrismaService;
}

export async function createSuppliers({ data, client }: CreateSuppliersProps) {
  await ensureUniqueField({
    client,
    model: 'suppliers',
    field: 'cnpj',
    value: data.cnpj.toLowerCase(),
    msg: SuppliersMessages.CNPJ_ALREADY_CREATED,
  });

  await ensureUniqueField({
    client,
    model: 'suppliers',
    field: 'email',
    value: data.email.toLowerCase(),
    msg: SuppliersMessages.EMAIL_ALREADY_CREATED,
  });

  if (data.products_ids) {
    const foundProducts = await client.products.findMany({
      where: {
        id: { in: data.products_ids },
      },
      select: { id: true },
    });

    if (foundProducts.length <= 0) {
      throw new NotFoundException(ProductsMessages.FILTER_NOT_FOUND);
    }
  }

  const supplier = await client.suppliers.create({
    data: {
      company_fantasy: data.company_fantasy,
      company_reason: data.company_reason,
      company_acronym: data.company_acronym,
      cnpj: data.cnpj,
      email: data.email,
      phone: data.phone,
      products: data.products_ids
        ? {
            connect: data.products_ids.map((id) => ({ id })),
          }
        : undefined,
    },
    include: {
      products: true,
    },
  });

  return supplier;
}
