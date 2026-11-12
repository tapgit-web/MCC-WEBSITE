import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiSliders, FiShield, FiArrowRight } from "react-icons/fi";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";
import "./Services.css";

const FEATURES = [
  {
    icon: <FiCheckCircle aria-hidden="true" />,
    code: "SVC-01",
    title: "NABL Calibration",
    text: "NABL accredited calibration for flow, temperature, pressure, level, and electrical parameters with traceable certification and minimal plant downtime.",
    highlights: ["Traceable Standards", "Flow, Temp, Pressure, Level & Electrical", "Audit-Ready Certificates"],
  },
  {
    icon: <FiSliders aria-hidden="true" />,
    code: "SVC-02",
    title: "Installation & Commissioning",
    text: "Dedicated engineering team for executing mechanical, electrical, and instrumentation-oriented turnkey projects.",
    highlights: ["End-to-End Loop Testing", "Installation of Tailor-Made Solutions", "Rapid Site Handover"],
  },
  {
    icon: <FiShield aria-hidden="true" />,
    code: "SVC-03",
    title: "Annual Maintenance Contract",
    text: "Comprehensive preventive & breakdown maintenance contracts for PLC, DCS, field instruments, and control valve assemblies.",
    highlights: ["PLC & DCS Health Audits", "Preventive Servicing", "Priority Spare Support"],
  },
];

export const Services = () => {
  return (
    <section className="cira-services" aria-labelledby="services-heading">
      <div className="cira-container">
        <div className="cira-section-header">
          <span className="cira-eyebrow">Lifecycle Services</span>
          <h2 id="services-heading" className="cira-section-title">
            Beyond Supply: End-to-End Engineering Support
          </h2>
          <p className="cira-section-subtitle">
            From accredited calibration to turnkey commissioning and ongoing AMC, we keep your process plants running at peak efficiency.
          </p>
        </div>

        <StaggerGrid className="cira-services-grid">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.code} className="d-flex">
              <article className="cira-service-card">
                <div className="cira-service-card__head">
                  <div className="cira-service-card__icon">{feature.icon}</div>
                  <span className="cira-service-card__code">{feature.code}</span>
                </div>

                <h3 className="cira-service-card__title">{feature.title}</h3>
                <p className="cira-service-card__text">{feature.text}</p>

                <ul className="cira-service-card__list">
                  {feature.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link to="/Contact" className="cira-service-card__link">
                  Schedule Service <FiArrowRight aria-hidden="true" />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
