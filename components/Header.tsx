import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>

          <ul>
            <li>
              <Link href="/dashboard/settings">Settings</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </>
  );
}
