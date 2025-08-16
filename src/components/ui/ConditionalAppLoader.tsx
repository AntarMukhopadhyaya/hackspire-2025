"use client";

import { usePathname } from "next/navigation";
import AppLoader from "./AppLoader";

interface ConditionalAppLoaderProps {
  children: React.ReactNode;
}

export default function ConditionalAppLoader({
  children,
}: ConditionalAppLoaderProps) {
  const pathname = usePathname();

  // Skip AppLoader for admin routes to prevent hydration issues
  if (pathname?.startsWith("/admin/")) {
    return <>{children}</>;
  }

  return <AppLoader>{children}</AppLoader>;
}
