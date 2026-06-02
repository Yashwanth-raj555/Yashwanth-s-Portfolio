import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, TrendingUp, Database, BarChart3 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Particles } from "./Particles";
import { useEffect, useState } from "react";
import {
  Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip,
} from "recharts";

const titles = ["Business Intelligence", "Actionable Insights", "Smart Dashboards", "Data Stories"];

function useTypewriter(words: string[], speed = 80) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[index % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDeleting(false); setIndex((i) => i + 1); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed]);
  return text;
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{v.toLocaleString()}{suffix}</span>;
}

const areaData = Array.from({ length: 12 }, (_, i) => ({
  m: i,
  v: 40 + Math.round(Math.sin(i / 1.6) * 18 + i * 4 + Math.random() * 6),
}));
const barData = Array.from({ length: 7 }, (_, i) => ({
  d: ["M", "T", "W", "T", "F", "S", "S"][i],
  v: 30 + Math.round(Math.random() * 70),
}));

export function Hero() {
  const typed = useTypewriter(titles);
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0">
        <Particles density={70} />
      </div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-aurora blur-3xl opacity-30 animate-gradient pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-12 gap-10 items-center">
        {/* LEFT — Text */}
        <div className="lg:col-span-7">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground hover:text-primary transition"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for entry-level Data Analyst roles
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Transforming raw data into{" "}
            <span className="text-gradient">{typed}</span>
            <span className="inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-primary animate-pulse-glow" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl"
          >
            Entry-Level Data Analyst specializing in Python, SQL, Power BI, Pandas, EDA, and turning complex datasets into clear, actionable business insights — with 5 real-world projects and 2 industry job simulations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/projects" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground bg-[image:var(--gradient-primary)] glow hover:scale-[1.02] transition">
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 glass rounded-xl px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 glass rounded-xl px-5 py-3 text-sm font-medium hover:bg-white/10 transition">
              <Download className="h-4 w-4" /> Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              { label: "Projects", value: 5, suffix: "" },
              { label: "Job Simulations", value: 2, suffix: "" },
              { label: "Rows analyzed", value: 200, suffix: "K+" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4">
                <div className="text-2xl font-semibold text-gradient-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Floating dashboard mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: -10 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-6 bg-aurora blur-3xl opacity-30 animate-gradient rounded-full" />
          <div className="relative glass-strong rounded-3xl p-5 border-gradient animate-float">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Supply Chain · Revenue</div>
                <div className="text-2xl font-semibold">$36.78M</div>
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-300 bg-emerald-400/10 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3" /> 57.28% delays
              </div>
            </div>
            <div className="h-32 mt-3">
              <ResponsiveContainer>
                <AreaChart data={areaData}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0.7} />
                      <stop offset="100%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="v" stroke="oklch(0.85 0.16 200)" strokeWidth={2} fill="url(#g1)" />
                  <Tooltip contentStyle={{ background: "oklch(0.19 0.045 265)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="glass rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Database className="h-3.5 w-3.5 text-primary" /> Rows cleaned</div>
                <div className="text-xl font-semibold mt-1">180,511</div>
                <div className="h-12 mt-1">
                  <ResponsiveContainer>
                    <BarChart data={barData}>
                      <Bar dataKey="v" fill="oklch(0.72 0.2 300)" radius={[3, 3, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><BarChart3 className="h-3.5 w-3.5 text-primary" /> Sachin Centuries</div>
                <div className="text-xl font-semibold mt-1">100</div>
                <div className="h-12 mt-2 flex items-end gap-1">
                  {[62, 38, 74, 45, 88, 30, 56, 70, 42, 80, 50, 66, 36, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-[image:var(--gradient-primary)]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-3 hidden sm:block animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-xs text-muted-foreground">Cybercrime incidents</div>
            <div className="text-lg font-semibold text-gradient-primary">1,200</div>
          </div>
          <div className="absolute -top-6 -right-4 glass rounded-2xl p-3 hidden sm:block animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-xs text-muted-foreground">Flipkart products</div>
            <div className="text-lg font-semibold">20,001</div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-24 border-y border-white/5 py-5 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12">
              {["Python", "SQL", "Power BI", "Tableau", "Excel", "Pandas", "NumPy", "Streamlit", "Jupyter", "Git", "EDA", "Data Cleaning"].map((t) => (
                <span key={t + k} className="opacity-70 hover:opacity-100 transition">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
