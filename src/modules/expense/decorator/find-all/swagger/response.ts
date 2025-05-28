import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ResponseGlobalSwagger } from 'src/shared/decorator/response-global-swagger';
import { Resp200FindAllExposeDto } from '../dto-response';

export const ResponseSwagger = () => {
  return applyDecorators(
    ResponseGlobalSwagger(false),
    ApiResponse({
      status: 200,
      type: Resp200FindAllExposeDto,
    }),
  );
};
