"use client";

import { usePathname } from "next/navigation";
import { CyberpunkNavbar } from "./CyberpunkNavbar";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/mentors-form") {
    return null;
  }
  if (pathname === "/mentor-edit-request") {
    return null;
  }
  if (pathname === "/judges-form") {
    return null;
  }
  if (pathname === "/judges-edit-request") {
    return null;
  }
  if (pathname === "/security-policy") {
    return null;
  }

  return <CyberpunkNavbar />;
}
