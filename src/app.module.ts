import { Module } from '@nestjs/common';
import { PrismaModule } from './database/prisma.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtModule } from 'src/shared/services/jwt/jwt.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './shared/global/guard';
import { HealthModule } from './health/health.module';

@Module({
  imports: [PrismaModule, ExpenseModule, AuthModule, JwtModule, HealthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
