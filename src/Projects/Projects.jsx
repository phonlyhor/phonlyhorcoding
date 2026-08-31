import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../context/LanguageContext";
import coffeePosImg from "../assets/coffee_pos.png";
import schoolMgmtImg from "../assets/school_management.png";
import liihorrImg from "../assets/liihorr_food.png";
import khmerLearningImg from "../assets/khmer_learning.png";
import "../css/Projects/Projects.css";

const Projects = () => {
  const { lang, t } = useLanguage();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const rawProjects = [
    {
      id: 1,
      categoryKey: 1, // Web Apps
      imgSrc: khmerLearningImg,
      tags: ["React", "E-Learning", "PDF Exams", "Web Platform"],
      icon: "fa-solid fa-book-open-reader",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      title: lang === "km" ? "វេទិកាសិក្សាអនឡាញ Khmer Learning (ថ្នាក់ទី១-១២)" : "Khmer Learning K12 E-Learning Platform",
      description: lang === "km" ? "វេទិកាសិក្សាអនឡាញ (Khmer Learning) ផ្តល់ជូនសៀវភៅពុម្ពរដ្ឋ កម្រងវិញ្ញាសាប្រឡងបាក់ឌុប-ឌុប PDF អត្ថបទកែចម្លើយ និងមេរៀនចាប់ពីថ្នាក់ទី១ ដល់ថ្នាក់ទី១២ ឥតគិតថ្លៃសម្រាប់សិស្សានុសិស្ស។" : "Comprehensive K12 E-Learning Platform (Khmer Learning) providing free digital textbooks, BacII national exam PDF papers, answer keys, and online lessons for Grade 1 through Grade 12 students across Cambodia.",
      features: lang === "km" ? [
        "បណ្ណាល័យមេរៀន និងសៀវភៅពុម្ពរដ្ឋថ្នាក់ទី១ ដល់ទី១២",
        "កម្រងវិញ្ញាសាប្រឡងបាក់ឌុប & អត្ថបទកែចម្លើយជា PDF",
        "ប្រភពសិក្សាឥតគិតថ្លៃមានសិស្សជាង 20,000+ នាក់កំពុងប្រើប្រាស់",
        "ការរចនាទម្រង់ Dark theme ទំនើប និងឧបករណ៍ស្វែងរកតាមមុខវិជ្ជា"
      ] : [
        "Grade 1 - 12 (ថ្នាក់ទី១-១២) complete curriculum library",
        "BacII National Exam papers & PDF answer keys download",
        "Free online learning resources trusted by 20,000+ active Cambodian students",
        "Modern dark theme design with subject filters & PDF viewers"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: 2,
      categoryKey: 1, // Web Apps
      imgSrc: schoolMgmtImg,
      tags: ["React", "Laravel", "MySQL", "School Management"],
      icon: "fa-solid fa-graduation-cap",
      gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
      title: lang === "km" ? "ប្រព័ន្ធគ្រប់គ្រងសាលារៀន វិទ្យាល័យ ហ៊ុន សែន ចំការលើ" : "HS Chamkar Loe School Management Portal",
      description: lang === "km" ? "ប្រព័ន្ធគ្រប់គ្រងសាលារៀន និងវិទ្យាល័យ (វិទ្យាល័យ ហ៊ុន សែន ចំការលើ) រួមមានការគ្រប់គ្រងសិស្ស-គ្រូ វត្តមានប្រចាំថ្ងៃ កាលវិភាគបង្រៀន និងទម្រង់មុខជាភាសាខ្មែរ។" : "Comprehensive High School Management Portal (HS Chamkar Loe) featuring student & teacher administration, daily attendance monitoring, class schedule management, and Khmer/English interface.",
      features: lang === "km" ? [
        "ផ្ទាំងបញ្ជាគ្រប់គ្រងទិន្នន័យសិស្ស និងគ្រូបង្រៀន (21+ សិស្ស, 22+ គ្រូ)",
        "ប្រព័ន្ធតាមដានវត្តមានប្រចាំថ្ងៃ (វត្តមាន/យឺត/ច្បាប់/អវត្តមាន)",
        "កាលវិភាគបង្រៀន & រៀនប្រចាំថ្ងៃកែប្រែបាន",
        "ទម្រង់មុខប្រើប្រាស់ជាភាសាខ្មែរ & អង់គ្លេស"
      ] : [
        "Admin Dashboard for Student & Teacher records (21+ Students, 22+ Teachers)",
        "Daily Attendance monitoring system (Present/Late/Absent)",
        "Live Today's Class Schedule generator & timetable",
        "Khmer & English dual-language interface"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      categoryKey: 2, // POS & Enterprise
      imgSrc: coffeePosImg,
      tags: ["React", "POS System", "Billing & Receipt", "MySQL"],
      icon: "fa-solid fa-mug-hot",
      gradient: "linear-gradient(135deg, #f59e0b, #ec4899)",
      title: lang === "km" ? "ប្រព័ន្ធលក់ទំនិញ POS ហាងកាហ្វេ & ភេសជ្ជៈ" : "Coffee & Drinks POS Billing System",
      description: lang === "km" ? "ប្រព័ន្ធលក់ទំនិញ POS ហាងកាហ្វេ & ភេសជ្ជៈ គាំទ្រការជ្រើសរើសមឺនុយតាមប្រភេទ (Caffe, Tea, Milk) កន្រ្តកទិញទំនិញ ការបញ្ចុះតម្លៃ និងការបោះពុម្ពវិក្កយបត្រ។" : "Modern Coffee Shop POS & Billing System featuring real-time drink menu categories (Caffe, Tea, Milk), shopping cart management, discount calculation, and instant receipt checkout.",
      features: lang === "km" ? [
        "ការបែងចែកប្រភេទទំនិញ & មឺនុយភេសជ្ជៈ (Caffe, Tea, Milk)",
        "កន្រ្តកទិញទំនិញកែប្រែចំនួនតាមតម្រូវការ (+/-)",
        "ការគណនាបញ្ចុះតម្លៃ (%) និងតម្លៃសរុបអូតូ",
        "ប៊ូតុង Checkout & បោះពុម្ពវិក្កយបត្រភ្លាមៗ"
      ] : [
        "Dynamic drink menu categorization (Caffe, Tea, Milk)",
        "Interactive Shopping Cart with quantity toggles (+/-)",
        "Discount (%) & subtotal calculation engine",
        "Instant Checkout & Print Receipt workflow"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      categoryKey: 1, // Web Apps
      imgSrc: liihorrImg,
      tags: ["React", "E-Commerce", "Food Delivery", "Redux"],
      icon: "fa-solid fa-utensils",
      gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      title: lang === "km" ? "ហាងកុម្ម៉ង់អាហារអនឡាញ LiiHorr Food & Delivery" : "LiiHorr Food & Delivery Platform",
      description: lang === "km" ? "វេទិកាកុម្ម៉ង់អាហារ និងភេសជ្ជៈអនឡាញទំនើប (LiiHorr) រួមមានបដាប្រូម៉ូសិន ស្វែងរកតាមប្រភេទអាហារ (Food, Drink, Fast Food) កាតបញ្ចុះតម្លៃពិសេស (40% OFF) មឺនុយពេញនិយម និងប្រព័ន្ធកន្រ្តកទំនិញ។" : "Modern Online Food & Beverage Ordering Platform (LiiHorr) featuring promotional hero banners, multi-category food filtering (Food, Drinks, Seafood, Fast Food), special promo cards (40% OFF), popular menu items, and cart badge system.",
      features: lang === "km" ? [
        "របារស្វែងរកតាមប្រភេទអាហារ (Food, Drink, Fast Food, Desserts)",
        "បដាប្រូម៉ូសិនអន្តរកម្ម & ការផ្តល់ជូនពិសេស (40% OFF)",
        "មឺនុយពេញនិយមមាន Badge បញ្ចុះតម្លៃ 30% & ប៊ូតុង Favorite",
        "ប្រព័ន្ធកន្រ្តកទំនិញ & ប្រព័ន្ធគណនីអ្នកប្រើប្រាស់"
      ] : [
        "Multi-category food filter sidebar (Food, Drink, Fast Food, Desserts)",
        "Interactive promotional hero banner & combo deals (40% OFF)",
        "Popular menu cards with discount badges & favorite wishlist buttons",
        "Integrated Cart badge & user authentication navbar"
      ],
      demoUrl: "https://github.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      categoryKey: 2, // POS & Enterprise
      isComingSoon: true,
      tags: ["React", "Laravel", "MySQL", "REST API"],
      icon: "fa-solid fa-cash-register",
      gradient: "linear-gradient(135deg, #4f46e5, #06b6d4)",
      title: lang === "km" ? "ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម & POS Enterprise" : "Enterprise Business Management POS System",
      description: lang === "km" ? "ប្រព័ន្ធគ្រប់គ្រងអាជីវកម្ម និងការលក់ពេញលេញ គាំទ្រការគ្រប់គ្រងស្តុក Real-time របាយការណ៍លក់ បោះពុម្ពវិក្កយបត្រ និងការបែងចែកសិទ្ធិអ្នកប្រើប្រាស់ (កំពុងអភិវឌ្ឍន៍)។" : "Full-featured Business Management & Point of Sale application supporting real-time inventory management, sales reporting, receipt generation, and role authentication (In Active Development).",
      features: lang === "km" ? [
        "ស្វែងរកទំនិញលឿន & គាំទ្រការស្កេនបារកូដ",
        "បោះពុម្ពវិក្កយបត្រអូតូ & ទាញយករ៉ាយការណ៍ជា PDF",
        "តាមដានស្តុក Real-time & ជូនដំណឹងស្តុកជិតអស់",
        "ការកំណត់សិទ្ធិអ្នកប្រើប្រាស់ (Admin, Cashier, Manager)"
      ] : [
        "Real-time product search & barcode scanning support",
        "Automated receipt printing & sales PDF export",
        "Inventory stock tracking & low-stock alerts",
        "Role-based access control (Admin, Cashier, Manager)"
      ],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      categoryKey: 3, // UI/UX Design
      isComingSoon: true,
      tags: ["Figma", "Design System", "Prototyping"],
      icon: "fa-solid fa-chart-line",
      gradient: "linear-gradient(135deg, #10b981, #3b82f6)",
      title: lang === "km" ? "ផ្ទាំងគ្រប់គ្រងទិន្នន័យ Analytics & ហិរញ្ញវត្ថុ" : "Analytics & Finance Dashboard UI",
      description: lang === "km" ? "ប្រព័ន្ធ Dashboard រចនាលើ Figma សម្រាប់បង្ហាញទិន្នន័យហិរញ្ញវត្ថុ ក្រាហ្វចំណូល កត់ត្រាសកម្មភាព និងឧបករណ៍របាយការណ៍ (កំពុងរចនា)។" : "Comprehensive UI/UX dashboard system designed for financial metrics visualization, revenue charts, user activity logs, and reporting tools (Design in Progress).",
      features: lang === "km" ? [
        "ប្រព័ន្ធរចនា Dark theme glassmorphism",
        "Wireframe អន្តរកម្ម និង Prototype កម្រិតខ្ពស់",
        "ក្រាហ្វ SVG & Widget តាមតម្រូវការ",
        "បណ្ណាល័យ UI Component អាចទាញយកបាន"
      ] : [
        "Dark theme glassmorphism design system",
        "Interactive wireframes and high-fidelity prototype",
        "Custom SVG charts and visual widgets",
        "Exportable UI component library"
      ],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = t.projects.categories;

  const filteredProjects =
    activeCategoryIndex === 0
      ? rawProjects
      : rawProjects.filter((p) => p.categoryKey === activeCategoryIndex);

  // Lock body scroll and add Escape key listener when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 80);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects, activeCategoryIndex]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header reveal">
        <p className="sub-title">{t.projects.tag}</p>
        <h2 className="title">
          {t.projects.titleStart} <span className="highlight">{t.projects.titleEnd}</span>
        </h2>
      </div>

      {/* Filter Navigation */}
      <div className="filter-nav reveal">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeCategoryIndex === idx ? "active" : ""}`}
            onClick={() => setActiveCategoryIndex(idx)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.isComingSoon ? "card-coming-soon" : ""}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-image-wrap">
              {project.imgSrc ? (
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="card-project-img"
                />
              ) : (
                <div
                  className="card-image-gradient"
                  style={{ background: project.gradient }}
                >
                  <i className={`${project.icon} card-image-icon`}></i>
                  {project.isComingSoon && (
                    <div className="coming-soon-overlay">
                      <span><i className="fa-solid fa-clock-rotate-left"></i> {lang === "km" ? "ឆាប់ៗនេះ" : "COMING SOON"}</span>
                    </div>
                  )}
                </div>
              )}
              {project.isComingSoon ? (
                <span className="card-badge coming-soon-badge">
                  <i className="fa-solid fa-sparkles"></i> {lang === "km" ? "ឆាប់ៗនេះ" : "Coming Soon"}
                </span>
              ) : (
                <span className="card-badge">{categories[project.categoryKey]}</span>
              )}
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-footer">
                <span className="details-link">
                  {t.projects.viewDetails} <i className="fa-solid fa-arrow-right"></i>
                </span>

                <div className="card-actions" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-btn"
                    title={t.projects.githubRepo}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-btn"
                    title={t.projects.livePreview}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal (Rendered via Portal directly to body) */}
      {selectedProject &&
        createPortal(
          <div
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div
                className={`modal-header-banner ${selectedProject.imgSrc ? "has-img" : ""}`}
                style={{ background: selectedProject.gradient }}
              >
                {selectedProject.imgSrc ? (
                  <img
                    src={selectedProject.imgSrc}
                    alt={selectedProject.title}
                    className="modal-project-img"
                  />
                ) : (
                  <div className="modal-gradient-coming">
                    <i className={selectedProject.icon}></i>
                    {selectedProject.isComingSoon && (
                      <span className="modal-cs-tag"><i className="fa-solid fa-clock-rotate-left"></i> {lang === "km" ? "ឆាប់ៗនេះ" : "Coming Soon"}</span>
                    )}
                  </div>
                )}
              </div>

              <div className="modal-body">
                <h2>{selectedProject.title}</h2>
                <span className="modal-category-tag">
                  {selectedProject.isComingSoon ? (lang === "km" ? "🚀 កំពុងអភិវឌ្ឍន៍ (ឆាប់ៗនេះ)" : "🚀 In Active Development (Coming Soon)") : categories[selectedProject.categoryKey]}
                </span>

                <p>{selectedProject.description}</p>

                <h4 className="modal-features-title">{t.projects.keyCapabilities}</h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-circle-check"></i> {feature}
                    </li>
                  ))}
                </ul>

                <div className="card-tags" style={{ marginBottom: "24px" }}>
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-brands fa-github"></i> {t.projects.githubRepo}
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-globe"></i> {t.projects.livePreview}
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Projects;
