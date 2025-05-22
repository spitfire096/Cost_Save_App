# AWS Cost Monitoring Dashboard

This project is a web application designed to help users monitor, forecast, and reduce their AWS costs through a user-friendly dashboard. The application leverages AWS Cost Explorer and other AWS APIs to analyze usage and cost patterns, providing actionable insights.

## Project Structure

The backend is built using NestJS and MongoDB, organized into several modules:

- **Costs Module**: Manages cost-related operations.
- **Budgets Module**: Handles budget creation and management.
- **Alerts Module**: Manages alerts for cost thresholds.
- **Auth Module**: Handles user authentication and authorization.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (Atlas or self-hosted)
- NestJS CLI

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in the `.env` file:
   ```
   MONGODB_URI=<your-mongodb-uri>
   ```

### Running the Application

To start the application, run:
```
npm run start
```

The application will be available at `http://localhost:3000`.

### API Endpoints

- **Costs**: `/api/costs`
- **Budgets**: `/api/budgets`
- **Alerts**: `/api/alerts`
- **Auth**: `/api/auth`

### Testing

To run the end-to-end tests, use:
```
npm run test:e2e
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.