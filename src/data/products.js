// import img from "../components/images/product/valve1.png"
// flow
import Electromagnetic from "../components/images/product/flow/ELECTROMAGNETICFLOWMETER.jpg"
import Vortex from "../components/images/product/flow/VORTEX FLOWMETER.jpg"
import ThermalMass from "../components/images/product/flow/THERMAL MASS FLOWMETER1.jpg"
import Turbine from "../components/images/product/flow/TURBINE FLOWMETER.jpg"
import Mass from "../components/images/product/flow/MASS FLOWMETER.jpg"
import Ultrasonic1 from "../components/images/product/flow/ULTRASONIC FLOWMETER.jpg"
import gas from "../components/images/product/flow/gas flow.jpg"
import Mechanical from "../components/images/product/flow/Mechanical Type1.jpg"
import VariableAreaFlowmeters from "../components/images/product/VariableArea.jpg"
import CustodyTransferGas from "../components/images/product/flow/Custody Transfer Gas FM.jpeg"
import OvalGearFM from "../components/images/product/flow/9.Oval_Gear_FM.png"
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
  {
    id: 1,
    name: "Electromagnetic Flowmeter",
    type: "Flow Measurement",
    // description: "Accurate digital sensor for industrial use.",
    price: 2999,
    image: Electromagnetic,
    pdf: "/pdf/Flow/1.EMF.pdf",
    specifications: [
      { no: 1, description: "Series", material: "Proline Promag H" },
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
    id: 2,
    name: "Vortex Flowmeter",
    type: "Flow Measurement",
    price: 2999,
    image: Vortex,
    pdf: "/pdf/Flow/2.Vortex_FM.pdf",
  },
  {
    id: 3,
    name: "Mass Flowmeter ",
    type: "Flow Measurement",
    price: 2999,
    image: Mass,
    pdf: "/pdf/Flow/3.Coriolis_FM.pdf",
  },
  {
    id: 4,
    name: "Thermal Mass Flowmeter",
    type: "Flow Measurement",
    price: 2999,
    image: ThermalMass,
    pdf: "/pdf/Flow/4.Thermalmass_FM.pdf",
  },
  {
    id: 5,
    name: "Ultrasonic Gas Flowmeter    ",
    type: "Flow Measurement",
    price: 2999,
    image: gas,
    pdf: "/pdf/Flow/5.Ultrasonic_Gas_FM.pdf",
  },
  {
    id: 6,
    name: "Custody Transfer Gas Flowmeter",
    type: "Flow Measurement",
    price: 2999,
    image: CustodyTransferGas,
    pdf: "/pdf/Flow/7.Custody_Transfer_Gas_FM.pdf",
  },
  {
    id: 7,
    name: "Ultrasonic clamp Flowmeter ",
    type: "Flow Measurement",
    price: 2999,
    image: Ultrasonic1,
    pdf: "/pdf/Flow/6.Ultrasonic_clamp_FM.pdf",
  },
  {
    id: 8,
    name: "Turbine Flowmeter    ",
    type: "Flow Measurement",
    price: 2999,
    image: Turbine,
    pdf: "/pdf/Flow/8.Turbine_FM.pdf",
  },
  {
    id: 9,
    name: "Oval Gear Flowmeter",
    type: "Flow Measurement",
    price: 2999,
    image: OvalGearFM,
    pdf: "/pdf/Flow/9.Oval_Gear_FM.pdf",
  },
  {
    id: 10,
    name: "Variable Area Flowmeters",
    type: "Flow Measurement",
    price: 2999,
    image: VariableAreaFlowmeters,
    pdf: "/pdf/Flow/10.Variable_Area_FM.pdf",
  },
  {
    id: 11,
    name: "Woltman Type Flowmeters ",
    type: "Flow Measurement",
    price: 2999,
    image: Mechanical,
    pdf: "/pdf/Flow/11.Woltman_Type_FM.pdf",
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
