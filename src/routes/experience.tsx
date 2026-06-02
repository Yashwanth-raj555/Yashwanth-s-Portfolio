import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Experience } from "@/components/portfolio/Experience";

export const Route = createFileRoute("/experience")({
  head: () => ({ meta: [{ title: "Experience — Yashwanth" }, { name: "description", content: "Professional experience and journey." }] }),
  component: () => <PageShell><Experience /></PageShell>,
});
