import { Download, FileText } from 'lucide-react';

export default function CatalogPage() {
  const catalogs = [
    {
      id: '1',
      title: '2024 Genel Ürün Katalogu',
      description: 'Tüm modellerimizin detaylı teknik özellikleri ve fiyat bilgileri',
      thumbnail_url: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Elektrikli Modeller Katalogu',
      description: 'Elektrikli scooter modellerimizin özel katalogu',
      thumbnail_url: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Yedek Parça Katalogu',
      description: 'Orijinal yedek parça listesi ve fiyatları',
      thumbnail_url: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div id="katalog">
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Katalog</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Ürün kataloglarımızı indirin ve detaylı bilgi alın
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catalogs.map((catalog) => (
                <div
                  key={catalog.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center">
                    {catalog.thumbnail_url ? (
                      <img
                        src={catalog.thumbnail_url}
                        alt={catalog.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText size={80} className="text-white opacity-50" />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {catalog.title}
                    </h3>
                    {catalog.description && (
                      <p className="text-gray-600 mb-4">
                        {catalog.description}
                      </p>
                    )}
                    <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full justify-center">
                      <Download size={20} />
                      Katalogu İndir
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
