import { ApiProperty } from '@nestjs/swagger';

export class Resp201Dto {
  @ApiProperty({
    example: '1e5d85d1-20f0-4ee1-aed0-1c2ac18c8838',
    description: 'Id da despesa',
  })
  id: number;

  @ApiProperty({
    example: 'Despesa 1',
    description: 'Nome da despesa',
  })
  name: string;

  @ApiProperty({
    example: 'Luz',
    description: 'Categoria da despesa',
  })
  category: string;

  @ApiProperty({
    example: '2013-07-01T17:55:13-07:00',
    description: 'data vigente da despesa',
  })
  date: string;

  @ApiProperty({
    example: '2013-07-01T17:55:13-07:00',
    description: 'data criação do registro da despesa',
  })
  createdAt: String

  @ApiProperty({
    example: '2013-07-01T17:55:13-07:00',
    description: 'data atualização do registro da despesa',
  })
  updatedAt: String

}
