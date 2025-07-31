// Nest
import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Bibliotecas
import { compare } from 'bcrypt';

// Service
import { PrismaService } from 'src/database/prisma.service';

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
        enterprise: {
          select: { id: true, company_acronym: true, company_fantasy: true },
        },
        rule: { select: { id: true, name: true } },
      },
    });

    if (!user?.email) {
      throw new NotFoundException('Usuário não cadastrado');
    }

    const passwordMatch = await compare(
      data.password,
      user.passoword ? user.passoword : '',
    );

    if (!passwordMatch) {
      throw new UnauthorizedException('Senha incorreta');
    }

    const payload = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      phone: user.phone,
      email: user.email,
      cep: user.cep,
      photo: user.photo,
      is_active: user.is_active,
      checked: user.checked,
      enterprise: user.enterprise,
      rule: user.rule,
      validation_id: user.validation_id,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };

    return {
      user: payload,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
