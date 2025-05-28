import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import { RespGlobal200Expense, RespGlobal404Expense } from '../../global';
export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 200,
      type: RespGlobal200Expense,
    }),
    ApiResponse({
      status: 404,
      type: RespGlobal404Expense
    }),
  );
};
