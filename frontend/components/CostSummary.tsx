import React, { useEffect, useState } from 'react';

const CostSummary = () => {
    const [costData, setCostData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCostData = async () => {
            try {
                const response = await fetch('/api/cost-summary');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCostData(data);
            } catch (error) {
                setError(error.message);
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
            <h2>Cost Summary</h2>
            {costData && (
                <div>
                    <p>Total Cost: ${costData.totalCost}</p>
                    <p>Monthly Cost: ${costData.monthlyCost}</p>
                    <p>Yearly Cost: ${costData.yearlyCost}</p>
                    {/* Add more visualizations or metrics as needed */}
                </div>
            )}
        </div>
    );
};

export default CostSummary;