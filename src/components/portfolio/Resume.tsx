import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, FileText, X, Sparkles, ExternalLink } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const RESUME_URL = "/resume.pdf";

export function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="relative py-28 px-6">
      <SectionHeader
        eyebrow="Resume"
        title={<>One page. <span className="text-gradient">All the proof.</span></>}
        description="Preview the full resume inline, or download a recruiter-ready PDF."
      />

      <div className="mt-12 mx-auto max-w-3xl">
        <Reveal>
          <div className="relative glass-strong border-gradient rounded-3xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute -inset-px opacity-60 bg-aurora blur-3xl pointer-events-none" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative shrink-0"
              >
                <div className="absolute inset-0 blur-xl bg-[image:var(--gradient-primary)] opacity-70 rounded-2xl" />
                <div className="relative h-20 w-20 rounded-2xl bg-[image:var(--gradient-primary)] flex items-center justify-center glow">
                  <FileText className="h-9 w-9 text-primary-foreground" />
                </div>
              </motion.div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider glass rounded-full px-2 py-1 text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-primary" /> Updated 2026
                </div>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold">Yashwanth Raj Miryala — Resume</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Data Analyst · Python · SQL Server · Power BI · Tableau · Streamlit · GenAI
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-[image:var(--gradient-primary)] text-primary-foreground glow hover:opacity-90 transition"
                  >
                    <Eye className="h-4 w-4" /> Preview
                  </button>
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition"
                  >
                    <ExternalLink className="h-4 w-4" /> Open PDF
                  </a>
                  <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center gap-2 glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 transition"
                  >
                    <Download className="h-4 w-4" /> Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-xl p-4 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong border-gradient rounded-3xl w-full max-w-4xl h-[90vh] relative overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-primary" /> Resume preview
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Open
                  </a>
                  <a
                    href={RESUME_URL}
                    download
                    className="inline-flex items-center gap-2 glass rounded-lg px-3 py-1.5 text-xs hover:bg-white/10"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="glass p-2 rounded-full hover:bg-white/10"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={`${RESUME_URL}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full rounded-b-3xl"
                  title="Resume Preview"
                  style={{ border: "none", minHeight: "calc(90vh - 60px)" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
