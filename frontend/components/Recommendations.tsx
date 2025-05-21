import React from 'react';

const Recommendations: React.FC<{ recommendations: string[] }> = ({ recommendations }) => {
    return (
        <div>
            <h2>Cost Reduction Recommendations</h2>
            <ul>
                {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;