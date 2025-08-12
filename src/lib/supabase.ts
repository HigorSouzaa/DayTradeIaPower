import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface Investment {
  id: string;
  user_id: string;
  amount: number;
  risk_level: 'low' | 'medium' | 'high';
  daily_return: number;
  total_return: number;
  status: 'active' | 'paused' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface Operation {
  id: string;
  investment_id: string;
  operation_type: 'buy' | 'sell';
  stock_symbol: string;
  quantity: number;
  price: number;
  result: number;
  executed_at: string;
}