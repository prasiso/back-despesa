import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/shared/decorator/dto';

export class Resp400Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: [
      'Campo titulo não pode ser vazio',
      'Campo valor não pode ser vazio',
      'Campo categoria não pode ser vazio',
      'Campo data vigente não pode ser vazio',
      'Campo data vigente deve ser um data válida',
    ],
  })
  message: any;
  @ApiProperty({ example: 400 })
  status: number;
}
