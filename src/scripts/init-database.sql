-- This script can be run in Supabase SQL Editor to populate sample data

-- Sample districts for Istanbul
INSERT INTO districts (city_id, name, display_order)
SELECT c.id, district, ROW_NUMBER() OVER ()
FROM cities c
CROSS JOIN (VALUES
  ('Kadıköy'),
  ('Beşiktaş'),
  ('Şişli'),
  ('Üsküdar'),
  ('Maltepe')
) AS districts(district)
WHERE c.code = '34'
ON CONFLICT DO NOTHING;

-- Sample districts for Ankara
INSERT INTO districts (city_id, name, display_order)
SELECT c.id, district, ROW_NUMBER() OVER ()
FROM cities c
CROSS JOIN (VALUES
  ('Çankaya'),
  ('Keçiören'),
  ('Etimesgut'),
  ('Yenimahalle'),
  ('Mamak')
) AS districts(district)
WHERE c.code = '06'
ON CONFLICT DO NOTHING;

-- Sample motorcycle models for Scooter category
INSERT INTO motorcycle_models (category_id, name, slug, description, main_image, technical_specs, is_active, display_order)
SELECT
  c.id,
  model_data->>'name',
  model_data->>'slug',
  model_data->>'description',
  'https://images.pexels.com/photos/1209610/pexels-photo-1209610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  jsonb_build_object(
    'Motor Hacmi', '125 cc',
    'Maksimum Güç', '11 HP @ 8500 rpm',
    'Yakıt Deposu', '5.5 L',
    'Ağırlık', '112 kg',
    'Maksimum Hız', '95 km/h'
  ),
  true,
  (model_data->>'order')::integer
FROM motorcycle_categories c
CROSS JOIN jsonb_array_elements('[
  {"name": "Atmaca S125", "slug": "atmaca-s125", "description": "Şehir içi ulaşımda konfor ve ekonomi", "order": 1},
  {"name": "Atmaca S150", "slug": "atmaca-s150", "description": "Güçlü motor ve geniş bagaj alanı", "order": 2}
]'::jsonb) AS model_data
WHERE c.slug = 'scooter'
ON CONFLICT (slug) DO NOTHING;

-- Sample motorcycle models for Electric category
INSERT INTO motorcycle_models (category_id, name, slug, description, main_image, technical_specs, is_active, display_order)
SELECT
  c.id,
  model_data->>'name',
  model_data->>'slug',
  model_data->>'description',
  'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1200',
  jsonb_build_object(
    'Motor Gücü', '3000 W',
    'Batarya', '72V 40Ah',
    'Menzil', '80 km',
    'Şarj Süresi', '6-8 saat',
    'Maksimum Hız', '70 km/h'
  ),
  true,
  (model_data->>'order')::integer
FROM motorcycle_categories c
CROSS JOIN jsonb_array_elements('[
  {"name": "Atmaca E3000", "slug": "atmaca-e3000", "description": "Çevre dostu elektrikli scooter", "order": 1},
  {"name": "Atmaca E5000", "slug": "atmaca-e5000", "description": "Uzun menzil ve hızlı şarj", "order": 2},
  {"name": "Atmaca E-Sport", "slug": "atmaca-e-sport", "description": "Sportif tasarım ve güçlü performans", "order": 3}
]'::jsonb) AS model_data
WHERE c.slug = 'elektrikli'
ON CONFLICT (slug) DO NOTHING;

-- Sample motorcycle models for Cub category
INSERT INTO motorcycle_models (category_id, name, slug, description, main_image, technical_specs, is_active, display_order)
SELECT
  c.id,
  'Atmaca C110',
  'atmaca-c110',
  'Klasik tasarım, yüksek yakıt tasarrufu',
  'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1200',
  jsonb_build_object(
    'Motor Hacmi', '110 cc',
    'Maksimum Güç', '8 HP @ 7500 rpm',
    'Yakıt Deposu', '4.0 L',
    'Yakıt Tüketimi', '2.0 L/100km',
    'Ağırlık', '95 kg'
  ),
  true,
  1
FROM motorcycle_categories c
WHERE c.slug = 'cub'
ON CONFLICT (slug) DO NOTHING;

-- Sample dealers
INSERT INTO dealers (company_name, contact_person, address, city_id, district_id, phone, mobile, email, latitude, longitude, is_active)
SELECT
  dealer_data->>'company_name',
  dealer_data->>'contact_person',
  dealer_data->>'address',
  c.id,
  d.id,
  dealer_data->>'phone',
  dealer_data->>'mobile',
  dealer_data->>'email',
  (dealer_data->>'latitude')::numeric,
  (dealer_data->>'longitude')::numeric,
  true
FROM jsonb_array_elements('[
  {
    "company_name": "Atmaca İstanbul Merkez Bayi",
    "contact_person": "Mehmet Yılmaz",
    "address": "Bağdat Caddesi No:234",
    "city": "34",
    "district": "Kadıköy",
    "phone": "0216 123 45 67",
    "mobile": "0532 123 45 67",
    "email": "istanbul@atmaca.com.tr",
    "latitude": 40.98,
    "longitude": 29.03
  },
  {
    "company_name": "Atmaca Ankara Çankaya Bayi",
    "contact_person": "Ayşe Demir",
    "address": "Kızılay Meydanı No:45",
    "city": "06",
    "district": "Çankaya",
    "phone": "0312 234 56 78",
    "mobile": "0533 234 56 78",
    "email": "ankara@atmaca.com.tr",
    "latitude": 39.92,
    "longitude": 32.85
  }
]'::jsonb) AS dealer_data
CROSS JOIN cities c
CROSS JOIN districts d
WHERE c.code = dealer_data->>'city'
  AND d.name = dealer_data->>'district'
  AND d.city_id = c.id;

-- Sample service centers
INSERT INTO service_centers (company_name, contact_person, address, city_id, district_id, phone, mobile, email, latitude, longitude, is_active)
SELECT
  service_data->>'company_name',
  service_data->>'contact_person',
  service_data->>'address',
  c.id,
  d.id,
  service_data->>'phone',
  service_data->>'mobile',
  service_data->>'email',
  (service_data->>'latitude')::numeric,
  (service_data->>'longitude')::numeric,
  true
FROM jsonb_array_elements('[
  {
    "company_name": "Atmaca Yetkili Servis - İstanbul",
    "contact_person": "Ali Kaya",
    "address": "Şişli Plaza Kat:2",
    "city": "34",
    "district": "Şişli",
    "phone": "0212 345 67 89",
    "mobile": "0534 345 67 89",
    "email": "servis-istanbul@atmaca.com.tr",
    "latitude": 41.06,
    "longitude": 28.98
  },
  {
    "company_name": "Atmaca Yetkili Servis - Ankara",
    "contact_person": "Fatma Yıldız",
    "address": "Etimesgut Sanayi Sitesi No:67",
    "city": "06",
    "district": "Etimesgut",
    "phone": "0312 456 78 90",
    "mobile": "0535 456 78 90",
    "email": "servis-ankara@atmaca.com.tr",
    "latitude": 39.95,
    "longitude": 32.67
  }
]'::jsonb) AS service_data
CROSS JOIN cities c
CROSS JOIN districts d
WHERE c.code = service_data->>'city'
  AND d.name = service_data->>'district'
  AND d.city_id = c.id;

-- Sample news
INSERT INTO news (category_id, title, slug, summary, content, image_url, is_published, published_at)
SELECT
  nc.id,
  news_data->>'title',
  news_data->>'slug',
  news_data->>'summary',
  news_data->>'content',
  'https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1200',
  true,
  now() - (news_data->>'days_ago')::interval
FROM news_categories nc
CROSS JOIN jsonb_array_elements('[
  {
    "title": "2024 Yeni Model Lansmanı",
    "slug": "2024-yeni-model-lansmani",
    "summary": "2024 model yılı için hazırladığımız yeni scooter ve elektrikli modellerimizi tanıttık.",
    "content": "2024 model yılı için hazırladığımız yeni scooter ve elektrikli modellerimizi büyük bir törenle tanıttık. Yeni modellerimiz modern tasarım, gelişmiş güvenlik özellikleri ve üstün performans sunuyor.",
    "category": "haberler",
    "days_ago": "5 days"
  },
  {
    "title": "Bayi Ağımız Genişliyor",
    "slug": "bayi-agimiz-genisliyor",
    "summary": "Türkiye genelinde 150\'yi aşan bayi sayımıza yenileri ekleniyor.",
    "content": "Müşterilerimize daha iyi hizmet verebilmek için bayi ağımızı sürekli genişletiyoruz. Bu ay İzmir, Bursa ve Antalya\'da yeni bayilerimiz açıldı.",
    "category": "duyurular",
    "days_ago": "10 days"
  },
  {
    "title": "Test Sürüşü Etkinliği",
    "slug": "test-surusu-etkinligi",
    "summary": "İstanbul\'da düzenleyeceğimiz test sürüşü etkinliğine davetlisiniz.",
    "content": "15-17 Mart tarihleri arasında İstanbul\'da düzenleyeceğimiz test sürüşü etkinliğinde tüm modellerimizi deneme fırsatı bulacaksınız. Etkinlik ücretsizdir, kayıt yaptırmayı unutmayın.",
    "category": "etkinlikler",
    "days_ago": "3 days"
  }
]'::jsonb) AS news_data
WHERE nc.slug = news_data->>'category'
ON CONFLICT (slug) DO NOTHING;

-- Sample catalogs
INSERT INTO catalogs (title, description, pdf_url, thumbnail_url, is_active, display_order)
VALUES
  (
    '2024 Genel Ürün Katalogu',
    'Tüm modellerimizin detaylı teknik özellikleri ve fiyat bilgileri',
    '#',
    'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400',
    true,
    1
  ),
  (
    'Elektrikli Modeller Katalogu',
    'Elektrikli scooter modellerimizin özel katalogu',
    '#',
    'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400',
    true,
    2
  ),
  (
    'Yedek Parça Katalogu',
    'Orijinal yedek parça listesi ve fiyatları',
    '#',
    'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=400',
    true,
    3
  )
ON CONFLICT DO NOTHING;
