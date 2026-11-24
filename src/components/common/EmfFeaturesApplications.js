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
  ULTRASONIC_FEATURES,
  ULTRASONIC_APPLICATIONS,
  ULTRASONIC_INSERTION_FEATURES,
  ULTRASONIC_INSERTION_APPLICATIONS,
  BTU_METER_FEATURES,
  BTU_METER_APPLICATIONS,
  BTU_HEAT_FEATURES,
  BTU_HEAT_APPLICATIONS,
  BTU_ULTRASONIC_FEATURES,
  BTU_ULTRASONIC_APPLICATIONS,
  RADAR_LEVEL_APPLICATIONS,
  RADAR_LEVEL_BENEFITS,
  GUIDED_WAVE_RADAR_FEATURES,
  GUIDED_WAVE_RADAR_APPLICATIONS,
  ULTRASONIC_LEVEL_BENEFITS,
  ULTRASONIC_LEVEL_APPLICATIONS,
  POINT_LEVEL_FEATURES,
  POINT_LEVEL_APPLICATIONS,
  HYDROSTATIC_LEVEL_FEATURES,
  HYDROSTATIC_LEVEL_APPLICATIONS,
  COMPACT_PRESSURE_FEATURES,
  COMPACT_PRESSURE_APPLICATIONS,
  HIGH_ACCURACY_PRESSURE_FEATURES,
  HIGH_ACCURACY_PRESSURE_APPLICATIONS,
  INTEGRAL_DISPLAY_PRESSURE_FEATURES,
  INTEGRAL_DISPLAY_PRESSURE_APPLICATIONS,
  THERMAL_MASS_FEATURES,
  THERMAL_MASS_APPLICATIONS,
  FUEL_GAS_FEATURES,
  FUEL_GAS_APPLICATIONS,
} from "../../data/electromagneticFeatures";
import "./EmfFeaturesApplications.css";

function EmfFeaturesApplications({ variant = "full-bore" }) {
  let features = FULL_BORE_FEATURES;
  let applications = FULL_BORE_APPLICATIONS;
  let featuresTitle = "Features";
  let applicationsTitle = applications.title || "Applications";
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
  } else if (variant === "ultrasonic" || variant === "clamp-on") {
    features = ULTRASONIC_FEATURES;
    applications = ULTRASONIC_APPLICATIONS;
    ariaLabel = "Clamp On Type Ultrasonic Flow Meter Features and Applications";
  } else if (variant === "ultrasonic-insertion" || variant === "insertion-ultrasonic") {
    features = ULTRASONIC_INSERTION_FEATURES;
    applications = ULTRASONIC_INSERTION_APPLICATIONS;
    ariaLabel = "Insertion Type Ultrasonic Flow Meter Features and Applications";
  } else if (variant === "btu-heat" || variant === "heat-application") {
    features = BTU_HEAT_FEATURES;
    applications = BTU_HEAT_APPLICATIONS;
    ariaLabel = "BTU Meter for Heat Application Features and Applications";
  } else if (variant === "btu-ultrasonic" || variant === "ultrasonic-btu") {
    features = BTU_ULTRASONIC_FEATURES;
    applications = BTU_ULTRASONIC_APPLICATIONS;
    ariaLabel = "Ultrasonic BTU Meter Features and Applications";
  } else if (variant === "btu" || variant === "btu-meter" || variant === "btu-chiller") {
    features = BTU_METER_FEATURES;
    applications = BTU_METER_APPLICATIONS;
    ariaLabel = "BTU Meter for Chiller Application Features and Applications";
  } else if (variant === "radar-level" || variant === "radar") {
    features = RADAR_LEVEL_APPLICATIONS;
    applications = RADAR_LEVEL_BENEFITS;
    featuresTitle = "Application";
    applicationsTitle = "Your benefits";
    ariaLabel = "Radar Level Transmitter Application and Your benefits";
  } else if (variant === "guided-wave-radar" || variant === "gwr") {
    features = GUIDED_WAVE_RADAR_FEATURES;
    applications = GUIDED_WAVE_RADAR_APPLICATIONS;
    featuresTitle = "Features";
    applicationsTitle = "Application";
    ariaLabel = "Guided Wave Radar Level Features and Application";
  } else if (variant === "ultrasonic-level") {
    features = ULTRASONIC_LEVEL_BENEFITS;
    applications = ULTRASONIC_LEVEL_APPLICATIONS;
    featuresTitle = "Benefits";
    applicationsTitle = "Applications";
    ariaLabel = "Ultrasonic Level Transmitter Benefits and Applications";
  } else if (variant === "point-level" || variant === "point") {
    features = POINT_LEVEL_FEATURES;
    applications = POINT_LEVEL_APPLICATIONS;
    featuresTitle = "Features";
    applicationsTitle = "Application";
    ariaLabel = "Point Level Sensor Features and Application";
  } else if (variant === "hydrostatic-level" || variant === "hydrostatic") {
    features = HYDROSTATIC_LEVEL_FEATURES;
    applications = HYDROSTATIC_LEVEL_APPLICATIONS;
    featuresTitle = "Features";
    applicationsTitle = "Application";
    ariaLabel = "Hydrostatic Level Transmitter Features and Application";
  } else if (variant === "compact-pressure" || variant === "pressure") {
    features = [];
    applications = COMPACT_PRESSURE_APPLICATIONS;
    featuresTitle = "";
    applicationsTitle = "Application";
    ariaLabel = "Compact Pressure Transmitter Application";
  } else if (variant === "high-accuracy-pressure" || variant === "accuracy-pressure") {
    features = [];
    applications = HIGH_ACCURACY_PRESSURE_APPLICATIONS;
    featuresTitle = "";
    applicationsTitle = "Application";
    ariaLabel = "Transmitters For High Accuracy Application";
  } else if (variant === "integral-display-pressure" || variant === "integral-display") {
    features = [];
    applications = INTEGRAL_DISPLAY_PRESSURE_APPLICATIONS;
    featuresTitle = "";
    applicationsTitle = "Application";
    ariaLabel = "Transmitter With Integral Display Application";
  } else if (variant === "thermal-mass" || variant === "full-bore-thermal-mass") {
    features = THERMAL_MASS_FEATURES;
    applications = THERMAL_MASS_APPLICATIONS;
    featuresTitle = "Features";
    applicationsTitle = "Applications";
    ariaLabel = "Full Bore Thermal Mass Flow Meter Features and Applications";
  } else if (variant === "fuel-gas" || variant === "fuel-gas-flowmeter") {
    features = FUEL_GAS_FEATURES;
    applications = FUEL_GAS_APPLICATIONS;
    featuresTitle = "Features";
    applicationsTitle = "Applications";
    ariaLabel = "Flowmeter For Fuel Gas Applications Features and Applications";
  }

  if (
    variant !== "radar-level" &&
    variant !== "radar" &&
    variant !== "guided-wave-radar" &&
    variant !== "gwr" &&
    variant !== "ultrasonic-level" &&
    variant !== "point-level" &&
    variant !== "point" &&
    variant !== "hydrostatic-level" &&
    variant !== "hydrostatic" &&
    variant !== "compact-pressure" &&
    variant !== "pressure" &&
    variant !== "high-accuracy-pressure" &&
    variant !== "accuracy-pressure" &&
    variant !== "integral-display-pressure" &&
    variant !== "integral-display"
  ) {
    applicationsTitle = applications.title || "Applications";
  }

  const hasFeatures = Array.isArray(features) && features.length > 0;
  const hasApplications = Boolean(applications);

  if (!hasFeatures && !hasApplications) {
    return null;
  }

  return (
    <section className="emf-info-card" aria-label={ariaLabel}>
      <div className={`emf-info-grid ${!hasFeatures ? "emf-info-grid--single-col" : ""}`}>
        {/* Features Column */}
        {hasFeatures && (
          <div className="emf-info-col emf-features-col">
            <h3 className="emf-col-title">{featuresTitle}</h3>
            <ul className="emf-list emf-features-list">
              {features.map((item, index) => (
                <li key={index} className="emf-list-item">
                  <span className="emf-bullet" aria-hidden="true">•</span>
                  <span className="emf-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Applications Column */}
        {hasApplications && (
          <div className="emf-info-col emf-apps-col">
          <h3 className="emf-col-title">{applicationsTitle}</h3>
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
          {applications.note && (
            <p
              className="emf-apps-note"
              style={{
                marginTop: "0.85rem",
                fontSize: "0.85rem",
                color: "#64748b",
                fontStyle: "italic",
                fontWeight: 600,
              }}
            >
              {applications.note}
            </p>
          )}
        </div>
      )}
    </div>
  </section>
);
}

export default EmfFeaturesApplications;
