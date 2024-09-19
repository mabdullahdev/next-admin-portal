import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { refresh } from './utils/services/refreshToken';

export const config = {
  matcher: ['/dashboard'], // Apply  to specific routes
};

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get('accessToken')?.value;

  if (!accessToken) {
    const refreshToken = req.cookies.get('refreshToken')?.value;

    if (!refreshToken) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    try {
      // Call the refresh token service
      await refresh();

      // After refreshing, proceed with the next response
      return NextResponse.next();
    } catch (error) {
      console.error('Refresh token failed', error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return NextResponse.next();
}