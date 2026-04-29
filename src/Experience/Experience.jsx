import { useEffect } from "react";
import "../css/Experience/Experience.css";

const Experience = () => {
  const experiences = [
    {
      date: "2024 – Present",
      role: "UI/UX Designer",
      description:
        "Designing intuitive and beautiful user experiences for web and mobile applications.",
    },
    {
      date: "2023 – Present",
      role: "Web Developer",
      description:
        "Building responsive, performant web applications using modern frameworks and best practices.",
    },
    {
      date: "2022 – 2024",
      role: "System Analyst",
      description: "Analyzing and improving business processes and systems.",
    },
  ];

  // 🔥 scroll animation
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 150); // stagger effect
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <p className="sub-title">EXPERIENCE</p>
        <h2 className="title">
          My <span className="highlight">journey</span>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-line"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="date">{exp.date}</span>
              <h3>{exp.role}</h3>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
