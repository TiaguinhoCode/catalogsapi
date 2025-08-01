// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

// Services
import { RulesService } from './rules.service';

// Tipagem
import { CreateRuleDto } from './dto/create-rule.dto';

// Middleware
import { AuthGuard } from './../users/auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE)
  async create(@Body() data: CreateRuleDto) {
    return {
      msg: 'Regra criado com sucesso',
      rule: await this.rulesService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE)
  async findAll() {
    return { msg: 'ok', rule: await this.rulesService.findAll() };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE)
  async remove(@Param('id') id: string) {
    return {
      msg: 'Regra removido com sucesso!',
      rule: await this.rulesService.remove(id),
    };
  }
}
