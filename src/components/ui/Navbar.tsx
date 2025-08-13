"use client";

import { usePathname } from "next/navigation";
import { CyberpunkNavbar } from "./CyberpunkNavbar";

export function Navbar() {
  const pathname = usePathname();

  // Don't show navbar on mentors form page
  if (pathname === "/mentors-form") {
    return null;
  }

  return <CyberpunkNavbar />;
}
