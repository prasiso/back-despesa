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
  constructor(private readonly prismaService: PrismaService) {}

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

  findAll() {
    return `This action returns all expense`;
  }

  async findOne(id?: string, params?: Prisma.expenseFindFirstArgs) {
    params ??= {};
    params.where ??= {};
    if (id) params.where.id = id;
    return await this.prismaService.expense.findFirst(params);
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    updateExpenseDto.updatedAt = new Date()
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

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
