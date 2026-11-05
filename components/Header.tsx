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
            Loyout
          </Link>
        </li>
        <li>
          <Link
            className={
              path === "/about"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/about"
          >
            Blog
          </Link>
        </li>

        <li>
          <Link
            className={
              path === "/products"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/products"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            className={
              path === "/users"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/users"
          >
            users
          </Link>
        </li>
      </ul>

      <br />
      <br />
    </>
  );
}
