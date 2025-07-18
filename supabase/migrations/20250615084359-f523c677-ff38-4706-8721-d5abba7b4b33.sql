
-- Create a table to store contact form submissions
CREATE TABLE public.contacts (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security on the new table
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to submit the contact form
CREATE POLICY "Allow public insert for contact form"
ON public.contacts
FOR INSERT
WITH CHECK (true);
