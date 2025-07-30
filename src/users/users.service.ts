// Nest
import { BadRequestException, Injectable } from '@nestjs/common';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Dados
import { PrismaService } from 'src/database/prisma.service';

// Bibliotecas
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateUserDto) {
    const emailExists = await this.client.users.findFirst({
      where: { email: data.email },
    });

    if (emailExists) {
      throw new BadRequestException('Email já cadastrado');
    }
    console.log('Dados: ', data);
    if (!data.email) {
      throw new BadRequestException('Email não pode estar vazio');
    }

    if (!data.password) {
      throw new BadRequestException('Senha não pode estar vazio');
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
      },
      omit: { passoword: true },
    });

    return user;
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
