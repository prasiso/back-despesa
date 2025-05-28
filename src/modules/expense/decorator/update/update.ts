import { applyDecorators, Put } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_update() {
  return applyDecorators(Put(':id'), Swagger());
}
