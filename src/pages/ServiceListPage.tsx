import { MapPin, Phone, Mail, Clock, Search, Wrench } from 'lucide-react';
import { useState } from 'react';

export default function ServiceListPage() {
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample service data
  const services = [
    {
      id: 1,
      name: 'Atmaca Motor Ankara Yetkili Servis',
      city: 'Ankara',
      district: 'Çankaya',
      address: 'Kızılay Mah. Atatürk Bulvarı No:234 Çankaya/Ankara',
      phone: '+90 312 234 56 78',
      email: 'servis.ankara@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 08:30 - 18:00',
      services: ['Periyodik Bakım', 'Motor Revizyonu', 'Yedek Parça'],
    },
    {
      id: 2,
      name: 'Atmaca Motor İstanbul Yetkili Servis',
      city: 'İstanbul',
      district: 'Şişli',
      address: 'Mecidiyeköy Cad. No:67 Şişli/İstanbul',
      phone: '+90 212 345 67 89',
      email: 'servis.istanbul@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 08:00 - 19:00',
      services: ['Periyodik Bakım', 'Motor Revizyonu', 'Kaporta', 'Yedek Parça'],
    },
    {
      id: 3,
      name: 'Atmaca Motor İzmir Yetkili Servis',
      city: 'İzmir',
      district: 'Bornova',
      address: 'Ege Üniversitesi Cad. No:89 Bornova/İzmir',
      phone: '+90 232 890 12 34',
      email: 'servis.izmir@atmacamotosiklet.com.tr',
      workingHours: 'Pzt-Cmt: 08:30 - 18:30',
      services: ['Periyodik Bakım', 'Elektrik Sistemi', 'Yedek Parça'],
    },
  ];

  const cities = ['Tümü', ...Array.from(new Set(services.map(s => s.city)))];

  const filteredServices = services.filter(service => {
    const matchesCity = !selectedCity || selectedCity === 'Tümü' || service.city === selectedCity;
    const matchesSearch = !searchQuery ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.district.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Wrench size={48} className="text-red-600" />
            <h1 className="text-4xl md:text-5xl font-black">Yetkili Servislerimiz</h1>
          </div>
          <p className="text-xl text-gray-300">Uzman kadromuz ve orijinal yedek parçalarımızla hizmetinizdeyiz</p>
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
                placeholder="Servis adı, şehir veya ilçe ara..."
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

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">Aradığınız kriterlere uygun servis bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map(service => (
              <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  <p className="text-gray-300 text-sm mt-1">{service.city} / {service.district}</p>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
                      <p className="text-gray-700">{service.address}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="text-red-600 flex-shrink-0" size={20} />
                      <a href={`tel:${service.phone}`} className="text-gray-700 hover:text-red-600 transition-colors">
                        {service.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="text-red-600 flex-shrink-0" size={20} />
                      <a href={`mailto:${service.email}`} className="text-gray-700 hover:text-red-600 transition-colors break-all">
                        {service.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="text-red-600 flex-shrink-0" size={20} />
                      <p className="text-gray-700">{service.workingHours}</p>
                    </div>

                    {/* Services Offered */}
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Verilen Hizmetler:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.services.map((s, idx) => (
                          <span key={idx} className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <a
                      href="#randevu"
                      className="block w-full text-center bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                    >
                      Randevu Al
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
          <h2 className="text-3xl font-bold text-center mb-8">Servislerimizi Haritada Görüntüleyin</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ height: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8847682145955!2d28.9783!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f6e1%3A0x74ccfe5c617a1cc2!2s%C4%B0stanbul!5e0!3m2!1str!2str!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atmaca Motor Servis Haritası"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Haritada gösterilen konumlar örnek amaçlıdır. Güncel konum bilgileri için servislerimizle iletişime geçiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
