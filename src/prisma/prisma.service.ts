// Nest
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

// Bibliotecas
import { PrismaClient } from './../../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    });
    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$queryRaw`SELECT 1`;
      Logger.log('Database connection estabilished');
    } catch (err) {
      Logger.error('Database connection failed', err);
      throw err;
    }
  }
}
