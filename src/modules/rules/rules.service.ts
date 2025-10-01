// Nest
import { Injectable } from '@nestjs/common';

// Database
import { PrismaService } from './../../database/prisma.service';

// Utils
import { RulesMessages } from './../../utils/common/messages/rules.messages';
import { ensureUniqueField } from './../../utils/fieldValidation/validation';

// Tipagem
import { CreateRuleDto } from './dto/create-rule.dto';

@Injectable()
export class RulesService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateRuleDto) {
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'rules',
        field: 'name',
        value: data.name,
        msg: RulesMessages.RULES_ALREADY_REGISTERED,
      }),
    ]);

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
    await Promise.all([
      ensureUniqueField({
        client: this.client,
        model: 'rules',
        field: 'id',
        id: true,
        value: id,
        msg: RulesMessages.RULES_NOT_FOUND,
      }),
    ]);

    const rule = await this.client.rules.delete({ where: { id } });

    return rule;
  }
}
