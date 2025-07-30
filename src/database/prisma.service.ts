// Nest
import { Injectable, OnModuleInit } from '@nestjs/common';

// Bibliotecas
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
