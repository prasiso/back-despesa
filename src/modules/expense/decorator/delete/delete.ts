import { applyDecorators, Delete } from '@nestjs/common';
import { Swagger } from './swagger';

export function d_delete() {
  return applyDecorators(Delete(':id'), Swagger());
}
