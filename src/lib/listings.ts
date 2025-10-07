// Utility to fetch property listings from Supabase
import { supabase } from './supabaseClient';

export async function fetchListings({ featured = false } = {}) {
  // Example: fetch all listings, filter by 'featured' if needed
  let query = supabase.from('listings').select('*').eq('status', 'active');
  if (featured) {
    query = query.eq('featured', true);
  }
  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

export async function fetchProperty(id: string) {
  const { data, error } = await supabase.from('listings').select('*').eq('id', id).single();
  if (error) throw error;
  return data;
}
