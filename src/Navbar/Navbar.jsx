import { memo, useEffect, useRef, useState } from "react";

import "../css/Navbar/Navbar.css";
import pic from "../assets/pic.jpg";

const Navbar = () => {
  const textRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // =========================
  // PARTICLE BACKGROUND
  // =========================
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(56,189,248,0.6)";
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
      for (let i = 0; i < 60; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            Math.random() * 2,
          ),
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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // =========================
  // TYPING ANIMATION
  // =========================
  useEffect(() => {
    const phrases = [
      "Software Engineer",
      "Web Developer",
      "Point Of Sale System",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = phrases[phraseIndex];
      const el = textRef.current;

      if (!el) return;

      if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === current.length) {
          isDeleting = true;
          setTimeout(type, 1500);
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

      setTimeout(type, isDeleting ? 60 : 100);
    };

    type();
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <canvas id="particleCanvas"></canvas>

      <nav className="navbar">
        <div className="logo">
          <a className="logo" href="/">
            PHL...
          </a>
        </div>

        {/* Hamburger */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links (SCROLL) */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          {/* Keep these as pages if needed */}
          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button className="icon-btn">🌐 EN</button>
          <button className="cta-nav">
            <a
              className="logo"
              style={{ textDecoration: "none" }}
              href="https://t.me/phonlyhor79"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-nav"
            >
              Let's Talk
            </a>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="container">
        <main className="hero">
          <div className="hero-content reveal-left">
            <div className="badge reveal">Available for work</div>

            <h1 className="reveal">
              Hi, I'm <span className="highlight">Phon Lyhor</span>
            </h1>

            <div className="typing-container reveal">
              <span ref={textRef}></span>
              <span className="cursor">|</span>
            </div>

            <p className="reveal">
              Crafting premium digital experiences at the intersection of design
              and engineering.
            </p>

            <div className="buttons reveal">
              <button className="btn-primary">
                <a style={{ textDecoration: "none" }} href="#projects">
                  View Projects
                </a>
              </button>
              <button className="btn-secondary">Hire Me</button>
            </div>
          </div>

          <div className="hero-image reveal-right">
            <div className="circle-glow">
              <img src={pic} alt="Profile" />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default memo(Navbar);
