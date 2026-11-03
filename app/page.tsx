import Home from "@/components/Home";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  );
}
