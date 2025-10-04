import { Building2, MapPin, Mail, Phone, Calendar, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';

export default function DealerServiceApplicationPage() {
  const [formData, setFormData] = useState({
    // Bayi/Servis selection
    applicationType: 'dealer', // 'dealer' or 'service'

    // Map feature selection
    mapFeature: '', // 'haritada-secme-ozelligi' for both

    // Company Login
    companyTitle: '',
    companyEstablishedDate: '',

    // Authorized Person
    authorizedPersonName: '',

    // Application Form
    contactAddress: '',
    email: '',
    city: '',
    district: '',
    mobilePhone: '',
    workPhone: '',
    homePhone: '',

    // Service Type (for service applications)
    serviceType: '', // 'dealer', 'service', or '3s'

    // Message
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-red-600 text-white rounded-t-lg p-8 text-center">
          <Building2 size={48} className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Bayi & Servis Başvuru Formu</h1>
          <p className="text-red-100">Atmaca Motor iş ortağı olmak için formu doldurun</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-b-lg shadow-lg p-8 space-y-8">
          {/* Application Type Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Başvuru Türü *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, applicationType: 'dealer' }))}
                className={`p-6 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.applicationType === 'dealer'
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                <Building2 size={32} className="mx-auto mb-2" />
                BAYİ BAŞVURUSU
                <p className="text-xs text-gray-500 mt-1">Haritada Seçme Özellikli</p>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, applicationType: 'service' }))}
                className={`p-6 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.applicationType === 'service'
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                <Building2 size={32} className="mx-auto mb-2" />
                SERVİS BAŞVURUSU
                <p className="text-xs text-gray-500 mt-1">Haritada Seçme Özellikli</p>
              </button>
            </div>
          </div>

          {/* Bayi/Servis Girişi Section */}
          <div className="border-t pt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <Building2 size={24} className="text-red-600" />
              Bayi/Servis Girişi - B2B Sistemine Yönlendirir
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Bu başvuru onaylandıktan sonra B2B sistemi bilgileriniz tarafınıza iletilecektir.
            </p>
          </div>

          {/* Company Information */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 border-b pb-2">Firma Bilgileri</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Firma Unvanı *
                </label>
                <input
                  type="text"
                  name="companyTitle"
                  value={formData.companyTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Firma unvanınızı giriniz"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Firma Kuruluş Tarihi *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    name="companyEstablishedDate"
                    value={formData.companyEstablishedDate}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Authorized Person */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 border-b pb-2">Yetkili Kişi Bilgileri</h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Yetkili Kişinin Adı-Soyadı *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  name="authorizedPersonName"
                  value={formData.authorizedPersonName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Ad Soyad"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-bold text-gray-800 border-b pb-2">İletişim Bilgileri</h3>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                İletişim Adresi *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-4 text-gray-400" size={20} />
                <textarea
                  name="contactAddress"
                  value={formData.contactAddress}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Tam adresinizi giriniz"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                E-posta *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Şehir *
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Şehir Seçiniz</option>
                  <option value="Istanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="Izmir">İzmir</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Antalya">Antalya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  İlçe *
                </label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">İlçe Seçiniz</option>
                  <option value="District1">İlçe 1</option>
                  <option value="District2">İlçe 2</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Cep Telefonu *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="mobilePhone"
                    value={formData.mobilePhone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="5XX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  İş Telefonu *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="workPhone"
                    value={formData.workPhone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="0XXX XXX XX XX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Ev Telefonu *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="homePhone"
                    value={formData.homePhone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="0XXX XXX XX XX"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Type Selection */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Hizmet Türü Seçimi *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, serviceType: 'dealer' }))}
                className={`p-4 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.serviceType === 'dealer'
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                BAYİ
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, serviceType: 'service' }))}
                className={`p-4 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.serviceType === 'service'
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                SERVİS
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, serviceType: '3s' }))}
                className={`p-4 border-2 rounded-lg text-center font-semibold transition-all ${
                  formData.serviceType === '3s'
                    ? 'border-red-600 bg-red-50 text-red-600'
                    : 'border-gray-300 hover:border-red-300'
                }`}
              >
                3S
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Mesajınız *
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Başvurunuzla ilgili detayları yazınız..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="bg-red-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              BAŞVURUYU GÖNDER
            </button>
          </div>

          {/* Info Text */}
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 text-center">
            <p>* ile işaretli alanlar zorunludur.</p>
            <p className="mt-2">
              Başvurunuz değerlendirildikten sonra en kısa sürede tarafınıza dönüş yapılacaktır.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
