import { Reveal, SectionHeader } from "./Section";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";

const revenue = Array.from({ length: 12 }, (_, i) => ({
  m: ["J","F","M","A","M","J","J","A","S","O","N","D"][i],
  rev: 30 + Math.round(Math.sin(i / 1.4) * 14 + i * 3.5 + Math.random() * 6),
  cust: 20 + Math.round(Math.cos(i / 1.6) * 10 + i * 2.5 + Math.random() * 4),
}));
const channels = [
  { name: "Organic", v: 38 },
  { name: "Paid", v: 27 },
  { name: "Referral", v: 18 },
  { name: "Direct", v: 17 },
];
const pieColors = ["oklch(0.72 0.18 245)", "oklch(0.78 0.18 195)", "oklch(0.72 0.2 300)", "oklch(0.82 0.16 65)"];

const kpis = [
  { icon: DollarSign, label: "Revenue", value: "$2.18M", delta: "+12.4%", color: "245" },
  { icon: Users, label: "Customers", value: "48,210", delta: "+8.1%", color: "300" },
  { icon: Activity, label: "Sessions", value: "1.24M", delta: "+24.7%", color: "200" },
  { icon: TrendingUp, label: "Conversion", value: "4.86%", delta: "+1.2%", color: "150" },
];

export function Analytics() {
  return (
    <section id="analytics" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Live Analytics"
        title={<>A dashboard, in <span className="text-gradient">motion</span></>}
        description="A sample of the kind of executive views I build — interactive, opinionated and decision-ready."
      />

      <div className="mt-16 mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((k, i) => (
            <Reveal key={k.label} delay={i * 0.05}>
              <div className="glass-strong rounded-2xl p-5 border-gradient relative overflow-hidden">
                <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full blur-2xl opacity-40"
                  style={{ background: `oklch(0.72 0.18 ${k.color})` }} />
                <div className="relative flex items-center justify-between">
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center">
                    <k.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-xs text-emerald-300 bg-emerald-400/10 px-2 py-0.5 rounded-full">{k.delta}</span>
                </div>
                <div className="relative mt-4 text-2xl font-semibold">{k.value}</div>
                <div className="relative text-xs text-muted-foreground">{k.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-4">
          <Reveal>
            <div className="glass-strong rounded-3xl p-5 lg:col-span-2 border-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Revenue vs Customers</div>
                  <div className="text-lg font-semibold">12-month trend</div>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Revenue</span>
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" /> Customers</span>
                </div>
              </div>
              <div className="h-72 mt-4">
                <ResponsiveContainer>
                  <AreaChart data={revenue}>
                    <defs>
                      <linearGradient id="a1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="oklch(0.72 0.18 245)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="a2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.72 0.2 300)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="oklch(0.72 0.2 300)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                    <XAxis dataKey="m" tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.045 265)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                    <Area type="monotone" dataKey="rev" stroke="oklch(0.85 0.16 200)" strokeWidth={2} fill="url(#a1)" />
                    <Area type="monotone" dataKey="cust" stroke="oklch(0.72 0.2 300)" strokeWidth={2} fill="url(#a2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-5 border-gradient h-full">
              <div className="text-xs text-muted-foreground">Acquisition</div>
              <div className="text-lg font-semibold">Channel mix</div>
              <div className="h-56 mt-2">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie data={channels} dataKey="v" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={3}>
                      {channels.map((_, i) => <Cell key={i} fill={pieColors[i]} stroke="transparent" />)}
                    </Pie>
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.045 265)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <ul className="space-y-2 mt-2">
                {channels.map((c, i) => (
                  <li key={c.name} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: pieColors[i] }} />
                      {c.name}
                    </span>
                    <span className="text-muted-foreground">{c.v}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-strong rounded-3xl p-5 lg:col-span-3 border-gradient">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-muted-foreground">Weekly sessions</div>
                  <div className="text-lg font-semibold">Last 12 weeks</div>
                </div>
              </div>
              <div className="h-56 mt-3">
                <ResponsiveContainer>
                  <BarChart data={revenue}>
                    <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                    <XAxis dataKey="m" tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "oklch(0.7 0.03 255)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "oklch(0.19 0.045 265)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12 }} />
                    <Bar dataKey="rev" fill="oklch(0.72 0.18 245)" radius={[6,6,0,0]} />
                    <Bar dataKey="cust" fill="oklch(0.72 0.2 300)" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
