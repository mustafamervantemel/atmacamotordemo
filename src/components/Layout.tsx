import { Menu, X, Phone, Mail, MapPin, Search, FileText, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import AtmacaLogo from '../svg/Atmaca-Motor.svg';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [modellerDropdownOpen, setModellerDropdownOpen] = useState(false);
  const [isOrtakDropdownOpen, setIsOrtakDropdownOpen] = useState(false);
  const [bayiServisDropdownOpen, setBayiServisDropdownOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);

  const navigation = [
    { name: 'ANASAYFA', href: '#', isHome: true },
    { name: 'MODELLERİMİZ', href: '#modeller', hasDropdown: true, dropdownType: 'modeller' },
    { name: 'BAYİ & SERVİS', href: '#bayi-servis', hasDropdown: true, dropdownType: 'bayi-servis' },
    { name: 'HİZMET NOKTALARI', href: '#hizmet-noktalari' },
    { name: 'HAKKIMIZDA', href: '#hakkimizda' },
    { name: 'HABERLER', href: '#haberler' },
    { name: 'İLETİŞİM', href: '#iletisim' },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href === '#') {
      return currentPath === '' || currentPath === '#';
    }
    return currentPath.startsWith(href);
  };

  const modelCategories = [
    {
      name: 'SCOOTER',
      models: ['Model 1', 'Model 2']
    },
    {
      name: 'ELEKTRİKLİ',
      models: ['Model 1', 'Model 2', 'Model 3']
    },
    {
      name: 'CUB',
      models: ['Model 1']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white sticky top-0 z-50 shadow-md">
        {/* Top Bar - Red - Hidden on Mobile */}
        <div className="hidden md:block bg-red-600 py-2 border-b border-red-700">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center text-sm text-white">
              <div className="flex items-center gap-6">
                <a href="tel:+908001234567" className="flex items-center gap-2 hover:text-black transition-colors">
                  <Phone size={14} />
                  <span className="font-medium">0800 123 45 67</span>
                </a>
                <a href="mailto:info@atmacamotosiklet.com.tr" className="flex items-center gap-2 hover:text-black transition-colors">
                  <Mail size={14} />
                  <span className="font-medium">info@atmacamotosiklet.com.tr</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="relative"
                  onMouseEnter={() => setIsOrtakDropdownOpen(true)}
                  onMouseLeave={() => setIsOrtakDropdownOpen(false)}
                >
                  <button className="flex items-center gap-2 hover:text-black transition-colors py-2">
                    <User size={14} />
                    <span className="font-medium">İŞ ORTAĞI</span>
                  </button>

                  {isOrtakDropdownOpen && (
                    <div className="absolute right-0 top-full pt-2 z-50">
                      <div className="bg-red-600 shadow-lg rounded-md overflow-hidden min-w-[200px]">
                        <a href="#bayi-giris" className="block px-4 py-3 text-white hover:bg-red-700 transition-colors text-sm font-medium">
                          Yetkili Bayi Girişi
                        </a>
                        <a href="#servis-giris" className="block px-4 py-3 text-white hover:bg-red-700 transition-colors text-sm font-medium">
                          Yetkili Servis Girişi
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <a href="#" className="flex items-center gap-2 hover:text-black transition-colors">
                  <FileText size={14} />
                  <span className="font-medium">E-KATALOG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar - White */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5">
            <div className="flex items-center justify-between gap-4 md:gap-8">
              {/* Logo */}
              <a href="#" className="flex-shrink-0">
                <img src={AtmacaLogo} alt="Atmaca Motor" className="h-14 md:h-20 w-auto" />
              </a>

              {/* Navigation Menu */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
                {navigation.map((item, index) => (
                  item.hasDropdown ? (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        if (item.dropdownType === 'modeller') {
                          setModellerDropdownOpen(true);
                        } else if (item.dropdownType === 'bayi-servis') {
                          setBayiServisDropdownOpen(true);
                        }
                      }}
                      onMouseLeave={() => {
                        if (item.dropdownType === 'modeller') {
                          setModellerDropdownOpen(false);
                        } else if (item.dropdownType === 'bayi-servis') {
                          setBayiServisDropdownOpen(false);
                        }
                      }}
                    >
                      <a
                        href={item.href}
                        className={`text-xs xl:text-sm font-bold transition-colors whitespace-nowrap ${
                          isActive(item.href) ? 'text-red-600' : 'text-black hover:text-red-600'
                        }`}
                      >
                        {item.name}
                      </a>

                      {/* Mega Menu Dropdown - Modeller */}
                      {modellerDropdownOpen && item.dropdownType === 'modeller' && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full pt-2 w-auto z-50">
                          <div className="bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
                            <div className="p-4">
                              <div className="flex gap-8">
                                {modelCategories.map((category) => (
                                  <div key={category.name} className="min-w-[150px]">
                                    <div className="px-4 py-2 bg-gray-50 rounded-lg mb-2">
                                      <h3 className="text-sm font-bold text-gray-900 text-center">{category.name}</h3>
                                    </div>
                                    <div className="space-y-1">
                                      {category.models.map((model) => (
                                        <a
                                          key={model}
                                          href={`#model/${category.name.toLowerCase()}/${model.toLowerCase().replace(' ', '-')}`}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition-colors text-center"
                                        >
                                          {model}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Dropdown - Bayi & Servis */}
                      {bayiServisDropdownOpen && item.dropdownType === 'bayi-servis' && (
                        <div className="absolute left-0 top-full pt-2 w-64 z-50">
                          <div className="bg-white shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
                            <a
                              href="#bayiler"
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors border-b border-gray-100"
                            >
                              Bayiler
                            </a>
                            <a
                              href="#servisler"
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors border-b border-gray-100"
                            >
                              Servisler
                            </a>
                            <a
                              href="#bayi-servis-girisi"
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors border-b border-gray-100"
                            >
                              Bayi/Servis Girişi
                            </a>
                            <a
                              href="#bayi-servis-basvuru"
                              className="block px-6 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors"
                            >
                              Bayi/Servis Başvuru Formu
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-xs xl:text-sm font-bold transition-colors whitespace-nowrap ${
                        isActive(item.href) ? 'text-red-600 hover:text-red-700' : 'text-black hover:text-red-600'
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>

              {/* Right Side Icons */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Model arayın..."
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-red-600 w-56"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600">
                    <Search size={18} />
                  </button>
                </div>

                {/* Social Icons */}
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>

                {/* Language Selector */}
                <button className="flex items-center gap-1 text-sm font-medium text-black hover:text-red-600">
                  🇹🇷 TR
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </nav>

        {/* Full-Screen Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900 z-50 lg:hidden overflow-y-auto">
            <div className="flex flex-col min-h-screen">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <img src={AtmacaLogo} alt="Atmaca Motor" className="h-12 w-auto brightness-0 invert" />
                <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                  <X size={32} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 py-8">
                {/* Anasayfa - Red */}
                <a
                  href="#"
                  className="block px-6 py-4 text-2xl font-bold text-red-500 border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Anasayfa
                </a>

                {/* Modellerimiz - Expandable */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === 'modeller' ? null : 'modeller')}
                    className="w-full flex items-center justify-between px-6 py-4 text-2xl font-bold text-white"
                  >
                    <span>Modellerimiz</span>
                    {expandedMenu === 'modeller' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                  {expandedMenu === 'modeller' && (
                    <div className="bg-gray-800 py-2">
                      <a href="#modeller/scooter" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Scooter</a>
                      <a href="#modeller/elektrikli" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Elektrikli</a>
                      <a href="#modeller/cub" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Cub</a>
                    </div>
                  )}
                </div>

                {/* Bayi & Servis - Expandable */}
                <div className="border-b border-gray-800">
                  <button
                    onClick={() => setExpandedMenu(expandedMenu === 'bayi-servis' ? null : 'bayi-servis')}
                    className="w-full flex items-center justify-between px-6 py-4 text-2xl font-bold text-white"
                  >
                    <span>Bayi & Servis</span>
                    {expandedMenu === 'bayi-servis' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </button>
                  {expandedMenu === 'bayi-servis' && (
                    <div className="bg-gray-800 py-2">
                      <a href="#bayiler" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Bayiler</a>
                      <a href="#servisler" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Servisler</a>
                      <a href="#bayi-servis-girisi" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Bayi/Servis Girişi</a>
                      <a href="#bayi-servis-basvuru" className="block px-10 py-3 text-lg text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Bayi/Servis Başvuru Formu</a>
                    </div>
                  )}
                </div>

                {/* Hizmet Noktaları */}
                <a
                  href="#hizmet-noktalari"
                  className="block px-6 py-4 text-2xl font-bold text-white border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hizmet Noktaları
                </a>

                {/* Hakkımızda */}
                <a
                  href="#hakkimizda"
                  className="block px-6 py-4 text-2xl font-bold text-white border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Hakkımızda
                </a>

                {/* Haberler */}
                <a
                  href="#haberler"
                  className="block px-6 py-4 text-2xl font-bold text-white border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Haberler
                </a>

                {/* İletişim */}
                <a
                  href="#iletisim"
                  className="block px-6 py-4 text-2xl font-bold text-white border-b border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  İletişim
                </a>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 space-y-3">
                <button className="w-full py-4 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-black transition-colors">
                  Yetkili Bayi Girişi
                </button>
                <button className="w-full py-4 border-2 border-white text-white font-bold text-lg rounded-md hover:bg-white hover:text-black transition-colors">
                  Yetkili Servis Girişi
                </button>
              </div>

              {/* Call Button */}
              <a
                href="tel:+908001234567"
                className="bg-red-600 text-white py-5 flex items-center justify-center gap-3 text-xl font-bold hover:bg-red-700 transition-colors"
              >
                <Phone size={24} />
                BİZİ ARAYIN
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-black text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={AtmacaLogo} alt="Atmaca Motor" className="h-12 w-auto mb-4" />
              <p className="text-sm text-gray-400">
                Türkiye'nin güvenilir motosiklet markası
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide text-sm">Hızlı Erişim</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#hakkimizda" className="hover:text-red-500 transition-colors">Hakkımızda</a></li>
                <li><a href="#modeller" className="hover:text-red-500 transition-colors">Modellerimiz</a></li>
                <li><a href="#katalog" className="hover:text-red-500 transition-colors">Katalog</a></li>
                <li><a href="#bayi-servis" className="hover:text-red-500 transition-colors">Bayi & Servis</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide text-sm">Kategoriler</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#modeller/scooter" className="hover:text-red-500 transition-colors">Scooter</a></li>
                <li><a href="#modeller/elektrikli" className="hover:text-red-500 transition-colors">Elektrikli</a></li>
                <li><a href="#modeller/cub" className="hover:text-red-500 transition-colors">Cub</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wide text-sm">İletişim</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>Atatürk Mah. Gazi Cad. No:123<br />Çankaya / Ankara</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>0800 123 45 67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@atmacamotosiklet.com.tr</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Atmaca Motosiklet. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
