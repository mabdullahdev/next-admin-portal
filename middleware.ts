import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/dashboard'], // Apply middleware to specific routes
};

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('token');

  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}