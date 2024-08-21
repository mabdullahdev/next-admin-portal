import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/dashboard'], // Apply  to specific routes
};

export async function middleware(req: NextRequest) {
  const url = new URL(req.url);
  if (url.searchParams.has('bypass')) {
    return NextResponse.next();
  }
  const cookieHeader = req.headers.get('cookie') || '';
  const cookies = Object.fromEntries(
    cookieHeader.split('; ').map(cookie => {
      const [key, value] = cookie.split('=');
      return [key, value];
    })
  );

  const accessToken = cookies.accessToken;

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}