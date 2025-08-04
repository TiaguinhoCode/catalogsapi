// Nest
import { BadRequestException, NotFoundException } from '@nestjs/common';

// Services
import type { PrismaClient } from '@prisma/client';

// Tipagem
interface EnsureUniqueFieldOptions<
  M extends keyof Omit<PrismaClient, '$use' | '$disconnect' | '_internal'>,
> {
  client: PrismaClient;
  model: M;
  field: keyof PrismaClient[M] extends { where: infer W }
    ? Extract<keyof W, string>
    : string;
  value?: unknown;
  msg: string;
  id?: boolean;
}

export async function ensureUniqueField<
  M extends keyof Omit<PrismaClient, '$use' | '$disconnect' | '_internal'>,
>({
  client,
  model,
  field,
  value,
  id,
  msg,
}: EnsureUniqueFieldOptions<M>): Promise<void> {
  const where = !id ? { [field]: value, NOT: { id } } : { [field]: value };

  const found = id
    ? await client[model].findUnique({ where }) // <-- Aqui está o problema
    : await client[model].findFirst({ where });

  console.log('dados: ', found);

  if (!id) {
    if (found) {
      throw new BadRequestException(msg);
    }
  } else {
    if (!found) {
      throw new NotFoundException(msg);
    }
  }
}
