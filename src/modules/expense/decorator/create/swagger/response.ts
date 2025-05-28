import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import { Resp201Dto, Resp409Dto, Resp400Dto } from './dto-response';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 201,
      type: Resp201Dto,
    }),
    ApiResponse({
      status: 400,
      type: Resp400Dto
    }),
    ApiResponse({
      status: 409,
      type: Resp409Dto
    }),
  );
};
