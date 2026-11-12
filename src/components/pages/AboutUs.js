import React from "react";
import { Link } from "react-router-dom";
import { FiActivity, FiCpu, FiSettings, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";
import "./Aboutus.css";
import vitonWnrvImg from "../images/product/valve/viton_pn40_wnrv.jpg";
import doubleDiscBfvImg from "../images/product/valve/double_disc_bfv.jpg";
import threeWayPfaImg from "../images/product/valve/3way_pfa_lined_bv.jpg";

const OFFERINGS = [
  {
    icon: <FiActivity aria-hidden="true" />,
    title: "Process Instruments",
    desc: "Flow, Level, Pressure, Temperature, and Vibration Monitoring engineered for accuracy and reliability.",
    link: "/products/flow%20measurement",
  },
  {
    icon: <FiCpu aria-hidden="true" />,
    title: "Automation (PLC / DCS)",
    desc: "System integration, control panel engineering, commissioning, and annual maintenance contracts.",
    link: "/products/plc%20%26%20dcs%20solutions",
  },
  {
    icon: <FiSettings aria-hidden="true" />,
    title: "Valves (Control & ON/OFF)",
    desc: "Ball valves, FEP/PFA lined butterfly valves, and pneumatic actuators for critical process isolation.",
    link: "/products/valve",
  },
];

const CUSTOM_CLIENT_PRODUCTS = [
  {
    client: "L&T",
    name: "Viton Seated PN40 WNRV",
    image: vitonWnrvImg,
    detail: "Custom high-pressure Wafer Non-Return Valve engineered with Viton sealing for demanding industrial service.",
  },
  {
    client: "Hikal",
    name: "Double Disc BFV",
    image: doubleDiscBfvImg,
    detail: "Tailor-made Double Disc Butterfly Valve built to meet specialized chemical process isolation requirements.",
  },
  {
    client: "Hikal",
    name: "3-Way PFA Lined Ball Valve",
    image: threeWayPfaImg,
    detail: "Corrosion-resistant 3-Way PFA Lined Ball Valve designed specifically for aggressive chemical media diversion.",
  },
];

const VERTICALS = [
  "Water Distribution",
  "Net Zero & Sustainability",
  "Food & Beverage",
  "Power Generation",
  "Chemical & Petrochemical",
  "Cement",
  "Pulp & Paper",
  "Sugar",
];

const AboutUs = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="cira-page-hero">
        <div className="cira-container cira-page-hero__inner">
          <span className="cira-eyebrow cira-eyebrow--dark">Company Profile</span>
          <h1 className="cira-page-hero__title">
            About <span>Madras Control Components</span>
          </h1>
          <p className="cira-page-hero__desc">
            An industrial instrumentation &amp; automation company backed by more than 2 decades of expertise across instrumentation, valve manufacturing, and turnkey automation.
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span aria-current="page">About Us</span>
          </nav>
        </div>
      </section>

      {/* Sub-Navigation Strip */}
      <div className="cira-about-nav-strip">
        <div className="cira-container cira-about-tabs">
          <a href="#vision-mission-section" className="cira-btn cira-btn--primary">
            What We Do
          </a>
          <a href="#client-engineered-products" className="cira-btn cira-btn--outline">
            Client-Developed Products
          </a>
          <Link to="/products" className="cira-btn cira-btn--outline">
            Explore Products
          </Link>
        </div>
      </div>

      {/* What We Do */}
      <AnimatedSection>
        <section id="vision-mission-section" className="cira-about-section">
          <div className="cira-container">
            <div className="cira-about-intro-grid">
              <div className="cira-prose">
                <span className="cira-eyebrow">Who We Are</span>
                <h2 className="cira-prose-title">
                  Industrial Instrumentation, Valve Manufacturing &amp; Automation
                </h2>
                <p>
                  We, <strong>Madras Control Components (MCC)</strong>, are an industrial instrumentation
                  and automation company. Our team brings an experience of{" "}
                  <strong>more than 2 decades</strong> in the field of instrumentation, valve
                  manufacturing, and automation.
                </p>
                <p>
                  We provide <strong>tailor-made solutions</strong> by carefully analysing the process
                  demands. With this consultative engineering approach, we have developed specialized
                  products for our clients and successfully executed{" "}
                  <strong>50+ turnkey projects</strong> across both{" "}
                  <strong>Government and Private sectors</strong>, ranging from{" "}
                  <strong>Water Distribution to Net Zero</strong> initiatives.
                </p>

                <div className="cira-vertical-pills" aria-label="Sectors and domains served">
                  {VERTICALS.map((v) => (
                    <span key={v} className="cira-vertical-pill">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="cira-milestone-card" aria-label="Key Credentials">
                <h3>Track Record &amp; Credentials</h3>
                <ul className="cira-timeline">
                  <li>
                    <span className="cira-timeline__year">2+ DECADES</span>
                    <p className="cira-timeline__text">
                      Combined team experience across industrial instrumentation, valve manufacturing, and process automation.
                    </p>
                  </li>
                  <li>
                    <span className="cira-timeline__year">50+ TURNKEY PROJECTS</span>
                    <p className="cira-timeline__text">
                      Executed projects across Government and Private sectors—ranging from Water Distribution systems to Net Zero.
                    </p>
                  </li>
                  <li>
                    <span className="cira-timeline__year">TAILOR-MADE ENGINEERING</span>
                    <p className="cira-timeline__text">
                      Custom-developed valves and instrumentation engineered to exact process criticality and client demands.
                    </p>
                  </li>
                </ul>
              </aside>
            </div>

            <StaggerGrid className="cira-pillars-grid">
              {OFFERINGS.map((item) => (
                <StaggerItem key={item.title} className="d-flex">
                  <article className="cira-about-pillar w-100">
                    <div className="cira-about-pillar__icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <Link
                      to={item.link}
                      className="d-inline-flex align-items-center gap-1 mt-3 fw-semibold text-decoration-none"
                      style={{ color: "var(--cira-red-600)", fontSize: "0.9rem" }}
                    >
                      View Solutions <FiArrowRight aria-hidden="true" />
                    </Link>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>
      </AnimatedSection>

      {/* Tailor-Made Client Products */}
      <AnimatedSection>
        <section id="client-engineered-products" className="cira-about-section cira-about-section--muted">
          <div className="cira-container">
            <div className="cira-prose" style={{ maxWidth: "820px", marginBottom: "2rem" }}>
              <span className="cira-eyebrow">Custom Product Development</span>
              <h2 className="cira-prose-title">
                Client-Specific Products Engineered for Process Demands
              </h2>
              <p>
                By carefully analysing process demands and operating conditions, we have developed
                purpose-built valve solutions for leading industrial clients:
              </p>
            </div>

            <StaggerGrid className="cira-custom-products-grid">
              {CUSTOM_CLIENT_PRODUCTS.map((prod) => (
                <StaggerItem key={`${prod.client}-${prod.name}`} className="d-flex">
                  <article className="cira-custom-product-card w-100">
                    <div className="cira-custom-product-card__media">
                      <img src={prod.image} alt={`${prod.client} ${prod.name}`} loading="lazy" />
                    </div>
                    <div className="cira-custom-product-card__body">
                      <div className="cira-custom-product-card__head">
                        <span className="cira-custom-product-card__client">Client: {prod.client}</span>
                        <FiCheckCircle className="cira-custom-product-card__check" aria-hidden="true" />
                      </div>
                      <h3>{prod.name}</h3>
                      <p>{prod.detail}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <div className="cira-turnkey-banner mt-4">
              <div>
                <h3>50+ Turnkey Projects Delivered</h3>
                <p className="m-0">
                  Proven execution across Government and Private sector undertakings — spanning Water
                  Distribution networks to Net Zero industrial automation.
                </p>
              </div>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="cira-btn cira-btn--navy">
                  Explore Products <FiArrowRight aria-hidden="true" />
                </Link>
                <Link to="/Contact" className="cira-btn cira-btn--primary">
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AboutUs;
