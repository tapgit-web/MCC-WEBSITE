import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText, FiMessageSquare, FiLayers } from "react-icons/fi";
import products from "../../data/products";
import "./ProductDetails.css";
import PdfViewerModal from "../common/PdfViewerModal";
import EmfFeaturesApplications from "../common/EmfFeaturesApplications";
import FlowRateTable from "../common/FlowRateTable";

function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const product = (products || []).find((p) => p && String(p.id) === String(id));

  if (!product) {
    return (
      <div className="cira-container py-5 text-center">
        <div className="cira-empty-state">
          <h1>Product Not Found</h1>
          <p>The requested instrument or valve could not be located in our catalogue.</p>
          <Link to="/products" className="cira-btn cira-btn--navy">
            Browse All Products
          </Link>
        </div>
      </div>
    );
  }

  const categoryLabel = product.typeName || product.type;
  const categorySlug = encodeURIComponent((product.type || "").trim().toLowerCase());

  return (
    <div className="cira-details-page">
      {/* Page Hero */}
      <section className="cira-page-hero">
        <div className="cira-container cira-page-hero__inner">
          <button
            type="button"
            className="cira-back-btn"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft aria-hidden="true" /> Back
          </button>

          <h1 className="cira-page-hero__title">{categoryLabel}</h1>

          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <Link to={`/products/${categorySlug}`}>{categoryLabel}</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Datasheet Grid */}
      <div className="cira-container cira-details-body">
        <div className="cira-details-grid">
          {/* Left Visual Stage */}
          <aside className="cira-details-visual">
            <div className="cira-details-img-box">
              <span className="cira-details-cat-badge">{product.name}</span>
              <img
                src={product.image}
                alt={product.name}
                className="cira-details-img"
              />
            </div>

            <div className="cira-details-cta-stack">
              <button
                type="button"
                className="cira-btn cira-btn--primary w-100"
                onClick={() => setIsPdfModalOpen(true)}
              >
                <FiFileText aria-hidden="true" /> View Official PDF Catalogue
              </button>
              <Link to="/Contact" className="cira-btn cira-btn--outline w-100">
                <FiMessageSquare aria-hidden="true" /> Request Technical Quote
              </Link>
            </div>
          </aside>

          {/* Right Specifications & Overview */}
          <div className="cira-details-info">
            <div className="cira-details-card">
              <div className="cira-details-card__head">
                <FiLayers aria-hidden="true" />
                <h2>Technical Overview</h2>
              </div>
              <h3 className="cira-details-model-subtitle">{product.name}</h3>
              <p className="cira-details-desc">
                {product.description ||
                  `${product.name} is part of Madras Control Components' ${categoryLabel} portfolio, engineered for industrial process accuracy, durability, and seamless plant integration.`}
              </p>

              <dl className="cira-details-meta-grid">
                <div>
                  <dt>Model / Name</dt>
                  <dd>{product.name}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{product.type}</dd>
                </div>
                {product.typeName && (
                  <div>
                    <dt>Sub-Type</dt>
                    <dd>{product.typeName}</dd>
                  </div>
                )}
                <div>
                  <dt>Catalogue PDF</dt>
                  <dd>{product.pdf ? "Available for View & Download" : "Available on Request"}</dd>
                </div>
              </dl>
            </div>

            {/* Technical Specifications Table */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="cira-details-card">
                <div className="cira-details-card__head">
                  <FiLayers aria-hidden="true" />
                  <h2>Technical &amp; Operating Specifications</h2>
                </div>
                <div className="cira-table-wrap">
                  <table className="cira-specs-table">
                    <thead>
                      <tr>
                        <th scope="col" style={{ width: "55px" }}>#</th>
                        <th scope="col">Parameter / Specification</th>
                        <th scope="col">Description / Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index}>
                          <td className="cira-spec-num">{spec.no || index + 1}</td>
                          <td className="cira-spec-desc">{spec.description}</td>
                          <td>{spec.material}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Flow Rate Reference Sizing Table */}
            {(product.id === 1 || (product.name || "").toLowerCase().includes("full bore electromagnetic")) && (
              <FlowRateTable variant="full-bore" />
            )}

            {(product.id === 7 || (product.name || "").toLowerCase().includes("insertion type electromagnetic")) && (
              <FlowRateTable variant="insertion" />
            )}

            {/* Manufacturer Application Table */}
            {product.applicationTable && product.applicationTable.length > 0 && (
              <div className="cira-details-card cira-application-card">
                <div className="cira-app-table-header">
                  <h2 className="cira-app-table-title">Application</h2>
                  <div className="cira-app-table-line" aria-hidden="true" />
                </div>
                <div className="cira-table-wrap">
                  <table className="cira-app-table">
                    <tbody>
                      {product.applicationTable.map((row, idx) => (
                        <tr key={idx}>
                          <td className="cira-app-prop">{row.property}</td>
                          <td className="cira-app-vals">
                            {row.values.length === 1 ? (
                              <span>{row.values[0]}</span>
                            ) : (
                              <div className="cira-app-multivals">
                                {row.values.map((v, i) => (
                                  <span key={i} className="cira-app-val-item">{v}</span>
                                ))}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Features & Applications */}
            {product.id === 6 ? (
              <EmfFeaturesApplications variant="thermal-mass" />
            ) : product.id === 21 ? (
              <EmfFeaturesApplications variant="radar-level" />
            ) : product.id === 22 ? (
              <EmfFeaturesApplications variant="guided-wave-radar" />
            ) : product.id === 23 ? (
              <EmfFeaturesApplications variant="ultrasonic-level" />
            ) : product.id === 25 ? (
              <EmfFeaturesApplications variant="point-level" />
            ) : product.id === 26 ? (
              <EmfFeaturesApplications variant="hydrostatic-level" />
            ) : product.id === 7 ? (
              <EmfFeaturesApplications variant="insertion" />
            ) : product.id === 2 ? (
              <EmfFeaturesApplications variant="battery" />
            ) : product.id === 4 ? (
              <EmfFeaturesApplications variant="solar" />
            ) : product.id === 8 ? (
              <EmfFeaturesApplications variant="ultrasonic-insertion" />
            ) : product.id === 3 ? (
              <EmfFeaturesApplications variant="ultrasonic" />
            ) : product.id === 11 ? (
              <EmfFeaturesApplications variant="btu-ultrasonic" />
            ) : product.id === 10 ? (
              <EmfFeaturesApplications variant="btu-heat" />
            ) : product.id === 5 || product.subCategory === "BTU METER" ? (
              <EmfFeaturesApplications variant="btu" />
            ) : (product.id === 1 || product.subCategory === "ELECTROMAGNETIC FLOW METER") ? (
              <EmfFeaturesApplications variant="full-bore" />
            ) : null}
          </div>
        </div>
      </div>

      {/* IN-APP PDF VIEWER & DOWNLOADER MODAL */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        pdfUrl={product.pdf}
        title={`${product.name} - Catalogue`}
        productName={product.name}
        productImage={product.image}
        productType={categoryLabel}
      />
    </div>
  );
}

export default ProductDetails;
