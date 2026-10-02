import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { guides, posts } from "@/lib/editorial";

const paths = [
  "",
  "/product",
  "/projects",
  "/crm",
  "/hr",
  "/chat",
  "/savings",
  "/pricing",
  "/faq",
  "/learn",
  "/blog",
  ...posts.map((post) => `/blog/${post.slug}`),
  ...guides.map((guide) => `/learn/${guide.slug}`),
  "/changelog",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" || path === "/changelog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/pricing" || path === "/product" ? 0.9 : 0.7,
  }));
}
