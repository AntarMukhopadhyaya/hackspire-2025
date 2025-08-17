#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

console.log("🔍 Verifying HackSpire 2025 SEO Implementation...\n");

const requiredFiles = [
  "src/app/layout.tsx",
  "src/app/sitemap.ts",
  "src/app/sitemap-index.ts",
  "src/app/feed.xml/route.ts",
  "src/components/ui/SEOHead.tsx",
  "public/robots.txt",
  "public/browserconfig.xml",
  "public/manifest.json",
  "public/.well-known/security.txt",
  "public/humans.txt",
  "SEO_IMPLEMENTATION.md",
];

let allFilesExist = true;

requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Found`);
  } else {
    console.log(`❌ ${file} - Missing`);
    allFilesExist = false;
  }
});

console.log("\n📊 SEO Implementation Status:");
if (allFilesExist) {
  console.log("🎉 All SEO files have been created successfully!");
  console.log("\n🚀 Next Steps:");
  console.log(
    "1. Update your domain in layout.tsx (replace hackspire.tech)"
  );
  console.log("2. Add your Google verification codes");
  console.log("3. Submit sitemap to Google Search Console");
  console.log("4. Test structured data with Google Rich Results Test");
  console.log("5. Monitor indexing in Google Search Console");
} else {
  console.log("⚠️  Some SEO files are missing. Please check the errors above.");
}

console.log("\n📖 For detailed information, see: SEO_IMPLEMENTATION.md");
console.log("🔗 Sitemap URL: /sitemap.xml");
console.log("🤖 Robots.txt: /robots.txt");
console.log("📱 PWA Manifest: /manifest.json");
console.log("📡 RSS Feed: /feed.xml");
