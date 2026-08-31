import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/Skills/Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t.skills.categories.frontend,
      icon: "fa-brands fa-react",
      items: [
        { name: "React.js", percent: 92, icon: "fa-brands fa-react" },
        { name: "JavaScript / ES6+", percent: 90, icon: "fa-brands fa-js" },
        { name: "HTML5 / CSS3", percent: 95, icon: "fa-brands fa-html5" },
        { name: "TypeScript", percent: 85, icon: "fa-solid fa-code" },
      ],
    },
    {
      category: t.skills.categories.backend,
      icon: "fa-solid fa-server",
      items: [
        { name: "Java & Spring Boot", percent: 90, icon: "fa-brands fa-java" },
        { name: "PHP / Laravel", percent: 88, icon: "fa-brands fa-laravel" },
        { name: "Node.js & Express", percent: 82, icon: "fa-brands fa-node-js" },
        { name: "C++ Programming", percent: 78, icon: "fa-solid fa-microchip" },
      ],
    },
    {
      category: t.skills.categories.uiux,
      icon: "fa-solid fa-pen-nib",
      items: [
        { name: "Figma Prototyping", percent: 90, icon: "fa-brands fa-figma" },
        { name: "User Research & Wireframing", percent: 85, icon: "fa-solid fa-diagram-project" },
        { name: "Design Systems & Tokens", percent: 88, icon: "fa-solid fa-swatchbook" },
        { name: "Responsive Layout Architecture", percent: 92, icon: "fa-solid fa-mobile-screen" },
      ],
    },
    {
      category: t.skills.categories.tools,
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        { name: "Git & GitHub", percent: 90, icon: "fa-brands fa-git-alt" },
        { name: "VS Code Environment", percent: 95, icon: "fa-solid fa-laptop-code" },
        { name: "Postman API Testing", percent: 88, icon: "fa-solid fa-paper-plane" },
        { name: "Vite & Build Tools", percent: 85, icon: "fa-solid fa-bolt" },
      ],
    },
  ];

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
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header reveal">
        <p className="sub-title">{t.skills.tag}</p>
        <h2 className="title">
          {t.skills.titleStart} <span className="highlight">{t.skills.titleEnd}</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-card">
            <div className="skill-card-header">
              <div className="skill-card-icon">
                <i className={category.icon}></i>
              </div>
              <h3>{category.category}</h3>
            </div>

            <div className="skill-list">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-info">
                    <div className="skill-name">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percent">{skill.percent}%</span>
                  </div>

                  <div className="progress-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.percent}%` }}
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
