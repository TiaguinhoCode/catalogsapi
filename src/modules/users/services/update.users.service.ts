// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { UserMessages } from './../../../utils/common/messages/user.messages';
import { requestResponseMessages } from './../../../utils/common/messages/requestResponse.messages';

// Bibliotecas
import { hash } from 'bcrypt';

// Nest
import { ForbiddenException } from '@nestjs/common';

// Tipagem
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
interface UpdateUsersProps {
  id: string;
  data: UpdateUserDto;
  client: PrismaService;
  rule: string;
}

export async function updateUsers({
  id,
  data,
  client,
  rule,
}: UpdateUsersProps) {
  const master = await ensureUniqueField({
    client,
    model: 'users',
    field: 'id',
    id: true,
    value: id,
    msg: UserMessages.USER_NOT_FOUND,
  });

  const secretKey = await hash(
    process.env.HASH_PASSWORD ? process.env.HASH_PASSWORD : '',
    10,
  );

  const passawordHash = await hash(
    data.password ? data.password : '',
    secretKey,
  );

  if (
    rule !== 'Suporte do Sistema' &&
    (master as any).email === 'tiagorafael019@gmail.com'
  )
    throw new ForbiddenException(requestResponseMessages.ACCESS_NOT_PERMITTED);

  const user = await client.users.update({
    where: { id },
    data: {
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      email: data.email,
      enterprise_id: data.company_id,
      passoword: passawordHash,
      cep: data.cep,
      photo: data.photo,
      rule_id: data.rule_id,
    },
    omit: { passoword: true },
  });

  return user;
}
