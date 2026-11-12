import React, { useState, useEffect } from "react";
import { FiPause, FiPlay } from "react-icons/fi";
import "./IndustrySolutions.css";
import water from "../images/scroll/water_in1.jpg";
import TyreProcessing from "../images/scroll/TyreProcessing.jpg";
import Petrochemical from "../images/scroll/Petrochemical.jpg";
import ChemicalsFertilizers from "../images/scroll/Chemicals&Fertilizer_in.jpg";
import FoodBeverage from "../images/scroll/Food&Beverage_in.webp";
import PulpPaper from "../images/scroll/Pulp&Paper_in.jpg";
import Power from "../images/scroll/power1.avif";
import Cement from "../images/scroll/Cement.jpg";

const INDUSTRIES = [
  {
    src: TyreProcessing,
    title: "Tyre Processing",
    tag: "Curing & Steam Control",
    summary:
      "Precision steam pressure and temperature transmitters, automated curing press control valves, and utility flow monitoring.",
  },
  {
    src: water,
    title: "Water Treatment",
    tag: "WTP • ETP • STP",
    summary:
      "Electromagnetic flowmeters, ultrasonic level transmitters, and automated control valves for treatment plants.",
  },
  {
    src: Petrochemical,
    title: "Petrochemical",
    tag: "Refining & Hydrocarbon Loops",
    summary:
      "High-integrity pressure & level transmitters, Coriolis mass flowmeters, and severe-service control & isolation valves.",
  },
  {
    src: ChemicalsFertilizers,
    title: "Chemicals & Fertilizers",
    tag: "Corrosive Media Control",
    summary:
      "FEP/PFA-lined butterfly & ball valves, Coriolis mass flowmeters, and high-precision pressure & level instrumentation.",
  },
  {
    src: Power,
    title: "Power Generation",
    tag: "Boiler & Turbine Control",
    summary:
      "High-pressure transmitters, temperature sensors, turbine vibration monitoring, and PLC/DCS integration.",
  },
  {
    src: FoodBeverage,
    title: "Food & Beverage",
    tag: "Hygienic Processing",
    summary:
      "Sanitary temperature, flow, and level measurement solutions engineered for batch consistency and clean-in-place cycles.",
  },
  {
    src: PulpPaper,
    title: "Pulp & Paper",
    tag: "Slurry & Steam Loops",
    summary:
      "Rugged vortex & electromagnetic flow measurement, control valves, and vibration monitoring for rotating machinery.",
  },
  {
    src: Cement,
    title: "Cement & Mining",
    tag: "Heavy Process Control",
    summary:
      "Non-contact radar level sensors for silos, flow & pressure monitoring, and heavy-duty pneumatic valve actuation.",
  },
];

const IndustrySolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (!isPlaying) return undefined;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="cira-industries" aria-labelledby="industries-heading">
      <div className="cira-container">
        <div className="cira-industries__header">
          <div>
            <span className="cira-eyebrow">Industry Verticals</span>
            <h2 id="industries-heading" className="cira-section-title">
              Engineered for Critical Process Industries
            </h2>
            <p className="cira-section-subtitle">
              Tailored instrumentation, valve automation, and process monitoring across eight core industrial sectors.
            </p>
          </div>

          <button
            type="button"
            className="cira-autoplay-btn"
            onClick={() => setIsPlaying((prev) => !prev)}
            aria-label={isPlaying ? "Pause industry showcase rotation" : "Play industry showcase rotation"}
          >
            {isPlaying ? <FiPause aria-hidden="true" /> : <FiPlay aria-hidden="true" />}
            <span>{isPlaying ? "Pause Rotation" : "Play Rotation"}</span>
          </button>
        </div>

        <div className="cira-accordion-gallery" role="region" aria-label="Industry verticals showcase">
          {INDUSTRIES.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={item.title}
                type="button"
                className={`cira-industry-panel ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-expanded={isActive}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="cira-industry-panel__img"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="cira-industry-panel__scrim" aria-hidden="true" />
                <div className="cira-industry-panel__content">
                  <span className="cira-industry-panel__tag">{item.tag}</span>
                  <h3 className="cira-industry-panel__title">{item.title}</h3>
                  {isActive && (
                    <p className="cira-industry-panel__desc">{item.summary}</p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
