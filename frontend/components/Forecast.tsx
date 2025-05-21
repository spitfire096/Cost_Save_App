import React, { useEffect, useState } from 'react';

const Forecast: React.FC = () => {
    const [forecastData, setForecastData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await fetch('/api/cost/forecast');
                if (!response.ok) {
                    throw new Error('Failed to fetch forecast data');
                }
                const data = await response.json();
                setForecastData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchForecastData();
    }, []);

    if (loading) {
        return <div>Loading forecast data...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Cost Forecast</h2>
            {forecastData && (
                <ul>
                    {forecastData.map((item: any, index: number) => (
                        <li key={index}>
                            {item.date}: ${item.forecastedCost}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Forecast;