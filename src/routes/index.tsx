import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { FeaturedProjects } from "@/components/portfolio/FeaturedProjects";
import { Footer } from "@/components/portfolio/Footer";
import { BackToTop } from "@/components/portfolio/BackToTop";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Yashwanth's Portfolio — Data Analyst" },
      { name: "description", content: "Entry-level Data Analyst portfolio: Python, SQL, Power BI, Pandas, EDA and executive dashboards. Real projects, real insights." },
      { property: "og:title", content: "Yashwanth's Portfolio — Data Analyst" },
      { property: "og:description", content: "Entry-level Data Analyst portfolio with interactive dashboards and case studies." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0b1020" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
}));

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <Footer />
      <BackToTop />
    </main>
  );
}
