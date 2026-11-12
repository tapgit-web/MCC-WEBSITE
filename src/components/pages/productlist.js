import React from "react";
import "./Card.css";
import Card from "./Card";
import products from "../../data/products";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";

import flowImg from "../images/product/flow/ELECTROMAGNETICFLOWMETER.jpg";
import levelImg from "../images/product/level/RadarLevel.jpeg";
import pressureImg from "../images/product/pressure/dpt.png";
import tempImg from "../images/product/temperature/head.png";
import vibrationImg from "../images/product/vibration/sensors.png";
import valveImg from "../images/product/valve/2pcsballvalve.png";
import plcImg from "../images/product/plc_dcs_real.jpg";

const countByType = (targetType) => {
  const norm = targetType.trim().toLowerCase();
  return products.filter((p) => (p.type || "").trim().toLowerCase() === norm).length;
};

const CARD_DATA = [
  {
    title: "Flow Measurement",
    iconSrc: flowImg,
    theme: "blue",
    type: "Flow Measurement",
    subtitle: "Electromagnetic, Coriolis mass, vortex, ultrasonic & thermal mass flowmeters.",
  },
  {
    title: "Level Measurement",
    iconSrc: levelImg,
    theme: "red",
    type: "Level Measurement",
    subtitle: "Radar, guided wave radar, ultrasonic, DP, capacitance & float level switches.",
  },
  {
    title: "Pressure Measurement",
    iconSrc: pressureImg,
    theme: "graydark",
    type: "Pressure Measurement",
    subtitle: "Differential, absolute and gauge pressure transmitters for harsh process loops.",
  },
  {
    title: "Temperature Measurement",
    iconSrc: tempImg,
    theme: "orange",
    type: "Temperature Measurement",
    subtitle: "RTDs, thermocouples, head-mounted transmitters & high-accuracy field sensors.",
  },
  {
    title: "Vibration Monitoring",
    iconSrc: vibrationImg,
    theme: "red",
    type: "vibration monitoring",
    subtitle: "Proximity sensors, velocity, displacement & bearing condition monitoring units.",
  },
  {
    title: "Control & ON/OFF Valves",
    iconSrc: valveImg,
    theme: "orange",
    type: "Valve",
    subtitle: "2-PC/3-PC/3-4 way ball valves, FEP/PFA lined & lug/wafer butterfly valves.",
  },
  {
    title: "PLC & DCS Solutions",
    iconSrc: plcImg,
    theme: "blue",
    type: "PLC & DCS Solutions",
    subtitle: "Turnkey control panels, SCADA/HMI engineering, migrations & AMC support.",
    isFeatured: true,
  },
];

function Productlist() {
  return (
    <section id="product-categories" className="cira-categories-section" aria-labelledby="categories-heading">
      <div className="cira-container">
        <div className="cira-section-header">
          <span className="cira-eyebrow">Product Portfolio</span>
          <h2 id="categories-heading" className="cira-section-title">
            Precision Instruments and Control Equipments
          </h2>
          <p className="cira-section-subtitle">
            Select a category to check out technical catalogues, datasheets, and detailed product specifications.
          </p>
        </div>

        <StaggerGrid className="cira-categories-grid">
          {CARD_DATA.map((card) => {
            const count = countByType(card.type);
            const countLabel = count > 0 ? `${count} Products` : "Turnkey Systems";
            return (
              <StaggerItem
                key={card.title}
                className={card.isFeatured ? "cira-cat-card-slot--featured" : "cira-cat-card-slot"}
              >
                <Card
                  title={card.title}
                  iconSrc={card.iconSrc}
                  theme={card.theme}
                  type={card.type}
                  countLabel={countLabel}
                  subtitle={card.subtitle}
                  isFeatured={Boolean(card.isFeatured)}
                />
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}

export default Productlist;
