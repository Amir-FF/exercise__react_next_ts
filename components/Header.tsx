"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const path: string = usePathname();
  const router: AppRouterInstance = useRouter();

  const handleClick = (): void => {
    router.push("/?name=Amir&family=.FF&age=22");
  };

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
              path === "/dashboard"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/dashboard"
          >
            Dashboard
          </Link>

          <ul>
            <li>
              <Link
                className={
                  path === "/dashboard/settings"
                    ? "text-sky-500 text-3xl font-bold underline"
                    : "text-3xl font-bold"
                }
                href="/dashboard/settings"
              >
                Settings
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            className={
              path === "/blog"
                ? "text-sky-500 text-3xl font-bold underline"
                : "text-3xl font-bold"
            }
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>

      <br />

      <button
        onClick={handleClick}
        className="rounded-full bg-sky-500 px-5 py-2 text-sm leading-5 font-semibold text-white hover:bg-sky-700"
        type="button"
      >
        Home
      </button>

      <br />
      <br />

      <br />
    </>
  );
}
