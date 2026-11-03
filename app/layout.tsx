import Header from "@/components/Header";
import { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
  title: "Home",
  description: "The official Next.js Course Dashboard, built with App Router.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="p-4">
        <Header />

        {children}
      </body>
    </html>
  );
}
