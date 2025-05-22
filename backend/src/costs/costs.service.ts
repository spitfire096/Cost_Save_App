import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cost, CostDocument } from './schemas/cost.schema';
import { CreateCostDto } from './dto/create-cost.dto';
import * as AWS from 'aws-sdk';

// AWS SDK configuration
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
const costExplorer = new AWS.CostExplorer({ apiVersion: '2017-10-25' });

@Injectable()
export class CostsService {
  constructor(@InjectModel(Cost.name) private readonly costModel: Model<CostDocument>) {}

  async create(createCostDto: CreateCostDto): Promise<Cost> {
    const createdCost = new this.costModel(createCostDto);
    return createdCost.save();
  }

  async findAll(): Promise<Cost[]> {
    return this.costModel.find().exec();
  }

  async findOne(id: string): Promise<Cost | null> {
    return this.costModel.findById(id).exec();
  }

  async update(id: string, updateCostDto: CreateCostDto): Promise<Cost | null> {
    return this.costModel.findByIdAndUpdate(id, updateCostDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Cost | null> {
    return this.costModel.findByIdAndDelete(id).exec();
  }

  async fetchAndStoreCostData(): Promise<any> {
    const params = {
      TimePeriod: {
        Start: '2024-05-01',
        End: '2024-05-31',
      },
      Granularity: 'MONTHLY',
      Metrics: ['UnblendedCost'],
    };

    const data = await costExplorer.getCostAndUsage(params).promise();
    if (data.ResultsByTime && data.ResultsByTime.length > 0) {
      const cost = {
        service: 'Total',
        amount: parseFloat(data.ResultsByTime[0]?.Total?.UnblendedCost?.Amount ?? '0'),
        date: data.ResultsByTime[0]?.TimePeriod?.Start ?? '',
      };
      const createdCost = new this.costModel(cost);
      return createdCost.save();
    }
    return null;
  }
}