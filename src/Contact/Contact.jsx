import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../css/Contact/Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subjectIndex: 0,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const subjects = t.contact.subjects;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subjectIndex: 0,
        message: "",
      });
    }, 4000);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".contact-form, .info-card, .social-links-wrapper"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, index * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header reveal">
        <p className="sub-title">{t.contact.tag}</p>
        <h2 className="title">
          {t.contact.titleStart} <span className="highlight">{t.contact.titleEnd}</span>
        </h2>
      </div>

      <div className="contact-container">
        {/* Form */}
        <form className="contact-form reveal-left" onSubmit={handleSubmit}>
          {isSubmitted && (
            <div className="form-success-banner">
              <i className="fa-solid fa-circle-check"></i> {t.contact.successMsg}
            </div>
          )}

          <div className="form-group">
            <label>{t.contact.interestLabel}</label>
            <div className="subject-options">
              {subjects.map((sub, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={`subject-chip ${formData.subjectIndex === idx ? "selected" : ""}`}
                  onClick={() => setFormData({ ...formData, subjectIndex: idx })}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>{t.contact.nameLabel}</label>
            <input
              type="text"
              name="name"
              placeholder={t.contact.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>{t.contact.emailLabel}</label>
            <input
              type="email"
              name="email"
              placeholder={t.contact.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>{t.contact.messageLabel}</label>
            <textarea
              name="message"
              placeholder={t.contact.messagePlaceholder}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {t.contact.sendBtn} <i className="fa-paper-plane fa-solid"></i>
          </button>
        </form>

        {/* Info Side */}
        <div className="contact-info reveal-right">
          <div className="info-card">
            <div className="info-item">
              <div className="info-left">
                <div className="info-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="info-details">
                  <p className="label">{t.contact.emailAddrLabel}</p>
                  <p className="value">phonlyhor@email.com</p>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard("phonlyhor@email.com", "email")}
              >
                {copiedField === "email" ? (
                  <>
                    <i className="fa-solid fa-check"></i> {t.contact.copiedBtn}
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy"></i> {t.contact.copyBtn}
                  </>
                )}
              </button>
            </div>

            <div className="info-item">
              <div className="info-left">
                <div className="info-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="info-details">
                  <p className="label">{t.contact.phoneLabel}</p>
                  <p className="value">+855 88 905 9604</p>
                </div>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={() => copyToClipboard("+855 88 905 9604", "phone")}
              >
                {copiedField === "phone" ? (
                  <>
                    <i className="fa-solid fa-check"></i> {t.contact.copiedBtn}
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy"></i> {t.contact.copyBtn}
                  </>
                )}
              </button>
            </div>

            <div className="info-item">
              <div className="info-left">
                <div className="info-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info-details">
                  <p className="label">{t.contact.locationLabel}</p>
                  <p className="value">{t.contact.locationVal}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-links-wrapper">
            <span className="social-title">{t.contact.socialConnect}</span>
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
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://t.me/phonlyhor79"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://web.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
