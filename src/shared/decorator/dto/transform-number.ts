import { Transform } from 'class-transformer';

export function TransformNumber() {
  return Transform(({ value }) => Number(value));
}
