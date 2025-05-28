import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsOptional, Min } from 'class-validator';
import { TransformNumber, TransformSort } from 'src/shared/decorator';
import { normalizeName } from 'src/shared/helper';
export enum logical {
  AND = 'AND',
  OR = 'OR'
}
export class QueryFindAllExpenseDto {
  @ApiProperty({ example: 10 })
  @TransformNumber()
  @IsNotEmpty({ message: 'Deve se enviar paginação (limit)' })
  limit: number;

  @ApiProperty({ example: 1 })
  @TransformNumber()
  @IsNotEmpty({ message: 'Deve se enviar paginação (limit)' })
  page: number;

  @ApiProperty({ example: 'createdAt-asc', type: 'string', required: false })
  @IsOptional()
  @TransformSort()
  order?: { [key: string]: 'asc' | 'desc' };

  //FILTERS
  @ApiProperty({ required: false })
  @IsOptional()
  @Min(0, { message: 'valor minimo deve ser maior ou igual a 0' })
  @TransformNumber()
  amountMin?: number

  @ApiProperty({ required: false })
  @TransformNumber()
  @IsOptional()
  @Min(1, { message: 'deve ser maior do que 0' })
  amountMax?: number

  @ApiProperty({ required: false })
  @IsOptional()
  @Transform(({ value }) => normalizeName(value))
  search?: string

  @ApiProperty({ required: false })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: 'Campo data init deve ser um data válida' })
  dateInit?: Date;

  @ApiProperty({ required: false })
  @Type(() => Date)
  @IsOptional()
  @IsDate({ message: 'Campo data init deve ser um data válida' })
  dateEnd?: Date;

  @ApiProperty({ required: false })
  @Transform(({ value }) => normalizeName(value))
  @IsOptional()
  category?: string

  @ApiProperty({ required: false })
  @IsOptional()
  @Transform(({ value }: { value: string }) => value ?? 'AND')
  @Expose()
  @IsEnum(logical)
  logical: 'AND' | 'OR'
}


