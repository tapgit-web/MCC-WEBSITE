import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logoImg from "../images/mcc_logo.jpg";
import "./navbar.css";

const INSTRUMENTATION_CATEGORIES = [
  { label: "Flow Measurement", slug: "flow measurement" },
  { label: "Level Measurement", slug: "level measurement" },
  { label: "Pressure Measurement", slug: "pressure measurement" },
  { label: "Temperature Measurement", slug: "temperature measurement" },
  { label: "Vibration Monitoring", slug: "vibration monitoring" },
];

const VALVE_AUTOMATION_CATEGORIES = [
  { label: "Ball Valves", slug: "ball valve" },
  { label: "Butterfly Valves", slug: "butterfly valve" },
  { label: "All Control & ON/OFF Valves", slug: "valve" },
  { label: "PLC & DCS Solutions", slug: "plc & dcs solutions" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Track scroll for subtle header elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape key & outside click handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`cira-header ${scrolled ? "is-scrolled" : ""}`}>
      {/* Main Navigation Bar */}
      <div className="cira-navbar">
        <div className="cira-container cira-navbar__inner">
          <Link to="/" className="cira-brand" aria-label="Madras Control Components Home">
            <img src={logoImg} alt="MCC Logo" className="cira-brand__logo" />
            <span className="cira-brand__text">
              <span className="cira-brand__name">MADRAS CONTROL</span>
              <span className="cira-brand__sub">COMPONENTS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="cira-nav-desktop" aria-label="Primary navigation">
            <ul className="cira-nav-list">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `cira-nav-link ${isActive ? "is-active" : ""}`}
                >
                  Home
                </NavLink>
              </li>

              <li
                ref={dropdownRef}
                className="cira-nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`cira-nav-link cira-nav-dropdown-btn ${
                    location.pathname.startsWith("/product") ? "is-active" : ""
                  }`}
                  aria-expanded={dropdownOpen}
                  aria-controls="desktop-products-menu"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span>Products</span>
                  <FiChevronDown
                    className={`cira-chevron ${dropdownOpen ? "is-rotated" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {dropdownOpen && (
                  <div id="desktop-products-menu" className="cira-mega-menu">
                    <div className="cira-mega-menu__grid">
                      <div className="cira-mega-col">
                        <span className="cira-mega-col__title">Process Instrumentation</span>
                        <ul className="cira-mega-list">
                          {INSTRUMENTATION_CATEGORIES.map((item) => (
                            <li key={item.slug}>
                              <NavLink
                                to={`/products/${encodeURIComponent(item.slug)}`}
                                className="cira-mega-link"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="cira-mega-col">
                        <span className="cira-mega-col__title">Control Valves &amp; Automation</span>
                        <ul className="cira-mega-list">
                          {VALVE_AUTOMATION_CATEGORIES.map((item) => (
                            <li key={item.slug}>
                              <NavLink
                                to={`/products/${encodeURIComponent(item.slug)}`}
                                className="cira-mega-link"
                                onClick={() => setDropdownOpen(false)}
                              >
                                {item.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="cira-mega-menu__footer">
                      <span>Explore our complete portfolio of 60+ instruments &amp; valves</span>
                      <Link
                        to="/products"
                        className="cira-mega-all-link"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Browse All Products <FiArrowRight aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/Aboutus"
                  className={({ isActive }) => `cira-nav-link ${isActive ? "is-active" : ""}`}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) => `cira-nav-link ${isActive ? "is-active" : ""}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="cira-navbar__actions">
            <Link to="/Contact" className="cira-btn cira-btn--primary cira-nav-cta">
              Request Quote
            </Link>

            <button
              type="button"
              className="cira-mobile-toggle"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Collapsible Top-Down Mobile Menu */}
      {menuOpen && (
        <div id="mobile-nav-menu" className="cira-mobile-menu">
          <div className="cira-container">
            <nav className="cira-mobile-menu__body" aria-label="Mobile navigation">
              <NavLink to="/" end className="cira-mobile-link" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>

              <div className="cira-mobile-accordion">
                <button
                  type="button"
                  className="cira-mobile-link cira-mobile-accordion-btn"
                  aria-expanded={mobileProductsOpen}
                  onClick={() => setMobileProductsOpen((prev) => !prev)}
                >
                  <span>Products</span>
                  <FiChevronDown
                    className={`cira-chevron ${mobileProductsOpen ? "is-rotated" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {mobileProductsOpen && (
                  <div className="cira-mobile-sublinks">
                    <Link
                      to="/products"
                      className="cira-mobile-sublink cira-mobile-sublink--highlight"
                      onClick={() => setMenuOpen(false)}
                    >
                      All Products Catalogue
                    </Link>
                    <span className="cira-mobile-subhead">Instrumentation</span>
                    {INSTRUMENTATION_CATEGORIES.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/products/${encodeURIComponent(item.slug)}`}
                        className="cira-mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <span className="cira-mobile-subhead">Valves &amp; Automation</span>
                    {VALVE_AUTOMATION_CATEGORIES.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/products/${encodeURIComponent(item.slug)}`}
                        className="cira-mobile-sublink"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink to="/Aboutus" className="cira-mobile-link" onClick={() => setMenuOpen(false)}>
                About Us
              </NavLink>
              <NavLink to="/Contact" className="cira-mobile-link" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>

              <Link
                to="/Contact"
                className="cira-btn cira-btn--primary w-100 mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Request Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
