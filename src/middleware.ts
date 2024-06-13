import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Authorization API
  const authorization = req.headers.get("authorization");
  if (!authorization)
    return NextResponse.json(
      { message: "Unauthorized, token not provided" },
      { status: 401 }
    );

  const authorizationType = authorization.split(" ")[0];
  const token = authorization.split(" ")[1];
  const tokenCookie = req.cookies.get("session")?.value;
  const isTokenValid = token === tokenCookie && authorizationType === "Bearer";
  if (!isTokenValid)
    return NextResponse.json(
      { message: "Unauthorized, invalid token" },
      { status: 401 }
    );
}

export const config = {
  matcher: [
    "/api/users/:path*",
    "/api/roles/:path*",
    "/api/employee/:path*",
    "/api/positions/:path*",
    "/api/work-places/:path*",
  ],
};
