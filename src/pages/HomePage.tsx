import { ChevronRight, ChevronLeft, Bike, Zap, Shield, Award, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categorySlides = [
    {
      name: 'TOURING',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'SCOOTER',
      image: 'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'CHOPPER & CROSS',
      image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'CUB',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'ATV / T3',
      image: 'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'E-SCOOTER',
      image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollPosition = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    { id: '1', name: 'Scooter', slug: 'scooter', display_order: 1, created_at: '' },
    { id: '2', name: 'Elektrikli', slug: 'elektrikli', display_order: 2, created_at: '' },
    { id: '3', name: 'Cub', slug: 'cub', display_order: 3, created_at: '' }
  ];

  const slides = [
    {
      year: '2025 SPORT',
      title: 'MAKSİMUM PERFORMANS.',
      subtitle: 'KATIKSIZ AZIM.',
      description: 'Sportster™ niras, 2025 Sport serimizde Revolution® Max gücüyle buluşuyor.',
      cta: 'Sport\'u Keşfedin',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      category: 'sport'
    },
    {
      year: '2025 TOURING',
      title: 'ÖZGÜRLÜĞÜN YOLU.',
      subtitle: 'SINIRSIZ KEŞİF.',
      description: 'Road Glide™ ile açık yolların kralı olun, konfor ve performansı bir arada yaşayın.',
      cta: 'Touring Modellerini İncele',
      image: 'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      category: 'touring'
    },
    {
      year: '2025 CRUISER',
      title: 'EFSANE DEVAM EDİYOR.',
      subtitle: 'KLAS VE GÜÇ.',
      description: 'Softail™ ailesinin ikonik tasarımı ve güçlü performansıyla yolların efendisi olun.',
      cta: 'Cruiser Serisi',
      image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      category: 'cruiser'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Güvenlik',
      description: 'En yüksek güvenlik standartlarında üretim'
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'Uluslararası kalite sertifikaları'
    },
    {
      icon: Zap,
      title: 'Performans',
      description: 'Güçlü ve verimli motor teknolojisi'
    },
    {
      icon: Bike,
      title: 'Konfor',
      description: 'Ergonomik tasarım ve sürüş konforu'
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Quick Action Buttons - Mobile Only */}
      <section className="md:hidden py-4 px-4 bg-white border-b border-gray-200">
        <div className="grid grid-cols-3 gap-3">
          <a href="#modeller" className="py-4 px-3 border-2 border-black rounded-lg text-center font-bold text-sm hover:bg-black hover:text-white transition-colors">
            Modeller
          </a>
          <a href="#bayiler" className="py-4 px-3 border-2 border-black rounded-lg text-center font-bold text-sm hover:bg-black hover:text-white transition-colors">
            Bayiler
          </a>
          <a href="#servisler" className="py-4 px-3 border-2 border-black rounded-lg text-center font-bold text-sm hover:bg-black hover:text-white transition-colors">
            Servisler
          </a>
        </div>
      </section>

      {/* Hero Carousel - Full Width Premium */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.3),transparent_50%)]" />
        </div>

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

            {/* Image with ken burns effect */}
            <div className={`w-full h-full transform transition-transform duration-[20s] ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className={`inline-block mb-6 ${index === currentSlide ? 'animate-fade-in' : 'opacity-0'}`}>
                    <div className="flex items-center gap-3 bg-red-600/20 backdrop-blur-sm border border-red-600/50 px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-sm tracking-[0.2em] text-red-400 font-bold uppercase">
                        {slide.year}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className={`text-7xl lg:text-8xl font-black text-white mb-4 tracking-tighter leading-[0.9] text-shadow-premium ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                  }`} style={{ animationDelay: '0.2s' }}>
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <h3 className={`text-4xl lg:text-6xl font-bold text-gradient mb-8 tracking-tight ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                  }`} style={{ animationDelay: '0.4s' }}>
                    {slide.subtitle}
                  </h3>

                  {/* Description */}
                  <p className={`text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed ${
                    index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'
                  }`} style={{ animationDelay: '0.6s' }}>
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <div className={index === currentSlide ? 'animate-fade-in-up' : 'opacity-0'} style={{ animationDelay: '0.8s' }}>
                    <a
                      href={`#modeller/${slide.category}`}
                      className="group inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-bold transition-all duration-300 hover:gap-5 uppercase tracking-wide text-sm shadow-2xl hover:shadow-red-600/50 relative overflow-hidden"
                    >
                      <span className="relative z-10">{slide.cta}</span>
                      <ChevronRight className="relative z-10" size={22} />
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Premium Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass border border-white/20 hover:border-white/40 flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-white group-hover:-translate-x-0.5 transition-transform" size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full glass border border-white/20 hover:border-white/40 flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="text-white group-hover:translate-x-0.5 transition-transform" size={28} />
        </button>

        {/* Premium Slide Indicators */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'bg-red-600 w-16'
                  : 'bg-white/30 w-8 hover:bg-white/50 hover:w-12'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Category Carousel Section - Premium "ATMACA'YI KEŞFEDİN" */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(220,38,38,0.5)_49%,rgba(220,38,38,0.5)_51%,transparent_52%)] bg-[length:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-red-600 text-sm font-bold tracking-[0.3em] mb-3 uppercase">Kategoriler</div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                ATMACA'YI KEŞFEDİN
              </h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => scrollCategories('left')}
                className="w-12 h-12 glass border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Previous"
              >
                <ArrowLeft className="text-white group-hover:-translate-x-0.5 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollCategories('right')}
                className="w-12 h-12 glass border border-white/20 hover:border-white/40 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                aria-label="Next"
              >
                <ArrowRight className="text-white group-hover:translate-x-0.5 transition-transform" size={20} />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categorySlides.map((category, index) => (
              <a
                key={index}
                href={`#modeller/${category.name.toLowerCase()}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="relative overflow-hidden rounded-2xl hover-lift">
                  {/* Image container with overlay */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gray-800">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Premium gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-3xl font-black text-white mb-3 uppercase tracking-tight transform group-hover:translate-y-[-8px] transition-transform duration-500">
                      {category.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-sm font-bold uppercase tracking-wider">Keşfet</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="text-red-600 text-sm font-bold tracking-[0.3em] mb-4 uppercase">Neden Biz?</div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tighter">
              Atmaca Farkı
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Yılların deneyimi ve müşteri memnuniyeti odaklı hizmet anlayışımızla
              Türkiye'nin en güvenilir motosiklet markasıyız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 h-full transition-all duration-500 group-hover:from-black group-hover:to-gray-900">
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <feature.icon className="text-white" size={36} />
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-black group-hover:text-white mb-4 uppercase tracking-tight transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover line decoration */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section - Premium Immersive Design */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(220,38,38,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(220,38,38,0.3)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="text-red-600 text-sm font-bold tracking-[0.3em] mb-4 uppercase">Modellerimiz</div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              Tarzınızı Bulun
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              İhtiyacınıza uygun geniş model yelpazesi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <a
                key={category.id}
                href={`#modeller/${category.slug}`}
                className="group relative h-[500px] overflow-hidden rounded-2xl hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background image with parallax effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/${category.slug === 'scooter' ? '1209610' : category.slug === 'elektrikli' ? '2116475' : '1413412'}/pexels-photo-${category.slug === 'scooter' ? '1209610' : category.slug === 'elektrikli' ? '2116475' : '1413412'}.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop`}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Premium gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Glass effect overlay */}
                <div className="absolute inset-0 glass opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Decorative line */}
                  <div className="w-16 h-1 bg-red-600 mb-6 transform origin-left group-hover:w-24 transition-all duration-500" />

                  <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tight transform group-hover:translate-y-[-8px] transition-transform duration-500">
                    {category.name}
                  </h3>

                  <div className="flex items-center gap-3 text-white opacity-70 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-sm font-bold uppercase tracking-wider">Modelleri İncele</span>
                    <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all">
                      <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 bg-gradient-to-br from-red-600 to-red-800 text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-sm tracking-[0.2em] font-bold uppercase">
                  İş Ortaklığı
                </span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Bayi veya Servis Olmak İster misiniz?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Atmaca Motosiklet ailesine katılın, başarılı bir iş ortaklığının parçası olun
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#bayi-servis-basvuru"
                className="group inline-flex items-center gap-3 bg-white hover:bg-black text-black hover:text-white px-10 py-5 font-bold transition-all duration-300 hover:gap-5 uppercase tracking-wide text-sm shadow-2xl hover:shadow-black/50 relative overflow-hidden rounded-lg"
              >
                <span className="relative z-10">Başvuru Yap</span>
                <ChevronRight className="relative z-10" size={20} />
                <div className="absolute inset-0 bg-black/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>

              <a
                href="#iletisim"
                className="group inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white text-white hover:text-black px-10 py-5 font-bold transition-all duration-300 hover:gap-5 uppercase tracking-wide text-sm rounded-lg"
              >
                <span className="relative z-10">İletişime Geç</span>
                <ChevronRight className="relative z-10" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
