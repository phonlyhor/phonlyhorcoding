import { memo } from "react";
import "../css/About/About.css";

const About = () => {
  return (
    <>
      <section id="about" className="about section">
        <div className="about-container">
          <div className="about-left reveal-left">
            <span className="section-tag">ABOUT</span>

            <h2>
              Turning ideas into
              <span className="gradient-text"> digital reality</span>
            </h2>

            <p>
              I'm a Web Development student and creative designer driven by a
              passion for building beautiful,
              <br /> functional digital experiences.
            </p>

            <p>
              From intuitive user interfaces to robust backend systems, I bring
              ideas to life with precision and creativity.
            </p>

            <button className="btn-download">
              <a
                style={{ textDecoration: "none" }}
                href="/public/cv/PhonLyhor.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ⬇ Download CV
              </a>
            </button>
          </div>

          <div className="about-card reveal-right">
            <h3>Education</h3>
            <p className="card-title">Web Development</p>
            <span className="card-sub">Currently pursuing degree</span>

            <hr />

            <h3>Focus Areas</h3>
            <div className="tags">
              <span>Application Programming Interface</span>
              <span>Frontend Dev</span>
              <span>Backend Dev</span>
              <span>Branding</span>
            </div>
          </div>
        </div>

        <div className="stats">
          <div className="stat reveal">
            <h3>0</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat reveal">
            <h3>10+</h3>
            <p>Projects Done</p>
          </div>

          <div className="stat reveal">
            <h3>15+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat reveal">
            <h3>5+</h3>
            <p>Awards</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(About);
