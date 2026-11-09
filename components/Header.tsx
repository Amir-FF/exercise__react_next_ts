"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path: string = usePathname();

  return (
    <>
      <ul>
        <li>
          <Link
            className={
              path === "/"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className={
              path === "/posts"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/posts"
          >
            Posts
          </Link>
        </li>
      </ul>

      <br />
      <br />
    </>
  );
}
