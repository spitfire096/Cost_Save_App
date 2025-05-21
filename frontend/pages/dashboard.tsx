import React, { useEffect, useState } from 'react';
import CostSummary from '../components/CostSummary';
import Forecast from '../components/Forecast';
import Alerts from '../components/Alerts';
import Recommendations from '../components/Recommendations';

const Dashboard = () => {
    const [costData, setCostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCostData = async () => {
            try {
                const response = await fetch('/api/costs'); // Adjust the API endpoint as necessary
                if (!response.ok) {
                    throw new Error('Failed to fetch cost data');
                }
                const data = await response.json();
                setCostData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCostData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>AWS Cost Dashboard</h1>
            <CostSummary data={costData.summary} />
            <Forecast data={costData.forecast} />
            <Alerts data={costData.alerts} />
            <Recommendations data={costData.recommendations} />
        </div>
    );
};

export default Dashboard;