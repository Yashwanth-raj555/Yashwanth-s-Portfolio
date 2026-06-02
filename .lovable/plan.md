# Portfolio Enhancement Plan

Add four premium sections/upgrades to the portfolio, all matching the existing glassmorphism + cinematic animation aesthetic.

## 1. Certifications Showcase (new section)

New component: `src/components/portfolio/Certifications.tsx`, inserted between Skills and Projects.

- Responsive grid of certification cards (Google Data Analytics, IBM Data Analyst, Microsoft PL-300 Power BI, Kaggle, HackerRank SQL, etc.)
- Each card: animated gradient border, issuer logo/icon, title, issuer, issue date, "Verify" link, hover lift + glow
- Scroll-triggered stagger animation
- Placeholder verification URLs (user can swap with real ones later)

## 2. GitHub Live Stats (embedded in About or new mini-section)

- Uses public GitHub REST API (no auth needed for public data) via `useQuery`
- Fetches: public repos, followers, total stars (summed), top languages
- Animated counters (count-up on viewport enter)
- Top languages rendered as horizontal gradient bars
- Graceful fallback if rate-limited
- Username configurable via a constant at top of file

## 3. Interactive Resume / CV

New component: `src/components/portfolio/Resume.tsx`, inserted before Contact.

- Premium card with "Preview Resume" and "Download PDF" buttons
- Click Preview → full-screen glassmorphism modal with embedded `<iframe>` of the PDF
- Resume file expected at `public/resume.pdf` (placeholder note — user uploads later)
- Download button uses `<a download>` to the same path
- Animated entrance, gradient ring, subtle floating document icon

## 4. Real Project Links (update existing Projects.tsx)

- Extend each project object with structured links: `github`, `live`, `dashboard` (Power BI / Tableau / Streamlit / Kaggle)
- Replace single "View" button with small icon-button group (GitHub, External, Dashboard)
- Use clearly-labeled `#` placeholder URLs with a TODO comment so the user can paste real links
- Tooltips on hover

## Navigation & Misc

- Add "Certifications" and "Resume" to Navbar links
- Update section IDs and smooth-scroll targets
- All new components use existing design tokens from `src/styles.css` (no hard-coded colors)
- Keep SSR-safe (no `Math.random()` at render time, no `window` at module scope)

## Files

Created:
- `src/components/portfolio/Certifications.tsx`
- `src/components/portfolio/GitHubStats.tsx`
- `src/components/portfolio/Resume.tsx`

Edited:
- `src/routes/index.tsx` (mount new sections)
- `src/components/portfolio/Navbar.tsx` (new nav links)
- `src/components/portfolio/Projects.tsx` (multi-link buttons)
- `src/components/portfolio/About.tsx` (embed GitHubStats below bio) — or keep GitHubStats as standalone block; will decide during build for best flow

No backend, no new dependencies required (TanStack Query is already installed).
