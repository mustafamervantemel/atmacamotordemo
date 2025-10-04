import { useState } from 'react';
import { MapPin, Phone, Mail, Search, MessageCircle, Facebook } from 'lucide-react';

type TabType = 'dealers' | 'services' | 'application';

export default function DealersPage() {
  const [activeTab, setActiveTab] = useState<TabType>('dealers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    company_name: '',
    establishment_date: '',
    contact_person: '',
    address: '',
    email: '',
    city: '',
    district: '',
    mobile_phone: '',
    business_phone: '',
    home_phone: '',
    service_type: 'Bayi',
    message: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const cities = [
    'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana', 'Gaziantep', 'Konya'
  ];

  const dealers = [
    {
      id: '1',
      company_name: 'REMZİ KÖSE',
      contact_person: 'Mehmet Yılmaz',
      address: 'ARSLANPAŞA MAH. FEHMİ ÖZEL TÜRKAY CAD. NO:69',
      city: 'KOZAN',
      district: 'Adana',
      phone: '0542 839 76 77',
      email: 'istanbul@atmaca.com.tr',
      whatsapp: '0542 839 76 77',
      facebook: 'atmaca.kozan'
    },
    {
      id: '2',
      company_name: 'AHMET GÜLTEKİN',
      contact_person: 'Ahmet Gültekin',
      address: 'YENİ MAH. 1 SK NO:24 B KARATAŞ/ADANA',
      city: 'KARATAŞ',
      district: 'Adana',
      phone: '05065 928 26 33',
      email: 'ankara@atmaca.com.tr',
      whatsapp: '05065 928 26 33',
      facebook: ''
    },
    {
      id: '3',
      company_name: 'YUSUF BAYKAL OTOMOTİV SANAYİ VE TİCARET ANONİM ŞİRKETİ',
      contact_person: 'Yusuf Baykal',
      address: 'VARSAK/ALSANCAK BÖLGES SK NO:25/1 BAYKAL',
      city: 'KOZAN',
      district: 'Adana',
      phone: '0542 839 76 77',
      email: 'izmir@atmaca.com.tr',
      whatsapp: '0542 839 76 77',
      facebook: ''
    },
    {
      id: '4',
      company_name: 'EBRU YILDIZ',
      contact_person: 'Ebru Yıldız',
      address: 'OSMANİYE YOLU 9. KM NO:24/A',
      city: 'KARATAŞ',
      district: 'Adana',
      phone: '05065 928 26 33',
      email: 'ebru@atmaca.com.tr',
      whatsapp: '05065 928 26 33',
      facebook: ''
    }
  ];

  const services = [
    {
      id: '1',
      company_name: 'Atmaca Yetkili Servis - İstanbul',
      contact_person: 'Ali Kaya',
      address: 'Şişli Plaza Kat:2, Şişli',
      city: 'İstanbul',
      phone: '0212 345 67 89',
      email: 'servis-istanbul@atmaca.com.tr'
    },
    {
      id: '2',
      company_name: 'Atmaca Yetkili Servis - Ankara',
      contact_person: 'Fatma Yıldız',
      address: 'Etimesgut Sanayi Sitesi No:67',
      city: 'Ankara',
      phone: '0312 456 78 90',
      email: 'servis-ankara@atmaca.com.tr'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    setFormData({
      company_name: '',
      establishment_date: '',
      contact_person: '',
      address: '',
      email: '',
      city: '',
      district: '',
      mobile_phone: '',
      business_phone: '',
      home_phone: '',
      service_type: 'Bayi',
      message: ''
    });
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  return (
    <div id="bayi-servis" className="bg-gray-50">
      {activeTab !== 'application' ? (
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Desktop Layout - Side by Side */}
            <div className="hidden md:flex gap-6">
              {/* Left Side - Search and List */}
              <div className="w-96 flex-shrink-0 space-y-6">
                {/* Search Box */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Yetkili satıcı veya servis ara"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
                    >
                      <option value="">Şehir Seç</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>

                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
                    >
                      <option value="">Tümü</option>
                      <option value="dealer">Bayi</option>
                      <option value="service">Servis</option>
                    </select>
                  </div>
                </div>

                {/* Dealer Cards */}
                <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-2">
                  {dealers.map((dealer) => (
                    <div key={dealer.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-lg mb-2">{dealer.company_name}</h3>
                      <p className="text-sm text-gray-600 mb-1">{dealer.city} / {dealer.district}</p>
                      <p className="text-sm text-gray-500 mb-4">{dealer.address}</p>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">İletişim</p>
                        <a href={`tel:${dealer.phone}`} className="text-blue-600 font-medium text-sm block">
                          Tel:{dealer.phone}
                        </a>
                      </div>

                      <button className="w-full bg-gray-800 text-white py-2.5 rounded-md font-medium text-sm hover:bg-gray-900 transition-colors mb-2">
                        YETKİLİ SERVİS
                      </button>

                      <div className="flex gap-2">
                        {dealer.whatsapp && (
                          <a href={`https://wa.me/${dealer.whatsapp.replace(/\s/g, '')}`} className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors">
                            <MessageCircle size={18} />
                          </a>
                        )}
                        {dealer.facebook && (
                          <a href={`https://facebook.com/${dealer.facebook}`} className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors">
                            <Facebook size={18} />
                          </a>
                        )}
                        <a href="#" className="flex-1 flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors">
                          <Mail size={18} />
                        </a>
                        <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition-colors text-sm">
                          Yol Tarifi
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Map */}
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm h-[calc(100vh-200px)] flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.95373531531687!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Layout - Full Width Cards */}
            <div className="md:hidden space-y-4">
              {/* Search Box */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Yetkili satıcı veya servis ara"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
                  >
                    <option value="">Şehir Seç</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>

                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm"
                  >
                    <option value="">Tümü</option>
                    <option value="dealer">Bayi</option>
                    <option value="service">Servis</option>
                  </select>
                </div>
              </div>

              {/* Mobile Dealer Cards */}
              {dealers.map((dealer) => (
                <div key={dealer.id} className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-xl mb-2">{dealer.company_name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{dealer.city} / {dealer.district}</p>
                  <p className="text-sm text-gray-500 mb-4">{dealer.address}</p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">İletişim</p>
                    <a href={`tel:${dealer.phone}`} className="text-blue-600 font-medium text-base block">
                      Tel:{dealer.phone}
                    </a>
                  </div>

                  <button className="w-full bg-gray-800 text-white py-3 rounded-md font-bold text-base hover:bg-gray-900 transition-colors mb-3">
                    YETKİLİ SERVİS
                  </button>

                  <div className="grid grid-cols-4 gap-2">
                    {dealer.whatsapp && (
                      <a href={`https://wa.me/${dealer.whatsapp.replace(/\s/g, '')}`} className="flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors">
                        <MessageCircle size={20} />
                      </a>
                    )}
                    {dealer.facebook && (
                      <a href={`https://facebook.com/${dealer.facebook}`} className="flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors">
                        <Facebook size={20} />
                      </a>
                    )}
                    <a href="#" className="flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors">
                      <Mail size={20} />
                    </a>
                    <button className="border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition-colors text-xs">
                      Yol Tarifi
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Bayi / Servis Başvuru Formu
                </h2>
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    Başvurunuz başarıyla alındı. En kısa sürede size dönüş yapacağız.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Firma Unvanı *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Firma Kuruluş Tarihi *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.establishment_date}
                        onChange={(e) => setFormData({ ...formData, establishment_date: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Yetkili Kişinin Adı-Soyadı *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact_person}
                      onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      İletişim Adresi *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Şehir *
                      </label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="">Seçiniz</option>
                        {cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cep Telefonu *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobile_phone}
                        onChange={(e) => setFormData({ ...formData, mobile_phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        İş Telefonu *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.business_phone}
                        onChange={(e) => setFormData({ ...formData, business_phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ev Telefonu *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.home_phone}
                        onChange={(e) => setFormData({ ...formData, home_phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      required
                      value={formData.service_type}
                      onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="Bayi">Bayi</option>
                      <option value="Servis">Servis</option>
                      <option value="3S">3S (Satış + Servis + Yedek Parça)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Başvurunuzla ilgili detaylı bilgi verebilirsiniz..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors"
                  >
                    Başvuruyu Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
