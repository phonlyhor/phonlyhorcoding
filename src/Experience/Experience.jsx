import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/Experience/Experience.css";

const Experience = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 150);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header reveal">
        <p className="sub-title">{t.experience.tag}</p>
        <h2 className="title">
          {t.experience.titleStart} <span className="highlight">{t.experience.titleEnd}</span>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {t.experience.items.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="date">{exp.date}</span>
                <span className="company-badge">
                  <i className="fa-solid fa-briefcase"></i> {exp.company}
                </span>
              </div>
              <h3>{exp.role}</h3>
              <p>{exp.description}</p>
              <ul className="timeline-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-check"></i> {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
