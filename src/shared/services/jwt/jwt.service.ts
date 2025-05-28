import { Injectable } from '@nestjs/common';
import { JwtService as nestJwt } from '@nestjs/jwt';
@Injectable()
export class JwtService {
  constructor(private readonly jwt: nestJwt) { }
  async sign(): Promise<string> {
    const token = await this.jwt.signAsync({ sign: true });
    return token;
  }

  async verify(token: string) {
    const payload = await this.jwt.verifyAsync(token);
    return payload;
  }
}
