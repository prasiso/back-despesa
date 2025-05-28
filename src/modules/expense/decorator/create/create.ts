import { applyDecorators, Post } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_create() {
  return applyDecorators(Post(''), Swagger());
}
