// Bibliotecas
import { PrismaClient } from '@prisma/client';

// Tipagem
// import { PaginationDto } from './../../pagination/dto/pagination.dto';
import { PaginationDto } from './../../modules/pagination/dto/pagination.dto';

type PaginationResult = {
  skip: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
};

interface PaginationsProps<T extends keyof PrismaClient> {
  pagination?: PaginationDto;
  client: PrismaClient;
  model: T;
  where?: Record<string, any>;
}

export async function paginations<T extends keyof PrismaClient>({
  pagination,
  client,
  model,
  where,
}: PaginationsProps<T>): Promise<PaginationResult> {
  const page = pagination?.page ?? 1;
  const limit = pagination?.limit ?? 10;
  const total = await client[model].count({ where });
  const totalPages = Math.ceil(total / limit);
  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
    totalItems: total,
    totalPages,
    currentPage: page,
  };
}
