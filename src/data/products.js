// import img from "../components/images/product/valve1.png"
// flow
import Electromagnetic from "../components/images/product/flow/ELECTROMAGNETICFLOWMETER.jpg"
import Ultrasonic1 from "../components/images/product/flow/ULTRASONIC FLOWMETER.jpg"
import SolarPoweredFM from "../components/images/product/flow/solar_powered_flowmeter.jpg"
import BtuMeter from "../components/images/product/flow/btu_meter.jpg"
import ThermalMass from "../components/images/product/flow/THERMAL MASS FLOWMETER1.jpg"
// level
import RadarLevel from "../components/images/product/level/RadarLevel.jpeg"
import GuidedWaveradarLevel from "../components/images/product/level/GuidedWaveradarLevel.jpeg"
import UltrasonicLevel from "../components/images/product/level/UltrasonicLevel.jpeg"
import DPLevel from "../components/images/product/level/DPLevel.jpeg"
import PointLevel from "../components/images/product/level/PointLevel.png"
import Hydrostatical from "../components/images/product/level/hydrostatical1.png"
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
import dpt from "../components/images/product/pressure/dpt.png"
import Absoluteandgauge from "../components/images/product/pressure/Absoluteandgauge.png"
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
    name: "Insertion Type Electromagnetic Flow Meter SR1000i",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: Electromagnetic,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "High-accuracy hot-tap insertion type electromagnetic flow meter (SR1000i) engineered for large conduits, municipal water distribution, and plant utility pipelines.",
    specifications: [
      { no: 1, description: "Model", material: "SR1000i Hot-Tap Insertion" },
      { no: 2, description: "Line Size", material: "DN100 to DN3000 mm" },
      { no: 3, description: "Electrodes", material: "SS316L / Hastelloy C / Titanium" },
      { no: 4, description: "Accuracy", material: "±1.0% to ±1.5% of reading" },
      { no: 5, description: "Outputs", material: "4-20mA, Pulse, RS485 Modbus, HART" },
      { no: 6, description: "Protection", material: "IP68 Submersible Sensor" },
    ],
  },
  {
    id: 2,
    name: "Battery Operated Electromagnetic Flow Meter SS1021",
    subCategory: "ELECTROMAGNETIC FLOW METER",
    subItemNo: 2,
    type: "Flow Measurement",
    price: 2999,
    image: Electromagnetic,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "Autonomous battery-operated electromagnetic flow meter (SS1021) with integrated GSM/GPRS telemetry, designed for district metering areas and remote networks.",
    specifications: [
      { no: 1, description: "Model", material: "SS1021 Battery Operated EMF" },
      { no: 2, description: "Battery Life", material: "Up to 5 to 10 years continuous" },
      { no: 3, description: "Bore Size", material: "DN15 to DN1200 mm flanged spool" },
      { no: 4, description: "Accuracy", material: "±0.5% calibrated (OIML R49 / ISO 4064)" },
      { no: 5, description: "Telemetry", material: "4G / GPRS / NB-IoT / Modbus RTU" },
      { no: 6, description: "Enclosure", material: "IP68 Hermetically Sealed" },
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
      { no: 1, description: "Measurement Principle", material: "Ultrasonic Transit-Time Difference" },
      { no: 2, description: "Pipe Size Range", material: "DN15 to DN6000 (External Clamp-on)" },
      { no: 3, description: "Accuracy", material: "±1.0% of reading (±0.5% calibrated)" },
      { no: 4, description: "Fluid Temperature", material: "-30°C to +160°C" },
      { no: 5, description: "Outputs", material: "4-20mA, OCT Pulse, Relay, RS485 Modbus" },
      { no: 6, description: "Display", material: "Backlit LCD Flow Rate & Totalizer" },
    ],
  },
  {
    id: 4,
    name: "SOLAR POWERED FLOW METER",
    subCategory: "SOLAR POWERED FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: SolarPoweredFM,
    pdf: "/pdf/Flow/1.EMF.pdf",
    description: "Autonomous solar-powered flow metering station engineered for remote water supply, irrigation, and pipeline telemetry without grid power.",
    specifications: [
      { no: 1, description: "Power System", material: "Integrated Solar PV Panel with LiFePO4 Battery" },
      { no: 2, description: "Battery Autonomy", material: "Up to 30 days continuous backup in overcast conditions" },
      { no: 3, description: "Flow Sensor", material: "Low-Power Electromagnetic / Ultrasonic Body" },
      { no: 4, description: "Telemetry", material: "Built-in 4G / GPRS / NB-IoT / LoRaWAN" },
      { no: 5, description: "Sensor Protection", material: "IP68 Hermetically Submersible" },
      { no: 6, description: "Operating Temperature", material: "-20°C to +65°C ambient" },
    ],
  },
  {
    id: 5,
    name: "BTU METER",
    subCategory: "BTU METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: BtuMeter,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
    description: "Precision ultrasonic BTU / thermal energy meter designed for chilled water, hot water HVAC systems, central cooling plants, and tenant billing.",
    specifications: [
      { no: 1, description: "Energy Standards", material: "Complies with EN1434 Class 2 & OIML R75" },
      { no: 2, description: "Flow Tube", material: "High-accuracy Ultrasonic Transit-Time (Brass/SS304)" },
      { no: 3, description: "Temperature Probes", material: "Matched Pair PT1000 Class A Platinum RTDs" },
      { no: 4, description: "Measurement Units", material: "kWh, MWh, Gcal, GJ selectable" },
      { no: 5, description: "Communication", material: "M-Bus, BACnet MS/TP, RS485 Modbus RTU" },
      { no: 6, description: "Data Logging", material: "Hourly, Daily & Monthly Energy Historian" },
    ],
  },
  {
    id: 6,
    name: "THERMAL MASS FLOW METER",
    subCategory: "THERMAL MASS FLOW METER",
    subItemNo: 1,
    type: "Flow Measurement",
    price: 2999,
    image: ThermalMass,
    pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
    description: "Direct thermal mass flow measurement for compressed air, natural gas, biogas, aeration air, and industrial gas pipelines without pressure/temp compensation.",
    specifications: [
      { no: 1, description: "Measurement Principle", material: "Thermal Dispersion / Constant Temperature Differential" },
      { no: 2, description: "Accuracy", material: "±1.0% of reading ±0.5% full scale" },
      { no: 3, description: "Turndown Ratio", material: "Up to 100:1 wide dynamic range" },
      { no: 4, description: "Sensor Material", material: "SS316L / Hastelloy C wetted parts" },
      { no: 5, description: "Process Connection", material: "Retractable hot-tap insertion or flanged inline spool" },
      { no: 6, description: "Outputs", material: "4-20mA, Scaled Pulse, RS485 Modbus, HART" },
    ],
  },

  // Level Measurement
  {
    id: 21,
    name: "Radar Level Transmitter ",
    type: "Level Measurement",

    price: 2999,
    image: RadarLevel,
  },
  {
    id: 22,
    name: "Guided Wave Radar Level ",
    type: "Level Measurement",

    price: 2999,
    image: GuidedWaveradarLevel,
  },
  {
    id: 23,
    name: "Ultrasonic Level",
    type: "Level Measurement",

    price: 2999,
    image: UltrasonicLevel,
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
    name: "Point level    ",
    type: "Level Measurement",

    price: 2999,
    image: PointLevel,
  },
  {
    id: 26,
    name: "Hydrostatical    ",
    type: "Level Measurement",

    price: 2999,
    image: Hydrostatical,
  }
  ,
  {
    id: 27,
    name: "Capacitance Level    ",
    type: "Level Measurement",

    price: 2999,
    image: CapacitanceLevel,
  }
  ,
  {
    id: 28,
    name: "Float switch",
    type: "Level Measurement",

    price: 2999,
    image: Float,
  },
  {
    id: 40,
    name: "Absolute and gauge pressure measurement",
    type: "Pressure Measurement",

    price: 2999,
    image: Absoluteandgauge,
  },
  {
    id: 41,
    name: "Differential pressure flow measurement",
    type: "Pressure Measurement",

    price: 2999,
    image: dpt,
  },
  {
    id: 43,
    name: "Head mount ",
    type: "Temperature Measurement",

    price: 2999,
    image: Head1,
  },
  {
    id: 44,
    name: "Float Mount ",
    type: "Temperature Measurement",

    price: 2999,
    image: float1,
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
