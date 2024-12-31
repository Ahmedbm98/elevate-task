import { Suspense } from "react";
import Loader from "./_Components/loader/page";
import Products from "./products/page";

export default function Home() {
  return (
    <div className="container flex items-center justify-center min-h-screen">
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
    </div>
  );
}
