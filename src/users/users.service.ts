// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Services
import { PrismaService } from 'src/prisma/prisma.service';

// Bibliotecas
import { hash } from 'bcrypt';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly client: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const secrectKey = await hash(
      process.env.HASH_PASSWORD ? process.env.HASH_PASSWORD : '',
      10,
    );
    const pswrdHash = await hash(data.password, secrectKey);
    const emailExists = await this.client.users.findFirst({
      where: { email: data.email },
    });
    const companyExist = await this.client.companies.findUnique({
      where: { id: data.enterprise_id },
    });

    if (!companyExist)
      throw new NotFoundException('Empresa não foi encontrado!');
    if (emailExists) throw new BadRequestException('E-mail já tá cadastrado!');

    const user = await this.client.users.create({
      data: {
        name: data.name,
        surname: data.surname,
        phone: data.phone,
        cep: data.cep,
        photo_url: data.photo,
        email: data.email,
        passoword: pswrdHash,
        enterprise_id: data.enterprise_id,
        rules: data.rules,
      },
      omit: { passoword: true },
    });

    return user;
  }

  async findAllUsers() {
    const users = await this.client.users.findMany({
      omit: { passoword: true },
      include: { enterprise: true },
    });

    return users;
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
