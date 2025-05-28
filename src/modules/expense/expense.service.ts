import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from 'src/database/prisma.service';
import { normalizeName } from 'src/shared/helper';
import { Prisma } from '@prisma/client';
import { title } from 'process';

@Injectable()
export class ExpenseService {
  constructor(private readonly prismaService: PrismaService) { }

  async validExistTitle(title: string, id?: string) {
    const norm = normalizeName(title);
    const where: Prisma.expenseWhereInput = {
      norm_title: norm,
    };
    if (id) {
      where.id = {
        not: id,
      };
    }
    const expenses = await this.findOne(undefined, { where });
    if (expenses) {
      throw new ConflictException('Já existe despesa com esse nome no banco');
    }
  }
  async create(data: CreateExpenseDto) {
    return await this.prismaService.expense.create({
      data,
      omit: {
        norm_title: true,
      },
    });
  }

  async findAll(params: Prisma.expenseFindManyArgs, isSum = true) {
    const exp = this.prismaService.expense;
    const req: any = [
      exp.findMany(params),
      exp.count({
        where: params.where,
      }),
    ]
    if (isSum && params.where)
      req.push(exp.aggregate({ _sum: { amount: true }, where: params.where }))
    const [rows, count, totalSum] = await Promise.all(req);
    return { rows, count, totalSum: totalSum?._sum?.amount || 0 };
  }

  async findOne(id?: string, params?: Prisma.expenseFindFirstArgs) {
    params ??= {};
    params.where ??= {};
    if (id) params.where.id = id;
    return await this.prismaService.expense.findFirst(params);
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    updateExpenseDto.updatedAt = new Date();
    return await this.prismaService.expense.update({
      where: {
        id,
      },
      data: updateExpenseDto,
      omit: {
        norm_title: true,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.expense.delete({
      where: { id },
      omit: { norm_title: true, norm_category: true },
    });
  }
}
