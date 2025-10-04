import { MapPin, Phone, Mail, Clock, Search } from 'lucide-react';
import { useState } from 'react';

export default function DealersListPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample dealer data
  const dealers = [
    {
      id: 1,
      name: 'Atmaca Motor Ankara Merkez Bayi',
      city: 'Ankara',
      district: 'Çankaya',
      address: 'Atatürk Mah. Gazi Cad. No:123 Çankaya/Ankara',
      phone: '+90 312 123 45 67',
      email: 'ankara@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 09:00 - 18:00',
    },
    {
      id: 2,
      name: 'Atmaca Motor İstanbul Kadıköy Bayi',
      city: 'İstanbul',
      district: 'Kadıköy',
      address: 'Moda Cad. No:45 Kadıköy/İstanbul',
      phone: '+90 216 456 78 90',
      email: 'istanbul@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 09:00 - 19:00',
    },
    {
      id: 3,
      name: 'Atmaca Motor İzmir Konak Bayi',
      city: 'İzmir',
      district: 'Konak',
      address: 'Cumhuriyet Bulvarı No:78 Konak/İzmir',
      phone: '+90 232 789 01 23',
      email: 'izmir@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 09:00 - 18:30',
    },
  ];

  const cities = ['Tümü', ...Array.from(new Set(dealers.map(d => d.city)))];

  const filteredDealers = dealers.filter(dealer => {
    const matchesCity = !selectedCity || selectedCity === 'Tümü' || dealer.city === selectedCity;
    const matchesSearch = !searchQuery ||
      dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dealer.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Yetkili Bayilerimiz</h1>
          <p className="text-xl text-red-100">Türkiye genelindeki yetkili bayi ağımızla hizmetinizdeyiz</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Bayi adı, şehir veya ilçe ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* City Filter */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-6 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Dealers List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredDealers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aradığınız kriterlere uygun bayi bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map(dealer => (
              <div key={dealer.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-4">
                  <h3 className="text-xl font-bold text-white">{dealer.name}</h3>
                  <p className="text-red-100 text-sm mt-1">{dealer.city} / {dealer.district}</p>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">{dealer.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-red-600 flex-shrink-0" size={20} />
                      <a href={`tel:${dealer.phone}`} className="text-gray-700 hover:text-red-600 transition-colors">
                        {dealer.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-red-600 flex-shrink-0" size={20} />
                      <a href={`mailto:${dealer.email}`} className="text-gray-700 hover:text-red-600 transition-colors">
                        {dealer.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="text-red-600 flex-shrink-0" size={20} />
                      <p className="text-gray-700">{dealer.workingHours}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 mt-auto">
                    <a
                      href="#iletisim"
                      className="block w-full text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      İletişime Geç
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Bayilerimizi Haritada Görüntüleyin</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.6447741638614!2d32.8597419!3d39.9200764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xaa5c5e8a9ab9c6de!2sK%C4%B1z%C4%B1lay%2C%20Ankara!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atmaca Motor Bayi Haritası"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Haritada gösterilen konumlar örnek amaçlıdır. Güncel konum bilgileri için bayilerimizle iletişime geçiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
