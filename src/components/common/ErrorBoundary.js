import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="cira-container py-5 text-center" style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ maxWidth: "580px", padding: "2.5rem", background: "#ffffff", borderRadius: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0" }}>
            <h2 style={{ color: "#0f172a", marginBottom: "1rem", fontWeight: 700 }}>Something went wrong</h2>
            <p style={{ color: "#64748b", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              An unexpected error occurred while loading this view. You can return to the product catalogue or reload the page.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
              <button
                type="button"
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="cira-btn cira-btn--primary"
                style={{ padding: "0.55rem 1.25rem" }}
              >
                Reload Page
              </button>
              <Link
                to="/products"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="cira-btn cira-btn--outline"
                style={{ padding: "0.55rem 1.25rem" }}
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
