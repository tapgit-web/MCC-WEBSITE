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

export const ULTRASONIC_FEATURES = [
  "Auto adjustable to various pipe materials",
  "Quick and easy to install and operate",
  "Requires no special skills or equipment",
  "Budget-friendly and adaptable",
  "No need to cut the pipe or stop water, easy installation",
  "Highly accurate and reliable",
  "There are no moving parts, no pressure drops, and no maintenance requirements",
];

export const ULTRASONIC_APPLICATIONS = {
  description: null,
  industryTitle: null,
  industries: [
    "Municipal water supply lines",
    "Large pipelines",
    "Utility Plants in all industries",
    "Refineries \u2013 Cooling Towers",
    "Pharma industry",
    "Power plants",
  ],
};

export const ULTRASONIC_INSERTION_FEATURES = [
  "Auto adjustable to various pipe materials",
  "Quick and easy to install and operate",
  "Budget-friendly and adaptable",
  "Hot tapping possible \u2013 Can save a lot of time and money wasted if the line would be isolated and flow stopped for installation",
  "Highly accurate and reliable",
  "There are no moving parts, no pressure drops, and no maintenance requirements",
];

export const ULTRASONIC_INSERTION_APPLICATIONS = {
  title: "Applications*",
  description: null,
  industryTitle: null,
  industries: [
    "Municipal water supply lines",
    "Large pipelines",
    "Utility Plants in all industries",
    "Refineries \u2013 Cooling Towers",
    "Pharma industry",
    "Power plants",
  ],
  note: "*For clear water application only",
};

export const BTU_METER_FEATURES = [
  "Measurement of Thermal Power and Energy consumed through measurement of flow, a Temperature difference of Inlet and Outlet of the medium",
  "Availability of display of Chilled Water flow, Power, Temperature, etc.",
  "Data storage up to 1 year with hourly storage facility with real-time",
  "Display of chilled water flow, power temperature available.",
  "Choice of mounting either on the inlet or on the outlet as per site conditions",
];

export const BTU_METER_APPLICATIONS = {
  title: "Applications",
  description: null,
  industryTitle: null,
  industries: [
    "Centralized air conditioning systems",
    "Commercial enterprises - Air conditioning systems",
    "Manufacturing businesses - HVAC applications",
    "Office buildings - HVAC applications",
    "Pharmaceutical Industry",
  ],
};

export const BTU_HEAT_FEATURES = [
  "Buzzer on Faults / Errors",
  "Fault conditions- Indicate by different error codes",
  "The engineering units available for Heat in Kcal/hr, Energy in MKcal, Flow in m3/hr, Density in kg/m3, Specific Heat in Kcal/kg\u00b0C OR KJ/kg\u00b0C and Temperature in \u00b0C",
  "Password protection on all programming modes",
  "Data Logging: Approx readings: 3000 for normal logging and approx 5500 readings for extended logging",
];

export const BTU_HEAT_APPLICATIONS = {
  title: "Applications",
  description: null,
  industryTitle: null,
  industries: [
    "Suitable for thermic fluids like HYTHERM 500, HYTHERM 600, DOWTHERM A, DOWTHERM T, THERMIA A, THERMIA B, THERMINOL 55, THERMINOL 66, THERMINOL 72, WATER etc.",
    "Oil and gas processing",
    "Natural gas purification",
    "Refining",
    "Asphalt processing and storage",
  ],
};

export const BTU_ULTRASONIC_FEATURES = [
  "Size available DN50 \u2013 DN1500",
  "No moving parts and fast response to flow transits",
  "Highly accurate and reliable",
  "Isolated 4-20 mA output proportional to flow rate",
  "No need to cut the pipe or stop water, easy installation for clamp-on type",
];

export const BTU_ULTRASONIC_APPLICATIONS = {
  title: "Applications",
  description: null,
  industryTitle: null,
  industries: [
    "Used for measurement for energy consumed",
    "Measures thermal energy required for air conditioning system",
    "Used in chiller water application with temperature sensor",
  ],
};

export const RADAR_LEVEL_APPLICATIONS = [
  "Continuous, non-contact level measurement of liquids, pastes and sludges",
  "Process connections: Thread or mounting bracket",
  "Maximum measuring range: 50 m (164 ft)",
  "Temperature: −40 to +200 °C (−40 to +392 °F)",
  "Pressure: −1 to +20 bar (−14.5 to +290 psi)",
  "Accuracy: ±1 mm (±0.04 in)",
];

export const RADAR_LEVEL_BENEFITS = {
  title: "Your benefits",
  description: null,
  industryTitle: null,
  industries: [
    "PVDF, PTFE Drip-off or PEEK antenna for small process connections",
    "Reliable measurement thanks to very good signal focusing, even with small process connections",
    "Easy, guided commissioning with intuitive user interface",
    "Bluetooth® wireless technology for commissioning, operation and maintenance",
    "SIL2 as per IEC 61508, SIL3 for homogeneous redundancy",
    "Easy guided proof testing for SIL and WHG",
  ],
};

export const GUIDED_WAVE_RADAR_FEATURES = [
  "Special feature: Gold-plated contacts for maximum signal integrity",
  "Designed for continuous level measurement in industrial liquid applications",
  "Suitable for liquids with dielectric constant \u2265 1.8",
  "Coaxial pipe operation available for low dielectric media (1.8 to 5, e.g. oils)",
  "Process temperature range: \u221225 to +80 \u00b0C (up to 90 \u00b0C for < 1 h)",
  "Pressure rating: 16 bar (1.6 MPa) | MAWP according to CRN: 16 bar",
  "Vacuum resistance: \u22121000 mbar (\u22120.1 MPa)",
];

export const GUIDED_WAVE_RADAR_APPLICATIONS = {
  title: "Application",
  description: "Engineered for reliable continuous level monitoring across industrial liquid applications.",
  industryTitle: "Recommended Media & Industrial Use:",
  industries: [
    "Water and hydrous media",
    "Industrial oils and cutting fluids",
    "Oil-based media and liquid lubricants",
    "Industrial processing and storage tanks",
    "Machine tool coolant reservoirs",
    "Hydraulic and power pack tanks",
  ],
};

export const ULTRASONIC_LEVEL_BENEFITS = [
  "Reliable non-contact measurement",
  "Quick and simple commissioning via menu-guided on-site operation with four-line plain text display, 7 languages selectable",
  "Envelope curves on the on-site display for simple diagnosis",
  "Hermetically sealed and potted sensor",
  "Chemically resistant sensor out of PVDF",
  "Calibration without filling or discharging",
  "Integrated temperature sensor for automatic correction of the temperature dependent sound velocity",
];

export const ULTRASONIC_LEVEL_APPLICATIONS = {
  title: "Applications",
  description: "Non-contact ultrasonic level measurement suitable for liquids, pastes, coarse bulk solids, and open channel flow.",
  industryTitle: "Common Application Areas:",
  industries: [
    "Water and wastewater treatment facilities",
    "Chemical storage and buffer tanks",
    "Open channels, weirs, and flumes for flow measurement",
    "Pump stations, sumps, and rainwater retention basins",
    "Effluent treatment plants (ETP) and sewage plants (STP)",
    "Storage silos for coarse bulk solids",
  ],
};

export const POINT_LEVEL_FEATURES = [
  "Special feature: Gold-plated contacts for high-reliability electrical connection",
  "Compact probe design with 11 mm probe length",
  "High tank pressure resistance: \u22121 to 40 bar (\u22120.1 to 4 MPa)",
  "Maximum Allowable Working Pressure (MAWP according to CRN): 40 bar",
  "Wide medium temperature range: \u221240 to +100 \u00b0C (oil & water)",
  "High temperature tolerance: Short-term up to 150 \u00b0C (1 h) for cleaning & CIP",
  "Durable stainless steel housing with hygienic PEEK sensing tip",
];

export const POINT_LEVEL_APPLICATIONS = {
  title: "Application",
  description: "Point level detection engineered for reliable limit level monitoring in tanks, vessels, and pipes without false switching from build-up.",
  industryTitle: "Compatible Media & Use Cases:",
  industries: [
    "Liquid media (water, solutions, emulsions)",
    "Viscous media and pasty substances",
    "Powder, bulk solids, and granulates",
    "Industrial oil systems and lubricant reservoirs",
    "Run-dry protection for pumps and overfill prevention in tanks",
    "Food, beverage, chemical, and general industrial processing lines",
  ],
};

export const HYDROSTATIC_LEVEL_FEATURES = [
  "Special feature: Gold-plated contacts for maximum signal integrity",
  "Flush-mountable hygienic design with zero dead space for easy cleaning and CIP/SIP",
  "Relative pressure and vacuum measurement capability",
  "High medium temperature tolerance: \u221225 to +150 \u00b0C",
  "Pressure rating: 10000 mbar (145 psi / 1000 kPa) with min. burst pressure of 30000 mbar (435 psi)",
  "Vacuum resistance: \u22121000 mbar (\u22120.1 MPa)",
  "Maximum Allowable Working Pressure (MAWP according to CRN): 10 bar",
];

export const HYDROSTATIC_LEVEL_APPLICATIONS = {
  title: "Application",
  description: "Hygienic flush-diaphragm hydrostatic level and pressure transmitter engineered for food, beverage, pharma, and industrial fluid systems.",
  industryTitle: "Application Scope & Compatible Media:",
  industries: [
    "Food and beverage industry (hygienic flush mountable)",
    "Viscous media and pasty substances",
    "Liquids with suspended particles and fibers",
    "General liquids, processing fluids, and gases",
    "Hydrostatic level measurement in tanks and pressure vessels",
    "CIP/SIP cleaning systems requiring zero dead-space sanitary design",
  ],
};

export const COMPACT_PRESSURE_FEATURES = [
  "Robust compact stainless steel housing with high ingress protection (IP67 / IP69K)",
  "Relative pressure measurement for industrial liquids and gases",
  "High static pressure rating: 25 bar (360 psi / 2.5 MPa)",
  "Exceptional burst pressure resistance up to 300 bar (4350 psi / 30 MPa)",
  "Vacuum resistance down to \u22121000 mbar (\u22120.1 MPa)",
  "Wide operating medium temperature range: \u221240 to +90 \u00b0C",
  "Standard process connection: Thread G 1/4 with M12 gold-plated connector",
];

export const COMPACT_PRESSURE_APPLICATIONS = {
  title: "Application",
  description: "Designed for continuous, highly accurate pressure measurement in industrial plant machinery, hydraulics, and pneumatic automation.",
  industryTitle: "Application Scope & Media Compatibility:",
  industries: [
    "Industrial machinery and plant engineering",
    "Hydraulic systems and fluid power units",
    "Pneumatic lines and compressed gas distribution",
    "Cooling circuits and lubrication oil monitoring",
    "Industrial gases and liquid processing systems",
    "Automated process monitoring and pressure control",
  ],
};

export const HIGH_ACCURACY_PRESSURE_FEATURES = [
  "Special feature: Gold-plated contacts for maximum measurement accuracy and signal fidelity",
  "Approved for both demanding industrial applications and railway applications",
  "Relative pressure measurement for industrial liquids and gases",
  "Robust pressure rating: 75 bar (1088 psi / 7.5 MPa)",
  "High burst pressure safety: 150 bar (2175 psi / 15 MPa)",
  "Wide operating medium temperature: \u221225 to +90 \u00b0C (extended \u221240 to +90 \u00b0C on request)",
  "Rugged stainless steel housing with IP68 / IP69K ingress protection",
];

export const HIGH_ACCURACY_PRESSURE_APPLICATIONS = {
  title: "Application",
  description: "High-precision pressure transmitters engineered for reliable monitoring under high vibration, shock, and harsh industrial environments.",
  industryTitle: "Application Areas & Industry Uses:",
  industries: [
    "Industrial automation and plant engineering",
    "Railway and rolling stock mobile applications",
    "Heavy machinery and hydraulic power packs",
    "Compressors, pumps, and pneumatic control lines",
    "Gas supply systems and liquid process loops",
    "High-accuracy test benches and quality monitoring",
  ],
};

export const INTEGRAL_DISPLAY_PRESSURE_FEATURES = [
  "Integrated alphanumeric digital display with intuitive pushbuttons for local on-site monitoring and configuration",
  "High-performance metallic thin film measuring cell for exceptional stability and long-term accuracy",
  "Special feature: Gold-plated contacts for maximum contact reliability",
  "Extra-high pressure rating: 800 bar (11580 psi / 80 MPa)",
  "Heavy-duty burst pressure safety: 1700 bar (24650 psi / 170 MPa)",
  "Vacuum resistance down to \u22121000 mbar (\u22120.1 MPa)",
  "Operating medium temperature range: \u221225 to +80 \u00b0C",
  "CRN approved: MAWP up to 800 bar (11580 psi / 80 MPa)",
];

export const INTEGRAL_DISPLAY_PRESSURE_APPLICATIONS = {
  title: "Application",
  description: "Engineered for high-pressure hydraulic, pneumatic, and industrial fluid power applications where immediate on-site visual pressure indication is essential.",
  industryTitle: "Application Areas & Compatible Media:",
  industries: [
    "High-pressure hydraulic power packs and test stands",
    "Heavy machine tools, injection molding, and presses",
    "Mobile machinery, construction, and railway hydraulics",
    "Industrial gas systems and pressurized fluid lines",
    "Pumping stations and lubrication distribution systems",
    "General industrial automation requiring local display readout",
  ],
};

export const THERMAL_MASS_FEATURES = [
  "Direct measurement of mass flow",
  "No pressure or temperature compensation required",
  "20:1 turndown ratio",
  "Wireless data transfer is possible. Remote readings are available on wireless",
  "Pulse, milliamps, and RS485 output for networking",
];

export const THERMAL_MASS_APPLICATIONS = {
  title: "Applications",
  description: null,
  industryTitle: null,
  industries: [
    "Compressed air/ Gas Consumption measurement",
    "Very low-pressure flowing conditions",
    "Fuel Gas consumption measurement",
    "Furnace and burner control",
    "Biogas measurement and digester and ahead",
    "HVAC applications",
  ],
};

// Default export aliases
export const EMF_FEATURES = FULL_BORE_FEATURES;
export const EMF_APPLICATIONS = FULL_BORE_APPLICATIONS;
