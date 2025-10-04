import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  Wrench,
  Users,
  Settings,
  LogOut,
  Bell,
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Plus
} from 'lucide-react';
import { useState } from 'react';

export default function B2BDashboardPage() {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Sample data
  const stats = [
    {
      title: 'Bekleyen Siparişler',
      value: '12',
      icon: Clock,
      color: 'bg-orange-500',
      trend: '+3 bu hafta'
    },
    {
      title: 'Toplam Sipariş',
      value: '156',
      icon: ShoppingCart,
      color: 'bg-blue-500',
      trend: '+18% bu ay'
    },
    {
      title: 'Düşük Stok Uyarısı',
      value: '5',
      icon: AlertTriangle,
      color: 'bg-red-500',
      trend: 'Acil'
    },
    {
      title: 'Tamamlanan Servisler',
      value: '43',
      icon: CheckCircle,
      color: 'bg-green-500',
      trend: '+7 bu hafta'
    },
  ];

  const recentOrders = [
    { id: '#ORD-2024-001', date: '04.10.2024', product: 'Scooter Model 1', qty: 5, status: 'Hazırlanıyor', amount: '₺125,000' },
    { id: '#ORD-2024-002', date: '03.10.2024', product: 'Elektrikli Model 2', qty: 3, status: 'Onaylandı', amount: '₺90,000' },
    { id: '#ORD-2024-003', date: '02.10.2024', product: 'Cub Model 1', qty: 2, status: 'Kargoya Verildi', amount: '₺45,000' },
  ];

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'products', name: 'Ürünler & Stok', icon: Package },
    { id: 'orders', name: 'Siparişlerim', icon: ShoppingCart },
    { id: 'service', name: 'Servis Yönetimi', icon: Wrench },
    { id: 'documents', name: 'Belgeler', icon: FileText },
    { id: 'finance', name: 'Finans', icon: TrendingUp },
    { id: 'settings', name: 'Ayarlar', icon: Settings },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Onaylandı': return 'bg-green-100 text-green-700';
      case 'Hazırlanıyor': return 'bg-blue-100 text-blue-700';
      case 'Kargoya Verildi': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-black text-gray-900">Atmaca B2B Portal</h1>
                <p className="text-xs text-gray-500">Yetkili Bayi Sistemi</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Ürün, sipariş veya belge ara..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-900">Demo Bayi A.Ş.</div>
                  <div className="text-xs text-gray-500">Bayi #12345</div>
                </div>
                <button
                  onClick={() => window.location.hash = '#bayi-servis-girisi'}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  title="Çıkış Yap"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-[73px] self-start">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeMenu === item.id
                    ? 'bg-red-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="p-4 border-t border-gray-200 mt-4">
            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all flex items-center justify-center gap-2">
              <Plus size={20} />
              Yeni Sipariş
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Hoş Geldiniz! 👋</h2>
            <p className="text-gray-600">İşte bugünün özeti ve son işlemleriniz</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 mb-2">{stat.title}</div>
                <div className="text-xs text-gray-500">{stat.trend}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Son Siparişler</h3>
              <a href="#b2b-orders" className="text-sm text-red-600 hover:text-red-700 font-medium">
                Tümünü Gör →
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Sipariş No</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tarih</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Ürün</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Adet</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Durum</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tutar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">{order.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.qty}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <FileText size={32} className="mb-4" />
              <h4 className="text-lg font-bold mb-2">Kataloglar</h4>
              <p className="text-blue-100 text-sm mb-4">Ürün kataloglarını ve fiyat listelerini indirin</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                <Download size={16} />
                İndir
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <Wrench size={32} className="mb-4" />
              <h4 className="text-lg font-bold mb-2">Servis Kaydı</h4>
              <p className="text-purple-100 text-sm mb-4">Yeni servis kaydı oluşturun</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Kayıt Oluştur
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <Users size={32} className="mb-4" />
              <h4 className="text-lg font-bold mb-2">Destek</h4>
              <p className="text-green-100 text-sm mb-4">Destek ekibimize ulaşın</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center gap-2">
                <Plus size={16} />
                Talep Aç
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
