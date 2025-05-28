import { applyDecorators, Post } from '@nestjs/common';
import { Swagger } from './swagger';
import { SkipAuth } from 'src/shared/global';

export function d_generate_token() {
  return applyDecorators(Post(''), Swagger(), SkipAuth());
}
