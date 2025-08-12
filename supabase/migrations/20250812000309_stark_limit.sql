/*
  # Sistema de usuários e investimentos

  1. Novas Tabelas
    - `profiles` - Perfis dos usuários
      - `id` (uuid, referência ao auth.users)
      - `full_name` (text)
      - `email` (text, único)
      - `phone` (text, opcional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `investments` - Investimentos dos usuários
      - `id` (uuid, primary key)
      - `user_id` (uuid, referência ao profiles)
      - `amount` (numeric)
      - `risk_level` (text: low, medium, high)
      - `daily_return` (numeric)
      - `total_return` (numeric)
      - `status` (text: active, paused, closed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `operations` - Operações de trading
      - `id` (uuid, primary key)
      - `investment_id` (uuid, referência ao investments)
      - `operation_type` (text: buy, sell)
      - `stock_symbol` (text)
      - `quantity` (integer)
      - `price` (numeric)
      - `result` (numeric)
      - `executed_at` (timestamp)

  2. Segurança
    - Habilitar RLS em todas as tabelas
    - Políticas para usuários acessarem apenas seus próprios dados
    - Trigger para criar perfil automaticamente após cadastro
    - Trigger para atualizar updated_at automaticamente
*/

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Tabela de perfis
CREATE TABLE IF NOT EXISTS profiles (
  id uuid REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Políticas para profiles
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

-- Trigger para atualizar updated_at em profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Tabela de investimentos
CREATE TABLE IF NOT EXISTS investments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  amount numeric(12,2) NOT NULL DEFAULT 0,
  risk_level text NOT NULL CHECK (risk_level IN ('low', 'medium', 'high')),
  daily_return numeric(8,4) NOT NULL DEFAULT 0,
  total_return numeric(12,2) NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'closed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE investments ENABLE ROW LEVEL SECURITY;

-- Políticas para investments
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

-- Trigger para atualizar updated_at em investments
CREATE TRIGGER update_investments_updated_at
  BEFORE UPDATE ON investments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Tabela de operações
CREATE TABLE IF NOT EXISTS operations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  investment_id uuid REFERENCES investments(id) ON DELETE CASCADE NOT NULL,
  operation_type text NOT NULL CHECK (operation_type IN ('buy', 'sell')),
  stock_symbol text NOT NULL,
  quantity integer NOT NULL,
  price numeric(10,2) NOT NULL,
  result numeric(10,2) NOT NULL DEFAULT 0,
  executed_at timestamptz DEFAULT now()
);

ALTER TABLE operations ENABLE ROW LEVEL SECURITY;

-- Políticas para operations
CREATE POLICY "Users can read own operations"
  ON operations
  FOR SELECT
  TO authenticated
  USING (investment_id IN (
    SELECT id FROM investments WHERE user_id = auth.uid()
  ));

CREATE POLICY "Users can insert operations for own investments"
  ON operations
  FOR INSERT
  TO authenticated
  WITH CHECK (investment_id IN (
    SELECT id FROM investments WHERE user_id = auth.uid()
  ));

-- Função para criar perfil automaticamente
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuário'),
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger para criar perfil automaticamente
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user();