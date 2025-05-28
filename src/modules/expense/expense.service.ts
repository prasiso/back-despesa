import { ConflictException, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from 'src/database/prisma.service';
import { normalizeName } from 'src/shared/helper';
import { Prisma } from '@prisma/client';

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
    const expenses = await this.prismaService.expense.findFirst({ where });
    if (expenses) {
      throw new ConflictException('Já existe despesa com esse nome no banco');
    }
  }
  async create(data: CreateExpenseDto) {
    await this.validExistTitle(data.title)
    return await this.prismaService.expense.create({ data });
  }

  findAll() {
    return `This action returns all expense`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
