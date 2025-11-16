import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StatisticsCards from '../components/dashboard/StatisticsCards';
import FilterTabs from '../components/dashboard/FilterTabs';
import DataTable from '../components/dashboard/DataTable';
import Footer from '../components/dashboard/Footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <AlertBanner /> */}
      <Navbar />
      <StatisticsCards />
      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Daftar Ibu Hamil</h2>
        <DataTable />
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;