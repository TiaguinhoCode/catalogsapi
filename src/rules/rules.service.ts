// Nest
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

// Tipagem
import { CreateRuleDto } from './dto/create-rule.dto';

// Database
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class RulesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateRuleDto) {
    const ruleExists = await this.client.rules.findFirst({
      where: { name: data.name },
    });

    if (ruleExists) {
      throw new BadRequestException('Regra já tá cadastrado');
    }

    const rule = await this.client.rules.create({
      data: {
        name: data.name,
      },
    });

    return rule;
  }

  async findAll() {
    return await this.client.rules.findMany();
  }

  async remove(id: string) {
    const ruleExists = await this.client.rules.findFirst({
      where: { id },
    });

    if (!ruleExists) {
      throw new NotFoundException('Regra não encontrada');
    }

    const rule = await this.client.rules.delete({ where: { id } });

    return rule;
  }
}
