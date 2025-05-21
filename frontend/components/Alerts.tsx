import React from 'react';

const Alerts: React.FC = () => {
    // Sample alerts data
    const alerts = [
        { id: 1, message: 'Your spending has exceeded the budget threshold for this month.', severity: 'high' },
        { id: 2, message: 'Unusual spending detected in the last week.', severity: 'medium' },
        { id: 3, message: 'Consider optimizing your resources to reduce costs.', severity: 'low' },
    ];

    return (
        <div className="alerts">
            <h2>Cost Alerts</h2>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id} className={`alert alert-${alert.severity}`}>
                        {alert.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Alerts;