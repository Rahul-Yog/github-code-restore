-- Update the Crown Of Caledon Leads table to include all necessary lead form fields
ALTER TABLE "Crown Of Caledon Leads" 
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT, 
ADD COLUMN email TEXT,
ADD COLUMN phone TEXT,
ADD COLUMN interested_in TEXT,
ADD COLUMN timeline TEXT,
ADD COLUMN message TEXT,
ADD COLUMN form_type TEXT DEFAULT 'lead_form',
ADD COLUMN source TEXT DEFAULT 'website';

-- Enable Row Level Security
ALTER TABLE "Crown Of Caledon Leads" ENABLE ROW LEVEL SECURITY;

-- Create RLS policies to allow anyone to insert (for lead form submissions)
-- and authenticated users to read (for dashboard viewing)
CREATE POLICY "Anyone can submit leads" 
ON "Crown Of Caledon Leads" 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads" 
ON "Crown Of Caledon Leads" 
FOR SELECT 
USING (auth.role() = 'authenticated');