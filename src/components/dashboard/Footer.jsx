import { Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Footer Links */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link to="/tentang" className="hover:text-teal-600">Tentant Kami</Link>
            <Link to="/faq" className="hover:text-teal-600">FAQ</Link>
            <Link to="/kebijakan" className="hover:text-teal-600">Kebijakan Privasi</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#facebook" className="text-gray-600 hover:text-teal-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#twitter" className="text-gray-600 hover:text-teal-600 transition">
              <Twitter size={20} />
            </a>
            <a href="#instagram" className="text-gray-600 hover:text-teal-600 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
