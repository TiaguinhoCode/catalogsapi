// Nest
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Dados
import { PrismaService } from './../../database/prisma.service';

// Bibliotecas
import { hash } from 'bcrypt';

// Service
import { MailService } from './../mail/mail.service';

// Utils
import { UserMessages } from './../../utils/common/messages/user.messages';
import { CompaniesMessages } from './../../utils/common/messages/companies.menssages';
import { ensureUniqueField } from './../../utils/fieldValidation/validation';
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { createUser } from './services/users.create.service';
import { verifyEmail } from './services/verify.email.service';
import { listUsers } from './services/list.users.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly client: PrismaService,
    private mailService: MailService,
  ) {}

  create(data: CreateUserDto) {
    return createUser({
      client: this.client,
      data,
      mailService: this.mailService,
    });
  }

  verifyEmail(token: string) {
    return verifyEmail({ client: this.client, token });
  }

  async findAll() {
    return listUsers({ client: this.client });
  }

  async findPeerId(id: string, rule: string) {
    return listUsers({ client: this.client, id, rule });
  }

  async update(id: string, data: UpdateUserDto, rule: string) {
    const master = await ensureUniqueField({
      client: this.client,
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
      throw new ForbiddenException(
        requestResponseMessages.ACCESS_NOT_PERMITTED,
      );

    const user = await this.client.users.update({
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

  async remove(id: string) {
    const userExits = await ensureUniqueField({
      client: this.client,
      model: 'users',
      field: 'id',
      id: true,
      value: id,
      msg: UserMessages.USER_NOT_FOUND,
    });

    if (!userExits) throw new NotFoundException(UserMessages.USER_NOT_FOUND);

    if ((userExits as any).email === 'tiagorafael019@gmail.com')
      throw new BadRequestException(UserMessages.CANNOT_DELETE_MASTER_USER);

    const user = await this.client.users.delete({
      where: { id },
      omit: { passoword: true },
    });

    return user;
  }
}
