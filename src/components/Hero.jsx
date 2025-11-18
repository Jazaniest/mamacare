import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-linear-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              MamaCare:<br />
              Pendataan Ibu Hamil<br />
              Hamil & Pemantauan Gizi
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Kemudihan dalam Gengaman untuk Kesehatan Ibu & Bayi
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded font-medium transition"
              >
                MASUK
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=600&fit=crop" 
              alt="Pregnant Woman" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
