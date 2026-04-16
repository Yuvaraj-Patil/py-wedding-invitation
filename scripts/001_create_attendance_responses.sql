-- Create attendance_responses table to track wedding RSVPs
CREATE TABLE IF NOT EXISTS public.attendance_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  response TEXT NOT NULL CHECK (response IN ('attending', 'not-attending')),
  guest_name TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index for efficient date-based queries
CREATE INDEX IF NOT EXISTS idx_attendance_responses_created_at 
ON public.attendance_responses (created_at);

-- Create index for response filtering
CREATE INDEX IF NOT EXISTS idx_attendance_responses_response 
ON public.attendance_responses (response);

-- Disable RLS since this is a public wedding invitation (no auth required)
ALTER TABLE public.attendance_responses DISABLE ROW LEVEL SECURITY;

-- Grant insert access to anonymous users (for the wedding guests)
GRANT INSERT ON public.attendance_responses TO anon;
GRANT SELECT ON public.attendance_responses TO anon;
