import type { Metadata } from "next";
import { ProductLayout, productMetadata } from "@/components/ProductLayout";
import { productPages } from "@/lib/site";

const page = productPages[0];

export const metadata: Metadata = productMetadata(
  "Projects",
  "MyTaskly projects include kanban boards, lists, calendars, timelines, labels, assignees, subtasks, comments, and project members.",
  "/projects",
);

export default function ProjectsPage() {
  return (
    <ProductLayout
      kicker={page.kicker}
      title={page.title}
      lede="MyTaskly projects are how a software house tracks delivery. Each project has its own members, sections, and views, while assignees come from the company directory."
      points={page.points}
      path="/projects"
    />
  );
}
