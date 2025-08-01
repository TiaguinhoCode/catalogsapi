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

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { AuthDto } from './auth/dto/auth.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Middleware
import { AuthGuard } from './auth/auth.guard';
import { Rules } from './../rules/decorators/rules.decorator';
import { rules } from './../rules/rules.enum';
import { RulesGuard } from './../rules/guards/rules.guard';

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
      msg: 'Usuário criado com sucesso',
      user: await this.usersService.create(data),
    };
  }

  @Post('signin')
  async signIn(@Body() data: AuthDto) {
    const { user, access_token } = await this.authService.signIn(data);

    if (user.checked === false && user.is_active === false)
      throw new ForbiddenException('Usuário não está ativo');

    return {
      msg: 'Login realizado com sucesso',
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
    return { msg: 'ok', user: req.user };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.ADMIN, rules.SUPORTE, rules.DONO)
  async findAll() {
    return { msg: 'ok', users: await this.usersService.findAll() };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO)
  async findOne(@Param('id') id: string) {
    return { msg: 'ok', user: await this.usersService.findOne(id) };
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return {
      msg: 'Alteração feita com sucesso!',
      user: await this.usersService.update(id, data),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  async remove(@Param('id') id: string) {
    return {
      msg: 'Usuário removido com sucesso!',
      user: await this.usersService.remove(id),
    };
  }
}
