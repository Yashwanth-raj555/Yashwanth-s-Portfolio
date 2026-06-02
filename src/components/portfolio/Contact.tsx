import { useState } from "react";
import { Reveal, SectionHeader } from "./Section";
import { Github, Linkedin, Mail, Send, Download, MapPin } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setIsSubmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);

      const form = document.getElementById("portfolio-contact-form") as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's build something <span className="text-gradient">data-driven</span></>}
        description="Open to entry-level Data Analyst roles, freelance dashboards and collaborations."
      />
      <div className="mt-16 mx-auto max-w-5xl grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 border-gradient h-full flex flex-col">
            <div>
              <h3 className="text-xl font-semibold">Reach out</h3>
              <p className="text-sm text-muted-foreground mt-1">I usually reply within 24 hours.</p>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yashwanthmiryala5@gmail.com" target="_blank" rel="noreferrer" className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/[0.06] transition">
                <Mail className="h-4 w-4 text-primary" /> yashwanthmiryala5@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/yashwanth-raj-miryala-b62004413/" target="_blank" rel="noreferrer" className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/[0.06] transition">
                <Linkedin className="h-4 w-4 text-primary" /> linkedin.com/in/yashwanth-raj-miryala
              </a>
              <a href="https://github.com/Yashwanth-raj555" target="_blank" rel="noreferrer" className="glass rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/[0.06] transition">
                <Github className="h-4 w-4 text-primary" /> github.com/Yashwanth-raj555
              </a>
              <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> Hyderabad, Telangana · Remote-friendly
              </div>
            </div>
            <a href="/resume.pdf" download className="mt-auto inline-flex items-center justify-center gap-2 mt-6 rounded-xl px-4 py-3 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground glow hover:opacity-90 transition">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            id="portfolio-contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            target="contact_submit_iframe"
            onSubmit={() => {
              setIsSubmitting(true);
              setErrorMsg(null);
            }}
            className="glass-strong rounded-3xl p-6 border-gradient space-y-4"
          >
            <input 
              type="hidden" 
              name="access_key" 
              value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "28881dc0-92f1-4f51-9e34-b63a5cd73575"} 
            />
            <input 
              type="hidden" 
              name="subject" 
              value="New Portfolio Message" 
            />
            <input
              type="hidden"
              name="from_name"
              value="Yashwanth Portfolio"
            />
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Ada Lovelace" />
              <Field label="Email" name="email" type="email" placeholder="ada@company.com" />
            </div>
            <Field label="Company" name="company" placeholder="Acme Inc." />
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required rows={5}
                name="message"
                placeholder="Tell me about the role or project…"
                className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none placeholder:text-muted-foreground/60"
              />
            </div>
            {errorMsg && (
              <div className="text-xs text-rose-400 font-medium bg-rose-500/10 border border-rose-500/25 px-4 py-2.5 rounded-xl animate-fade-in">
                ⚠️ {errorMsg}
              </div>
            )}
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium bg-[image:var(--gradient-primary)] text-primary-foreground glow hover:opacity-90 disabled:opacity-50 transition">
              <Send className="h-4 w-4" /> {isSubmitting ? "Sending..." : sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>

      <iframe
        name="contact_submit_iframe"
        id="contact_submit_iframe"
        style={{ display: "none" }}
        onLoad={handleIframeLoad}
      />
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        required name={name} type={type} placeholder={placeholder}
        className="mt-1 w-full glass rounded-xl px-4 py-3 text-sm bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
