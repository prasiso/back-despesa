import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/shared/decorator/dto';

export class Resp404Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: 'Não foi encontrado despesa!',
  })
  message: any;
  @ApiProperty({ example: 404 })
  status: number;
}
