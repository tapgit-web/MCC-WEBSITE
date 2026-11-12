import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowUp, FaWhatsapp } from "react-icons/fa";
import logoImg from "../images/mcc_logo.jpg";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const whatsappNumber = "919087589685";
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your instrumentation, control valves, and automation solutions."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="cira-footer">
      <div className="cira-container cira-footer__top">
        <div className="cira-footer__grid">
          {/* Brand Column */}
          <div className="cira-footer__brand">
            <div className="cira-footer__logo-wrap">
              <img src={logoImg} alt="Madras Control Components" className="cira-footer__logo" />
              <div className="cira-footer__brand-text">
                <strong>MADRAS CONTROL</strong>
                <span>COMPONENTS</span>
              </div>
            </div>
            <p className="cira-footer__desc">
              Madras Control Components (MCC) — Process Instrumentation, Control &amp; ON/OFF Valves, PLC/DCS Automation, and NABL
              Accredited Calibration Solutions since 2016.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="cira-footer__heading">Company</h3>
            <ul className="cira-footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/Aboutus">About Us</Link></li>
              <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Key Categories */}
          <div>
            <h3 className="cira-footer__heading">Key Solutions</h3>
            <ul className="cira-footer__links">
              <li><Link to="/products/flow%20measurement">Flow Measurement</Link></li>
              <li><Link to="/products/level%20measurement">Level Measurement</Link></li>
              <li><Link to="/products/pressure%20measurement">Pressure Measurement</Link></li>
              <li><Link to="/products/valve">Control &amp; ON/OFF Valves</Link></li>
              <li><Link to="/products/plc%20%26%20dcs%20solutions">PLC &amp; DCS Automation</Link></li>
            </ul>
          </div>

          {/* Offices */}
          <div className="cira-footer__offices">
            <h3 className="cira-footer__heading">Offices</h3>

            <div className="cira-footer-office">
              <span className="cira-footer-office__tag">Office Address (Chennai)</span>
              <p>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>#7/3 Krishna Bhavanam, D.B. Shanmugam Street, Ayanavaram, Chennai – 600023</span>
              </p>
              <a href="mailto:kpr@mcc-inst.in">
                <FaEnvelope aria-hidden="true" /> kpr@mcc-inst.in
              </a>
              <a href="tel:+919087589685">
                <FaPhoneAlt aria-hidden="true" /> +91 90875 89685
              </a>
            </div>

            <div className="cira-footer-office">
              <span className="cira-footer-office__tag">Workshop Address (Chennai)</span>
              <p>
                <FaMapMarkerAlt aria-hidden="true" />
                <span>#5/2 Ranga Pillai Garden Street, Old Washermanpet, Chennai – 600021</span>
              </p>
              <a href="mailto:sales@mcc-inst.in">
                <FaEnvelope aria-hidden="true" /> sales@mcc-inst.in
              </a>
              <a href="tel:+918072007294">
                <FaPhoneAlt aria-hidden="true" /> +91 80720 07294
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="cira-footer__bottom">
        <div className="cira-container cira-footer__bottom-inner">
          <p className="m-0">
            Copyright © {new Date().getFullYear()} <strong>Madras Control Components</strong>. All Rights Reserved.
          </p>
          <div className="cira-footer__legal">
            <Link to="/Aboutus">Company</Link>
            <span aria-hidden="true">•</span>
            <Link to="/products">Catalogue</Link>
            <span aria-hidden="true">•</span>
            <Link to="/Contact">Support</Link>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="cira-fab-stack">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="cira-fab cira-fab--whatsapp"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cira-fab cira-fab--top"
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
