import { memo, useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import "../css/Navbar/Navbar.css";
import pic from "../assets/5864.png";

const Navbar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const textRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");

  // =========================
  // SCROLL SPY FOR ACTIVE NAV
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "services", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveNav("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // PARTICLE BACKGROUND
  // =========================
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    let particles = [];

    class Particle {
      constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    function init() {
      particles = [];
      const darkColors = ["rgba(56,189,248,0.5)", "rgba(139,92,246,0.5)", "rgba(16,185,129,0.4)"];
      const lightColors = ["rgba(2,132,199,0.4)", "rgba(124,58,237,0.4)", "rgba(5,150,105,0.4)"];
      const colors = theme === "light" ? lightColors : darkColors;

      for (let i = 0; i < 50; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            (Math.random() - 0.5) * 0.6,
            (Math.random() - 0.5) * 0.6,
            Math.random() * 2.5 + 0.8,
            colors[Math.floor(Math.random() * colors.length)]
          )
        );
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    const resizeHandler = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  // =========================
  // TYPING ANIMATION
  // =========================
  useEffect(() => {
    const phrases = t.hero.phrases;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const current = phrases[phraseIndex];
      const el = textRef.current;

      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isDeleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timer = setTimeout(type, isDeleting ? 40 : 80);
    };

    type();
    return () => clearTimeout(timer);
  }, [lang, t]);

  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient-light-1"></div>
      <div className="ambient-light-2"></div>
      <canvas id="particleCanvas"></canvas>

      {/* Backdrop for Mobile Drawer */}
      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <nav className="navbar">
        <a href="#hero" className="logo-link" onClick={() => setMenuOpen(false)}>
          <div className="logo-badge">PL</div>
          <div className="logo-text">
            Phon <span>Lyhor</span>
          </div>
        </a>

        {/* Nav Links Dropdown / Drawer */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a
            href="#about"
            className={activeNav === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.about}
          </a>
          <a
            href="#skills"
            className={activeNav === "skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.skills}
          </a>
          <a
            href="#services"
            className={activeNav === "services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.services}
          </a>
          <a
            href="#projects"
            className={activeNav === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.projects}
          </a>
          <a
            href="#experience"
            className={activeNav === "experience" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.experience}
          </a>
          <a
            href="#contact"
            className={activeNav === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {t.nav.contact}
          </a>

          {/* Mobile CTA Button */}
          <a
            href="https://t.me/phonlyhor79"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-nav mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-paper-plane fa-solid"></i> {t.nav.talk}
          </a>
        </div>

        {/* Right side container: Theme Toggle, Language Switcher right next to Telegram CTA */}
        <div className="nav-right-container">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme Mode"
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun icon-sun"></i>
            ) : (
              <i className="fa-solid fa-moon icon-moon"></i>
            )}
          </button>

          <button className="lang-btn" onClick={toggleLanguage} title="Switch Language">
            <span className="lang-globe">🌐</span>
            <span className="lang-code">{lang === "en" ? "KH" : "EN"}</span>
          </button>

          <a
            href="https://t.me/phonlyhor79"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-nav desktop-cta"
          >
            <i className="fa-paper-plane fa-solid"></i> {t.nav.talk}
          </a>

          {/* Mobile Hamburger Toggle */}
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-wrapper" id="hero">
        <main className="hero">
          <div className="hero-content reveal-left">
            <div className="status-badge">
              <span className="status-dot"></span>
              {t.hero.status}
            </div>

            <h1 className="reveal">
              {t.hero.greeting} <span className="highlight">{t.hero.name}</span>
            </h1>

            <div className="typing-container reveal">
              <span ref={textRef}></span>
              <span className="cursor">|</span>
            </div>

            <p className="hero-description reveal">
              {t.hero.description}
            </p>

            <div className="hero-buttons reveal">
              <a href="#projects" className="btn-primary">
                {t.hero.exploreBtn} <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href="#contact" className="btn-secondary">
                <i className="fa-regular fa-envelope"></i> {t.hero.contactBtn}
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper reveal-right">
            <div className="glowing-frame">
              <div className="glowing-frame-inner">
                <img src={pic} alt="Phon Lyhor Profile" />
              </div>
            </div>

            {/* Floating Info Badges */}
            <div className="float-badge top-left">
              <div className="badge-icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="badge-text">
                <strong>{t.hero.badge1Title}</strong>
                <span>{t.hero.badge1Sub}</span>
              </div>
            </div>

            <div className="float-badge bottom-right">
              <div className="badge-icon">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div className="badge-text">
                <strong>{t.hero.badge2Title}</strong>
                <span>{t.hero.badge2Sub}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default memo(Navbar);
