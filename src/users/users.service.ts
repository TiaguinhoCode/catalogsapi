// Nest
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Dados
import { PrismaService } from 'src/database/prisma.service';

// Bibliotecas
import { hash } from 'bcrypt';

// Service
import { MailService } from './../mail/mail.service';

// Utils
import { ensureUniqueField } from 'src/utils/fieldValidation/validation';
import { UserMessages } from './../utils/common/messages/user.messages';
import { CompaniesMessages } from './../utils/common/messages/companies.menssages';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { requestResponseMessages } from 'src/utils/common/messages/requestResponse.messages';

@Injectable()
export class UsersService {
  constructor(
    private readonly client: PrismaService,
    private mailService: MailService,
  ) {}

  async create(data: CreateUserDto) {
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'users',
        field: 'email',
        value: data.email,
        msg: UserMessages.EMAIL_ALREADY_REGISTERED,
      }),
    ]);

    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'companies',
        field: 'id',
        id: true,
        value: data.company_id,
        msg: CompaniesMessages.COMPANY_NOT_FOUND,
      }),
    ]);

    const secretKey = await hash(
      process.env.HASH_PASSWORD ? process.env.HASH_PASSWORD : '',
      10,
    );

    const passawordHash = await hash(data.password, secretKey);

    const user = await this.client.users.create({
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

  async verifyEmail(token: string) {
    if (!token) throw new BadRequestException(UserMessages.TOKEN_VALIDATION);

    const user = await ensureUniqueField({
      client: this.client,
      model: 'users',
      field: 'validation_id',
      id: true,
      value: token,
      msg: UserMessages.INVALID_TOKEN,
    });

    const today = new Date();
    const createdAt = (user as any).created_at as Date;
    const hoursPassed =
      (today.getTime() - createdAt.getTime()) / 1000 / 60 / 60;

    if (hoursPassed > 24) {
      await this.client.users.delete({ where: { id: (user as any).id } });
      throw new BadRequestException(UserMessages.EXPIRED_TOKEN);
    }

    await this.client.users.update({
      where: { id: (user as any).id },
      data: {
        checked: true,
        validation_id: null,
      },
    });

    return { msg: UserMessages.VERIFIED_EMAIL };
  }

  async findAll() {
    const users = await this.client.users.findMany({
      include: {
        enterprise: {
          select: { id: true, company_acronym: true, company_fantasy: true },
        },
        rule: { select: { id: true, name: true } },
      },
      where: { NOT: { email: 'tiagorafael019@gmail.com' } },
      omit: { passoword: true },
    });

    if (!users) throw new NotFoundException(UserMessages.USER_NOT_FOUND);

    return users;
  }

  async findOne(id: string, rule: string) {
    await ensureUniqueField({
      client: this.client,
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

    const user = await this.client.users.findFirst({
      where,
      omit: { passoword: true },
    });

    return user;
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
