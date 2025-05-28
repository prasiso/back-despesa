import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/shared/decorator/dto';

export class Resp409Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: 'Já existe despesa com esse nome no banco',
  })
  message: any;
  @ApiProperty({ example: 409 })
  status: number;
}
