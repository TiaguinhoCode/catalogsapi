// Nest
import { Injectable } from '@nestjs/common';

// Services
import { createSuppliers } from './services/create.suppliers.service';
import { PrismaService } from './../../database/prisma.service';
import { listSuppliers } from './services/list.suppliers.service';
import { updateSupplier } from './services/update.supplier.service';
import { removeSupplier } from './services/remove.supplier.service';
import { unlinkSupplierProducts } from './services/unlinkSupplierProducts.service';

// Tipagem
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private readonly client: PrismaService) {}

  create(data: CreateSupplierDto) {
    return createSuppliers({ client: this.client, data });
  }

  findAll() {
    return listSuppliers({ client: this.client });
  }

  findOne(id: string) {
    return listSuppliers({ client: this.client, id });
  }

  update({ id, data }: { id: string; data: UpdateSupplierDto }) {
    return updateSupplier({ client: this.client, id, data });
  }

  remove(id: string) {
    return removeSupplier({ client: this.client, id });
  }

  unlinkSupplierProducts({ id, data }: { id: string; data: string[] }) {
    return unlinkSupplierProducts({ client: this.client, id, data });
  }
}
