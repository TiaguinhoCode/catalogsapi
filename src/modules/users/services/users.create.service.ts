// Utils
import { ensureUniqueField } from './../../../utils/fieldValidation/validation';
import { UserMessages } from './../../../utils/common/messages/user.messages';
import { CompaniesMessages } from './../../../utils/common/messages/companies.menssages';

// Bibliotecas
import { hash } from 'bcrypt';

// Service
import { MailService } from './../../mail/mail.service';

// Tipagem
import { PrismaService } from './../../../database/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
interface CreateUserprops {
  client: PrismaService;
  data: CreateUserDto;
  mailService: MailService;
}

export async function createUser({ client, data }: CreateUserprops) {
  (await ensureUniqueField({
    client: client,
    model: 'users',
    field: 'email',
    value: data.email,
    msg: UserMessages.EMAIL_ALREADY_REGISTERED,
  }),
    await ensureUniqueField({
      client: client,
      model: 'companies',
      field: 'id',
      id: true,
      value: data.company_id,
      msg: CompaniesMessages.COMPANY_NOT_FOUND,
    }));

  const secretKey = await hash(
    process.env.HASH_PASSWORD ? process.env.HASH_PASSWORD : '',
    10,
  );

  const passawordHash = await hash(data.password, secretKey);

  const user = await client.users.create({
    data: {
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      email: data.email,
      passoword: passawordHash,
      cep: data.cep,
      photo: data.photo,
      rule_id: data.rule_id,
      enterprise_id: data.company_id,
    },
    omit: { passoword: true },
  });

  const link = `http://localhost:3000/v1/users/verify?token=${user.validation_id}`;
  await this.mailService.sendEmail(
    user.email ? user.email : '',
    UserMessages.EMAIL_CONFIRMATION_SUBJECT,
    UserMessages.EMAIL_CONFIRMATION_BODY(user.name, user.surname, link),
  );

  return user;
}
