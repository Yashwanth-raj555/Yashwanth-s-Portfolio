import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Truck, Users, Shield, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const featured = [
  {
    id: "supply",
    icon: Truck,
    title: "Supply Chain Intelligence Analytics",
    category: "Operations",
    desc: "Cleaned 180,519 raw logistics records, surfaced $36.78M revenue and 57.28% delay rate across regions.",
    tools: ["Python", "SQL Server", "Power BI"],
    hue: "245",
  },
  {
    id: "customer",
    icon: Users,
    title: "Customer Behaviour Analysis",
    category: "Marketing",
    desc: "Extracted segmentation insights from retail transactions across payment, discount and seasonal signals.",
    tools: ["Python", "Pandas", "Power BI"],
    hue: "195",
  },
  {
    id: "cyber",
    icon: Shield,
    title: "AI-Powered Cybercrime Intelligence",
    category: "Public Safety",
    desc: "Mapped 1,200 cybercrime incidents across Indian cities with a Streamlit AI natural-language assistant.",
    tools: ["Python", "SQL Server", "Streamlit"],
    hue: "300",
  },
];

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="relative py-20 px-6">
      <SectionHeader
        eyebrow="Featured Work"
        title={<>Projects that <span className="text-gradient">speak</span></>}
        description="A selection of real-world analytics projects — click to explore full case studies."
      />

      <div className="mt-12 mx-auto max-w-6xl grid md:grid-cols-3 gap-5">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative glass-strong border-gradient rounded-3xl p-6 overflow-hidden h-full flex flex-col"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-aurora blur-2xl pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center glow"
                  style={{ background: `oklch(0.72 0.18 ${p.hue})` }}
                >
                  <p.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground glass rounded-full px-2 py-1">
                  {p.category}
                </span>
              </div>

              <h3 className="relative mt-4 font-semibold leading-snug group-hover:text-gradient transition">
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {p.desc}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span key={t} className="text-[10px] glass rounded-full px-2 py-1 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 glass rounded-xl px-6 py-3 text-sm font-medium hover:bg-white/10 transition hover:text-primary"
        >
          View all projects
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
