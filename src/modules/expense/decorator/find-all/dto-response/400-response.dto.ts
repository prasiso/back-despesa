import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/shared/decorator/dto';

export class Resp400FindAllExposeDto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: [
      'Deve se enviar paginação (limit)',
      'Deve se enviar paginação (page)',
      'Ordem enviado em sort não aceito, envie asc ou desc',
      'Campo enviado em sort não aceito',
      'Campo data vigente deve ser um data válida',
      'valor máximo deve ser maior do que 0',
      'Campo data init deve ser um data válida',
      'Campo data end deve ser um data válida',
      'Campo logica deve ser AND ou OR'
    ],
  })
  message: any;
  @ApiProperty({ example: 400 })
  status: number;
}
