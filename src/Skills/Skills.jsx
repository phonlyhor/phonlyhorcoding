import { useEffect } from "react";
import "../css/Skills/Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "UI/UX Design",
      items: [
        { name: "Figma", percent: 90 },
        { name: "User Research", percent: 85 },
        { name: "Prototyping", percent: 88 },
        { name: "Design Systems", percent: 82 },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", percent: 92 },
        { name: "HTML/CSS", percent: 95 },
        { name: "TypeScript", percent: 85 },
        { name: "Vite", percent: 80 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "PHP / Laravel", percent: 82 },
        { name: "MySQL", percent: 80 },
        { name: "C++", percent: 75 },
        { name: "Node.js", percent: 78 },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", percent: 88 },
        { name: "VS Code", percent: 92 },
        { name: "Adobe Suite", percent: 78 },
        { name: "Postman", percent: 85 },
      ],
    },
  ];

  // ✅ Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

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
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <p className="sub-title">SKILLS</p>
        <h2 className="title">
          My <span className="highlight">expertise</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card">
            <h3>{category.category}</h3>

            <div className="skill-list">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.percent}%</span>
                  </div>

                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ "--progress": `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
