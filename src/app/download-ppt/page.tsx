import { redirect } from "next/navigation";

export default function DownloadPPTPage() {
  redirect(
    "https://docs.google.com/presentation/d/1jWKJSNX9mBzcWjO_JQtoqDjZKPOkjokX/export/pptx"
  );
}
