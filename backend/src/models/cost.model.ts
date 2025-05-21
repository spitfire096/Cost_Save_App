export interface CostData {
    service: string;
    usageType: string;
    cost: number;
    startDate: Date;
    endDate: Date;
}

export interface CostForecast {
    service: string;
    forecastedCost: number;
    confidenceLevel: number;
    period: string;
}

export interface CostAlert {
    message: string;
    threshold: number;
    currentCost: number;
    service: string;
    timestamp: Date;
}

export interface CostRecommendation {
    recommendation: string;
    potentialSavings: number;
    service: string;
}