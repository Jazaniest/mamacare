const FilterTabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Semua', 'Normal', 'Berbelih', 'Obesiss'];

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-2 font-medium text-sm whitespace-nowrap border-b-2 transition ${
                activeTab === tab
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
