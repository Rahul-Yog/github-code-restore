-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'sales', 'marketing');

-- Create profiles table for user roles and additional info
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name TEXT,
  last_name TEXT,
  role app_role,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT role FROM public.profiles WHERE id = auth.uid();
$$;

-- Create function to check if user has specific role
CREATE OR REPLACE FUNCTION public.has_role(_role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = _role
  );
$$;

-- RLS policies for profiles table
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
USING (public.has_role('admin'));

CREATE POLICY "Admins can update all profiles"
ON public.profiles
FOR UPDATE
USING (public.has_role('admin'));

CREATE POLICY "Admins can insert profiles"
ON public.profiles
FOR INSERT
WITH CHECK (public.has_role('admin'));

-- Drop the overly permissive RLS policy on Crown Of Caledon Leads
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public."Crown Of Caledon Leads";

-- Create new role-based RLS policies for leads
CREATE POLICY "Admins can view all leads"
ON public."Crown Of Caledon Leads"
FOR SELECT
USING (public.has_role('admin'));

CREATE POLICY "Sales team can view all leads"
ON public."Crown Of Caledon Leads"
FOR SELECT
USING (public.has_role('sales'));

CREATE POLICY "Marketing team can view all leads"
ON public."Crown Of Caledon Leads"
FOR SELECT
USING (public.has_role('marketing'));

CREATE POLICY "Admins can update leads"
ON public."Crown Of Caledon Leads"
FOR UPDATE
USING (public.has_role('admin'));

CREATE POLICY "Admins can delete leads"
ON public."Crown Of Caledon Leads"
FOR DELETE
USING (public.has_role('admin'));

-- Create trigger function to auto-create profiles when users sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'first_name',
    NEW.raw_user_meta_data ->> 'last_name',
    NULL -- No role by default - admin must assign
  );
  RETURN NEW;
END;
$$;

-- Create trigger to auto-create profiles
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add trigger for timestamp updates on profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();