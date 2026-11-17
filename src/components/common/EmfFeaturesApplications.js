import React from "react";
import {
  FULL_BORE_FEATURES,
  FULL_BORE_APPLICATIONS,
  INSERTION_FEATURES,
  INSERTION_APPLICATIONS,
  BATTERY_OPERATED_FEATURES,
  BATTERY_OPERATED_APPLICATIONS,
  SOLAR_POWERED_FEATURES,
  SOLAR_POWERED_APPLICATIONS,
} from "../../data/electromagneticFeatures";
import "./EmfFeaturesApplications.css";

function EmfFeaturesApplications({ variant = "full-bore" }) {
  let features = FULL_BORE_FEATURES;
  let applications = FULL_BORE_APPLICATIONS;
  let ariaLabel = "Full Bore Electromagnetic Flow Meter Features and Applications";

  if (variant === "insertion") {
    features = INSERTION_FEATURES;
    applications = INSERTION_APPLICATIONS;
    ariaLabel = "Insertion Type Electromagnetic Flow Meter Features and Applications";
  } else if (variant === "battery" || variant === "battery-operated") {
    features = BATTERY_OPERATED_FEATURES;
    applications = BATTERY_OPERATED_APPLICATIONS;
    ariaLabel = "Battery Operated Electromagnetic Flow Meter Features and Applications";
  } else if (variant === "solar" || variant === "solar-powered") {
    features = SOLAR_POWERED_FEATURES;
    applications = SOLAR_POWERED_APPLICATIONS;
    ariaLabel = "Solar Powered Flow Meter Features and Applications";
  }

  return (
    <section className="emf-info-card" aria-label={ariaLabel}>
      <div className="emf-info-grid">
        {/* Features Column */}
        <div className="emf-info-col emf-features-col">
          <h3 className="emf-col-title">Features</h3>
          <ul className="emf-list emf-features-list">
            {features.map((item, index) => (
              <li key={index} className="emf-list-item">
                <span className="emf-bullet" aria-hidden="true">•</span>
                <span className="emf-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications Column */}
        <div className="emf-info-col emf-apps-col">
          <h3 className="emf-col-title">Applications</h3>
          {Array.isArray(applications.description) ? (
            applications.description.map((desc, idx) => (
              <p key={idx} className="emf-apps-desc">
                {desc}
              </p>
            ))
          ) : applications.description ? (
            <p className="emf-apps-desc">{applications.description}</p>
          ) : null}
          {applications.industryTitle && (
            <p className="emf-apps-lead">{applications.industryTitle}</p>
          )}
          <ul className="emf-list emf-industries-list">
            {applications.industries.map((industry, index) => (
              <li key={index} className="emf-list-item">
                <span className="emf-bullet" aria-hidden="true">•</span>
                <span className="emf-text">{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default EmfFeaturesApplications;
