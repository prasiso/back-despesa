import { ApiProperty } from '@nestjs/swagger';

export class Resp200Auth {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduIjp0cnVlLCJpYXQiOjE3NDg0NTc1MzAsImV4cCI6MTc0ODQ1ODQzMH0.6q9_EoxZFRj6XGGIHXQOOsjwTfdWCKJVmFbC2EeyCgc',
  })
  token: string;
}
