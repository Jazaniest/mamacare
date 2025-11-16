import { useState } from 'react';

const DataTable = () => {
  const [data] = useState([
    {
      id: 1,
      nama: 'Sinta P.',
      alert: false,
      usia: '28 Minngun',
      usiaKehamilan: '6.5 (kg',
      imt: '22.5',
      status: '',
      statusColor: ''
    },
    {
      id: 2,
      nama: 'Sinta P.',
      alert: false,
      usia: '28 Minngun',
      usiaKehamilan: '65.5 kg',
      imt: '28.0',
      status: 'Normal',
      statusColor: 'text-green-600'
    },
    {
      id: 3,
      nama: 'Dewi L.',
      alert: true,
      usia: '30 Minngun',
      usiaKehamilan: '78.0 kg',
      imt: '28.0',
      status: 'Berlebih',
      statusColor: 'text-yellow-600'
    },
    {
      id: 4,
      nama: 'Aisyah B',
      alert: true,
      usia: '20 Minngun',
      usiaKehamilan: '50.0 kg',
      imt: '38.0',
      status: 'Berimin',
      statusColor: 'text-yellow-600'
    },
    {
      id: 5,
      nama: 'Fanny S.',
      alert: true,
      usia: '15 (kg',
      usiaKehamilan: '90.0 kg',
      imt: '32.0',
      status: 'Normal',
      statusColor: 'text-green-600'
    },
    {
      id: 6,
      nama: 'Rina M',
      alert: false,
      usia: '15 Minngun',
      usiaKehamilan: '58.0 kg',
      imt: '32.0',
      status: 'Normal',
      statusColor: 'text-green-600'
    }
  ]);

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Nama</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Usia Kehnailan</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">IMT Pra-Hamil</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Status Gizi</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900">{item.nama}</span>
                    {item.alert && (
                      <span className="ml-2 w-3 h-3 rounded-full border-2 border-red-500"></span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.usia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.usiaKehamilan}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.imt}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.status && (
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${item.statusColor}`}>{item.status}</span>
                      <span className={`ml-2 w-3 h-3 rounded-full ${
                        item.statusColor === 'text-green-600' ? 'border-2 border-green-500' : 'border-2 border-yellow-500'
                      }`}></span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm">
                    Detail Riwayat
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden divide-y divide-gray-200">
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <h3 className="font-semibold text-gray-900">{item.nama}</h3>
                {item.alert && (
                  <span className="ml-2 w-3 h-3 rounded-full border-2 border-red-500"></span>
                )}
              </div>
              {item.status && (
                <div className="flex items-center">
                  <span className={`text-sm font-medium ${item.statusColor}`}>{item.status}</span>
                  <span className={`ml-2 w-3 h-3 rounded-full ${
                    item.statusColor === 'text-green-600' ? 'border-2 border-green-500' : 'border-2 border-yellow-500'
                  }`}></span>
                </div>
              )}
            </div>
            <div className="space-y-1 text-sm mb-3">
              <p><span className="text-gray-500">Usia:</span> {item.usia}</p>
              <p><span className="text-gray-500">Usia Kehamilan:</span> {item.usiaKehamilan}</p>
              <p><span className="text-gray-500">IMT Pra-Hamil:</span> {item.imt}</p>
            </div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
              Detail Riwayat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
