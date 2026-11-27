import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiSearch, FiFileText, FiList, FiCpu, FiCheckCircle, FiArrowRight, FiGrid } from "react-icons/fi";
import products from "../../data/products";
import "./ProductLists.css";
import PdfViewerModal from "../common/PdfViewerModal";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerGrid, StaggerItem } from "../animation/MotionPrimitives";

import FullBoreSR1000A from "../images/product/flow/FullBore_SR1000A.jpg";
import InsertionSR1000i from "../images/product/flow/Insertion_SR1000i.png";
import BatteryOperatedSS1021 from "../images/product/flow/BatteryOperated_SS1021.png";
import flowImg from "../images/product/flow/ELECTROMAGNETICFLOWMETER.jpg";
import Ultrasonic1 from "../images/product/flow/ClampOn_Ultrasonic.png";
import InsertionUltrasonic from "../images/product/flow/Insertion_Ultrasonic.png";
import FullBoreUltrasonic from "../images/product/flow/FullBore_Ultrasonic.png";
import SolarPoweredFM from "../images/product/flow/SolarPowered_EMF.jpg";
import BtuMeter from "../images/product/flow/BTUMeter_Chiller.png";
import BtuMeterHeat from "../images/product/flow/BTUMeter_Heat.png";
import BtuMeterUltrasonic from "../images/product/flow/BTUMeter_Ultrasonic.png";
import ThermalMass from "../images/product/flow/THERMAL MASS FLOWMETER1.jpg";
import FullBoreThermalMass from "../images/product/flow/FullBore_ThermalMass.png";
import ThermalMassInsertion from "../images/product/flow/ThermalMass_Insertion.jpg";
import FuelGasThermalMass from "../images/product/flow/FuelGas_ThermalMass_ATEX.png";
import levelImg from "../images/product/level/RadarLevel.jpeg";
import pressureImg from "../images/product/pressure/Compact_Pressure_Transmitter.png";
import tempImg from "../images/product/temperature/head.png";
import vibrationImg from "../images/product/vibration/sensors.png";
import ballValveImg from "../images/product/valve/2pcsballvalve.png";
import bfvImg from "../images/product/valve/LineedButterfly.png";
import valveImg from "../images/product/valve/3pcsballvalve.png";
import plcImg from "../images/product/plc_dcs_real.jpg";

// Flow Measurement sub-category groupings matching Image 2
const FLOW_SECTIONS = [
  {
    id: "electromagnetic",
    heading: "1. ELECTROMAGNETIC FLOW METER",
    subCatKey: "ELECTROMAGNETIC FLOW METER",
    shortName: "1. Electromagnetic",
    description:
      "In-line and hot-tap insertion electromagnetic flow meters engineered for conductive liquids, wastewater, effluent, raw water, and chemical slurries with superior accuracy.",
    items: [
      {
        id: 1,
        name: "1. Full Bore Electromagnetic Flow Meter",
        subCategory: "ELECTROMAGNETIC FLOW METER",
        image: FullBoreSR1000A,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "Full Bore",
        specs: [
          { description: "Design", material: "Full Bore Flanged Spool" },
          { description: "Line Size", material: "DN10 to DN1600 mm" },
          { description: "Accuracy", material: "±0.5% of reading" },
          { description: "Protection", material: "IP68 Sensor / IP67 Transmitter" },
        ],
      },
      {
        id: 7,
        name: "2. Insertion Type Electromagnetic Flow Meter",
        subCategory: "ELECTROMAGNETIC FLOW METER",
        image: InsertionSR1000i,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "Insertion Type",
        specs: [
          { description: "Design", material: "Hot-Tap Insertion Spool" },
          { description: "Line Size", material: "DN100 to DN3000 mm" },
          { description: "Accuracy", material: "±1.0% to ±1.5% of reading" },
          { description: "Protection", material: "IP68 Submersible Sensor" },
        ],
      },
      {
        id: 2,
        name: "3. Battery Operated Electromagnetic Flow Meter",
        subCategory: "ELECTROMAGNETIC FLOW METER",
        image: BatteryOperatedSS1021,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "Battery Operated",
        specs: [
          { description: "Power", material: "5 to 10 Year Battery Life" },
          { description: "Bore Size", material: "DN15 to DN1200 mm flanged" },
          { description: "Telemetry", material: "4G / GPRS / NB-IoT / Modbus" },
          { description: "Protection", material: "IP68 Hermetically Sealed" },
        ],
      },
      {
        id: 4,
        name: "4. Solar Powered Electromagnetic Flow Meter",
        subCategory: "ELECTROMAGNETIC FLOW METER",
        image: SolarPoweredFM,
        pdf: "/pdf/Flow/1.EMF.pdf",
        tag: "Solar PV",
        specs: [
          { description: "Power", material: "Monocrystalline Solar PV + LiFePO4" },
          { description: "Autonomy", material: "Up to 30 Days Zero Sunlight" },
          { description: "Telemetry", material: "Cellular 4G Cloud Telemetry" },
          { description: "Protection", material: "IP68 Submersible & Weatherproof" },
        ],
      },
    ],
  },
  {
    id: "ultrasonic",
    heading: "2. ULTRASONIC FLOW METER",
    subCatKey: "ULTRASONIC FLOW METER",
    shortName: "2. Ultrasonic",
    description:
      "Transit-time clamp-on and hot-tap insertion ultrasonic flow meters for precision liquid flow metering without process downtime or pressure loss.",
    items: [
      {
        id: 3,
        name: "1. Clamp On Type Ultrasonic Flow Meter",
        subCategory: "ULTRASONIC FLOW METER",
        image: Ultrasonic1,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Non-Invasive",
        specs: [
          { description: "Principle", material: "Transit-Time Difference" },
          { description: "Pipe Size", material: "DN15 to DN6000 mm Clamp-on" },
          { description: "Accuracy", material: "±1.0% of reading" },
          { description: "Outputs", material: "4-20mA, OCT Pulse, Modbus" },
        ],
      },
      {
        id: 8,
        name: "2. Insertion Type Ultrasonic Flow Meter",
        subCategory: "ULTRASONIC FLOW METER",
        image: InsertionUltrasonic,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Hot-Tap Insertion",
        specs: [
          { description: "Installation", material: "Hot-Tap Wetted Insertion Sensors" },
          { description: "Pipe Size", material: "DN50 to DN6000 mm" },
          { description: "Accuracy", material: "±1.0% of reading" },
          { description: "Medium", material: "Clear water applications only" },
        ],
      },
      {
        id: 9,
        name: "3. Full Bore Ultrasonic Flow Meter",
        subCategory: "ULTRASONIC FLOW METER",
        image: FullBoreUltrasonic,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Full Bore Inline",
        specs: [
          { description: "Design", material: "Full Bore Stainless Steel Spool" },
          { description: "Principle", material: "Inline Transit-Time Ultrasonic" },
          { description: "Accuracy", material: "±0.5% to ±1.0% of reading" },
          { description: "Protection", material: "IP67 / IP69K Stainless Steel Body" },
        ],
      },
    ],
  },
  {
    id: "btu",
    heading: "3. BTU METER",
    subCatKey: "BTU METER",
    shortName: "3. BTU Meter",
    description:
      "Thermal energy & BTU measurement systems engineered for chiller cooling and high-temperature thermic fluid heating applications with precision temperature difference sensing.",
    items: [
      {
        id: 5,
        name: "1. BTU Meter for Chiller Application",
        subCategory: "BTU METER",
        image: BtuMeter,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "EN1434 Class 2",
        specs: [
          { description: "Application", material: "Chilled & Hot Water Energy Meter" },
          { description: "Sensors", material: "Electromagnetic Flow + Matched PT1000" },
          { description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
          { description: "Power Supply", material: "24V DC / 230V AC" },
        ],
      },
      {
        id: 10,
        name: "2. BTU Meter for Heat Application",
        subCategory: "BTU METER",
        image: BtuMeterHeat,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Thermic Fluid",
        specs: [
          { description: "Application", material: "Thermic Fluid Heat Energy Transfer" },
          { description: "Thermic Fluids", material: "Hytherm, Dowtherm, Therminol, Water" },
          { description: "Engineering Units", material: "Kcal/hr, MKcal, m³/hr, °C" },
          { description: "Data Logging", material: "Up to 5500 extended readings" },
        ],
      },
      {
        id: 11,
        name: "3. Ultrasonic BTU Meter",
        subCategory: "BTU METER",
        image: BtuMeterUltrasonic,
        pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
        tag: "Clamp-On BTU",
        specs: [
          { description: "Line Size", material: "DN50 to DN1500 mm" },
          { description: "Principle", material: "Ultrasonic Clamp-On + Matched Temp" },
          { description: "Output", material: "Isolated 4-20 mA Flow Proportional" },
          { description: "Installation", material: "Non-invasive (No Pipe Cutting)" },
        ],
      },
    ],
  },
  {
    id: "thermal-mass",
    heading: "4. THERMAL MASS FLOW METER",
    subCatKey: "THERMAL MASS FLOW METER",
    shortName: "4. Thermal Mass",
    description:
      "Direct mass flow rate measurement for compressed air, aeration air, biogas, and industrial gases without external pressure/temperature compensation.",
    items: [
      {
        id: 6,
        name: "1. Full Bore THERMAL MASS FLOW METER",
        subCategory: "THERMAL MASS FLOW METER",
        image: FullBoreThermalMass,
        pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
        tag: "Full Bore Inline",
        specs: [
          { description: "Principle", material: "Direct Mass Flow (No Temp/Pressure Comp)" },
          { description: "Turndown", material: "20:1 Wide Dynamic Turndown" },
          { description: "Wireless", material: "Remote Readings & Wireless Data Transfer" },
          { description: "Outputs", material: "Pulse, 4-20mA & RS485 Networking" },
        ],
      },
      {
        id: 12,
        name: "2. Thermal Mass Insertion Type",
        subCategory: "THERMAL MASS FLOW METER",
        image: ThermalMassInsertion,
        pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
        tag: "Insertion Type",
        specs: [
          { description: "Measuring Range", material: "Adjustable pipe diameters 14 to 254 mm" },
          { description: "Media", material: "Compressed Air" },
          { description: "Pressure Rating", material: "16 bar (1.6 MPa)" },
          { description: "Burst Pressure", material: "64 bar (6.4 MPa)" },
        ],
      },
      {
        id: 13,
        name: "3. Flowmeter For Fuel Gas Applications",
        subCategory: "THERMAL MASS FLOW METER",
        image: FuelGasThermalMass,
        pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
        tag: "ATEX Certified",
        specs: [
          { description: "Protection", material: "ATEX / IECEx Zone 1 & 2 Ex-Proof" },
          { description: "Compatible Media", material: "Natural Gas, Biogas & Fuel Gases" },
          { description: "Principle", material: "Direct Mass Flow (No Temp/Press Comp)" },
          { description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
        ],
      },
    ],
  },
];

const TOTAL_FLOW_MODELS = FLOW_SECTIONS.reduce((acc, s) => acc + s.items.length, 0);

const CATEGORY_SHOWCASE = [
  {
    group: "Process Instrumentation",
    items: [
      {
        name: "Flow Meter",
        slug: "flow measurement",
        image: flowImg,
        count: `4 Subcategories • ${TOTAL_FLOW_MODELS} Models`,
        subtitle: "Electromagnetic, Ultrasonic, BTU & Thermal Mass flow meters.",
      },
      {
        name: "Level Measurement",
        slug: "level measurement",
        image: levelImg,
        count: "8 Models",
        subtitle: "Radar, guided wave radar, ultrasonic, DP, capacitance & float level switches.",
      },
      {
        name: "Pressure Measurement",
        slug: "pressure measurement",
        image: pressureImg,
        count: "7 Models",
        subtitle: "Compact, high-accuracy, sanitary, submersible, pneumatic, hazardous & integral display transmitters.",
      },
      {
        name: "Temperature Measurement",
        slug: "temperature measurement",
        image: tempImg,
        count: "1 Model",
        subtitle: "Head mount industrial temperature sensors & transmitters.",
      },
      {
        name: "Vibration Monitoring",
        slug: "vibration monitoring",
        image: vibrationImg,
        count: "6 Models",
        subtitle: "Accelerometers, velocity sensors, displacement & bearing condition monitors.",
      },
    ],
  },
  {
    group: "Control Valves & Automation",
    items: [
      {
        name: "Ball Valves",
        slug: "ball valve",
        image: ballValveImg,
        count: "7 Models",
        subtitle: "2-piece, 3-piece, 3-way, wafer, PFA/FEP lined and UPVC ball valves.",
      },
      {
        name: "Butterfly Valves",
        slug: "butterfly valve",
        image: bfvImg,
        count: "4 Models",
        subtitle: "Wafer, lug, double flange, and PTFE/FEP lined butterfly valves.",
      },
      {
        name: "All Control & ON/OFF Valves",
        slug: "valve",
        image: valveImg,
        count: "11 Models",
        subtitle: "Comprehensive range of industrial quarter-turn and control valves.",
      },
      {
        name: "PLC & DCS Solutions",
        slug: "plc & dcs solutions",
        image: plcImg,
        count: "Turnkey Automation",
        subtitle: "Custom control panels, SCADA systems, PLC/DCS programming & migration.",
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
  const [selectedFlowSubCat, setSelectedFlowSubCat] = useState("all");
  const [selectedPdfProduct, setSelectedPdfProduct] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const rawCategory = category ? decodeURIComponent(category).trim().toLowerCase() : "";
  const selectedCategory = rawCategory;
  const isOverview = !rawCategory;
  const isPlcDcs = selectedCategory === "plc & dcs solutions";
  const isFlowPage =
    selectedCategory === "flow measurement" ||
    selectedCategory === "flow meter" ||
    selectedCategory === "flow-meter" ||
    selectedCategory === "flow";
  const isLevelPage =
    selectedCategory === "level measurement" ||
    selectedCategory === "level meter" ||
    selectedCategory === "level-meter" ||
    selectedCategory === "level";
  const isPressurePage =
    selectedCategory === "pressure measurement" ||
    selectedCategory === "pressure meter" ||
    selectedCategory === "pressure-meter" ||
    selectedCategory === "pressure";

  const isPillActive = (slug) => {
    if (isOverview && slug === "") return true;
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
    return (products || []).filter((p) => {
      if (!p) return false;
      const productType = (p.type || "").trim().toLowerCase();
      const productTypeName = (p.typeName || "").trim().toLowerCase();

      let matchesCat = false;
      if (isOverview || selectedCategory === "all") {
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
          productType === "valve" &&
          (productTypeName.includes("ball") || (p.name || "").toLowerCase().includes("ball"));
      } else if (
        selectedCategory === "butterfly valve" ||
        selectedCategory === "butterfly valves"
      ) {
        matchesCat =
          productType === "valve" &&
          (productTypeName.includes("butterfly") || (p.name || "").toLowerCase().includes("butterfly"));
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
        productTypeName.includes(query) ||
        (p.subCategory || "").toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery, isOverview]);

  // Filtered Flow Sections based on search or subcategory tab
  const visibleFlowSections = useMemo(() => {
    if (!isFlowPage) return [];
    const query = searchQuery.trim().toLowerCase();

    return FLOW_SECTIONS.map((sec) => {
      let items = sec.items;
      if (query) {
        items = items.filter(
          (it) =>
            it.name.toLowerCase().includes(query) ||
            sec.heading.toLowerCase().includes(query) ||
            (it.specs && it.specs.some((s) => s.material.toLowerCase().includes(query)))
        );
      }
      return { ...sec, items };
    }).filter((sec) => {
      if (sec.items.length === 0) return false;
      if (selectedFlowSubCat === "all") return true;
      return sec.id === selectedFlowSubCat;
    });
  }, [isFlowPage, searchQuery, selectedFlowSubCat]);

  const displayTitle = isOverview
    ? "All Product Categories"
    : CATEGORY_META[selectedCategory]?.title ||
      selectedCategory.replace(/\b\w/g, (c) => c.toUpperCase());

  const categoryGroup = isOverview ? "Product Catalog" : CATEGORY_META[selectedCategory]?.group;

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
          <h1 className="cira-page-hero__title">{displayTitle}</h1>
          <p className="cira-page-hero__desc">
            {isOverview
              ? "Select an instrumentation or valve category below to explore certified models, sub-categories, technical datasheets, and official engineering catalogues."
              : isFlowPage
              ? "Precision electromagnetic, ultrasonic, BTU, and thermal mass flow metering systems engineered for demanding industrial and utility processes."
              : "Browse specifications, engineering datasheets, and official PDF catalogues across Madras Control Components’ process instrumentation and valve range."}
          </p>
          <nav className="cira-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
            {isOverview ? (
              <span aria-current="page">Products</span>
            ) : (
              <>
                <Link to="/products">Products</Link>
                <span className="cira-breadcrumb__sep" aria-hidden="true">/</span>
                <span aria-current="page">{displayTitle}</span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* Category Filter Navigation & Search */}
      <div className="cira-catalog-toolbar">
        <div className="cira-container">
          <div className="cira-toolbar-top">
            <div className="cira-toolbar-primary">
              <Link
                to="/products"
                className={`cira-filter-pill cira-filter-pill--all ${isOverview ? "is-active" : ""}`}
              >
                <FiGrid aria-hidden="true" /> All Categories
              </Link>
            </div>

            <div className="cira-toolbar-info">
              <span className="cira-toolbar-tag">Instrumentation &amp; Valves</span>
              <span className="cira-toolbar-cat-name">{displayTitle}</span>
            </div>

            {!isPlcDcs && !isOverview && (
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
        {isOverview ? (
          /* ==========================================================
             Overview Page: Category Cards with Name and Image (Prompt 9)
             ========================================================== */
          <div className="cira-catalog-overview">
            <div className="cira-catalog-overview__header">
              <div>
                <span className="cira-eyebrow">Explore by Product Family</span>
                <h2 className="cira-catalog-overview__title">Product Categories</h2>
                <p className="cira-catalog-overview__subtitle">
                  Click on any category below to view its specific models, sub-categories, technical specifications, and downloadable engineering PDF brochures.
                </p>
              </div>
            </div>

            {CATEGORY_SHOWCASE.map((section) => (
              <section key={section.group} className="cira-showcase-section">
                <div className="cira-showcase-section__head">
                  <h3 className="cira-showcase-section__tag">{section.group}</h3>
                  <div className="cira-showcase-section__line" />
                </div>

                <div className="cira-showcase-grid">
                  {section.items.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products/${encodeURIComponent(cat.slug)}`}
                      className="cira-cat-tile"
                    >
                      <div className="cira-cat-tile__media">
                        <img
                          src={cat.image}
                          alt={cat.name}
                          className="cira-cat-tile__img"
                          loading="lazy"
                        />
                        <span className="cira-cat-tile__badge">{cat.count}</span>
                      </div>
                      <div className="cira-cat-tile__body">
                        <h4 className="cira-cat-tile__title">{cat.name}</h4>
                        <p className="cira-cat-tile__desc">{cat.subtitle}</p>
                        <div className="cira-cat-tile__action">
                          <span>View {cat.name} Products</span>
                          <FiArrowRight aria-hidden="true" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : isPlcDcs ? (
          /* ==========================================================
             PLC & DCS Solutions Page
             ========================================================== */
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
                    Browse Flow Measurement <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          </AnimatedSection>
        ) : isFlowPage ? (
          /* ==========================================================
             Flow Measurement Page: Sidebar + Subcategories Layout
             Sidebar navigation for Flow Meter Types alongside the catalog
             ========================================================== */
          <div className="cira-flow-layout">
            {/* Flow Meter Types Sidebar */}
            <aside className="cira-flow-sidebar" aria-label="Flow Meter Types Sidebar">
              <div className="cira-flow-sidebar__card">
                <div className="cira-flow-sidebar__header">
                  <div className="cira-flow-sidebar__title-wrap">
                    <span className="cira-flow-sidebar__label">Flow Meter Types:</span>
                    <span className="cira-flow-sidebar__sublabel">4 Subcategories</span>
                  </div>
                  <span className="cira-flow-sidebar__total-pill">{TOTAL_FLOW_MODELS} Models</span>
                </div>

                <nav className="cira-flow-sidebar__nav" aria-label="Flow Meter Subcategory Filters">
                  <button
                    type="button"
                    className={`cira-flow-sidebar__item ${selectedFlowSubCat === "all" ? "is-active" : ""}`}
                    onClick={() => setSelectedFlowSubCat("all")}
                  >
                    <span className="cira-flow-sidebar__item-name">All Flow Meters</span>
                    <span className="cira-flow-sidebar__badge">{TOTAL_FLOW_MODELS}</span>
                  </button>
                  {FLOW_SECTIONS.map((sec) => {
                    const isActive = selectedFlowSubCat === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        className={`cira-flow-sidebar__item ${isActive ? "is-active" : ""}`}
                        onClick={() => setSelectedFlowSubCat(sec.id)}
                      >
                        <span className="cira-flow-sidebar__item-name">{sec.shortName}</span>
                        <span className="cira-flow-sidebar__badge">{sec.items.length}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="cira-flow-main">
              {visibleFlowSections.length === 0 ? (
                <div className="cira-empty-state">
                  <h2>No matching flow meters found</h2>
                  <p>Try clearing your search query to see all flow meter models.</p>
                  <button
                    type="button"
                    className="cira-btn cira-btn--navy"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedFlowSubCat("all");
                    }}
                  >
                    View All Flow Meters
                  </button>
                </div>
              ) : (
                <div className="cira-flow-sections">
                  {visibleFlowSections.map((sec) => (
                    <section key={sec.id} className="cira-subcat-section">
                      <div className="cira-subcat-section__header">
                        <div className="cira-subcat-section__title-wrap">
                          <span className="cira-subcat-section__tag">Subcategory</span>
                          <h2 className="cira-subcat-section__heading">{sec.heading}</h2>
                          <p className="cira-subcat-section__desc">{sec.description}</p>
                        </div>
                        <span className="cira-subcat-section__count">
                          {sec.items.length} {sec.items.length === 1 ? "Model" : "Models"}
                        </span>
                      </div>

                      {/* Products Grid */}
                      <div className={`cira-products-grid ${sec.items.length === 1 ? "cira-products-grid--single" : ""}`}>
                        {sec.items.map((item) => (
                          <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                            className={`cira-product-card ${sec.items.length === 1 ? "cira-product-card--horizontal" : ""}`}
                            aria-label={`View technical specifications and details for ${item.name}`}
                          >
                            <div className="cira-product-card__media">
                              <img
                                src={products.find((p) => p.id === item.id)?.image || item.image}
                                alt={item.name}
                                className="cira-product-card__img"
                                loading="lazy"
                              />
                              {item.tag && <span className="cira-product-card__badge">{item.tag}</span>}
                            </div>

                            <div className="cira-product-card__details">
                              <div className="cira-product-card__body">
                                <h3 className="cira-product-card__title">{item.name}</h3>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* ==========================================================
             Standard Products Grid for Other Categories
             ========================================================== */
          <>
            <div className="cira-catalog-meta">
              <p className="m-0">
                Showing <strong>{filtered.length}</strong>{" "}
                {filtered.length === 1 ? "product" : "products"} in {displayTitle}
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
                    navigate("/products");
                  }}
                >
                  View All Categories
                </button>
              </div>
            ) : (
              <StaggerGrid key={`${selectedCategory}-${searchQuery}`} className="cira-products-grid">
                {filtered.map((item) => {
                  const isPressure =
                    (item.type || "").trim().toLowerCase() === "pressure measurement" ||
                    selectedCategory === "pressure measurement" ||
                    selectedCategory === "pressure";

                  if (isPressure) {
                    return (
                      <StaggerItem key={item.id} className="d-flex">
                        <Link
                          to={`/product/${item.id}`}
                          className="cira-product-card w-100 cira-product-card--link"
                          aria-label={`View details for ${item.name}`}
                        >
                          <div className="cira-product-card__media">
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
                            <h2 className="cira-product-card__title">
                              {item.name}
                            </h2>
                            <div className="cira-product-card__tags">
                              <span className={`cira-pdf-tag ${item.pdf ? "has-pdf" : ""}`}>
                                {item.pdf ? "PDF Datasheet Ready" : "Spec Sheet Soon"}
                              </span>
                              {item.applicationTable?.length > 0 && (
                                <span className="cira-spec-tag">
                                  {item.applicationTable.length} Application Specs
                                </span>
                              )}
                              {item.specifications?.length > 0 && (
                                <span className="cira-spec-tag">
                                  {item.specifications.length} Specs
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </StaggerItem>
                    );
                  }

                  return (
                    <StaggerItem key={item.id} className="d-flex">
                      <article className="cira-product-card w-100">
                        <Link
                          to={`/product/${item.id}`}
                          className="cira-product-card__media"
                          aria-label={`View details for ${item.name}`}
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
                        </Link>

                        <div className="cira-product-card__body">
                          <h2 className="cira-product-card__title">
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </h2>
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
                          {item.pdf && (
                            <button
                              type="button"
                              className="cira-btn cira-btn--primary cira-btn--sm"
                              onClick={() => handleOpenPdf(item)}
                            >
                              <FiFileText aria-hidden="true" /> Catalogue
                            </button>
                          )}
                          <Link
                            to={`/product/${item.id}`}
                            className={`cira-btn ${item.pdf ? "cira-btn--outline" : "cira-btn--primary"} cira-btn--sm ${item.pdf ? "" : "w-100 d-inline-flex justify-content-center align-items-center"}`}
                          >
                            <FiList aria-hidden="true" /> Details
                          </Link>
                        </div>
                      </article>
                    </StaggerItem>
                  );
                })}
              </StaggerGrid>
            )}
          </>
        )}
      </div>

      {/* PDF Catalogue Modal Viewer */}
      <PdfViewerModal
        isOpen={isPdfModalOpen}
        onClose={handleClosePdfModal}
        product={selectedPdfProduct}
      />
    </div>
  );
}

export default ProductLists;
