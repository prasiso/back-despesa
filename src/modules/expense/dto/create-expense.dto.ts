import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateExpenseDto {
  @IsNotEmpty({ message: 'Campo titulo não pode ser vazio' })
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty({ message: 'Campo valor não pode ser vazio' })
  @Min(1, { message: 'Valor deve ser maior ou igual a 1' })
  @Transform(({ value }: { value: string }) =>
    typeof value === 'string' ? Number(value?.replace(/\D/g, '')) : value,
  )
  @ApiProperty({ example: 1 })
  amount: number;

  @IsNotEmpty({ message: 'Campo categoria não pode ser vazio' })
  @ApiProperty()
  category: string;

  @IsNotEmpty({ message: 'Campo data vigente não pode ser vazio' })
  @ApiProperty()
  @Type(() => Date)
  @IsDate({ message: 'Campo data vigente deve ser um data válida' })
  date: Date;
}
