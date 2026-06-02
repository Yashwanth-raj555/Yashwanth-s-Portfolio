import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Resume } from "@/components/portfolio/Resume";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "Resume — Yashwanth" }, { name: "description", content: "Interactive resume and CV download." }] }),
  component: () => <PageShell><Resume /></PageShell>,
});
