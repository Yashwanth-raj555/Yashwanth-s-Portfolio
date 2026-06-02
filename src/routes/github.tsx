import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { GitHubStats } from "@/components/portfolio/GitHubStats";

export const Route = createFileRoute("/github")({
  head: () => ({ meta: [{ title: "GitHub — Yashwanth" }, { name: "description", content: "Live GitHub stats and contributions." }] }),
  component: () => <PageShell><GitHubStats /></PageShell>,
});
