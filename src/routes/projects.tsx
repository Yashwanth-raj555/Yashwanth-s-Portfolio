import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Yashwanth" }, { name: "description", content: "Selected data analytics case studies and dashboards." }] }),
  component: () => <PageShell><Projects /></PageShell>,
});
