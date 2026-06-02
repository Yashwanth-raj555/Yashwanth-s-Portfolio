import { Reveal, SectionHeader } from "./Section";
import { Trophy, Rocket, BookOpen, Lightbulb } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "7th Position — NASA Space Apps Challenge",
    org: "NASA Space Apps Hackathon",
    text: "Secured 7th position out of 50+ teams in the global NASA Space Apps Challenge hackathon.",
    accent: "from-[oklch(0.78_0.18_60)] to-[oklch(0.72_0.2_30)]",
  },
  {
    icon: Rocket,
    title: "Deco Global Hackathon — Participant",
    org: "Deco Global",
    text: "Participated in the Deco Global Hackathon Challenge, collaborating on a data-driven solution under tight deadlines.",
    accent: "from-[oklch(0.72_0.2_300)] to-[oklch(0.72_0.18_245)]",
  },
  {
    icon: BookOpen,
    title: "Published Research — ICWSCS Global Conference",
    org: "ICWSCS",
    text: "Attended the ICWSCS Global Conference and published a research paper titled \"Data Protection and Privacy\".",
    accent: "from-[oklch(0.85_0.16_140)] to-[oklch(0.78_0.18_195)]",
  },
  {
    icon: Lightbulb,
    title: "Finalist — Ideathon 2021",
    org: "College Management",
    text: "Recognized as a Finalist in the Ideathon 2021 conducted by the College Management for an innovative product idea.",
    accent: "from-[oklch(0.8_0.18_85)] to-[oklch(0.78_0.18_30)]",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Achievements"
        title={<>Moments that <span className="text-gradient">shaped me</span></>}
        description="Hackathons, conferences, and recognitions along the journey."
      />

      <div className="mt-12 mx-auto max-w-5xl grid sm:grid-cols-2 gap-6">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="group relative glass-strong border-gradient rounded-3xl p-6 h-full overflow-hidden hover:-translate-y-1 transition">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-aurora blur-2xl pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className={`shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br ${a.accent} flex items-center justify-center glow`}>
                  <a.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-snug group-hover:text-gradient transition">
                    {a.title}
                  </h3>
                  <div className="mt-1 text-xs text-muted-foreground">{a.org}</div>
                  <p className="mt-3 text-sm text-foreground/80">{a.text}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
