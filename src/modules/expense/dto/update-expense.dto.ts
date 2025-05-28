import { CreateExpenseDto } from './create-expense.dto';
import { IsOptional } from 'class-validator';

export class UpdateExpenseDto extends CreateExpenseDto {
  @IsOptional()
  updatedAt?: Date;

}
