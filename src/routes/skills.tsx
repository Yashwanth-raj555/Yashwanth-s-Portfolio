import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [{ title: "Skills — Yashwanth" }, { name: "description", content: "Data analytics skills: Python, SQL, Power BI, Pandas, EDA." }] }),
  component: () => <PageShell><Skills /></PageShell>,
});
