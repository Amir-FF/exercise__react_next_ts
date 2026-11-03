"use client";

import { useEffect } from "react";

export default function Layout({ children }: LayoutProps<"/">) {
  useEffect((): void => {
    console.log("template Test...");
  }, []);

  return <>{children}</>;
}
