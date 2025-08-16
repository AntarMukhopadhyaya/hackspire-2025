import { headers } from "next/headers";

// Get the current website URL dynamically
export async function getCurrentUrl(): Promise<string> {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = headersList.get("x-forwarded-proto") || "http";

    if (host) {
      return `${protocol}://${host}`;
    }
  } catch (error) {
    console.warn("Could not determine current URL from headers");
  }

  // Fallback to environment variables
  return (
    process.env.NEXTAUTH_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000"
  );
}

// Get the current URL for client-side usage
export function getClientUrl(): string {
  if (typeof window !== "undefined") {
    return `${window.location.protocol}//${window.location.host}`;
  }

  // Fallback for server-side (synchronous version)
  return (
    process.env.NEXTAUTH_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000"
  );
}
