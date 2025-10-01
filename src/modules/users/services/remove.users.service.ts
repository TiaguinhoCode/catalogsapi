// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { UserMessages } from './../../../utils/common/messages/user.messages';

// Nest
import { BadRequestException, NotFoundException } from '@nestjs/common';

// TIpagem
import { PrismaService } from './../../../database/prisma.service';
interface RemoveUserProps {
  id: string;
  client: PrismaService;
}

export async function removeUser({ id, client }: RemoveUserProps) {
  const userExits = await ensureUniqueField({
    client,
    model: 'users',
    field: 'id',
    id: true,
    value: id,
    msg: UserMessages.USER_NOT_FOUND,
  });

  if (!userExits) throw new NotFoundException(UserMessages.USER_NOT_FOUND);

  if ((userExits as any).email === 'tiagorafael019@gmail.com')
    throw new BadRequestException(UserMessages.CANNOT_DELETE_MASTER_USER);

  const user = await client.users.delete({
    where: { id },
    omit: { passoword: true },
  });

  return user;
}
