-- Supabase Database Schema for ANVESHAK (v2 - Full Integration)
-- Execute this in the Supabase SQL Editor

-- 1. Create Profiles Table (Extends Supabase Auth)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('admin', 'logistics', 'buyer', 'farmer', 'manufacturer', 'processor')),
  organization TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 2. Create Batches Table (Supply Chain Tracking)
CREATE TABLE batches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  batch_number TEXT UNIQUE NOT NULL,
  product_name TEXT NOT NULL,
  origin TEXT,
  destination TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'verified', 'rejected', 'shipped', 'delivered')),
  created_by UUID REFERENCES profiles(id),
  blockchain_tx_hash TEXT,
  temperature_log JSONB DEFAULT '[]', 
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE batches ENABLE ROW LEVEL SECURITY;

-- 3. Create Audit Logs Table
CREATE TABLE audit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type TEXT NOT NULL,
  description TEXT,
  performed_by UUID REFERENCES profiles(id),
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- 4. Create Supply Chain Events Table
CREATE TABLE supply_chain_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  batch_id UUID REFERENCES batches(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  location TEXT,
  description TEXT,
  metadata JSONB DEFAULT '{}',
  performed_by UUID REFERENCES profiles(id),
  blockchain_tx_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE supply_chain_events ENABLE ROW LEVEL SECURITY;

-- 5. RLS POLICIES

-- Profiles: Users can read all profiles, but only update their own
CREATE POLICY "Profiles are viewable by authenticated users" ON profiles
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Batches: Everyone can view batches, only admins and vendors/farmers can create/edit
CREATE POLICY "Batches are viewable by everyone" ON batches
  FOR SELECT USING (true);

CREATE POLICY "Authorized roles can insert batches" ON batches
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'logistics', 'farmer', 'manufacturer', 'processor')
    )
  );

CREATE POLICY "Authorized roles can update batches" ON batches
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'logistics', 'farmer', 'manufacturer', 'processor')
    )
  );

-- Supply Chain Events Policies
CREATE POLICY "Events are viewable by everyone" ON supply_chain_events
  FOR SELECT USING (true);

CREATE POLICY "Authorized roles can insert events" ON supply_chain_events
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'vendor', 'farmer', 'manufacturer', 'processor')
    )
  );

-- Audit Logs: Only admins can view logs
CREATE POLICY "Admins can view audit logs" ON audit_logs
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Authenticated users can insert logs" ON audit_logs
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- 5. TRIGGERS & FUNCTIONS

-- Function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, role, is_approved)
  VALUES (
    new.id, 
    COALESCE(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)), 
    COALESCE(new.raw_user_meta_data->>'full_name', 'New User'), 
    COALESCE(new.raw_user_meta_data->>'role', 'buyer'),
    (COALESCE(new.raw_user_meta_data->>'role', 'buyer') = 'buyer') -- Auto-approve buyers
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user on auth.users insert
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
