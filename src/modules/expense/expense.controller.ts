import {
  Controller,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import {
  CreateExpenseDto,
  UpdateExpenseDto,
  QueryFindAllExpenseDto,
} from './dto';
import {
  d_create,
  d_delete,
  d_find_all,
  d_find_one,
  d_update,
} from './decorator';
import { ApiTags } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { pagination_helper, pagination_prisma } from 'src/shared/helper';
import { expenseWhere } from './utils';

@Controller('expense')
@ApiTags('Despesa')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) { }

  @d_create()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    await this.expenseService.validExistTitle(createExpenseDto.title);
    return await this.expenseService.create(createExpenseDto);
  }

  @d_find_all()
  async findAll(@Query() query: QueryFindAllExpenseDto) {
    const { limit, page, order } = query;
    const orderBy: Prisma.expenseOrderByWithAggregationInput = order ?? {
      updatedAt: 'desc',
    };
    const where = expenseWhere(query);
    const params: Prisma.expenseFindManyArgs = {
      orderBy,
      ...pagination_prisma(limit, page),
      omit: { norm_title: true, norm_category: true },
    };
    if (where) params.where = where;
    const { rows, count, totalSum } = await this.expenseService.findAll(params);
    const data = pagination_helper(page, limit, count, rows);
    return { totalSum, ...data  };
  }

  @d_find_one()
  async findOne(@Param('id') id: string) {
    const item = await this.expenseService.findOne(id, {
      omit: { norm_title: true, norm_category: true },
    });
    if (!item) throw new NotFoundException('Não foi encontrado despesa!');
    return item;
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

  @d_delete()
  async remove(@Param('id') id: string) {
    const item = await this.expenseService.findOne(id, {
      select: { id: true },
    });
    if (!item) throw new NotFoundException('Não foi encontrado despesa!');
    return this.expenseService.remove(id);
  }
}
