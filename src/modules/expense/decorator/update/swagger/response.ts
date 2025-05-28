import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import { Resp200Dto, Resp409Dto, Resp400Dto, Resp404Dto } from './dto-response';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 200,
      type: Resp200Dto,
    }),
    ApiResponse({
      status: 400,
      type: Resp400Dto
    }),
    ApiResponse({
      status: 409,
      type: Resp409Dto
    }),
    ApiResponse({
      status: 404,
      type: Resp404Dto
    }),
  );
};
