import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ResponseSwagger } from './response';
export const Swagger = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Busca de todas as despesas',
      description: 'Responsável por buscar todas as despesas',
    }),
    ResponseSwagger(),
    ApiBearerAuth()
  );
};
