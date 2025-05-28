import { Prisma } from '@prisma/client';
import { QueryFindAllExpenseDto } from '../dto';

export const expenseWhere = (query: QueryFindAllExpenseDto) => {
  const { amountMax, amountMin, search, category, dateInit, dateEnd, logical } =
    query;
  const where: Prisma.expenseWhereInput[] = [];
  if (amountMax || amountMin)
    where.push({
      amount: {
        ...(amountMin && { gte: amountMin }),
        ...(amountMax && { lte: amountMax }),
      },
    });
  if (search)
    where.push({
      title: {
        contains: search,
        mode: 'insensitive',
      },
    });
  if (category)
    where.push({
      norm_category: {
        contains: category,
        mode: 'insensitive',
      },
    });

  if (dateEnd || dateInit)
    where.push({
      date: {
        ...(dateInit && { gte: dateInit }),
        ...(dateEnd && { lte: dateEnd }),
      }
    })

  return { [logical]: where };
};
