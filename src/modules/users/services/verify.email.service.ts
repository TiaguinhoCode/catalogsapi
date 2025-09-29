// Nest
import { BadRequestException } from '@nestjs/common';

// Utils
import { UserMessages } from './../../../utils/common/messages/user.messages';
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
interface VerifyEmailProps {
  client: PrismaService;
  token: string;
}

export async function verifyEmail({ client, token }: VerifyEmailProps) {
  if (!token) throw new BadRequestException(UserMessages.TOKEN_VALIDATION);

  const user = await ensureUniqueField({
    client: client,
    model: 'users',
    field: 'validation_id',
    id: true,
    value: token,
    msg: UserMessages.INVALID_TOKEN,
  });

  const today = new Date();
  const createdAt = (user as any).created_at as Date;
  const hoursPassed = (today.getTime() - createdAt.getTime()) / 1000 / 60 / 60;

  if (hoursPassed > 24) {
    await client.users.delete({ where: { id: (user as any).id } });
    throw new BadRequestException(UserMessages.EXPIRED_TOKEN);
  }

  await client.users.update({
    where: { id: (user as any).id },
    data: {
      checked: true,
      validation_id: null,
    },
  });

  return { msg: UserMessages.VERIFIED_EMAIL };
}
