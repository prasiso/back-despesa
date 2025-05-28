import { dateRandom } from '../../src//shared/helper';
import { PrismaService } from '../../src/database/prisma.service';
import data from './mock.json';
async function main() {
  const $prisma = new PrismaService();
  console.log('INIT SEEDERS 🚀');
  await $prisma.expense.createMany({
    data: data.map((dt: any) => {
      dt.date = dateRandom();
      return dt;
    }),
  });
  console.log('END SEEDERS 🚀');
  await $prisma.$disconnect();
}

main();
