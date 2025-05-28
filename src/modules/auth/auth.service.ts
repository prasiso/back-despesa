import { Injectable } from '@nestjs/common';
import { JwtService } from 'src/shared/services';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async create() {
    const token = await this.jwtService.sign();
    return { token };
  }
}
