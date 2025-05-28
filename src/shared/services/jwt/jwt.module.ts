import { Module } from '@nestjs/common';
import { JwtModule as nestJwtModule } from '@nestjs/jwt';
import { JwtService } from './jwt.service';
@Module({
  imports: [
    nestJwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '15m' },
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class JwtModule {}
