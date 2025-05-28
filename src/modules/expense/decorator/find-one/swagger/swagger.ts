import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ResponseSwagger } from './response';
export const Swagger = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Busca por id',
      description: 'Responsável por buscar despesa por id',
    }),
    ResponseSwagger(),
    ApiBearerAuth()

  );
};
