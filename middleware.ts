import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const redirectUrl = process.env.REDIRECT_URL || 'https://example.com';

  const url = new URL(redirectUrl);

  const searchParams = request.nextUrl.searchParams.toString();
  if (searchParams) {
    url.search = searchParams;
  }

  return NextResponse.redirect(url, {
    status: parseInt(process.env.REDIRECT_STATUS || '302')
  });
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};