import { useEffect } from "react";
import "../css/Services/Services.css";

const Services = () => {
  const servicesData = [
    {
      title: "UI/UX Design",
      description:
        "User-first, intuitive interfaces that delight and convert. Research-driven design with pixel-perfect execution.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"></path>
          <path d="M12 2v20M2 12h20"></path>
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Fast, secure, and responsive systems built with modern technologies. Clean code that scales.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
    },
    {
      title: "Software Development",
      description:
        "Visual storytelling & branding that captures attention and communicates your message powerfully.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
        </svg>
      ),
    },
  ];

  // 🔥 Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <p className="sub-title">SERVICES</p>
        <h2 className="title">
          What I <span className="highlight">offer</span>
        </h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-box">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
