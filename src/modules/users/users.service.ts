// Nest
import { Injectable } from '@nestjs/common';

// Dados
import { PrismaService } from './../../database/prisma.service';

// Service
import { MailService } from './../mail/mail.service';
import { createUser } from './services/users.create.service';
import { verifyEmail } from './services/verify.email.service';
import { listUsers } from './services/list.users.service';
import { updateUsers } from './services/update.users.service';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { removeUser } from './services/remove.users.service';

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
    return updateUsers({ id, data, client: this.client, rule });
  }

  async remove(id: string) {
    return removeUser({id, client: this.client})
  };
}
