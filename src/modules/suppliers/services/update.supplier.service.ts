// UTils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { SuppliersMessages } from '../../../utils/common/messages/suppliers.messages';
import { ProductsMessages } from './../../../utils/common/messages/products.menssages';

// Nest
import { NotFoundException } from '@nestjs/common';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
import { UpdateSupplierDto } from '../dto/update-supplier.dto';
interface UpdateSupplierProps {
  client: PrismaService;
  id: string;
  data: UpdateSupplierDto;
}

export async function updateSupplier({
  client,
  id,
  data,
}: UpdateSupplierProps) {
  if (data.cnpj) {
    await ensureUniqueField({
      client,
      model: 'suppliers',
      field: 'cnpj',
      value: data.cnpj?.toLowerCase(),
      msg: SuppliersMessages.CNPJ_ALREADY_CREATED,
    });
  }

  if (data.email) {
    await ensureUniqueField({
      client,
      model: 'suppliers',
      field: 'email',
      value: data.email?.toLowerCase(),
      msg: SuppliersMessages.EMAIL_ALREADY_CREATED,
    });
  }

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

  const supplier = await client.$transaction(async (pr) => {
    // Cria uma cópia de data sem o campo products_ids
    const { products_ids, ...rest } = data;

    const sup = await pr.suppliers.update({
      where: { id },
      data: {
        ...rest, // apenas os campos válidos do modelo
        products: products_ids
          ? {
              connect: products_ids.map((productId) => ({ id: productId })),
            }
          : undefined,
      },
      include: { products: true },
    });

    return sup;
  });

  return supplier;
}
