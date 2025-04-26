import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // CSP Headers
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://maps.googleapis.com https://maps.gstatic.com https://assets.calendly.com *.calendly.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: www.facebook.com *.facebook.com res.cloudinary.com maps.gstatic.com maps.googleapis.com",
      "media-src 'self' https: res.cloudinary.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.facebook.com *.facebook.com https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com https://calendly.com *.calendly.com https://res.cloudinary.com https://maps.googleapis.com",
      "frame-src 'self' https://www.facebook.com https://calendly.com *.calendly.com"
    ].join("; ")
  );

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)"
};
