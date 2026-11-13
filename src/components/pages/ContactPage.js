import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhoneCall, FiMail, FiCheckCircle, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./ContactPage.css";
import AnimatedSection from "../animation/AnimatedSection";
import backImg from "../images/back1.png";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validateField = (name, value) => {
    const val = value.trim();
    if (name === "name" && !val) return "Please enter your full name.";
    if (name === "email") {
      if (!val) return "Please enter your email address.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Please enter a valid email address.";
    }
    if (name === "message" && !val) return "Please tell us about your product or service requirement.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    if (err || errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    const hasError = Object.values(newErrors).some(Boolean);
    setErrors(newErrors);

    if (hasError) {
      if (newErrors.name) nameRef.current?.focus();
      else if (newErrors.email) emailRef.current?.focus();
      else if (newErrors.message) messageRef.current?.focus();
      return;
    }

    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello Madras Control Components,\nName: ${formData.name}\nCompany: ${formData.company || "N/A"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\nEnquiry: ${formData.message}`
  );
  const mailtoSubject = encodeURIComponent(`Technical Enquiry from ${formData.name}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nCompany: ${formData.company || "N/A"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\nMessage:\n${formData.message}`
  );

  return (
    <div className="cira-contact-page">
      {/* Page Hero */}
      <section className="cira-page-hero">
        <div className="cira-container cira-page-hero__inner">
          <span className="cira-eyebrow cira-eyebrow--dark">Get in Touch</span>
          <h1 className="cira-page-hero__title">
            Instrumentation, Control Valves &amp; <span>Automation Solutions</span>
          </h1>
          <p className="cira-page-hero__desc">
            Connect with our Ayanavaram Office or Old Washermanpet Workshop in Chennai for technical sizing, product catalogues, calibration scheduling, or AMC support.
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span aria-current="page">Contact Us</span>
          </nav>
        </div>
      </section>

      {/* Offices & Banner Visual */}
      <AnimatedSection>
        <section className="cira-contact-offices">
          <div className="cira-container">
            <div className="cira-office-banner">
              <img
                src={backImg}
                alt="Madras Control Components Industrial Engineering"
                className="cira-office-banner__img"
              />
              <div className="cira-office-banner__scrim" aria-hidden="true" />

              <div className="cira-offices-grid">
                <article className="cira-office-card">
                  <span className="cira-office-card__badge">Office Address</span>
                  <h2>Ayanavaram Office, Chennai</h2>
                  <p className="cira-office-card__addr">
                    <FiMapPin aria-hidden="true" />
                    <span>
                      Madras Control Components<br />
                      #7/3 Krishna Bhavanam, D.B. Shanmugam Street, Ayanavaram, Chennai – 600023
                    </span>
                  </p>
                  <div className="cira-office-card__links">
                    <a href="tel:+919087589685">
                      <FiPhoneCall aria-hidden="true" /> +91 90875 89685
                    </a>
                    <a href="mailto:kpr@mcc-inst.in">
                      <FiMail aria-hidden="true" /> kpr@mcc-inst.in
                    </a>
                  </div>
                </article>

                <article className="cira-office-card">
                  <span className="cira-office-card__badge cira-office-card__badge--blue">Workshop Address</span>
                  <h2>Old Washermanpet Workshop</h2>
                  <p className="cira-office-card__addr">
                    <FiMapPin aria-hidden="true" />
                    <span>
                      Madras Control Components<br />
                      #5/2 Ranga Pillai Garden Street, Old Washermanpet, Chennai – 600021
                    </span>
                  </p>
                  <div className="cira-office-card__links">
                    <a href="tel:+919841387998">
                      <FiPhoneCall aria-hidden="true" /> +91 98413 87998
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Enquiry Form & Map */}
      <AnimatedSection>
        <section className="cira-contact-main">
        <div className="cira-container cira-contact-grid">
          <div className="cira-form-panel">
            <span className="cira-eyebrow">Enquire Now</span>
            <h2 className="cira-form-panel__title">Send a Technical Enquiry</h2>
            <p className="cira-form-panel__sub">
              Share your process requirements, instrument model, or calibration scope and our team will respond promptly.
            </p>

            {submitted ? (
              <div className="cira-form-success" role="status" aria-live="polite">
                <FiCheckCircle className="cira-form-success__icon" aria-hidden="true" />
                <h3>Enquiry Prepared</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Choose your preferred channel below to send your enquiry directly to our engineering desk:
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  <a
                    href={`mailto:kpr@mcc-inst.in?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="cira-btn cira-btn--primary"
                  >
                    <FiMail aria-hidden="true" /> Send via Email
                  </a>
                  <a
                    href={`https://wa.me/919087589685?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cira-btn cira-btn--navy"
                  >
                    <FaWhatsapp aria-hidden="true" /> Send via WhatsApp
                  </a>
                  <button
                    type="button"
                    className="cira-btn cira-btn--outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(INITIAL_FORM);
                    }}
                  >
                    New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form className="cira-contact-form" onSubmit={handleSubmit} noValidate>
                <div className="cira-field">
                  <label htmlFor="contact-name">
                    Full Name <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    placeholder="e.g. Rajesh Kumar"
                  />
                  {errors.name && (
                    <span id="contact-name-error" className="cira-field-error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="cira-field">
                  <label htmlFor="contact-email">
                    Email Address <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <input
                    ref={emailRef}
                    id="contact-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck={false}
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <span id="contact-email-error" className="cira-field-error" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="cira-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98XXX XXXXX"
                  />
                </div>

                <div className="cira-field">
                  <label htmlFor="contact-company">Company Name</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your plant or organization name"
                  />
                </div>

                <div className="cira-field">
                  <label htmlFor="contact-message">
                    Requirement / Message <span aria-hidden="true" className="text-danger">*</span>
                  </label>
                  <textarea
                    ref={messageRef}
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    placeholder="Specify instrument type, process medium, line size, or service needed..."
                  />
                  {errors.message && (
                    <span id="contact-message-error" className="cira-field-error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="cira-btn cira-btn--primary w-100">
                  <FiSend aria-hidden="true" /> Submit Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="cira-map-panel">
            <div className="cira-map-card">
              <div className="cira-map-card__head">
                <h2>Office Location</h2>
                <span>Ayanavaram, Chennai – 600023</span>
              </div>
              <div className="cira-map-frame">
                <iframe
                  title="Madras Control Components Chennai Office Map"
                  src="https://maps.google.com/maps?q=D.B.+Shanmugam+Street,+Ayanavaram,+Chennai+600023&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </div>
  );
}

export default ContactSection;
