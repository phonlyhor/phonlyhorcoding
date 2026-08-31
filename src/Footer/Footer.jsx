import { useLanguage } from "../context/LanguageContext";
import "../css/Footer/Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Branding */}
        <div className="footer-col brand">
          <div className="footer-brand-logo">
            <div className="logo-badge">PL</div>
            <h3>Phon Lyhor</h3>
          </div>
          <p>{t.footer.desc}</p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="footer-col links">
          <h4>{t.footer.navTitle}</h4>
          <ul>
            <li>
              <a href="#hero"><i className="fa-solid fa-chevron-right"></i> {t.nav.about}</a>
            </li>
            <li>
              <a href="#about"><i className="fa-solid fa-chevron-right"></i> {t.nav.about}</a>
            </li>
            <li>
              <a href="#skills"><i className="fa-solid fa-chevron-right"></i> {t.nav.skills}</a>
            </li>
            <li>
              <a href="#services"><i className="fa-solid fa-chevron-right"></i> {t.nav.services}</a>
            </li>
            <li>
              <a href="#projects"><i className="fa-solid fa-chevron-right"></i> {t.nav.projects}</a>
            </li>
            <li>
              <a href="#contact"><i className="fa-solid fa-chevron-right"></i> {t.nav.contact}</a>
            </li>
          </ul>
        </div>

        {/* Right: Connect */}
        <div className="footer-col connect">
          <h4>{t.footer.socialTitle}</h4>
          <p style={{ marginBottom: "16px", fontSize: "14px" }}>
            {t.footer.socialText}
          </p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://t.me/phonlyhor79" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
            <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t.footer.copyright}</p>
        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
