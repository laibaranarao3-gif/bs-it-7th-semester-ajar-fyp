import { NextResponse, NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const role = request.cookies.get("userRole")?.value;
  const path = request.nextUrl.pathname;

  // Agar Login nahi hai aur Admin khol raha hai
  if (path.startsWith("/admin") && !role) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Agar Donor ya Focal Admin kholne ki koshish kare
  if (path.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};