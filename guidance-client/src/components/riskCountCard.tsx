"use client";

interface RiskCountCardProps {
  level: string;
  count: number;
  percentage: number;
}

const RiskCountCard = ({ level, count, percentage }: RiskCountCardProps) => {
  // Risk level styling
  const getStyles = (level: string) => {
    switch (level) {
      case 'Low':
        return {
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          textColor: 'text-green-700',
          iconBg: 'bg-green-100',
          iconColor: 'text-green-600',
        };
      case 'Medium':
        return {
          bgColor: 'bg-yellow-50',
          borderColor: 'border-yellow-200',
          textColor: 'text-yellow-700',
          iconBg: 'bg-yellow-100',
          iconColor: 'text-yellow-600',
        };
      case 'High':
        return {
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          textColor: 'text-red-700',
          iconBg: 'bg-red-100',
          iconColor: 'text-red-600',
        };
      default:
        return {
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          textColor: 'text-gray-700',
          iconBg: 'bg-gray-100',
          iconColor: 'text-gray-600',
        };
    }
  };

  const styles = getStyles(level);

  // Icon based on risk level
  const getIcon = (level: string) => {
    switch (level) {
      case 'Low':
        return (
          <svg className={`w-8 h-8 ${styles.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'Medium':
        return (
          <svg className={`w-8 h-8 ${styles.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'High':
        return (
          <svg className={`w-8 h-8 ${styles.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.bgColor} border-2 ${styles.borderColor} rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${styles.textColor} mb-2`}>{level} Risk</h3>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-gray-800">{count}</p>
            <p className="text-sm text-gray-500">students</p>
          </div>
          <p className={`text-sm font-medium ${styles.textColor} mt-2`}>
            {percentage.toFixed(1)}% of total
          </p>
        </div>
        <div className={`${styles.iconBg} p-3 rounded-full`}>
          {getIcon(level)}
        </div>
      </div>
    </div>
  );
};

export default RiskCountCard;

