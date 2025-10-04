import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Heart,
  ChevronRight,
  Check,
  Factory,
  Headphones,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Müşterilerimize en kaliteli, güvenli ve çevre dostu motosikletleri uygun fiyatlarla sunarak, Türkiye\'nin lider motosiklet markası olmak.'
    },
    {
      icon: Eye,
      title: 'Vizyonumuz',
      description: 'Sürekli gelişen teknoloji ve inovasyon ile sektörde öncü olmak, müşteri memnuniyetini en üst seviyede tutmak.'
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'Uluslararası standartlarda üretim, sertifikalı ürünler ve sürekli kalite kontrol süreçleriyle mükemmeliyeti hedefliyoruz.'
    },
    {
      icon: Heart,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri odaklı hizmet anlayışımız, güçlü iletişim ve satış sonrası destek ile her zaman yanınızdayız.'
    }
  ];

  const features = [
    {
      icon: Factory,
      title: 'Modern Üretim Tesisi',
      description: 'Son teknoloji üretim hattı ve kalite kontrol sistemleri'
    },
    {
      icon: Shield,
      title: 'Güvenlik Önceliğimiz',
      description: 'Euro standardlarında güvenlik testleri ve sertifikalar'
    },
    {
      icon: Globe,
      title: 'Yaygın Servis Ağı',
      description: 'Türkiye genelinde 150+ bayi ve yetkili servis noktası'
    },
    {
      icon: Headphones,
      title: '7/24 Destek',
      description: 'Uzman ekibimizle kesintisiz müşteri hizmetleri'
    },
    {
      icon: TrendingUp,
      title: 'Sürekli İnovasyon',
      description: 'Ar-Ge çalışmaları ve yenilikçi tasarım anlayışı'
    },
    {
      icon: Sparkles,
      title: 'Çevre Dostu',
      description: 'Elektrikli modeller ve sürdürülebilir üretim anlayışı'
    }
  ];

  const milestones = [
    { year: '1985', title: 'Kuruluş', description: 'Ankara\'da Atmaca Motor kuruldu' },
    { year: '1995', title: 'İlk Üretim', description: 'İlk yerli üretim scooter modeli piyasaya sürüldü' },
    { year: '2005', title: 'Genişleme', description: '50+ bayi ağı ve yeni ürün serisi' },
    { year: '2015', title: 'Modernizasyon', description: 'Yeni üretim tesisi ve teknoloji yatırımı' },
    { year: '2020', title: 'Elektrikli Dönüşüm', description: 'İlk elektrikli motosiklet serisi' },
    { year: '2024', title: 'Dijital Dönüşüm', description: 'B2B portal ve dijital hizmetler' }
  ];

  const achievements = [
    'ISO 9001 Kalite Yönetim Sistemi Sertifikası',
    'CE Avrupa Birliği Uygunluk Belgesi',
    'TSE Türk Standartları Enstitüsü Belgesi',
    'Çevre Dostu Üretim Sertifikası',
    'En İyi İşveren Ödülü 2023',
    'Sektörel İnovasyon Ödülü'
  ];

  return (
    <div id="hakkimizda" className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Atmaca Motor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                1985'ten Beri
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
              Türkiye'nin<br />
              Güvenilir Motosiklet<br />
              <span className="text-red-600">Markası</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              35 yılı aşkın deneyimimiz ve müşteri memnuniyeti odaklı hizmet anlayışımızla,
              sektörün öncü markalarından biriyiz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#iletisim"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center gap-2"
              >
                Bize Ulaşın
                <ChevronRight size={20} />
              </a>
              <a
                href="#modeller"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors"
              >
                Modellerimizi Keşfedin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-red-600/10 rounded-2xl" />
              <img
                src="https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Atmaca Motor Fabrika"
                className="relative rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-black text-red-600 mb-1">35+</div>
                <div className="text-sm text-gray-600 font-semibold">Yıllık Deneyim</div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <div className="inline-block bg-red-100 text-red-600 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
                Hikayemiz
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Atmaca Motor'u Tanıyın
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p className="text-lg">
                  <strong className="text-gray-900">Atmaca Motosiklet</strong>, 1985 yılında Ankara'da kurulmuş olup,
                  Türkiye'nin önde gelen motosiklet üreticisi ve distribütörlerinden biridir.
                  35 yılı aşkın süredir sektördeki varlığımızla, kaliteli ürünler ve müşteri
                  memnuniyeti odaklı hizmet anlayışımızla öne çıkıyoruz.
                </p>
                <p>
                  Scooter, elektrikli ve cub kategorilerinde geniş model yelpazemiz ile her
                  ihtiyaca uygun çözümler sunuyoruz. Modern üretim tesislerimiz ve deneyimli
                  ekibimizle, uluslararası standartlarda ürünler üretiyoruz.
                </p>
                <p>
                  Türkiye genelinde yaygın bayi ve servis ağımızla, müşterilerimize her
                  zaman yakın olmaya özen gösteriyoruz. Satış sonrası destek ve yedek parça
                  hizmetlerimizle de yanınızdayız.
                </p>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4">Sertifika ve Başarılarımız:</h3>
                <div className="grid grid-cols-1 gap-3">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Değerlerimiz
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Bizi Biz Yapan Değerler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Misyon, vizyon ve değerlerimizle sektörde fark yaratıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Neden Atmaca?
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Size Sunduğumuz Avantajlar
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sektördeki liderliğimizi sürdüren özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-600/50 transition-all duration-300 hover:bg-white/10"
              >
                <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-600 text-sm font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wide">
              Tarihçemiz
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Başarı Yolculuğumuz
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-600 to-red-400" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl font-black text-red-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="hidden md:block w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg z-10" />

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-5xl md:text-6xl font-black mb-2">35+</div>
              <div className="text-red-100 font-medium">Yıllık Deneyim</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-black mb-2">150+</div>
              <div className="text-red-100 font-medium">Bayi & Servis</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-black mb-2">50K+</div>
              <div className="text-red-100 font-medium">Mutlu Müşteri</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl md:text-6xl font-black mb-2">25+</div>
              <div className="text-red-100 font-medium">Model Çeşidi</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Atmaca Ailesine Katılın
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Bayilerimiz ve servislerimizle birlikte büyümeye devam ediyoruz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#bayi-servis-basvuru"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              Bayi/Servis Başvurusu
              <ChevronRight size={20} />
            </a>
            <a
              href="#iletisim"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
