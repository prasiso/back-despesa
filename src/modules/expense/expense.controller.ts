import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { d_create, d_find_one, d_update } from './decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('expense')
@ApiTags('Despesa')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @d_create()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    await this.expenseService.validExistTitle(createExpenseDto.title);
    return await this.expenseService.create(createExpenseDto);
  }

  @Get()
  findAll() {
    return this.expenseService.findAll();
  }

  @d_find_one()
  async findOne(@Param('id') id: string) {
    const item = await this.expenseService.findOne(id, {
      omit: { norm_title: true },
    });
    if (!item) throw new NotFoundException('Não foi encontrado despesa!');
    return item
  }

  @d_update()
  async update(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
  ) {
    const item = await this.expenseService.findOne(id, {
      select: { id: true },
    });
    if (!item) throw new NotFoundException('Não foi encontrado despesa!');
    await this.expenseService.validExistTitle(updateExpenseDto.title, id);
    return await this.expenseService.update(id, updateExpenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseService.remove(+id);
  }
}
