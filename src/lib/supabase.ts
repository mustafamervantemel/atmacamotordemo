import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface MotorcycleCategory {
  id: string;
  name: string;
  slug: string;
  display_order: number;
  created_at: string;
}

export interface MotorcycleModel {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  main_image: string;
  gallery_images: string[];
  technical_specs: Record<string, string>;
  brochure_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Catalog {
  id: string;
  title: string;
  description: string;
  pdf_url: string;
  thumbnail_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
}

export interface City {
  id: string;
  name: string;
  code: string;
  display_order: number;
}

export interface District {
  id: string;
  city_id: string;
  name: string;
  display_order: number;
}

export interface Dealer {
  id: string;
  company_name: string;
  contact_person: string;
  address: string;
  city_id: string;
  district_id: string;
  phone: string;
  mobile: string;
  email: string;
  latitude: number;
  longitude: number;
  is_active: boolean;
  created_at: string;
}

export interface ServiceCenter {
  id: string;
  company_name: string;
  contact_person: string;
  address: string;
  city_id: string;
  district_id: string;
  phone: string;
  mobile: string;
  email: string;
  latitude: number;
  longitude: number;
  is_active: boolean;
  created_at: string;
}

export interface DealerApplication {
  company_name: string;
  establishment_date: string;
  contact_person: string;
  address: string;
  email: string;
  city_id: string;
  district_id: string;
  mobile_phone: string;
  business_phone: string;
  home_phone: string;
  service_type: 'Bayi' | 'Servis' | '3S';
  message: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface News {
  id: string;
  category_id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image_url: string;
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}
