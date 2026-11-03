"use client";

import Header from "@/components/Header";
import { useEffect } from "react";

export default function RootLayout({ children }: LayoutProps<"/">) {
  useEffect((): void => {
    console.log("Test...");
  }, []);

  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
