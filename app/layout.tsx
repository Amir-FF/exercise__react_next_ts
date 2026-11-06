import Header from "@/components/Header";
import "./globals.css";
import { Suspense } from "react";
import localFont from "next/font/local";
import { NextFont } from "next/dist/compiled/@next/font";

// const robotoFont: NextFont = Roboto({
//   subsets: ["latin"],
//   style: "italic",
//   weight: ["400", "700"],
// });

const myFont: NextFont = localFont({
  src: "../public/fonts/Vazir.woff2",
});

export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="p-4">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>

        {children}
      </body>
    </html>
  );
}
