import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Sparkles, ExternalLink, ArrowUpRight, Download, X, FileText } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

type Simulation = {
  title: string;
  company: string;
  role: string;
  skills: string[];
  icon: any;
  accent: string;
  url: string;
  preview: string;
};

const simulations: Simulation[] = [
  {
    title: "Data Analytics Job Simulation",
    company: "Deloitte Australia · Forage",
    role: "Data Analyst · May 2026",
    skills: ["Data Analysis", "Forensic Tech", "Tableau", "Excel"],
    icon: Briefcase,
    accent: "from-[oklch(0.85_0.16_140)] to-[oklch(0.78_0.18_195)]",
    url: "/certificates/deloitte-data-analytics.pdf",
    preview: "/previews/deloitte-data-analytics-1.jpg",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    company: "Tata iQ · Forage",
    role: "Data Analyst · May 2026",
    skills: ["EDA", "Risk Profiling", "GenAI", "Agentic AI"],
    icon: Sparkles,
    accent: "from-[oklch(0.72_0.2_300)] to-[oklch(0.72_0.18_245)]",
    url: "/certificates/tata-genai-data-analytics.pdf",
    preview: "/previews/tata-genai-data-analytics-1.jpg",
  },
];

export function Certifications() {
  const [active, setActive] = useState<Simulation | null>(null);

  return (
    <section id="simulations" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Job Simulations"
        title={<>Real-world <span className="text-gradient">experience</span></>}
        description="Hands-on job simulations from top companies — solving real business problems with data."
      />

      <div className="mt-12 mx-auto max-w-4xl grid sm:grid-cols-2 gap-6 justify-center">
        {simulations.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <motion.button
              type="button"
              onClick={() => setActive(s)}
              whileHover={{ y: -6 }}
              className="group block text-left w-full relative glass-strong border-gradient rounded-3xl p-6 overflow-hidden h-full"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-aurora blur-2xl pointer-events-none" />

              <div className="relative flex items-start justify-between">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${s.accent} flex items-center justify-center glow`}>
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary opacity-80 group-hover:scale-110 transition" />
              </div>

              <h3 className="relative mt-5 text-base font-semibold leading-snug group-hover:text-gradient transition">
                {s.title}
              </h3>
              <div className="relative mt-1.5 text-xs text-muted-foreground">{s.company}</div>
              <div className="relative mt-3 text-xs text-foreground/70 font-medium">{s.role}</div>

              <div className="relative mt-5 flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {s.skills.map((skill) => (
                    <span key={skill} className="text-[10px] uppercase tracking-wider glass rounded-full px-2 py-1 text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all">
                  View <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-xl p-4 flex items-center justify-center"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong border-gradient rounded-3xl w-full max-w-4xl h-[85vh] relative overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 gap-3">
                <div className="flex items-center gap-2 text-sm min-w-0">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{active.title}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Open
                  </a>
                  <a
                    href={active.url}
                    download
                    className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                  <button
                    onClick={() => setActive(null)}
                    className="glass p-2 rounded-full hover:bg-white/10"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto bg-neutral-900/40 p-4">
                <img
                  src={active.preview}
                  alt={active.title}
                  className="w-full h-auto rounded-xl shadow-2xl bg-white mx-auto max-w-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
