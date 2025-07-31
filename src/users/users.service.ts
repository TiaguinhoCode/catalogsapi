// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Dados
import { PrismaService } from 'src/database/prisma.service';

// Bibliotecas
import { hash } from 'bcrypt';

// Service
import { MailService } from './../mail/mail.service';
// import { UserMessages } from 'src/utils/common/messages';
import { UserMessages } from '../../src/utils/common/messages/index';

@Injectable()
export class UsersService {
  constructor(
    private readonly client: PrismaService,
    private mailService: MailService,
  ) {}

  async create(data: CreateUserDto) {
    const emailExists = await this.client.users.findFirst({
      where: { email: data.email },
    });

    const companyExists = await this.client.companies.findFirst({
      where: { id: data.company_id },
    });

    if (emailExists) {
      throw new BadRequestException('Email já cadastrado');
    }

    if (!companyExists) {
      throw new NotFoundException('Empresa não tem cadastrado');
    }

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
    if (!token)
      throw new BadRequestException('Token é obrigatório para verificação');

    const user = await this.client.users.findUnique({
      where: { validation_id: token },
    });

    if (!user) throw new BadRequestException('Token inválido');

    const today = new Date();
    const createdAt = user.created_at as Date;
    const hoursPassed =
      (today.getTime() - createdAt.getTime()) / 1000 / 60 / 60;

    if (hoursPassed > 24) {
      await this.client.users.delete({ where: { id: user.id } });
      throw new BadRequestException('Token expirado — cadastro removido');
    }

    await this.client.users.update({
      where: { id: user.id },
      data: {
        checked: true,
        validation_id: null,
      },
    });

    return { msg: 'E‑mail verificado com sucesso!' };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
