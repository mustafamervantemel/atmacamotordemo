import { useState } from 'react';
import { Eye, EyeOff, Lock, User as UserIcon, Building2 } from 'lucide-react';
import AtmacaLogo from '../svg/Atmaca-Motor.svg';

export default function SalesmanLoginPage() {
  const [username, setUsername] = useState('');
  const [firmCode, setFirmCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic here
    console.log('Salesman login:', { username, firmCode, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <img src={AtmacaLogo} alt="Atmaca Motor" className="h-16 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Plasiyer Girişi</h1>
            <p className="text-gray-600">Plasiyer panelinize erişmek için giriş yapın</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-red-600">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Kullanıcı Adı
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Kullanıcı adı"
                    required
                  />
                </div>
              </div>

              {/* Firm Code Field */}
              <div>
                <label htmlFor="firm-code" className="block text-sm font-medium text-gray-700 mb-2">
                  Firma Kodu
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="firm-code"
                    type="text"
                    value={firmCode}
                    onChange={(e) => setFirmCode(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Firma kodu"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Parola
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Parola"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Giriş
              </button>
            </form>
          </div>

          {/* Help Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Giriş yaparken sorun mu yaşıyorsunuz?{' '}
              <a href="#iletisim" className="font-medium text-red-600 hover:text-red-700">
                Destek Alın
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Atmaca Motosiklet. Tüm hakları saklıdır.
          </div>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-gray-900 via-black to-red-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl" />
        </div>
        <img
          src="https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Salesman"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-red-600/20 backdrop-blur-sm rounded-full mb-4">
                <UserIcon className="w-12 h-12 text-red-500" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">Plasiyer Sistemi</h2>
            <p className="text-lg text-gray-200 mb-8">
              Sipariş alma, müşteri ziyaretleri ve satış hedeflerinizi takip edin.
            </p>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Günlük Ziyaret</div>
                <div className="text-2xl font-bold">Takibi</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Hızlı Sipariş</div>
                <div className="text-2xl font-bold">Alma</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-sm text-gray-300 mb-1">Performans</div>
                <div className="text-2xl font-bold">Raporları</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
