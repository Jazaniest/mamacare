import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">M</span>
              </div>
              <span className="text-2xl font-semibold text-gray-800">MamaCare</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-teal-600 font-medium border-b-2 border-teal-600 pb-1">
              Beranda
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-teal-600">
              Pendaftaran Ibu Hamil
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-teal-600">
              Pemantauan Gizi
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link 
              to="/" 
              className="block py-2 text-teal-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              to="/dashboard" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Pendaftaran Ibu Hamil
            </Link>
            <Link 
              to="/dashboard" 
              className="block py-2 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Pemantauan Gizi
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;