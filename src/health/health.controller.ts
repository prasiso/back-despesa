import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { SkipAuth } from 'src/shared/global';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {
  }
  @Get('')
  @SkipAuth()
  health() {
    return this.healthService.health()
  }
}
