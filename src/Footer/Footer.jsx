import "../css/Footer/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left: Branding */}
        <div className="footer-col brand">
          <h3>Phon Lyhor</h3>
          <p>Building digital experiences that inspire.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right: Connect */}
        <div className="footer-col connect">
          <h4>Connect With Me</h4>
          <div className="footer-social">
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Phon Lyhor. Crafted with passion and precision. Made with ❤️ in
          Cambodia
        </p>
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
