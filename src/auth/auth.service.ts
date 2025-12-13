// Nest
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';

// Bibliotecas
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

// Service
import { PrismaService } from 'src/prisma/prisma.service';

// Tipagem
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly client: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(data: AuthDto): Promise<{ user; access_token: string }> {
    const user = await this.client.users.findFirst({
      where: { email: data.email },
      include: {
        enterprise: true,
      },
    });

    if (!user?.email)
      throw new NotFoundException(
        'O e-mail não está cadastrado em nossa base de dados.',
      );

    const passwordMatch = await compare(
      data.password,
      user.passoword ? user.passoword : '',
    );

    if (!passwordMatch) throw new UnauthorizedException('Senha incorreta!');

    const payload = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      email: user.email,
      cep: user.cep,
      photo: user.photo_url,
      is_active: user.is_active,
      enterprise: user.enterprise,
      rules: user.rules,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return {
      user: payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
