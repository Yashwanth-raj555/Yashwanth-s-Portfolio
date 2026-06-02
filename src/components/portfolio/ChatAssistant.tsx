import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Settings,
  Sparkles,
  RefreshCw,
  Eye,
  EyeOff,
  User,
  Bot,
  ArrowRight,
  Check,
} from "lucide-react";

// Pre-packaged info about Yashwanth to train/inform the chatbot (also used for mock responder)
const YASHWANTH_DATA = {
  name: "Yashwanth Raj Miryala",
  role: "Data Analyst",
  location: "Hyderabad, India",
  status: "Open to opportunities / Actively seeking entry-level Data Analyst roles",
  email: "yashwanthmiryala5@gmail.com",
  socials: {
    github: "https://github.com/Yashwanth-raj555",
    linkedin: "https://www.linkedin.com/in/yashwanth-raj-miryala-b62004413/",
  },
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Pallavi Engineering College",
      duration: "2021 – 2025",
      grade: "CGPA 6.62",
      details: "Strong fundamentals in data structures, statistics, and databases.",
    },
    {
      degree: "Virtual Job Simulations (Forage)",
      institution: "Deloitte Australia & Tata iQ",
      duration: "2026",
      details: "Hands-on exposure to Tableau, Excel, GenAI workflows, and agentic AI-driven analytics.",
    },
  ],
  experience: [
    {
      role: "Data Analytics Job Simulation",
      company: "Deloitte Australia · Forage",
      duration: "May 2026",
      details: "Completed a job simulation involving data analysis and forensic technology. Created a Tableau dashboard to visualize findings and used Excel to classify data and draw actionable business conclusions.",
    },
    {
      role: "GenAI Powered Data Analytics Simulation",
      company: "Tata iQ · Forage",
      duration: "May 2026",
      details: "Conducted EDA using GenAI tools to assess data quality and risk indicators. Proposed a no-code predictive modeling framework and designed an AI-driven collections strategy with agentic AI and ethical AI principles.",
    },
  ],
  achievements: [
    "Placed 7th out of 50+ teams in the NASA Space Apps Challenge.",
    "Published research paper 'Data Protection and Privacy' at the International Conference on Women Safety in Cyber Security (ICWSCS).",
    "Completed virtual job simulations with Deloitte Australia and Tata iQ via Forage.",
    "Finalist, Ideathon 2021 | Participant, Deco Global Hackathon.",
  ],
  skills: {
    languages: ["Python", "SQL Server", "Excel"],
    libraries: ["Pandas", "NumPy", "Streamlit", "Jupyter"],
    bi_tools: ["Power BI", "Tableau", "Data Viz", "KPI Reporting"],
    methodologies: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Business Intelligence", "GenAI Analytics", "Statistical Analysis", "Risk Profiling", "Data Storytelling", "Predictive Analytics"],
    concepts: ["Agentic AI", "Ethical AI", "Regulatory Compliance", "Data-Driven Decision Making"],
  },
  projects: [
    {
      title: "Supply Chain Intelligence Analytics Platform",
      category: "Operations",
      description: "Cleaned and analyzed a large logistics dataset of 180,519 raw records (35 engineered columns) using Python, Pandas, SQL Server, and Power BI. Surfaced delivery risks, regional performance, and $36.78M in tracked revenue ($3.97M profit, 57.28% delay rate).",
      link: "https://github.com/Yashwanth-raj555/Supply_Chain_Intelligence_Analytics",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZTMzMGVlMTYtMDBlNi00MGU4LWIxZjYtZDI0ZmMzODE2NDI4IiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9"
    },
    {
      title: "Customer Behaviour Analysis Project",
      category: "Marketing",
      description: "Cleaned retail transaction datasets and extracted purchasing signals (discount response, seasonality, payment methods) to segment customers using Python, SQL Server, Power BI, and Pandas.",
      link: "https://github.com/Yashwanth-raj555/Customer_Behaviour_Analysis_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMDcyN2VjNmYtOGE5Mi00ZDYzLWFmY2UtZmIyN2YwNjQ2NzEwIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9"
    },
    {
      title: "AI-Powered Indian Cybercrime & Threat Intelligence Platform",
      category: "Public Safety",
      description: "Mapped Indian cybercrime patterns (financial loss, attack type, sector risk) from 1,200 incident records. Developed a Streamlit AI assistant for natural-language KPI querying. Created using Python, SQL Server, Power BI, and Streamlit.",
      link: "https://github.com/Yashwanth-raj555/AI-Powered-Indian-Cybercrime-Threat-Intelligence-Analytics-Platform",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiNWQ0ZTc4NjItZWRkOC00YmU2LWI5ZTAtZDVlODFlZjllNTBiIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9"
    },
    {
      title: "Flipkart Product Analytics Dashboard",
      category: "E-commerce",
      description: "Standardized 20,001 Flipkart product listings with 17 attributes. Engineered pricing-outlier flags and discount percentage features. Created interactive Power BI visualizations for category and brand sales trends.",
      link: "https://github.com/Yashwanth-raj555/Flipkart_End_to_End_Analytics_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiZjVhMDlmMzctNDQyMy00ZWI1LTgxNTEtMWUwNWIyNGE2NWQwIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9"
    },
    {
      title: "Sachin Tendulkar Cricket Analytics Dashboard",
      category: "Sports",
      description: "Analyzed batting career performance (664 matches, 34,357 runs, 100 centuries) across ODI, Test, and IPL formats using Python, SQL Server, and Power BI.",
      link: "https://github.com/Yashwanth-raj555/Sachin_Career_Analytics_Project",
      dashboard: "https://app.fabric.microsoft.com/view?r=eyJrIjoiYzZiNWY3MTctZjliYS00MmRiLTk3NDktYjQ1YWI0ODI4MTBhIiwidCI6IjBhMjk0YmIwLTU1MDktNDJhMS04ZTVkLWFhMjVjN2U4NWU0YSJ9"
    }
  ]
};

// System prompt sent to OpenRouter API
const SYSTEM_PROMPT = `You are a helpful, professional, and friendly AI chatbot assistant on Yashwanth Raj Miryala's portfolio website. Your purpose is to act as his virtual representative, introducing him to recruiters, colleagues, and curious visitors.

Here is Yashwanth's official profile:
- Name: ${YASHWANTH_DATA.name}
- Current Role: ${YASHWANTH_DATA.role}
- Location: ${YASHWANTH_DATA.location}
- Job Search Status: ${YASHWANTH_DATA.status}
- Contact Email: ${YASHWANTH_DATA.email}
- GitHub: ${YASHWANTH_DATA.socials.github}
- LinkedIn: ${YASHWANTH_DATA.socials.linkedin}

Education:
${YASHWANTH_DATA.education.map(e => `- ${e.degree} from ${e.institution} (${e.duration}). ${e.grade ? e.grade : ""}. ${e.details}`).join("\n")}

Experience:
${YASHWANTH_DATA.experience.map(exp => `- ${exp.role} at ${exp.company} (${exp.duration}): ${exp.details}`).join("\n")}

Key Achievements:
${YASHWANTH_DATA.achievements.map(a => `- ${a}`).join("\n")}

Technical Skills Toolkit:
- Languages: ${YASHWANTH_DATA.skills.languages.join(", ")}
- Libraries/Tools: ${YASHWANTH_DATA.skills.libraries.join(", ")}
- BI & Visualizations: ${YASHWANTH_DATA.skills.bi_tools.join(", ")}
- Methodologies: ${YASHWANTH_DATA.skills.methodologies.join(", ")}

Top Projects:
${YASHWANTH_DATA.projects.map(p => `- ${p.title} (${p.category}): ${p.description}\n  GitHub Code: ${p.link}\n  Interactive Dashboard: ${p.dashboard}`).join("\n")}

Guidelines:
1. Speak in the third person when describing Yashwanth, but act as his supportive and informative representative.
2. Provide details clearly and concisely. Since this is a compact chat window, use bullet points, short paragraphs, and bold text for easy reading.
3. You are fully capable of answering general knowledge, coding, or unrelated questions if the user asks them. Do not refuse to answer general queries. However, whenever natural and relevant, try to tie it back to Yashwanth's background and analytical skills.
4. Keep the tone warm, welcoming, analytical, and professional. Use emojis sparingly.
5. Provide clickable markdown links for projects and socials when appropriate. For example: [GitHub](${YASHWANTH_DATA.socials.github}) or [LinkedIn](${YASHWANTH_DATA.socials.linkedin}).`;

const SUGGESTION_POOL = [
  "What are his core skills?",
  "Tell me about the Supply Chain project",
  "Is he looking for jobs?",
  "What did he do in hackathons?",
  "How can I contact Yashwanth?",
  "Tell me about the Flipkart Analytics project",
  "Tell me about his Cybercrime dashboard",
  "Where did he graduate from?",
  "What virtual simulations did he complete?",
  "Tell me about Customer Behaviour Analysis",
  "Has he published any research?",
  "Show me his Cricket Analytics project",
  "What are his key achievements?",
  "What data analytics tools does he know?",
];

const AVAILABLE_MODELS = [
  { id: "google/gemini-2.5-flash", name: "Gemini 2.5 Flash (Recommended)" },
  { id: "meta-llama/llama-3-8b-instruct:free", name: "Llama 3 8B (Free)" },
  { id: "qwen/qwen-2.5-72b-instruct", name: "Qwen 2.5 72B" },
  { id: "deepseek/deepseek-chat", name: "DeepSeek V3" },
  { id: "google/gemini-2.5-pro", name: "Gemini 2.5 Pro (Slower/Smart)" },
];

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hello! I'm Yashwanth's AI Assistant. Ask me anything about his skills, experience, or projects, or pick a suggestion below!`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState("google/gemini-2.5-flash");
  const [showKey, setShowKey] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const rotateSuggestions = () => {
    const shuffled = [...SUGGESTION_POOL].sort(() => 0.5 - Math.random());
    setCurrentSuggestions(shuffled.slice(0, 3));
  };

  // Load API key and model from local storage and environment on mount
  useEffect(() => {
    rotateSuggestions();
    const savedKey = localStorage.getItem("openrouter_api_key");
    const envKey = import.meta.env.VITE_OPENROUTER_API_KEY;

    if (savedKey) {
      setApiKey(savedKey);
    } else if (envKey) {
      setApiKey(envKey);
    }

    const savedModel = localStorage.getItem("openrouter_model");
    if (savedModel) {
      setModel(savedModel);
    }
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);
  // Timing cycle for the welcome hint bubble
  useEffect(() => {
    if (isOpen) {
      setHasBeenOpened(true);
      setShowHint(false);
      return;
    }
    if (hasBeenOpened) return;

    let hideTimeout: NodeJS.Timeout;
    let showTimeout: NodeJS.Timeout;

    const runCycle = (delay: number) => {
      showTimeout = setTimeout(() => {
        setShowHint(true);
        // Hide after 4 seconds
        hideTimeout = setTimeout(() => {
          setShowHint(false);
          // Reappear after 5 seconds (5s after hiding)
          runCycle(5000);
        }, 4000);
      }, delay);
    };

    // First appearance after 3 seconds
    runCycle(3000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [isOpen, hasBeenOpened]);

  // Rotate suggestions when chat opens
  useEffect(() => {
    if (isOpen) {
      rotateSuggestions();
    }
  }, [isOpen]);

  const handleClearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: `Hello! I'm Yashwanth's AI Assistant. Ask me anything about his skills, experience, or projects, or pick a suggestion below!`,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("openrouter_api_key", apiKey);
    localStorage.setItem("openrouter_model", model);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
    setShowSettings(false);
  };

  const handleClearSettings = () => {
    localStorage.removeItem("openrouter_api_key");
    setApiKey("");
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  // Smart local fallback responses if OpenRouter key is not set
  const queryMockResponse = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("skill") || q.includes("tool") || q.includes("python") || q.includes("sql") || q.includes("bi")) {
      return `📊 **Yashwanth's Technical Toolkit:**\n\n` +
        `- **Languages:** Python, SQL (SQL Server), Excel\n` +
        `- **Libraries:** Pandas, NumPy, Streamlit, Jupyter\n` +
        `- **Business Intelligence:** Power BI, Tableau, KPI Reporting, Data Visualization\n` +
        `- **Core Speciality:** Data Cleaning, Exploratory Data Analysis (EDA), and GenAI analytics.\n\n` +
        `He has built end-to-end analytics pipelines transforming dirty csv data into dashboards for business insights.`;
    }

    if (q.includes("supply") || q.includes("chain") || q.includes("logistics") || q.includes("delays")) {
      const proj = YASHWANTH_DATA.projects[0];
      return `🚛 **${proj.title}**\n\n` +
        `* **Problem:** Cleaned & analyzed a large logistics dataset to surface risks and regional performance.\n` +
        `* **Dataset:** 180,519 records with 35 engineered columns (shrunk to 180,511 cleaned rows).\n` +
        `* **Key KPIs:** tracked **$36.78M revenue**, **$3.97M profit**, and surfaced a **57.28% order delay rate** as a major area of optimization.\n` +
        `* **Tools used:** Python, Pandas, SQL Server, and Power BI.\n\n` +
        `[View Code on GitHub](${proj.link}) | [Interactive Power BI Dashboard](${proj.dashboard})`;
    }

    if (q.includes("cyber") || q.includes("threat") || q.includes("hackathon") || q.includes("smart india")) {
      const proj = YASHWANTH_DATA.projects[2];
      return `🚨 **AI-Powered Indian Cybercrime & Threat Intelligence Platform**\n\n` +
        `Yashwanth was a **Smart India Hackathon 2024 Finalist** (Top 12 nationally) for this project.\n` +
        `* **Overview:** It maps national cybercrime incident trends (attack types, sectors, city risks, financial losses) across 1,200 incident records.\n` +
        `* **Feature:** Built an AI query assistant using Streamlit allowing users to ask queries in natural language.\n` +
        `* **Stack:** Python, SQL Server, Power BI, Streamlit.\n\n` +
        `[GitHub Repository](${proj.link}) | [Interactive Dashboard](${proj.dashboard})`;
    }

    if (q.includes("customer") || q.includes("behaviour") || q.includes("segmentation")) {
      const proj = YASHWANTH_DATA.projects[1];
      return `🛍️ **Customer Behaviour Analysis**\n\n` +
        `* **Overview:** Extracts retail signals (payment types, seasonality, discount responses) for marketing segmentation.\n` +
        `* **Process:** Imputed missing values with business logic and engineered behavioral attributes.\n` +
        `* **Stack:** Python, SQL Server, Power BI, Pandas.\n\n` +
        `[GitHub Repository](${proj.link}) | [Interactive Dashboard](${proj.dashboard})`;
    }

    if (q.includes("flipkart") || q.includes("ecommerce")) {
      const proj = YASHWANTH_DATA.projects[3];
      return `🛒 **Flipkart Product Analytics Dashboard**\n\n` +
        `* **Dataset:** 20,001 product records with 17 attributes.\n` +
        `* **Insights:** Standardized prices, engineered discount percentage metrics and price outlier flags.\n` +
        `* **Stack:** Python, SQL Server, Power BI.\n\n` +
        `[GitHub Repository](${proj.link}) | [Interactive Dashboard](${proj.dashboard})`;
    }

    if (q.includes("sachin") || q.includes("tendulkar") || q.includes("cricket")) {
      const proj = YASHWANTH_DATA.projects[4];
      return `🏏 **Sachin Tendulkar Cricket Analytics Dashboard**\n\n` +
        `* **Dataset:** career stats across formats (664 matches, 34,357 runs, 100 centuries).\n` +
        `* **Insights:** Batting milestones, formats performance (ODI, Test, IPL) and match-winning statistics.\n` +
        `* **Stack:** Python, SQL Server, Power BI.\n\n` +
        `[GitHub Repository](${proj.link}) | [Interactive Dashboard](${proj.dashboard})`;
    }

    if (q.includes("job") || q.includes("looking") || q.includes("opportunity") || q.includes("career") || q.includes("hire") || q.includes("work")) {
      return `💼 **Job Search Status:**\n\n` +
        `Yashwanth is **actively looking for Entry-level Data Analyst / Business Analyst roles**.\n\n` +
        `* **Location:** Hyderabad, India (Open to remote or relocation)\n` +
        `* **Availability:** Immediate joiner\n` +
        `* **Unique Value:** Combining a strong CSE background (B.Tech) with deep analytics hands-on work in Pandas, SQL, and Power BI dashboards.\n\n` +
        `Please reach out via email at **yashwanthmiryala5@gmail.com** or connect on [LinkedIn](${YASHWANTH_DATA.socials.linkedin}) to discuss opportunities!`;
    }

    if (q.includes("contact") || q.includes("email") || q.includes("linkedin") || q.includes("reach")) {
      return `📬 **Get in touch with Yashwanth:**\n\n` +
        `- 📧 **Email:** [yashwanthmiryala5@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=yashwanthmiryala5@gmail.com)\n` +
        `- 🔗 **LinkedIn:** [LinkedIn Profile](${YASHWANTH_DATA.socials.linkedin})\n` +
        `- 💻 **GitHub:** [GitHub Profile](${YASHWANTH_DATA.socials.github})\n\n` +
        `He would love to connect to discuss project ideas, analytics workflows, or full-time roles!`;
    }

    if (q.includes("experience") || q.includes("intern") || q.includes("simulation") || q.includes("forage") || q.includes("deloitte") || q.includes("tata")) {
      return `💼 **Experience & Simulations:**\n\n` +
        `* **Deloitte Australia · Data Analytics Job Simulation (Forage, May 2026):** Completed a simulation involving data analysis and forensic technology. Created a Tableau dashboard and used Excel to classify data and draw actionable conclusions.\n` +
        `* **Tata iQ · GenAI Powered Data Analytics Simulation (Forage, May 2026):** Conducted EDA using GenAI tools, proposed a no-code predictive modeling framework, and designed an AI-driven collections strategy with agentic AI principles.\n` +
        `* **NASA Space Apps Challenge (2024):** Placed 7th out of 50+ teams.\n` +
        `* **Published Research:** "Data Protection and Privacy" at the ICWSCS Global Conference.`;
    }

    if (q.includes("education") || q.includes("btech") || q.includes("college")) {
      return `🎓 **Education:**\n\n` +
        `- **B.Tech in Computer Science Engineering** (2021 – 2025)\n` +
        `  *Pallavi Engineering College* | CGPA: 6.62\n` +
        `  *Focus:* DSA, databases, data analysis, stats.\n\n` +
        `- **Tata iQ & Deloitte Australia Virtual Simulations** (2026)\n` +
        `  *Skills:* Tableau, KPI mapping, GenAI workflows.`;
    }

    return `I received your question: "${query}". \n\n` +
      `Since you are chatting in demo mode, here is a quick summary of Yashwanth Raj Miryala: \n` +
      `- He is a B.Tech CSE graduate and entry-level **Data Analyst** from Hyderabad, India.\n` +
      `- Highly skilled in **Python, SQL Server, Power BI, Excel, and Pandas**.\n` +
      `- Built the **Supply Chain Intelligence Platform** ($36.78M revenue tracked) and placed **7th in the NASA Space Apps Challenge**.\n\n` +
      `*Tip: Try asking specific questions like "Tell me about the Supply Chain project" or "What are his skills?" or configure an OpenRouter API key in settings (⚙️) to query via a live AI!*`;
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;
    rotateSuggestions();

    const userMessage: Message = {
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Prepare API key
    const currentKey = apiKey || import.meta.env.VITE_OPENROUTER_API_KEY || localStorage.getItem("openrouter_api_key");

    if (!currentKey) {
      // Fallback: smart local mock responder
      setTimeout(() => {
        const replyContent = queryMockResponse(text);
        const systemMessage: Message = {
          role: "assistant",
          content: replyContent + "\n\n*(Demo Mode Response)*",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, systemMessage]);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      // Format messages history for the API call (limit to last 8 messages to conserve tokens)
      const chatHistory = messages
        .filter(msg => msg.role !== "system")
        .slice(-8)
        .map(msg => ({
          role: msg.role,
          content: msg.content,
        }));

      // Add a placeholder message for the assistant that we will update in real-time
      const assistantMessageIndex = messages.length + 1;
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "",
          timestamp: new Date(),
        },
      ]);

      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentKey}`,
          "HTTP-Referer": window.location.origin,
          "X-Title": "Yashwanth Raj Miryala Portfolio Assistant",
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...chatHistory,
            { role: "user", content: text },
          ],
          temperature: 0.7,
          max_tokens: 1000,
          stream: true,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`OpenRouter Error: ${response.status} - ${errText}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      if (!reader) {
        throw new Error("Could not get stream reader from response body");
      }

      setIsLoading(false); // Turn off typing loader once streaming starts

      let accumulatedResponse = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const cleanedLine = line.trim();
          if (!cleanedLine) continue;
          if (cleanedLine === "data: [DONE]") continue;

          if (cleanedLine.startsWith("data: ")) {
            try {
              const jsonData = JSON.parse(cleanedLine.substring(6));
              const content = jsonData.choices?.[0]?.delta?.content || "";
              if (content) {
                accumulatedResponse += content;
                setMessages((prev) => {
                  const updated = [...prev];
                  if (updated[assistantMessageIndex]) {
                    updated[assistantMessageIndex] = {
                      ...updated[assistantMessageIndex],
                      content: accumulatedResponse,
                    };
                  }
                  return updated;
                });
              }
            } catch (err) {
              // Ignore partial JSON parsing errors
            }
          }
        }
      }
    } catch (error: any) {
      console.error("OpenRouter fetch error:", error);
      // Remove the empty streaming bubble if it failed before starting
      setMessages((prev) => {
        const updated = prev.filter(msg => msg.content !== "");
        return [
          ...updated,
          {
            role: "assistant",
            content: `⚠️ **Failed to connect to OpenRouter.** \n\n*Error: ${error.message}*\n\nIf your API key is invalid, please check it in the settings panel (⚙️). Falling back to mock responder:\n\n${queryMockResponse(text)}`,
            timestamp: new Date(),
          },
        ];
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Premium Welcome Hint Bubble */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              y: [0, -4, 0] // Premium floating effect
            }}
            exit={{ opacity: 0, x: 30, scale: 0.9 }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut"
              },
              default: { type: "spring", stiffness: 300, damping: 25 }
            }}
            whileHover={{ scale: 1.05 }}
            className="absolute right-16 bottom-2 mr-2 px-4 py-2.5 rounded-full bg-black/80 border border-cyan-500/30 backdrop-blur-md text-xs font-semibold whitespace-nowrap shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_22px_rgba(6,182,212,0.35)] hover:border-cyan-400/50 flex items-center gap-2 text-white cursor-pointer select-none transition-shadow duration-300 glow-cyan"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-sm">👋</span>
            <span className="tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">Ask me</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground flex items-center justify-center glow cursor-pointer transition shadow-lg relative group"
        aria-label="Toggle AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 right-0 w-[92vw] sm:w-[420px] h-[550px] rounded-3xl glass-strong border-gradient shadow-2xl flex flex-col overflow-hidden mr-0 mb-2"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-xl bg-[image:var(--gradient-primary)] flex items-center justify-center glow relative">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-none flex items-center gap-1.5">
                    Yashwanth's Bot
                    <Sparkles className="h-3 w-3 text-cyan-300 animate-pulse" />
                  </h3>
                  <span className="text-[10px] text-emerald-400/90 font-medium">OnlineRepresentative</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleClearChat}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition cursor-pointer"
                  title="Clear Chat"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Main Body Area */}
            <div className="flex-1 relative overflow-hidden flex flex-col min-h-0 bg-background/20">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 space-y-4 min-h-0 custom-scrollbar scroll-smooth">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} min-w-0`}
                  >
                    <div className="flex gap-2 max-w-[85%] items-start min-w-0">
                      {msg.role !== "user" && (
                        <div className="h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Bot className="h-3.5 w-3.5 text-primary" />
                        </div>
                      )}
                      <div
                        className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed break-words overflow-wrap-break-word min-w-0 ${
                          msg.role === "user"
                            ? "bg-[image:var(--gradient-primary)] text-primary-foreground rounded-tr-none shadow-md shadow-primary/10"
                            : "glass rounded-tl-none text-foreground border border-white/5"
                        }`}
                      >
                        <div className="markdown-chat text-[13px] break-words overflow-wrap-break-word min-w-0">
                          {renderChatMessage(msg.content)}
                        </div>
                        <span className="block text-[9px] mt-1 text-right opacity-40">
                          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="flex gap-2 max-w-[85%] items-start">
                      <div className="h-6 w-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                        <Bot className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div className="glass rounded-2xl rounded-tl-none px-4 py-3 flex gap-1.5 items-center">
                        <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions Panel */}
              {!isLoading && currentSuggestions.length > 0 && (
                <div className="px-5 pb-3 pt-1 flex flex-wrap gap-1.5 shrink-0 bg-gradient-to-t from-background/30 to-transparent">
                  {currentSuggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSendMessage(s)}
                      className="text-[10px] text-muted-foreground hover:text-foreground glass hover:bg-white/5 rounded-full px-2.5 py-1.5 transition text-left cursor-pointer flex items-center gap-1 group"
                    >
                      {s} <ArrowRight className="h-2.5 w-2.5 opacity-0 group-hover:opacity-100 transition duration-300" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 border-t border-white/10 flex gap-2 items-center bg-white/[0.01]"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask something about Yashwanth..."
                className="flex-1 glass rounded-2xl py-2.5 px-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary border border-white/10 focus:border-transparent placeholder-white/30"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground flex items-center justify-center glow hover:opacity-90 disabled:opacity-50 transition shrink-0 cursor-pointer"
                disabled={isLoading || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const parseMessageText = (text: string) => {
  if (!text) return "";
  
  // Match markdown links: [link text](url) or raw URLs
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s\n\r]+)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  const formatBoldText = (str: string, parentKey: number) => {
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const parts = [];
    let lastIdx = 0;
    let bMatch;
    let subKey = 0;

    while ((bMatch = boldRegex.exec(str)) !== null) {
      if (bMatch.index > lastIdx) {
        parts.push(str.substring(lastIdx, bMatch.index));
      }
      parts.push(
        <strong key={`b-${parentKey}-${subKey++}`} className="font-semibold text-white">
          {bMatch[1]}
        </strong>
      );
      lastIdx = boldRegex.lastIndex;
    }
    if (lastIdx < str.length) {
      parts.push(str.substring(lastIdx));
    }
    return parts.length > 0 ? parts : str;
  };

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text segment before link match
    if (match.index > lastIndex) {
      const plainText = text.substring(lastIndex, match.index);
      const boldFormatted = formatBoldText(plainText, key);
      if (Array.isArray(boldFormatted)) {
        elements.push(...boldFormatted);
      } else {
        elements.push(boldFormatted);
      }
      key++;
    }

    if (match[1] && match[2]) {
      // Markdown link [text](url)
      const linkText = match[1];
      const linkUrl = match[2];
      elements.push(
        <a
          key={`link-${key++}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline font-medium transition break-all"
        >
          {linkText}
        </a>
      );
    } else if (match[3]) {
      // Raw URL
      const rawUrl = match[3];
      elements.push(
        <a
          key={`url-${key++}`}
          href={rawUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300 underline font-medium transition break-all"
        >
          {rawUrl}
        </a>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    const boldFormatted = formatBoldText(remainingText, key);
    if (Array.isArray(boldFormatted)) {
      elements.push(...boldFormatted);
    } else {
      elements.push(boldFormatted);
    }
  }

  return elements.length > 0 ? elements : text;
};

const renderChatMessage = (content: string) => {
  if (!content) return null;
  
  const lines = content.split("\n");
  
  return lines.map((line, lineIndex) => {
    let currentLine = line;
    let isBullet = false;
    
    // Check if line is a list bullet (* or -)
    if (currentLine.trim().startsWith("* ") || currentLine.trim().startsWith("- ")) {
      isBullet = true;
      currentLine = currentLine.trim().replace(/^[\*\-]\s+/, "");
    }
    
    const parsedInline = parseMessageText(currentLine);
    
    if (isBullet) {
      return (
        <div key={lineIndex} className="flex gap-2 items-start mt-1.5 mb-1.5 pl-2 leading-relaxed min-w-0 break-words overflow-wrap-break-word">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
          <div className="flex-1 text-[13px] min-w-0 break-words overflow-wrap-break-word">{parsedInline}</div>
        </div>
      );
    }
    
    return (
      <div key={lineIndex} className="min-h-[1.25rem] text-[13px] leading-relaxed mb-1 min-w-0 break-words overflow-wrap-break-word">
        {parsedInline}
      </div>
    );
  });
};
