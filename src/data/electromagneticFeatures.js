/**
 * Engineering Features & Applications data for:
 * 1. Full Bore Electromagnetic Flow Meter (SR1000A)
 * 2. Insertion Type Electromagnetic Flow Meter (SR1000i)
 * 3. Battery Operated Electromagnetic Flow Meter (SS1021)
 */

export const FULL_BORE_FEATURES = [
  "The use of pulsed DC magnetization and auto-zero technique offers excellent long-term zero stability",
  "Measurement is independent of the velocity profile across the diameter of the pipeline",
  "Measurement results are independent of density, viscosity, pressure, temperature, solid \u2013 impurities and conductivity variations (above 2 \u03bcs / cm)",
  "No additional pressure drop across the meter relieves the process designer while sizing his pumping requirements. Simple to install as no special precautions of straight pipe lengths are required",
  "Compatible with virtually all corrosive / non-corrosive liquids.",
  "The Protection class offered IP 68 for the flow sensor, IP 67 for a transmitter",
  "Reasonably higher ratio of return on Investment",
];

export const FULL_BORE_APPLICATIONS = {
  description:
    "This meter is more suitable for those fluids which present difficulties in handling. Fluids such as effluents, slurries, pulps, brines and other highly corrosive liquids, acids and bases, fermenter wash, molasses, juice, etc.",
  industryTitle:
    "Following industries can find a lot of applications of this flow measurement technique.",
  industries: [
    "Effluent Treatment Plants",
    "Sewage Treatment Plants",
    "Water Supply Schemes",
    "Steel and Aluminum",
    "Sugar Industries and Distilleries",
    "Pulp and Paper",
    "Chemical / Pharmaceutical",
    "Petrochemicals / Fertilizers",
    "Food and Drugs",
  ],
};

export const INSERTION_FEATURES = [
  "Available for different line sizes from DN 200 to DN 2000",
  "Typical accuracy is better than \u00b1 2% (Best accuracy in it\u2019s class) Measurement results are independent of density, viscosity, pressure, temperature, solid impurities and conductivity variations (above 5 \u03bcS/cm)",
  "Excellent long term stability using pulsed DC magnetization and auto zero technique",
  "Best suited for irrigation and water supply departments, public service and utility departments for large sized and / or cement pipelines",
];

export const INSERTION_APPLICATIONS = {
  description: null,
  industryTitle: null,
  industries: [
    "Water Supply",
    "Public Services and Utilities",
    "Effluent Treatment Plants",
    "Pharmaceutical Industries",
    "Sugar Industries and Distilleries",
    "Food and Drugs",
  ],
};

export const BATTERY_OPERATED_FEATURES = [
  "Battery Operated (Battery Life 5 Years)",
  "Sizes Available from DN15 to DN500",
  "Highly Accurate and extremely Linear",
  "Microvolt signal Proportional flow rate from the primary flow sensor",
  "Various types of Liner and Earth electrodes, both options are available",
  "Empty tube detection is also provided",
];

export const BATTERY_OPERATED_APPLICATIONS = {
  description: null,
  industryTitle: null,
  industries: [
    "Municipal water supply schemes",
    "Irrigation schemes",
    "Mining Industry",
    "Sewage treatment plants",
    "Management of water and wastewater",
    "Effluent treatment plants",
  ],
};

export const SOLAR_POWERED_FEATURES = [
  "Accuracy is better than 0.5% / 1% deviation depending upon type of flow meter",
  "Solar-powered. No other power supply is needed",
  "Solar panel adequately rated to suit the flow meter",
  "LCD with backlight",
  "4 Key membrane keypads",
  "RS-485 interface with MODBUS support and well suited for reliable networking",
  "GSM/GPRS for cloud connectivity (Optional)",
  "Pulse output (optional)",
  "4 \u2013 20mA output (Isolated)",
];

export const SOLAR_POWERED_APPLICATIONS = {
  description: [
    "A solar-Powered Flow Meter is an ideal solution for accurate flow measurement in remote areas where electrical power is not accessible or is not reliably available.",
    "With many such flowmeters in the fields, it is possible to develop a remote flow monitoring network. With this, you can effectively manage the distribution and measurement of Irrigation water.",
  ],
  industryTitle: "This is used for clear water applications in following areas:",
  industries: [
    "Irrigation schemes",
    "Potable water distributed by local bodies",
    "Waste Water treatment plants",
    "Mining Industry",
    "Sewage treatment plants",
    "Effluent treatment plants",
  ],
};

// Default export aliases
export const EMF_FEATURES = FULL_BORE_FEATURES;
export const EMF_APPLICATIONS = FULL_BORE_APPLICATIONS;
