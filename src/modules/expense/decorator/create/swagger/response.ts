import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import {  Resp409Dto, Resp400Dto } from './dto-response';
import { RespGlobal200Expense } from '../../global';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 201,
      type: RespGlobal200Expense,
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
