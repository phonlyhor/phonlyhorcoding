import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/Services/Services.css";

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    "fa-solid fa-code",
    "fa-solid fa-cash-register",
    "fa-solid fa-pen-ruler",
    "fa-solid fa-network-wired",
    "fa-solid fa-cart-shopping",
    "fa-solid fa-sliders"
  ];

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
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-header reveal">
        <p className="sub-title">{t.services.tag}</p>
        <h2 className="title">
          {t.services.titleStart} <span className="highlight">{t.services.titleEnd}</span>
        </h2>
      </div>

      <div className="services-grid">
        {t.services.items.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-hud-corner tl"></div>
            <div className="card-hud-corner tr"></div>
            <div className="card-hud-corner bl"></div>
            <div className="card-hud-corner br"></div>
            <div className="service-beam-sweep"></div>

            <div className="icon-box">
              <i className={icons[index] || "fa-solid fa-cube"}></i>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}>
                  <i className="fa-solid fa-check"></i> {feature}
                </li>
              ))}
            </ul>
            <a href="#contact" className="service-action-btn">
              {t.services.inquireBtn} <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
