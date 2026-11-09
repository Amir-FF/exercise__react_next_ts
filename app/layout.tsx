import Header from "@/components/Header";
import "./globals.css";
import { Suspense } from "react";

export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-4">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
