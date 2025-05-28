import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ResponseSwagger } from './response';
export const Swagger = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Gerar token',
      description: 'Responsável por gerar token',
    }),
    ResponseSwagger(),
  );
};
