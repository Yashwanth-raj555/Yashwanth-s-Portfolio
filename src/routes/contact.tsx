import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/portfolio/PageShell";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Yashwanth" }, { name: "description", content: "Get in touch with Yashwanth." }] }),
  component: () => <PageShell><Contact /></PageShell>,
});
