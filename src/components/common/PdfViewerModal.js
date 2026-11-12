import React, { useState, useEffect, useRef } from "react";
import "./PdfViewerModal.css";
import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaExpand,
  FaCompress,
  FaBars,
  FaFilePdf,
  FaSyncAlt,
  FaClock,
} from "react-icons/fa";

/**
 * Extracts Google Drive ID if present and returns the embedded preview URL
 */
const getEmbedUrl = (url, engine = "drive") => {
  if (!url) return "";
  
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1];
    if (engine === "gview") {
      const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      return `https://docs.google.com/gview?url=${encodeURIComponent(directUrl)}&embedded=true`;
    }
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  
  // Standard PDF or other external link
  return url;
};

/**
 * Returns a direct download link for Google Drive or local files
 */
const getDownloadUrl = (url) => {
  if (!url) return "";
  
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (driveMatch && driveMatch[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  
  return url;
};

const PdfViewerModal = ({
  isOpen,
  onClose,
  pdfUrl,
  title = "Product Catalogue",
  productName,
  productImage,
  productType,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [viewerEngine, setViewerEngine] = useState("drive");
  const modalRef = useRef(null);
  const loadTimeoutRef = useRef(null);

  const hasPdf = Boolean(pdfUrl);
  const rawUrl = pdfUrl || "";
  const isLocalPdf = hasPdf && !rawUrl.includes("drive.google.com") && !rawUrl.includes("docs.google.com");
  const embedUrl = hasPdf ? getEmbedUrl(rawUrl, viewerEngine) : "";
  const finalEmbedUrl = isLocalPdf ? `${embedUrl}#toolbar=0&navpanes=0` : embedUrl;
  const downloadUrl = hasPdf ? getDownloadUrl(rawUrl) : "";

  // Handle ESC key, scroll locking, and smart load timeout
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      
      if (!hasPdf || isLocalPdf) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
        // Smart safety timeout for external Google Drive URLs
        loadTimeoutRef.current = setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      if (loadTimeoutRef.current) {
        clearTimeout(loadTimeoutRef.current);
      }
    };
  }, [isOpen, onClose, embedUrl, isLocalPdf, hasPdf]);

  if (!isOpen) return null;

  const handleIframeLoad = () => {
    setIsLoading(false);
    if (loadTimeoutRef.current) {
      clearTimeout(loadTimeoutRef.current);
    }
  };

  const toggleEngine = () => {
    setIsLoading(true);
    setViewerEngine((prev) => (prev === "drive" ? "gview" : "drive"));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    if (!hasPdf) return;
    if (isLocalPdf) {
      // Instant native local download
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `${productName || title}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Silent download frame for external links
      const hiddenFrame = document.createElement("iframe");
      hiddenFrame.style.display = "none";
      hiddenFrame.src = downloadUrl;
      document.body.appendChild(hiddenFrame);

      setTimeout(() => {
        try {
          document.body.removeChild(hiddenFrame);
        } catch (_) {}
      }, 6000);
    }
  };

  const handlePrint = () => {
    if (!hasPdf) return;
    const iframe = document.querySelector(".pdf-iframe");
    if (iframe) {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (_) {
        window.print();
      }
    } else {
      window.print();
    }
  };

  return (
    <div
      className="pdf-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
    >
      <div
        className={`pdf-modal-container ${isFullscreen ? "fullscreen" : ""}`}
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        {/* TOP TOOLBAR */}
        <header className="pdf-viewer-toolbar">
          <div className="toolbar-left">
            <button
              type="button"
              className="toolbar-btn close-modal-btn"
              onClick={onClose}
              title="Close Viewer (Esc)"
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <button
              type="button"
              className={`toolbar-btn sidebar-toggle-btn ${sidebarOpen ? "active" : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title="Toggle Thumbnails Sidebar"
              aria-label="Toggle Sidebar"
            >
              <FaBars />
            </button>

            <div className="toolbar-doc-title" id="pdf-modal-title">
              <FaFilePdf className="doc-icon" aria-hidden="true" />
              <span>{title}</span>
            </div>
          </div>

          <div className="toolbar-center">
            <span className="doc-badge">{hasPdf ? "PDF DOCUMENT" : "CATALOGUE STATUS"}</span>
            {hasPdf && !isLocalPdf && rawUrl.includes("drive.google.com") && (
              <button
                className="toolbar-btn engine-switch-btn"
                onClick={toggleEngine}
                title="Switch Viewer Mode"
              >
                <FaSyncAlt />
                <span className="btn-label">
                  {viewerEngine === "drive" ? "Fast Engine" : "Standard Engine"}
                </span>
              </button>
            )}
          </div>

          <div className="toolbar-right">
            {hasPdf && (
              <>
                <button
                  className="toolbar-btn primary-action-btn"
                  onClick={handleDownload}
                  title="Download PDF"
                >
                  <FaDownload />
                  <span className="btn-label">Download</span>
                </button>

                <button
                  className="toolbar-btn"
                  onClick={handlePrint}
                  title="Print PDF"
                >
                  <FaPrint />
                  <span className="btn-label">Print</span>
                </button>
              </>
            )}

            <button
              className="toolbar-btn"
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </header>

        {/* VIEWER BODY */}
        <div className="pdf-viewer-body">
          {/* LEFT THUMBNAIL SIDEBAR */}
          {sidebarOpen && (
            <aside className="pdf-viewer-sidebar">
              <div className="sidebar-header">
                <h6>Preview</h6>
              </div>

              <div className="sidebar-thumbnails">
                {productImage && (
                  <div className="thumbnail-item active" title={productName || title}>
                    <img src={productImage} alt={productName || title} className="thumb-img" />
                    <span className="thumb-label">{productName || title}</span>
                  </div>
                )}

                {productType && (
                  <div className="sidebar-meta-box">
                    <span className="meta-category-label">Category</span>
                    <strong className="meta-category-val">{productType}</strong>
                  </div>
                )}
              </div>
            </aside>
          )}

          {/* MAIN PDF FRAME OR COMING SOON VIEW */}
          <main className="pdf-viewer-content">
            {hasPdf ? (
              <>
                {!isLocalPdf && <div className="gdrive-popout-blocker" aria-hidden="true" />}

                {isLoading && (
                  <div className="pdf-loading-spinner">
                    <div className="spinner-border text-danger" role="status">
                      <span className="visually-hidden">Loading PDF...</span>
                    </div>
                    <p className="loading-text">Loading PDF document...</p>
                  </div>
                )}

                <iframe
                  key={finalEmbedUrl}
                  src={finalEmbedUrl}
                  title={title}
                  className="pdf-iframe"
                  onLoad={handleIframeLoad}
                  allow="autoplay"
                  loading="eager"
                />
              </>
            ) : (
              <div className="pdf-coming-soon-container">
                <div className="pdf-coming-soon-card">
                  <div className="coming-soon-icon-wrapper">
                    <FaClock className="coming-soon-icon" />
                  </div>
                  <h2 className="coming-soon-title">Catalogue Coming Soon</h2>
                  <p className="coming-soon-subtitle">
                    The official PDF catalogue for <strong>{productName || "this product"}</strong> is currently being prepared.
                  </p>
                  <p className="coming-soon-desc">
                    For immediate technical specifications or sales inquiries, please contact our team.
                  </p>
                  <div className="coming-soon-actions">
                    <button className="coming-soon-close-btn" onClick={onClose}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
