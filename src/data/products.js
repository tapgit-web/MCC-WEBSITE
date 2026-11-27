// import img from "../components/images/product/valve1.png"
// flow
import FullBore from "../components/images/product/flow/FullBore_SR1000A.jpg"
const FullBoreSR1000A = FullBore;
import InsertionSR1000i from "../components/images/product/flow/Insertion_SR1000i.png"
import BatteryOperatedSS1021 from "../components/images/product/flow/BatteryOperated_SS1021.png"
import Electromagnetic from "../components/images/product/flow/ELECTROMAGNETICFLOWMETER.jpg"
import Ultrasonic1 from "../components/images/product/flow/ClampOn_Ultrasonic.png"
import InsertionUltrasonic from "../components/images/product/flow/Insertion_Ultrasonic.png"
import FullBoreUltrasonic from "../components/images/product/flow/FullBore_Ultrasonic.png"
import SolarPoweredFM from "../components/images/product/flow/SolarPowered_EMF.jpg"
import BtuMeter from "../components/images/product/flow/BTUMeter_Chiller.png"
import BtuMeterHeat from "../components/images/product/flow/BTUMeter_Heat.png"
import BtuMeterUltrasonic from "../components/images/product/flow/BTUMeter_Ultrasonic.png"
import ThermalMass from "../components/images/product/flow/THERMAL MASS FLOWMETER1.jpg"
import FullBoreThermalMass from "../components/images/product/flow/FullBore_ThermalMass.png"
import ThermalMassInsertion from "../components/images/product/flow/ThermalMass_Insertion.jpg"
import FuelGasThermalMass from "../components/images/product/flow/FuelGas_ThermalMass_ATEX.png"
// level
import RadarLevel from "../components/images/product/level/RadarLevel_Transmitter.png"
import GuidedWaveradarLevel from "../components/images/product/level/GuidedWaveRadar_Level.png"
import UltrasonicLevel from "../components/images/product/level/Ultrasonic_Level.png"
import DPLevel from "../components/images/product/level/DPLevel.jpeg"
import PointLevel from "../components/images/product/level/PointLevel_Sensor.png"
import Hydrostatical from "../components/images/product/level/Hydrostatic_Level.png"
import CapacitanceLevel from "../components/images/product/level/Capacitance Level.jpeg"
import Float from "../components/images/product/level/Float.jpeg"
// valve
import pcsball2 from "../components/images/product/valve/2pcsballvalve.png"
import pcsball3 from "../components/images/product/valve/3pcsballvalve.png"
import wayball34 from "../components/images/product/valve/34wayballvalve.png"
import wafertypeballvalve from "../components/images/product/valve/wafertypeballvalve.png"
import FepPfalinedBallValve from "../components/images/product/valve/FepPfalinedBallValve.png"
import Upvcballvaleve from "../components/images/product/valve/Upvcballvaleve.png"
import ppballvalve from "../components/images/product/valve/ppballvalve.png"
import LineedButterfly from "../components/images/product/valve/LineedButterfly.png"
import LineedDoubleflangeButterfly from "../components/images/product/valve/LineedDoubleflangeButterfly.png"
import LinedlugtypeButterfly from "../components/images/product/valve/Linedlug typeButterfly.png"
import feppfaLineedButterfly from "../components/images/product/valve/feppfaLineedButterfly.png"
// Temperature
import float1 from "../components/images/product/temperature/float.png"
import Head1 from "../components/images/product/temperature/head.png"
//pressure
import CompactPressureTransmitter from "../components/images/product/pressure/Compact_Pressure_Transmitter.png"
import HighAccuracyPressureTransmitter from "../components/images/product/pressure/High_Accuracy_Pressure_Transmitter.png"
import TransmitterIntegralDisplay from "../components/images/product/pressure/Transmitter_Integral_Display.png"
import TransmittersSanitaryApplication from "../components/images/product/pressure/Transmitters_Sanitary_Application.jpg"
import TransmittersSubmersibleApplication from "../components/images/product/pressure/Transmitters_Submersible_Application.jpg"
import TransmitterPneumaticApplication from "../components/images/product/pressure/Transmitter_Pneumatic_Application.jpg"
import TransmittersHazardousApplication from "../components/images/product/pressure/Transmitters_Hazardous_Application.png"
//vibration
import vibsensors from "../components/images/product/vibration/sensors.png"
import vibvelocity from "../components/images/product/vibration/vib-velocity.png"
import vibvelocityDisplacement from "../components/images/product/vibration/vib-velocityDisplacement.png"
import vibAmplitudeBearingCondition from "../components/images/product/vibration/vib-AmplitudeBearingCondition.jpg"
import VibrationVelocityandDisplacement from "../components/images/product/vibration/Vibration VelocityandDisplacement.png"
import VibrationAmplitudeandBearingCondition from "../components/images/product/vibration/Vibration Amplitude and Bearing Condition.jpeg"
const products = [
  // Flow Measurement (Hierarchical Categories matching Image 2)
  {
    id: 1,
    name: "Full Bore Electromagnetic Flow Meter",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: FullBore,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "High-accuracy full bore flanged electromagnetic flow meter engineered for water, wastewater, chemical slurries, and industrial process fluids with zero pressure drop and excellent long-term zero stability.",
    specifications: [
      { no: 1, description: "Model", material: " Full Bore Flanged" },
      { no: 2, description: "Line Size", material: "DN10 to DN350 mm (sizes up to DN1600 mm are available upon special request.)" },
      { no: 3, description: "Electrodes", material: "SS316L / Hastelloy C / Titanium / Tantalum" },
      { no: 4, description: "Lining", material: "PTFE / Hard Rubber / PFA" },
      { no: 5, description: "Accuracy", material: "±0.5% of measured value (±0.2% optional)" },
      { no: 6, description: "Process Connection", material: "Flanged End , Screwed End , Wafer Type" },
      { no: 7, description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
      { no: 8, description: "Protection", material: "IP68 Sensor / IP67 Transmitter" },
    ],
  },
  {
    id: 7,
    name: "Insertion Type Electromagnetic Flow Meter",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 2,
    type: "Flow Measurement",
    price: 2999,
    image: InsertionSR1000i,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "Hot-tap insertion type electromagnetic flow meter engineered for line sizes from DN200 to DN2000 mm, enabling installation without shutting down plant operations.",
    specifications: [
      { no: 1, description: "Model", material: " Hot-Tap Insertion" },
      { no: 2, description: "Line Size", material: "DN200 to DN2000 mm" },
      { no: 3, description: "Electrodes", material: "SS316L / Hastelloy C / Titanium" },
      { no: 4, description: "Accuracy", material: " ±2% of Measured value" },
      { no: 5, description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
      { no: 6, description: "Protection", material: "IP68 (Sensor)" },
    ],
  },
  {
    id: 2,
    name: "Battery Operated Electromagnetic Flow Meter",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 3,
    type: "Flow Measurement",
    price: 2999,
    image: BatteryOperatedSS1021,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "Autonomous battery-operated electromagnetic flow meter with integrated GSM/GPRS telemetry, designed for district metering areas and remote networks.",
    specifications: [
      { no: 1, description: "Model", material: " Battery Operated EMF" },
      { no: 2, description: "Battery Life", material: "5 years " },
      { no: 3, description: "Bore Size", material: "DN15 to DN500 mm " },
      { no: 4, description: "Accuracy", material: "±0.5% calibrated (OIML R49 / ISO 4064)" },
      { no: 5, description: "Enclosure", material: "IP68 " },
    ],
  },
  {
    id: 3,
    name: "Clamp On Type Ultrasonic Flow Meter",
    subCategory: "ULTRASONIC FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: Ultrasonic1,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Non-invasive transit-time clamp-on ultrasonic flow meter for precision liquid flow metering without cutting pipes, process downtime, or pressure loss.",
    specifications: [
      { no: 1, description: "Measurement Principle", material: "Time-of-Flight" },
      { no: 2, description: "Pipe Size Range", material: "DN15 to DN2000 (External Clamp-on)" },
      { no: 3, description: "Accuracy", material: "±2.0% of Measured Value (±0.5% calibrated)" },
      { no: 4, description: "Fluid Temperature", material: "0°C to +90°C" },
      { no: 5, description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
      { no: 6, description: "Display", material: "Backlit LCD Flow Rate & Totalizer" },
    ],
  },
  {
    id: 8,
    name: "Insertion Type Ultrasonic Flow Meter",
    subCategory: "ULTRASONIC FLOW METER",
    subItemNo: 2,
    type: "Flow Measurement",
    price: 2999,
    image: InsertionUltrasonic,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Hot-tap insertion transit-time ultrasonic flow meter designed for large municipal, utility, and industrial pipelines without process shutdown or flow interruption.",
    specifications: [
      { no: 1, description: "Measurement Principle", material: "Time-of-Flight" },
      { no: 2, description: "Installation Type", material: "Hot-Tap Wetted Insertion Sensors" },
      { no: 3, description: "Pipe Size Range", material: "DN50 to DN2000 mm" },
      { no: 4, description: "Accuracy", material: "±2.0% of Measured Value" },
      { no: 5, description: "Outputs & Comms", material: "4-20mA, Pulse, RS485 Modbus" },
      { no: 6, description: "Medium", material: "Clear water applications only" },
    ],
  },
  {
    id: 9,
    name: "Full Bore Ultrasonic Flow Meter",
    subCategory: "ULTRASONIC FLOW METER",
    subItemNo: 3,
    type: "Flow Measurement",
    price: 2999,
    image: FullBoreUltrasonic,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Compact inline full bore ultrasonic flow meter engineered for precise volumetric flow metering and temperature monitoring of water and aqueous solutions with zero moving parts.",
    specifications: [
      { no: 1, description: "Measurement Principle", material: "Time-of-Flight" },
      { no: 2, description: "Flow Tube Design", material: "Full Bore Stainless Steel Spool" },
      { no: 3, description: "Process Connection", material: "Threaded / Tri-Clamp / Flanged" },
      { no: 4, description: "Accuracy", material: "±0.5% to ±1.0% of Measured Value " },
      { no: 5, description: "Output Signals", material: "Switching signal, Pulse signal, Analogue signal, IO-Link, Frequency signal, Diagnostic signal, Totaliser switching signal" },
      { no: 6, description: "Protection Rating", material: "IP67 / IP69K Stainless Steel Body" },
    ],
  },
  {
    id: 4,
    name: "Solar Powered Electromagnetic Flow Meter",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 4,
    type: "Flow Measurement",
    price: 2999,
    image: SolarPoweredFM,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "Autonomous solar-powered electromagnetic flow meter system engineered for agricultural irrigation, remote water supply, and pipeline telemetry without grid power.",
    specifications: [
      { no: 1, description: "Power System", material: "Integrated Solar PV Panel " },
      { no: 2, description: "Battery Autonomy", material: "30days " },
      { no: 3, description: "Flow Sensor", material: "Low-Power Electromagnetic Sensor Body" },
      { no: 4, description: "Telemetry", material: "GSM / GPRS / RS485 Modbus" },
      { no: 5, description: "Sensor Protection", material: "IP68 " },
    ],
  },
  {
    id: 5,
    name: "BTU Meter for Chiller Application",
    subCategory: "BTU METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: BtuMeter,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Precision electromagnetic BTU / thermal energy meter designed for chilled water and central cooling plants.",
    specifications: [
      { no: 1, description: "Model", material: "Inline Electromagnetic BTU / Energy Meter" },
      { no: 2, description: "Line Size", material: "DN15 to DN300 mm" },
      { no: 3, description: "Measurement Principle", material: "Electromagnetic Induction (Faraday's Law) + Dual Matched PT1000 RTD" },
      { no: 4, description: "Temperature Range", material: "4°C to 95°C (Chilled & Condenser Water)" },
      { no: 5, description: "Accuracy", material: "Class 2 (Complies with EN1434 / OIML R75)" },
      { no: 6, description: "Process Connection", material: "Flanged End / Screwed End" },
      { no: 7, description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus" },
      { no: 8, description: "Data Logging", material: "Hourly, Daily & Monthly Energy Historian" },
      { no: 9, description: "Power Supply", material: "24V DC / 230V AC" },
      { no: 10, description: "Protection", material: "IP68 Flow Sensor / IP65 Calculator Unit" },
    ],
  },
  {
    id: 10,
    name: "BTU Meter for Heat Application",
    subCategory: "BTU METER",
    subItemNo: 2,
    type: "Flow Measurement",
    price: 2999,
    image: BtuMeterHeat,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Heat energy transfer meter engineered for thermal oil, hot water, and heat transfer fluids (Hytherm, Dowtherm, Therminol) with multi-unit thermal power calculation and datalogging.",
    specifications: [
      { no: 1, description: "Model", material: "Thermic Fluid Heat Energy Transfer Meter" },
      { no: 2, description: "Line Size", material: "DN25 to DN500 mm" },
      { no: 3, description: "Thermic Fluid Media", material: "Hytherm 500/600, Dowtherm A/T, Thermia A/B, Therminol 55/66, Hot Water" },
      { no: 4, description: "Operating Temperature", material: "Up to 350°C High-Temperature Thermal Fluid" },
      { no: 5, description: "Calculation Principle", material: "Enthalpy / Specific Heat Matrix (Flow × ΔT × Density × Cp)" },
      { no: 6, description: "Engineering Units", material: "Heat in Kcal/hr, Energy in MKcal, Flow in m³/hr, Temp in °C" },
      { no: 7, description: "Process Connection", material: "ANSI 150# / 300# Flanged End" },
      { no: 8, description: "Outputs & Diagnostics", material: "4-20mA, RS485 Modbus, Relay Alarm / Fault Buzzer" },
      { no: 9, description: "Data Logging", material: "3000 Normal / 5500 Extended Timestamped Records" },
      { no: 10, description: "Protection", material: "IP65 Weatherproof / Flameproof Enclosure" },
    ],
  },
  {
    id: 11,
    name: "Ultrasonic BTU Meter",
    subCategory: "BTU METER",
    subItemNo: 3,
    type: "Flow Measurement",
    price: 2999,
    image: BtuMeterUltrasonic,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Non-invasive ultrasonic BTU / thermal energy meter system combining clamp-on ultrasonic flow sensors with precision temperature difference probes for HVAC and chiller energy monitoring.",
    specifications: [
      { no: 1, description: "Model", material: "Clamp-On Non-Invasive Ultrasonic BTU Meter" },
      { no: 2, description: "Pipe Size Range", material: "DN50 to DN1500 mm (Clamp-On without pipe cutting)" },
      { no: 3, description: "Flow Measurement Principle", material: "Transit-Time Ultrasonic Difference" },
      { no: 4, description: "Temperature Probes", material: "Matched Pair PT100 / PT1000 Surface Clamp-On Sensors" },
      { no: 5, description: "Fluid Temperature Range", material: "-30°C to +160°C" },
      { no: 6, description: "Accuracy", material: "Flow: ±1.0% of reading; Energy: Class 2 standard" },
      { no: 7, description: "Pipe Material Compatibility", material: "Carbon Steel, Stainless Steel, Cast Iron, Copper, PVC" },
      { no: 8, description: "Outputs", material: "Isolated 4-20mA, OCT Pulse, RS485 Modbus RTU" },
      { no: 9, description: "Power Supply", material: "85-264V AC / 24V DC" },
      { no: 10, description: "Protection", material: "IP68 Transducers (Submersible) / IP65 Transmitter" },
    ],
  },
  {
    id: 6,
    name: "Full Bore THERMAL MASS FLOW METER",
    subCategory: "THERMAL MASS FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: FullBoreThermalMass,
    pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
    description: "Direct measurement of mass flow for compressed air, fuel gas or  biogas,  with zero pressure or temperature compensation required and RS485 communication support..",
    features: [
      "Direct measurement of mass flow",
      "No pressure or temperature compensation required",
      "20:1 turndown ratio",
      "Wireless data transfer is possible. Remote readings are available on wireless",
      "Pulse, 4-20mA, and RS485 output for networking",
    ],
    applications: [
      "Compressed air/ Gas Consumption measurement",
      "Very low-pressure flowing conditions",
      "Fuel Gas consumption measurement",
      "Furnace and burner control",
      "Biogas measurement and digester and ahead",
      "HVAC applications",
    ],
    specifications: [
      { no: 1, description: "Measurement Principle", material: "Thermal Ionization / Calorimetry" },
      { no: 2, description: "Compensation", material: "No pressure or temperature compensation required" },
      { no: 3, description: "Telemetry & Wireless", material: "Wireless data transfer & remote readings supported" },
      { no: 4, description: "Outputs & Networking", material: "Pulse, 4-20mA, and RS485 output" },
      { no: 5, description: "Installation", material: "Fullbore & Insertion" },
      { no: 6, description: "Protection", material: "IP68 / IP67" },
    ],
  },
  {
    id: 12,
    name: "Thermal Mass Insertion Type",
    subCategory: "THERMAL MASS FLOW METER",
    subItemNo: 2,
    type: "Flow Measurement",
    price: 2999,
    image: ThermalMassInsertion,
    pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
    description: "Compact insertion thermal mass flow meter engineered for industrial compressed air applications, featuring an adjustable measuring range for pipe diameters from 14 to 254 mm, local digital display, pushbuttons, and up to 64 bar burst pressure rating.",
    applicationTable: [
      { property: "Application", values: ["For industrial applications"] },
      { property: "Installation", values: ["Adjustable to inside pipe diameters; ( 14...254 mm)"] },
      { property: "Media", values: ["Compressed air"] },
      { property: "Medium Temperature [°C]", values: ["-10...60"] },
      { property: "Min. Burst Pressure", values: ["64 bar", "6.4 MPa"] },
      { property: "Pressure Rating", values: ["16 bar", "1.6 MPa"] },
      { property: "MAWP For Applications According To CRN [bar]", values: ["10"] },
    ],
  },
  {
    id: 13,
    name: "Flowmeter For Fuel Gas Applications",
    subCategory: "THERMAL MASS FLOW METER",
    subItemNo: 3,
    type: "Flow Measurement",
    price: 2999,
    image: FuelGasThermalMass,
    pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
    description: "ATEX / IECEx certified explosion-proof thermal mass flow meter engineered specifically for fuel gas, natural gas, methane, biogas, and combustible gas mixtures with heavy-duty flameproof housing.",
    features: [
      "ATEX / IECEx certified explosion-proof flameproof enclosure for Zone 1 and Zone 2 hazardous areas",
      "Direct measurement of mass flow for natural gas, biogas, LPG, and combustible gas mixtures",
      "No external pressure or temperature compensation required",
      "Wide dynamic turndown ratio (up to 20:1) for low-pressure boiler & furnace firing lines",
      "Pulse, 4-20mA, and RS485 Modbus RTU communication outputs for networking",
      "Robust IP67 / IP68 ingress protection with flameproof terminal housing",
    ],
    applications: [
      "Natural gas consumption & burner fuel line monitoring",
      "Furnace and boiler fuel gas feed control",
      "Biogas flow measurement in anaerobic digesters and flare lines",
      "LPG, Propane, and butane distribution pipelines",
      "Gas turbine & cogeneration fuel metering",
      "Chemical plants, refineries, and petrochemical hazardous zones",
    ],
    specifications: [
      { no: 1, description: "Model", material: "Thermal Mass Flow Meter for Fuel Gas (ATEX Ex-Proof)" },
      { no: 2, description: "Explosion Protection", material: "ATEX / IECEx: II 2G Ex db IIC T4 Gb / II 2D Ex tb IIIC T130°C Db" },
      { no: 3, description: "Measurement Principle", material: "Thermal Dispersion / Direct Mass Flow" },
      { no: 4, description: "Compatible Gases", material: "Natural Gas, Biogas, Methane, LPG, Propane, Fuel Gas Mixtures" },
      { no: 5, description: "Pipe Size Range", material: "Upto 150 mm" },
      { no: 6, description: "Accuracy", material: "±1.0% of reading (±0.5% full scale optional)" },
      { no: 7, description: "Process Connection", material: "Flanged End / Screwed / Wafer" },
      { no: 8, description: "Outputs & Networking", material: "Pulse, 4-20mA, and RS485 output" },
      { no: 9, description: "Power Supply", material: "24V DC / 230V AC" },
      { no: 10, description: "Protection", material: "IP68 / IP67 Flameproof Enclosure" },
    ],
  },

  // Level Measurement
  {
    id: 21,
    name: "Radar Level Transmitter",
    type: "Level Measurement",
    price: 2999,
    image: RadarLevel,
    description: "Continuous, non-contact radar level transmitter engineered for liquids, pastes, and sludges with high signal focusing, Bluetooth® wireless commissioning, and SIL2/SIL3 functional safety.",
    specifications: [
      { no: 1, description: "Measuring Principle", material: "Dielectric Reflection" },
      { no: 2, description: "Maximum Measuring Range", material: "Up to 50 m (164 ft)" },
      { no: 3, description: "Accuracy", material: "±1 mm (±0.04 in)" },
      { no: 4, description: "Process Connections", material: "Thread or mounting bracket" },
      { no: 5, description: "Process Temperature", material: "-40 to +200 °C (-40 to +392 °F)" },
      { no: 6, description: "Process Pressure", material: "-1 to +20 bar (-14.5 to +290 psi)" },
      { no: 7, description: "Antenna Options", material: "PVDF, PTFE Drip-off or PEEK antenna for small process connections" },
      { no: 8, description: "Commissioning & Safety", material: "Bluetooth® wireless technology, SIL2 / SIL3 (IEC 61508), WHG proof testing" },
    ],
  },
  {
    id: 22,
    name: "Guided Wave Radar Level",
    type: "Level Measurement",
    price: 2999,
    image: GuidedWaveradarLevel,
    description: "Guided wave radar level sensor engineered for continuous level measurement in industrial liquids, water, and oil-based media with gold-plated contacts and high vacuum/pressure resistance.",
    specifications: [
      { no: 1, description: "Media", material: "Liquids" },
      { no: 2, description: "Recommended Media", material: "Water, hydrous media, oils, oil-based media" },
      { no: 3, description: "Process Temperature", material: "-25°C to +80°C (up to 90°C for < 1 h)" },
      { no: 4, description: "Pressure Rating", material: "16 bar (1.6 MPa)" },
      { no: 5, description: "Vacuum Resistance", material: "-1000 mbar (-0.1 MPa)" },
      { no: 6, description: "MAWP (CRN)", material: "16 bar" },
    ],
  },
  {
    id: 23,
    name: "Ultrasonic Level",
    type: "Level Measurement",
    price: 2999,
    image: UltrasonicLevel,
    description: "Continuous non-contact ultrasonic level transmitter engineered for liquids, pastes, and coarse bulk solids with hermetically sealed PVDF sensor and menu-guided plain-text commissioning.",
    specifications: [
      { no: 1, description: "Measuring Principle", material: "Non-contact Ultrasonic Time-of-Flight" },
      { no: 2, description: "Sensor Construction", material: "Hermetically sealed and potted sensor" },
      { no: 3, description: "Wetted Material", material: "Chemically resistant PVDF" },
      { no: 4, description: "On-site Display", material: "Four-line plain text display (7 selectable languages) with envelope curves" },
      { no: 5, description: "Calibration", material: "Calibration without filling or discharging" },
      { no: 6, description: "Temperature Compensation", material: "Integrated temperature sensor for automatic sound velocity correction" },
      { no: 7, description: "Application Scope", material: "Continuous level measurement of liquids, pastes, and coarse bulk solids" },
    ],
  },
  {
    id: 24,
    name: "DP Level",
    type: "Level Measurement",

    price: 2999,
    image: DPLevel,
  },
  {
    id: 25,
    name: "Point Level",
    type: "Level Measurement",
    price: 2999,
    image: PointLevel,
    description: "Compact point level sensor engineered for reliable limit level detection and run-dry protection in liquids, viscous media, and powder with gold-plated contacts and up to 40 bar pressure resistance.",
    specifications: [
      { no: 2, description: "Media Compatibility", material: "Liquid and viscous media; powder" },
      { no: 3, description: "Probe Length", material: "Upto 150 mm" },
      { no: 4, description: "Tank Pressure", material: "-1 to 40 bar (-0.1 to 4 MPa)" },
      { no: 5, description: "MAWP (CRN)", material: "40 bar" },
      { no: 6, description: "Medium Temperature (Oil & Water)", material: "-40°C to +100°C" },
      { no: 7, description: "Short-time Temperature", material: "-40°C to +150°C (1 h)" },
      { no: 8, description: "Application Scope", material: "Overfill prevention & run-dry protection in pipes and vessels" },
    ],
  },
  {
    id: 26,
    name: "Hydrostatic Level Transmitter",
    type: "Level Measurement",
    price: 2999,
    image: Hydrostatical,
    description: "Flush-mountable hydrostatic level and pressure transmitter engineered for food, beverage, and process industries with gold-plated contacts, zero dead space, and wide temperature tolerance up to 150°C.",
    specifications: [
      { no: 1, description: "Mounting Style", material: "Flush mountable (zero dead space) for food & beverage" },
      { no: 2, description: "Media Compatibility", material: "Viscous media, liquids with suspended particles, liquids and gases" },
      { no: 3, description: "Medium Temperature", material: "-25°C to +150°C" },
      { no: 4, description: "Pressure Rating", material: "10,000 mbar (145 psi / 1000 kPa)" },
      { no: 5, description: "Min. Burst Pressure", material: "30,000 mbar (435 psi / 3000 kPa)" },
      { no: 6, description: "Vacuum Resistance", material: "-1000 mbar (-0.1 MPa)" },
      { no: 7, description: "Pressure Type", material: "Relative pressure / vacuum" },
      { no: 8, description: "MAWP (CRN)", material: "10 bar" },
    ],
  },
  {
    id: 27,
    name: "Capacitance Level",
    type: "Level Measurement",
    price: 2999,
    image: CapacitanceLevel,
  },
  {
    id: 28,
    name: "Float switch",
    type: "Level Measurement",
    price: 2999,
    image: Float,
  },

  // Pressure Measurement
  {
    id: 40,
    name: "Compact Pressure Transmitter",
    type: "Pressure Measurement",
    price: 2999,
    image: CompactPressureTransmitter,
    description: "Compact stainless steel pressure transmitter engineered for demanding industrial liquid and gas applications with relative pressure measurement, 300 bar burst resistance, and vacuum capability.",
    applicationTable: [
      { property: "Application", values: ["For industrial applications"] },
      { property: "Media", values: ["Liquids and gases"] },
      { property: "Medium Temperature [°C]", values: ["-40...90"] },
      { property: "Min. Burst Pressure", values: ["300 bar", "4350 psi", "30 MPa"] },
      { property: "Range", values: ["Upto 600 bar"] },
      { property: "Note On Pressure Rating", values: ["Static"] },
      { property: "Vacuum Resistance", values: ["-1000 mbar", "-0.1 MPa"] },
      { property: "Type Of Pressure", values: ["Relative pressure"] },
    ],
  },
  {
    id: 41,
    name: "Transmitters For High Accuracy",
    type: "Pressure Measurement",
    price: 2999,
    image: HighAccuracyPressureTransmitter,
    description: "High accuracy relative pressure transmitter engineered for demanding industrial and railway applications with IP68/IP69K sealing, gold-plated contacts, and up to 150 bar burst pressure.",
    applicationTable: [
      { property: "Application", values: ["High Accuracy demanding Applications"] },
      { property: "Media", values: ["Liquids and gases"] },
      { property: "Medium Temperature [°C]", values: ["-25...90; (on request: -40...90 °C)"] },
      { property: "Min. Burst Pressure", values: ["150 bar", "2175 psi", "15 MPa"] },
      { property: "Pressure Range", values: ["-1 to 400 bar"] },
      { property: "Type Of Pressure", values: ["Absolute & relative pressure"] },
    ],
  },
  {
    id: 42,
    name: "Transmitter With Integral Display",
    type: "Pressure Measurement",
    price: 2999,
    image: TransmitterIntegralDisplay,
    description: "Heavy-duty relative pressure transmitter with integral alphanumeric digital display and metallic thin film cell engineered for high-pressure industrial applications up to 800 bar rating and 1700 bar burst resistance.",
    applicationTable: [
      { property: "Measuring Element", values: ["Metallic thin film cell"] },
      { property: "Application", values: ["For industrial applications"] },
      { property: "Media", values: ["Liquids and gases"] },
      { property: "Medium Temperature [°C]", values: ["-25...80"] },
      { property: "Min. Burst Pressure", values: ["1700 bar", "24650 psi", "170 MPa"] },
      { property: "Range", values: ["-1 to 600 bar"] },
      { property: "Vacuum Resistance", values: ["-1000 mbar", "-0.1 MPa"] },
      { property: "Type Of Pressure", values: ["Relative pressure"] },
      { property: "MAWP For Applications According To CRN", values: ["800 bar", "11580 psi", "80 MPa"] },
    ],
  },
  {
    id: 45,
    name: "Transmitters For Sanitary Application",
    type: "Pressure Measurement",
    price: 2999,
    image: TransmittersSanitaryApplication,
    description: "Flush-mountable sanitary pressure transmitter engineered for food, beverage, and hygienic applications with gold-plated contacts, zero dead space, high temperature tolerance up to 150°C, and vacuum resistance.",
    applicationTable: [
      { property: "Application", values: ["Flush mountable for the food and beverage industry"] },
      { property: "Media", values: ["Viscous media and liquids with suspended particles; liquids and gases"] },
      { property: "Medium Temperature [°C]", values: ["-25...150"] },
      { property: "Min. Burst Pressure", values: ["30000 mbar", "435 psi", "3000 kPa"] },
      { property: "Range", values: ["10000 mbar", "145 psi", "1000 kPa"] },
      { property: "Vacuum Resistance", values: ["-1000 mbar", "-0.1 MPa"] },
      { property: "Type Of Pressure", values: ["Relative pressure; vacuum"] },
      { property: "MAWP For Applications According To CRN [bar]", values: ["10"] },
    ],
  },
  {
    id: 46,
    name: "Transmitters For Submersible Application",
    type: "Pressure Measurement",
    price: 2999,
    image: TransmittersSubmersibleApplication,
    description: "Submersible level and hydrostatic pressure transmitter engineered for liquid storage, deep wells, tanks, and water reservoirs with built-in capillary tube for ambient pressure compensation and IP68 submersible protection.",
    applicationTable: [
      { property: "Design", values: ["With capillary tube for pressure compensation"] },
      { property: "Application", values: ["For industrial applications"] },
      { property: "Media", values: ["Liquids"] },
      { property: "Medium Temperature [°C]", values: ["-10...50"] },
      { property: "Min. Burst Pressure", values: ["2.4 bar"] },
      { property: "Range", values: ["2 to 600 ba"] },
      { property: "Type Of Pressure", values: ["Relative pressure"] },
    ],
  },
  {
    id: 47,
    name: "Transmitter For Pneumatic Application",
    type: "Pressure Measurement",
    price: 2999,
    image: TransmitterPneumaticApplication,
    description: "Compact digital pressure transmitter designed for pneumatic systems, compressed air distribution, and nitrogen networks with local display, pushbuttons, gold-plated contacts, and vacuum to 15 bar relative pressure range.",
    applicationTable: [
      { property: "Application", values: ["For industrial applications"] },
      { property: "Media", values: ["Compressed air; nitrogen (N2)"] },
      { property: "Conditionally Suitable For", values: ["Other media on request"] },
      { property: "Medium Temperature", values: ["0...60 °C", "32...140 °F"] },
      { property: "Min. Burst Pressure", values: ["20 bar", "290 psi"] },
      { property: "Range", values: ["15 bar", "220 psi"] },
      { property: "Vacuum Resistance", values: ["-1000 mbar", "-14.5 psi"] },
      { property: "Type Of Pressure", values: ["Relative pressure; vacuum"] },
    ],
  },
  {
    id: 48,
    name: "Transmitters For Hazardous Application",
    type: "Pressure Measurement",
    price: 2999,
    image: TransmittersHazardousApplication,
    description: "ATEX, SIL & PESO certified explosion-proof pressure transmitter engineered for hazardous areas and demanding process industries with 350° freely rotatable housing, local digital display, gold-plated contacts, and up to 350 bar burst safety.",
    applicationTable: [
      { property: "Application", values: ["For industrial applications; For applications in hazardous areas"] },
      { property: "Installation", values: ["Freely rotatable housing 350°"] },
      { property: "Media", values: ["Viscous media and liquids with suspended particles; liquids and gases"] },
      { property: "Medium Temperature [°C]", values: ["-20...60; (when used outside the hazardous area:; Ambient temperature: -25...85 °C; Medium temperature: -25...125 °C / 145 °C < 1h)"] },
      { property: "Min. Burst Pressure", values: ["350 bar", "5070 psi", "35 MPa"] },
      { property: "Range", values: ["100 bar", "1450 psi", "10 MPa"] },
      { property: "Type Of Pressure", values: ["Relative pressure; vacuum"] },
      { property: "Certificate", values: ["SIL, ATEX, PESO"] },
    ],
  },
  {
    id: 43,
    name: "FlexTop 2202 Temperature Transmitter",
    type: "Temperature Measurement",
    price: 2999,
    image: Head1,
    description: "FlexTop 2202 is a 4...20 mA loop-powered transmitter for Pt100 sensors. Compatible with 2-, 3-, or 4-wire sensors with automatic cable resistance compensation, high accuracy better than 0.25°C, configurable damping, PC datalogging, and ATEX/IECEx hazardous area approval.",
    features: [
      "4...20 mA loop-powered transmitter for Pt100 sensors",
      "Compatible with 2-, 3-, or 4-wire sensors",
      "Accuracy better than 0.25°C with excellent temperature stability",
      "Sensor offset correction and sensor error detection",
      "Automatic / configurable cable resistance compensation (2-wire)",
      "2-way PC configuration and datalogging via Flex-Program",
      "Configurable damping and status indication (°C or °F)",
      "Ex ia IIC T5/T6, ATEX II 1G certified for hazardous areas",
      "Embedded in silicone for moisture and vibration resistance (DIN B housing)",
    ],
    specifications: [
      { no: 1, description: "Input Sensor Type", material: "Pt100 (2-, 3-, or 4-wire)" },
      { no: 2, description: "Output Signal", material: "4...20 mA, 2-wire loop powered" },
      { no: 3, description: "Accuracy", material: "< 0.25°C (Span < 250°C), 0.1% of span (Span > 250°C)" },
      { no: 4, description: "Measuring Range", material: "-200 to +850°C (Min. span 25°C)" },
      { no: 5, description: "Power Supply", material: "8...35 VDC (Standard), 8...28 VDC (Ex ia)" },
      { no: 6, description: "Sensor Error Detection", material: "Short detection < -225°C, Break detection > 875°C" },
      { no: 7, description: "Cable Resistance", material: "Max. 20 Ohm/wire (Comp.: < 0.02°C/Ohm)" },
      { no: 8, description: "Approval & Certification", material: "Ex ia IIC T5/T6, ATEX II 1G" },
      { no: 9, description: "Operating Temperature", material: "-40 to +85°C" },
      { no: 10, description: "Dimensions & Mounting", material: "ø44 x 19 mm, DIN B housing (6 mm center hole)" },
      { no: 11, description: "Protection Class", material: "Housing: IP 40 (Silicone encapsulated)" },
    ],
  },
  {
    id: 44,
    name: "Temperature Sensor With Display",
    subName: "TN Series Compact Temperature Sensor",
    type: "Temperature Measurement",
    price: 3499,
    image: float1,
    description: "Compact electronic temperature sensor with integrated 4-digit alphanumeric display, featuring intuitive 3-pushbutton menu guidance, switching outputs, scalable analogue output (4...20 mA / 0...10 V), and IO-Link communication for liquids and gases.",
    features: [
      "Integrated 4-digit alphanumeric display with red/green color alternating indicator",
      "Robust stainless steel housing with 345° rotatable upper body for optimal readability",
      "Precise Pt1000 Class A measuring element with rapid thermal response times",
      "Dual outputs: switching outputs, scalable 4...20 mA / 0...10 V analogue, and IO-Link 1.1",
      "Wide measuring range from -50 to +150 °C (-58 to +302 °F)",
      "High static pressure resistance up to 300 bar (30 MPa)",
      "Intuitive on-device configuration via 3 pushbuttons with password protection",
      "IP67 ingress protection for harsh industrial process environments",
    ],
    applicationTable: [
      { property: "Application", values: ["Liquids and gases in industrial process lines"] },
      { property: "Measuring Element", values: ["1 x Pt 1000 (DIN EN 60751, Class A)"] },
      { property: "Measuring Range", values: ["-50...150 °C (-58...302 °F)"] },
      { property: "Process Connection", values: ["Threaded connection G 1/2 external thread"] },
      { property: "Installation Length (EL)", values: ["30 mm / 50 mm / 100 mm options"] },
      { property: "Operating Voltage", values: ["18...32 V DC"] },
      { property: "Current Consumption", values: ["< 50 mA"] },
      { property: "Total Outputs", values: ["2 (Switching output, Scalable 4...20 mA / 0...10 V, IO-Link)"] },
      { property: "Communication Interface", values: ["IO-Link Revision 1.1 (COM2 38.4 kBaud)"] },
      { property: "Display", values: ["4-digit alphanumeric red/green LED display"] },
      { property: "Pressure Rating", values: ["300 bar (4350 psi / 30 MPa)"] },
      { property: "Protection Rating", values: ["IP 67"] },
      { property: "Housing Material", values: ["Stainless steel 316L (1.4404), PBT+PC-GF 30, PC"] },
    ],
  },
  {
    id: 50,
    name: "2 Pcs Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",
    price: 4500,
    image: pcsball2,
    specifications: [
      { no: 1, description: "Body", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 2, description: "End Connector", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 3, description: "Ball", material: "S.S. 304 / S.S. 316" },
      { no: 4, description: "Ball Seat", material: "PTFE / CFT / GFT" },
      { no: 5, description: "Stem Pin", material: "AISI S.S. 304 / S.S. 316" },
      { no: 6, description: "Body Seat", material: "Grafoil" },
      { no: 7, description: "Conn O Ring", material: "PTFE / CFT / GFT" },
      { no: 8, description: "Stem Seat Bottom", material: "PTFE / CFT / GFT" },
      { no: 9, description: "Stem O Ring", material: "PTFE / CFT / GFT" },
      { no: 10, description: "Stem Seat Top", material: "Grafoil" },
      { no: 11, description: "Gland", material: "S.S. 304 / S.S. 316" },
      { no: 12, description: "Fitting Nut & Spring Washer", material: "H.T. / S.S. 202" },
      { no: 13, description: "Pneumatic Actuator", material: "Standard" },
    ],
  },
  {
    id: 52,
    name: "3 Pcs Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",
    specifications: [
      { no: 1, description: "Body", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 2, description: "End Connector", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 3, description: "Ball", material: "S.S. 304 / S.S. 316" },
      { no: 4, description: "Ball Seat", material: "PTFE / CFT / GFT" },
      { no: 5, description: "Stem Pin", material: "AISI 410/S.S. 304 / S.S. 316" },
      { no: 6, description: "Gland With Bush", material: "S.S. 304" },
      { no: 7, description: "Stem Seat  ", material: "PTFE / CFT / GFT" },
      { no: 8, description: "Stud & Socket Nut", material: "M.S / S.S" },
      { no: 9, description: "Pneumatic Actuator", material: "Standard" },
    ],

    price: 4500,
    image: pcsball3,

  },
  {
    id: 53,
    name: "3 / 4 Way Ball Valve Screwed end ",
    type: "Valve",
    typeName: "Ball Valve",
    specifications: [
      { no: 1, description: "Body", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 2, description: "End Connector", material: "WCB / S.S. 304 / S.S. 316" },
      { no: 3, description: "Ball", material: "S.S. 304 / S.S. 316" },
      { no: 4, description: "Ball Seat", material: "PTFE / CFT / GFT" },
      { no: 5, description: "Stem Pin", material: "AISI S.S. 304 / S.S. 316" },
      { no: 6, description: "Body Seat", material: "Grafoil" },
      { no: 7, description: "Conn O Ring", material: "PTFE / CFT / GFT" },
      { no: 8, description: "Stem Seat Bottom", material: "PTFE / CFT / GFT" },
      { no: 9, description: "Stem O Ring", material: "PTFE / CFT / GFT" },
      { no: 10, description: "Stem Seat Top", material: "Grafoil" },
      { no: 11, description: "Gland", material: "S.S. 304 / S.S. 316" },
      { no: 12, description: "Fitting Nut & Spring Washer", material: "H.T. / S.S. 202" },
      { no: 13, description: "Pneumatic Actuator", material: "Standard" },
    ],

    price: 4500,
    image: wayball34,

  },
  {
    id: 54,
    name: "Wafer type Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",

    image: wafertypeballvalve,

  },
  {
    id: 55,
    name: "FEP / PFA lined Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",

    price: 4500,
    image: FepPfalinedBallValve,

  },
  {
    id: 56,
    name: "UPVC Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",
    image: Upvcballvaleve,
  },
  {
    id: 57,
    name: "PP Ball Valve",
    type: "Valve",
    typeName: "Ball Valve",
    description: "Madras Control Components offers ISO 5211 Standard pneumatic actuator operated investment casting WCB/CF8/CF8M ball valve in threepiece design. Engineering for multiple ON/OFF operations in the down stream.",
    price: 4500,
    image: ppballvalve,

  },
  {
    id: 58,
    name: "Rubber lined Butterfly Valve",
    type: "Valve",
    typeName: "Butterfly Valve",

    image: LineedButterfly,

  },
  {
    id: 59,
    name: "Rubber lined double flanged Butterfly Valve",
    type: "Valve",
    typeName: "Butterfly Valve",

    price: 4500,
    image: LineedDoubleflangeButterfly,

  },
  {
    id: 60,
    name: "Rubber lined lug type Butterfly Valve",
    type: "Valve",
    typeName: "Butterfly Valve",

    price: 4500,
    image: LinedlugtypeButterfly,

  },
  {
    id: 61,
    name: "FEP / PFA lined Butterfly Valve",
    type: "Valve",
    typeName: "Butterfly Valve",

    price: 4500,
    image: feppfaLineedButterfly,

  },
  {
    id: 120,
    name: "Vibration Sensors",
    type: "vibration monitoring",
    price: 4500,
    image: vibsensors,

  },
  {
    id: 121,
    name: "Vibration Velocity - IRD301 ",
    type: "vibration monitoring",
    price: 4500,
    image: vibvelocity,

  },
  {
    id: 122,
    name: "Vibration Vibvelocity & Displacement  - IRD306DP ",
    type: "vibration monitoring",
    price: 4500,
    image: vibvelocityDisplacement,

  },
  {
    id: 123,
    name: "Vibration Amplitude Bearing Condition -IRD811D",
    type: "vibration monitoring",
    price: 4500,
    image: vibAmplitudeBearingCondition,

  },
  {
    id: 124,
    name: "Vibration Velocity and Displacement -IRD306",
    type: "vibration monitoring",
    price: 4500,
    image: VibrationVelocityandDisplacement,

  },
  {
    id: 125,
    name: "Vibration Amplitude and Bearing Condition-IRD811",
    type: "vibration monitoring",
    price: 4500,
    image: VibrationAmplitudeandBearingCondition,

  },
];
export default products;
