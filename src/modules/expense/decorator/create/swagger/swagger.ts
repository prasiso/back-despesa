import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { ResponseSwagger } from './response';
export const Swagger = () => {
  return applyDecorators(
    ApiOperation({
      summary: 'Criar',
      description: 'Responsável por criar despesa',
    }),
    ResponseSwagger(),
    ApiBearerAuth()
  );
};
