import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPhoneCall } from "react-icons/fi";
import "./home.css";
import Productlist from "./productlist";
import IndustrySolutions from "./IndustrySolutions";
import { Services } from "./Services";
import AnimatedSection from "../animation/AnimatedSection";
import { HeroStagger, HeroItem } from "../animation/MotionPrimitives";
import products from "../../data/products";
import heroBg from "../images/hero_bg.jpg";

const STATS = [
  { value: "2016", label: "Established Heritage" },
  { value: `${products.length}+`, label: "Industrial Instruments" },
  { value: "8+", label: "Process Verticals" },
  { value: "10+ Yrs", label: "Leadership Experience" },
];

export const Home = () => {
  return (
    <div className="cira-home">
      {/* HERO SECTION */}
      <section className="cira-hero" aria-labelledby="hero-heading">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="cira-hero__bg"
          fetchPriority="high"
        />
        <div className="cira-hero__scrim" aria-hidden="true" />

        <div className="cira-container cira-hero__grid">
          <HeroStagger className="cira-hero__copy">
            <HeroItem>
              <span className="cira-eyebrow cira-eyebrow--dark">
                Madras Control Components • Est. 2016
              </span>
            </HeroItem>

            <HeroItem>
              <h1 id="hero-heading" className="cira-hero__title">
                Precision <span>Process Instruments</span>, Control Valves &amp; Automation
              </h1>
            </HeroItem>

            <HeroItem>
              <p className="cira-hero__lead">
                We partner with Power, Petrochemical, Chemical, and Water Treatment plants to deliver reliable measurement, valve control, PLC/DCS systems, and NABL-accredited calibration.
              </p>
            </HeroItem>

            <HeroItem>
              <div className="cira-hero__actions">
                <Link to="/products" className="cira-btn cira-btn--primary">
                  Explore Product Catalogue <FiArrowRight aria-hidden="true" />
                </Link>
                <Link to="/Contact" className="cira-btn cira-btn--ghost-light">
                  <FiPhoneCall aria-hidden="true" /> Request Technical Quote
                </Link>
              </div>
            </HeroItem>

            <HeroItem>
              <dl className="cira-hero__stats">
                {STATS.map((stat) => (
                  <div key={stat.label} className="cira-hero-stat">
                    <dt>{stat.label}</dt>
                    <dd>{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </HeroItem>
          </HeroStagger>
        </div>
      </section>

      {/* INDUSTRY SOLUTIONS SHOWCASE */}
      <AnimatedSection>
        <IndustrySolutions />
      </AnimatedSection>

      {/* PRODUCT CATEGORIES */}
      <AnimatedSection>
        <Productlist />
      </AnimatedSection>

      {/* LIFECYCLE SERVICES */}
      <AnimatedSection>
        <Services />
      </AnimatedSection>

      {/* CONSULTATIVE PARTNER CTA BAND */}
      <AnimatedSection>
        <section className="cira-cta-band" aria-labelledby="cta-heading">
          <div className="cira-container cira-cta-band__inner">
            <div className="cira-cta-band__copy">
              <span className="cira-eyebrow cira-eyebrow--dark">Engineering Consultation</span>
              <h2 id="cta-heading" className="cira-cta-band__title">
                Need help in identifying flow meter, control valve, or control system suitable for your process?
              </h2>
              <p className="cira-cta-band__desc">
                Backed by 10+ years of industrial automation expertise across ABB, Honeywell, Rockwell, and Forbes Marshall ecosystems, our engineers help select the exact specification for your process criticality.
              </p>
            </div>

            <div className="cira-cta-band__actions">
              <Link to="/Contact" className="cira-btn cira-btn--primary">
                Talk to an Engineer <FiArrowRight aria-hidden="true" />
              </Link>
              <Link to="/Aboutus" className="cira-btn cira-btn--ghost-light">
                About Us
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
