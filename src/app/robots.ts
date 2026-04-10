import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://tesda-nc.koydo.app/sitemap.xml",
    host: "https://tesda-nc.koydo.app",
  };
}
