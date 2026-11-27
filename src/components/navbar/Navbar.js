import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { FiChevronDown, FiChevronRight, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import logoImg from "../images/mcc_logo.jpg";
import "./navbar.css";

const MEGA_NAV_CATEGORIES = [
  {
    id: "flow",
    label: "Flow Measurement",
    slug: "flow measurement",
    badge: "4 Subcategories • 13 Models",
    sections: [
      {
        title: "1. ELECTROMAGNETIC FLOW METER",
        items: [
          { name: "1. Full Bore Electromagnetic Flow Meter", path: "/product/1" },
          { name: "2. Insertion Type Electromagnetic Flow Meter", path: "/product/7" },
          { name: "3. Battery Operated Electromagnetic Flow Meter", path: "/product/2" },
          { name: "4. Solar Powered Electromagnetic Flow Meter", path: "/product/4" },
        ],
      },
      {
        title: "2. ULTRASONIC FLOW METER",
        items: [
          { name: "1. Clamp On Type Ultrasonic Flow Meter", path: "/product/3" },
          { name: "2. Insertion Type Ultrasonic Flow Meter", path: "/product/8" },
          { name: "3. Full Bore Ultrasonic Flow Meter", path: "/product/9" },
        ],
      },
      {
        title: "3. BTU METER",
        items: [
          { name: "1. BTU Meter for Chiller Application", path: "/product/5" },
          { name: "2. BTU Meter for Heat Application", path: "/product/10" },
          { name: "3. Ultrasonic BTU Meter", path: "/product/11" },
        ],
      },
      {
        title: "4. THERMAL MASS FLOW METER",
        items: [
          { name: "1. Full Bore THERMAL MASS FLOW METER", path: "/product/6" },
          { name: "2. Thermal Mass Insertion Type", path: "/product/12" },
          { name: "3. Flowmeter For Fuel Gas Applications", path: "/product/13" },
        ],
      },
    ],
  },
  {
    id: "level",
    label: "Level Measurement",
    slug: "level measurement",
    badge: "8 Models",
    sections: [
      {
        title: "Non-Contact Level Transmitters",
        items: [
          { name: "Radar Level Transmitter", path: "/product/21" },
          { name: "Guided Wave Radar Level", path: "/product/22" },
          { name: "Ultrasonic Level Transmitter", path: "/product/23" },
        ],
      },
      {
        title: "Continuous & Hydrostatic",
        items: [
          { name: "Differential Pressure (DP) Level", path: "/product/24" },
          { name: "Hydrostatic Level Transmitter", path: "/product/26" },
          { name: "Capacitance Level Transmitter", path: "/product/27" },
        ],
      },
      {
        title: "Point Level & Switches",
        items: [
          { name: "Point Level Switch", path: "/product/25" },
          { name: "Float Switch", path: "/product/28" },
        ],
      },
    ],
  },
  {
    id: "pressure",
    label: "Pressure Measurement",
    slug: "pressure measurement",
    badge: "7 Models",
    sections: [
      {
        title: "Industrial Pressure Transmitters",
        items: [
          { name: "Compact Pressure Transmitter", path: "/product/40" },
          { name: "Transmitters For High Accuracy", path: "/product/41" },
          { name: "Transmitter With Integral Display", path: "/product/42" },
          { name: "Transmitter For Pneumatic Application", path: "/product/47" },
        ],
      },
      {
        title: "Sanitary, Submersible & Hazardous",
        items: [
          { name: "Transmitters For Sanitary Application", path: "/product/45" },
          { name: "Transmitters For Submersible Application", path: "/product/46" },
          { name: "Transmitters For Hazardous Application", path: "/product/48" },
        ],
      },
    ],
  },
  {
    id: "temperature",
    label: "Temperature Measurement",
    slug: "temperature measurement",
    badge: "1 Model",
    sections: [
      {
        title: "Temperature Sensors & Transmitters",
        items: [
          { name: "FlexTop 2202 Temperature Transmitter", path: "/product/43" },
        ],
      },
    ],
  },
  {
    id: "vibration",
    label: "Vibration Monitoring",
    slug: "vibration monitoring",
    badge: "6 Models",
    sections: [
      {
        title: "Sensors & Velocity Transmitters",
        items: [
          { name: "Vibration Sensors", path: "/product/120" },
          { name: "Vibration Velocity - IRD301", path: "/product/121" },
          { name: "Vibration Velocity and Displacement - IRD306", path: "/product/124" },
        ],
      },
      {
        title: "Displacement & Condition Monitoring",
        items: [
          { name: "Vibration Vibvelocity & Displacement - IRD306DP", path: "/product/122" },
          { name: "Vibration Amplitude Bearing Condition - IRD811D", path: "/product/123" },
          { name: "Vibration Amplitude and Bearing Condition - IRD811", path: "/product/125" },
        ],
      },
    ],
  },
  {
    id: "valves",
    label: "Control & ON/OFF Valves",
    slug: "valve",
    badge: "11 Models",
    sections: [
      {
        title: "Ball Valves (7 Models)",
        items: [
          { name: "2 Pcs Ball Valve", path: "/product/50" },
          { name: "3 Pcs Ball Valve", path: "/product/52" },
          { name: "3 / 4 Way Ball Valve", path: "/product/53" },
          { name: "Wafer Type Ball Valve", path: "/product/54" },
          { name: "FEP / PFA Lined Ball Valve", path: "/product/55" },
          { name: "UPVC Ball Valve", path: "/product/56" },
          { name: "PP Ball Valve", path: "/product/57" },
        ],
      },
      {
        title: "Butterfly Valves (4 Models)",
        items: [
          { name: "Rubber Lined Butterfly Valve", path: "/product/58" },
          { name: "Double Flanged Butterfly Valve", path: "/product/59" },
          { name: "Lug Type Butterfly Valve", path: "/product/60" },
          { name: "FEP / PFA Lined Butterfly Valve", path: "/product/61" },
        ],
      },
    ],
  },
  {
    id: "automation",
    label: "PLC & DCS Solutions",
    slug: "plc & dcs solutions",
    badge: "Turnkey",
    sections: [
      {
        title: "Industrial Automation Systems",
        items: [
          { name: "PLC / DCS Panel Design & Integration", path: "/products/plc%20%26%20dcs%20solutions" },
          { name: "SCADA / HMI Visualization & Historians", path: "/products/plc%20%26%20dcs%20solutions" },
          { name: "Legacy DCS Migration & Fieldbus", path: "/products/plc%20%26%20dcs%20solutions" },
          { name: "Site Commissioning & AMC Support", path: "/products/plc%20%26%20dcs%20solutions" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  const handleProductsClick = (e) => {
    // If closed, open the dropdown
    if (!dropdownOpen) {
      e.preventDefault();
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setDropdownOpen(true);
    } else {
      // If already open, let the click navigate to /products overview
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

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

  const currentCategory = MEGA_NAV_CATEGORIES[activeCategoryIndex] || MEGA_NAV_CATEGORIES[0];

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
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `cira-nav-link cira-nav-dropdown-btn ${
                      isActive || location.pathname.startsWith("/product") ? "is-active" : ""
                    }`
                  }
                  aria-expanded={dropdownOpen}
                  aria-controls="desktop-products-menu"
                  onClick={handleProductsClick}
                >
                  <span>Products</span>
                  <FiChevronDown
                    className={`cira-chevron ${dropdownOpen ? "is-rotated" : ""}`}
                    aria-hidden="true"
                  />
                </NavLink>

                {dropdownOpen && (
                  <div
                    id="desktop-products-menu"
                    className="cira-mega-menu cira-mega-menu--ifm"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="cira-ifm-wrapper">
                      {/* Left Sidebar Categories */}
                      <aside className="cira-ifm-sidebar" aria-label="Product categories">
                        <ul className="cira-ifm-sidebar__list">
                          {MEGA_NAV_CATEGORIES.map((cat, idx) => {
                            const isCurrent = idx === activeCategoryIndex;
                            return (
                              <li key={cat.id}>
                                <button
                                  type="button"
                                  className={`cira-ifm-sidebar__btn ${isCurrent ? "is-active" : ""}`}
                                  onMouseEnter={() => setActiveCategoryIndex(idx)}
                                  onClick={() => {
                                    if (isCurrent) {
                                      navigate(`/products/${encodeURIComponent(cat.slug)}`);
                                      setDropdownOpen(false);
                                    } else {
                                      setActiveCategoryIndex(idx);
                                    }
                                  }}
                                >
                                  <span className="cira-ifm-sidebar__label">{cat.label}</span>
                                  <FiChevronRight className="cira-ifm-sidebar__chevron" aria-hidden="true" />
                                </button>
                              </li>
                            );
                          })}
                        </ul>

                        <div className="cira-ifm-sidebar__footer">
                          <Link
                            to="/products"
                            className="cira-ifm-sidebar__cta mb-2"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <FiArrowRight aria-hidden="true" /> All Categories Overview
                          </Link>
                          <Link
                            to="/Contact"
                            className="cira-ifm-sidebar__cta"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <FiArrowRight aria-hidden="true" /> Technical Enquiry / RFQ
                          </Link>
                        </div>
                      </aside>

                      {/* Right Sub-Category & Product Content Area */}
                      <div className="cira-ifm-content">
                        <div className="cira-ifm-content__head">
                          <div className="cira-ifm-content__title-wrap">
                            <h3 className="cira-ifm-content__title">{currentCategory.label}</h3>
                            <span className="cira-ifm-content__badge">{currentCategory.badge}</span>
                          </div>
                          <Link
                            to={`/products/${encodeURIComponent(currentCategory.slug)}`}
                            className="cira-ifm-content__viewall"
                            onClick={() => setDropdownOpen(false)}
                          >
                            <span>Open {currentCategory.label} Page</span>
                            <FiArrowRight aria-hidden="true" />
                          </Link>
                        </div>

                        <div className="cira-ifm-content__grid">
                          {currentCategory.sections.map((sec) => (
                            <div key={sec.title} className="cira-ifm-col">
                              <div className="cira-ifm-col__header">
                                <span className="cira-ifm-col__title">{sec.title}</span>
                                <div className="cira-ifm-col__line" aria-hidden="true" />
                              </div>
                              <ul className="cira-ifm-col__list">
                                {sec.items.map((it) => (
                                  <li key={it.name}>
                                    <Link
                                      to={it.path}
                                      className="cira-ifm-item-link"
                                      onClick={() => setDropdownOpen(false)}
                                    >
                                      {it.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
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
                <div className="cira-mobile-accordion-row">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `cira-mobile-link cira-mobile-link--products ${
                        isActive || location.pathname.startsWith("/product") ? "active" : ""
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Products</span>
                  </NavLink>
                  <button
                    type="button"
                    className="cira-mobile-accordion-toggle"
                    aria-label="Toggle products submenu"
                    aria-expanded={mobileProductsOpen}
                    onClick={() => setMobileProductsOpen((prev) => !prev)}
                  >
                    <FiChevronDown
                      className={`cira-chevron ${mobileProductsOpen ? "is-rotated" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {mobileProductsOpen && (
                  <div className="cira-mobile-sublinks">
                    {MEGA_NAV_CATEGORIES.map((cat) => (
                      <div key={cat.id} className="cira-mobile-cat-group">
                        <Link
                          to={`/products/${encodeURIComponent(cat.slug)}`}
                          className="cira-mobile-sublink cira-mobile-sublink--head"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span>{cat.label}</span>
                          <span className="cira-mobile-badge">{cat.badge}</span>
                        </Link>
                      </div>
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
