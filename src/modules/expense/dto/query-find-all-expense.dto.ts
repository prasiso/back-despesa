import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { TransformSort } from 'src/shared/decorator';

export class QueryFindAllExpenseDto {
  @ApiProperty({ example: 10 })
  @Transform(({ value }) => Number(value))
  @IsNotEmpty({ message: 'Deve se enviar paginação (limit)' })
  limit: number;

  @ApiProperty({ example: 1 })
  @Transform(({ value }) => Number(value))
  @IsNotEmpty({ message: 'Deve se enviar paginação (limit)' })
  page: number;

  @ApiProperty({ example: 'createdAt-asc', type: 'string', required: false })
  @IsOptional()
  @TransformSort()
  order?: { [key: string]: 'asc' | 'desc' };
}
