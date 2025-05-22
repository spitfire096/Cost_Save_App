import { Module } from '@nestjs/common';
import { CostsController } from './costs.controller';
import { CostsService } from './costs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CostSchema } from './schemas/cost.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cost', schema: CostSchema }]),
  ],
  controllers: [CostsController],
  providers: [CostsService],
  exports: [CostsService],
})
export class CostsModule {}