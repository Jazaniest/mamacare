import { X } from 'lucide-react';

const AlertBanner = () => {
  return (
    <div className="bg-teal-500 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm">⚠️ Demandan Naur Iatukèom</span>
        </div>
        <button className="text-white hover:text-gray-200">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default AlertBanner;
