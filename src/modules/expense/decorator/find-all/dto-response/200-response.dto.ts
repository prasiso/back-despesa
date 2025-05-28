import { ApiProperty } from '@nestjs/swagger';
import { RespGlobal200Expense } from '../../global';
export class paginationDto {
  @ApiProperty({ type: Number, example: 1 })
  page: number
  @ApiProperty({ type: Number, example: 7 })
  lastPage: number

}
export class Resp200FindAllExposeDto {
  @ApiProperty({ example: 26057.81 })
  totalSum: number
  @ApiProperty({ type: paginationDto })
  pagination: paginationDto
  @ApiProperty({ type: Number, example: 62 })
  count: number
  @ApiProperty({ type: [RespGlobal200Expense] })
  rows: RespGlobal200Expense[]
}

