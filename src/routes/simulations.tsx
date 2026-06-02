import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Certifications } from "@/components/portfolio/Certifications";

export const Route = createFileRoute("/simulations")({
  head: () => ({ meta: [{ title: "Job Simulations — Yashwanth" }, { name: "description", content: "Forage job simulations completed by Yashwanth." }] }),
  component: () => <PageShell><Certifications /></PageShell>,
});
