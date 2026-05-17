import { NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

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
const MAX_LANGUAGE_LENGTH = 16;

export type FreeEbookResponse = {
  success: boolean;
  error?: string;
  errorCode?: 'invalid_email' | 'consent_required' | 'already_registered' | 'server_error';
  message?: string;
};

export async function OPTIONS(req: Request): Promise<NextResponse> {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(req),
  });
}

export async function POST(req: Request): Promise<NextResponse<FreeEbookResponse>> {
  const cors = getCorsHeaders(req);

  const supabase = getSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { success: false, error: 'Server configuration missing', errorCode: 'server_error' },
      { status: 500, headers: cors }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON body', errorCode: 'server_error' },
      { status: 400, headers: cors }
    );
  }

  const { email, language, marketingAccepted } = body as {
    email?: unknown;
    language?: unknown;
    marketingAccepted?: unknown;
  };

  if (typeof email !== 'string' || !email.trim()) {
    return NextResponse.json(
      { success: false, error: 'Email is required', errorCode: 'invalid_email' },
      { status: 400, headers: cors }
    );
  }

  const emailTrimmed = email.trim().toLowerCase();
  if (!EMAIL_REGEX.test(emailTrimmed)) {
    return NextResponse.json(
      { success: false, error: 'Invalid email format', errorCode: 'invalid_email' },
      { status: 400, headers: cors }
    );
  }

  if (marketingAccepted !== true) {
    return NextResponse.json(
      { success: false, error: 'Consent is required', errorCode: 'consent_required' },
      { status: 400, headers: cors }
    );
  }

  let languageValue: string | null = null;
  if (typeof language === 'string' && language.trim()) {
    const trimmed = language.trim();
    if (trimmed.length <= MAX_LANGUAGE_LENGTH) {
      languageValue = trimmed;
    }
  }

  const { error } = await supabase.from('free_ebook_subscribers').insert({
    email: emailTrimmed,
    language: languageValue,
    marketing_accepted: true,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json(
        {
          success: false,
          error: 'This email is already registered',
          errorCode: 'already_registered',
        },
        { status: 409, headers: cors }
      );
    }
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to register. Please try again later.',
        errorCode: 'server_error',
      },
      { status: 500, headers: cors }
    );
  }

  return NextResponse.json(
    { success: true, message: 'You will receive your ebook shortly.' },
    { status: 201, headers: cors }
  );
}
