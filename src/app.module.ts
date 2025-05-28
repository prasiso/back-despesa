import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ExpenseModule } from './modules/expense/expense.module';

@Module({
  imports: [PrismaModule, ExpenseModule],
})
export class AppModule {}
