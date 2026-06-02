# 📊 Yashwanth Raj Miryala — Data Analyst Portfolio

A premium, interactive, and high-performance developer portfolio built to showcase a modern analytics toolkit, certifications, and interactive project dashboards. This portfolio features a fully integrated **AI Chat Representative** powered by OpenRouter and a **highly resilient contact form** that bypasses browser ad-blockers.

🔗 **Live Link:** [https://github.com/Yashwanth-raj555/Yashwanth-s-Portfolio](https://github.com/Yashwanth-raj555/Yashwanth-s-Portfolio)

---

## 🛠️ Tech Stack & Architecture

### **Portfolio Stack**
* **Framework:** React 19 + TanStack Start (Vite SSR/SPA runtime)
* **Routing & State:** TanStack Router with Scroll Restoration
* **Styling & UI:** Tailwind CSS, Lucide icons, glassmorphic card overlays
* **Animations:** Framer Motion (floating triggers, reveal effects, tab transitions)
* **Visualization:** Recharts (responsive analytics area & trend mixes)

### **Analytics Stack Showcased**
* **Languages:** Python (Pandas, NumPy), SQL (SQL Server), Excel
* **BI Tools:** Power BI, Tableau, Streamlit
* **Specialization:** Exploratory Data Analysis (EDA), Data Cleaning, KPI Reporting, Risk Profiling, Statistical Analysis

---

## 🌟 Key Features

### 1. **AI Chat Representative (`ChatAssistant.tsx`)**
* A floating glassmorphic chat window that acts as Yashwanth's virtual representative.
* **OpenRouter Integration:** Streams token-by-token replies (defaulting to Gemini 2.5 Flash) over serverless fetches.
* **Auto-Tooltip Loop:** Displays a floating `👋 Ask me` tooltip invitation on a periodic 5-second delay timer to drive interaction.
* **Mock Fallback Engine:** If no API key is present, a smart keywords parsing module intercepts visitor queries (e.g., *Supply Chain, SQL, Python*) to answer accurately with formatted resume facts.
* **Dynamic Suggestions:** Rotates 3 random suggestion chips from a pool of 15 questions on every click.

### 2. **Ad-Blocker Proof Contact Form (`Contact.tsx`)**
* Standard contact API forms are often blocked client-side by browser privacy shields and ad-blockers.
* **Hidden Iframe Submission:** Submits form payloads natively through a hidden `<iframe>` target. 
* **Zero Redirects:** Bypasses client blocklists and Cloudflare Turnstile bot checks while keeping the user on the page. Form updates are caught and reported via clean inline UI messages.

### 3. **Interactive Project Portfolios**
Showcases 5 detailed, real-world data analyst case studies with live dashboard frames and source code:
* **Supply Chain Intelligence Platform:** 180K+ row logistics cleaning, profit analytics ($3.97M), and delay tracing.
* **Customer Behaviour Analysis:** Behavioral segmentations and transactional insights.
* **AI Cybercrime Threat Intelligence:** Streamlit-powered Indian cybercrime incident mapping (1,200 records).
* **Flipkart Product Analytics:** 20,001 items standardization and outlier price detection.
* **Sachin Tendulkar Cricket Career Analytics:** Format-wise batting career visualizations (664 matches).

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Configurations
Create a `.env` file in the root directory:
```env
# OpenRouter API Key for chatbot responses
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here

# Web3Forms access key for inbox notifications
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

---

## 🌍 Deployment on Vercel (Easiest)

1. Connect your GitHub repository to [Vercel](https://vercel.com).
2. Add your `.env` variables under **Project Settings > Environment Variables**:
   * `VITE_WEB3FORMS_ACCESS_KEY`
   * `VITE_OPENROUTER_API_KEY`
3. Click **Deploy**. Vercel will automatically build the site and provide a permanent `.vercel.app` URL.
