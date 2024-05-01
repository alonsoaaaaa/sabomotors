import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // if (request.headers.get("isAdmin") !== "true") {
  //   return NextResponse.redirect(new URL("/admin", request.url));
  // }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard", "/add"],
};

// export function middleware(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   requestHeaders.set("x-hello-from-middleware1", "hello");
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
//   response.headers.set("x-hello-from-middleware2", "hello");
// }
