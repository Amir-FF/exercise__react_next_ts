import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // console.log(cookies());

  const cook = await cookies();

  // console.log(cook.getAll());

  // console.log(request.cookies.get("name"));
  // console.log(cook.delete("name"));

  // const headerList = headers();
  // console.log((await headerList).get("cookies"));

  // const headerList = new Headers(request.headers);
  // console.log(headerList.get("keys"));

  // redirect("/");

  return NextResponse.json(
    { massage: `Hello form api:` },
    {
      status: 200,
      // headers: {
      //   keys: "radom key",
      // },
    },
  );
}
