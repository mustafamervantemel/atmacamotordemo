# Atmaca Motor B2B Portal Sistemi

## 🎯 Sistem Özeti

Atmaca Motosiklet'in yetkili bayi ve servisleri için geliştirilmiş tam entegre B2B yönetim sistemi.

## 🔐 Giriş ve Erişim

### Giriş Sayfası
- **URL**: `#bayi-servis-girisi` veya `#b2b-login`
- Sadece onaylı bayiler ve servisler erişebilir
- Email ve şifre ile güvenli giriş
- "Beni Hatırla" özelliği
- Şifre sıfırlama

### Demo Kullanıcı Bilgileri
```
E-posta: demo@atmaca.com
Şifre: demo123
```

**Not:** Demo giriş bilgileri giriş sayfasında yeşil kutuda gösterilmektedir.

## 📊 Ana Modüller

### 1. Dashboard (Ana Sayfa)
**Özellikler:**
- ✅ Bekleyen siparişler özeti
- ✅ Toplam sipariş istatistikleri
- ✅ Düşük stok uyarıları
- ✅ Tamamlanan servisler
- ✅ Son siparişler listesi
- ✅ Hızlı erişim kartları

### 2. Ürün & Stok Yönetimi
**Planlanan Özellikler:**
- [ ] Tüm ürün kataloğu görüntüleme
- [ ] Kategori bazlı filtreleme (Scooter, Elektrikli, Cub)
- [ ] Stok durumu takibi
- [ ] Fiyat bilgileri (bayiye özel)
- [ ] Ürün arama ve filtreleme
- [ ] Stok uyarı sistemi

### 3. Sipariş Yönetimi
**Planlanan Özellikler:**
- [ ] Yeni sipariş oluşturma
- [ ] Sepet sistemi
- [ ] Sipariş durumu takibi:
  - Beklemede
  - Onaylandı
  - Hazırlanıyor
  - Kargoya Verildi
  - Teslim Edildi
- [ ] Sipariş geçmişi
- [ ] PDF sipariş fişi oluşturma
- [ ] Sipariş iptali/değişiklik talepleri

### 4. Servis Yönetimi
**Planlanan Özellikler:**
- [ ] Yeni servis kaydı oluşturma
- [ ] Bakım kayıtları
- [ ] Parça değişim geçmişi
- [ ] Garanti sorgulama (şasi numarası)
- [ ] Teknik doküman erişimi
- [ ] Servis talep yönetimi

### 5. Belge ve Katalog Merkezi
**Planlanan Özellikler:**
- [ ] PDF katalog indirme
- [ ] Fiyat listeleri
- [ ] Eğitim belgeleri
- [ ] Teknik kılavuzlar
- [ ] Garanti formları
- [ ] Rol bazlı belge erişimi

### 6. Finans Modülü
**Planlanan Özellikler:**
- [ ] Otomatik fatura oluşturma
- [ ] Bakiye görüntüleme
- [ ] Borç/alacak durumu
- [ ] Ödeme geçmişi
- [ ] Vadeli borç takibi
- [ ] ERP entegrasyonu (Logo, Mikro, Nebim)

### 7. Duyuru ve Destek
**Planlanan Özellikler:**
- [ ] Merkezi duyurular
- [ ] Kampanya bildirimleri
- [ ] Ticket sistemi
- [ ] Destek talep yönetimi
- [ ] Canlı bildirimler

### 8. Ayarlar ve Yönetim
**Planlanan Özellikler:**
- [ ] Profil düzenleme
- [ ] Şifre değiştirme
- [ ] Bildirim tercihleri
- [ ] Kullanıcı yönetimi
- [ ] Log kayıtları

## 🔒 Güvenlik Özellikleri

### Mevcut
- ✅ Route bazlı yetkilendirme
- ✅ Giriş kontrolü

### Planlanan
- [ ] JWT Token authentication
- [ ] Role-based access control (RBAC)
- [ ] Session yönetimi
- [ ] 2FA (Two-Factor Authentication)
- [ ] SMS doğrulama
- [ ] IP bazlı erişim kontrolü
- [ ] Aktivite logları
- [ ] Otomatik oturum sonlandırma

## 📱 Kullanıcı Tipleri

### 1. Bayi
- Ürün siparişi verebilir
- Stok ve fiyat görebilir
- Belgeler indirebilir
- Müşteri kayıtları tutabilir

### 2. Servis
- Servis kayıtları oluşturabilir
- Yedek parça siparişi verebilir
- Garanti sorgulaması yapabilir
- Teknik dokümanlara erişebilir

### 3. Admin (Planlanan)
- Tüm bayileri/servisleri yönetebilir
- Ürün/stok/fiyat güncelleyebilir
- Siparişleri onaylayabilir
- Raporlar oluşturabilir
- Kampanya tanımlayabilir

## 🎨 Tasarım Özellikleri

- ✅ Modern ve profesyonel arayüz
- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Kolay navigasyon
- ✅ Görsel istatistikler
- ✅ Renk kodlu durum göstergeleri
- ✅ Hızlı erişim butonları

## 🔗 Sistem Entegrasyonları (Planlanan)

### ERP Entegrasyonu
- [ ] Logo Tiger
- [ ] Mikro
- [ ] Nebim
- [ ] REST API desteği

### Ödeme Sistemleri
- [ ] Sanal POS entegrasyonu
- [ ] Havale/EFT takibi
- [ ] Çek/senet yönetimi

### Kargo Entegrasyonu
- [ ] Kargo takip numarası
- [ ] Otomatik kargo bildirimi
- [ ] Teslimat takibi

### E-posta/SMS
- [ ] Otomatik sipariş bildirimleri
- [ ] Stok uyarıları
- [ ] Kampanya duyuruları

## 📈 Raporlama (Planlanan)

- [ ] Aylık sipariş raporu
- [ ] En çok satan ürünler
- [ ] Bayi performans analizi
- [ ] Stok hareket raporu
- [ ] Finansal raporlar
- [ ] Excel/PDF export

## 🚀 Gelecek Geliştirmeler

### Kısa Vadeli
1. Ürün kataloğu sayfası
2. Sipariş oluşturma sistemi
3. Belge indirme merkezi
4. Profil yönetimi

### Orta Vadeli
1. Servis yönetimi modülü
2. Finans modülü
3. ERP entegrasyonu
4. Bildirim sistemi

### Uzun Vadeli
1. Mobil uygulama
2. Gelişmiş raporlama
3. AI destekli stok önerileri
4. Chatbot destek

## 💻 Teknik Detaylar

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

### Backend (Planlanan)
- Node.js / .NET Core
- PostgreSQL / SQL Server
- Redis (cache)
- JWT Authentication

### API (Planlanan)
- RESTful API
- GraphQL
- WebSocket (real-time)

## 📞 Destek

Sistem ile ilgili sorunlar için:
- Email: b2b@atmacamotosiklet.com.tr
- Telefon: 0800 123 45 67
- Destek saatleri: Pzt-Cum 09:00-18:00

## 📝 Notlar

- Bu sistem demo amaçlıdır
- Gerçek ERP entegrasyonu için özel geliştirme gerekir
- Tüm veriler şu an mock/sample data'dır
- Production kullanımı için güvenlik testleri yapılmalıdır

---

**Son Güncelleme**: 04.10.2024
**Versiyon**: 1.0.0 (Beta)
**Geliştirici**: Atmaca Motor IT Team
