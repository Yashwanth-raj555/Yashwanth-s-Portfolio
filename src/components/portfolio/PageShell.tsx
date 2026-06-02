import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-28">{children}</div>
      <Footer />
    </main>
  );
}
