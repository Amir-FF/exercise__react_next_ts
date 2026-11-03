"use client";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  return (
    <>
      <h1>Home</h1>

      <h3>
        {searchParams.get("name")}
        {searchParams.get("family")}: {searchParams.get("age")}
      </h3>
    </>
  );
}
