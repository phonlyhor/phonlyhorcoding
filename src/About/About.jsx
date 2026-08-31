import { memo } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/About/About.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-left reveal-left">
          <span className="section-tag">{t.about.tag}</span>

          <h2>
            {t.about.titleStart}{" "}
            <span className="gradient-text">{t.about.titleEnd}</span>
          </h2>

          <p>{t.about.desc1}</p>

          <p>{t.about.desc2}</p>

          <div className="about-highlights">
            <div className="about-highlight-item">
              <i className="fa-solid fa-circle-check"></i> {t.about.h1}
            </div>
            <div className="about-highlight-item">
              <i className="fa-solid fa-circle-check"></i> {t.about.h2}
            </div>
            <div className="about-highlight-item">
              <i className="fa-solid fa-circle-check"></i> {t.about.h3}
            </div>
            <div className="about-highlight-item">
              <i className="fa-solid fa-circle-check"></i> {t.about.h4}
            </div>
          </div>

          <a
            className="btn-download"
            href="/cv/phonlyhorcv.pdf"
            download="Phonlyhor_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-download"></i> {t.about.downloadCv}
          </a>
        </div>

        <div className="about-card reveal-right">
          <h3>
            <i className="fa-solid fa-graduation-cap"></i> {t.about.eduTitle}
          </h3>
          <p className="card-title">{t.about.degree}</p>
          <span className="card-sub">{t.about.degreeSub}</span>

          <hr />

          <h3>
            <i className="fa-solid fa-layer-group"></i> {t.about.focusTitle}
          </h3>
          <div className="tags">
            {t.about.tags.map((tag, idx) => (
              <span key={idx}>
                <i className="fa-solid fa-code"></i> {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat reveal">
          <h3>{t.about.stat1Val}</h3>
          <p>{t.about.stat1Lbl}</p>
        </div>

        <div className="stat reveal">
          <h3>{t.about.stat2Val}</h3>
          <p>{t.about.stat2Lbl}</p>
        </div>

        <div className="stat reveal">
          <h3>{t.about.stat3Val}</h3>
          <p>{t.about.stat3Lbl}</p>
        </div>

        <div className="stat reveal">
          <h3>{t.about.stat4Val}</h3>
          <p>{t.about.stat4Lbl}</p>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
