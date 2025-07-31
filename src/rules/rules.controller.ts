// Nest
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

// Services
import { RulesService } from './rules.service';

// Tipagem
import { CreateRuleDto } from './dto/create-rule.dto';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  async create(@Body() data: CreateRuleDto) {
    return {
      msg: 'Regra criado com sucesso',
      rule: await this.rulesService.create(data),
    };
  }

  @Get()
  async findAll() {
    return { msg: 'ok', rule: await this.rulesService.findAll() };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return {
      msg: 'Regra removido com sucesso!',
      rule: await this.rulesService.remove(id),
    };
  }
}
