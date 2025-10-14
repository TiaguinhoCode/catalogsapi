// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

// Services
import { BannersService } from './banners.service';

// Utils
import { requestResponseMessages } from '../../utils/common/messages/requestResponse.messages';

// Middleware
import { AuthGuard } from '../users/auth/auth.guard';
import { RulesGuard } from '../rules/guards/rules.guard';
import { Rules } from '../rules/decorators/rules.decorator';
import { rules } from '../rules/rules.enum';

// Tipagem
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async create(@Body() data: CreateBannerDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Banner'),
      banner: await this.bannersService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findAll() {
    const result = await this.bannersService.findAll();

    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      banners: result,
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      banner: await this.bannersService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async update(@Param('id') id: string, @Body() data: UpdateBannerDto) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('Banner'),
      banner: await this.bannersService.update({ id, data }),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('Banner'),
      banner: await this.bannersService.remove(id),
    };
  }
}
