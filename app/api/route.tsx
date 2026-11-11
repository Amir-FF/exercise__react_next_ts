import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ massage: `Hello form api:` });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  // console.log(body);
  // console.log(body.name);
  // console.log(formData);
  console.log(formData.get("name"));

  return NextResponse.json({ massage: `Hello form api - Post` });
}
