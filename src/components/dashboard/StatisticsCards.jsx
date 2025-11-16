const StatisticsCards = () => {
  const stats = [
    { title: 'Semua', count: '125', subtitle: 'Ibu Hamil', color: 'border-gray-300 bg-gray-50' },
    { title: 'Kurang', count: '10', subtitle: 'Ibu Hamil', color: 'border-red-300 bg-red-50' },
    { title: 'Normal', count: '85', subtitle: 'Ibu Hamil', color: 'border-green-300 bg-green-50' },
    { title: 'Obesistas', count: '10', subtitle: 'Ibu Hamil', color: 'border-yellow-300 bg-yellow-50' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`border-2 rounded-lg p-6 ${stat.color}`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
            <p className="text-gray-600 mt-1">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsCards;