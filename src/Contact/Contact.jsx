import { useState, useEffect } from "react";
import "../css/Contact/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  // 🔥 Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-form, .info-card, .social-links",
    );

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
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="sub-title">CONTACT</p>
        <h2 className="title">
          Let's work <span className="highlight">together</span>
        </h2>
      </div>

      <div className="contact-container">
        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-item">
              <div className="icon">📧</div>
              <div>
                <p className="label">Email</p>
                <p className="value">phonlyhor@email.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <p className="label">Phone</p>
                <p className="value">+855 88 905 9604</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <p className="label">Location</p>
                <p className="value">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
