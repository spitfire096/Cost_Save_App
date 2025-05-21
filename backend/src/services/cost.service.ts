import { Injectable } from '@nestjs/common';
import { CostExplorer } from 'aws-sdk'; // Ensure you have aws-sdk installed
import { CostData } from '../models/cost.model';

@Injectable()
export class CostService {
    private costExplorer: CostExplorer;

    constructor() {
        this.costExplorer = new CostExplorer();
    }

    async getCostSummary(startDate: string, endDate: string): Promise<CostData> {
        const params = {
            TimePeriod: {
                Start: startDate,
                End: endDate,
            },
            Granularity: 'MONTHLY',
            Metrics: ['BlendedCost'],
        };

        const data = await this.costExplorer.getCostAndUsage(params).promise();
        return this.processCostData(data);
    }

    async getForecast(startDate: string, endDate: string): Promise<any> {
        const params = {
            TimePeriod: {
                Start: startDate,
                End: endDate,
            },
            Granularity: 'MONTHLY',
            Metrics: ['BlendedCost'],
        };

        const forecastData = await this.costExplorer.getCostForecast(params).promise();
        return forecastData;
    }

    private processCostData(data: any): CostData {
        // Process the data to extract relevant cost information
        const costData: CostData = {
            totalCost: data.ResultsByTime[0].Total.BlendedCost.Amount,
            currency: data.ResultsByTime[0].Total.BlendedCost.Unit,
            // Add more processing as needed
        };
        return costData;
    }

    // Additional methods for alerts and recommendations can be added here
}