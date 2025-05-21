# AWS Cost Dashboard

## Overview
The AWS Cost Dashboard is a web application designed to help users monitor, forecast, and reduce their AWS costs. It provides a user-friendly interface that queries AWS Cost Explorer and other AWS APIs to analyze usage and cost patterns, offering actionable insights to optimize spending.

## Key Features
- **Cost Summary**: View a comprehensive summary of AWS costs, including visualizations and key metrics.
- **Forecasting**: Analyze historical data to predict future costs and usage trends.
- **Alerts**: Receive notifications for cost anomalies or when budget thresholds are exceeded.
- **Recommendations**: Get actionable insights to reduce costs based on usage patterns.

## Technology Stack
- **Frontend**: Next.js
- **Backend**: NestJS
- **Database**: MongoDB
- **Deployment**: AWS App Runner

## Project Structure
```
aws-cost-dashboard
├── backend
│   ├── src
│   │   ├── main.ts
│   │   ├── app.module.ts
│   │   ├── controllers
│   │   │   └── cost.controller.ts
│   │   ├── services
│   │   │   └── cost.service.ts
│   │   └── models
│   │       └── cost.model.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend
│   ├── pages
│   │   ├── index.tsx
│   │   └── dashboard.tsx
│   ├── components
│   │   ├── CostSummary.tsx
│   │   ├── Forecast.tsx
│   │   ├── Alerts.tsx
│   │   └── Recommendations.tsx
│   ├── public
│   └── package.json
├── README.md
└── .gitignore
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd aws-cost-dashboard
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

4. Configure AWS credentials and environment variables as needed.

5. Start the backend server:
   ```
   cd backend
   npm run start
   ```

6. Start the frontend application:
   ```
   cd frontend
   npm run dev
   ```

## Usage
- Access the dashboard at `http://localhost:3000/dashboard` after starting the frontend.
- Monitor costs, view forecasts, set alerts, and receive recommendations through the dashboard interface.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.