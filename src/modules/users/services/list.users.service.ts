// Nest
import { NotFoundException } from '@nestjs/common';

// Utils
import { UserMessages } from '../../../utils/common/messages/user.messages';
import { ensureUniqueField } from '../../../utils/fieldValidation/validation';

// Tipagem
import { PrismaService } from '../../../database/prisma.service';

interface ListUserProps {
  client: PrismaService;
  id?: string;
  rule?: string;
}

const userSelect = {
  id: true,
  name: true,
  email: true,
  created_at: true,
  updated_at: true,
  enterprise: {
    select: {
      id: true,
      company_acronym: true,
      company_fantasy: true,
    },
  },
  rule: { select: { id: true, name: true } },
};

export async function listUsers({ client, id, rule }: ListUserProps) {
  if (!id) {
    const users = await client.users.findMany({
      select: userSelect,
      where: { NOT: { email: 'tiagorafael019@gmail.com' } },
    });

    if (users.length === 0) {
      throw new NotFoundException(UserMessages.USER_NOT_FOUND);
    }

    return users;
  }

  await ensureUniqueField({
    client,
    model: 'users',
    field: 'id',
    id: true,
    value: id,
    msg: UserMessages.USER_NOT_FOUND,
  });

  const where: any = { id };
  
  if (rule !== 'Suporte do Sistema') {
    where.NOT = { email: 'tiagorafael019@gmail.com' };
  }

  const user = await client.users.findFirst({
    select: userSelect,
    where,
  });

  if (!user) {
    throw new NotFoundException(UserMessages.USER_NOT_FOUND);
  }

  return user;
}
