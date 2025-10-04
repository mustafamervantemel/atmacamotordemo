import { useState } from 'react';
import { ChevronLeft, Gauge, Zap, Settings, Layers } from 'lucide-react';

export default function ModelDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('engine');
  const [imageLoaded, setImageLoaded] = useState(false);

  const images = [
    'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  const tabs = [
    { id: 'engine', label: 'Motor Detayı', icon: Settings },
    { id: 'chassis', label: 'Şasi & Fren', icon: Layers },
    { id: 'dimensions', label: 'Boyutlar', icon: Gauge },
    { id: 'electrical', label: 'Elektrik', icon: Zap }
  ];

  const specs = {
    engine: [
      { label: 'Motor Hacmi', value: '134.536 ml (ACTUAL)', sublabel: 'Cubic Measure' },
      { label: 'Maksimum Güç', value: '207 hp, 500 Nm', sublabel: 'Power & Torque' },
      { label: 'Motor Tipi', value: '4x4, 10 Speed', sublabel: 'Drive Type & Gear Box' },
      { label: 'Motor Konfigürasyonu', value: '2.0L Diesel Engine, 4 Cylinder 16 Valve', sublabel: 'Engine Type' },
      { label: 'Vites Tipi', value: 'Automatic', sublabel: 'Transmission' },
      { label: 'VIN', value: '2T3YL4DV0EW******', sublabel: 'Vin' }
    ],
    chassis: [
      { label: 'Ön Süspansiyon', value: 'Teleskopik, 41mm', sublabel: 'Front Suspension' },
      { label: 'Arka Süspansiyon', value: 'Mono Şok', sublabel: 'Rear Suspension' },
      { label: 'Ön Fren', value: 'Çift Disk, ABS', sublabel: 'Front Brake' },
      { label: 'Arka Fren', value: 'Tek Disk, ABS', sublabel: 'Rear Brake' },
      { label: 'Lastik', value: '110/70-17 / 140/70-17', sublabel: 'Tire Size' },
      { label: 'Jant', value: '17 inch', sublabel: 'Wheel Size' }
    ],
    dimensions: [
      { label: 'Uzunluk', value: '2,080 mm', sublabel: 'Length' },
      { label: 'Genişlik', value: '785 mm', sublabel: 'Width' },
      { label: 'Yükseklik', value: '1,115 mm', sublabel: 'Height' },
      { label: 'Aks Mesafesi', value: '1,395 mm', sublabel: 'Wheelbase' },
      { label: 'Ağırlık', value: '168 kg', sublabel: 'Weight' },
      { label: 'Yakıt Deposu', value: '15.5 L', sublabel: 'Fuel Tank' }
    ],
    electrical: [
      { label: 'Akü', value: '12V 8Ah', sublabel: 'Battery' },
      { label: 'Farlar', value: 'Full LED', sublabel: 'Headlights' },
      { label: 'Gösterge', value: 'Dijital LCD', sublabel: 'Instrument Panel' },
      { label: 'ABS', value: 'Var', sublabel: 'ABS System' },
      { label: 'USB', value: 'Var', sublabel: 'USB Charging' },
      { label: 'Alarm', value: 'Opsiyonel', sublabel: 'Security' }
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Premium Header */}
      <div className="glass border-b border-white/10 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-1 hover:text-white transition-colors mr-2 -ml-2"
            >
              <ChevronLeft size={20} />
              <span className="font-medium">Geri</span>
            </button>
            <a href="#" className="hover:text-white transition-colors">Ana Sayfa</a>
            <span>›</span>
            <a href="#modeller" className="hover:text-white transition-colors">Modeller</a>
            <span>›</span>
            <a href="#modeller/touring" className="hover:text-white transition-colors">Touring</a>
            <span>›</span>
            <span className="text-white font-medium">AR250</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Atmaca AR250</h1>
            <div className="hidden md:flex items-center gap-2">
              <div className="px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                2025 Model
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Left - Premium Vertical Thumbnails */}
          <div className="hidden md:flex flex-col gap-4">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index);
                  setImageLoaded(false);
                }}
                className={`group w-28 h-28 rounded-xl overflow-hidden transition-all relative ${
                  selectedImage === index
                    ? 'ring-2 ring-red-600 scale-105'
                    : 'ring-1 ring-white/20 hover:ring-white/40 hover:scale-105'
                }`}
              >
                <img
                  src={img}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-red-600/20" />
                )}
              </button>
            ))}
          </div>

          {/* Center - Premium Main Image */}
          <div className="flex-1">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden aspect-[16/10] group">
              {/* Loading shimmer */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              )}

              <img
                src={images[selectedImage]}
                alt="AR250"
                className="w-full h-full object-contain p-8 transition-opacity duration-500"
                style={{ opacity: imageLoaded ? 1 : 0.5 }}
                onLoad={() => setImageLoaded(true)}
              />

              {/* Decorative corners */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Mobile thumbnails */}
            <div className="md:hidden flex gap-3 mt-4 overflow-x-auto scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-red-600' : 'ring-1 ring-white/20'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Premium Contact Info Box */}
          <div className="hidden xl:block w-96">
            <div className="glass border border-white/10 rounded-2xl p-8 sticky top-32 backdrop-blur-md">
              <div className="text-red-600 text-xs font-bold tracking-[0.3em] mb-3 uppercase">Fiyat Talebi</div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fiyat bilgisi ve detaylı bilgi için bayilerimizle iletişime geçebilirsiniz.
              </p>

              <div className="space-y-3">
                <a
                  href="#bayi-servis"
                  className="group flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all text-center relative overflow-hidden"
                >
                  <span className="relative z-10">Bayileri Gör</span>
                  <ChevronLeft className="relative z-10 rotate-180 group-hover:translate-x-1 transition-transform" size={18} />
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </a>

                <a
                  href="#iletisim"
                  className="group flex items-center justify-center gap-2 w-full border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold py-4 rounded-xl transition-all text-center"
                >
                  <span>İletişim</span>
                  <ChevronLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>

              {/* Decorative element */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                  <span>Yetkili bayilerle hızlı iletişim</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Two Column Layout - Info & Specifications */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Premium Model Information */}
          <div className="glass border border-white/10 rounded-2xl p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-red-600">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Performance Vehicles</div>
                <div className="font-black text-white">Model Bilgileri</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">Model Kodu</span>
                <span className="font-bold text-white">AR250-2025</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">Kategori</span>
                <span className="font-bold text-white">Touring</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/10">
                <span className="text-gray-400 text-sm">Model Yılı</span>
                <span className="font-bold text-white">2025</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400 text-sm">Garanti</span>
                <span className="font-bold text-red-600">2 Yıl</span>
              </div>
            </div>
          </div>

          {/* Right - Premium Specifications with Tabs */}
          <div className="lg:col-span-2 glass border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md">
            <div className="border-b border-white/10">
              <div className="flex flex-wrap">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[120px] px-4 py-4 text-sm font-bold transition-all uppercase tracking-wide ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white'
                        : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {specs[activeTab as keyof typeof specs].map((spec, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-white/5 hover:border-red-600/30 transition-all hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-600/30 transition-colors">
                        <Gauge className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-black text-white text-base mb-2 leading-tight">{spec.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{spec.sublabel}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
