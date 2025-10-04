import { useState } from 'react';
import { Eye, EyeOff, Lock, Building2 } from 'lucide-react';
import AtmacaLogo from '../svg/Atmaca-Motor.svg';

export default function ServiceLoginPage() {
  const [firmCode, setFirmCode] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic here
    console.log('Service login:', { firmCode, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 text-center">
            <img src={AtmacaLogo} alt="Atmaca Motor" className="h-16 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Yetkili Servis Girişi</h1>
            <p className="text-gray-600">Servis panelinize erişmek için giriş yapın</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="Firma kodunuzu girin"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Şifre
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
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  placeholder="Şifrenizi girin"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Bağlantıyı Kaydet
                </label>
              </div>
              <a href="#sifremi-unuttum" className="text-sm font-medium text-red-600 hover:text-red-700">
                Şifremi Unuttum
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Tamam
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Henüz yetkili servis değil misiniz?{' '}
              <a href="#bayi-servis" className="font-medium text-red-600 hover:text-red-700">
                Başvuru Yapın
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Atmaca Motosiklet. Tüm hakları saklıdır.
          </div>
        </div>
      </div>

      {/* Right Side - Image/Branding */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-red-900 via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Service"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative h-full flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md text-center">
            <h2 className="text-4xl font-bold mb-4">Servis Paneline Hoş Geldiniz</h2>
            <p className="text-lg text-gray-200 mb-8">
              Bakım takibi, yedek parça siparişi ve müşteri işlemlerinizi kolayca yönetin.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm text-gray-300">Yetkili Servis</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">Hızlı</div>
                <div className="text-sm text-gray-300">İşlem</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">Güvenli</div>
                <div className="text-sm text-gray-300">Sistem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
