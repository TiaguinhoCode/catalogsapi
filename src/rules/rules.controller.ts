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

// Middleware
import { AuthGuard } from './../users/auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

// Utils
import { requestResponseMessages } from './../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateRuleDto } from './dto/create-rule.dto';

@Controller('rules')
export class RulesController {
  constructor(private readonly rulesService: RulesService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE)
  async create(@Body() data: CreateRuleDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Regra'),
      rule: await this.rulesService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      rule: await this.rulesService.findAll(),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST,
      rule: await this.rulesService.remove(id),
    };
  }
}
