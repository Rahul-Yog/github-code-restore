-- Add missing columns to Crown Of Caledon Leads table
ALTER TABLE public."Crown Of Caledon Leads" 
ADD COLUMN IF NOT EXISTS price_range text,
ADD COLUMN IF NOT EXISTS is_realtor boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS newsletter_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS privacy_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS phone_consent boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS user_agent text;