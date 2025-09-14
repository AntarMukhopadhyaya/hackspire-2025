import { redirect } from "next/navigation";

// Server-side redirect for better SEO
export default function BrandAssetsPage() {
  // This will perform a server-side redirect
  redirect(
    "https://befitting-lens-774.notion.site/HackSpire-25-Brand-Assets-26ec78e1cf6380c8be6de713eb579ac5?source=copy_link"
  );
}
