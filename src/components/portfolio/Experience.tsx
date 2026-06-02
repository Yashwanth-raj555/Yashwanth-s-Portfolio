import { Reveal, SectionHeader } from "./Section";
import { Briefcase, Trophy, BookOpen, Rocket, BarChart3, FolderKanban, Database, Award } from "lucide-react";

const exp = [
  { icon: Briefcase, title: "Data Analytics Job Simulation", org: "Deloitte Australia · Forage", time: "May 2026", text: "Completed a job simulation involving data analysis and forensic technology. Created a Tableau dashboard to visualize findings and used Excel to classify data and draw actionable business conclusions." },
  { icon: Briefcase, title: "GenAI Powered Data Analytics Simulation", org: "Tata iQ · Forage", time: "May 2026", text: "Conducted EDA using GenAI tools to assess data quality and risk indicators. Proposed a no-code predictive modeling framework and designed an AI-driven collections strategy with agentic AI and ethical AI principles." },
  { icon: Rocket, title: "7th Position · NASA Space Apps Challenge", org: "NASA Space Apps Hackathon", time: "2024", text: "Secured 7th position out of 50+ teams in the global NASA Space Apps Challenge hackathon." },
  { icon: BookOpen, title: "Published Research · ICWSCS Conference", org: "International Conference", time: "2024", text: "Published a research paper titled 'Data Protection and Privacy' at the International Conference on Women Safety in Cyber Security." },
];

const achievements = [
  { icon: FolderKanban, label: "Projects", value: "5" },
  { icon: BarChart3, label: "Simulations", value: "2" },
  { icon: Database, label: "Rows analyzed", value: "200K+" },
  { icon: Award, label: "Hackathons", value: "3" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Experience"
        title={<>Built, shipped, <span className="text-gradient">recognized</span></>}
      />
      <div className="mt-16 mx-auto max-w-5xl">
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
          <ul className="space-y-6">
            {exp.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <li className="relative pl-16">
                  <div className="absolute left-0 top-1 h-12 w-12 rounded-2xl glass-strong flex items-center justify-center glow">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="glass-strong rounded-2xl p-5 border-gradient">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-semibold">{t.title} <span className="text-muted-foreground font-normal">· {t.org}</span></h4>
                      <span className="text-xs text-muted-foreground">{t.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.05}>
              <div className="glass-strong rounded-2xl p-5 text-center border-gradient hover:-translate-y-1 transition">
                <div className="h-12 w-12 mx-auto rounded-2xl bg-[image:var(--gradient-primary)] flex items-center justify-center glow">
                  <a.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-3 text-3xl font-semibold text-gradient-primary">{a.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
