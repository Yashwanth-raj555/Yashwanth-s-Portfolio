import { Reveal, SectionHeader } from "./Section";
import {
  Code2, Database, BarChart3, Table2, Brackets, Sigma, Sparkles, LineChart, LayoutDashboard, FileSpreadsheet, Workflow, Brain, Terminal, GitBranch, Monitor, TrendingUp, Shield, BookOpen, Activity,
} from "lucide-react";

const skills = [
  { name: "Python", icon: Code2, level: 88, hue: "245" },
  { name: "SQL", icon: Database, level: 90, hue: "200" },
  { name: "Power BI", icon: BarChart3, level: 92, hue: "60" },
  { name: "Tableau", icon: LineChart, level: 80, hue: "150" },
  { name: "Excel", icon: Table2, level: 85, hue: "150" },
  { name: "Pandas", icon: Brackets, level: 88, hue: "300" },
  { name: "NumPy", icon: Sigma, level: 82, hue: "245" },
  { name: "Data Cleaning", icon: Sparkles, level: 90, hue: "200" },
  { name: "EDA", icon: LayoutDashboard, level: 87, hue: "300" },
  { name: "Streamlit", icon: Monitor, level: 75, hue: "245" },
  { name: "Jupyter", icon: Terminal, level: 85, hue: "200" },
  { name: "Git", icon: GitBranch, level: 78, hue: "150" },
  { name: "Data Viz", icon: Workflow, level: 86, hue: "300" },
  { name: "Business Intel", icon: Brain, level: 82, hue: "245" },
  { name: "KPI Reporting", icon: FileSpreadsheet, level: 88, hue: "200" },
  { name: "GenAI Analytics", icon: Sparkles, level: 76, hue: "300" },
  { name: "Statistical Analysis", icon: TrendingUp, level: 80, hue: "60" },
  { name: "Risk Profiling", icon: Shield, level: 78, hue: "150" },
  { name: "Data Storytelling", icon: BookOpen, level: 84, hue: "245" },
  { name: "Predictive Analytics", icon: Activity, level: 74, hue: "200" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Toolkit"
        title={<>Skills that ship <span className="text-gradient">insights</span></>}
        description="A modern analytics stack — from raw extraction in SQL to executive-ready dashboards in Power BI."
      />
      <div className="mt-16 mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.04}>
            <div className="group glass rounded-2xl p-5 relative overflow-hidden hover:bg-white/[0.06] transition-all hover:-translate-y-1 border-gradient">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{ background: `radial-gradient(120px circle at var(--x,50%) var(--y,50%), oklch(0.72 0.18 ${s.hue} / 0.25), transparent 60%)` }}
              />
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-xl glass-strong flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <h3 className="mt-4 font-semibold">{s.name}</h3>
              <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[image:var(--gradient-primary)] transition-all duration-1000 group-hover:brightness-125"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
