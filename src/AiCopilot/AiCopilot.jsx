import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/AiCopilot/AiCopilot.css";

const KNOWLEDGE_BASE = {
  en: {
    stack: {
      text: "Lyhor is a Full-Stack & AI-augmented Software Engineer with a multi-disciplinary stack:\n\n• **Frontend:** React 19, Modern JavaScript (ES6+), TypeScript, Vite, CSS3/Tailwind, Responsive Architecture\n• **Backend & Systems:** Java & Spring Boot, PHP / Laravel, Node.js & Express, C++\n• **Databases:** PostgreSQL, MySQL, Redis, RESTful API Design\n• **AI & Workflows:** LLM & Gemini/OpenAI API Integration, AI Agent Pipelines, Git, Figma Systems",
      action: "projects"
    },
    pos: {
      text: "Lyhor specializes in **Enterprise Point of Sale (POS) Architecture** built for speed and reliability:\n\n• **Real-Time Stock & Inventory:** Automated stock deductions, low-inventory alerts, batch cataloging\n• **Order Processing:** Multi-terminal order synchronization, barcode scanning, custom receipt printing\n• **Financial Analytics:** Live daily revenue reports, profit/loss calculations, shift auditing\n• **Proven Deployments:** Deployed custom Coffee POS and restaurant management platforms.",
      action: "projects"
    },
    ai: {
      text: "Lyhor actively leverages **AI & Next-Gen Automation** throughout the engineering lifecycle:\n\n• **API Integration:** Embedding Google Gemini, OpenAI, and Claude APIs into intelligent web applications\n• **AI Agent Workflows:** Designing automated prompt-driven data processing and conversational copilots\n• **Augmented Productivity:** Accelerating clean code generation, automated testing, and UI prototyping.",
      action: "contact"
    },
    hire: {
      text: "⚡ **Lyhor is actively available for Full-Time Roles & Freelance Projects!**\n\n• **Locations:** Phnom Penh, Cambodia & Remote Worldwide\n• **Roles:** Full-Stack Developer, Frontend Engineer, POS Specialist, Spring Boot / React Developer\n• **Direct Contact:** Telegram [@phonlyhor79](https://t.me/phonlyhor79) or submit the Transmission Form below.",
      action: "contact"
    },
    projects: {
      text: "Lyhor has architected and delivered **10+ production applications**, including:\n\n1. **Khmer Learning Platform:** Comprehensive K12 educational platform serving 20,000+ Cambodian students\n2. **HS Chamkar Loe School Portal:** Administrative management portal with daily attendance & schedule generation\n3. **Coffee POS Enterprise System:** Touchscreen Point of Sale with real-time receipts & inventory\n4. **LiiHorr Food E-Commerce:** High-conversion digital food ordering platform.",
      action: "projects"
    },
    cv: {
      text: "📄 **Phon Lyhor — Software Engineer & Web Developer**\n\n• **Degree:** Computer Science & Web Development\n• **Specialization:** Full-Stack Engineering, Spring Boot, React, and POS Enterprise Systems\n• Click below to download the latest PDF resume.",
      action: "cv"
    },
    default: {
      text: "✦ I can help you explore Phon Lyhor's expertise! Here are some key topics:\n\n• **Tech Stack:** Ask about Java, Spring Boot, React, or databases\n• **POS Systems:** Ask how he builds inventory and receipt printing apps\n• **Hiring:** Check his availability and freelance terms\n• **Projects:** Explore Khmer Learning or the High School Portal.",
      action: "projects"
    }
  },
  km: {
    stack: {
      text: "លីហ័រ គឺជាវិស្វករសូហ្វវែរ Full-Stack & AI ដែលមានជំនាញបច្ចេកវិទ្យាច្រើនទម្រង់៖\n\n• **Frontend:** React 19, JavaScript (ES6+), TypeScript, Vite, CSS3/Tailwind\n• **Backend & Systems:** Java & Spring Boot, PHP / Laravel, Node.js, C++\n• **Databases:** PostgreSQL, MySQL, Redis, ការរចនា RESTful APIs\n• **AI & ឧបករណ៍:** ការតភ្ជាប់ LLM & Gemini/OpenAI, Git, Figma Systems",
      action: "projects"
    },
    pos: {
      text: "លីហ័រ មានជំនាញឯកទេសលើ **ស្ថាបត្យកម្មប្រព័ន្ធលក់ទំនិញ (POS)** ដែលមានល្បឿនលឿន និងសុវត្ថិភាពខ្ពស់៖\n\n• **ការគ្រប់គ្រងស្តុកផ្ទាល់:** កាត់ស្តុកស្វ័យប្រវត្ត ជូនដំណឹងពេលអស់ទំនិញ\n• **ដំណើរការការបញ្ជាទិញ:** តភ្ជាប់ Terminal ច្រើន ស្កេនបាកូដ និងបោះពុម្ពវិក្កយបត្រភ្លាមៗ\n• **របាយការណ៍ហិរញ្ញវត្ថុ:** របាយការណ៍ចំណូលប្រចាំថ្ងៃ ប្រចាំខែ និងការគណនាប្រាក់ចំណេញ\n• **គម្រោងជាក់ស្តែង:** បង្កើត Coffee POS និងប្រព័ន្ធគ្រប់គ្រងភោជនីយដ្ឋាន។",
      action: "projects"
    },
    ai: {
      text: "លីហ័រ ប្រើប្រាស់ **បច្ចេកវិទ្យា AI & ស្វ័យប្រវត្តិកម្មទំនើប** ក្នុងការអភិវឌ្ឍន៍សូហ្វវែរ៖\n\n• **ការតភ្ជាប់ API:** ភ្ជាប់ Google Gemini, OpenAI, Claude ទៅកាន់ Web Application\n• **AI Agent Workflows:** បង្កើតប្រព័ន្ធស្វ័យប្រវត្តិ និង Copilot ឆ្លាតវៃ\n• **បង្កើនប្រសិទ្ធភាព:** សរសេរកូដស្អាត រហ័ស និងបង្កើត Prototype តាម UI/UX ទំនើប។",
      action: "contact"
    },
    hire: {
      text: "⚡ **លីហ័រ ត្រៀមខ្លួនរួចរាល់សម្រាប់ការងារពេញម៉ោង និងគម្រោង Freelance!**\n\n• **ទីតាំង:** រាជធានីភ្នំពេញ កម្ពុជា & ធ្វើការពីចម្ងាយ (Remote)\n• **មុខតំណែង:** Full-Stack Developer, POS Specialist, Spring Boot / React Developer\n• **ទាក់ទងផ្ទាល់:** Telegram [@phonlyhor79](https://t.me/phonlyhor79) ឬផ្ញើសារខាងក្រោម។",
      action: "contact"
    },
    projects: {
      text: "លីហ័រ បានបង្កើត និងបញ្ចប់ **គម្រោងជាក់ស្តែងជាង 10+** រួមមាន៖\n\n1. **វេទិកាសិក្សា Khmer Learning:** វេទិកាអប់រំថ្នាក់ទី១-១២ ដែលមានសិស្សជាង 20,000+ នាក់ប្រើប្រាស់\n2. **វិទ្យាល័យ ហ៊ុន សែន ចំការលើ:** ប្រព័ន្ធគ្រប់គ្រងសាលា វត្តមាន និងកាលវិភាគ\n3. **ប្រព័ន្ធ Coffee POS:** ប្រព័ន្ធលក់កាហ្វេ និងគ្រប់គ្រងស្តុក\n4. **LiiHorr Food:** វេទិកាកុម្ម៉ង់អាហារអនឡាញទំនើប។",
      action: "projects"
    },
    cv: {
      text: "📄 **ផុន លីហ័រ — វិស្វករសូហ្វវែរ & Web Developer**\n\n• **សញ្ញាបត្រ:** វិទ្យាសាស្ត្រកុំព្យូទ័រ & ការអភិវឌ្ឍន៍វេបសាយ\n• **ជំនាញផ្តោត:** Full-Stack, Spring Boot, React, និងប្រព័ន្ធ POS\n• ចុចខាងក្រោមដើម្បីទាញយក CV ជា PDF។",
      action: "cv"
    },
    default: {
      text: "✦ ខ្ញុំអាចជួយលោកអ្នកស្វែងយល់ពីសមត្ថភាពរបស់ ផុន លីហ័រ៖\n\n• **ជំនាញកូដ:** សួរអំពី Java, Spring Boot, React ឬ Database\n• **ប្រព័ន្ធ POS:** សួរអំពីរបៀបដែលគាត់បង្កើតប្រព័ន្ធលក់ទំនិញ\n• **ការងារ & ជួល:** ពិនិត្យលក្ខខណ្ឌការងារពេញម៉ោង និង Freelance\n• **គម្រោង:** ស្វែងយល់អំពី Khmer Learning ឬប្រព័ន្ធគ្រប់គ្រងសាលា។",
      action: "projects"
    }
  }
};

const getAiResponse = (query, lang) => {
  const q = query.toLowerCase();
  const kb = KNOWLEDGE_BASE[lang] || KNOWLEDGE_BASE.en;

  if (q.includes("stack") || q.includes("tech") || q.includes("react") || q.includes("spring") || q.includes("java") || q.includes("backend") || q.includes("frontend") || q.includes("ជំនាញ") || q.includes("កូដ")) {
    return kb.stack;
  }
  if (q.includes("pos") || q.includes("point of sale") || q.includes("coffee") || q.includes("receipt") || q.includes("stock") || q.includes("inventory") || q.includes("លក់") || q.includes("ស្តុក")) {
    return kb.pos;
  }
  if (q.includes("ai") || q.includes("intelligence") || q.includes("llm") || q.includes("gemini") || q.includes("copilot") || q.includes("agent") || q.includes("បញ្ញាសិប្បនិម្មិត")) {
    return kb.ai;
  }
  if (q.includes("hire") || q.includes("available") || q.includes("contact") || q.includes("telegram") || q.includes("email") || q.includes("freelance") || q.includes("job") || q.includes("ការងារ") || q.includes("ជួល") || q.includes("ទាក់ទង")) {
    return kb.hire;
  }
  if (q.includes("project") || q.includes("portfolio") || q.includes("work") || q.includes("khmer") || q.includes("school") || q.includes("គម្រោង")) {
    return kb.projects;
  }
  if (q.includes("cv") || q.includes("resume") || q.includes("degree") || q.includes("edu") || q.includes("សញ្ញាបត្រ") || q.includes("ប្រវត្តិ")) {
    return kb.cv;
  }
  return kb.default;
};

const AiCopilot = () => {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize greeting
  useEffect(() => {
    const greetingText = t.copilot?.greeting || "✦ Greetings! I am Lyhor's AI Copilot. Ask me anything about his technical stack, POS projects, or hiring availability.";
    setMessages([
      {
        id: "msg-0",
        sender: "ai",
        text: greetingText,
        action: null,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  }, [lang, t]);

  // Listen for global open events from Hero prompt bar or other sections
  useEffect(() => {
    const handleOpenCopilot = (e) => {
      setIsOpen(true);
      if (e.detail?.query) {
        handleUserSend(e.detail.query);
      }
    };

    window.addEventListener("open-ai-copilot", handleOpenCopilot);
    return () => window.removeEventListener("open-ai-copilot", handleOpenCopilot);
  }, [lang]);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleUserSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Realistic synthesis delay
    setTimeout(() => {
      const resp = getAiResponse(query, lang);
      const aiMsg = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: resp.text,
        action: resp.action,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action) => {
    if (action === "projects") {
      setIsOpen(false);
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (action === "contact") {
      setIsOpen(false);
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (action === "cv") {
      const link = document.createElement("a");
      link.href = "/cv/phonlyhorcv.pdf";
      link.download = "Phonlyhor_CV.pdf";
      link.target = "_blank";
      link.click();
    }
  };

  const clearChat = () => {
    const greetingText = t.copilot?.greeting || "✦ Greetings! I am Lyhor's AI Copilot.";
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: "ai",
        text: greetingText,
        action: null,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  const quickPrompts = t.hero?.quickPrompts || [];

  return (
    <>
      {/* Floating AI Launcher Pill */}
      <button
        className={`ai-floating-trigger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Open Lyhor AI Copilot"
        aria-label="Toggle Lyhor AI Copilot"
      >
        <div className="ai-trigger-pulse"></div>
        <span className="ai-sparkle">✦</span>
        <span className="ai-trigger-text">{t.copilot?.floatingBtn || "Ask AI"}</span>
        <span className="ai-beacon-dot"></span>
      </button>

      {/* AI Copilot Drawer / Modal */}
      {isOpen && (
        <div className="ai-copilot-backdrop" onClick={() => setIsOpen(false)}>
          <div
            className="ai-copilot-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Holographic Header */}
            <div className="ai-copilot-header">
              <div className="ai-header-info">
                <div className="ai-avatar-badge">
                  <span className="ai-avatar-sparkle">✦</span>
                  <div className="ai-avatar-halo"></div>
                </div>
                <div>
                  <div className="ai-header-title">
                    <h4>{t.copilot?.title || "Lyhor AI Copilot"}</h4>
                    <span className="ai-status-tag">
                      <span className="ai-live-dot"></span>
                      ONLINE
                    </span>
                  </div>
                  <p className="ai-header-sub">{t.copilot?.badge || "NEURAL ASSISTANT v4.5"}</p>
                </div>
              </div>

              <div className="ai-header-actions">
                <button
                  className="ai-btn-icon"
                  onClick={clearChat}
                  title={t.copilot?.clear || "Clear Chat"}
                >
                  <i className="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <button
                  className="ai-btn-icon"
                  onClick={() => setIsOpen(false)}
                  title={t.copilot?.close || "Close"}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            {/* Quick Prompt Pills */}
            <div className="ai-quick-pills">
              <span className="ai-pills-label">
                <i className="fa-solid fa-bolt"></i> {t.copilot?.quickPromptTitle || "Suggested Prompts"}:
              </span>
              <div className="ai-pills-scroll">
                {quickPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    className="ai-pill-btn"
                    onClick={() => handleUserSend(p.q)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Body */}
            <div className="ai-copilot-body">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`ai-message-row ${m.sender === "user" ? "user-row" : "ai-row"}`}
                >
                  {m.sender === "ai" && (
                    <div className="ai-msg-avatar">
                      <span>✦</span>
                    </div>
                  )}

                  <div className="ai-msg-bubble">
                    <div className="ai-msg-content">
                      {m.text.split("\n\n").map((paragraph, pIdx) => (
                        <p key={pIdx}>
                          {paragraph.split("\n").map((line, lIdx) => {
                            // Simple markdown-style bold highlighter
                            const parts = line.split(/(\*\*.*?\*\*)/g);
                            return (
                              <span key={lIdx} style={{ display: "block" }}>
                                {parts.map((part, partIdx) => {
                                  if (part.startsWith("**") && part.endsWith("**")) {
                                    return (
                                      <strong key={partIdx} className="ai-highlight-text">
                                        {part.slice(2, -2)}
                                      </strong>
                                    );
                                  }
                                  return part;
                                })}
                              </span>
                            );
                          })}
                        </p>
                      ))}
                    </div>

                    {/* Contextual Action Buttons */}
                    {m.action && (
                      <div className="ai-msg-actions">
                        {m.action === "projects" && (
                          <button
                            className="ai-action-btn"
                            onClick={() => handleActionClick("projects")}
                          >
                            <i className="fa-solid fa-cube"></i> {t.copilot?.actionProjects || "View Projects"}
                          </button>
                        )}
                        {m.action === "contact" && (
                          <a
                            href="https://t.me/phonlyhor79"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ai-action-btn"
                          >
                            <i className="fa-brands fa-telegram"></i> {t.copilot?.actionContact || "Telegram Chat"}
                          </a>
                        )}
                        {m.action === "cv" && (
                          <button
                            className="ai-action-btn"
                            onClick={() => handleActionClick("cv")}
                          >
                            <i className="fa-solid fa-file-arrow-down"></i> {t.copilot?.actionCv || "Download CV"}
                          </button>
                        )}
                      </div>
                    )}

                    <span className="ai-msg-time">{m.timestamp}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="ai-message-row ai-row">
                  <div className="ai-msg-avatar">
                    <span>✦</span>
                  </div>
                  <div className="ai-msg-bubble ai-typing-bubble">
                    <span className="ai-typing-dot"></span>
                    <span className="ai-typing-dot"></span>
                    <span className="ai-typing-dot"></span>
                    <span className="ai-typing-text">{t.copilot?.thinking || "Synthesizing answer..."}</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              className="ai-copilot-input-bar"
              onSubmit={(e) => {
                e.preventDefault();
                handleUserSend();
              }}
            >
              <div className="ai-input-wrap">
                <span className="ai-input-icon">✦</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={t.copilot?.inputPlaceholder || "Ask about Lyhor's tech stack, POS, or hiring..."}
                />
              </div>
              <button
                type="submit"
                className="ai-send-btn"
                disabled={!inputVal.trim() || isTyping}
                title="Send"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AiCopilot;
