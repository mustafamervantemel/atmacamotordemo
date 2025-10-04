# Atmaca Motosiklet - Database Setup Guide

This guide explains how to set up the database for the Atmaca Motosiklet website.

## Database Schema

The database consists of the following tables:

### Core Tables
- `motorcycle_categories` - Product categories (Scooter, Elektrikli, Cub)
- `motorcycle_models` - Individual motorcycle models with specs
- `catalogs` - Downloadable PDF catalogs
- `news` & `news_categories` - News and announcements
- `contact_messages` - Contact form submissions

### Location Tables
- `cities` - Turkish cities
- `districts` - Districts within cities

### Dealer & Service Tables
- `dealers` - Authorized dealers
- `service_centers` - Authorized service centers
- `dealer_applications` - Dealer/service applications from the website

## Setup Instructions

### Step 1: Run the Main Migration

1. Open your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy the contents of `/tmp/migration.sql`
4. Paste and execute the SQL

This will:
- Create all necessary tables
- Set up Row Level Security (RLS) policies
- Insert initial data for cities and categories

### Step 2: Populate Sample Data (Optional)

To add sample data for testing:

1. Open the SQL Editor in Supabase
2. Copy the contents of `src/scripts/init-database.sql`
3. Paste and execute the SQL

This will add:
- Sample motorcycle models (3 categories)
- Sample dealers and service centers
- Sample news articles
- Sample catalog entries
- Sample districts for major cities

## Security

All tables have Row Level Security (RLS) enabled with the following policies:

### Public Read Access
- `motorcycle_categories` - Anyone can view
- `motorcycle_models` - Anyone can view active models
- `catalogs` - Anyone can view active catalogs
- `dealers` - Anyone can view active dealers
- `service_centers` - Anyone can view active service centers
- `news` - Anyone can view published news
- `cities` & `districts` - Anyone can view

### Public Write Access
- `dealer_applications` - Anyone can create applications
- `contact_messages` - Anyone can create messages

### Admin Only
All UPDATE and DELETE operations require authentication.

## Environment Variables

The following environment variables are already configured in your `.env` file:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Database Schema Overview

```
motorcycle_categories
├── motorcycle_models (FK: category_id)

cities
├── districts (FK: city_id)
├── dealers (FK: city_id, district_id)
├── service_centers (FK: city_id, district_id)
└── dealer_applications (FK: city_id, district_id)

news_categories
└── news (FK: category_id)

contact_messages (standalone)
catalogs (standalone)
```

## Adding Content

### Adding Models

Models can be added through the Supabase dashboard or API:

```sql
INSERT INTO motorcycle_models (
  category_id,
  name,
  slug,
  description,
  main_image,
  technical_specs,
  is_active
) VALUES (
  'category-uuid',
  'Model Name',
  'model-slug',
  'Description',
  'image-url',
  '{"Motor Hacmi": "125cc", "Güç": "11HP"}'::jsonb,
  true
);
```

### Adding News

```sql
INSERT INTO news (
  category_id,
  title,
  slug,
  summary,
  content,
  image_url,
  is_published,
  published_at
) VALUES (
  'category-uuid',
  'News Title',
  'news-slug',
  'Summary text',
  'Full content',
  'image-url',
  true,
  now()
);
```

## Maintenance

### Viewing Applications

Dealer applications can be viewed with:

```sql
SELECT
  da.*,
  c.name as city_name,
  d.name as district_name
FROM dealer_applications da
LEFT JOIN cities c ON da.city_id = c.id
LEFT JOIN districts d ON da.district_id = d.id
ORDER BY da.created_at DESC;
```

### Viewing Contact Messages

```sql
SELECT * FROM contact_messages
WHERE is_read = false
ORDER BY created_at DESC;
```

## Backup Recommendation

It's recommended to:
1. Enable Point-in-Time Recovery in Supabase settings
2. Regular exports of critical data
3. Monitor application usage through Supabase dashboard
