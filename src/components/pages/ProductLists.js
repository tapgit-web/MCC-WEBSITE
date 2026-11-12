import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiSearch, FiFileText, FiList, FiCpu, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import products from "../../data/products";
import "./ProductLists.css";
import PdfViewerModal from "../common/PdfViewerModal";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";
import plcImg from "../images/product/plc_dcs_real.jpg";

const FILTER_PILLS = [
  { label: "All Products", slug: "" },
  { label: "Flow", slug: "flow measurement" },
  { label: "Level", slug: "level measurement" },
  { label: "Pressure", slug: "pressure measurement" },
  { label: "Temperature", slug: "temperature measurement" },
  { label: "Vibration", slug: "vibration monitoring" },
  { label: "Ball Valve", slug: "ball valve" },
  { label: "Butterfly Valve", slug: "butterfly valve" },
  { label: "PLC & DCS", slug: "plc & dcs solutions" },
];

function ProductLists() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPdfProduct, setSelectedPdfProduct] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const selectedCategory = decodeURIComponent(category || "").trim().toLowerCase();
  const isPlcDcs = selectedCategory === "plc & dcs solutions";

  const filtered = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const productType = (p.type || "").trim().toLowerCase();
      const productTypeName = (p.typeName || "").trim().toLowerCase();
      const matchesCat =
        !selectedCategory ||
        selectedCategory === "all" ||
        productType === selectedCategory ||
        productTypeName === selectedCategory;

      if (!matchesCat) return false;
      if (!query) return true;

      return (
        (p.name || "").toLowerCase().includes(query) ||
        productType.includes(query) ||
        productTypeName.includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  const displayTitle = selectedCategory
    ? selectedCategory.replace(/\b\w/g, (c) => c.toUpperCase())
    : "All Industrial Products";

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
          <span className="cira-eyebrow cira-eyebrow--dark">Technical Catalogue</span>
          <h1 className="cira-page-hero__title">
            {displayTitle} <span>Solutions</span>
          </h1>
          <p className="cira-page-hero__desc">
            Browse specifications, engineering datasheets, and official PDF catalogues across Madras Control Components’ process instrumentation and valve range.
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <Link to="/products">Products</Link>
            {selectedCategory && (
              <>
                <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
                <span aria-current="page" className="text-capitalize">{selectedCategory}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* Category Filter Pills & Search */}
      <div className="cira-catalog-toolbar">
        <div className="cira-container">
          <div className="cira-toolbar-row">
            <div className="cira-pill-scroll" role="navigation" aria-label="Product category filters">
              {FILTER_PILLS.map((pill) => {
                const isActive =
                  (!selectedCategory && pill.slug === "") ||
                  selectedCategory === pill.slug;
                return (
                  <button
                    key={pill.label}
                    type="button"
                    className={`cira-filter-pill ${isActive ? "is-active" : ""}`}
                    aria-pressed={isActive}
                    onClick={() =>
                      navigate(pill.slug ? `/products/${encodeURIComponent(pill.slug)}` : "/products")
                    }
                  >
                    {pill.label}
                  </button>
                );
              })}
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
                  placeholder="Search instruments or valves..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="cira-catalog-search__input"
                />
              </search>
            )}
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
                  <Link to="/products" className="cira-btn cira-btn--outline">
                    Browse Field Instruments <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          </AnimatedSection>
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
                  Clear filter
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
                    navigate("/products");
                  }}
                >
                  View All Products
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
