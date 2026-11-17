import React, { useState, useMemo, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiSearch, FiFileText, FiList, FiCpu, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import products from "../../data/products";
import "./ProductLists.css";
import PdfViewerModal from "../common/PdfViewerModal";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";

import flowImg from "../images/product/flow/ELECTROMAGNETICFLOWMETER.jpg";
import Ultrasonic1 from "../images/product/flow/ULTRASONIC FLOWMETER.jpg";
import SolarPoweredFM from "../images/product/flow/solar_powered_flowmeter.jpg";
import BtuMeter from "../images/product/flow/btu_meter.jpg";
import ThermalMass from "../images/product/flow/THERMAL MASS FLOWMETER1.jpg";
import levelImg from "../images/product/level/RadarLevel.jpeg";
import pressureImg from "../images/product/pressure/dpt.png";
import tempImg from "../images/product/temperature/head.png";
import vibrationImg from "../images/product/vibration/sensors.png";
import ballValveImg from "../images/product/valve/2pcsballvalve.png";
import bfvImg from "../images/product/valve/LineedButterfly.png";
import valveImg from "../images/product/valve/3pcsballvalve.png";
import plcImg from "../images/product/plc_dcs_real.jpg";

const FLOW_TREE_DATA = [
  {
    heading: "1.ELECTROMAGNETIC FLOW METER",
    items: [
      {
        id: 1,
        number: "1.",
        name: "insertion Type Electromagnetic Flow Meter SR1000i",
        image: flowImg,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "SR1000i",
        specs: "Hot-Tap Insertion Spool | DN100 - DN3000 mm | IP68 Submersible",
      },
      {
        id: 2,
        number: "2.",
        name: "Battery Operated Electromagnetic Flow Meter SS1021",
        image: flowImg,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "SS1021",
        specs: "5-10 Year Battery Life | DN15 - DN1200 mm | GSM/4G Telemetry",
      },
    ],
  },
  {
    heading: "2.ULTRASONIC FLOW METER",
    items: [
      {
        id: 3,
        number: "1.",
        name: "Clamp On Type Ultrasonic Flow Meter",
        image: Ultrasonic1,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Non-Invasive",
        specs: "External Clamp-On Transducers | DN15 - DN6000 mm | Transit-Time",
      },
    ],
  },
  {
    heading: "3.SOLAR POWERED FLOW METER",
    items: [
      {
        id: 4,
        number: "1.",
        name: "SOLAR POWERED FLOW METER",
        image: SolarPoweredFM,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "Zero Grid",
        specs: "Solar PV + LiFePO4 Battery | 30-Day Autonomy | 4G / IoT Ready",
      },
    ],
  },
  {
    heading: "4.BTU METER",
    items: [
      {
        id: 5,
        number: "1.",
        name: "BTU METER",
        image: BtuMeter,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "EN1434 Class 2",
        specs: "Ultrasonic Flow Tube + Matched PT1000 RTDs | M-Bus / BACnet",
      },
    ],
  },
  {
    heading: "5.THERMAL MASS FLOW METER",
    items: [
      {
        id: 6,
        number: "1.",
        name: "THERMAL MASS FLOW METER",
        image: ThermalMass,
        pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
        tag: "Direct Mass",
        specs: "Thermal Dispersion Sensor | Compressed Air & Biogas | 100:1 Turndown",
      },
    ],
  },
];

const INSTRUMENTATION_CATEGORIES = [
  { label: "Flow Meter", slug: "flow measurement" },
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

const CATEGORY_META = {
  "flow measurement": { title: "Flow Meter", group: "Process Instrumentation" },
  "flow meter": { title: "Flow Meter", group: "Process Instrumentation" },
  "flow": { title: "Flow Meter", group: "Process Instrumentation" },
  "level measurement": { title: "Level Measurement", group: "Process Instrumentation" },
  "level meter": { title: "Level Measurement", group: "Process Instrumentation" },
  "pressure measurement": { title: "Pressure Measurement", group: "Process Instrumentation" },
  "temperature measurement": { title: "Temperature Measurement", group: "Process Instrumentation" },
  "vibration monitoring": { title: "Vibration Monitoring", group: "Process Instrumentation" },
  "ball valve": { title: "Ball Valves", group: "Control Valves & Automation" },
  "ball valves": { title: "Ball Valves", group: "Control Valves & Automation" },
  "butterfly valve": { title: "Butterfly Valves", group: "Control Valves & Automation" },
  "butterfly valves": { title: "Butterfly Valves", group: "Control Valves & Automation" },
  "valve": { title: "All Control & ON/OFF Valves", group: "Control Valves & Automation" },
  "valves": { title: "All Control & ON/OFF Valves", group: "Control Valves & Automation" },
  "plc & dcs solutions": { title: "PLC & DCS Solutions", group: "Control Valves & Automation" },
};

function ProductLists() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPdfProduct, setSelectedPdfProduct] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const selectedCategory = decodeURIComponent(category || "flow measurement").trim().toLowerCase();
  const isPlcDcs = selectedCategory === "plc & dcs solutions";
  const isFlowPage =
    selectedCategory === "flow measurement" ||
    selectedCategory === "flow meter" ||
    selectedCategory === "flow-meter" ||
    selectedCategory === "flow";

  useEffect(() => {
    if (!category) {
      navigate("/products/flow%20measurement", { replace: true });
    }
  }, [category, navigate]);

  const isPillActive = (slug) => {
    if (!selectedCategory && slug === "") return true;
    if (selectedCategory === slug) return true;
    if (
      (slug === "flow measurement" || slug === "flow meter") &&
      (selectedCategory === "flow measurement" || selectedCategory === "flow meter" || selectedCategory === "flow")
    ) {
      return true;
    }
    if (
      slug === "level measurement" &&
      (selectedCategory === "level measurement" || selectedCategory === "level meter" || selectedCategory === "level")
    ) {
      return true;
    }
    if (
      slug === "pressure measurement" &&
      (selectedCategory === "pressure measurement" || selectedCategory === "pressure")
    ) {
      return true;
    }
    if (
      slug === "temperature measurement" &&
      (selectedCategory === "temperature measurement" || selectedCategory === "temperature")
    ) {
      return true;
    }
    if (
      slug === "vibration monitoring" &&
      (selectedCategory === "vibration monitoring" || selectedCategory === "vibration")
    ) {
      return true;
    }
    if (
      slug === "valve" &&
      (selectedCategory === "valve" || selectedCategory === "valves")
    ) {
      return true;
    }
    if (
      slug === "ball valve" &&
      (selectedCategory === "ball valve" || selectedCategory === "ball valves")
    ) {
      return true;
    }
    if (
      slug === "butterfly valve" &&
      (selectedCategory === "butterfly valve" || selectedCategory === "butterfly valves")
    ) {
      return true;
    }
    if (
      slug === "plc & dcs solutions" &&
      (selectedCategory === "plc & dcs solutions" || selectedCategory === "plc & dcs")
    ) {
      return true;
    }
    return false;
  };

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const productType = (p.type || "").trim().toLowerCase();
      const productTypeName = (p.typeName || "").trim().toLowerCase();

      let matchesCat = false;
      if (!selectedCategory || selectedCategory === "all") {
        matchesCat = true;
      } else if (
        selectedCategory === "flow measurement" ||
        selectedCategory === "flow meter" ||
        selectedCategory === "flow-meter" ||
        selectedCategory === "flow"
      ) {
        matchesCat = productType === "flow measurement";
      } else if (
        selectedCategory === "level measurement" ||
        selectedCategory === "level meter" ||
        selectedCategory === "level"
      ) {
        matchesCat = productType === "level measurement";
      } else if (
        selectedCategory === "pressure measurement" ||
        selectedCategory === "pressure"
      ) {
        matchesCat = productType === "pressure measurement";
      } else if (
        selectedCategory === "temperature measurement" ||
        selectedCategory === "temperature"
      ) {
        matchesCat = productType === "temperature measurement";
      } else if (
        selectedCategory === "vibration monitoring" ||
        selectedCategory === "vibration"
      ) {
        matchesCat = productType === "vibration monitoring";
      } else if (
        selectedCategory === "valve" ||
        selectedCategory === "valves" ||
        selectedCategory === "control valves"
      ) {
        matchesCat = productType === "valve";
      } else if (
        selectedCategory === "ball valve" ||
        selectedCategory === "ball valves"
      ) {
        matchesCat =
          productTypeName === "ball valve" ||
          (productType === "valve" && (p.name || "").toLowerCase().includes("ball"));
      } else if (
        selectedCategory === "butterfly valve" ||
        selectedCategory === "butterfly valves"
      ) {
        matchesCat =
          productTypeName === "butterfly valve" ||
          (productType === "valve" && (p.name || "").toLowerCase().includes("butterfly"));
      } else {
        matchesCat =
          productType === selectedCategory ||
          productTypeName === selectedCategory;
      }

      if (!matchesCat) return false;
      if (!query) return true;

      return (
        (p.name || "").toLowerCase().includes(query) ||
        productType.includes(query) ||
        productTypeName.includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  const displayTitle =
    CATEGORY_META[selectedCategory]?.title ||
    (selectedCategory ? selectedCategory.replace(/\b\w/g, (c) => c.toUpperCase()) : "All Industrial Products");

  const categoryGroup = CATEGORY_META[selectedCategory]?.group;

  const handleOpenPdf = (item) => {
    setSelectedPdfProduct(item);
    setIsPdfModalOpen(true);
  };

  const handleClosePdfModal = () => {
    setIsPdfModalOpen(false);
    setSelectedPdfProduct(null);
  };

  return (
    <div className="cira-catalog-page">
      {/* Page Hero */}
      <section className="cira-page-hero">
        <div className="cira-container cira-page-hero__inner">
          <span className="cira-eyebrow cira-eyebrow--dark">
            {categoryGroup ? categoryGroup : "Technical Catalogue"}
          </span>
          <h1 className="cira-page-hero__title">
            {displayTitle}
          </h1>
          <p className="cira-page-hero__desc">
            Browse specifications, engineering datasheets, and official PDF catalogues across Madras Control Components’ process instrumentation and valve range.
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span className="text-muted">{categoryGroup || "Products"}</span>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span aria-current="page">{displayTitle}</span>
          </nav>
        </div>
      </section>

      {/* Category Filter Navigation & Search */}
      <div className="cira-catalog-toolbar">
        <div className="cira-container">
          <div className="cira-toolbar-top">
            <div className="cira-toolbar-info">
              <span className="cira-toolbar-tag">Instrumentation &amp; Valves</span>
              <span className="cira-toolbar-cat-name">{displayTitle}</span>
            </div>

            {!isPlcDcs && (
              <search className="cira-catalog-search">
                <label htmlFor="catalog-search-input" className="visually-hidden">
                  Filter products by name
                </label>
                <FiSearch className="cira-catalog-search__icon" aria-hidden="true" />
                <input
                  id="catalog-search-input"
                  type="search"
                  placeholder="Search in this category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cira-catalog-search__input"
                />
              </search>
            )}
          </div>

          <div className="cira-toolbar-groups" role="navigation" aria-label="Product categories">
            {/* Process Instrumentation */}
            <div className="cira-filter-group">
              <span className="cira-filter-group__label">Process Instrumentation</span>
              <div className="cira-filter-group__pills">
                {INSTRUMENTATION_CATEGORIES.map((item) => {
                  const isActive = isPillActive(item.slug);
                  return (
                    <Link
                      key={item.slug}
                      to={`/products/${encodeURIComponent(item.slug)}`}
                      className={`cira-filter-pill ${isActive ? "is-active" : ""}`}
                      aria-pressed={isActive}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Control Valves & Automation */}
            <div className="cira-filter-group">
              <span className="cira-filter-group__label">Control Valves &amp; Automation</span>
              <div className="cira-filter-group__pills">
                {VALVE_AUTOMATION_CATEGORIES.map((item) => {
                  const isActive = isPillActive(item.slug);
                  return (
                    <Link
                      key={item.slug}
                      to={`/products/${encodeURIComponent(item.slug)}`}
                      className={`cira-filter-pill ${isActive ? "is-active" : ""}`}
                      aria-pressed={isActive}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="cira-container cira-catalog-body">
        {isPlcDcs ? (
          <AnimatedSection>
            <section className="cira-plc-showcase" aria-labelledby="plc-heading">
              <div className="cira-plc-showcase__media">
                <img src={plcImg} alt="PLC and DCS Industrial Automation Systems" />
              </div>
              <div className="cira-plc-showcase__copy">
                <span className="cira-eyebrow">Turnkey Industrial Automation</span>
                <h2 id="plc-heading">PLC, DCS &amp; SCADA System Integration</h2>
                <p>
                  Madras Control Components delivers end-to-end process automation engineered around leading
                  platforms—combining our team’s deep experience across ABB, Honeywell, and Rockwell
                  Automation architectures to optimize plant safety, throughput, and uptime.
                </p>

                <ul className="cira-plc-list">
                  <li>
                    <FiCheckCircle aria-hidden="true" />
                    <span>PLC / DCS Panel Design, Fabrication &amp; FAT</span>
                  </li>
                  <li>
                    <FiCheckCircle aria-hidden="true" />
                    <span>SCADA / HMI Visualization, Alarming &amp; Historian Setup</span>
                  </li>
                  <li>
                    <FiCheckCircle aria-hidden="true" />
                    <span>Legacy Control System Migration &amp; Fieldbus / HART Integration</span>
                  </li>
                  <li>
                    <FiCheckCircle aria-hidden="true" />
                    <span>Site Commissioning &amp; Annual Maintenance Contracts (AMC)</span>
                  </li>
                </ul>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/Contact" className="cira-btn cira-btn--primary">
                    <FiCpu aria-hidden="true" /> Request Automation Proposal
                  </Link>
                  <Link to="/products/flow%20measurement" className="cira-btn cira-btn--outline">
                    Browse Field Instruments <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          </AnimatedSection>
        ) : isFlowPage && !searchQuery ? (
          <div className="cira-flow-tree-wrapper">
            {/* Tree Root */}
            <div className="cira-tree-root-container">
              <div className="cira-tree-root-box">
                <span className="cira-tree-root-text">flow measurement</span>
              </div>
              <div className="cira-tree-stem-line" aria-hidden="true" />
              <div className="cira-tree-bus-line" aria-hidden="true" />
            </div>

            {/* 5 Branch Columns matching Image 2 */}
            <div className="cira-tree-grid">
              {FLOW_TREE_DATA.map((col) => (
                <div key={col.heading} className="cira-tree-branch">
                  <div className="cira-tree-drop-line" aria-hidden="true" />
                  <div className="cira-tree-header">
                    <h3 className="cira-tree-heading">{col.heading}</h3>
                  </div>

                  <div className="cira-tree-box">
                    {col.items.map((it) => (
                      <article key={it.id} className="cira-tree-product">
                        <div
                          className="cira-tree-product__media"
                          onClick={() => handleOpenPdf(it)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Open PDF catalogue for ${it.name}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleOpenPdf(it);
                            }
                          }}
                        >
                          <img
                            src={it.image}
                            alt={it.name}
                            className="cira-tree-product__img"
                            loading="lazy"
                          />
                          <span className="cira-tree-product__tag">{it.tag}</span>
                        </div>

                        <div className="cira-tree-product__body">
                          <h4 className="cira-tree-product__title">
                            {it.name}
                          </h4>
                          <p className="cira-tree-product__specs">
                            {it.specs}
                          </p>
                          <div className="cira-tree-product__actions">
                            <button
                              type="button"
                              className="cira-btn cira-btn--primary cira-btn--xs"
                              onClick={() => handleOpenPdf(it)}
                            >
                              <FiFileText aria-hidden="true" /> Catalogue
                            </button>
                            <Link
                              to={`/product/${it.id}`}
                              className="cira-btn cira-btn--outline cira-btn--xs"
                            >
                              <FiList aria-hidden="true" /> Details
                            </Link>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="cira-catalog-meta">
              <p className="m-0">
                Showing <strong>{filtered.length}</strong>{" "}
                {filtered.length === 1 ? "product" : "products"}
                {selectedCategory ? ` in ${displayTitle}` : ""}
              </p>
              {searchQuery && (
                <button
                  type="button"
                  className="cira-clear-btn"
                  onClick={() => setSearchQuery("")}
                >
                  Clear search
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="cira-empty-state">
                <h2>No matching products found</h2>
                <p>Try adjusting your search query or switching to another product category.</p>
                <button
                  type="button"
                  className="cira-btn cira-btn--navy"
                  onClick={() => {
                    setSearchQuery("");
                    navigate("/products/flow%20measurement");
                  }}
                >
                  View Flow Measurement
                </button>
              </div>
            ) : (
              <StaggerGrid key={`${selectedCategory}-${searchQuery}`} className="cira-products-grid">
                {filtered.map((item) => (
                  <StaggerItem key={item.id} className="d-flex">
                    <article className="cira-product-card w-100">
                      <div
                        className="cira-product-card__media"
                        onClick={() => handleOpenPdf(item)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Open PDF catalogue for ${item.name}`}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleOpenPdf(item);
                          }
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cira-product-card__img"
                          loading="lazy"
                        />
                        <span className="cira-product-card__badge">
                          {item.typeName || item.type}
                        </span>
                      </div>

                      <div className="cira-product-card__body">
                        <h2 className="cira-product-card__title">{item.name}</h2>
                        <div className="cira-product-card__tags">
                          <span className={`cira-pdf-tag ${item.pdf ? "has-pdf" : ""}`}>
                            {item.pdf ? "PDF Datasheet Ready" : "Spec Sheet Soon"}
                          </span>
                          {item.specifications?.length > 0 && (
                            <span className="cira-spec-tag">
                              {item.specifications.length} Specs
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="cira-product-card__actions">
                        <button
                          type="button"
                          className="cira-btn cira-btn--primary cira-btn--sm"
                          onClick={() => handleOpenPdf(item)}
                        >
                          <FiFileText aria-hidden="true" />
                          <span>Catalogue</span>
                        </button>
                        <Link
                          to={`/product/${item.id}`}
                          className="cira-btn cira-btn--outline cira-btn--sm"
                        >
                          <FiList aria-hidden="true" />
                          <span>Details</span>
                        </Link>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            )}
          </>
        )}
      </div>

      {/* IN-APP PDF VIEWER & DOWNLOADER MODAL */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={handleClosePdfModal}
        pdfUrl={selectedPdfProduct?.pdf}
        title={selectedPdfProduct?.name ? `${selectedPdfProduct.name} - Catalogue` : "Product Catalogue"}
        productName={selectedPdfProduct?.name}
        productImage={selectedPdfProduct?.image}
        productType={selectedPdfProduct?.typeName || selectedPdfProduct?.type || category}
      />
    </div>
  );
}

export default ProductLists;
