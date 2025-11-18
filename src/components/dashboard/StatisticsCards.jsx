import { Users, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

const StatisticsCards = () => {
  const stats = [
    { 
      title: 'Semua', 
      count: '125', 
      subtitle: 'Ibu Hamil', 
      color: 'border-gray-300 bg-gray-50',
      textColor: 'text-gray-700',
      icon: <Users size={20} className="text-gray-600" />
    },
    { 
      title: 'Kurang', 
      count: '10', 
      subtitle: 'Ibu Hamil', 
      color: 'border-red-200 bg-red-50',
      textColor: 'text-red-700',
      icon: <TrendingDown size={20} className="text-red-600" />
    },
    { 
      title: 'Normal', 
      count: '85', 
      subtitle: 'Ibu Hamil', 
      color: 'border-green-200 bg-green-50',
      textColor: 'text-green-700',
      icon: <TrendingUp size={20} className="text-green-600" />
    },
    { 
      title: 'Obesitas', 
      count: '10', 
      subtitle: 'Ibu Hamil', 
      color: 'border-yellow-200 bg-yellow-50',
      textColor: 'text-yellow-700',
      icon: <AlertTriangle size={20} className="text-yellow-600" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`
              border-2 rounded-xl p-3 sm:p-4 lg:p-6 
              transition-all duration-200 
              hover:shadow-md hover:scale-105
              flex flex-col
              ${stat.color}
            `}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-sm sm:text-base lg:text-lg font-semibold ${stat.textColor}`}>
                {stat.title}
              </h3>
              {stat.icon}
            </div>
            <p className={`text-xl sm:text-2xl lg:text-3xl font-bold ${stat.textColor} mt-auto`}>
              {stat.count}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsCards;