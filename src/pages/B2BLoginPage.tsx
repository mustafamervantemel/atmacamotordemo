import { Lock, Mail, LogIn, Building2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function B2BLoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Demo authentication
    if (formData.email === 'demo@atmaca.com' && formData.password === 'demo123') {
      // Redirect to B2B dashboard
      window.location.hash = '#b2b-dashboard';
    } else if (!formData.email || !formData.password) {
      setError('Lütfen tüm alanları doldurunuz');
    } else {
      setError('Geçersiz e-posta veya şifre! Demo için: demo@atmaca.com / demo123');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-4">
            <Building2 size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">B2B Portal Girişi</h1>
          <p className="text-gray-400">Yetkili Bayi & Servis Sistemi</p>
        </div>

        {/* Demo User Info */}
        <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-700/50 rounded-lg p-4 mb-4">
          <div className="text-center mb-3">
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Demo Giriş Bilgileri
            </span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between bg-black/20 rounded px-3 py-2">
              <span className="text-green-200 font-medium">E-posta:</span>
              <span className="text-white font-mono">demo@atmaca.com</span>
            </div>
            <div className="flex items-center justify-between bg-black/20 rounded px-3 py-2">
              <span className="text-green-200 font-medium">Şifre:</span>
              <span className="text-white font-mono">demo123</span>
            </div>
          </div>
        </div>

        {/* Info Alert */}
        <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 mb-6">
          <div className="flex gap-3">
            <AlertCircle className="text-blue-400 flex-shrink-0" size={20} />
            <div className="text-sm text-blue-200">
              Bu sistem sadece onaylı bayiler ve servisler için erişime açıktır.
              Giriş bilgilerinizi Atmaca Motor'dan alabilirsiniz.
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                E-posta Adresi
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="bayi@firma.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Şifre
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="ml-2 text-sm text-gray-700">Beni Hatırla</span>
              </label>
              <a href="#sifremi-unuttum" className="text-sm text-red-600 hover:text-red-700 font-medium">
                Şifremi Unuttum
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <LogIn size={20} />
              Giriş Yap
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Hesabınız yok mu?</span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <a
              href="#bayi-servis-basvuru"
              className="inline-block w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Bayi/Servis Başvurusu Yapın
            </a>
          </div>
        </div>

        {/* Help */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Giriş yaparken sorun mu yaşıyorsunuz?{' '}
            <a href="#iletisim" className="text-red-400 hover:text-red-300 font-medium">
              Destek ekibimize ulaşın
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="text-gray-400">
            <div className="text-2xl font-bold text-white mb-1">📦</div>
            <div className="text-xs">Sipariş Yönetimi</div>
          </div>
          <div className="text-gray-400">
            <div className="text-2xl font-bold text-white mb-1">📊</div>
            <div className="text-xs">Stok Takibi</div>
          </div>
          <div className="text-gray-400">
            <div className="text-2xl font-bold text-white mb-1">🔧</div>
            <div className="text-xs">Servis Yönetimi</div>
          </div>
        </div>
      </div>
    </div>
  );
}
