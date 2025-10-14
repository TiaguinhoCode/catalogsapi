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
import { SuppliersService } from './suppliers.service';

// Middleware
import { AuthGuard } from '../users/auth/auth.guard';
import { RulesGuard } from '../rules/guards/rules.guard';
import { Rules } from '../rules/decorators/rules.decorator';
import { rules } from '../rules/rules.enum';

// Utils
import { requestResponseMessages } from '../../utils/common/messages/requestResponse.messages';

// Tipagem
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async create(@Body() data: CreateSupplierDto) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_CREATION_REQUEST('fornecedores'),
      supplier: await this.suppliersService.create(data),
    };
  }

  @Get()
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findAll() {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      suppliers: await this.suppliersService.findAll(),
    };
  }

  @Get(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async findOne(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.SUCCESSFUL_REQUEST,
      supplier: await this.suppliersService.findOne(id),
    };
  }

  @Patch(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async update(@Param('id') id: string, @Body() data: UpdateSupplierDto) {
    return {
      msg: requestResponseMessages.CHANGE_REQUEST('fornecedores'),
      supplier: await this.suppliersService.update({ id, data }),
    };
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async remove(@Param('id') id: string) {
    return {
      msg: requestResponseMessages.REMOVAL_REQUEST('fornecedores'),
      supplier: await this.suppliersService.remove(id),
    };
  }

  @Delete('products/:id')
  @UseGuards(AuthGuard, RulesGuard)
  @Rules(rules.SUPORTE, rules.DONO, rules.ESTOQUE)
  async unlink(@Param('id') id: string, @Body() data: string[]) {
    return {
      msg: requestResponseMessages.UNLINK_REQUEST('produtos'),
      supplier: await this.suppliersService.unlinkSupplierProducts({
        id,
        data,
      }),
    };
  }
}
