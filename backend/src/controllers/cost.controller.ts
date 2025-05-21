import { Controller, Get } from '@nestjs/common';
import { CostService } from '../services/cost.service';

@Controller('cost')
export class CostController {
  constructor(private readonly costService: CostService) {}

  @Get('summary')
  async getCostSummary() {
    return this.costService.getCostSummary();
  }

  @Get('forecast')
  async getCostForecast() {
    return this.costService.getCostForecast();
  }

  @Get('alerts')
  async getCostAlerts() {
    return this.costService.getCostAlerts();
  }

  @Get('recommendations')
  async getCostRecommendations() {
    return this.costService.getCostRecommendations();
  }
}