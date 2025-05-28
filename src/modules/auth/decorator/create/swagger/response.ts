import { applyDecorators } from '@nestjs/common';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import { Resp200Auth } from './dto-response';
import { ApiResponse } from '@nestjs/swagger';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 201,
      type: Resp200Auth,
    }),
  );
};
