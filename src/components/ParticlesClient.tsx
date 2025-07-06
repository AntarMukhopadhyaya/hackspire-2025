"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const ParticlesWrapper = dynamic(() => import("./ParticlesWrapper"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 pointer-events-none particles-container opacity-0 -z-10">
      <div className="w-full h-full bg-transparent" />
    </div>
  ),
});

export default function ParticlesClient() {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 pointer-events-none particles-container opacity-0 -z-10">
          <div className="w-full h-full bg-transparent" />
        </div>
      }
    >
      <ParticlesWrapper />
    </Suspense>
  );
}
