import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL("/", request.url));

  // if (request.nextUrl.pathname == "/about") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// export const config = {
//   matcher: ['/about/:path*', '/dashboard/:path*'],
// }
