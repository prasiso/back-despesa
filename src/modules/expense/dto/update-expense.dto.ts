import { CreateExpenseDto } from './create-expense.dto';
import { Transform } from 'class-transformer';

export class UpdateExpenseDto extends CreateExpenseDto {
  @Transform(() => new Date())
  updatedAt: Date;

}
