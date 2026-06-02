import { Activity, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/Yashwanth-raj555", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/yashwanth-raj-miryala-b62004413/", label: "LinkedIn" },
  { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=yashwanthmiryala5@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm">
          <Activity className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">© {new Date().getFullYear()} Yashwanth's Portfolio — Built with insight.</span>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="glass p-2 rounded-lg hover:bg-white/10 transition hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
