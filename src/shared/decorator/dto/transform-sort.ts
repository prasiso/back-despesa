import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';

export function TransformSort(acceptedCamps: string[]) {
  return Transform(({ value }) => {
    if (!value) return undefined;
    const [camp, order] = value?.split('-');
    if (!acceptedCamps.includes(camp))
      throw new BadRequestException(['Campo enviado em sort não aceito']);
    if (order !== 'asc' && order !== 'desc')
      throw new BadRequestException(
        ['Ordem enviado em sort não aceito, envie asc ou desc'],
      );

    return { [camp]: order };
  });
}
