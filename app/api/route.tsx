import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name");
  const age = request.nextUrl.searchParams.get("age");

  return NextResponse.json({ massage: `Hello form api: ${name} & ${age}` });
}

// { status: 500 }
