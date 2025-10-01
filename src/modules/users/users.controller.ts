// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
  ForbiddenException,
  Query,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

// Service
import { UsersService } from './users.service';
import { AuthService } from './auth/auth.service';

// Middleware
import { AuthGuard } from './auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

// Utils
import { requestResponseMessages } from './../../utils/common/messages/requestResponse.messages';
import { UserMessages } from './../../utils/common/messages/user.messages';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { AuthDto } from './auth/dto/auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async create(@Body() data: CreateUserDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('Usuário'),
      user: await this.usersService.create(data),
    };
  }

  @Post('signin')
  async signIn(@Body() data: AuthDto) {
    const { user, access_token } = await this.authService.signIn(data);

    if (user.checked === false && user.is_active === false)
      throw new ForbiddenException('Usuário não está ativo');

    return {
      msg: UserMessages.LOGIN_SUCCESSFUL,
      user: user,
      token: access_token,
    };
  }

  @Get('verify')
  async verifyEmail(@Query('token') token: string) {
    return await this.usersService.verifyEmail(token);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      user: req.user,
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.ADMIN, rules.SUPORTE, rules.DONO)
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      users: await this.usersService.findAll(),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async findPeerId(@Param('id') id: string, @Request() req) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      user: await this.usersService.findPeerId(id, req.user.rule.name),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserDto,
    @Request() req,
  ) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('usuário'),
      user: await this.usersService.update(id, data, req.user.rule.name),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('usuário'),
      user: await this.usersService.remove(id),
    };
  }
}
