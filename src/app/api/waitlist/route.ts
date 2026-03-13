import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/** Origines autorisées pour CORS (identique à delete-account) */
const CORS_ALLOWED_ORIGINS = [
  'https://localhost',
  'http://localhost',
  'capacitor://localhost',
  'http://localhost:3000',
  'http://localhost:8080',
];

function getCorsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('Origin') ?? '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_APP_URL || '';
  const allowOrigin =
    origin &&
    (CORS_ALLOWED_ORIGINS.includes(origin) || (siteUrl && origin === siteUrl.replace(/\/$/, '')))
      ? origin
      : (CORS_ALLOWED_ORIGINS[0] ?? 'https://localhost');
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SOURCES = ['ios', 'android'] as const;

export type WaitlistResponse = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function OPTIONS(req: Request): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(req),
  });
}

export async function POST(req: Request): Promise<NextResponse<WaitlistResponse>> {
  const cors = getCorsHeaders(req);

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { success: false, error: 'Server configuration missing' },
      { status: 500, headers: cors }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body' },
      { status: 400, headers: cors }
    );
  }

  const { email, source, marketingAccepted } = body as {
    email?: unknown;
    source?: unknown;
    marketingAccepted?: unknown;
  };

  if (typeof email !== 'string' || !email.trim()) {
    return NextResponse.json(
      { success: false, error: 'Email is required' },
      { status: 400, headers: cors }
    );
  }

  const emailTrimmed = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(emailTrimmed)) {
    return NextResponse.json(
      { success: false, error: 'Invalid email format' },
      { status: 400, headers: cors }
    );
  }

  if (
    typeof source !== 'string' ||
    !VALID_SOURCES.includes(source as (typeof VALID_SOURCES)[number])
  ) {
    return NextResponse.json(
      { success: false, error: 'Invalid source (must be ios or android)' },
      { status: 400, headers: cors }
    );
  }

  if (typeof marketingAccepted !== 'boolean') {
    return NextResponse.json(
      { success: false, error: 'marketingAccepted must be a boolean' },
      { status: 400, headers: cors }
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  });

  const { error } = await supabase.from('waitlist').insert({
    email: emailTrimmed,
    source: source as 'ios' | 'android',
    marketing_accepted: marketingAccepted,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        { success: false, error: 'This email is already registered on the waitlist' },
        { status: 409, headers: cors }
      );
    }
    return NextResponse.json(
      { success: false, error: 'Failed to register. Please try again later.' },
      { status: 500, headers: cors }
    );
  }

  return NextResponse.json(
    { success: true, message: 'You have been added to the waitlist.' },
    { status: 201, headers: cors }
  );
}
