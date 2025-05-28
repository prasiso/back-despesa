import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from 'src/shared/services/jwt/jwt.module';

@Module({
  imports: [PrismaModule, ExpenseModule, AuthModule, JwtModule],
})
export class AppModule {}
