import { useState, useEffect } from "react";
import "../css/Projects/Projects.css";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tags: ["React", "Laravel", "MySQL"],
      category: "Web",
      gradient: "linear-gradient(135deg, #4f46e5, #8b5cf6)",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      tags: ["Figma", "React", "Tailwind"],
      category: "UI",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    },
    {
      id: 3,
      title: "Brand Identity System",
      tags: ["Illustrator", "Figma"],
      category: "Design",
      gradient: "linear-gradient(135deg, #db2777, #ec4899)",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      tags: ["React Native", "Firebase"],
      category: "UI",
      gradient: "linear-gradient(135deg, #10b981, #34d399)",
    },
    {
      id: 5,
      title: "Portfolio Website",
      tags: ["React", "CSS", "GSAP"],
      category: "Web",
      gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    },
    {
      id: 6,
      title: "Marketing Campaign",
      tags: ["Photoshop", "Canva"],
      category: "Design",
      gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    },
  ];

  const categories = ["All", "UI", "Web", "Design"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // 🔥 Scroll animation
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 100); // stagger effect
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <p className="sub-title">PROJECTS</p>
        <h2 className="title">
          Selected <span className="highlight">work</span>
        </h2>
      </div>

      <div className="filter-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="card-image"
              style={{ background: project.gradient }}
            ></div>

            <div className="card-content">
              <h3>{project.title}</h3>
              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
