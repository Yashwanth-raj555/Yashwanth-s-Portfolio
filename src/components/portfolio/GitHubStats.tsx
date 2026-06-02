import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";
import { Github, GitFork, Star, Users, BookOpen } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

// TODO: Replace with your real GitHub username
const GITHUB_USERNAME = "Yashwanth-raj555";

type GhUser = {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
};

type GhRepo = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

async function fetchGitHub(username: string) {
  const [userRes, reposRes] = await Promise.all([
    fetch(`https://api.github.com/users/${username}`),
    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
  ]);
  if (!userRes.ok || !reposRes.ok) throw new Error("github_unavailable");
  const user: GhUser = await userRes.json();
  const repos: GhRepo[] = await reposRes.json();
  const owned = repos.filter((r) => !r.fork);
  const stars = owned.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  const forks = owned.reduce((s, r) => s + (r.forks_count || 0), 0);
  const langMap = new Map<string, number>();
  owned.forEach((r) => {
    if (r.language) langMap.set(r.language, (langMap.get(r.language) || 0) + 1);
  });
  const languages = Array.from(langMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
  const totalLang = languages.reduce((s, l) => s + l.count, 0) || 1;
  return { user, stars, forks, languages, totalLang };
}

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString()}</span>;
}

const langColors = [
  "oklch(0.72 0.18 245)",
  "oklch(0.78 0.18 195)",
  "oklch(0.72 0.2 300)",
  "oklch(0.85 0.16 140)",
  "oklch(0.85 0.16 60)",
];

export function GitHubStats() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["github", GITHUB_USERNAME],
    queryFn: () => fetchGitHub(GITHUB_USERNAME),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <section id="github" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="GitHub"
        title={<>Live <span className="text-gradient">activity</span></>}
        description="Real-time stats pulled straight from my public repositories."
      />

      <div className="mt-12 mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong border-gradient rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute -inset-px opacity-60 bg-aurora blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl bg-[image:var(--gradient-primary)] opacity-60" />
                <div className="relative h-16 w-16 rounded-full bg-[image:var(--gradient-primary)] flex items-center justify-center glow">
                  <Github className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub profile</div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xl font-semibold hover:text-gradient transition"
                >
                  @{GITHUB_USERNAME}
                </a>
                {data?.user.bio && <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{data.user.bio}</p>}
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Repos", value: data?.user.public_repos ?? 0, icon: BookOpen },
                { label: "Stars", value: data?.stars ?? 0, icon: Star },
                { label: "Forks", value: data?.forks ?? 0, icon: GitFork },
                { label: "Followers", value: data?.user.followers ?? 0, icon: Users },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <s.icon className="h-4 w-4 text-primary" />
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</span>
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-gradient-primary">
                    {isLoading ? "—" : <CountUp value={s.value} />}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Top languages</div>
              {error && (
                <div className="text-sm text-muted-foreground">
                  Couldn't reach GitHub right now. Try again in a minute.
                </div>
              )}
              {!error && (
                <div className="space-y-3">
                  {(data?.languages.length ? data.languages : [{ name: "Loading…", count: 0 }]).map((l, i) => {
                    const pct = data ? Math.round((l.count / data.totalLang) * 100) : 0;
                    return (
                      <div key={l.name + i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span>{l.name}</span>
                          <span className="text-muted-foreground">{pct}%</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden bg-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1.1, delay: i * 0.08, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${langColors[i % langColors.length]}, oklch(0.85 0.16 200))`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
