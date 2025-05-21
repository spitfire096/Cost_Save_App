import { Module } from '@nestjs/common';
import { CostController } from './controllers/cost.controller';
import { CostService } from './services/cost.service';

@Module({
  imports: [],
  controllers: [CostController],
  providers: [CostService],
})
export class AppModule {}