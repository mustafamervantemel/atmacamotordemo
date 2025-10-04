import { useState } from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

interface News {
  id: string;
  category_id: string;
  title: string;
  summary: string;
  content: string;
  image_url: string;
  published_at: string;
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  const categories = [
    { id: '1', name: 'Duyurular' },
    { id: '2', name: 'Haberler' },
    { id: '3', name: 'Etkinlikler' }
  ];

  const news: News[] = [
    {
      id: '1',
      category_id: '2',
      title: '2024 Yeni Model Lansmanı',
      summary: '2024 model yılı için hazırladığımız yeni scooter ve elektrikli modellerimizi tanıttık.',
      content: '2024 model yılı için hazırladığımız yeni scooter ve elektrikli modellerimizi büyük bir törenle tanıttık. Yeni modellerimiz modern tasarım, gelişmiş güvenlik özellikleri ve üstün performans sunuyor.',
      image_url: 'https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1200',
      published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: '2',
      category_id: '1',
      title: 'Bayi Ağımız Genişliyor',
      summary: 'Türkiye genelinde 150\'yi aşan bayi sayımıza yenileri ekleniyor.',
      content: 'Müşterilerimize daha iyi hizmet verebilmek için bayi ağımızı sürekli genişletiyoruz. Bu ay İzmir, Bursa ve Antalya\'da yeni bayilerimiz açıldı.',
      image_url: 'https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1200',
      published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
      id: '3',
      category_id: '3',
      title: 'Test Sürüşü Etkinliği',
      summary: 'İstanbul\'da düzenleyeceğimiz test sürüşü etkinliğine davetlisiniz.',
      content: '15-17 Mart tarihleri arasında İstanbul\'da düzenleyeceğimiz test sürüşü etkinliğinde tüm modellerimizi deneme fırsatı bulacaksınız. Etkinlik ücretsizdir, kayıt yaptırmayı unutmayın.',
      image_url: 'https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1200',
      published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    }
  ];

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || '';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(n => n.category_id === selectedCategory);

  if (selectedNews) {
    return (
      <div id="haberler">
        <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-black/30" />
          {selectedNews.image_url && (
            <img
              src={selectedNews.image_url}
              alt={selectedNews.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
          )}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div>
              <button
                onClick={() => setSelectedNews(null)}
                className="flex items-center text-red-400 hover:text-red-300 mb-4"
              >
                <ChevronRight size={20} className="rotate-180" />
                <span className="ml-2">Geri Dön</span>
              </button>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                  {getCategoryName(selectedNews.category_id)}
                </span>
                <span className="text-gray-300 text-sm flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(selectedNews.published_at)}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl">
                {selectedNews.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {selectedNews.image_url && (
                <img
                  src={selectedNews.image_url}
                  alt={selectedNews.title}
                  className="w-full rounded-xl shadow-2xl mb-8"
                />
              )}
              {selectedNews.summary && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {selectedNews.summary}
                </p>
              )}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {selectedNews.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div id="haberler">
      <section className="relative h-96 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Haberler & Duyurular</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              En güncel haberler ve duyurular
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tümü
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  {item.image_url && (
                    <div className="relative h-48">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      {item.category_id && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                            {getCategoryName(item.category_id)}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar size={16} />
                      <span>{formatDate(item.published_at)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    {item.summary && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.summary}
                      </p>
                    )}
                    <div className="flex items-center text-red-600 hover:text-red-700 font-semibold">
                      Devamını Oku
                      <ChevronRight size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}
