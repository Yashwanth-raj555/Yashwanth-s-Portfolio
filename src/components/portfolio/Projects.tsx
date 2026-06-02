import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Truck, Users, Shield, ShoppingBag, BarChart3, Trophy } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";

type Project = {
  id: string;
  title: string;
  icon: any;
  category: string;
  problem: string;
  dataset: string;
  tools: string[];
  kpis: { label: string; value: string }[];
  insights: string[];
  // TODO: Replace `#` with real URLs
  links: { github?: string; live?: string; dashboard?: string; dashboardLabel?: string };
};

const projects: Project[] = [
  {
    id: "supply",
    title: "Supply Chain Intelligence Analytics Platform",
    icon: Truck,
    category: "Operations",
    problem: "Clean and analyze a large logistics dataset to surface delivery risk, profitability and regional performance.",
    dataset: "180,519 raw logistics records · 35 engineered columns",
    tools: ["Python", "Pandas", "SQL Server", "Power BI"],
    kpis: [
      { label: "Revenue tracked", value: "$36.78M" },
      { label: "Profit", value: "$3.97M" },
      { label: "Order delay rate", value: "57.28%" },
    ],
    insights: [
      "180,511 analysis-ready rows after cleaning 180,519 raw records",
      "118 products & multi-region performance surfaced in one dashboard",
      "57.28% delayed-order rate highlights logistics optimization opportunity",
    ],
    links: {
      github: "https://github.com/Yashwanth-raj555/Supply_Chain_Intelligence_Analytics",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZTMzMGVlMTYtMDBlNi00MGU4LWIxZjYtZDI0ZmMzODE2NDI4IiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9",
      dashboardLabel: "Power BI",
    },
  },
  {
    id: "customer",
    title: "Customer Behaviour Analysis",
    icon: Users,
    category: "Marketing",
    problem: "Clean retail transactions and extract behavioural insights to inform customer segmentation and marketing strategy.",
    dataset: "Retail transactions · multi-category purchase & payment data",
    tools: ["Python", "SQL Server", "Power BI", "Pandas"],
    kpis: [
      { label: "Categories cleaned", value: "100%" },
      { label: "Signals", value: "Purchase · Payment · Discount · Season" },
      { label: "Use case", value: "Segmentation" },
    ],
    insights: [
      "Resolved inconsistent categories and imputed missing values with business logic",
      "Behavioural patterns across payment methods and discount response",
      "Seasonal demand signals to inform marketing strategy",
    ],
    links: {
      github: "https://github.com/Yashwanth-raj555/Customer_Behaviour_Analysis_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDcyN2VjNmYtOGE5Mi00ZDYzLWFmY2UtZmIyN2YwNjQ2NzEwIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9",
      dashboardLabel: "Power BI",
    },
  },
  {
    id: "cyber",
    title: "AI-Powered Indian Cybercrime & Threat Intelligence Platform",
    icon: Shield,
    category: "Public Safety",
    problem: "Map Indian cybercrime patterns — attack types, city risk, sector impact and financial loss — across yearly trends.",
    dataset: "1,200 cybercrime incident records · multi-year",
    tools: ["Python", "SQL Server", "Power BI", "Streamlit"],
    kpis: [
      { label: "Incidents analyzed", value: "1,200" },
      { label: "Pipeline", value: "Py · SQL · BI" },
      { label: "AI assistant", value: "Streamlit" },
    ],
    insights: [
      "Attack-type, city-level risk and sector impact mapped from 1,200 incidents",
      "Streamlit AI assistant enables natural-language KPI querying",
      "End-to-end workflow: Python → SQL Server → Power BI",
    ],
    links: {
      github: "https://github.com/Yashwanth-raj555/AI-Powered-Indian-Cybercrime-Threat-Intelligence-Analytics-Platform",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNWQ0ZTc4NjItZWRkOC00YmU2LWI5ZTAtZDVlODFlZjllNTBiIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9",
      dashboardLabel: "Power BI",
    },
  },
  {
    id: "flipkart",
    title: "Flipkart Product Analytics Dashboard",
    icon: ShoppingBag,
    category: "E-commerce",
    problem: "Standardize Flipkart product data and decode pricing, discount and brand performance across categories.",
    dataset: "20,001 product records · 17 attributes",
    tools: ["Python", "SQL Server", "Power BI"],
    kpis: [
      { label: "Products", value: "20,001" },
      { label: "Attributes", value: "17" },
      { label: "Outlier flag", value: "Engineered" },
    ],
    insights: [
      "Engineered discount % and price-outlier features across 20K listings",
      "KPI cards + category trends + brand-level performance in one BI view",
      "Interactive filters for sales overview and premium products",
    ],
    links: {
      github: "https://github.com/Yashwanth-raj555/Flipkart_End_to_End_Analytics_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjVhMDlmMzctNDQyMy00ZWI1LTgxNTEtMWUwNWIyNGE2NWQwIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9",
      dashboardLabel: "Power BI",
    },
  },
  {
    id: "sachin",
    title: "Sachin Tendulkar Cricket Analytics Dashboard",
    icon: Trophy,
    category: "Sports",
    problem: "Analyze Sachin Tendulkar's career batting statistics across formats — trends, milestones and match-winning contributions.",
    dataset: "Sachin career stats · Test + ODI + IPL",
    tools: ["Python", "SQL Server", "Power BI"],
    kpis: [
      { label: "Matches", value: "664" },
      { label: "Runs", value: "34,357" },
      { label: "Centuries", value: "100" },
    ],
    insights: [
      "Career runs, centuries and strike rates broken down by format",
      "Milestone patterns and match-winning contribution analysis",
      "Interactive Power BI dashboard with format-wise drill-downs",
    ],
    links: {
      github: "https://github.com/Yashwanth-raj555/Sachin_Career_Analytics_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiYzZiNWY3MTctZjliYS00MmRiLTk3NDktYjQ1YWI0ODI4MTBhIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9",
      dashboardLabel: "Power BI",
    },
  },
];

const filters = ["All", "Operations", "Marketing", "Public Safety", "E-commerce", "Sports"];
const sample = Array.from({ length: 8 }, (_, i) => ({ x: i, y: 30 + Math.round(Math.sin(i) * 15 + i * 6 + Math.random() * 5) }));
const pie = [
  { name: "Web", value: 45 },
  { name: "Mobile", value: 35 },
  { name: "API", value: 20 },
];
const pieColors = ["oklch(0.72 0.18 245)", "oklch(0.78 0.18 195)", "oklch(0.72 0.2 300)"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Project | null>(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Projects"
        title={<>Selected <span className="text-gradient">work</span></>}
        description="Real datasets, real questions, real dashboards. Click any project to open the case study."
      />
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`text-xs px-4 py-2 rounded-full transition ${
              filter === f
                ? "bg-[image:var(--gradient-primary)] text-primary-foreground glow"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
        {visible.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}>
            <motion.button
              onClick={() => setOpen(p)}
              whileHover={{ y: -6 }}
              className="text-left w-full glass-strong border-gradient rounded-3xl p-6 group relative overflow-hidden"
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-aurora blur-2xl pointer-events-none" />
              <div className="relative flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] flex items-center justify-center glow">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground glass rounded-full px-2 py-1">{p.category}</span>
              </div>
              <h3 className="relative mt-5 text-xl font-semibold group-hover:text-gradient transition">{p.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground line-clamp-2">{p.problem}</p>

              <div className="relative mt-4 h-24">
                <ResponsiveContainer>
                  <AreaChart data={sample}>
                    <defs>
                      <linearGradient id={`pg-${p.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="y" stroke="oklch(0.85 0.16 200)" strokeWidth={2} fill={`url(#pg-${p.id})`} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.tools.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] glass rounded-full px-2 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-xl p-4 flex items-center justify-center"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong border-gradient rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative"
            >
              <button onClick={() => setOpen(null)} className="absolute top-4 right-4 glass p-2 rounded-full hover:bg-white/10">
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-[image:var(--gradient-primary)] flex items-center justify-center">
                  <open.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{open.category}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold">{open.title}</h3>
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{open.problem}</p>

              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {open.kpis.map((k) => (
                  <div key={k.label} className="glass rounded-xl p-3">
                    <div className="text-xs text-muted-foreground">{k.label}</div>
                    <div className="text-lg font-semibold text-gradient-primary">{k.value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-4 h-48">
                  <div className="text-xs text-muted-foreground mb-2">Trend</div>
                  <ResponsiveContainer>
                    <LineChart data={sample}>
                      <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                      <XAxis dataKey="x" tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 10 }} />
                      <YAxis tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 10 }} />
                      <Tooltip contentStyle={{ background: "oklch(0.19 0.045 265)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                      <Line type="monotone" dataKey="y" stroke="oklch(0.85 0.16 200)" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="glass rounded-2xl p-4 h-48">
                  <div className="text-xs text-muted-foreground mb-2">Mix</div>
                  <ResponsiveContainer>
                    <PieChart>
                      <Pie data={pie} dataKey="value" innerRadius={35} outerRadius={60} paddingAngle={2}>
                        {pie.map((_, i) => <Cell key={i} fill={pieColors[i]} stroke="transparent" />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-xs text-muted-foreground">Dataset</div>
                <div className="text-sm">{open.dataset}</div>
              </div>

              <div className="mt-4">
                <div className="text-xs text-muted-foreground mb-2">Key insights</div>
                <ul className="space-y-2">
                  {open.insights.map((i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {open.tools.map((t) => (
                  <span key={t} className="text-xs glass rounded-full px-3 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {open.links.live && (
                  <a href={open.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-[image:var(--gradient-primary)] text-primary-foreground glow hover:opacity-90 transition">
                    <ExternalLink className="h-4 w-4" /> Live preview
                  </a>
                )}
                {open.links.github && (
                  <a href={open.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {open.links.dashboard && (
                  <a href={open.links.dashboard} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition">
                    <BarChart3 className="h-4 w-4" /> {open.links.dashboardLabel ?? "Dashboard"}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
