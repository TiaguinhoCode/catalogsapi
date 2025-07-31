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
  Request,
  ForbiddenException,
  Query,
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
import { Rules } from 'src/rules/decorators/rules.decorator';
import { rules } from 'src/rules/rules.enum';
import { RulesGuard } from 'src/rules/guards/rules.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async create(@Body() data: CreateUserDto) {
    return {
      msg: 'Usuário criado com sucesso',
      user: await this.usersService.create(data),
    };
  }

  @Post('signin')
  @UseGuards(AuthGuard)
  @Rules(rules.SUPORTE)
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
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
