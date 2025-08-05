// Nest
import { BadRequestException, NotFoundException } from '@nestjs/common';

// Client
import type { PrismaClient } from '@prisma/client';

// Tipagem
interface EnsureUniqueFieldOptions<M extends keyof PrismaClient> {
  client: PrismaClient;
  model: M;
  field: keyof PrismaClient[M] extends { where: infer W }
    ? Extract<keyof W, string>
    : string;
  value?: unknown;
  msg: string;
  id?: boolean;
  exclude?: { field: string; value: unknown };
}

export async function ensureUniqueField<M extends keyof PrismaClient>(
  options: EnsureUniqueFieldOptions<M>,
): Promise<unknown> {
  const { client, model, field, value, msg, id, exclude } = options;
  const repo = client[model] as any;

  const notClause: any = id
    ? {}
    : {
        NOT: [{ id: value as string }],
        ...(exclude
          ? { AND: [{ NOT: { [exclude.field]: exclude.value } }] }
          : {}),
      };

  const whereClause = { [field]: value, ...notClause };

  const found = id
    ? await repo.findUnique({ where: whereClause })
    : await repo.findFirst({ where: whereClause });

  if (id) {
    if (!found) throw new NotFoundException(msg);
  } else {
    if (found) throw new BadRequestException(msg);
  }

  return found;
}
