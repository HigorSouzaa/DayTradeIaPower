/*
  # Sistema de Usuários e Investimentos

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `investments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `amount` (decimal)
      - `risk_level` (text: low, medium, high)
      - `daily_return` (decimal)
      - `total_return` (decimal)
      - `status` (text: active, paused, closed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `operations`
      - `id` (uuid, primary key)
      - `investment_id` (uuid, references investments)
      - `operation_type` (text: buy, sell)
      - `stock_symbol` (text)
      - `quantity` (integer)
      - `price` (decimal)
      - `result` (decimal)
      - `executed_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
</*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create investments table
CREATE TABLE IF NOT EXISTS investments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  amount decimal(12,2) NOT NULL DEFAULT 0,
  risk_level text NOT NULL CHECK (risk_level IN ('low', 'medium', 'high')),
  daily_return decimal(8,4) NOT NULL DEFAULT 0,
  total_return decimal(12,2) NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create operations table
CREATE TABLE IF NOT EXISTS operations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  investment_id uuid REFERENCES investments(id) ON DELETE CASCADE NOT NULL,
  operation_type text NOT NULL CHECK (operation_type IN ('buy', 'sell')),
  stock_symbol text NOT NULL,
  quantity integer NOT NULL,
  price decimal(10,2) NOT NULL,
  result decimal(10,2) NOT NULL DEFAULT 0,
  executed_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE investments ENABLE ROW LEVEL SECURITY;
ALTER TABLE operations ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Policies for investments
CREATE POLICY "Users can read own investments"
  ON investments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can insert own investments"
  ON investments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own investments"
  ON investments
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid());

-- Policies for operations
CREATE POLICY "Users can read own operations"
  ON operations
  FOR SELECT
  TO authenticated
  USING (
    investment_id IN (
      SELECT id FROM investments WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert operations for own investments"
  ON operations
  FOR INSERT
  TO authenticated
  WITH CHECK (
    investment_id IN (
      SELECT id FROM investments WHERE user_id = auth.uid()
    )
  );

-- Function to handle user profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_investments_updated_at
  BEFORE UPDATE ON investments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();