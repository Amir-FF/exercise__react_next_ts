import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
};

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      {children}

      <h2>layout Dashboard</h2>
    </>
  );
}
