import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ResponseSwagger } from './response';
export const Swagger = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'deletar por id',
      description: 'Responsável por deletar despesa por id',
    }),
    ResponseSwagger(),
  );
};
