import { useState } from 'react';
import { AlertCircle, ChevronRight, User } from 'lucide-react';

const DataTable = () => {
  const [data] = useState([
    {
      id: 1,
      nama: 'Sinta P.',
      alert: false,
      usia: '28 Tahun',
      usiaKehamilan: '6.5 Bulan',
      imt: '22.5',
      status: 'Normal',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      nama: 'Sinta P.',
      alert: false,
      usia: '28 Tahun',
      usiaKehamilan: '7.5 Bulan',
      imt: '28.0',
      status: 'Normal',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 3,
      nama: 'Dewi L.',
      alert: true,
      usia: '30 Tahun',
      usiaKehamilan: '5.0 Bulan',
      imt: '28.0',
      status: 'Berlebih',
      statusColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 4,
      nama: 'Aisyah B',
      alert: true,
      usia: '20 Tahun',
      usiaKehamilan: '8.0 Bulan',
      imt: '38.0',
      status: 'Kurang',
      statusColor: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 5,
      nama: 'Fanny S.',
      alert: true,
      usia: '25 Tahun',
      usiaKehamilan: '4.0 Bulan',
      imt: '32.0',
      status: 'Normal',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 6,
      nama: 'Rina M',
      alert: false,
      usia: '22 Tahun',
      usiaKehamilan: '9.0 Bulan',
      imt: '32.0',
      status: 'Normal',
      statusColor: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ]);

  //eslint-disable-next-line
  const getStatusBadge = (status, statusColor) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    
    switch(status) {
      case 'Normal':
        return `${baseClasses} bg-green-100 text-green-800`;
      case 'Berlebih':
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case 'Kurang':
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Usia</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Usia Kehamilan</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">IMT Pra-Hamil</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status Gizi</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                      <User size={16} className="text-teal-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{item.nama}</span>
                    {item.alert && (
                      <AlertCircle size={16} className="ml-2 text-red-500" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.usia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.usiaKehamilan}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.imt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(item.status, item.statusColor)}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200 flex items-center">
                    Detail
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="border-b border-gray-200 last:border-b-0 p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            {/* Header dengan nama dan status */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <User size={18} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base">{item.nama}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">{item.usia}</span>
                    {item.alert && (
                      <AlertCircle size={14} className="ml-2 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
              <span className={getStatusBadge(item.status, item.statusColor)}>
                {item.status}
              </span>
            </div>

            {/* Informasi detail */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">Usia Kehamilan</p>
                <p className="text-sm font-semibold text-gray-900">{item.usiaKehamilan}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">IMT Pra-Hamil</p>
                <p className="text-sm font-semibold text-gray-900">{item.imt}</p>
              </div>
            </div>

            {/* Tombol aksi */}
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center">
              Detail Riwayat
              <ChevronRight size={16} className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;