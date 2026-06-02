import { GraduationCap, Brain, Target, Sparkles, Github, Linkedin, Mail, MapPin, Briefcase, FileText, Globe, Code2, Database, BarChart3, Table2, LineChart, LayoutDashboard, Sigma } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";
import profileImg from "@/assets/profile.jpeg";

const timeline = [
  { icon: GraduationCap, title: "B.Tech · Computer Science Engineering", time: "2021 – 2025", text: "Graduated from Pallavi Engineering College with a CGPA of 6.62. Strong fundamentals in data structures, statistics and databases." },
  { icon: Brain, title: "Self-taught Data Analytics", time: "2026", text: "Mastered Python, Pandas, NumPy, SQL and Power BI — applied across 5 real-world analytics projects spanning supply chain, e-commerce, cybercrime and sports." },
  { icon: Target, title: "Virtual Job Simulations · Forage", time: "Deloitte & Tata iQ", text: "Completed simulations with Deloitte Australia and Tata iQ, gaining hands-on exposure to Tableau, Excel, GenAI workflows and agentic AI-driven analytics." },
  { icon: Sparkles, title: "Open to Opportunities", time: "2026", text: "NASA Space Apps Challenge finalist, published researcher, and actively seeking entry-level Data Analyst roles." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="About"
        title={<>The story behind the <span className="text-gradient">data</span></>}
        description="Curious analyst with a problem-solver's mindset. I love digging into messy CSVs, asking the right questions and shipping dashboards that drive decisions."
      />
      
      <div className="mt-16 mx-auto max-w-6xl space-y-12">
        {/* Profile Card Layout matched to screenshot */}
        <Reveal>
          <div className="glass-strong border-gradient rounded-3xl p-8 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.12)]">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-aurora blur-3xl opacity-40" />
            <div className="relative grid md:grid-cols-[240px_1fr] gap-8 items-center">
              
              {/* Left Column: Image, Status & Stats */}
              <div className="flex flex-col items-center md:items-stretch w-full shrink-0">
                <div className="relative h-44 w-44 md:h-52 md:w-52 group mx-auto">
                  {/* Rotating gradient ring */}
                  <div
                    className="absolute -inset-1.5 rounded-full opacity-80 blur-md animate-spin"
                    style={{
                      background: "conic-gradient(from 0deg, oklch(0.72 0.18 245), oklch(0.78 0.18 195), oklch(0.72 0.2 300), oklch(0.72 0.18 245))",
                      animationDuration: "6s",
                    }}
                  />
                  <div
                    className="absolute -inset-0.5 rounded-full animate-spin"
                    style={{
                      background: "conic-gradient(from 180deg, oklch(0.72 0.18 245), oklch(0.78 0.18 195), oklch(0.72 0.2 300), oklch(0.72 0.18 245))",
                      animationDuration: "4s",
                    }}
                  />
                  {/* Pulse halo */}
                  <div className="absolute -inset-4 rounded-full bg-primary/30 blur-2xl animate-pulse-glow" />
                  {/* Floating image */}
                  <div className="relative h-full w-full rounded-full overflow-hidden border border-white/10 glow animate-float bg-background">
                    <img
                      src={profileImg}
                      alt="Profile portrait"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 mix-blend-overlay" />
                  </div>
                </div>

                {/* Status indicator pill */}
                <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-400 font-medium w-fit mx-auto">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open to opportunities</span>
                </div>

              </div>

              {/* Right Column: Bio Details, Top Skills & Socials */}
              <div className="flex flex-col h-full text-center md:text-left">
                {/* Custom tags */}
                <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-bold tracking-widest text-cyan-400/90 uppercase">
                  <span>Data</span>
                  <span className="text-white/30">•</span>
                  <span>Analytics</span>
                  <span className="text-white/30">•</span>
                  <span>Impact</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-2">
                  Hi, I'm <span className="text-gradient-primary">Yashwanth Raj Miryala</span>
                </h3>
                
                <div className="text-xs font-semibold tracking-wider text-muted-foreground/80 mt-1 uppercase">
                  Data Analyst <span className="text-white/30">|</span> Turning Data into Decisions
                </div>

                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  Passionate Data Analyst with a B.Tech background specializing in transforming complex datasets into actionable business insights. Proficient in <span className="text-violet-400 font-semibold">Python</span>, <span className="text-violet-400 font-semibold">SQL</span>, <span className="text-violet-400 font-semibold">Power BI</span> and <span className="text-violet-400 font-semibold">Excel</span> with hands-on experience building end-to-end analytics pipelines. From <span className="text-violet-400 font-semibold">180K+ row Superstore</span> data analysis to ML-powered churn prediction, I create data-driven solutions that empower organizations to solve real-world problems and drive growth.
                </p>

                {/* Upgraded Info Cards */}
                <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-left">
                  <div className="glass rounded-xl p-3 border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Location</span>
                    </div>
                    <div className="font-semibold text-white mt-1.5 text-xs">Hyderabad, India</div>
                  </div>

                  <div className="glass rounded-xl p-3 border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                      <span>Status</span>
                    </div>
                    <div className="font-semibold text-emerald-400 mt-1.5 text-xs">Open to opportunities</div>
                  </div>

                  <div className="glass rounded-xl p-3 border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      <FileText className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Tools</span>
                    </div>
                    <div className="font-semibold text-white mt-1.5 text-xs leading-normal">Power BI · EDA · SQL · Excel</div>
                  </div>

                  <div className="glass rounded-xl p-3 border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                      <Globe className="h-3.5 w-3.5 text-violet-400" />
                      <span>Languages</span>
                    </div>
                    <div className="font-semibold text-white mt-1.5 text-xs">EN · HI · TE</div>
                  </div>
                </div>

                {/* Top Skills Badges */}
                <div className="mt-6 text-left">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mb-2">Top Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Python", icon: Code2 },
                      { name: "SQL", icon: Database },
                      { name: "Power BI", icon: BarChart3 },
                      { name: "Excel", icon: Table2 },
                      { name: "EDA", icon: LineChart },
                      { name: "Data Visualization", icon: LayoutDashboard },
                      { name: "Statistics", icon: Sigma },
                    ].map((skill) => (
                      <div key={skill.name} className="flex items-center gap-1.5 glass rounded-xl px-3 py-1.5 text-xs border border-white/5 text-white/90">
                        <skill.icon className="h-3.5 w-3.5 text-cyan-400" />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Separator & Contacts row inside the Card (Icons only) */}
                <div className="border-t border-white/10 pt-5 mt-6 flex items-center gap-3 justify-center md:justify-start">
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=yashwanthmiryala5@gmail.com" 
                    target="_blank"
                    rel="noreferrer"
                    className="glass p-2.5 rounded-xl text-cyan-400 hover:text-white hover:bg-white/10 transition flex items-center justify-center glow"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/yashwanth-raj-miryala-b62004413/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass p-2.5 rounded-xl text-cyan-400 hover:text-white hover:bg-white/10 transition flex items-center justify-center glow"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/Yashwanth-raj555" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass p-2.5 rounded-xl text-cyan-400 hover:text-white hover:bg-white/10 transition flex items-center justify-center glow"
                    title="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        </Reveal>

        {/* Journey Timeline */}
        <div className="relative pt-6">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
          <ul className="space-y-6">
            {timeline.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.07}>
                <li className="relative pl-16">
                  <div className="absolute left-0 top-1 h-12 w-12 rounded-2xl glass-strong flex items-center justify-center glow">
                    <t.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{t.title}</h4>
                      <span className="text-xs text-muted-foreground">{t.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
