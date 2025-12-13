// Nest
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  UseGuards,
  Request,
} from '@nestjs/common';

// Services
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';

// Guards
import { AuthGuard } from 'src/guard/auth/auth.guard';
import { Roles } from 'src/guard/rules/roles.decorator';
import { RulesGuard } from 'src/guard/rules/rules.guard';

// Tipagem
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return {
      msg: 'Successfully created user',
      user: await this.usersService.createUser(data),
    };
  }

  @Post('signin')
  async signIn(@Body() data: AuthDto) {
    const { user, access_token } = await this.authService.signIn(data);

    if (user.is_active === false)
      throw new ForbiddenException('Usuário não está ativo');

    return {
      msg: 'Successfully connected',
      user,
      token: access_token,
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return {
      msg: 'ok',
      user: req.user,
    };
  }

  @UseGuards(AuthGuard, RulesGuard)
  @Roles('Support')
  @Get()
  async findAllUsers() {
    return { msg: 'ok', users: await this.usersService.findAllUsers() };
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
