import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import AnimatedSection from "../animation/AnimatedSection";
import "./Aboutus.css";
import founderimg from "../images/founder.jpg";
import ceoimg from "../images/ceo.jpg";

const Founder = () => {
  return (
    <div>
      {/* Page Hero */}
      <section className="cira-page-hero">
        <div className="cira-container cira-page-hero__inner">
          <span className="cira-eyebrow cira-eyebrow--dark">Our Heritage &amp; Leadership</span>
          <h1 className="cira-page-hero__title">
            Founder &amp; <span>Leadership</span>
          </h1>
          <p className="cira-page-hero__desc">
            Rooted in a proud legacy of nation-building, integrity, and over 25 years of global industrial automation leadership.
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <Link to="/Aboutus">About Us</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span aria-current="page">Founder &amp; Team</span>
          </nav>
        </div>
      </section>

      {/* Sub-Navigation Strip */}
      <div className="cira-about-nav-strip">
        <div className="cira-container cira-about-tabs">
          <Link to="/Aboutus" className="cira-btn cira-btn--outline">
            What We Do
          </Link>
          <Link to="/founder" className="cira-btn cira-btn--primary" aria-current="page">
            Meet Our Founder &amp; Leadership
          </Link>
        </div>
      </div>

      {/* Leadership Cards */}
      <section className="cira-about-section cira-about-section--muted">
        <div className="cira-container">
          <AnimatedSection>
            <div className="cira-leaders-grid">
              {/* Founder */}
              <article className="cira-leader-card">
                <div className="cira-leader-card__media">
                  <img
                    src={founderimg}
                    alt="Shri. V. Nallappan, Founder"
                    className="cira-leader-card__img"
                  />
                </div>
                <div className="cira-leader-card__body">
                  <span className="cira-leader-card__role">Founder • “Good Father”</span>
                  <h2 className="cira-leader-card__name">Shri. V. Nallappan</h2>
                  <p className="cira-leader-card__bio">
                    During the scorching summer of the 1940s, a young man from an agricultural
                    family in a small village in Namakkal district of South India responded to the
                    call of national leaders to fight for the freedom of the Nation. Held and
                    imprisoned by the British, his patriotism inspired others and he became a leader
                    for the Namakkal district of the Indian National Congress.
                  </p>
                  <p className="cira-leader-card__bio">
                    Post-independence, he worked tirelessly to generate jobs for local youth —
                    starting as a helper in a small shop, becoming an entrepreneur in the 1960s, and
                    diversifying across Transport and Movie Theatres for nearly four decades until
                    his demise in 2000.
                  </p>
                </div>
              </article>

              {/* Managing Director */}
              <article className="cira-leader-card">
                <div className="cira-leader-card__media">
                  <img
                    src={ceoimg}
                    alt="Sriarun Loganathan, Managing Director"
                    className="cira-leader-card__img"
                  />
                </div>
                <div className="cira-leader-card__body">
                  <span className="cira-leader-card__role">Managing Director</span>
                  <h2 className="cira-leader-card__name">Sriarun Loganathan</h2>
                  <p className="cira-leader-card__bio">
                    Grandson of late Shri. V. Nallappan, Sriarun Loganathan carries forward the same
                    patriotism and nation-building vision as the founder of Madras Control Components.
                    An Electrical Engineer with an MBA, he brings over 25 years of experience across
                    Oil &amp; Gas, Petrochemicals, Power, Sugar, Pulp &amp; Paper, Metals &amp;
                    Mining, Automotive, and Water Management (ETP, STP, WTP).
                  </p>
                  <p className="cira-leader-card__bio">
                    Prior to MCC, he spent 17 years with global industrial leaders including ABB
                    India Ltd, Honeywell Automation, Rockwell Automation, and Forbes Marshall across
                    Sales, Marketing, Business Development, and Product Management.
                  </p>
                </div>
              </article>
            </div>
          </AnimatedSection>

          {/* Operations Director */}
          <AnimatedSection>
            <article className="cira-director-panel">
              <span className="cira-leader-card__role">Operations Director</span>
              <h3>Dr. Subathradevi Sriarun</h3>
              <span className="cira-director-panel__role">
                Ph.D. in Engineering • Former HOD &amp; Professor • ISO / NAAC / NBA Council
              </span>
              <p>
                Dr. Subathradevi Sriarun is an Engineer with a Doctorate degree and 17 years of
                academic and leadership experience as Head of Department &amp; Professor, managing
                key governance and quality council roles (ISO/NAAC/NBA) at Kongu Engineering College
                &amp; Saveetha University. Her operational rigor, leadership quality, and team-first
                spirit guide Madras Control Components as Operations Director.
              </p>

              <div className="mt-4">
                <Link to="/Contact" className="cira-btn cira-btn--navy">
                  Connect with Our Leadership Team <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Founder;
