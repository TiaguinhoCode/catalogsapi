// Bibliotecas
import { hash } from 'bcrypt';
import { PrismaClient } from '../../../generated/prisma';

const prisma = new PrismaClient();

const defaultRules = [
  { name: 'Suporte do Sistema' },
  { name: 'Estoque' },
  { name: 'Admin' },
  { name: 'Dono' },
  { name: 'Cliente' },
  { name: 'Financeiro' },
];

async function main() {
  await prisma.rules.createMany({
    data: defaultRules,
    skipDuplicates: true,
  });

  const rules = await prisma.rules.findMany({
    where: { name: 'Suporte do Sistema' },
  });

  const support = await prisma.users.findMany({
    where: { email: 'tiagorafael019@gmail.com' },
  });

  const secretKey = await hash(
    process.env.HASH_PASSWORD ? process.env.HASH_PASSWORD : '',
    10,
  );

  const passawordHash = await hash(
    process.env.MASTER_PASSWORD ? process.env.MASTER_PASSWORD : '',
    secretKey,
  );

  if (support.length === 0) {
    await prisma.users.create({
      data: {
        name: 'LogicHub',
        surname: 'Suporte',
        phone: '(85) 98780-5592',
        email: 'tiagorafael019@gmail.com',
        passoword: passawordHash,
        checked: true,
        cep: '60310-340',
        photo: null,
        rule_id: rules[0].id,
      },
    });
  }
  console.log(
    'Padrões de regras e usuários inseridos se ainda não existirem',
    support.length,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
