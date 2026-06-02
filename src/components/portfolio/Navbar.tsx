import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Activity, Menu, X } from "lucide-react";

const links: { to: string; label: string; exact?: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/skills", label: "Skills" },
  { to: "/simulations", label: "Simulations" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 inset-x-0 z-50 px-4 pt-4"
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong glow" : "glass"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-primary/60 rounded-full" />
            <Activity className="relative h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold tracking-tight">
              <span className="text-gradient">Yashwanth</span>'s Portfolio
            </span>
            <span className="text-[10px] font-medium tracking-widest uppercase text-primary/70">
              Data Analyst
            </span>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to as any}
                activeOptions={{ exact: l.exact ?? false }}
                activeProps={{ className: "px-3 py-2 rounded-lg text-foreground bg-white/10" }}
                inactiveProps={{ className: "px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground bg-[image:var(--gradient-primary)] hover:opacity-90 transition glow"
          >
            Hire me
          </Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mx-auto max-w-6xl mt-2 glass-strong rounded-2xl p-2"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to as any}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
