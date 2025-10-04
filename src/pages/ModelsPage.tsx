import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MotorcycleModel {
  id: string;
  category_id: string;
  name: string;
  isNew: boolean;
  main_image: string;
}

export default function ModelsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('scooter');

  const categories = [
    { id: 'scooter', name: 'SCOOTER' },
    { id: 'elektrikli', name: 'ELEKTRİKLİ' },
    { id: 'cub', name: 'CUB' }
  ];

  const models: MotorcycleModel[] = [
    {
      id: '1',
      category_id: 'scooter',
      name: 'Model 1',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: '2',
      category_id: 'scooter',
      name: 'Model 2',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: '3',
      category_id: 'elektrikli',
      name: 'Model 1',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: '4',
      category_id: 'elektrikli',
      name: 'Model 2',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: '5',
      category_id: 'elektrikli',
      name: 'Model 3',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      id: '6',
      category_id: 'cub',
      name: 'Model 1',
      isNew: true,
      main_image: 'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const filteredModels = models.filter(m => m.category_id === selectedCategory);

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || '';
  };

  return (
    <div id="modeller" className="bg-black">
      {/* Premium Hero Banner */}
      <section className="relative h-96 bg-black overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.4),transparent_70%)]" />
        </div>

        {/* Image with overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1920&h=500&fit=crop"
            alt="Touring"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="animate-fade-in-up">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <a href="#" className="hover:text-white transition-colors">Anasayfa</a>
              <ChevronRight size={14} />
              <span className="text-white">Modeller</span>
            </div>

            {/* Title */}
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter text-shadow-premium">
              {getCategoryName(selectedCategory)}
            </h1>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-red-600" />
          </div>
        </div>
      </section>

      {/* Premium Desktop Layout */}
      <section className="py-16 hidden md:block bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {/* Left Sidebar - Premium Categories */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-24 glass border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <div className="mb-6">
                  <div className="text-red-600 text-xs font-bold tracking-[0.3em] mb-2 uppercase">Kategoriler</div>
                  <h3 className="font-black text-2xl text-white">{getCategoryName(selectedCategory)}</h3>
                </div>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        {selectedCategory === category.id && (
                          <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Premium Models Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-6">
                {filteredModels.map((model, index) => (
                  <a
                    key={model.id}
                    href={`#model/${model.id}`}
                    className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Card background */}
                    <div className="relative bg-gray-800 overflow-hidden">
                      {/* Badge */}
                      {model.isNew && (
                        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 uppercase tracking-wider">
                          YENİ
                        </div>
                      )}

                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                        <img
                          src={model.main_image}
                          alt={model.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-gray-900">
                        <h3 className="font-black text-xl text-white mb-2 group-hover:text-red-600 transition-colors">
                          {model.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                          <span className="font-medium uppercase tracking-wider">İncele</span>
                          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Mobile Layout */}
      <section className="py-8 md:hidden bg-gradient-to-b from-black to-gray-900">
        <div className="px-4">
          {/* Category Dropdown */}
          <div className="mb-8">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-5 py-4 glass border border-white/20 rounded-xl text-sm font-bold text-white focus:outline-none focus:border-red-600 appearance-none uppercase tracking-wide bg-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-gray-900">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={20} />
            </div>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 gap-6">
            {filteredModels.map((model, index) => (
              <a
                key={model.id}
                href={`#model/${model.id}`}
                className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gray-800 overflow-hidden">
                  {/* Badge */}
                  {model.isNew && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 uppercase tracking-wider">
                      YENİ
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-video overflow-hidden bg-gray-900">
                    <img
                      src={model.main_image}
                      alt={model.name}
                      className="w-full h-full object-cover group-active:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gray-900">
                    <h3 className="font-black text-2xl text-white mb-2">{model.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="font-medium uppercase tracking-wider">İncele</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>

                  {/* Accent line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
