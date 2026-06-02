import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Achievements } from "@/components/portfolio/Achievements";

export const Route = createFileRoute("/achievements")({
  head: () => ({ meta: [{ title: "Achievements — Yashwanth" }, { name: "description", content: "Hackathons, research and recognitions." }] }),
  component: () => <PageShell><Achievements /></PageShell>,
});
