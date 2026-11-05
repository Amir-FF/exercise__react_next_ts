import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Home",
  description: "This a Next.js Course",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}
      </body>
    </html>
  );
}
