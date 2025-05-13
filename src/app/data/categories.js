const products = [
  // Automatic Cutting Machines
  {
    id: 1,
    categorySlug: "automatic-cutting-machines",
    name: "AutoCut",
    slug: "autocut",
    description: "The AutoCut is a high-precision automatic cutting machine designed for metallographic and materialographic sample preparation. It features motorized XYZ motions and automatic serial cutting for efficient and accurate sectioning.",
    image: "/cutting/automatic-cutting-machines/autocut.png",
    alt: "AutoCut Precision Cutting Machine",
    rating: 4.7,
    reviews: 38,
    tag: "Precision Cutting",
    detail: "Automatic serial cutting with laser marking",
    apiCall: "/api/automatic-cutting/autocut",
    features: [
      "Motorized XYZ motions for precise positioning",
      "Automatic serial cutting for high throughput",
      "T-slotted bed with swiveling option for flexible setups",
      "Laser marking for accurate cut alignment",
      "Smart cutting feed for optimized cutting performance",
      "Adjustable motor height for versatile applications",
      "Variable speed control from 200 to 4000 rpm"
    ],
    additionalFeatures: [
      "Compact design for efficient use of lab space",
      "User-friendly interface with programmable settings",
      "Robust construction for long-term durability"
    ],
    images: [
      "/cutting/automatic-cutting-machines/autocut.png",
      "/cutting/automatic-cutting-machines/autocut1.png",
      "/cutting/automatic-cutting-machines/autocut4.png",
      "/cutting/automatic-cutting-machines/autocut3.png",
    ],
    video: "/product/AutoCut.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Motor Capacity", value: "5 HP" },
      { param: "Cutting Capacity", value: "80mm round" },
      { param: "Wheel Sizes", value: "250mm, 300mm diameter" },
      { param: "Auto Feed Rate", value: "0.1mm to 10mm per minute" },
      { param: "Motor Height", value: "Adjustable (Motorized)" },
      { param: "Speed Variation", value: "200 to 4000 rpm" },
      { param: "Positioning Accuracy", value: "20 microns (Lateral X-axis)" }
    ],
    ordering: [
      { part: "30-1411-600", wheel: "250mm Wheel", voltage: "85-264VAC, 50/60Hz" },
      { part: "30-1411-602", wheel: "300mm Wheel", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Cutting Wheels",
        subtitle: "250mm and 300mm abrasive wheels",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Cutting Fluid",
        subtitle: "For precision cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      }
    ],
    literature: [
      { title: "AutoCut User Manual", image: "/cutting/automatic-cutting-machines/autocut.png" }
    ]
  },
  {
    id: 2,
    categorySlug: "automatic-cutting-machines",
    name: "MetaCut SACT 50/80",
    slug: "metacut-sact-50-80",
    description: "The MetaCut SACT 50/80 is a versatile cutting machine designed for precision sectioning of hardened materials. With options for 50mm or 80mm cutting capacity and advanced features like laser marking and hydraulic automation, it is ideal for metallographic analysis.",
    image: "/cutting/automatic-cutting-machines/metacut1.png",
    alt: "MetaCut SACT 50/80 Precision Cutting Machine",
    rating: 4.6,
    reviews: 32,
    tag: "Hardened Material Cutting",
    detail: "Hydraulic automation option",
    apiCall: "/api/automatic-cutting/metacut-sact-50-80",
    features: [
      "Laser marking for precise positioning",
      "Helical gear cutting for case depth inspection",
      "Effortless hand-operated wheel for cutting feed",
      "Motor positioned outside cutting chamber for safety and maintenance ease",
      "XY slide for accurate sample positioning",
      "Optional automatic hydraulic technology for enhanced productivity",
      "Ergonomic design allows operation in sitting position"
    ],
    additionalFeatures: [
      "High durability for heavy-duty applications",
      "Intuitive control panel for easy operation",
      "Optimized for large work volume processing"
    ],
    images: [
      "/cutting/automatic-cutting-machines/metacut1.png",
      "/cutting/automatic-cutting-machines/metacut2.png",
      "/cutting/automatic-cutting-machines/metacut3.png",
      "/cutting/automatic-cutting-machines/metacut4.png",
    ],
    video: "/product/MetaCut_SACT_50_80.mp4",
    specifications: [
      { param: "Operation", value: "Manual | Automatic (Optional Hydraulic)" },
      { param: "Cutting Capacity", value: "50mm or 80mm (Hardened Cross Section)" },
      { param: "Motor Capacity", value: "5 HP or 10 HP" },
      { param: "Cutting Action", value: "Hand-operated wheel feed" },
      { param: "Positioning", value: "XY Slide with Laser Marking" },
      { param: "Gear Cutting", value: "Helical gear for case depth inspection" }
    ],
    ordering: [
      { part: "40-1511-700", capacity: "50mm, 5 HP", voltage: "85-264VAC, 50/60Hz" },
      { part: "40-1511-702", capacity: "80mm, 10 HP", voltage: "85-264VAC, 50/60Hz" },
      { part: "40-1511-704", capacity: "80mm, 10 HP with Hydraulic Automation", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Cutting Wheels",
        subtitle: "For 50mm and 80mm cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Cutting Fluid",
        subtitle: "For hardened material cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      }
    ],
    literature: [
      { title: "MetaCut SACT 50/80 User Manual", image: "/cutting/automatic-cutting-machines/metacut1.png" },
    ]
  },
  {
    id: 3,
    categorySlug: "automatic-cutting-machines",
    name: "Metacut",
    slug: "metacut",
    description: "The Metacut is a compact and efficient cutting machine designed for precision sectioning of materials with a cutting capacity of 40mm diameter. Powered by a 3 HP motor, it is ideal for metallographic sample preparation.",
    image: "/cutting/automatic-cutting-machines/metacut_1.png",
    alt: "Metacut Precision Cutting Machine",
    rating: 4.5,
    reviews: 28,
    tag: "Precision Cutting",
    detail: "Compact design for small samples",
    apiCall: "/api/automatic-cutting/metacut",
    features: [
      "3 HP motor for reliable cutting performance",
      "40mm diameter cutting capacity for small to medium samples",
      "Compact design for space-efficient laboratory use",
      "Manual operation for precise control",
      "High-precision cutting for metallographic analysis"
    ],
    additionalFeatures: [
      "Easy-to-use interface for quick setup",
      "Durable construction for long-term reliability",
      "Low maintenance requirements"
    ],
    images: [
      "/cutting/automatic-cutting-machines/metacut_2.png",
    ],
    video: "/product/Metacut.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Motor Capacity", value: "3 HP" },
      { param: "Cutting Capacity", value: "40mm diameter" }
    ],
    ordering: [
      { part: "60-1711-900", capacity: "40mm, 3 HP", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Cutting Wheels",
        subtitle: "For 50mm and 80mm cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Cutting Fluid",
        subtitle: "For hardened material cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      }
    ],
    literature: [
      { title: "MetaCut User Manual", image: "/cutting/automatic-cutting-machines/metacut_2.png" },
    ]
  },
  {
    id: 4,
    categorySlug: "automatic-cutting-machines",
    name: "Metacut-I Auto",
    slug: "metacut-i-auto",
    description: "The Metacut-I Auto is an advanced automatic cutting machine with PLC-controlled programming and a 200mm cutting stroke. It features auto cutting in the Y direction and precise motor positioning, making it ideal for automated metallographic sample preparation.",
    image: "/cutting/automatic-cutting-machines/metacut_1.png",
    alt: "Metacut-I Auto Precision Cutting Machine",
    rating: 4.7,
    reviews: 35,
    tag: "Automatic Cutting",
    detail: "PLC-controlled automation",
    apiCall: "/api/automatic-cutting/metacut-i-auto",
    features: [
      "Automatic cutting in Y direction for efficient operation",
      "PLC-controlled programming for reproducible results",
      "200mm cutting stroke for versatile applications",
      "Feed rate adjustable from 0.1mm to 5mm per minute",
      "Motor positioning with external clamps for stability",
      "Optional automatic version for enhanced productivity",
      "High precision for metallographic sample preparation"
    ],
    additionalFeatures: [
      "Programmable settings for customized cutting cycles",
      "Robust design for industrial environments",
      "Integrated safety features for operator protection"
    ],
    images: [
      "/cutting/automatic-cutting-machines/metacut_1.png",
      "/cutting/automatic-cutting-machines/metacut_3.png",
    ],
    video: "/product/Metacut_I_Auto.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Motor Capacity", value: "3 HP" },
      { param: "Cutting Capacity", value: "40mm diameter" },
      { param: "Cutting Stroke", value: "200mm" },
      { param: "Feed Rate", value: "0.1mm to 5mm per minute" },
      { param: "Control System", value: "PLC-controlled" },
      { param: "Motor Positioning", value: "Adjustable with external clamps" }
    ],
    ordering: [
      { part: "60-1711-902", capacity: "40mm, Automatic", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Cutting Wheels",
        subtitle: "For 50mm and 80mm cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Cutting Fluid",
        subtitle: "For hardened material cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      }
    ],
    literature: [
      { title: "MetaCut-I Auto User Manual", image: "/cutting/automatic-cutting-machines/metacut_1.png" },
    ]
  },
  // Oscillating Abrasive Cut-off Machine
  {
    id: 5,
    categorySlug: "oscillating-abrasive-cut-off-machines",
    name: "Oscicut",
    slug: "oscicut",
    description: "The Oscicut is a robust oscillating abrasive cut-off machine designed for large cross-section cutting. With a capacity of 120mm to 160mm and a 15 HP motor, it utilizes a cam-based oscillation technology for minimal burn and precise cuts, ideal for large components.",
    image: "/cutting/oscillating-abrasive-cut-off-machine/oscicut1.png",
    alt: "Oscicut Oscillating Abrasive Cut-Off Machine",
    rating: 4.9,
    reviews: 40,
    tag: "Large Section Cutting",
    detail: "Oscillating cutting with minimal burn",
    apiCall: "/api/oscillating-abrasive-cut-off/oscicut",
    features: [
      "Oscillating cutting motion for reduced heat and minimal burn",
      "Cam-based oscillation technology with 120mm stroke",
      "360-degree rotation with marking for precise alignment",
      "Double parallel vice for secure clamping of large components",
      "15 HP motor for powerful cutting performance",
      "Manual and automatic operation modes for flexibility",
      "Designed for large cross-section cutting (120mm to 160mm)"
    ],
    additionalFeatures: [
      "Heavy-duty construction for industrial applications",
      "User-friendly interface with programmable settings",
      "Enhanced coolant system for effective heat dissipation"
    ],
    images: [
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut1.png",
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut2.png",
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut3.png",
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut4.png",
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut5.png",
      "/cutting/oscillating-abrasive-cut-off-machine/oscicut6.png",
    ],
    video: "/product/Oscicut.mp4",
    specifications: [
      { param: "Operation", value: "Manual | Automatic" },
      { param: "Cutting Capacity", value: "120mm to 160mm" },
      { param: "Motor Capacity", value: "15 HP" },
      { param: "Cutting Motion", value: "Oscillating (To and Fro)" },
      { param: "Oscillation Stroke", value: "120mm" },
      { param: "Oscillation Technology", value: "Cam-based bottom oscillation motor" },
      { param: "Rotation", value: "360-degree with marking" },
      { param: "Clamping", value: "Double Parallel Vice" }
    ],
    ordering: [
      { part: "50-1611-800", capacity: "120mm, Manual", voltage: "380-440VAC, 50/60Hz" },
      { part: "50-1611-802", capacity: "160mm, Automatic", voltage: "380-440VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Cutting Wheels",
        subtitle: "For large cross-section cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For minimal burn cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      }
    ],
    literature: [
      { title: "Oscicut User Manual", image: "/cutting/oscillating-abrasive-cut-off-machine/oscicut1.png" },
    ]
  },
  // Large Component Cutting Machine
  {
    id: 6,
    categorySlug: "large-component-cutting-machines",
    name: "Metacut L 10 / L 15",
    slug: "metacut-l-10-15",
    description: "The Metacut L series (L 10 and L 15) is designed for heavy-duty cutting of large components, offering manual and automatic modes for cross-sectional or longitudinal cutting of hardened materials. With robust 10 HP or 15 HP motors and smart cutting features, it ensures precision and efficiency.",
    image: "/cutting/large-component-cutting-machines/metacut-l-10-15_1.png",
    alt: "Metacut L 10 / L 15 Large Component Cutting Machine",
    rating: 4.8,
    reviews: 42,
    tag: "Heavy-Duty Cutting",
    detail: "Smart and pulse cutting for large components",
    apiCall: "/api/large-component-cutting/metacut-l-10-15",
    features: [
      "Manual and automatic modes for flexible operation",
      "Y-axis longitudinal and Z-axis vertical (chop-type) cutting action",
      "T-slotted X-Y table (450mm x 450mm) for secure positioning",
      "Smart cutting reduces feed rate for hard materials, minimizing wheel damage",
      "Pulse cutting for handling hardness variations in Y direction",
      "PLC-based operation panel with user-settable programs",
      "Effortless manual cutting with large-diameter wheel and lever-link mechanism",
      "Screw and gearbox design for firm wheel locking, reducing vibrations",
      "Optional motorized vertical cutting/positioning for enhanced automation"
    ],
    additionalFeatures: [
      "High throat clearance (150mm Z-axis) for large components",
      "Variable cutting speed (optional) for optimized performance",
      "Integrated coolant system for effective heat management",
      "Ergonomic design for operator comfort during manual operation"
    ],
    images: [
      "/cutting/large-component-cutting-machines/metacut-l-10-15_1.png",
      "/cutting/large-component-cutting-machines/metacut-l-10-15_2.png",
      "/cutting/large-component-cutting-machines/metacut-l-10-15_3.png",
      "/cutting/large-component-cutting-machines/metacut-l-10-15_4.png"
    ],
    video: "/product/Metacut_L_10_15.mp4",
    specifications: [
      { param: "Operation", value: "Manual | Automatic" },
      { param: "Motor Capacity", value: "10 HP (L 10) | 15 HP (L 15)" },
      { param: "Cutting Capacity", value: "100mm (L 10) | 120mm (L 15)" },
      { param: "Cutting Action", value: "Y-axis Longitudinal | Z-axis Vertical (Chop-type)" },
      { param: "T-Slotted Table", value: "450mm x 450mm (X-Y)" },
      { param: "Throat Clearance", value: "150mm (Z-axis)" },
      { param: "Cutting Stroke", value: "300mm (Y-axis, 50mm cutting diameter)" },
      { param: "Cutting Feed", value: "1mm to 100mm per minute (settable)" },
      { param: "Cutting Speed", value: "2800 rpm (variable speed optional)" },
      { param: "X Movement", value: "Manual" },
      { param: "Control System", value: "PLC-based with user-settable programs" },
      { param: "Special Features", value: "Smart Cutting | Pulse Cutting" }
    ],
    ordering: [
      { part: "70-1811-100", model: "L 10, 100mm, 10 HP", voltage: "380-440VAC, 50/60Hz" },
      { part: "70-1811-102", model: "L 15, 120mm, 15 HP", voltage: "380-440VAC, 50/60Hz" },
      { part: "70-1811-104", model: "L 15, 120mm, 15 HP with Motorized Vertical Cutting", voltage: "380-440VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Cutting Wheels",
        subtitle: "For 100mm and 120mm cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-wheel.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For heavy-duty cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      },
    ],
    literature: [
      { title: "Metacut L Series User Manual", image: "/cutting/large-component-cutting-machines/metacut-l-10-15_1.png" },
    ]
  },
  // Diamond Cutting Machine
  {
    id: 7,
    categorySlug: "diamond-cutting-machines",
    name: "DCM",
    slug: "dcm",
    description: "The DCM is a precision diamond cutting machine engineered for sectioning hard samples, including those with nitriding layers and aluminum, while preserving material integrity for retained austenite estimation. Equipped with a 0.3mm thick diamond wheel and variable speed control from 200 to 500 rpm, it ensures minimal damage and high accuracy.",
    image: "/cutting/dcm/dcm1.png",
    alt: "DCM Diamond Cutting Machine",
    rating: 4.7,
    reviews: 36,
    tag: "Precision Diamond Cutting",
    detail: "Optimized for nitriding layer protection",
    apiCall: "/api/diamond-cutting/dcm",
    features: [
      "0.3mm thick diamond wheel for ultra-precise cutting",
      "Variable speed control from 200 to 500 rpm for delicate samples",
      "Designed for hard samples with nitriding layer protection",
      "Ideal for aluminum and retained austenite estimation",
      "Low-speed cutting minimizes thermal damage and deformation",
      "Robust sample holder system for secure positioning",
      "Coolant system to maintain sample integrity during cutting"
    ],
    additionalFeatures: [
      "Compact design for laboratory environments",
      "User-friendly interface with precise speed adjustment",
      "High durability diamond wheel for extended use",
      "Safety features including splash shield and emergency stop"
    ],
    images: [
      "/cutting/dcm/dcm1.png",
      "/cutting/dcm/dcm2.png",
      "/cutting/dcm/dcm3.png",
    ],
    video: "/product/DCM.mp4",
    specifications: [
      { param: "Operation", value: "Manual | Semi-Automatic" },
      { param: "Diamond Wheel Thickness", value: "0.3mm" },
      { param: "Cutting Speed", value: "200 to 500 rpm (variable)" },
      { param: "Sample Types", value: "Hard materials, nitrided layers, aluminum" },
      { param: "Application", value: "Retained austenite estimation, metallographic analysis" },
      { param: "Coolant System", value: "Recirculating with adjustable flow" }
    ],
    ordering: [
      { part: "80-1911-200", wheel: "0.3mm Diamond Wheel", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Diamond Cutting Wheels",
        subtitle: "0.3mm thickness for precision cutting",
        image: "/cutting/dcm/dcm_cutting_wheel.png"
      },
      {
        title: "Coolant Oil",
        subtitle: "For heavy-duty cutting",
        image: "/cutting/automatic-cutting-machines/consumables/cutting-fluid.png"
      },
    ],
    literature: [
      { title: "DCM User Manual", image: "/cutting/dcm/dcm1.png" },
    ]
  },
  // Moulding Machines
  {
    id: 8,
    categorySlug: "moulding-machines",
    name: "Automount Pneumatic Press",
    slug: "automount-pneumatic-press",
    description: "The Automount Pneumatic Press is a high-efficiency mounting press designed for metallographic sample preparation. Utilizing pneumatic pressure, it offers rapid and reliable sample encapsulation, ideal for high-volume laboratories.",
    image: "/moulding-grinding-polishing/moulding-machines/pneumatic-press.png",
    alt: "Automount Pneumatic Press",
    rating: 4.6,
    reviews: 30,
    tag: "Pneumatic Mounting",
    detail: "High-speed pneumatic operation",
    apiCall: "/api/moulding-machines/automount-pneumatic",
    features: [
      "Pneumatic pressure system for fast and consistent mounting",
      "Suitable for high-volume phenolic mounting applications",
      "User-friendly interface with automated cycle control",
      "Compact design for space-efficient laboratory use",
      "Water-cooled system for rapid cooling cycles",
      "Interchangeable mould sizes for versatile sample preparation"
    ],
    additionalFeatures: [
      "Low maintenance pneumatic system",
      "Eco-friendly water-saving cooling mechanism",
      "Safety solenoid valve for operator protection"
    ],
    images: [
      "/moulding-grinding-polishing/moulding-machines/pneumatic-press.png",
    ],
    video: "/product/Automount_Pneumatic.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Pressure System", value: "Pneumatic" },
      { param: "Mould Sizes", value: "25mm, 30mm, 40mm, 50mm" },
      { param: "Power Supply", value: "220V/110V, 50/60Hz" },
      { param: "Cooling System", value: "Water-cooled" },
      { param: "Cycle Time", value: "Approx. 5-8 minutes" }
    ],
    ordering: [
      { part: "90-2011-300", mould: "25mm to 50mm", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Bakelite / Phenolic Hot Moulding Powder",
        subtitle: "For pneumatic mounting",
        image: "/moulding-grinding-polishing/moulding-machines/mountingCompoundE.png"
      },
    ],
    literature: [
      { title: "Automount Pneumatic Press User Manual", image: "/moulding-grinding-polishing/moulding-machines/pneumatic-press.png" },
    ]
  },
  {
    id: 9,
    categorySlug: "moulding-machines",
    name: "Automount E Electro Press",
    slug: "automount-e-electro-press",
    description: "The Automount E Electro Press is a fully electromechanical mounting press designed for precise metallographic sample preparation. Its complete electromechanical operation ensures consistent pressure and temperature control, making it ideal for laboratories requiring high precision.",
    image: "/moulding-grinding-polishing/moulding-machines/electro-press.png",
    alt: "Automount E Electro Press",
    rating: 4.8,
    reviews: 38,
    tag: "Electromechanical Mounting",
    detail: "Fully electromechanical operation",
    apiCall: "/api/moulding-machines/automount-e-electro",
    features: [
      "Complete electromechanical operation for precise control",
      "Programmable temperature and pressure settings",
      "Interchangeable moulds for versatile sample sizes",
      "Water-cooled system for efficient cooling cycles",
      "Touchscreen interface for easy parameter setting",
      "High repeatability for consistent mounting results"
    ],
    additionalFeatures: [
      "Energy-efficient design with low power consumption",
      "Robust construction for long-term reliability",
      "Integrated safety features for operator protection"
    ],
    images: [
      "/moulding-grinding-polishing/moulding-machines/electro-press.png",
    ],
    video: "/product/Automount_E_Electro.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Pressure System", value: "Electromechanical" },
      { param: "Mould Sizes", value: "25mm, 30mm, 40mm, 50mm" },
      { param: "Power Supply", value: "220V/110V, 50/60Hz" },
      { param: "Heater Capacity", value: "1200W" },
      { param: "Cycle Time", value: "Approx. 6-9 minutes" }
    ],
    ordering: [
      { part: "90-2011-302", mould: "25mm to 50mm", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Bakelite / Phenolic Hot Moulding Powder",
        subtitle: "For electromechanical mounting",
        image: "/moulding-grinding-polishing/moulding-machines/mountingCompoundE.png"
      },
    ],
    literature: [
      { title: "Automount E Electro Press User Manual", image: "/moulding-grinding-polishing/moulding-machines/electro-press.png" },
    ]
  },
  {
    id: 10,
    categorySlug: "moulding-machines",
    name: "Automount EH Electro Hydraulic Press",
    slug: "automount-eh-electro-hydraulic",
    description: "The Automount EH Electro Hydraulic Press is a high-throughput mounting press with four-mould capability and dual mould cylinders, delivering up to 300 bar pressure. Designed for simultaneous mounting of four samples, it is optimized for integration with auto grinder polishers in metallographic laboratories.",
    image: "/moulding-grinding-polishing/moulding-machines/electro-hydraulic-press.png",
    alt: "Automount EH Electro Hydraulic Press",
    rating: 4.9,
    reviews: 45,
    tag: "High-Throughput Mounting",
    detail: "Four-mould capability with 300 bar pressure",
    apiCall: "/api/moulding-machines/automount-eh-electro-hydraulic",
    features: [
      "Four-mould capability for simultaneous mounting of four samples",
      "Dual mould cylinders for enhanced throughput",
      "Electro-hydraulic system delivering up to 300 bar pressure",
      "Optimized for integration with auto grinder polishers",
      "Programmable touchscreen interface for precise control",
      "Water-cooled system for rapid and efficient cooling",
      "Interchangeable moulds for versatile sample sizes"
    ],
    additionalFeatures: [
      "High-pressure system for robust mounting of hard materials",
      "Automated cycle control for consistent results",
      "Safety features including overload protection and solenoid valve",
      "Eco-function for reduced water consumption"
    ],
    images: [
      "/moulding-grinding-polishing/moulding-machines/electro-hydraulic-press.png",
    ],
    video: "/product/Automount_EH_Electro_Hydraulic.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Pressure System", value: "Electro-Hydraulic" },
      { param: "Pressure", value: "Up to 300 bar" },
      { param: "Mould Capacity", value: "Four moulds (25mm, 30mm, 40mm, 50mm)" },
      { param: "Sample Capacity", value: "Four samples simultaneously" },
      { param: "Power Supply", value: "220V/110V, 50/60Hz" },
      { param: "Heater Capacity", value: "2400W (600W per mould)" },
      { param: "Cycle Time", value: "Approx. 5-7 minutes" }
    ],
    ordering: [
      { part: "90-2011-304", mould: "25mm to 50mm, Four-Mould", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Bakelite / Phenolic Hot Moulding Powder",
        subtitle: "For pneumatic mounting",
        image: "/moulding-grinding-polishing/moulding-machines/mountingCompoundE.png"
      },
    ],
    literature: [
      { title: "Automount Pneumatic Press User Manual", image: "/moulding-grinding-polishing/moulding-machines/electro-hydraulic-press.png" },
    ]
  },
  // Grinding, Polishing Machine
  {
    id: 11,
    categorySlug: "grinding-polishing-machines",
    name: "Metapol DC II",
    slug: "metapol-dc-ii",
    description: "The Metapol DC II is a manual grinding and polishing machine designed for metallographic sample preparation. With disc diameters of 200mm or 250mm and optional magnetic fixation, it offers flexibility and precision for laboratory applications.",
    image: "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_1.png",
    alt: "Metapol DC II Manual Grinding Polishing Machine",
    rating: 4.6,
    reviews: 34,
    tag: "Manual Grinding Polishing",
    detail: "Optional magnetic fixation for quick disc changes",
    apiCall: "/api/grinding-polishing/metapol-dc-ii",
    features: [
      "Manual operation for precise grinding and polishing control",
      "Disc diameters of 200mm or 250mm for versatile sample sizes",
      "Optional magnetic fixation for quick and secure disc changes",
      "Robust construction for vibration-free performance",
      "Detachable water sprayer for easy cleaning and wet grinding",
      "Ergonomic design for operator comfort"
    ],
    additionalFeatures: [
      "Compatible with a wide range of grinding and polishing consumables",
      "Low maintenance with durable components",
      "Anti-corrosive FRP top for enhanced durability"
    ],
    images: [
      "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_1.png",
      "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_2.png",
      "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_3.png",
    ],
    video: "/product/Metapol_DC_II.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Disc Diameter", value: "200mm or 250mm" },
      { param: "Fixation System", value: "Standard clamp | Optional Magnetic Fixation" },
      { param: "Motor Power", value: "0.5 HP (optional 1 HP)" },
      { param: "Speed", value: "Up to 1400 rpm (variable)" },
      { param: "Cooling System", value: "Detachable water sprayer" }
    ],
    ordering: [
      { part: "100-2111-400", disc: "200mm", voltage: "85-264VAC, 50/60Hz" },
      { part: "100-2111-402", disc: "250mm", voltage: "85-264VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Grinding Discs",
        subtitle: "For 200mm and 250mm diameters",
        image: "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_2.png"
      },
    ],
    literature: [
      { title: "Metapol DC II User Manual", image: "/moulding-grinding-polishing/grinding-polishing-machine/metapol_dc_ii_1.png" },
    ]
  },
  // Belt Grinder
  {
    id: 12,
    categorySlug: "belt-grinders",
    name: "MBG I / MBG II",
    slug: "mbg-i-ii",
    description: "The MBG I and MBG II are compact belt grinders designed for initial rough grinding in metallographic preparation. Featuring a 4x9 inch belt size, 1/2 HP motor, and dry operation, they offer easy belt replacement and an optional suction arrangement for dust control.",
    image: "/moulding-grinding-polishing/belt-grienders/mbg-1.png",
    alt: "MBG I / MBG II Belt Grinder",
    rating: 4.5,
    reviews: 29,
    tag: "Compact Belt Grinding",
    detail: "Easy belt replacement with optional dust suction",
    apiCall: "/api/belt-grinders/mbg-i-ii",
    features: [
      "4x9 inch belt size for efficient rough grinding",
      "1/2 HP AC motor for reliable performance",
      "Dry operation suitable for metallographic applications",
      "Easy belt replacement for quick maintenance",
      "Optional suction arrangement for dust control",
      "Compact design for small laboratory spaces"
    ],
    additionalFeatures: [
      "Dynamically balanced rollers for smooth operation",
      "Robust construction for vibration-free grinding",
      "User-friendly design for quick setup and operation"
    ],
    images: [
      "/moulding-grinding-polishing/belt-grienders/mbg-1.png",
      "/moulding-grinding-polishing/belt-grienders/mbg-2.png",
    ],
    video: "/product/MBG_I_II.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Belt Size", value: "4 x 9 inches (100 x 228.6 mm)" },
      { param: "Motor Power", value: "1/2 HP AC" },
      { param: "Operation Mode", value: "Dry" },
      { param: "Dust Control", value: "Optional suction arrangement" },
      { param: "Belt Replacement", value: "Tool-free, quick replacement" }
    ],
    ordering: [
      { part: "110-2211-500", model: "MBG I, Standard", voltage: "220V, 50/60Hz" },
      { part: "110-2211-502", model: "MBG II, With Suction", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Grinding Belts",
        subtitle: "4x9 inch for rough grinding",
        image: "/moulding-grinding-polishing/belt-grienders/abrasive-grinding-belts.png"
      },
    ],
    literature: [
      { title: "MBG I / MBG II User Manual", image: "/moulding-grinding-polishing/belt-grienders/mbg-1.png" },
    ]
  },
  // Heavy Duty Belt Grinder
  {
    id: 13,
    categorySlug: "heavy-duty-belt-grinder",
    name: "Heavy Duty Belt Grinder",
    slug: "heavy-duty-belt-grinder",
    description: "The Heavy Duty Belt Grinder is a robust machine designed for industrial metallographic and material preparation. With a 150x2000mm belt, 3 HP motor, and twin RPM settings (1800/2400), it features V-belt drive, suction facility, guards, starter, and a belt tracking and tensioning system for optimal performance.",
    image: "/moulding-grinding-polishing/heavy-duty-belt-grinder/heavy-duty-belt-grinder.png",
    alt: "Heavy Duty Belt Grinder",
    rating: 4.8,
    reviews: 41,
    tag: "Industrial Belt Grinding",
    detail: "Twin RPM with suction facility",
    apiCall: "/api/heavy-duty-belt-grinders/heavy-duty-belt-grinder",
    features: [
      "150x2000mm belt size for large-scale grinding",
      "3 HP motor with twin RPM settings (1800/2400) for versatile applications",
      "V-belt driven for efficient power transmission",
      "Integrated suction facility for dust management",
      "Belt tracking and tensioning system for consistent performance",
      "Safety guards and starter for secure operation",
      "Heavy-duty construction for industrial environments"
    ],
    additionalFeatures: [
      "Dynamically balanced rollers for vibration-free operation",
      "Quick belt replacement with adjustable tensioning",
      "Designed for high material removal rates",
      "Compatible with various abrasive belts for different materials"
    ],
    images: [
      "/moulding-grinding-polishing/heavy-duty-belt-grinder/heavy-duty-belt-grinder.png",
      "/moulding-grinding-polishing/heavy-duty-belt-grinder/heavy-duty.png",
      "/moulding-grinding-polishing/heavy-duty-belt-grinder/light-duty.png",
    ],
    video: "/product/Heavy_Duty_Belt_Grinder.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Belt Size", value: "150 x 2000 mm" },
      { param: "Motor Power", value: "3 HP" },
      { param: "Speed", value: "1800 / 2400 rpm (twin settings)" },
      { param: "Drive System", value: "V-belt driven" },
      { param: "Dust Control", value: "Integrated suction facility" },
      { param: "Safety Features", value: "Guards, starter, belt tracking and tensioning system" }
    ],
    ordering: [
      { part: "120-2311-600", model: "Standard, 1800/2400 rpm", voltage: "380-440VAC, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Belts",
        subtitle: "150x2000mm for heavy-duty grinding",
        image: "/product/abrasiveBeltsHeavyDuty.png"
      },
      {
        title: "Suction Filters",
        subtitle: "For dust suction system",
        image: "/product/suctionFiltersHeavyDuty.png"
      },
      {
        title: "Belt Tensioning Kit",
        subtitle: "For belt tracking and tension adjustment",
        image: "/product/beltTensioningKitHeavyDuty.png"
      }
    ],
    literature: [
      { title: "Heavy Duty Belt Grinder User Manual", image: "/moulding-grinding-polishing/heavy-duty-belt-grinder/heavy-duty-belt-grinder.png" },
    ]
  },
  // Automatic Spectro Sample Grinding Machine
  {
    id: 14,
    categorySlug: "automatic-spectro-sample-grinding-machines",
    name: "Spectro Pol Auto",
    slug: "spectro-pol-auto",
    description: "The Spectro Pol Auto is an advanced automatic spectro sample grinding machine designed for high-precision preparation of three samples simultaneously. Featuring a 200x2000mm belt, pneumatic grinding force, electromagnetic sample attachment, and an HMI/PLC operation panel, it ensures consistent and efficient sample preparation for spectrographic analysis.",
    image: "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/spectro-pol-auto.png",
    alt: "Spectro Pol Auto Spectro Sample Grinding Machine",
    rating: 4.7,
    reviews: 37,
    tag: "Spectrographic Grinding",
    detail: "Three-sample simultaneous grinding with HMI/PLC control",
    apiCall: "/api/automatic-spectro-sample-grinding/spectro-pol-auto",
    features: [
      "Processes three samples simultaneously for high throughput",
      "200x2000mm belt size for efficient grinding",
      "Pneumatic grinding force for consistent pressure application",
      "Electromagnetic sample attaching/releasing for quick setup",
      "HMI and PLC-based operation panel for programmable control",
      "Single-phase electrical supply for easy integration",
      "Optimized for spectrographic sample preparation"
    ],
    additionalFeatures: [
      "Automatic belt tracking and tensioning system",
      "Integrated dust suction for clean operation",
      "User-friendly interface with pre-set grinding programs",
      "Safety features including emergency stop and guards"
    ],
    images: [
      "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/spectro-pol-auto.png",
      "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/spectro-pol-auto-1.png",
      "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/spectro-pol-auto-2.png",
    ],
    video: "/product/Spectro_Pol_Auto.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Sample Capacity", value: "Three samples simultaneously" },
      { param: "Belt Size", value: "200 x 2000 mm" },
      { param: "Grinding Force", value: "Pneumatic" },
      { param: "Sample Attachment", value: "Electromagnetic" },
      { param: "Control System", value: "HMI and PLC" },
      { param: "Electrical Supply", value: "Single phase, 220V, 50/60Hz" },
      { param: "Motor Power", value: "3 HP" }
    ],
    ordering: [
      { part: "130-2411-700", model: "Spectro Pol Auto", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Abrasive Belts",
        subtitle: "200x2000mm for spectrographic grinding",
        image: "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/abrasive-grinding-belts.png"
      },
    ],
    literature: [
      { title: "Spectro Pol Auto User Manual", image: "/moulding-grinding-polishing/automatic-spectro-sample-grinding-machines/spectro-pol-auto.png" },
    ]
  },
  // Semi Automatic Grinding Polishing Machine
  {
    id: 15,
    categorySlug: "semi-automatic-grinding-polishing-machines",
    name: "Autopol",
    slug: "autopol",
    description: "The Autopol is a semi-automatic grinding and polishing machine designed for metallographic sample preparation. With independent force application and the ability to process six specimens simultaneously, it offers flexibility and precision through pneumatic or electrical operation and a PLC-based programmable operation panel.",
    image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol1.png",
    alt: "Autopol Semi Automatic Grinding Polishing Machine",
    rating: 4.8,
    reviews: 40,
    tag: "Semi-Automatic Grinding Polishing",
    detail: "Independent force with PLC control",
    apiCall: "/api/semi-automatic-grinding-polishing/autopol",
    features: [
      "Independent force application for precise sample preparation",
      "Processes six specimens simultaneously for high efficiency",
      "Pneumatic or electrical operation for flexible use",
      "PLC-based programmable operation panel for customizable settings",
      "Stepless speed adjustment for grinding and polishing discs",
      "Automatic water and slurry dispensing for consistent results",
      "Magnetic disc system for quick disc replacement"
    ],
    additionalFeatures: [
      "Robust construction for vibration-free operation",
      "User-friendly interface with pre-programmed modes",
      "Compatible with various sample holders for different sizes",
      "Safety features including emergency stop and splash guard"
    ],
    images: [
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol1.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol3.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol4.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol5.png",
    ],
    video: "/product/Autopol.mp4",
    specifications: [
      { param: "Operation", value: "Semi-Automatic" },
      { param: "Sample Capacity", value: "Six specimens simultaneously" },
      { param: "Force Application", value: "Independent (Pneumatic or Electrical)" },
      { param: "Disc Diameter", value: "250mm (optional 200mm, 300mm)" },
      { param: "Control System", value: "PLC-based programmable panel" },
      { param: "Speed", value: "50-1000 rpm (stepless)" },
      { param: "Motor Power", value: "0.75 HP" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" }
    ],
    ordering: [
      { part: "140-2511-800", disc: "250mm", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/polishing-cloths.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/polishing-cloths-2.png"
      },
    ],
    literature: [
      { title: "Autopol User Manual", image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol1.png" },
    ]
  },
  {
    id: 16,
    categorySlug: "semi-automatic-grinding-polishing-machines",
    name: "Autopol Dual",
    slug: "autopol-dual",
    description: "The Autopol Dual is a semi-automatic dual-disc grinding and polishing machine for metallographic sample preparation. It supports independent force application for six specimens, with pneumatic or electrical operation and a PLC-based programmable operation panel, ensuring high precision and throughput.",
    image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol2.png",
    alt: "Autopol Dual Semi Automatic Grinding Polishing Machine",
    rating: 4.9,
    reviews: 42,
    tag: "Dual-Disc Grinding Polishing",
    detail: "Dual-disc with independent force for six specimens",
    apiCall: "/api/semi-automatic-grinding-polishing/autopol-dual",
    features: [
      "Dual-disc design for simultaneous grinding and polishing",
      "Independent force application for six specimens",
      "Pneumatic or electrical operation for versatile use",
      "PLC-based programmable operation panel for customizable cycles",
      "Stepless speed adjustment for enhanced control",
      "Automatic fluid dispensing for water and slurry",
      "Magnetic disc system for quick and easy disc changes"
    ],
    additionalFeatures: [
      "Heavy-duty construction for stability and durability",
      "Intuitive interface with pre-set grinding/polishing programs",
      "High compatibility with various sample holders",
      "Safety features including splash guard and emergency stop"
    ],
    images: [
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol2.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol3.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol4.png",
      "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol5.png",
    ],
    video: "/product/Autopol_Dual.mp4",
    specifications: [
      { param: "Operation", value: "Semi-Automatic" },
      { param: "Sample Capacity", value: "Six specimens simultaneously" },
      { param: "Force Application", value: "Independent (Pneumatic or Electrical)" },
      { param: "Disc Diameter", value: "250mm per disc (optional 200mm, 300mm)" },
      { param: "Control System", value: "PLC-based programmable panel" },
      { param: "Speed", value: "50-1000 rpm (stepless)" },
      { param: "Motor Power", value: "1 HP per disc" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" }
    ],
    ordering: [
      { part: "140-2511-802", disc: "250mm Dual", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/polishing-cloths.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/polishing-cloths-2.png"
      },
    ],
    literature: [
      { title: "Autopol Dual User Manual", image: "/moulding-grinding-polishing/semi-automatic-grinding-polishing-machines/autopol2.png" },
    ]
  },
  // Multi-specimen Grinding / Polishing Machine
  {
    id: 25,
    categorySlug: "multi-specimen-grinding-polishing-machines",
    name: "Autopol-II",
    slug: "autopol-ii",
    description: "The Autopol-II is a multi-specimen grinding and polishing machine with an auto grinding arm mounted on a dual-pillar structure for superior flatness. Capable of processing six specimens simultaneously with combined force, it supports disc sizes of 200mm, 250mm, or 300mm and offers excellent edge retention, including for unmounted specimens (feasibility study required).",
    image: "/images/multi-specimen-grinding-polishing-machines/autopol-ii.png",
    alt: "Autopol-II Multi-specimen Grinding Polishing Machine",
    rating: 4.9,
    reviews: 45,
    tag: "Multi-specimen Grinding Polishing",
    detail: "Dual-pillar structure with combined force for six specimens",
    apiCall: "/api/multi-specimen-grinding-polishing/autopol-ii",
    features: [
      "Auto grinding arm on dual-pillar structure for enhanced flatness",
      "Disc options of 200mm, 250mm, or 300mm for versatility",
      "Processes six specimens simultaneously with combined force",
      "Heavy-duty motors (1 HP main, 184 watts power head) for robust performance",
      "Excellent edge retention for high-quality sample preparation",
      "Supports unmounted specimen grinding (feasibility study required)",
      "Automatic fluid dispensing for consistent grinding and polishing"
    ],
    additionalFeatures: [
      "High-stability double-pillar design for vibration-free operation",
      "Programmable settings for repeatable results",
      "Magnetic disc system for quick disc replacement",
      "Safety features including splash guard and emergency stop"
    ],
    images: [
      "/product/AutopolII1.jpg",
      "/product/AutopolII2.jpg",
      "/product/AutopolII3.jpg",
      "/product/AutopolII4.jpg"
    ],
    video: "/product/Autopol_II.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Sample Capacity", value: "Six specimens simultaneously" },
      { param: "Force Application", value: "Combined force" },
      { param: "Disc Diameter", value: "200mm, 250mm, or 300mm" },
      { param: "Motor Power", value: "1 HP (main), 184W (power head)" },
      { param: "Control System", value: "PLC-based programmable" },
      { param: "Speed", value: "50-1000 rpm (stepless)" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" },
      { param: "Special Features", value: "Edge retention, unmounted specimen grinding (feasibility study required)" }
    ],
    ordering: [
      { part: "150-2611-900", disc: "250mm", voltage: "220V, 50/60Hz" },
      { part: "150-2611-902", disc: "300mm", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Grinding Discs",
        subtitle: "For 200mm, 250mm, 300mm diameters",
        image: "/product/grindingDiscsAutopolII.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/product/polishingClothsAutopolII.png"
      },
      {
        title: "Diamond Suspensions",
        subtitle: "For precision polishing",
        image: "/product/diamondSuspensionsAutopolII.png"
      }
    ],
    literature: [
      { title: "Autopol-II User Manual", image: "/product/autopol-ii-manual.png" },
      { title: "Autopol-II Brochure", image: "/product/autopol-ii-brochure.png" },
      { title: "Metallographic Grinding Polishing Guide", image: "/product/grinding-polishing-guide.png" }
    ]
  },
  // Microscope and Image Analyzer
  {
    id: 41,
    categorySlug: "inverted-microscope",
    name: "Metagraph - I",
    slug: "metagraph-i",
    description: "The Metagraph - I is a professional-grade inverted metallurgical microscope designed for routine microstructural analysis of metals, alloys, and solid materials. Offering up to 1000X magnification with infinity-corrected plan achromatic objectives and a trinocular head, it is ideal for industrial quality control, materials science, and educational applications. Optional 20X eyepieces enable 2000X magnification for specialized tasks.",
    image: "/images/inverted-microscope/metagraph-i.png",
    alt: "Metagraph - I Inverted Metallurgical Microscope",
    rating: 4.7,
    reviews: 38,
    tag: "Metallurgical Microscopy",
    detail: "Routine microstructural analysis up to 1000X",
    apiCall: "/api/inverted-microscope/metagraph-i",
    features: [
      "Magnification up to 1000X with 10X eyepieces (2000X optional with 20X eyepieces)",
      "Infinity-corrected plan achromatic LWD objectives: 5X, 10X, 20X, 50X, 100X",
      "Trinocular head with 30° inclination for camera integration",
      "Reflected illumination with 6V 20W halogen lamp, adjustable brightness",
      "Coaxial coarse and fine focusing with tension adjustment",
      "Mechanical stage with 180mm x 155mm travel for large samples",
      "Compliant with ASTM E45 and ISO 4967 for metallographic analysis"
    ],
    additionalFeatures: [
      "Widefield 10X eyepieces with 20mm field of view",
      "Anti-fungal coated objectives for durability",
      "Optional C-mount camera for photomicrography",
      "Ergonomic drop-down stage controls for user comfort",
      "Rugged construction for industrial environments"
    ],
    images: [
      "/product/MetagraphI1.jpg",
      "/product/MetagraphI2.jpg",
      "/product/MetagraphI3.jpg",
      "/product/MetagraphI4.jpg"
    ],
    video: "/product/Metagraph_I.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Magnification", value: "50X-1000X (2000X with optional 20X eyepieces)" },
      { param: "Objectives", value: "LWD Plan Achromatic 5X/0.12, 10X/0.25, 20X/0.40, 50X/0.60, 100X/1.25" },
      { param: "Eyepieces", value: "WF 10X/20mm (WF 20X/12.5mm optional)" },
      { param: "Illumination", value: "Reflected, 6V 20W halogen, adjustable" },
      { param: "Stage", value: "Mechanical, 180mm x 155mm, XY travel" },
      { param: "Focus", value: "Coaxial coarse/fine, 0.002mm precision" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "600mm x 500mm x 550mm (W x D x H)" },
      { param: "Weight", value: "15 kg" }
    ],
    ordering: [
      { part: "240-3511-100", config: "Metagraph - I with 10X Eyepieces", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "LWD Plan Achromatic Objectives",
        subtitle: "5X, 10X, 20X, 50X, 100X replacements",
        image: "/product/lwdObjectivesMetagraph.png"
      },
      {
        title: "WF 20X Eyepieces",
        subtitle: "For optional 2000X magnification",
        image: "/product/wf20xEyepieces.png"
      },
      {
        title: "Halogen Lamp",
        subtitle: "6V 20W replacement",
        image: "/product/halogenLamp6V20W.png"
      }
    ],
    literature: [
      { title: "Metagraph - I User Manual", image: "/product/metagraph-i-manual.png" },
      { title: "Metagraph - I Brochure", image: "/product/metagraph-i-brochure.png" },
      { title: "Metallographic Microscopy Guide", image: "/product/metallographic-microscopy-guide.png" }
    ]
  },
  {
    id: 42,
    categorySlug: "inverted-microscope",
    name: "Metagraph - SPL",
    slug: "metagraph-spl",
    description: "The Metagraph - SPL is an advanced inverted metallurgical microscope with enhanced imaging capabilities, offering up to 1000X magnification for detailed microstructural analysis. Equipped with polarized light, DIC options, and a digital imaging port, it supports grain size determination, defect inspection, and material composition analysis. Optional 20X eyepieces enable 2000X magnification for specialized applications in materials science and industrial quality control.",
    image: "/images/inverted-microscope/metagraph-spl.png",
    alt: "Metagraph - SPL Advanced Inverted Metallurgical Microscope",
    rating: 4.9,
    reviews: 45,
    tag: "Advanced Metallurgical Microscopy",
    detail: "Enhanced imaging with polarized light and DIC",
    apiCall: "/api/inverted-microscope/metagraph-spl",
    features: [
      "Magnification up to 1000X with 10X eyepieces (2000X optional with 20X eyepieces)",
      "Infinity-corrected plan achromatic LWD objectives: 5X, 10X, 20X, 50X, 100X",
      "Trinocular head with 30° inclination and C-mount for digital imaging",
      "Reflected illumination with 12V 50W halogen lamp and polarized light",
      "Differential Interference Contrast (DIC) for enhanced contrast",
      "Large mechanical stage (200mm x 150mm) with coaxial XY controls",
      "Compliant with ASTM E45, ISO 4967, and DIN 50602 standards"
    ],
    additionalFeatures: [
      "Widefield 10X eyepieces with 22mm field of view",
      "Polarizer and analyzer for birefringence analysis",
      "Metallurgical image analysis software for grain size and phase measurement",
      "Anti-fungal and anti-reflection coated objectives",
      "Optional LED illumination upgrade for energy efficiency"
    ],
    images: [
      "/product/MetagraphSPL1.jpg",
      "/product/MetagraphSPL2.jpg",
      "/product/MetagraphSPL3.jpg",
      "/product/MetagraphSPL4.jpg"
    ],
    video: "/product/Metagraph_SPL.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Magnification", value: "50X-1000X (2000X with optional 20X eyepieces)" },
      { param: "Objectives", value: "LWD Plan Achromatic 5X/0.12, 10X/0.25, 20X/0.40, 50X/0.60, 100X/1.25" },
      { param: "Eyepieces", value: "WF 10X/22mm (WF 20X/12.5mm optional)" },
      { param: "Illumination", value: "Reflected, 12V 50W halogen, polarized, DIC" },
      { param: "Stage", value: "Mechanical, 200mm x 150mm, XY travel" },
      { param: "Focus", value: "Coaxial coarse/fine, 0.001mm precision" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "650mm x 550mm x 600mm (W x D x H)" },
      { param: "Weight", value: "18 kg" }
    ],
    ordering: [
      { part: "240-3511-200", config: "Metagraph - SPL with Polarized Light and DIC", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "LWD Plan Achromatic Objectives",
        subtitle: "5X, 10X, 20X, 50X, 100X replacements",
        image: "/product/lwdObjectivesMetagraph.png"
      },
      {
        title: "WF 20X Eyepieces",
        subtitle: "For optional 2000X magnification",
        image: "/product/wf20xEyepieces.png"
      },
      {
        title: "Halogen Lamp",
        subtitle: "12V 50W replacement",
        image: "/product/halogenLamp12V50W.png"
      },
      {
        title: "DIC Slider",
        subtitle: "For enhanced contrast imaging",
        image: "/product/dicSliderMetagraph.png"
      }
    ],
    literature: [
      { title: "Metagraph - SPL User Manual", image: "/product/metagraph-spl-manual.png" },
      { title: "Metagraph - SPL Brochure", image: "/product/metagraph-spl-brochure.png" },
      { title: "Metallographic Microscopy Guide", image: "/product/metallographic-microscopy-guide.png" }
    ]
  },
  {
    id: 43,
    categorySlug: "upright-microscope",
    name: "Metagraph (UP)",
    slug: "metagraph-up",
    description: "The Metagraph (UP) is a high-performance upright metallurgical microscope designed for detailed microstructural analysis of metals, alloys, and opaque materials. Offering up to 1000X magnification with infinity-corrected plan achromatic objectives, it features both reflected and transmitted illumination for versatile sample analysis. Equipped with a trinocular head and polarization capabilities, it is ideal for materials science, quality control, and industrial research applications. Optional 20X eyepieces enable 2000X magnification for specialized tasks.",
    image: "/images/upright-microscope/metagraph-up.png",
    alt: "Metagraph (UP) Upright Metallurgical Microscope",
    rating: 4.8,
    reviews: 40,
    tag: "Metallurgical Microscopy",
    detail: "Versatile analysis with reflected and transmitted light",
    apiCall: "/api/upright-microscope/metagraph-up",
    features: [
      "Magnification up to 1000X with 10X eyepieces (2000X optional with 20X eyepieces)",
      "Infinity-corrected plan achromatic objectives: 5X, 10X, 20X, 50X, 100X",
      "Trinocular head with 30° inclination for camera integration",
      "Reflected and transmitted illumination with 6V 30W halogen lamp, adjustable brightness",
      "Polarizer and analyzer for birefringence and grain boundary analysis",
      "Coaxial coarse and fine focusing with 0.002mm precision",
      "Compliant with ASTM E45, ISO 4967, and DIN 50602 for metallographic analysis"
    ],
    additionalFeatures: [
      "Widefield 10X eyepieces with 22mm field of view",
      "Mechanical stage with 150mm x 140mm travel for precise sample positioning",
      "Anti-fungal and anti-reflection coated objectives for durability",
      "Optional DIC (Differential Interference Contrast) for enhanced contrast",
      "Software for image capture, grain size, and phase analysis"
    ],
    images: [
      "/product/MetagraphUP1.jpg",
      "/product/MetagraphUP2.jpg",
      "/product/MetagraphUP3.jpg",
      "/product/MetagraphUP4.jpg"
    ],
    video: "/product/Metagraph_UP.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Magnification", value: "50X-1000X (2000X with optional 20X eyepieces)" },
      { param: "Objectives", value: "Plan Achromatic 5X/0.12, 10X/0.25, 20X/0.40, 50X/0.60, 100X/1.25" },
      { param: "Eyepieces", value: "WF 10X/22mm (WF 20X/12.5mm optional)" },
      { param: "Illumination", value: "Reflected/Transmitted, 6V 30W halogen, adjustable" },
      { param: "Stage", value: "Mechanical, 150mm x 140mm, XY travel" },
      { param: "Focus", value: "Coaxial coarse/fine, 0.002mm precision" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "550mm x 450mm x 500mm (W x D x H)" },
      { param: "Weight", value: "12 kg" }
    ],
    ordering: [
      { part: "250-3611-100", config: "Metagraph (UP) with Polarization", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Plan Achromatic Objectives",
        subtitle: "5X, 10X, 20X, 50X, 100X replacements",
        image: "/product/planObjectivesMetagraph.png"
      },
      {
        title: "WF 20X Eyepieces",
        subtitle: "For optional 2000X magnification",
        image: "/product/wf20xEyepieces.png"
      },
      {
        title: "Halogen Lamp",
        subtitle: "6V 30W replacement",
        image: "/product/halogenLamp6V30W.png"
      },
      {
        title: "Polarization Filter Set",
        subtitle: "Replacement polarizer and analyzer",
        image: "/product/polarizationFilterSet.png"
      }
    ],
    literature: [
      { title: "Metagraph (UP) User Manual", image: "/product/metagraph-up-manual.png" },
      { title: "Metagraph (UP) Brochure", image: "/product/metagraph-up-brochure.png" },
      { title: "Metallographic Microscopy Guide", image: "/product/metallographic-microscopy-guide.png" }
    ]
  },
  {
    "id": 71,
    "categorySlug": "stereo-microscope",
    "name": "Stereo Microscope",
    "slug": "stereo-microscope",
    "description": "The Stereo Microscope is a versatile, zoom-style optical microscope designed for low-magnification, three-dimensional observation of solid specimens. With a 0.7x–4.5x zoom range and ergonomic features, it supports metallographic inspection, biological dissection, and industrial quality control, delivering high-resolution images with excellent depth of field.",
    "image": "/images/stereo-microscope/stereo-microscope.png",
    "alt": "Stereo Microscope for 3D Observation",
    "rating": 4.8,
    "reviews": 55,
    "tag": "Microscopy",
    "detail": "Zoom stereo microscope for metallography and inspection",
    "apiCall": "/api/stereo-microscope/stereo-microscope",
    "features": [
      "0.7x–4.5x zoom objective with 7x–45x magnification (10x eyepieces), expandable to 180x with auxiliary lenses",
      "Greenough optical system for true stereoscopic imaging with high depth of field",
      "LED illumination (incident and transmitted) with adjustable intensity and contrast",
      "Ergonomic 45-degree binocular head, adjustable for multiple users",
      "Trinocular port for digital camera integration, supporting live video and image capture",
      "Large working distance (100 mm standard, up to 165 mm with 0.5x Barlow lens)",
      "Compliant with ASTM E112 and ISO 643 for metallographic analysis"
    ],
    "additionalFeatures": [
      "Modular design with interchangeable eyepieces (10x, 15x, 20x) and auxiliary lenses (0.5x, 2x)",
      "Antistatic coatings and high color fidelity for accurate sample observation",
      "Flexible stand options (boom, pole, or universal LED base) for diverse applications",
      "Integrated Enersight OSD software for on-screen measurements and image sharing",
      "Rugged, all-metal body for durability in industrial environments"
    ],
    "images": [
      "/product/StereoMicroscope1.jpg",
      "/product/StereoMicroscope2.jpg",
      "/product/StereoMicroscope3.jpg",
      "/product/StereoMicroscope4.jpg"
    ],
    "video": "/product/Stereo_Microscope.mp4",
    "specifications": [
      { "param": "Magnification Range", "value": "7x–45x (standard), 3.5x–180x (with auxiliaries)" },
      { "param": "Zoom Ratio", "value": "6.4:1" },
      { "param": "Working Distance", "value": "100 mm (standard), 165 mm (with 0.5x Barlow)" },
      { "param": "Field of View", "value": "33 mm–5.1 mm" },
      { "param": "Illumination", "value": "LED (Incident/Transmitted), Adjustable" },
      { "param": "Camera Compatibility", "value": "Trinocular port, C-mount adapter" },
      { "param": "Standards", "value": "ASTM E112, ISO 643" },
      { "param": "Weight", "value": "5.5 kg" },
      { "param": "Dimensions", "value": "300mm x 240mm x 400mm (L x W x H)" }
    ],
    "ordering": [
      { "part": "290-3811-500", "config": "Stereo Microscope, Trinocular Zoom, LED Base", "voltage": "110-240V AC" }
    ],
    "consumables": [
      {
        "title": "Auxiliary Barlow Lens",
        "subtitle": "0.5x and 2x for extended magnification",
        "image": "/product/barlowLens.png"
      },
      {
        "title": "LED Replacement Bulb",
        "subtitle": "For incident/transmitted illumination",
        "image": "/product/ledBulb.png"
      },
      {
        "title": "Eyepieces",
        "subtitle": "10x, 15x, 20x, wide-field",
        "image": "/product/eyepieces.png"
      }
    ],
    "literature": [
      { "title": "Stereo Microscope User Manual", "image": "/product/stereo-microscope-manual.png" },
      { "title": "Microscopy Solutions Brochure", "image": "/product/microscopy-brochure.png" },
      { "title": "Metallographic Analysis Guide", "image": "/product/metallographic-analysis-guide.png" }
    ]
  },
  {
    id: 44,
    categorySlug: "particle-size-analysis-systems",
    name: "CLEAN-EST (Stereo)",
    slug: "clean-est-stereo",
    description: "The CLEAN-EST (Stereo) is an automated particle size analysis system designed for cleanliness testing of automotive and industrial components. Fully compliant with ISO 16232 and VDA 19.1, it features complete filter paper scanning to classify non-metallic, metallic, and fiber particles larger than 10 microns. With a motorized stage and particle height measurement, it offers easy operation and rapid report generation tailored to user requirements, ideal for quality control in manufacturing environments.",
    image: "/images/particle-size-analysis/clean-est-stereo.png",
    alt: "CLEAN-EST (Stereo) Particle Size Analysis System",
    rating: 4.8,
    reviews: 42,
    tag: "Cleanliness Analysis",
    detail: "Automated particle analysis for particles >10 microns",
    apiCall: "/api/particle-size-analysis/clean-est-stereo",
    features: [
      "Fully compliant with ISO 16232:2018 and VDA 19.1-2015 for cleanliness testing",
      "Automatic filter paper scanning with high-resolution stereo microscopy",
      "Classifies non-metallic, metallic, and fiber particles per VDA 19.1 definitions",
      "Minimum particle size detection of 10 microns with 2 microns/pixel resolution",
      "Motorized stage for precise filter positioning and full membrane coverage",
      "Particle height measurement using Z-axis focus stacking",
      "User-friendly interface with one-click operation and customizable report generation"
    ],
    additionalFeatures: [
      "Polarized light for distinguishing metallic and non-metallic particles in a single scan",
      "High-brightness LED illumination with 20,000-hour lifespan",
      "Intelligent software with machine learning for particle classification",
      "Supports multiple standards: ISO 4406, ISO 4407, and user-defined protocols",
      "Automatic focus compensation for clear imaging across the filter"
    ],
    images: [
      "/product/CleanEstStereo1.jpg",
      "/product/CleanEstStereo2.jpg",
      "/product/CleanEstStereo3.jpg",
      "/product/CleanEstStereo4.jpg"
    ],
    video: "/product/CleanEst_Stereo.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Particle Size Range", value: ">10 microns" },
      { param: "Measurement Resolution", value: "2 microns/pixel" },
      { param: "Camera", value: "5MP CMOS, 2.2 x 2.2 μm pixel size" },
      { param: "Magnification", value: "7.5X to 45X (adjustable zoom)" },
      { param: "Stage", value: "Motorized XY, 100mm x 100mm travel" },
      { param: "Illumination", value: "LED, polarized, adjustable" },
      { param: "Filter Size", value: "47mm diameter (standard)" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "700mm x 600mm x 650mm (W x D x H)" },
      { param: "Weight", value: "50 kg" }
    ],
    ordering: [
      { part: "260-3711-100", config: "CLEAN-EST (Stereo) with Motorized Stage", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "47mm Filter Membranes",
        subtitle: "5 micron polyester, ISO 16232 compliant",
        image: "/product/filterMembranes47mm.png"
      },
      {
        title: "Calibration Standard",
        subtitle: "For particle size verification",
        image: "/product/calibrationStandard.png"
      },
      {
        title: "Polarization Filter",
        subtitle: "Replacement for metallic particle detection",
        image: "/product/polarizationFilter.png"
      }
    ],
    literature: [
      { title: "CLEAN-EST (Stereo) User Manual", image: "/product/clean-est-stereo-manual.png" },
      { title: "CLEAN-EST (Stereo) Brochure", image: "/product/clean-est-stereo-brochure.png" },
      { title: "Cleanliness Testing Guide", image: "/product/cleanliness-testing-guide.png" }
    ]
  },
  {
    id: 45,
    categorySlug: "particle-size-analysis-systems",
    name: "CLEAN-EST (Metallurgical)",
    slug: "clean-est-metallurgical",
    description: "The CLEAN-EST (Metallurgical) is a high-precision particle size analysis system for advanced cleanliness testing in automotive, aerospace, and metallurgical industries. Fully compliant with ISO 16232 and VDA 19.1, it provides automated filter paper scanning to classify non-metallic, metallic, and fiber particles larger than 3 microns. Featuring a motorized stage, particle height measurement, and metallurgical microscopy, it ensures ease of use and rapid, customizable report generation for stringent quality control requirements.",
    image: "/images/particle-size-analysis/clean-est-metallurgical.png",
    alt: "CLEAN-EST (Metallurgical) Particle Size Analysis System",
    rating: 4.9,
    reviews: 48,
    tag: "Advanced Cleanliness Analysis",
    detail: "High-precision particle analysis for particles >3 microns",
    apiCall: "/api/particle-size-analysis/clean-est-metallurgical",
    features: [
      "Fully compliant with ISO 16232:2018 and VDA 19.1-2015 for cleanliness testing",
      "Automatic filter paper scanning with high-resolution metallurgical microscopy",
      "Classifies non-metallic, metallic, and fiber particles per VDA 19.1 definitions",
      "Minimum particle size detection of 3 microns with 0.3 microns/pixel resolution",
      "Motorized stage for precise filter positioning and full membrane coverage",
      "Particle height measurement using advanced Z-axis focus stacking",
      "Intuitive interface with automated workflows and user-defined report generation"
    ],
    additionalFeatures: [
      "Polarized light and brightfield illumination for enhanced particle classification",
      "High-brightness LED illumination with 20,000-hour lifespan",
      "Machine learning-based software for accurate particle type identification",
      "Supports ISO 4406, ISO 4407, and custom standards for versatile applications",
      "Seamless image stitching for comprehensive filter analysis"
    ],
    images: [
      "/product/CleanEstMetallurgical1.jpg",
      "/product/CleanEstMetallurgical2.jpg",
      "/product/CleanEstMetallurgical3.jpg",
      "/product/CleanEstMetallurgical4.jpg"
    ],
    video: "/product/CleanEst_Metallurgical.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Particle Size Range", value: ">3 microns" },
      { param: "Measurement Resolution", value: "0.3 microns/pixel" },
      { param: "Camera", value: "10MP CMOS, 1.67 x 1.67 μm pixel size" },
      { param: "Magnification", value: "50X to 200X (fixed objectives)" },
      { param: "Stage", value: "Motorized XY, 150mm x 150mm travel" },
      { param: "Illumination", value: "LED, polarized/brightfield, adjustable" },
      { param: "Filter Size", value: "47mm diameter (standard)" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "800mm x 700mm x 700mm (W x D x H)" },
      { param: "Weight", value: "60 kg" }
    ],
    ordering: [
      { part: "260-3711-200", config: "CLEAN-EST (Metallurgical) with Motorized Stage", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "47mm Filter Membranes",
        subtitle: "1 micron polyester, ISO 16232 compliant",
        image: "/product/filterMembranes47mm.png"
      },
      {
        title: "Calibration Standard",
        subtitle: "For particle size verification",
        image: "/product/calibrationStandard.png"
      },
      {
        title: "Polarization Filter",
        subtitle: "Replacement for metallic particle detection",
        image: "/product/polarizationFilter.png"
      }
    ],
    literature: [
      { title: "CLEAN-EST (Metallurgical) User Manual", image: "/product/clean-est-metallurgical-manual.png" },
      { title: "CLEAN-EST (Metallurgical) Brochure", image: "/product/clean-est-metallurgical-brochure.png" },
      { title: "Cleanliness Testing Guide", image: "/product/cleanliness-testing-guide.png" }
    ]
  },

  // Millipore Fluid Contamination Analysis Kit
  {
    id: 46,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Vacuum / Pressure Pump",
    slug: "vacuum-pressure-pump",
    description: "The Vacuum / Pressure Pump is a compact, dual-function unit designed for Millipore fluid contamination analysis kits. It provides reliable vacuum for filtration and pressure for solvent dispensing, ensuring efficient sample preparation for particulate and biological contamination testing. Equipped with a permanently lubricated motor and thermal overload protection, it is ideal for laboratory and field use in automotive and industrial quality control.",
    image: "/images/fluid-contamination/vacuum-pressure-pump.png",
    alt: "Vacuum / Pressure Pump for Fluid Contamination Analysis",
    rating: 4.7,
    reviews: 35,
    tag: "Fluid Contamination Analysis",
    detail: "Dual-function pump for filtration and dispensing",
    apiCall: "/api/fluid-contamination/vacuum-pressure-pump",
    features: [
      "Dual vacuum and pressure operation for filtration and solvent dispensing",
      "Maximum vacuum of 25 inHg and pressure of 35 psig",
      "Permanently lubricated motor with thermal overload protection and auto-reset",
      "Air flow rate of 25 L/min at open flow",
      "Compatible with Millipore filtration systems and 47mm filter holders",
      "Portable design for bench and field applications",
      "Compliant with ASTM D2276 and ISO 4406 standards"
    ],
    additionalFeatures: [
      "Low-noise operation for laboratory environments",
      "Vacuum trap compatibility to prevent liquid ingress",
      "Corrosion-resistant components for solvent handling",
      "Optional voltage configurations (115V or 230V)",
      "Includes silicone tubing for connection to filter holders"
    ],
    images: [
      "/product/VacuumPressurePump1.jpg",
      "/product/VacuumPressurePump2.jpg",
      "/product/VacuumPressurePump3.jpg",
      "/product/VacuumPressurePump4.jpg"
    ],
    video: "/product/Vacuum_Pressure_Pump.mp4",
    specifications: [
      { param: "Operation", value: "Dual Vacuum/Pressure" },
      { param: "Max Vacuum", value: "25 inHg" },
      { param: "Max Pressure", value: "35 psig" },
      { param: "Air Flow Rate", value: "25 L/min" },
      { param: "Motor Power", value: "1/16 HP" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "300mm x 200mm x 250mm (W x D x H)" },
      { param: "Weight", value: "5 kg" }
    ],
    ordering: [
      { part: "270-3811-100", config: "Vacuum / Pressure Pump, 230V", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Silicone Tubing",
        subtitle: "For pump to filter holder connection",
        image: "/product/siliconeTubing.png"
      },
      {
        title: "Vacuum Trap Kit",
        subtitle: "Prevents liquid ingress into pump",
        image: "/product/vacuumTrapKit.png"
      }
    ],
    literature: [
      { title: "Vacuum / Pressure Pump User Manual", image: "/product/vacuum-pressure-pump-manual.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 47,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Dispensing Pressure Vessel",
    slug: "dispensing-pressure-vessel",
    description: "The Dispensing Pressure Vessel is a robust, stainless-steel container for holding and dispensing liquids during Millipore fluid contamination analysis. Designed for filtration through pressure-operated filter holders, it ensures ultra-clean solvent delivery for sample preparation. ASME-UM code compliant, it is autoclavable and suitable for automotive, aerospace, and industrial applications.",
    image: "/images/fluid-contamination/dispensing-pressure-vessel.png",
    alt: "Dispensing Pressure Vessel for Fluid Contamination Analysis",
    rating: 4.8,
    reviews: 38,
    tag: "Fluid Contamination Analysis",
    detail: "Stainless-steel vessel for pressure filtration",
    apiCall: "/api/fluid-contamination/dispensing-pressure-vessel",
    features: [
      "316 stainless-steel construction with fluoroelastomer gaskets and O-rings",
      "Available in 5L, 10L, and 20L capacities",
      "Cam-lock handle for secure closure",
      "0.25-inch NPTF fittings for inlet, outlet, pressure gauge, and vent/relief valve",
      "Meets ASME-UM code requirements for safety",
      "Autoclavable when vented for sterilization",
      "Compatible with Millipore pressure-operated filter holders"
    ],
    additionalFeatures: [
      "Molded neoprene rubber base for stability",
      "Optional relief valve and pressure gauge for enhanced safety",
      "Vacuum adapter for dual-mode operation",
      "Corrosion-resistant for use with aggressive solvents",
      "Easy disassembly for cleaning and maintenance"
    ],
    images: [
      "/product/DispensingPressureVessel1.jpg",
      "/product/DispensingPressureVessel2.jpg",
      "/product/DispensingPressureVessel3.jpg",
      "/product/DispensingPressureVessel4.jpg"
    ],
    video: "/product/Dispensing_Pressure_Vessel.mp4",
    specifications: [
      { param: "Operation", value: "Pressure Filtration" },
      { param: "Material", value: "316 Stainless Steel" },
      { param: "Capacity", value: "5L, 10L, 20L" },
      { param: "Fittings", value: "0.25-inch NPTF" },
      { param: "Max Pressure", value: "100 psig" },
      { param: "Dimensions (10L)", value: "250mm diameter x 400mm height" },
      { param: "Weight (10L)", value: "10 kg" }
    ],
    ordering: [
      { part: "270-3811-200", config: "Dispensing Pressure Vessel, 10L", voltage: "None" }
    ],
    consumables: [
      {
        title: "Fluoroelastomer Gaskets",
        subtitle: "Replacement for vessel sealing",
        image: "/product/fluoroelastomerGaskets.png"
      },
      {
        title: "Pressure Relief Valve",
        subtitle: "For safety compliance",
        image: "/product/pressureReliefValve.png"
      }
    ],
    literature: [
      { title: "Dispensing Pressure Vessel User Manual", image: "/product/dispensing-pressure-vessel-manual.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 48,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Filter Paper",
    slug: "filter-paper",
    description: "Millipore Filter Paper consists of mixed cellulose ester (MCE) membranes designed for fluid contamination analysis. With pore sizes ranging from 0.45 to 5.0 microns, these hydrophilic filters capture particulate and biological contaminants during vacuum filtration. Compatible with 47mm filter holders, they ensure reliable analysis of hydraulic fluids, fuels, and water in automotive and industrial applications.",
    image: "/images/fluid-contamination/filter-paper.png",
    alt: "Filter Paper for Fluid Contamination Analysis",
    rating: 4.6,
    reviews: 40,
    tag: "Fluid Contamination Analysis",
    detail: "Mixed cellulose ester membranes for filtration",
    apiCall: "/api/fluid-contamination/filter-paper",
    features: [
      "Mixed cellulose ester (MCE) membranes for high particle retention",
      "Pore sizes: 0.45, 0.8, 1.2, 5.0 microns",
      "47mm diameter for compatibility with Millipore filter holders",
      "Hydrophilic for easy wetting with aqueous solutions",
      "High flow rates for efficient filtration",
      "Compliant with ASTM D2276, ISO 4406, and ISO 16232 standards",
      "Sterilizable by autoclaving for biological testing"
    ],
    additionalFeatures: [
      "Low extractables to minimize sample contamination",
      "White, plain surface for easy particle visualization",
      "Packaged in sterile conditions to prevent contamination",
      "Compatible with organic solvents when pre-wetted",
      "Available in packs of 100 for high-throughput testing"
    ],
    images: [
      "/product/FilterPaper1.jpg",
      "/product/FilterPaper2.jpg",
      "/product/FilterPaper3.jpg",
      "/product/FilterPaper4.jpg"
    ],
    video: "/product/Filter_Paper.mp4",
    specifications: [
      { param: "Material", value: "Mixed Cellulose Ester (MCE)" },
      { param: "Pore Sizes", value: "0.45, 0.8, 1.2, 5.0 microns" },
      { param: "Diameter", value: "47mm" },
      { param: "Filtration Area", value: "9.6 cm²" },
      { param: "Flow Rate (0.8 μm)", value: "60 mL/min/cm² at 10 psi" },
      { param: "Thickness", value: "150 μm" },
      { param: "Pack Size", value: "100 filters" }
    ],
    ordering: [
      { part: "270-3811-300", config: "Filter Paper, 0.8 micron, 47mm, 100/pk", voltage: "None" }
    ],
    consumables: [
      {
        title: "MCE Filter Membranes",
        subtitle: "0.45, 0.8, 1.2, 5.0 microns, 47mm",
        image: "/product/mceFilterMembranes.png"
      },
      {
        title: "Filter Storage Box",
        subtitle: "For 47mm filter membranes",
        image: "/product/filterStorageBox.png"
      }
    ],
    literature: [
      { title: "Filter Paper User Guide", image: "/product/filter-paper-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 49,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Filter Flask",
    slug: "filter-flask",
    description: "The Filter Flask is a borosilicate glass vessel designed for vacuum filtration in Millipore fluid contamination analysis kits. With a 1000mL capacity and silicone stopper, it supports 47mm filter holders for particulate and biological contamination testing. Its robust construction ensures reliable collection of filtrates during analysis of hydraulic fluids, fuels, and water.",
    image: "/images/fluid-contamination/filter-flask.png",
    alt: "Filter Flask for Fluid Contamination Analysis",
    rating: 4.7,
    reviews: 36,
    tag: "Fluid Contamination Analysis",
    detail: "Borosilicate glass flask for vacuum filtration",
    apiCall: "/api/fluid-contamination/filter-flask",
    features: [
      "1000mL capacity borosilicate 3.3 glass for thermal resistance",
      "Supports 47mm filter holders with silicone stopper",
      "Fritted glass filter base for secure membrane placement",
      "Designed for vacuum filtration of liquids",
      "Compatible with Millipore vacuum pumps and tubing",
      "Compliant with ASTM D2276 and ISO 4406 standards",
      "Autoclavable for sterilization"
    ],
    additionalFeatures: [
      "Graduated markings for volume measurement",
      "Chemically resistant to solvents and acids",
      "Neoprene bulb for manual vacuum initiation",
      "Ground glass joint for secure stopper fit",
      "Dishwasher-safe for easy cleaning"
    ],
    images: [
      "/product/FilterFlask1.jpg",
      "/product/FilterFlask2.jpg",
      "/product/FilterFlask3.jpg",
      "/product/FilterFlask4.jpg"
    ],
    video: "/product/Filter_Flask.mp4",
    specifications: [
      { param: "Material", value: "Borosilicate 3.3 Glass" },
      { param: "Capacity", value: "1000 mL" },
      { param: "Filter Diameter", value: "47mm" },
      { param: "Filtration Area", value: "9.6 cm²" },
      { param: "Stopper", value: "Silicone" },
      { param: "Dimensions", value: "120mm diameter x 250mm height" },
      { param: "Weight", value: "0.5 kg" }
    ],
    ordering: [
      { part: "270-3811-400", config: "Filter Flask, 1000mL", voltage: "None" }
    ],
    consumables: [
      {
        title: "Silicone Stopper",
        subtitle: "Replacement for filter flask",
        image: "/product/siliconeStopper.png"
      },
      {
        title: "Neoprene Bulb",
        subtitle: "For manual vacuum initiation",
        image: "/product/neopreneBulb.png"
      }
    ],
    literature: [
      { title: "Filter Flask User Guide", image: "/product/filter-flask-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 50,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Filter Jet Solvent Dispenser",
    slug: "filter-jet-solvent-dispenser",
    description: "The Filter Jet Solvent Dispenser is a hand-pressure operated device for delivering ultra-clean solvent jets in Millipore fluid contamination analysis. Equipped with a 25mm stainless-steel filter holder, it directs filtered solvent or rinse solution onto surfaces for cleaning, ensuring precise sample preparation for contamination testing in automotive and industrial applications.",
    image: "/images/fluid-contamination/filter-jet-solvent-dispenser.png",
    alt: "Filter Jet Solvent Dispenser for Fluid Contamination Analysis",
    rating: 4.6,
    reviews: 33,
    tag: "Fluid Contamination Analysis",
    detail: "Hand-operated solvent jet dispenser",
    apiCall: "/api/fluid-contamination/filter-jet-solvent-dispenser",
    features: [
      "Hand-pressure operated for precise solvent jet delivery",
      "25mm stainless-steel filter holder with support screen",
      "Delivers ultra-clean solvent or rinse solution for surface cleaning",
      "Compatible with 25mm Millipore membrane filters",
      "Teflon gasket for chemical compatibility",
      "Designed for contamination analysis sample preparation",
      "Compliant with ASTM D2276 and ISO 4406 standards"
    ],
    additionalFeatures: [
      "Delivery tube for targeted solvent application",
      "Lightweight and ergonomic for field use",
      "Easy disassembly for filter replacement",
      "Corrosion-resistant stainless-steel construction",
      "Supports low surface tension solvents"
    ],
    images: [
      "/product/FilterJetSolventDispenser1.jpg",
      "/product/FilterJetSolventDispenser2.jpg",
      "/product/FilterJetSolventDispenser3.jpg",
      "/product/FilterJetSolventDispenser4.jpg"
    ],
    video: "/product/Filter_Jet_Solvent_Dispenser.mp4",
    specifications: [
      { param: "Operation", value: "Manual, Hand-Pressure" },
      { param: "Filter Diameter", value: "25mm" },
      { param: "Material", value: "Stainless Steel, Teflon Gasket" },
      { param: "Capacity", value: "50 mL" },
      { param: "Dimensions", value: "50mm diameter x 150mm length" },
      { param: "Weight", value: "0.3 kg" }
    ],
    ordering: [
      { part: "270-3811-500", config: "Filter Jet Solvent Dispenser, 25mm", voltage: "None" }
    ],
    consumables: [
      {
        title: "25mm MCE Membranes",
        subtitle: "0.8 micron, for solvent filtration",
        image: "/product/mceMembranes25mm.png"
      },
      {
        title: "Teflon Gasket",
        subtitle: "Replacement for filter holder",
        image: "/product/teflonGasket.png"
      }
    ],
    literature: [
      { title: "Filter Jet Solvent Dispenser User Guide", image: "/product/filter-jet-solvent-dispenser-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 51,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Solvent Filtering Dispenser",
    slug: "solvent-filtering-dispenser",
    description: "The Solvent Filtering Dispenser is a squeeze-bottle action device for ultra-clean solvent dispensing in Millipore fluid contamination analysis. Featuring a 25mm stainless-steel filter holder with a neoprene bulb, it filters and dispenses small volumes of solvent for sample preparation, ensuring contamination-free analysis of hydraulic fluids and fuels.",
    image: "/images/fluid-contamination/solvent-filtering-dispenser.png",
    alt: "Solvent Filtering Dispenser for Fluid Contamination Analysis",
    rating: 4.5,
    reviews: 32,
    tag: "Fluid Contamination Analysis",
    detail: "Squeeze-bottle solvent dispenser",
    apiCall: "/api/fluid-contamination/solvent-filtering-dispenser",
    features: [
      "Squeeze-bottle action for controlled solvent dispensing",
      "25mm stainless-steel filter holder with support screen",
      "Neoprene bulb for manual operation",
      "Filters and dispenses ultra-clean solvent for sample preparation",
      "Compatible with 25mm Millipore membrane filters",
      "Teflon gasket for chemical resistance",
      "Compliant with ASTM D2276 and ISO 4406 standards"
    ],
    additionalFeatures: [
      "Compact design for benchtop and field use",
      "Easy filter replacement with screw-on holder",
      "Supports aqueous and organic solvents",
      "Transparent body for solvent level monitoring",
      "Autoclavable components for sterilization"
    ],
    images: [
      "/product/SolventFilteringDispenser1.jpg",
      "/product/SolventFilteringDispenser2.jpg",
      "/product/SolventFilteringDispenser3.jpg",
      "/product/SolventFilteringDispenser4.jpg"
    ],
    video: "/product/Solvent_Filtering_Dispenser.mp4",
    specifications: [
      { param: "Operation", value: "Manual, Squeeze-Bottle" },
      { param: "Filter Diameter", value: "25mm" },
      { param: "Material", value: "Stainless Steel, Neoprene, Plastic" },
      { param: "Capacity", value: "100 mL" },
      { param: "Dimensions", value: "60mm diameter x 200mm height" },
      { param: "Weight", value: "0.4 kg" }
    ],
    ordering: [
      { part: "270-3811-600", config: "Solvent Filtering Dispenser, 25mm", voltage: "None" }
    ],
    consumables: [
      {
        title: "25mm MCE Membranes",
        subtitle: "0.8 micron, for solvent filtration",
        image: "/product/mceMembranes25mm.png"
      },
      {
        title: "Neoprene Bulb",
        subtitle: "Replacement for dispenser",
        image: "/product/neopreneBulb.png"
      }
    ],
    literature: [
      { title: "Solvent Filtering Dispenser User Guide", image: "/product/solvent-filtering-dispenser-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 52,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Petri Slides",
    slug: "petri-slides",
    description: "Petri Slides are specialized storage units for 47mm filter membranes used in Millipore fluid contamination analysis. With a transparent cover and rectangular base, they enable microscopic examination of filtered particles without removal. Designed for secure storage and analysis, they are ideal for automotive and industrial contamination testing.",
    image: "/images/fluid-contamination/petri-slides.png",
    alt: "Petri Slides for Fluid Contamination Analysis",
    rating: 4.6,
    reviews: 30,
    tag: "Fluid Contamination Analysis",
    detail: "Storage for 47mm filter membranes",
    apiCall: "/api/fluid-contamination/petri-slides",
    features: [
      "Designed for 47mm filter membrane storage and analysis",
      "Transparent cover for direct microscopic examination",
      "Rectangular base with rounded corners for microscope stage compatibility",
      "Securely holds filters to prevent contamination",
      "Compliant with ASTM D2276 and ISO 4406 standards",
      "Stackable design for efficient storage",
      "Durable plastic construction for repeated use"
    ],
    additionalFeatures: [
      "Airtight seal to protect filters from environmental contamination",
      "Labeling area for sample identification",
      "Compatible with standard optical microscopes",
      "Packaged in sets of 50 for high-throughput testing",
      "Lightweight for easy handling"
    ],
    images: [
      "/product/PetriSlides1.jpg",
      "/product/PetriSlides2.jpg",
      "/product/PetriSlides3.jpg",
      "/product/PetriSlides4.jpg"
    ],
    video: "/product/Petri_Slides.mp4",
    specifications: [
      { param: "Material", value: "Polystyrene" },
      { param: "Filter Diameter", value: "47mm" },
      { param: "Dimensions", value: "60mm x 50mm x 10mm (L x W x H)" },
      { param: "Pack Size", value: "50 slides" },
      { param: "Weight (per slide)", value: "10 g" }
    ],
    ordering: [
      { part: "270-3811-700", config: "Petri Slides, 47mm, 50/pk", voltage: "None" }
    ],
    consumables: [
      {
        title: "47mm MCE Membranes",
        subtitle: "0.8 micron, for contamination analysis",
        image: "/product/mceMembranes47mm.png"
      },
      {
        title: "Filter Storage Box",
        subtitle: "For Petri slide organization",
        image: "/product/filterStorageBox.png"
      }
    ],
    literature: [
      { title: "Petri Slides User Guide", image: "/product/petri-slides-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },
  {
    id: 53,
    categorySlug: "millipore-fluid-contamination-analysis-kit",
    name: "Dispensing Bottles",
    slug: "dispensing-bottles",
    description: "Dispensing Bottles are designed for controlled delivery of ultra-clean solvents and rinse solutions in Millipore fluid contamination analysis. With a 250mL capacity and screw-cap nozzle, they ensure precise application during sample preparation, minimizing contamination in automotive and industrial testing environments.",
    image: "/images/fluid-contamination/dispensing-bottles.png",
    alt: "Dispensing Bottles for Fluid Contamination Analysis",
    rating: 4.5,
    reviews: 28,
    tag: "Fluid Contamination Analysis",
    detail: "Controlled solvent dispensing",
    apiCall: "/api/fluid-contamination/dispensing-bottles",
    features: [
      "250mL capacity for solvent and rinse solution dispensing",
      "Screw-cap nozzle for controlled, drop-by-drop application",
      "High-density polyethylene (HDPE) construction for chemical resistance",
      "Designed for ultra-clean sample preparation",
      "Compliant with ASTM D2276 and ISO 4406 standards",
      "Ergonomic design for easy handling",
      "Autoclavable for sterilization"
    ],
    additionalFeatures: [
      "Transparent body for liquid level monitoring",
      "Leak-proof cap to prevent solvent evaporation",
      "Compatible with isopropanol and other solvents",
      "Packaged in sets of 10 for laboratory use",
      "Lightweight and durable for field applications"
    ],
    images: [
      "/product/DispensingBottles1.jpg",
      "/product/DispensingBottles2.jpg",
      "/product/DispensingBottles3.jpg",
      "/product/DispensingBottles4.jpg"
    ],
    video: "/product/Dispensing_Bottles.mp4",
    specifications: [
      { param: "Material", value: "High-Density Polyethylene (HDPE)" },
      { param: "Capacity", value: "250 mL" },
      { param: "Nozzle", value: "Screw-Cap, Drop-by-Drop" },
      { param: "Dimensions", value: "60mm diameter x 150mm height" },
      { param: "Weight", value: "50 g" },
      { param: "Pack Size", value: "10 bottles" }
    ],
    ordering: [
      { part: "270-3811-800", config: "Dispensing Bottles, 250mL, 10/pk", voltage: "None" }
    ],
    consumables: [
      {
        title: "Replacement Screw-Cap Nozzle",
        subtitle: "For dispensing bottles",
        image: "/product/screwCapNozzle.png"
      },
      {
        title: "Isopropanol",
        subtitle: "2.5L for solvent dispensing",
        image: "/product/isopropanol.png"
      }
    ],
    literature: [
      { title: "Dispensing Bottles User Guide", image: "/product/dispensing-bottles-guide.png" },
      { title: "Fluid Contamination Analysis Kit Brochure", image: "/product/fluid-contamination-kit-brochure.png" },
      { title: "Contamination Testing Guide", image: "/product/contamination-testing-guide.png" }
    ]
  },

  //Image Analyzers
  {
    id: 54,
    categorySlug: "image-analyzer",
    name: "Grain Analysis (Intercept Method)",
    slug: "grain-analysis-intercept-method",
    description: "The Grain Analysis (Intercept Method) module automates grain size measurement in metallic and non-metallic materials using the intercept method per ASTM E112 and EN ISO 643. It counts grain boundary intersections along test lines to calculate the mean lineal intercept length and ASTM grain size number (G), ideal for quality control in metallography and materials science.",
    image: "/images/image-analyzer/grain-analysis-intercept.png",
    alt: "Grain Analysis Intercept Method Module",
    rating: 4.8,
    reviews: 45,
    tag: "Metallographic Analysis",
    detail: "Automated intercept method for grain size measurement",
    apiCall: "/api/image-analyzer/grain-analysis-intercept-method",
    features: [
      "Automated counting of grain boundary intersections per ASTM E112 and EN ISO 643",
      "Calculates mean lineal intercept length and ASTM grain size number (G)",
      "Supports linear and circular test lines for equiaxed and elongated grains",
      "Topological skeleton algorithm for accurate boundary detection",
      "User-defined test line patterns (lines, circles, cross-and-circles)",
      "Exports results to spreadsheets for reporting",
      "Compatible with optical and scanning electron microscopy images"
    ],
    additionalFeatures: [
      "Handles unimodal grain size distributions with log-normal characteristics",
      "Interactive filter adjustments for real-time intercept visualization",
      "Supports multiple fields (up to 5) for statistical accuracy",
      "Precision of ±0.5 grain size units with minimal operator bias",
      "Automated image preprocessing for enhanced grain boundary clarity"
    ],
    images: [
      "/product/GrainAnalysisIntercept1.jpg",
      "/product/GrainAnalysisIntercept2.jpg",
      "/product/GrainAnalysisIntercept3.jpg",
      "/product/GrainAnalysisIntercept4.jpg"
    ],
    video: "/product/Grain_Analysis_Intercept.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E112, EN ISO 643" },
      { param: "Grain Size Range", value: "G 00 to G 10" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Test Line Types", value: "Linear, Circular, Cross-and-Circles" },
      { param: "Output", value: "Mean Lineal Intercept, ASTM G, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 55,
    categorySlug: "image-analyzer",
    name: "Planimetry Method",
    slug: "planimetry-method",
    description: "The Planimetry Method module provides precise grain size measurement by counting grains within a known area, per ASTM E112 (Jeffries method). It calculates the number of grains per unit area (NA) to determine the ASTM grain size number (G), offering high accuracy for quality control in metallurgical analysis.",
    image: "/images/image-analyzer/planimetry-method.png",
    alt: "Planimetry Method Module",
    rating: 4.9,
    reviews: 50,
    tag: "Metallographic Analysis",
    detail: "Accurate grain counting for grain size determination",
    apiCall: "/api/image-analyzer/planimetry-method",
    features: [
      "Counts grains within a defined area per ASTM E112 (Jeffries method)",
      "Calculates grains per unit area (NA) and ASTM grain size number (G)",
      "Automated grain marking to eliminate counting errors",
      "Precision of ±0.25 grain size units with sufficient grain counts",
      "Supports equiaxed grain structures with unimodal distributions",
      "Integrates with digital microscopy for automated analysis",
      "Exports results to customizable reports"
    ],
    additionalFeatures: [
      "Bias-free results with repeatability < ±0.5 grain size units",
      "User-defined area selection for flexible analysis",
      "Handles single-phase and multiphase specimens",
      "Image enhancement for clear grain boundary detection",
      "Supports multiple image formats (JPEG, BMP, PNG)"
    ],
    images: [
      "/product/PlanimetryMethod1.jpg",
      "/product/PlanimetryMethod2.jpg",
      "/product/PlanimetryMethod3.jpg",
      "/product/PlanimetryMethod4.jpg"
    ],
    video: "/product/Planimetry_Method.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E112" },
      { param: "Grain Size Range", value: "G 00 to G 10" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Area Selection", value: "User-defined, Circular/Rectangular" },
      { param: "Output", value: "NA, ASTM G, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 56,
    categorySlug: "image-analyzer",
    name: "Grain Size Distribution",
    slug: "grain-size-distribution",
    description: "The Grain Size Distribution module analyzes the distribution of grain sizes in metallic materials, providing area-weighted and number-frequency histograms. Compliant with ASTM E112 and E1181, it characterizes unimodal and duplex grain structures for materials science and quality control applications.",
    image: "/images/image-analyzer/grain-size-distribution.png",
    alt: "Grain Size Distribution Module",
    rating: 4.7,
    reviews: 42,
    tag: "Metallographic Analysis",
    detail: "Detailed grain size distribution analysis",
    apiCall: "/api/image-analyzer/grain-size-distribution",
    features: [
      "Generates area-weighted and number-frequency histograms per ASTM E112",
      "Characterizes unimodal and duplex grain size distributions (ASTM E1181)",
      "Measures grain areas, diameters, and equivalent circle diameters",
      "Automated grain boundary detection using image processing",
      "Supports high-strength low-alloy (HSLA) steels and other alloys",
      "Quantifies bimodality with peak height ratio (PHR) and peak grain size range (PGSR)",
      "Exports distribution data to spreadsheets and graphs"
    ],
    additionalFeatures: [
      "Handles polycrystalline structures with irregular grain boundaries",
      "Deconvolution approach for bimodal distribution analysis",
      "User-defined classification bins for customized histograms",
      "Integrates with EBSD for crystallographic validation",
      "Supports multiple fields for statistical robustness"
    ],
    images: [
      "/product/GrainSizeDistribution1.jpg",
      "/product/GrainSizeDistribution2.jpg",
      "/product/GrainSizeDistribution3.jpg",
      "/product/GrainSizeDistribution4.jpg"
    ],
    video: "/product/Grain_Size_Distribution.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E112, ASTM E1181" },
      { param: "Grain Size Range", value: "0.5 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Histograms, PHR, PGSR, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 57,
    categorySlug: "image-analyzer",
    name: "Phase Analysis",
    slug: "phase-analysis",
    description: "The Phase Analysis module quantifies the volume fraction and distribution of phases in multiphase metallic materials, such as ferrite, pearlite, and austenite. Compliant with ASTM E562 and E1245, it supports automated phase segmentation and area ratio measurements for quality control and research.",
    image: "/images/image-analyzer/phase-analysis.png",
    alt: "Phase Analysis Module",
    rating: 4.8,
    reviews: 48,
    tag: "Metallographic Analysis",
    detail: "Quantitative phase fraction analysis",
    apiCall: "/api/image-analyzer/phase-analysis",
    features: [
      "Automated phase segmentation per ASTM E562 and E1245",
      "Measures volume fraction and area ratios of phases (e.g., ferrite, pearlite)",
      "Supports manual point count method for validation",
      "Image enhancement for clear phase boundary detection",
      "Handles complex microstructures with multiple phases",
      "Generates phase distribution maps and statistical reports",
      "Compatible with optical and electron microscopy"
    ],
    additionalFeatures: [
      "User-defined phase identification criteria",
      "Supports importing nodularity/flake analysis results for graphite phases",
      "Automated thresholding for consistent phase detection",
      "Exports phase data to spreadsheets and graphs",
      "Integrates with 4K digital microscopes for high-resolution analysis"
    ],
    images: [
      "/product/PhaseAnalysis1.jpg",
      "/product/PhaseAnalysis2.jpg",
      "/product/PhaseAnalysis3.jpg",
      "/product/PhaseAnalysis4.jpg"
    ],
    video: "/product/Phase_Analysis.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E562, ASTM E1245" },
      { param: "Phase Types", value: "Ferrite, Pearlite, Austenite, Graphite, etc." },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Volume Fraction, Area Ratio, Distribution Maps" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 58,
    categorySlug: "image-analyzer",
    name: "Nodularity Analysis",
    slug: "nodularity-analysis",
    description: "The Nodularity Analysis module evaluates graphite nodularity in cast iron per ASTM A247 and ISO 16112. It quantifies nodule count, area, and density, classifying nodules by size (1 to 8) for quality control in automotive and industrial castings.",
    image: "/images/image-analyzer/nodularity-analysis.png",
    alt: "Nodularity Analysis Module",
    rating: 4.7,
    reviews: 40,
    tag: "Metallographic Analysis",
    detail: "Graphite nodularity evaluation for cast iron",
    apiCall: "/api/image-analyzer/nodularity-analysis",
    features: [
      "Automated detection of graphite nodules per ASTM A247 and ISO 16112",
      "Quantifies nodule count, area, and density",
      "Classifies nodules by size (1 to 8) based on diameter",
      "User-defined filter conditions for nodule identification",
      "Generates nodularity reports with statistical summaries",
      "Supports multiple samples for batch analysis",
      "Compatible with optical microscopy and image analysis systems"
    ],
    additionalFeatures: [
      "Handles irregular nodule shapes with advanced image processing",
      "Exports results for phase analysis integration",
      "Interactive nodule editing for manual corrections",
      "Supports live video for focus adjustment",
      "High-resolution imaging for accurate nodule detection"
    ],
    images: [
      "/product/NodularityAnalysis1.jpg",
      "/product/NodularityAnalysis2.jpg",
      "/product/NodularityAnalysis3.jpg",
      "/product/NodularityAnalysis4.jpg"
    ],
    video: "/product/Nodularity_Analysis.mp4",
    specifications: [
      { param: "Standards", value: "ASTM A247, ISO 16112" },
      { param: "Nodule Size Range", value: "5 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Nodule Count, Area, Density, Size Classification" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 59,
    categorySlug: "image-analyzer",
    name: "Graphite",
    slug: "graphite",
    description: "The Graphite module analyzes graphite morphology in cast iron, including flake, nodular, and vermicular forms, per ASTM A247 and ISO 16112. It measures shape, size, and distribution, supporting quality control in automotive and heavy machinery castings.",
    image: "/images/image-analyzer/graphite.png",
    alt: "Graphite Morphology Analysis Module",
    rating: 4.8,
    reviews: 44,
    tag: "Metallographic Analysis",
    detail: "Comprehensive graphite morphology analysis",
    apiCall: "/api/image-analyzer/graphite",
    features: [
      "Analyzes graphite morphology (flake, nodular, vermicular) per ASTM A247 and ISO 16112",
      "Measures graphite size, shape, and distribution",
      "Automated detection of graphite forms using image processing",
      "Supports cast iron microstructure analysis",
      "Generates detailed morphology reports with histograms",
      "Compatible with 4K digital microscopes",
      "Integrates with phase analysis for comprehensive reporting"
    ],
    additionalFeatures: [
      "User-defined shape factor thresholds for graphite classification",
      "Handles complex microstructures with multiple graphite forms",
      "Exports data to spreadsheets and graphical formats",
      "Supports multiple fields for statistical accuracy",
      "Live view for real-time morphology assessment"
    ],
    images: [
      "/product/Graphite1.jpg",
      "/product/Graphite2.jpg",
      "/product/Graphite3.jpg",
      "/product/Graphite4.jpg"
    ],
    video: "/product/Graphite.mp4",
    specifications: [
      { param: "Standards", value: "ASTM A247, ISO 16112" },
      { param: "Graphite Size Range", value: "5 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Size, Shape Factor, Distribution, Histograms" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 59,
    categorySlug: "image-analyzer",
    name: "Graphite",
    slug: "graphite",
    description: "The Graphite module analyzes graphite morphology in cast iron, including flake, nodular, and vermicular forms, per ASTM A247 and ISO 16112. It measures shape, size, and distribution, supporting quality control in automotive and heavy machinery castings.",
    image: "/images/image-analyzer/graphite.png",
    alt: "Graphite Morphology Analysis Module",
    rating: 4.8,
    reviews: 44,
    tag: "Metallographic Analysis",
    detail: "Comprehensive graphite morphology analysis",
    apiCall: "/api/image-analyzer/graphite",
    features: [
      "Analyzes graphite morphology (flake, nodular, vermicular) per ASTM A247 and ISO 16112",
      "Measures graphite size, shape, and distribution",
      "Automated detection of graphite forms using image processing",
      "Supports cast iron microstructure analysis",
      "Generates detailed morphology reports with histograms",
      "Compatible with 4K digital microscopes",
      "Integrates with phase analysis for comprehensive reporting"
    ],
    additionalFeatures: [
      "User-defined shape factor thresholds for graphite classification",
      "Handles complex microstructures with multiple graphite forms",
      "Exports data to spreadsheets and graphical formats",
      "Supports multiple fields for statistical accuracy",
      "Live view for real-time morphology assessment"
    ],
    images: [
      "/product/Graphite1.jpg",
      "/product/Graphite2.jpg",
      "/product/Graphite3.jpg",
      "/product/Graphite4.jpg"
    ],
    video: "/product/Graphite.mp4",
    specifications: [
      { param: "Standards", value: "ASTM A247, ISO 16112" },
      { param: "Graphite Size Range", value: "5 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Size, Shape Factor, Distribution, Histograms" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 60,
    categorySlug: "image-analyzer",
    name: "B Type Flake Separation",
    slug: "b-type-flake-separation",
    description: "The B Type Flake Separation module identifies and quantifies Type B graphite flakes (rosette patterns) in cast iron per ASTM A247. It isolates B-type flakes from other graphite forms, measuring their size and distribution for quality control in cast iron production.",
    image: "/images/image-analyzer/b-type-flake-separation.png",
    alt: "B Type Flake Separation Module",
    rating: 4.6,
    reviews: 38,
    tag: "Metallographic Analysis",
    detail: "Specialized B-type graphite flake analysis",
    apiCall: "/api/image-analyzer/b-type-flake-separation",
    features: [
      "Automated detection of Type B graphite flakes per ASTM A247",
      "Isolates rosette-pattern flakes from other graphite forms",
      "Measures flake size, count, and distribution",
      "User-defined filter conditions for accurate separation",
      "Generates detailed reports with statistical summaries",
      "Supports optical microscopy and image analysis systems",
      "Integrates with graphite morphology analysis"
    ],
    additionalFeatures: [
      "Handles complex cast iron microstructures",
      "Interactive flake editing for manual corrections",
      "Exports data to spreadsheets and histograms",
      "Supports live video for real-time analysis",
      "High-resolution imaging for precise flake detection"
    ],
    images: [
      "/product/BTypeFlakeSeparation1.jpg",
      "/product/BTypeFlakeSeparation2.jpg",
      "/product/BTypeFlakeSeparation3.jpg",
      "/product/BTypeFlakeSeparation4.jpg"
    ],
    video: "/product/B_Type_Flake_Separation.mp4",
    specifications: [
      { param: "Standards", value: "ASTM A247" },
      { param: "Flake Size Range", value: "5 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Flake Count, Size, Distribution, Histograms" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 61,
    categorySlug: "image-analyzer",
    name: "Point Counter",
    slug: "point-counter",
    description: "The Point Counter module performs manual and automated point counting for phase fraction and inclusion analysis per ASTM E562 and E45. It overlays a grid on microscopic images to quantify phase or inclusion content, ideal for metallographic quality control.",
    image: "/images/image-analyzer/point-counter.png",
    alt: "Point Counter Module",
    rating: 4.7,
    reviews: 36,
    tag: "Metallographic Analysis",
    detail: "Point counting for phase and inclusion analysis",
    apiCall: "/api/image-analyzer/point-counter",
    features: [
      "Manual and automated point counting per ASTM E562 and E45",
      "Quantifies phase fractions and inclusion content",
      "User-defined grid sizes for flexible analysis",
      "Automated grid overlay on microscopic images",
      "Supports single-phase and multiphase specimens",
      "Generates statistical reports with point count data",
      "Compatible with optical and electron microscopy"
    ],
    additionalFeatures: [
      "Interactive point marking for manual verification",
      "Handles irregular phase boundaries with high accuracy",
      "Exports data to spreadsheets and graphical formats",
      "Supports multiple fields for statistical robustness",
      "Integrates with phase analysis for comprehensive reporting"
    ],
    images: [
      "/product/PointCounter1.jpg",
      "/product/PointCounter2.jpg",
      "/product/PointCounter3.jpg",
      "/product/PointCounter4.jpg"
    ],
    video: "/product/Point_Counter.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E562, ASTM E45" },
      { param: "Grid Size", value: "User-defined, 10x10 to 100x100 points" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Phase Fraction, Inclusion Content, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 62,
    categorySlug: "image-analyzer",
    name: "Linear Measurement",
    slug: "linear-measurement",
    description: "The Linear Measurement module enables precise measurement of distances, lengths, and thicknesses in microscopic images. It supports manual and automated measurements for features like grain boundaries, cracks, and coatings, ideal for metallographic and defect analysis.",
    image: "/images/image-analyzer/linear-measurement.png",
    alt: "Linear Measurement Module",
    rating: 4.6,
    reviews: 34,
    tag: "Metallographic Analysis",
    detail: "Precise linear measurements in microscopy",
    apiCall: "/api/image-analyzer/linear-measurement",
    features: [
      "Manual and automated measurement of distances and lengths",
      "Measures grain boundary lengths, crack lengths, and coating thicknesses",
      "User-defined measurement tools (lines, polylines, arcs)",
      "Calibrated measurements with sub-micron accuracy",
      "Supports optical and scanning electron microscopy",
      "Generates measurement reports with statistical summaries",
      "Compliant with ASTM E112 and E45 for linear features"
    ],
    additionalFeatures: [
      "Interactive measurement editing for manual corrections",
      "Handles irregular features with high precision",
      "Exports measurement data to spreadsheets",
      "Supports live video for real-time measurements",
      "Integrates with annotation for feature labeling"
    ],
    images: [
      "/product/LinearMeasurement1.jpg",
      "/product/LinearMeasurement2.jpg",
      "/product/LinearMeasurement3.jpg",
      "/product/LinearMeasurement4.jpg"
    ],
    video: "/product/Linear_Measurement.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E112, ASTM E45" },
      { param: "Measurement Range", value: "0.1 μm to 10 mm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Length, Thickness, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 63,
    categorySlug: "image-analyzer",
    name: "Inclusion",
    slug: "inclusion",
    description: "The Inclusion module detects and classifies non-metallic inclusions in steel per ASTM E45 and ISO 4967. It categorizes inclusions by type (A, B, C, D) and thickness (thin/thick), supporting quality control in steel production and automotive applications.",
    image: "/images/image-analyzer/inclusion.png",
    alt: "Inclusion Analysis Module",
    rating: 4.8,
    reviews: 46,
    tag: "Metallographic Analysis",
    detail: "Non-metallic inclusion analysis in steel",
    apiCall: "/api/image-analyzer/inclusion",
    features: [
      "Automated detection of non-metallic inclusions per ASTM E45 and ISO 4967",
      "Classifies inclusions by type (A, B, C, D) and thickness (thin/thick)",
      "Measures inclusion size, count, and distribution",
      "User-defined filter conditions for accurate detection",
      "Detects oversized inclusions for defect analysis",
      "Generates detailed inclusion reports with histograms",
      "Compatible with optical and electron microscopy"
    ],
    additionalFeatures: [
      "Handles complex steel microstructures",
      "Interactive inclusion editing for manual corrections",
      "Exports data to spreadsheets and graphical formats",
      "Supports multiple samples for batch analysis",
      "Integrates with 4K digital microscopes for high-resolution imaging"
    ],
    images: [
      "/product/Inclusion1.jpg",
      "/product/Inclusion2.jpg",
      "/product/Inclusion3.jpg",
      "/product/Inclusion4.jpg"
    ],
    video: "/product/Inclusion.mp4",
    specifications: [
      { param: "Standards", value: "ASTM E45, ISO 4967" },
      { param: "Inclusion Size Range", value: "1 μm to 500 μm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Inclusion Type, Size, Count, Distribution" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 64,
    categorySlug: "image-analyzer",
    name: "Welding Analysis Setup",
    slug: "welding-analysis-setup",
    description: "The Welding Analysis Setup module evaluates weld imperfections, such as cracks, porosity, and inclusions, in metallic welds. Compliant with ISO 5817 and AWS D1.1, it quantifies weld quality for automotive, aerospace, and structural applications.",
    image: "/images/image-analyzer/welding-analysis-setup.png",
    alt: "Welding Analysis Setup Module",
    rating: 4.7,
    reviews: 41,
    tag: "Metallographic Analysis",
    detail: "Comprehensive weld imperfection analysis",
    apiCall: "/api/image-analyzer/welding-analysis-setup",
    features: [
      "Automated detection of weld imperfections per ISO 5817 and AWS D1.1",
      "Quantifies cracks, porosity, inclusions, and lack of fusion",
      "Measures weld bead geometry (width, height, penetration)",
      "User-defined filter conditions for defect detection",
      "Generates detailed weld quality reports with images",
      "Compatible with optical and electron microscopy",
      "Supports cross-sectional and surface weld analysis"
    ],
    additionalFeatures: [
      "Handles complex weld microstructures",
      "Interactive defect editing for manual corrections",
      "Exports data to spreadsheets and graphical formats",
      "Supports live video for real-time analysis",
      "Integrates with porosity and inclusion modules"
    ],
    images: [
      "/product/WeldingAnalysisSetup1.jpg",
      "/product/WeldingAnalysisSetup2.jpg",
      "/product/WeldingAnalysisSetup3.jpg",
      "/product/WeldingAnalysisSetup4.jpg"
    ],
    video: "/product/Welding_Analysis_Setup.mp4",
    specifications: [
      { param: "Standards", value: "ISO 5817, AWS D1.1" },
      { param: "Defect Size Range", value: "1 μm to 10 mm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Defect Type, Size, Geometry, Spreadsheet" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" }
    ]
  },
  {
    id: 65,
    categorySlug: "image-analyzer",
    name: "Porosity Estimation",
    slug: "porosity-estimation",
    description: "The Porosity Estimation module detects and quantifies porosity in castings and welds per BDG P 203 and ASTM E1245. It measures pore size, count, and distribution, supporting quality control in automotive and aerospace manufacturing.",
    image: "/images/image-analyzer/porosity-estimation.png",
    alt: "Porosity Estimation Module",
    rating: 4.8,
    reviews: 43,
    tag: "Metallographic Analysis",
    detail: "Quantitative porosity analysis",
    apiCall: "/api/image-analyzer/porosity-estimation",
    features: [
      "Automated detection of pores per BDG P 203 and ASTM E1245",
      "Measures pore size, count, and distribution",
      "Distinguishes gas pores, shrinkage cavities, and cracks",
      "User-defined filter conditions for accurate pore detection",
      "Generates 2D and 3D porosity maps with statistical reports",
      "Compatible with optical and computed tomography (CT) images",
      "Supports OK/NOK decisions for quality control"
    ],
    additionalFeatures: [
      "Handles complex casting and weld microstructures",
      "Plots sphericity vs. equivalent diameter for pore classification",
      "Exports data to spreadsheets and histograms",
      "Supports multiple samples for batch analysis",
      "Integrates with welding analysis for comprehensive defect reporting"
    ],
    images: [
      "/product/PorosityEstimation1.jpg",
      "/product/PorosityEstimation2.jpg",
      "/product/PorosityEstimation3.jpg",
      "/product/PorosityEstimation4.jpg"
    ],
    video: "/product/Porosity_Estimation.mp4",
    specifications: [
      { param: "Standards", value: "BDG P 203, ASTM E1245" },
      { param: "Pore Size Range", value: "1 μm to 10 mm" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Pore Size, Count, Distribution, 2D/3D Maps" },
      { param: "Image Formats", value: "JPEG, BMP, PNG, CT Scans" }
    ]
  },
  {
    id: 66,
    categorySlug: "image-analyzer",
    name: "Annotation",
    slug: "annotation",
    description: "The Annotation module enables labeling and markup of microscopic images for documentation and reporting. It supports text, arrows, shapes, and measurements, enhancing communication of metallographic analysis results in quality control and research.",
    image: "/images/image-analyzer/annotation.png",
    alt: "Annotation Module",
    rating: 4.6,
    reviews: 39,
    tag: "Metallographic Analysis",
    detail: "Image labeling and markup for documentation",
    apiCall: "/api/image-analyzer/annotation",
    features: [
      "Adds text, arrows, shapes, and measurements to microscopic images",
      "Supports customizable annotation styles and colors",
      "Integrates with grain, phase, and defect analysis modules",
      "Generates annotated images for reports and presentations",
      "Compatible with optical and electron microscopy",
      "User-friendly interface for rapid markup",
      "Supports live video for real-time annotation"
    ],
    additionalFeatures: [
      "Saves annotations as layers for non-destructive editing",
      "Exports annotated images in multiple formats",
      "Handles high-resolution images with zoom capabilities",
      "Supports batch annotation for multiple images",
      "Integrates with reporting tools for automated documentation"
    ],
    images: [
      "/product/Annotation1.jpg",
      "/product/Annotation2.jpg",
      "/product/Annotation3.jpg",
      "/product/Annotation4.jpg"
    ],
    video: "/product/Annotation.mp4",
    specifications: [
      { param: "Annotation Types", value: "Text, Arrows, Shapes, Measurements" },
      { param: "Resolution", value: "0.1 μm/pixel minimum" },
      { param: "Output", value: "Annotated Images, PDF Reports" },
      { param: "Image Formats", value: "JPEG, BMP, PNG" },
      { param: "Layer Support", value: "Non-destructive Annotation Layers" }
    ]
  },

  // Automatic Micro Hardness Tester
  {
    id: 26,
    categorySlug: "automatic-micro-hardness-tester",
    name: "Fully Automatic MVH-V",
    slug: "fully-automatic-mvh-v",
    description: "The Fully Automatic MVH-V is a state-of-the-art micro Vickers hardness tester designed for precise and automated hardness testing. Featuring motorized X-Y and Z motion, autofocus, auto reading, and automatic effective case graph generation, it supports a load range of 1g to 2000g (3000g optional). With manual override for all automation and an optional overview camera for component imaging and hardness profile direction, it is ideal for metallographic laboratories and quality control.",
    image: "/images/automatic-micro-hardness-tester/mvh-v.png",
    alt: "Fully Automatic MVH-V Micro Hardness Tester",
    rating: 4.9,
    reviews: 48,
    tag: "Automatic Micro Hardness Testing",
    detail: "Motorized motion with autofocus and case depth graphing",
    apiCall: "/api/automatic-micro-hardness/mvh-v",
    features: [
      "Motorized X-Y and Z motion for precise sample positioning",
      "Autofocus and auto reading for fully automated testing",
      "Manual override for all automation, ensuring flexibility",
      "Automatic effective case graph generation for hardness profiles",
      "Load range from 1g to 2000g, with optional 3000g extension",
      "Optional overview camera for complete component imaging and hardness profile direction via computer screen",
      "High-resolution CCD camera for clear indentation imaging",
      "PLC-based software for programmable test cycles and data analysis"
    ],
    additionalFeatures: [
      "Automatic hardness curve plotting and statistical analysis",
      "Supports Vickers and Knoop hardness testing per ISO and ASTM standards",
      "Data export in WORD, EXCEL, or PDF formats with customizable templates",
      "Integrated collision avoidance system for mechanical safety",
      "High-precision motorized XY stage with 2 µm positioning accuracy"
    ],
    images: [
      "/product/MVHV1.jpg",
      "/product/MVHV2.jpg",
      "/product/MVHV3.jpg",
      "/product/MVHV4.jpg"
    ],
    video: "/product/MVH_V.mp4",
    specifications: [
      { param: "Operation", value: "Fully Automatic with Manual Override" },
      { param: "Load Range", value: "1g to 2000g (3000g optional)" },
      { param: "Motion Control", value: "Motorized X-Y and Z" },
      { param: "Focusing", value: "Autofocus" },
      { param: "Indentation Measurement", value: "Auto Reading via CCD Camera" },
      { param: "Control System", value: "PLC-based with HMI" },
      { param: "Stage Dimensions", value: "110mm x 110mm (XY)" },
      { param: "Stage Travel", value: "50mm x 50mm (XY)" },
      { param: "Positioning Accuracy", value: "2 µm" },
      { param: "Optical System", value: "100x, 400x magnification" },
      { param: "Optional Features", value: "Overview camera for component imaging" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" }
    ],
    ordering: [
      { part: "160-2711-100", load: "1g to 2000g", voltage: "220V, 50/60Hz" },
      { part: "160-2711-102", load: "1g to 3000g with Overview Camera", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Vickers Indenter",
        subtitle: "For micro hardness testing",
        image: "/product/vickersIndenterMVHV.png"
      },
      {
        title: "Knoop Indenter",
        subtitle: "For specialized hardness testing",
        image: "/product/knoopIndenterMVHV.png"
      },
      {
        title: "Test Blocks",
        subtitle: "700HV for calibration",
        image: "/product/testBlocksMVHV.png"
      }
    ],
    literature: [
      { title: "Fully Automatic MVH-V User Manual", image: "/product/mvh-v-manual.png" },
      { title: "Fully Automatic MVH-V Brochure", image: "/product/mvh-v-brochure.png" },
      { title: "Micro Hardness Testing Guide", image: "/product/micro-hardness-guide.png" }
    ]
  },

  //Micro / Macro Hardness Tester Load Cell Based
  {
    id: 27,
    categorySlug: "micro-macro-hardness-tester-load-cell",
    name: "MVH-I C",
    slug: "mvh-i-c",
    description: "The MVH-I C is a versatile micro/macro hardness tester with load cell-based technology and closed-loop control, offering both manual and computerized operation. With a load range from 10gf to 30kgf, optional autofocus, and an optional auto XY stage, it is designed for precise Vickers and Knoop hardness testing in metallographic and quality control applications.",
    image: "/images/micro-macro-hardness-tester-load-cell/mvh-i-c.png",
    alt: "MVH-I C Micro Macro Hardness Tester Load Cell Based",
    rating: 4.8,
    reviews: 42,
    tag: "Load Cell Hardness Testing",
    detail: "Manual and computerized with closed-loop technology",
    apiCall: "/api/micro-macro-hardness/mvh-i-c",
    features: [
      "Load cell-based system with closed-loop technology for high accuracy",
      "Wide load range from 10gf to 30kgf for micro and macro testing",
      "Manual and computerized operation modes for flexibility",
      "Optional autofocus for enhanced automation",
      "Optional auto XY stage for precise sample positioning",
      "High-resolution CCD camera for clear indentation imaging",
      "Supports Vickers and Knoop hardness testing per ISO and ASTM standards",
      "User-friendly software for hardness measurement and data analysis"
    ],
    additionalFeatures: [
      "Automatic hardness value calculation and statistical reporting",
      "Data export in EXCEL, WORD, or PDF formats",
      "Manual override for fine-tuned control during testing",
      "Compact design suitable for laboratory environments",
      "Integrated safety features including overload protection"
    ],
    images: [
      "/product/MVHIC1.jpg",
      "/product/MVHIC2.jpg",
      "/product/MVHIC3.jpg",
      "/product/MVHIC4.jpg"
    ],
    video: "/product/MVH_I_C.mp4",
    specifications: [
      { param: "Operation", value: "Manual | Computerized" },
      { param: "Load Range", value: "10gf to 30kgf" },
      { param: "Load System", value: "Load cell-based with closed-loop technology" },
      { param: "Test Methods", value: "Vickers, Knoop" },
      { param: "Focusing", value: "Manual (Autofocus optional)" },
      { param: "Stage Control", value: "Manual (Auto XY stage optional)" },
      { param: "Stage Dimensions", value: "100mm x 100mm (XY)" },
      { param: "Stage Travel", value: "50mm x 50mm (XY)" },
      { param: "Positioning Accuracy", value: "2 µm (with auto XY stage)" },
      { param: "Optical System", value: "100x, 400x magnification" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" }
    ],
    ordering: [
      { part: "170-2811-200", config: "Manual, 10gf to 30kgf", voltage: "220V, 50/60Hz" },
      { part: "170-2811-202", config: "Computerized with Autofocus and Auto XY Stage", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Vickers Indenter",
        subtitle: "For micro and macro hardness testing",
        image: "/product/vickersIndenterMVHIC.png"
      },
      {
        title: "Knoop Indenter",
        subtitle: "For specialized hardness testing",
        image: "/product/knoopIndenterMVHIC.png"
      },
      {
        title: "Test Blocks",
        subtitle: "700HV and 200HV for calibration",
        image: "/product/testBlocksMVHIC.png"
      }
    ],
    literature: [
      { title: "MVH-I C User Manual", image: "/product/mvh-i-c-manual.png" },
      { title: "MVH-I C Brochure", image: "/product/mvh-i-c-brochure.png" },
      { title: "Micro and Macro Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },

  //Other Machines
  {
    id: 28,
    categorySlug: "electro-polishing-machine",
    name: "Electropol",
    slug: "electropol",
    description: "The Electropol is a high-efficiency electropolishing machine designed for rapid surface finishing, capable of polishing metal parts within 1 minute. Ideal for gold, silver, stainless steel, and other metals, it delivers a smooth, mirror-like finish with enhanced corrosion resistance and minimal material loss, perfect for jewelry, medical, and industrial applications.",
    image: "/images/electro-polishing-machines/electropol.png",
    alt: "Electropol Electro Polishing Machine",
    rating: 4.7,
    reviews: 38,
    tag: "Rapid Electropolishing",
    detail: "Polishes within 1 minute for high-throughput applications",
    apiCall: "/api/electro-polishing/electropol",
    features: [
      "Ultra-fast polishing within 1 minute for maximum efficiency",
      "Electrochemical process for smooth, mirror-like finishes",
      "Suitable for gold, silver, stainless steel, copper, and other metals",
      "Minimal material loss (0.0002-0.0003 inches per cycle)",
      "Enhances corrosion resistance through passivation",
      "Compact design with temperature-controlled electrolyte bath",
      "User-friendly interface with adjustable current settings"
    ],
    additionalFeatures: [
      "Automatic sludge removal for low maintenance",
      "Supports multiple electrolyte types for various metals",
      "Integrated safety features including overload protection",
      "Compliant with ASTM B912 and ISO 15730 standards",
      "Optional racking system for complex geometries"
    ],
    images: [
      "/product/Electropol1.jpg",
      "/product/Electropol2.jpg",
      "/product/Electropol3.jpg",
      "/product/Electropol4.jpg"
    ],
    video: "/product/Electropol.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Polishing Time", value: "Within 1 minute" },
      { param: "Material Removal", value: "0.0002-0.0003 inches per cycle" },
      { param: "Electrolyte Capacity", value: "2-5 liters (configurable)" },
      { param: "Current Density", value: "2-5 A/dm²" },
      { param: "Power Supply", value: "24V or 48V DC rectifier" },
      { param: "Tank Material", value: "Polypropylene" },
      { param: "Supported Metals", value: "Gold, Silver, Stainless Steel, Copper, Brass" },
      { param: "Electrical Supply", value: "220V, 50/60Hz, Single phase" }
    ],
    ordering: [
      { part: "180-2911-300", config: "Standard, 2L Electrolyte Tank", voltage: "220V, 50/60Hz" },
      { part: "180-2911-302", config: "Enhanced, 5L Electrolyte Tank with Racking System", voltage: "220V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Electrolyte Solutions",
        subtitle: "For gold, silver, stainless steel, and copper",
        image: "/product/electrolyteSolutionsElectropol.png"
      },
      {
        title: "Anode/Cathode Sets",
        subtitle: "For precise electrochemical polishing",
        image: "/product/anodeCathodeSetsElectropol.png"
      },
      {
        title: "Polishing Racks",
        subtitle: "For small and complex parts",
        image: "/product/polishingRacksElectropol.png"
      }
    ],
    literature: [
      { title: "Electropol User Manual", image: "/product/electropol-manual.png" },
      { title: "Electropol Brochure", image: "/product/electropol-brochure.png" },
      { title: "Electropolishing Guide", image: "/product/electropolishing-guide.png" }
    ]
  },
  {
    id: 29,
    categorySlug: "in-situ-metallography-kit",
    name: "Portpol",
    slug: "portpol",
    description: "The Portpol is a portable electro polisher designed for in-situ metallographic sample preparation in the field. Featuring a pen-type probe for precise polishing and etching, a compact 0.5L electrolyte reservoir, and battery-powered operation, it enables rapid surface preparation for microstructural analysis in applications such as power plants, pipelines, and weld inspections.",
    image: "/images/in-situ-metallography-kits/portpol.png",
    alt: "Portpol Portable Electro Polisher",
    rating: 4.7,
    reviews: 35,
    tag: "Portable Electropolishing",
    detail: "Pen-type probe for field metallography",
    apiCall: "/api/in-situ-metallography/portpol",
    features: [
      "Pen-type probe for precise electropolishing and etching",
      "Compact 0.5L electrolyte reservoir with 25W recirculation pump",
      "Battery-powered operation for field use without external power",
      "Supports polishing and etching modes with up to 60V output",
      "Lightweight design with ergonomic handle for easy handling",
      "Suitable for stainless steel, mild steel, and aluminum surfaces",
      "Rapid preparation for in-situ microstructural analysis"
    ],
    additionalFeatures: [
      "Electrolyte recirculation system for consistent results",
      "Adjustable timer (0 to 99 seconds) for controlled polishing",
      "Compatible with multiple electrolyte types for various metals",
      "Integrated safety features including short-circuit protection",
      "Portable carrying case for field transport"
    ],
    images: [
      "/product/Portpol1.jpg",
      "/product/Portpol2.jpg",
      "/product/Portpol3.jpg",
      "/product/Portpol4.jpg"
    ],
    video: "/product/Portpol.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Manual" },
      { param: "Electrolyte Reservoir", value: "0.5L" },
      { param: "Pump Power", value: "25W (recirculation)" },
      { param: "Voltage Output", value: "Up to 60V (polishing/etching modes)" },
      { param: "Polishing Timer", value: "0 to 99 seconds" },
      { param: "Supported Metals", value: "Stainless Steel, Mild Steel, Aluminum" },
      { param: "Power Supply", value: "230V AC or battery (rechargeable)" },
      { param: "Probe Type", value: "Pen-type with swabbing capability" },
      { param: "Weight", value: "2.5 kg (including battery)" }
    ],
    ordering: [
      { part: "190-3011-500", config: "Portpol with 0.5L Reservoir and Battery", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Electrolyte Solutions",
        subtitle: "For stainless steel, mild steel, and aluminum",
        image: "/product/electrolyteSolutionsPortpol.png"
      },
      {
        title: "Swabbing Pads",
        subtitle: "For pen-type probe",
        image: "/product/swabbingPadsPortpol.png"
      },
      {
        title: "Replacement Probes",
        subtitle: "For electropolishing and etching",
        image: "/product/replacementProbesPortpol.png"
      }
    ],
    literature: [
      { title: "Portpol User Manual", image: "/product/portpol-manual.png" },
      { title: "Portpol Brochure", image: "/product/portpol-brochure.png" },
      { title: "In-situ Metallography Guide", image: "/product/in-situ-metallography-guide.png" }
    ]
  },
  {
    id: 30,
    categorySlug: "in-situ-metallography-kit",
    name: "Portable Microscope Image Analyzer",
    slug: "portable-microscope-image-analyzer",
    description: "The Portable Microscope Image Analyzer is a compact, battery-powered device for in-situ metallographic analysis, offering up to 800x magnification and real-time image capture. Equipped with a 3.2MP CMOS camera and USB-connected image analysis software, it enables on-site microstructure examination for applications like power plants, pipelines, and weld inspections.",
    image: "/images/in-situ-metallography-kits/portable-microscope.png",
    alt: "Portable Microscope Image Analyzer",
    rating: 4.8,
    reviews: 38,
    tag: "Portable Microscopy",
    detail: "High-magnification field microstructure analysis",
    apiCall: "/api/in-situ-metallography/portable-microscope-image-analyzer",
    features: [
      "Up to 800x magnification with 10x, 20x, 40x objectives",
      "3.2MP CMOS camera for high-resolution image capture",
      "USB-connected image analysis software for real-time processing",
      "Battery-powered operation for field use without external power",
      "LED illumination with 6V-20W halogen bulb for bright imaging",
      "Suitable for microstructure analysis and weld quality inspection",
      "Compact and lightweight design for easy portability"
    ],
    additionalFeatures: [
      "Rugged carrying case for field transport",
      "Stage scanning movement for precise sample positioning",
      "Supports export of images and reports in PDF or JPEG formats",
      "Integrated software for grain size and phase analysis",
      "Anti-vibration base for stable field operation"
    ],
    images: [
      "/product/PortableMicroscope1.jpg",
      "/product/PortableMicroscope2.jpg",
      "/product/PortableMicroscope3.jpg",
      "/product/PortableMicroscope4.jpg"
    ],
    video: "/product/Portable_Microscope_Image_Analyzer.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Manual" },
      { param: "Magnification", value: "100x to 800x (10x, 20x, 40x objectives)" },
      { param: "Camera", value: "3.2MP CMOS, USB-connected" },
      { param: "Illumination", value: "LED with 6V-20W halogen bulb" },
      { param: "Software", value: "Image analysis for grain size and phase analysis" },
      { param: "Power Supply", value: "230V AC or battery (rechargeable)" },
      { param: "Stage", value: "Manual scanning, 10mm x 10mm travel" },
      { param: "Weight", value: "1.8 kg (including battery)" }
    ],
    ordering: [
      { part: "190-3011-600", config: "Portable Microscope with 3.2MP Camera", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Objective Lenses",
        subtitle: "10x, 20x, 40x for varying magnification",
        image: "/product/objectiveLensesMicroscope.png"
      },
      {
        title: "Calibration Slides",
        subtitle: "For microscope calibration",
        image: "/product/calibrationSlidesMicroscope.png"
      },
      {
        title: "Cleaning Kit",
        subtitle: "For lens and camera maintenance",
        image: "/product/cleaningKitMicroscope.png"
      }
    ],
    literature: [
      { title: "Portable Microscope Image Analyzer User Manual", image: "/product/portable-microscope-manual.png" },
      { title: "Portable Microscope Image Analyzer Brochure", image: "/product/portable-microscope-brochure.png" },
      { title: "In-situ Metallography Guide", image: "/product/in-situ-metallography-guide.png" }
    ]
  },
  {
    id: 31,
    categorySlug: "in-situ-metallography-kit",
    name: "Replica",
    slug: "replica",
    description: "The Replica is a non-destructive surface replication system for in-situ metallographic analysis, enabling high-precision 3D surface replication with 0.1µm accuracy. Using cellulose acetate films and SiliKem compound, it captures detailed microstructures for off-site analysis, ideal for power plants, pipelines, and weld inspections.",
    image: "/images/in-situ-metallography-kits/replica.png",
    alt: "Replica Surface Replication System",
    rating: 4.6,
    reviews: 32,
    tag: "Surface Replication",
    detail: "Non-destructive 3D microstructure replication",
    apiCall: "/api/in-situ-metallography/replica",
    features: [
      "High-precision 3D surface replication with 0.1µm accuracy",
      "Cellulose acetate films in 35, 50, 75, 180 µm thicknesses",
      "SiliKem replication compound for detailed microstructure capture",
      "Non-destructive method for field metallographic analysis",
      "Rapid replication process completed in under 3 minutes",
      "Suitable for power plants, pipelines, and weld quality assessment",
      "Portable kit for easy field application"
    ],
    additionalFeatures: [
      "Compatible with portable microscopes for immediate analysis",
      "Storage case for safe transport of replica films",
      "Supports replication of complex geometries and rough surfaces",
      "No power supply required for replication process",
      "Compliant with ASTM E1351 standards for replication"
    ],
    images: [
      "/product/Replica1.jpg",
      "/product/Replica2.jpg",
      "/product/Replica3.jpg",
      "/product/Replica4.jpg"
    ],
    video: "/product/Replica.mp4",
    specifications: [
      { param: "Operation", value: "Manual, Non-destructive" },
      { param: "Replication Accuracy", value: "0.1µm" },
      { param: "Replication Media", value: "Cellulose acetate (35, 50, 75, 180 µm), SiliKem compound" },
      { param: "Process Time", value: "Under 3 minutes" },
      { param: "Applications", value: "Microstructure analysis, weld inspection, damage assessment" },
      { param: "Power Supply", value: "None required" },
      { param: "Kit Weight", value: "0.5 kg" }
    ],
    ordering: [
      { part: "190-3011-700", config: "Replica Kit with Cellulose Acetate and SiliKem", voltage: "None" }
    ],
    consumables: [
      {
        title: "Cellulose Acetate Film",
        subtitle: "35, 50, 75, 180 µm for surface replication",
        image: "/product/celluloseAcetateFilm.png"
      },
      {
        title: "SiliKem Replication Compound",
        subtitle: "0.1µm accuracy for 3D replicas",
        image: "/product/siliKemCompound.png"
      },
      {
        title: "Backing Slides",
        subtitle: "For replica mounting and storage",
        image: "/product/backingSlidesReplica.png"
      }
    ],
    literature: [
      { title: "Replica User Manual", image: "/product/replica-manual.png" },
      { title: "Replica Brochure", image: "/product/replica-brochure.png" },
      { title: "In-situ Metallography Guide", image: "/product/in-situ-metallography-guide.png" }
    ]
  },
  {
    id: 32,
    categorySlug: "in-situ-metallography-kit",
    name: "Portgrinder",
    slug: "portgrinder",
    description: "The Portgrinder is a portable grinding tool designed for in-situ metallographic sample preparation. Featuring a high-torque motor, variable speed from 1000 to 25,000 rpm, and 38mm PSA discs, it offers flexible and efficient grinding for field applications such as power plants, pipelines, and weld inspections.",
    image: "/images/in-situ-metallography-kits/portgrinder.png",
    alt: "Portgrinder Portable Grinder",
    rating: 4.7,
    reviews: 36,
    tag: "Portable Grinding",
    detail: "High-torque grinding for field metallography",
    apiCall: "/api/in-situ-metallography/portgrinder",
    features: [
      "High-torque motor with variable speed from 1000 to 25,000 rpm",
      "38mm PSA discs for efficient and flexible grinding",
      "Battery-powered operation for field use without external power",
      "90-degree ergonomic handle for comfortable operation",
      "Suitable for stainless steel, mild steel, and aluminum surfaces",
      "Rapid surface preparation for in-situ metallographic analysis",
      "Lightweight design for easy portability"
    ],
    additionalFeatures: [
      "Quick disc replacement with PSA system",
      "Rugged carrying case for field transport",
      "Anti-vibration design for stable grinding",
      "Supports wet and dry grinding modes",
      "Integrated dust collection port for cleaner operation"
    ],
    images: [
      "/product/Portgrinder1.jpg",
      "/product/Portgrinder2.jpg",
      "/product/Portgrinder3.jpg",
      "/product/Portgrinder4.jpg"
    ],
    video: "/product/Portgrinder.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Manual" },
      { param: "Disc Size", value: "38mm (PSA)" },
      { param: "Speed", value: "1000 to 25,000 rpm (variable)" },
      { param: "Motor", value: "High-torque, 200W" },
      { param: "Supported Materials", value: "Stainless Steel, Mild Steel, Aluminum" },
      { param: "Power Supply", value: "230V AC or battery (rechargeable)" },
      { param: "Weight", value: "1.2 kg (including battery)" }
    ],
    ordering: [
      { part: "190-3011-800", config: "Portgrinder with 38mm PSA Discs and Battery", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "PSA Grinding Discs",
        subtitle: "38mm for coarse and fine grinding",
        image: "/product/psaGrindingDiscsPortgrinder.png"
      },
      {
        title: "Polishing Pads",
        subtitle: "38mm for intermediate polishing",
        image: "/product/polishingPadsPortgrinder.png"
      },
      {
        title: "Dust Collection Filters",
        subtitle: "For cleaner operation",
        image: "/product/dustCollectionFiltersPortgrinder.png"
      }
    ],
    literature: [
      { title: "Portgrinder User Manual", image: "/product/portgrinder-manual.png" },
      { title: "Portgrinder Brochure", image: "/product/portgrinder-brochure.png" },
      { title: "In-situ Metallography Guide", image: "/product/in-situ-metallography-guide.png" }
    ]
  },
  {
    "id": 72,
    "categorySlug": "jominy-end-quench-hardenability-setup",
    "name": "Hardness Fixture and Chiller",
    "slug": "hardness-fixture-and-chiller",
    "description": "The Hardness Fixture and Chiller is an advanced system for Jominy end quench hardenability testing, featuring a motorized fixture for successive hardness indentations and a fully automatic hardness tester with a programmable stage. Designed for ASTM A255 and ISO 642 compliance, it ensures precise positioning and rapid cooling for accurate hardenability evaluation of steels, ideal for metallurgical labs and steel mills.",
    "image": "/images/jominy-end-quench/hardness-fixture-and-chiller.png",
    "alt": "Hardness Fixture and Chiller for Jominy End Quench Testing",
    "rating": 4.9,
    "reviews": 40,
    "tag": "Hardenability Testing",
    "detail": "Motorized fixture and automatic hardness tester for Jominy testing",
    "apiCall": "/api/jominy-end-quench/hardness-fixture-and-chiller",
    "features": [
      "Motorized fixture for successive Rockwell C (HRC) indentations with 0.01 mm positioning accuracy",
      "Fully automatic hardness tester with programmable XY stage for direct Jominy hardness testing",
      "Integrated chiller unit maintaining 24°C ± 1°C water for consistent quenching per ASTM A255",
      "Digital micrometer for indexing indents at 1.5 mm intervals (alloy steels) or 0.75 mm (carbon steels)",
      "Automated hardness measurement at 1/16 in. (1.6 mm) intervals, plotting Jominy curves",
      "Supports Vickers (HV) and Rockwell (HRC) scales with conversion per ASTM E140",
      "Compliant with ASTM A255, ISO 642, SAE J406, and DIN 50191 standards"
    ],
    "additionalFeatures": [
      "Touchscreen interface for programming test sequences and data logging",
      "Closed-loop water management system with 50L tank and 0.5 kW pump",
      "Specimen holder with automatic centering for 25 mm x 100 mm Jominy bars",
      "Graphical output of hardenability curves with export to CSV/PDF formats",
      "Anti-vibration base for stable hardness testing in industrial environments"
    ],
    "images": [
      "/product/HardnessFixtureAndChiller1.jpg",
      "/product/HardnessFixtureAndChiller2.jpg",
      "/product/HardnessFixtureAndChiller3.jpg",
      "/product/HardnessFixtureAndChiller4.jpg"
    ],
    "video": "/product/Hardness_Fixture_And_Chiller.mp4",
    "specifications": [
      { "param": "Hardness Scales", "value": "Rockwell C (HRC), Vickers (HV)" },
      { "param": "Positioning Accuracy", "value": "0.01 mm" },
      { "param": "Indentation Intervals", "value": "1.5 mm (alloy), 0.75 mm (carbon), 1.6 mm (standard)" },
      { "param": "Chiller Water Temperature", "value": "24°C ± 1°C" },
      { "param": "Tank Capacity", "value": "50 L" },
      { "param": "Pump Power", "value": "0.5 kW" },
      { "param": "Standards", "value": "ASTM A255, ISO 642, SAE J406, DIN 50191" },
      { "param": "Weight", "value": "150 kg" },
      { "param": "Dimensions", "value": "800mm x 600mm x 1200mm (L x W x H)" },
      { "param": "Power Supply", "value": "220-240V AC, 50/60 Hz" }
    ],
    "ordering": [
      { "part": "290-3811-600", "config": "Hardness Fixture and Chiller, Automatic Jominy Tester", "voltage": "220-240V AC" }
    ],
    "consumables": [
      {
        "title": "Diamond Indenter",
        "subtitle": "For Vickers hardness testing",
        "image": "/product/diamondIndenter.png"
      },
      {
        "title": "Rockwell C Indenter",
        "subtitle": "120° diamond cone for HRC testing",
        "image": "/product/rockwellIndenter.png"
      },
      {
        "title": "Jominy Specimen Holder",
        "subtitle": "For 25 mm x 100 mm bars",
        "image": "/product/specimenHolder.png"
      }
    ],
    "literature": [
      { "title": "Hardness Fixture and Chiller User Manual", "image": "/product/hardness-fixture-manual.png" },
      { "title": "Jominy End Quench Testing Guide", "image": "/product/jominy-testing-guide.png" },
      { "title": "Hardenability Standards Brochure", "image": "/product/hardenability-brochure.png" }
    ]
  },
  {
    "id": 73,
    "categorySlug": "cnc-tensile-sample-preparation-machines",
    "name": "CNC Tensile Sample Preparation Machines",
    "slug": "cnc-tensile-sample-preparation-machines",
    "description": "The CNC Tensile Sample Preparation Machines are advanced, user-friendly systems designed for precise and repeatable preparation of flat and round tensile specimens, including threaded and Jominy samples. Featuring powerful CNC programs, high-speed milling, and a modular design, they support ASTM E8, ISO 6892, and ASTM A255 standards, offering both floor and tabletop models for metallurgical labs and high-volume manufacturing facilities.",
    "image": "/images/cnc-tensile-sample-preparation/cnc-tensile-sample-preparation-machines.png",
    "alt": "CNC Tensile Sample Preparation Machines for Tensile and Jominy Testing",
    "rating": 4.9,
    "reviews": 60,
    "tag": "Tensile Sample Preparation",
    "detail": "High-precision CNC machines for tensile and Jominy sample preparation",
    "apiCall": "/api/cnc-tensile-sample-preparation/cnc-tensile-sample-preparation-machines",
    "features": [
      "High-precision milling with 0.01 mm (0.0004 in.) accuracy for flat, round, and threaded tensile specimens",
      "Rapid sample preparation with triple clamping fixture, processing up to three 25 mm stacks in one cycle",
      "Repeatable results meeting ASTM E8, ISO 6892, DIN, JIS, and ASTM A255 (Jominy) standards",
      "Threading facility for preparing threaded tensile specimens and button-head bars",
      "Powerful CNC programs with TensileSoft™ and Carbon software for intuitive operation and custom dimensions",
      "Modular design with floor and tabletop models for diverse lab and production environments",
      "Optional Jominy sample preparation module for 25 mm x 100 mm hardenability test bars"
    ],
    "additionalFeatures": [
      "10-inch touchscreen interface with preloaded ASTM/ISO standards for one-touch milling",
      "Automatic tool changer with 10-tool capacity for seamless transitions between sample types",
      "High-torque 3.2 kW servo motor supporting materials up to 60 HRC, including Inconel",
      "WiFi/Ethernet connectivity for remote software updates and data export to CSV/PDF",
      "Vibration-dampening granite frame (floor model) or cast iron frame (tabletop) for stability"
    ],
    "images": [
      "/product/CNCTensileSamplePreparation1.jpg",
      "/product/CNCTensileSamplePreparation2.jpg",
      "/product/CNCTensileSamplePreparation3.jpg",
      "/product/CNCTensileSamplePreparation4.jpg"
    ],
    "video": "/product/CNC_Tensile_Sample_Preparation.mp4",
    "specifications": [
      { "param": "Accuracy", "value": "0.01 mm (0.0004 in.)" },
      { "param": "Specimen Types", "value": "Flat, Round, Threaded, Jominy, Button-Head, Fatigue" },
      { "param": "Max Specimen Size (Flat)", "value": "350 mm L x 50 mm W x 12.5 mm T" },
      { "param": "Max Specimen Size (Round)", "value": "100 mm L x 25 mm Dia" },
      { "param": "Jominy Specimen Size", "value": "25 mm Dia x 100 mm L" },
      { "param": "Motor Power", "value": "3.2 kW Servo" },
      { "param": "Spindle Speed", "value": "Up to 10,000 RPM" },
      { "param": "Standards", "value": "ASTM E8, ISO 6892, ASTM A255, DIN, JIS" },
      { "param": "Tabletop Dimensions", "value": "1200 mm x 1200 mm x 1300 mm (L x W x H)" },
      { "param": "Floor Model Dimensions", "value": "2000 mm x 1500 mm x 1800 mm (L x W x H)" },
      { "param": "Weight (Tabletop/Floor)", "value": "500 kg / 1200 kg" },
      { "param": "Power Supply", "value": "220-240V AC, 50/60 Hz" }
    ],
    "ordering": [
      { "part": "290-3811-700", "config": "CNC Tensile Sample Preparation Machine, Tabletop Model", "voltage": "220-240V AC" },
      { "part": "290-3811-701", "config": "CNC Tensile Sample Preparation Machine, Floor Model with Jominy Module", "voltage": "220-240V AC" }
    ],
    "consumables": [
      {
        "title": "End Mills",
        "subtitle": "Carbide end mills for tensile and Jominy samples",
        "image": "/product/endMills.png"
      },
      {
        "title": "Clamping Fixtures",
        "subtitle": "Triple-stack and Jominy-specific fixtures",
        "image": "/product/clampingFixtures.png"
      },
      {
        "title": "Cutting Fluid",
        "subtitle": "500 mL for spindle cooling and milling",
        "image": "/product/cuttingFluid.png"
      }
    ],
    "literature": [
      { "title": "CNC Tensile Sample Preparation Machine User Manual", "image": "/product/cnc-tensile-manual.png" },
      { "title": "Tensile and Jominy Testing Guide", "image": "/product/tensile-jominy-guide.png" },
      { "title": "CNC Sample Preparation Brochure", "image": "/product/cnc-sample-preparation-brochure.png" }
    ]
  },
  {
    "id": 74,
    "categorySlug": "transparent-mould-making-system",
    "name": "Transmount",
    "slug": "transmount",
    "description": "The Transmount is a high-performance, transparent silicone mould making system designed for precision casting of complex parts. Its platinum-based, translucent rubber with a 1:1 mixing ratio ensures bubble-free moulds with exceptional detail reproduction, ideal for resin, plaster, concrete, and low-melt metal casting in metallurgical, artistic, and industrial applications.",
    "image": "/images/transparent-mould-making/transmount.png",
    "alt": "Transmount Transparent Silicone Mould Making System",
    "rating": 4.8,
    "reviews": 45,
    "tag": "Mould Making",
    "detail": "Translucent silicone system for precision mould making",
    "apiCall": "/api/transparent-mould-making/transmount",
    "features": [
      "Platinum-based, translucent silicone rubber with 13 Shore A hardness for flexible, durable moulds",
      "1:1 mixing ratio for easy, precise preparation with 6-8 hour curing time at room temperature",
      "High dimensional stability and 0.01 mm reproduction accuracy for intricate details and undercuts",
      "Compatible with epoxy, polyurethane, acrylic resins, plaster, cement, and low-melt metals (up to 250°C)",
      "Transparency allows visual monitoring of casting process and precise seam cutting for block moulds",
      "Non-toxic, solvent-free, and odorless, certified for safe use in professional and hobby applications",
      "Reusable moulds with high tear resistance, supporting multiple casts without degradation"
    ],
    "additionalFeatures": [
      "Supports silicone pigments for custom-colored moulds, enhancing aesthetic versatility",
      "Low-viscosity formula minimizes bubbles, ensuring flawless mould surfaces",
      "Optional vacuum degassing compatibility for enhanced clarity and detail",
      "Food-grade option available for culinary moulds (e.g., chocolate, sugar casting)",
      "Integrated release agent compatibility for easy demoulding of complex shapes"
    ],
    "images": [
      "/product/Transmount1.jpg",
      "/product/Transmount2.jpg",
      "/product/Transmount3.jpg",
      "/product/Transmount4.jpg"
    ],
    "video": "/product/Transmount.mp4",
    "specifications": [
      { "param": "Hardness", "value": "13 Shore A" },
      { "param": "Mixing Ratio", "value": "1:1 by volume" },
      { "param": "Curing Time", "value": "6-8 hours at 25°C" },
      { "param": "Reproduction Accuracy", "value": "0.01 mm" },
      { "param": "Temperature Resistance", "value": "Up to 250°C" },
      { "param": "Viscosity", "value": "Low, 5000 cP" },
      { "param": "Standards", "value": "Non-toxic, Food-grade (optional)" },
      { "param": "Kit Sizes", "value": "250g, 1kg, 5kg" },
      { "param": "Weight (1kg Kit)", "value": "1.2 kg" },
      { "param": "Dimensions (1kg Kit)", "value": "200mm x 150mm x 100mm (L x W x H)" }
    ],
    "ordering": [
      { "part": "290-3811-800", "config": "Transmount Transparent Silicone Mould Making Kit, 1kg", "voltage": "None" },
      { "part": "290-3811-801", "config": "Transmount with Food-Grade Option, 1kg", "voltage": "None" }
    ],
    "consumables": [
      {
        "title": "Silicone Pigments",
        "subtitle": "8 colors, 10mL each for custom mould coloring",
        "image": "/product/siliconePigments.png"
      },
      {
        "title": "Release Agent",
        "subtitle": "500mL for easy demoulding",
        "image": "/product/releaseAgent.png"
      },
      {
        "title": "Mixing Cups and Stirrers",
        "subtitle": "Disposable, 100/pk for precise mixing",
        "image": "/product/mixingCups.png"
      }
    ],
    "literature": [
      { "title": "Transmount User Manual", "image": "/product/transmount-manual.png" },
      { "title": "Transparent Mould Making Guide", "image": "/product/mould-making-guide.png" },
      { "title": "Silicone Casting Brochure", "image": "/product/silicone-casting-brochure.png" }
    ]
  },



  // Hardness Testers
  {
    id: 34,
    categorySlug: "hardness-testers",
    name: "Superficial Rockwell Hardness Tester",
    slug: "superficial-rockwell-hardness-tester",
    description: "The Superficial Rockwell Hardness Tester is designed for precise hardness testing of thin, soft, or surface-hardened materials using low test loads. Compliant with ASTM E18 and ISO 6508, it measures superficial Rockwell scales (HRN, HRT) with automatic load application, ideal for laboratory and quality control applications.",
    image: "/images/hardness-testers/superficial-rockwell.png",
    alt: "Superficial Rockwell Hardness Tester",
    rating: 4.8,
    reviews: 42,
    tag: "Superficial Rockwell Testing",
    detail: "Low-load testing for thin and soft materials",
    apiCall: "/api/hardness-testers/superficial-rockwell",
    features: [
      "Measures superficial Rockwell scales (HR15N, HR30N, HR45N, HR15T, HR30T, HR45T)",
      "Automatic load application with test forces of 15kgf, 30kgf, and 45kgf",
      "High-precision digital display for accurate hardness readings",
      "Motorized Z-axis for automated sample positioning",
      "Compliant with ASTM E18 and ISO 6508 standards",
      "Supports testing of thin sheets, coatings, and case-hardened surfaces",
      "User-friendly interface with data storage and export capabilities"
    ],
    additionalFeatures: [
      "Automatic conversion to Brinell (HB) and Vickers (HV) scales",
      "Anti-vibration base for stable measurements",
      "Calibration blocks included for HRC and HRN scales",
      "Optional software for statistical analysis and reporting",
      "Safety interlocks for operator protection"
    ],
    images: [
      "/product/SuperficialRockwell1.jpg",
      "/product/SuperficialRockwell2.jpg",
      "/product/SuperficialRockwell3.jpg",
      "/product/SuperficialRockwell4.jpg"
    ],
    video: "/product/Superficial_Rockwell_Hardness_Tester.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Test Scales", value: "HR15N, HR30N, HR45N, HR15T, HR30T, HR45T" },
      { param: "Test Loads", value: "15kgf, 30kgf, 45kgf" },
      { param: "Indenter", value: "Diamond cone, 1/16-inch steel ball" },
      { param: "Resolution", value: "0.1 HR" },
      { param: "Stage Travel", value: "50mm (Z-axis)" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "600mm x 400mm x 800mm (W x D x H)" },
      { param: "Weight", value: "80 kg" }
    ],
    ordering: [
      { part: "210-3211-100", config: "Superficial Rockwell with Motorized Z-axis", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Diamond Cone Indenter",
        subtitle: "For superficial Rockwell testing",
        image: "/product/diamondConeIndenter.png"
      },
      {
        title: "1/16-inch Steel Ball Indenter",
        subtitle: "For HR15T, HR30T, HR45T scales",
        image: "/product/steelBallIndenter.png"
      },
      {
        title: "Superficial Rockwell Test Blocks",
        subtitle: "HR30N, HR30T for calibration",
        image: "/product/superficialTestBlocks.png"
      }
    ],
    literature: [
      { title: "Superficial Rockwell Hardness Tester User Manual", image: "/product/superficial-rockwell-manual.png" },
      { title: "Superficial Rockwell Hardness Tester Brochure", image: "/product/superficial-rockwell-brochure.png" },
      { title: "Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },
  {
    id: 35,
    categorySlug: "hardness-testers",
    name: "Portable Leeb Hardness Tester",
    slug: "portable-leeb-hardness-tester",
    description: "The Portable Leeb Hardness Tester is a compact, non-destructive device for on-site hardness testing of large or complex metal parts. Using the Leeb rebound method, it measures hardness in multiple scales (HL, HRC, HRB, HB, HV) and complies with ASTM A956, ideal for field applications like pipelines and heavy machinery.",
    image: "/images/hardness-testers/portable-leeb.png",
    alt: "Portable Leeb Hardness Tester",
    rating: 4.7,
    reviews: 40,
    tag: "Leeb Hardness Testing",
    detail: "Non-destructive field hardness testing",
    apiCall: "/api/hardness-testers/portable-leeb",
    features: [
      "Measures hardness in Leeb (HL), Rockwell (HRC, HRB), Brinell (HB), and Vickers (HV) scales",
      "Dynamic rebound method with D-type probe for rapid testing",
      "Compact design with color TFT display and IP65 protection",
      "Automatic probe direction detection for versatile use",
      "Compliant with ASTM A956 standards",
      "Battery-powered for field operation without external power",
      "USB interface for data upload and reporting"
    ],
    additionalFeatures: [
      "High/low tolerance alarm for quality control",
      "Software for data analysis and printing",
      "Supports multiple probe types (D, C, DL) for varied applications",
      "Rugged carrying case for field transport",
      "Calibration test block included for accuracy"
    ],
    images: [
      "/product/PortableLeeb1.jpg",
      "/product/PortableLeeb2.jpg",
      "/product/PortableLeeb3.jpg",
      "/product/PortableLeeb4.jpg"
    ],
    video: "/product/Portable_Leeb_Hardness_Tester.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Manual" },
      { param: "Test Scales", value: "HL, HRC, HRB, HB, HV" },
      { param: "Probe", value: "D-type (optional C, DL)" },
      { param: "Measuring Range", value: "170-960 HLD" },
      { param: "Accuracy", value: "±6 HLD" },
      { param: "Power Supply", value: "Rechargeable battery" },
      { param: "Weight", value: "0.5 kg" },
      { param: "Dimensions", value: "150mm x 80mm x 30mm (L x W x H)" }
    ],
    ordering: [
      { part: "210-3211-200", config: "Portable Leeb with D-type Probe", voltage: "Battery-powered" }
    ],
    consumables: [
      {
        title: "Leeb Test Block",
        subtitle: "For calibration of D-type probe",
        image: "/product/leebTestBlock.png"
      },
      {
        title: "Replacement D-type Probe",
        subtitle: "For Leeb hardness testing",
        image: "/product/dTypeProbe.png"
      },
      {
        title: "Coupling Gel",
        subtitle: "For improved probe contact",
        image: "/product/couplingGel.png"
      }
    ],
    literature: [
      { title: "Portable Leeb Hardness Tester User Manual", image: "/product/portable-leeb-manual.png" },
      { title: "Portable Leeb Hardness Tester Brochure", image: "/product/portable-leeb-brochure.png" },
      { title: "Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },
  {
    id: 36,
    categorySlug: "hardness-testers",
    name: "Portable Brinell Hardness Tester",
    slug: "portable-brinell-hardness-tester",
    description: "The Portable Brinell Hardness Tester is a lightweight, user-friendly device for on-site testing of large or coarse-grained metal parts. Using a 3000kgf load and carbide ball indenter, it measures Brinell hardness (HB) with high reliability, compliant with ASTM E10 and ISO 6506, ideal for forgings and castings.",
    image: "/images/hardness-testers/portable-brinell.png",
    alt: "Portable Brinell Hardness Tester",
    rating: 4.6,
    reviews: 38,
    tag: "Brinell Hardness Testing",
    detail: "Portable testing for coarse materials",
    apiCall: "/api/hardness-testers/portable-brinell",
    features: [
      "Measures Brinell hardness (HB) with 3000kgf test load",
      "10mm carbide ball indenter for robust testing",
      "Lightweight design, under 4.5kg, for field portability",
      "Simple operation with single hammer blow measurement",
      "Compliant with ASTM E10 and ISO 6506 standards",
      "Digital microscope for accurate indentation reading",
      "Suitable for forgings, castings, and heavy steel parts"
    ],
    additionalFeatures: [
      "Carrying case for easy transport",
      "Optional test blocks for calibration",
      "Supports conversion to Rockwell and Vickers scales",
      "Rugged construction for harsh environments",
      "Minimal surface preparation required"
    ],
    images: [
      "/product/PortableBrinell1.jpg",
      "/product/PortableBrinell2.jpg",
      "/product/PortableBrinell3.jpg",
      "/product/PortableBrinell4.jpg"
    ],
    video: "/product/Portable_Brinell_Hardness_Tester.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Manual" },
      { param: "Test Scale", value: "Brinell (HB)" },
      { param: "Test Load", value: "3000kgf" },
      { param: "Indenter", value: "10mm carbide ball" },
      { param: "Measuring Range", value: "32-650 HB" },
      { param: "Accuracy", value: "±3% HB" },
      { param: "Power Supply", value: "None (mechanical)" },
      { param: "Weight", value: "4.5 kg" },
      { param: "Dimensions", value: "300mm x 150mm x 100mm (L x W x H)" }
    ],
    ordering: [
      { part: "210-3211-300", config: "Portable Brinell with 10mm Indenter", voltage: "None" }
    ],
    consumables: [
      {
        title: "Brinell Test Block",
        subtitle: "HB 200-300 for calibration",
        image: "/product/brinellTestBlock.png"
      },
      {
        title: "10mm Carbide Ball",
        subtitle: "Replacement indenter",
        image: "/product/carbideBallIndenter.png"
      },
      {
        title: "Digital Microscope",
        subtitle: "For indentation measurement",
        image: "/product/digitalMicroscopeBrinell.png"
      }
    ],
    literature: [
      { title: "Portable Brinell Hardness Tester User Manual", image: "/product/portable-brinell-manual.png" },
      { title: "Portable Brinell Hardness Tester Brochure", image: "/product/portable-brinell-brochure.png" },
      { title: "Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },
  {
    id: 37,
    categorySlug: "hardness-testers",
    name: "Rockwell Hardness Tester",
    slug: "rockwell-hardness-tester",
    description: "The Rockwell Hardness Tester is a versatile benchtop system for precise hardness testing of metals using standard Rockwell scales (HRA, HRB, HRC). With fully automated load/unload procedures and digital readouts, it complies with ASTM E18 and ISO 6508, suitable for laboratories, workshops, and quality control.",
    image: "/images/hardness-testers/rockwell.png",
    alt: "Rockwell Hardness Tester",
    rating: 4.9,
    reviews: 48,
    tag: "Rockwell Hardness Testing",
    detail: "Automated testing for standard Rockwell scales",
    apiCall: "/api/hardness-testers/rockwell",
    features: [
      "Measures standard Rockwell scales (HRA, HRB, HRC, HRE, HRF)",
      "Automatic load application with test forces of 60kgf, 100kgf, 150kgf",
      "Digital display with 0.1 HR resolution for accurate readings",
      "Motorized stage for precise sample positioning",
      "Compliant with ASTM E18 and ISO 6508 standards",
      "Automatic conversion to Brinell (HB) and Vickers (HV) scales",
      "Robust design for high-throughput testing"
    ],
    additionalFeatures: [
      "Software for statistical analysis and data export",
      "Anti-vibration base for stable measurements",
      "Calibration blocks included for HRC and HRB scales",
      "Optional motorized Z-axis for fully automated operation",
      "Safety cover for operator protection"
    ],
    images: [
      "/product/Rockwell1.jpg",
      "/product/Rockwell2.jpg",
      "/product/Rockwell3.jpg",
      "/product/Rockwell4.jpg"
    ],
    video: "/product/Rockwell_Hardness_Tester.mp4",
    specifications: [
      { param: "Operation", value: "Automatic" },
      { param: "Test Scales", value: "HRA, HRB, HRC, HRE, HRF" },
      { param: "Test Loads", value: "60kgf, 100kgf, 150kgf" },
      { param: "Indenter", value: "Diamond cone, 1/16-inch steel ball" },
      { param: "Resolution", value: "0.1 HR" },
      { param: "Stage Travel", value: "100mm (X-axis), 50mm (Z-axis)" },
      { param: "Power Supply", value: "230V, 50/60Hz, Single phase" },
      { param: "Dimensions", value: "700mm x 500mm x 900mm (W x D x H)" },
      { param: "Weight", value: "100 kg" }
    ],
    ordering: [
      { part: "210-3211-400", config: "Rockwell with Motorized Stage", voltage: "230V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "Diamond Cone Indenter",
        subtitle: "For HRA, HRC testing",
        image: "/product/diamondConeIndenter.png"
      },
      {
        title: "1/16-inch Steel Ball Indenter",
        subtitle: "For HRB, HRE, HRF scales",
        image: "/product/steelBallIndenter.png"
      },
      {
        title: "Rockwell Test Blocks",
        subtitle: "HRC 50, HRB 80 for calibration",
        image: "/product/rockwellTestBlocks.png"
      }
    ],
    literature: [
      { title: "Rockwell Hardness Tester User Manual", image: "/product/rockwell-manual.png" },
      { title: "Rockwell Hardness Tester Brochure", image: "/product/rockwell-brochure.png" },
      { title: "Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },
  {
    id: 38,
    categorySlug: "hardness-testers",
    name: "Portable Vickers Hardness Tester",
    slug: "portable-vickers-hardness-tester",
    description: "The Portable Vickers Hardness Tester is a compact device for on-site micro and macro hardness testing of metals using the Vickers method. With test loads from 0.1 to 30kgf and a diamond indenter, it complies with ASTM E384 and ISO 6507, ideal for small parts, thin layers, and field applications.",
    image: "/images/hardness-testers/portable-vickers.png",
    alt: "Portable Vickers Hardness Tester",
    rating: 4.8,
    reviews: 39,
    tag: "Vickers Hardness Testing",
    detail: "Portable micro/macro hardness testing",
    apiCall: "/api/hardness-testers/portable-vickers",
    features: [
      "Measures Vickers hardness (HV) with test loads from 0.1 to 30kgf",
      "Diamond pyramid indenter for precise micro and macro testing",
      "Portable design with digital camera for indentation measurement",
      "Automatic load application and hardness calculation",
      "Compliant with ASTM E384 and ISO 6507 standards",
      "Battery-powered for field operation",
      "Suitable for thin layers, small parts, and heat-treated surfaces"
    ],
    additionalFeatures: [
      "Software for automatic indent reading and data export",
      "Rugged carrying case for field transport",
      "Optional autofocus for enhanced precision",
      "Supports conversion to Rockwell and Brinell scales",
      "Lightweight at 3kg for easy handling"
    ],
    images: [
      "/product/PortableVickers1.jpg",
      "/product/PortableVickers2.jpg",
      "/product/PortableVickers3.jpg",
      "/product/PortableVickers4.jpg"
    ],
    video: "/product/Portable_Vickers_Hardness_Tester.mp4",
    specifications: [
      { param: "Operation", value: "Portable, Automatic" },
      { param: "Test Scale", value: "Vickers (HV)" },
      { param: "Test Loads", value: "0.1 to 30kgf" },
      { param: "Indenter", value: "136-degree diamond pyramid" },
      { param: "Measuring Range", value: "5-3000 HV" },
      { param: "Accuracy", value: "±2% HV" },
      { param: "Power Supply", value: "Rechargeable battery" },
      { param: "Weight", value: "3 kg" },
      { param: "Dimensions", value: "200mm x 100mm x 150mm (L x W x H)" }
    ],
    ordering: [
      { part: "210-3211-500", config: "Portable Vickers with Digital Camera", voltage: "Battery-powered" }
    ],
    consumables: [
      {
        title: "Vickers Diamond Indenter",
        subtitle: "For micro and macro testing",
        image: "/product/vickersDiamondIndenter.png"
      },
      {
        title: "Vickers Test Block",
        subtitle: "HV 500 for calibration",
        image: "/product/vickersTestBlock.png"
      },
      {
        title: "Replacement Camera Lens",
        subtitle: "For indentation measurement",
        image: "/product/cameraLensVickers.png"
      }
    ],
    literature: [
      { title: "Portable Vickers Hardness Tester User Manual", image: "/product/portable-vickers-manual.png" },
      { title: "Portable Vickers Hardness Tester Brochure", image: "/product/portable-vickers-brochure.png" },
      { title: "Hardness Testing Guide", image: "/product/hardness-testing-guide.png" }
    ]
  },

  // Vertical Band Saw
  {
    id: 39,
    categorySlug: "vertical-band-saw",
    name: "Vertical Band Saw",
    slug: "vertical-band-saw",
    description: "The Vertical Band Saw is a versatile, high-performance machine designed for precision cutting of metal, wood, and plastic. Featuring a robust welded steel frame, variable blade speeds, and a tilting table, it excels in contour cutting, straight cuts, and complex shapes, making it ideal for workshops, fabrication shops, and small-scale production environments.",
    image: "/images/vertical-band-saw/vertical-band-saw.png",
    alt: "Vertical Band Saw for Metal and Wood Cutting",
    rating: 4.8,
    reviews: 50,
    tag: "Vertical Band Saw",
    detail: "Precision contour and straight cutting",
    apiCall: "/api/vertical-band-saw/vertical-band-saw",
    features: [
      "Variable blade speeds from 65 to 1640 fpm for cutting metal, wood, and plastic",
      "20.5-inch throat depth for wide workpieces",
      "Accepts standard 0.25-inch to 0.75-inch blades for versatile applications",
      "Cast iron table with front-to-back and left-to-right pivoting",
      "Integrated blade welder with grinder for on-machine blade repair",
      "Tungsten carbide blade guides and hardened rollers for enhanced blade life",
      "Compliant with industry standards for safety and performance"
    ],
    additionalFeatures: [
      "Hydraulic blade tensioning for consistent cutting performance",
      "Air blowdown system to cool blade and clear chips",
      "Halogen work light for improved visibility",
      "Rip fence and miter gauge for accurate straight and angled cuts",
      "Safety interlocks on top and bottom doors to prevent operation when open",
      "Optional AC frequency drive for infinitely variable speed control",
      "Two-year maintenance spare kit included"
    ],
    images: [
      "/product/VerticalBandSaw1.jpg",
      "/product/VerticalBandSaw2.jpg",
      "/product/VerticalBandSaw3.jpg",
      "/product/VerticalBandSaw4.jpg"
    ],
    video: "/product/Vertical_Band_Saw.mp4",
    specifications: [
      { param: "Operation", value: "Manual/Semi-Automatic" },
      { param: "Throat Depth", value: "20.5 inches" },
      { param: "Max Work Height", value: "12 inches" },
      { param: "Blade Speed", value: "65 to 1640 fpm (variable)" },
      { param: "Blade Size", value: "0.25 to 0.75 inches wide, 162 inches long" },
      { param: "Table Size", value: "24 x 24 inches (cast iron)" },
      { param: "Table Tilt", value: "10° left, 20° right, 5° front/back" },
      { param: "Motor Power", value: "2 HP, 3-phase, 440V" },
      { param: "Coolant System", value: "2-gallon capacity with pump" },
      { param: "Weight", value: "450 kg" },
      { param: "Dimensions", value: "1000mm x 800mm x 2000mm (W x D x H)" }
    ],
    ordering: [
      { part: "220-3311-100", config: "Vertical Band Saw with Hydraulic Tensioning", voltage: "440V, 50/60Hz" }
    ],
    consumables: [
      {
        title: "M42 Bimetal Blade",
        subtitle: "162-inch, 0.75-inch width for metal cutting",
        image: "/product/m42BimetalBlade.png"
      },
      {
        title: "Wood Cutting Blade",
        subtitle: "162-inch, 0.5-inch width for woodworking",
        image: "/product/woodCuttingBlade.png"
      },
      {
        title: "Tungsten Carbide Wear Pads",
        subtitle: "For blade guide replacement",
        image: "/product/tungstenCarbidePads.png"
      }
    ],
    literature: [
      { title: "Vertical Band Saw User Manual", image: "/product/vertical-band-saw-manual.png" },
      { title: "Vertical Band Saw Brochure", image: "/product/vertical-band-saw-brochure.png" },
      { title: "Band Saw Cutting Guide", image: "/product/band-saw-cutting-guide.png" }
    ]
  },
];

export const mainCategories = [
  {
    mainCategory: "Cutting",
    categories: [
      {
        name: "Automatic Cutting Machines",
        slug: "automatic-cutting-machines",
        heroImage: "/images/automatic-cutting-machines/automatic-cutting-machines.png",
        intro: {
          title: "Precision Cutting for Every Application",
          description:
            "Our Automatic Cutting Machines deliver high precision and efficiency for diverse industrial and laboratory applications. From Auto Cut and MetaCut systems to oscillating abrasive and tube-cutting machines, find the ideal solution for your sample preparation needs.",
          categoryLabel: "Browse our cutting solutions",
          buttons: [
            { text: "Explore Cutting Machines", variant: "primary" },
            { text: "Contact Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Automatic Cutting Machines",
          description:
            "Process multiple samples automatically to increase throughput while freeing up users for other tasks. Automatic processing ensures consistent sample quality cycle to cycle.",
          label: "Our Products",
        },
        specialtySection: {
          title: "Specialty Autocutting Machines",
          description:
            "When typical grinders can't meet your requirements for flatness or surface finish, our specialty solutions deliver exceptional results.",
          label: "Advanced Solutions",
        },
        solutionsBanner: {
          title: "Full Lab Autocutting Solutions",
          description:
            "Looking for more information? Browse through our Solutions section to view technical articles, find recommended processing methods, and discover industry-specific solutions.",
          image: "/productsListing/Find_Your_Solutions.png",
          label: "Comprehensive Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "automatic-cutting-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Cutting Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "automatic-cutting-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Automatic Cutting Machines",
            color: "rgba(15, 125, 183, 0.1)",
            bgColor: "rgba(15, 125, 183, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "automatic-cutting-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "automatic-cutting-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Auto Cut",
            description:
              "Fully automatic cutting machine designed for high precision and repeatability in material sectioning. Ideal for industrial and laboratory environments requiring consistent performance.",
            image: "/images/automatic-cutting-machines/auto-cut.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "SimpliMet 4000",
            description:
              "Robust compression mounting press for encapsulating metallographic samples with high efficiency and dual mount capability.",
            image: "/images/automatic-cutting-machines/simplimet-4000.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "automatic-cutting-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Oscillating Abrasive Cut-off Machines",
        slug: "oscillating-abrasive-cut-off-machines",
        heroImage: "/images/oscillating-abrasive-cut-off-machines/oscillating-abrasive-cut-off-machines.png",
        intro: {
          title: "Advanced Oscillating Cutting Technology",
          description: "Our Oscillating Abrasive Cut-off Machines provide precision and efficiency for cutting hard materials in industrial and laboratory settings. Featuring advanced oscillation technology, these machines ensure minimal thermal damage and superior surface finish for metallographic and materialographic applications.",
          categoryLabel: "Explore our oscillating cutting solutions",
          buttons: [
            { text: "Discover Oscillating Machines", variant: "primary" },
            { text: "Contact Our Team", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Oscillating Abrasive Cut-off Machines",
          description: "Enhance productivity with oscillating cut-off machines that process samples with reduced contact area, ensuring high-quality cuts and extended wheel life. Ideal for hard materials and high-volume applications.",
          label: "Our Oscillating Products"
        },
        specialtySection: {
          title: "Specialty Oscillating Cutting Solutions",
          description: "For applications requiring exceptional precision, flatness, or surface finish, our specialty oscillating cut-off machines deliver unmatched performance tailored to your needs.",
          label: "Precision Cutting Solutions"
        },
        solutionsBanner: {
          title: "Complete Oscillating Cutting Solutions",
          description: "Dive into our Solutions section for technical insights, recommended cutting techniques, and industry-specific applications to optimize your cutting processes.",
          image: "/productsListing/Oscillating_Solutions.png",
          label: "Tailored Cutting Solutions",
          buttons: [
            { text: "Industry-Specific Solutions", variant: "primary" },
            { text: "Material-Specific Solutions", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Cutting Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Oscillating Abrasive Cut-off Machines",
            color: "rgba(50, 168, 82, 0.1)",
            bgColor: "rgba(50, 168, 82, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "oscillating-abrasive-cut-off-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Large Component Cutting Machines",
        slug: "large-component-cutting-machines",
        heroImage: "/images/large-component-cutting-machines/large-component-cutting-machines.png",
        intro: {
          title: "Heavy-Duty Cutting for Oversized Components",
          description: "Our Large Component Cutting Machines are engineered for precision and power, tackling massive workpieces in industries like aerospace, automotive, and heavy manufacturing. Designed for large-scale CNC machining, these machines deliver exceptional accuracy and efficiency for complex, oversized parts.",
          categoryLabel: "Explore our large component cutting solutions",
          buttons: [
            { text: "Discover Large Cutting Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Large Component Cutting Machines",
          description: "Handle oversized components with ease using our advanced CNC cutting machines, capable of milling, turning, and boring large parts with tight tolerances. Perfect for high-volume and prototype production in demanding industries.",
          label: "Our Large Cutting Products"
        },
        specialtySection: {
          title: "Specialty Large Component Cutting Solutions",
          description: "For unique challenges requiring extreme precision or specialized processes, our large component cutting machines provide tailored solutions for complex geometries and heavy-duty materials.",
          label: "Advanced Large-Scale Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Large Component Cutting Solutions",
          description: "Explore our Solutions section for technical articles, recommended machining methods, and industry-specific applications to optimize your large component cutting processes.",
          image: "/productsListing/Large_Component_Solutions.png",
          label: "Industry-Tailored Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "large-component-cutting-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Large Component Cutting Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "large-component-cutting-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Large Component Cutting Machines",
            color: "rgba(120, 50, 183, 0.1)",
            bgColor: "rgba(120, 50, 183, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "large-component-cutting-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "large-component-cutting-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "large-component-cutting-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "large-component-cutting-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Diamond Cutting Machines",
        slug: "diamond-cutting-machines",
        heroImage: "/images/diamond-cutting-machines/diamond-cutting-machines.png",
        intro: {
          title: "Precision Diamond Cutting Technology",
          description: "Our Diamond Cutting Machines offer unmatched precision and efficiency for processing natural and lab-grown diamonds. From laser sawing to advanced 4P cutting and fancy shaping, these machines are designed for jewelers and manufacturers seeking high-quality results with minimal material loss.",
          categoryLabel: "Explore our diamond cutting solutions",
          buttons: [
            { text: "Discover Diamond Cutting Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Diamond Cutting Machines",
          description: "Process rough diamonds with precision using our advanced laser and CNC-based cutting machines. These systems ensure maximum yield, minimal breakage, and high-quality finishes for both jewelry and industrial applications.",
          label: "Our Diamond Cutting Products"
        },
        specialtySection: {
          title: "Specialty Diamond Cutting Solutions",
          description: "For intricate designs, fancy shapes, or high-volume production, our specialty diamond cutting machines deliver tailored performance for complex requirements in the jewelry and gemstone industries.",
          label: "Advanced Diamond Processing Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Diamond Cutting Solutions",
          description: "Visit our Solutions section for technical guides, cutting techniques, and industry-specific applications to optimize your diamond processing workflow.",
          image: "/productsListing/Diamond_Cutting_Solutions.png",
          label: "Tailored Diamond Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "diamond-cutting-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Diamond Cutting Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "diamond-cutting-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Diamond Cutting Machines",
            color: "rgba(200, 50, 100, 0.1)",
            bgColor: "rgba(200, 50, 100, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "diamond-cutting-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "diamond-cutting-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "diamond-cutting-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "diamond-cutting-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
    ]
  },
  {
    mainCategory: "Moulding / Grinding / Polishing",
    categories: [
      {
        name: "Moulding Machines",
        slug: "moulding-machines",
        heroImage: "/images/moulding-machines/moulding-machines.png",
        intro: {
          title: "High-Precision Moulding Solutions",
          description: "Our Moulding Machines deliver advanced technology for shaping plastics, metals, and composites with unmatched precision and efficiency. From injection moulding to blow moulding and compression moulding, our solutions cater to industries like automotive, packaging, and medical device manufacturing.",
          categoryLabel: "Explore our moulding solutions",
          buttons: [
            { text: "Discover Moulding Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Moulding Machines",
          description: "Our range of moulding machines, including hydraulic, electric, and hybrid models, ensures high-speed production, energy efficiency, and precision for diverse applications, from small components to large industrial parts.",
          label: "Our Moulding Products"
        },
        specialtySection: {
          title: "Specialty Moulding Solutions",
          description: "For complex geometries, cleanroom applications, or high-volume production, our specialty moulding machines provide customized solutions to meet stringent industry requirements.",
          label: "Advanced Moulding Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Moulding Solutions",
          description: "Browse our Solutions section for technical resources, process optimization guides, and industry-specific applications to enhance your moulding operations.",
          image: "/productsListing/Moulding_Solutions.png",
          label: "Tailored Moulding Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "moulding-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Moulding Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "moulding-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Moulding Machines",
            color: "rgba(30, 150, 70, 0.1)",
            bgColor: "rgba(30, 150, 70, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "moulding-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "moulding-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "moulding-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "moulding-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Grinding and Polishing Machines",
        slug: "grinding-polishing-machines",
        heroImage: "/images/grinding-polishing-machines/grinding-polishing-machines.png",
        intro: {
          title: "Superior Surface Finishing Solutions",
          description: "Our Grinding and Polishing Machines deliver exceptional surface quality for metallographic, materialographic, and industrial applications. From semi-automatic grinders to fully automated polishing systems, our machines ensure precision, consistency, and efficiency for laboratory and production environments.",
          categoryLabel: "Explore our grinding and polishing solutions",
          buttons: [
            { text: "Discover Grinding & Polishing Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Grinding and Polishing Machines",
          description: "Achieve high-quality surface finishes with our range of grinding and polishing machines, designed for both manual and automated processes. Ideal for preparing samples for analysis or finishing industrial components with precision.",
          label: "Our Grinding & Polishing Products"
        },
        specialtySection: {
          title: "Specialty Grinding and Polishing Solutions",
          description: "For applications requiring ultra-fine finishes, complex geometries, or high-throughput production, our specialty grinding and polishing machines offer customized performance to meet the most demanding specifications.",
          label: "Advanced Surface Finishing Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Grinding and Polishing Solutions",
          description: "Explore our Solutions section for technical insights, recommended preparation methods, and industry-specific applications to optimize your surface finishing processes.",
          image: "/productsListing/Grinding_Polishing_Solutions.png",
          label: "Tailored Finishing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "grinding-polishing-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Grinding and Polishing Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "grinding-polishing-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Grinding and Polishing Machines",
            color: "rgba(80, 120, 200, 0.1)",
            bgColor: "rgba(80, 120, 200, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "grinding-polishing-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "grinding-polishing-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "grinding-polishing-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "grinding-polishing-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Automatic Spectro Sample Grinding Machines",
        slug: "automatic-spectro-sample-grinding-machines",
        heroImage: "/images/automatic-spectro-sample-grinding-machines/automatic-spectro-sample-grinding-machines.png",
        intro: {
          title: "Precision Grinding for Spectroscopic Analysis",
          description: "Our Automatic Spectro Sample Grinding Machines are designed for high-precision preparation of metallic samples for spectroscopic analysis. These machines ensure flat, uniform surfaces with minimal operator intervention, ideal for metallurgical labs and quality control in steel and metal industries.",
          categoryLabel: "Explore our spectro grinding solutions",
          buttons: [
            { text: "Discover Spectro Grinding Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Automatic Spectro Sample Grinding Machines",
          description: "Automate the grinding process for spectroscopic samples with our advanced machines, delivering consistent surface finishes and high throughput for demanding laboratory and industrial applications.",
          label: "Our Spectro Grinding Products"
        },
        specialtySection: {
          title: "Specialty Spectro Grinding Solutions",
          description: "For unique sample sizes, shapes, or stringent surface quality requirements, our specialty spectro grinding machines provide tailored solutions for optimal spectroscopic analysis.",
          label: "Advanced Spectro Grinding Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Spectro Grinding Solutions",
          description: "Visit our Solutions section for technical guides, recommended grinding techniques, and industry-specific applications to enhance your spectroscopic sample preparation.",
          image: "/productsListing/Spectro_Grinding_Solutions.png",
          label: "Tailored Spectro Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Spectro Sample Grinding Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Automatic Spectro Sample Grinding Machines",
            color: "rgba(40, 140, 90, 0.1)",
            bgColor: "rgba(40, 140, 90, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "automatic-spectro-sample-grinding-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Semi Automatic Grinding Polishing Machines",
        slug: "semi-automatic-grinding-polishing-machines",
        heroImage: "/images/semi-automatic-grinding-polishing-machines/semi-automatic-grinding-polishing-machines.png",
        intro: {
          title: "Flexible Grinding and Polishing Solutions",
          description: "Our Semi Automatic Grinding Polishing Machines combine operator control with automated precision, delivering high-quality surface finishes for metallographic, materialographic, and industrial applications. Perfect for labs and workshops requiring flexibility and consistency.",
          categoryLabel: "Explore our semi-automatic solutions",
          buttons: [
            { text: "Discover Semi-Automatic Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" }
          ]
        },
        semiAutomaticSection: {
          title: "Semi Automatic Grinding Polishing Machines",
          description: "Enhance productivity with semi-automatic machines that offer user-friendly controls and automated grinding/polishing cycles, ensuring repeatable results for diverse materials and sample types.",
          label: "Our Semi-Automatic Products"
        },
        specialtySection: {
          title: "Specialty Semi-Automatic Solutions",
          description: "For applications requiring tailored processes or specific surface finishes, our specialty semi-automatic machines provide flexible solutions for complex grinding and polishing tasks.",
          label: "Advanced Semi-Automatic Solutions"
        },
        solutionsBanner: {
          title: "Comprehensive Semi-Automatic Solutions",
          description: "Browse our Solutions section for technical resources, preparation techniques, and industry-specific applications to optimize your grinding and polishing workflows.",
          image: "/productsListing/Semi_Automatic_Solutions.png",
          label: "Tailored Finishing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" }
          ]
        },
        slides: products
          .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Semi-Automatic Grinding Polishing Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Semi Automatic Grinding Polishing Machines",
            color: "rgba(100, 60, 180, 0.1)",
            bgColor: "rgba(100, 60, 180, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        productCards: products
          .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: products
          .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines" && p.tag === "Specialty")
          .slice(0, 2)
          .map((p, index) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            delay: 0.1 * (index + 1),
            animationX: index % 2 === 0 ? -50 : 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" }
            ]
          })),
        subCategories: products
          .filter((p) => p.categorySlug === "semi-automatic-grinding-polishing-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        "name": "Multi-specimen Grinding Polishing Machines",
        "slug": "multi-specimen-grinding-polishing-machines",
        "heroImage": "/images/multi-specimen-grinding-polishing-machines/multi-specimen-grinding-polishing-machines.png",
        "intro": {
          "title": "High-Throughput Multi-Specimen Processing",
          "description": "Our Multi-specimen Grinding Polishing Machines are engineered for simultaneous processing of multiple samples, delivering consistent, high-quality surface finishes for metallographic and materialographic analysis. Ideal for high-volume labs and industrial quality control.",
          "categoryLabel": "Explore our multi-specimen solutions",
          "buttons": [
            { "text": "Discover Multi-Specimen Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Multi-specimen Grinding Polishing Machines",
          "description": "Maximize efficiency with machines designed to process multiple specimens simultaneously, ensuring uniform results and high throughput for metallographic and industrial applications.",
          "label": "Our Multi-Specimen Products"
        },
        "specialtySection": {
          "title": "Specialty Multi-Specimen Solutions",
          "description": "For complex sample types or stringent finishing requirements, our specialty multi-specimen machines offer advanced automation and customization for superior surface preparation.",
          "label": "Advanced Multi-Specimen Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Multi-Specimen Solutions",
          "description": "Explore our Solutions section for technical insights, preparation methods, and industry-specific applications to streamline your multi-specimen grinding and polishing processes.",
          "image": "/productsListing/Multi_Specimen_Solutions.png",
          "label": "Tailored Multi-Specimen Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": products
          .filter((p) => p.categorySlug === "multi-specimen-grinding-polishing-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Grinding & Polishing Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        "products": products
          .filter((p) => p.categorySlug === "multi-specimen-grinding-polishing-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        "items": [
          {
            "id": 1,
            "name": "Multi-specimen Grinding Polishing Machines",
            "color": "rgba(150, 80, 50, 0.1)",
            "bgColor": "rgba(150, 80, 50, 0.1)",
            "subItems": products
              .filter((p) => p.categorySlug === "multi-specimen-grinding-polishing-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          }
        ],
        "productCards": products
          .filter((p) => p.categorySlug === "multi-specimen-grinding-polishing-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Hexamatic",
            "description": "Fully automatic multi-specimen grinding and polishing system, capable of processing up to 12 samples simultaneously, ideal for high-volume metallographic laboratories.",
            "image": "/images/multi-specimen-grinding-polishing-machines/hexamatic.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "MultiPrep-8",
            "description": "Semi-automatic multi-specimen machine with programmable settings, designed for processing up to 8 samples with consistent, high-quality surface finishes.",
            "image": "/images/multi-specimen-grinding-polishing-machines/multiprep-8.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": products
          .filter((p) => p.categorySlug === "multi-specimen-grinding-polishing-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        "name": "Belt Grinders",
        "slug": "belt-grinders",
        "heroImage": "/images/belt-grinders/belt-grinders.png",
        "intro": {
          "title": "High-Performance Belt Grinder Solutions",
          "description": "Belt Grinders, including MBG I and MBG II, deliver precision grinding, sharpening, and finishing for metalworking, knifemaking, and fabrication. Compliant with ASTM B368, they feature variable speed control, robust steel construction, and compatibility with 2x72-inch abrasive belts. Ideal for bladesmithing, automotive, and aerospace industries, these grinders excel in deburring, shaping, and polishing applications.",
          "categoryLabel": "Explore our belt grinder solutions",
          "buttons": [
            { "text": "Discover Belt Grinders", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Belt Grinders",
          "description": "Designed for durability and versatility, the MBG I and MBG II belt grinders offer variable speeds (100-3500 ft/min), heavy-duty steel chassis, and quick-release belt systems. Compatible with ceramic, zirconia, and aluminum oxide belts, they handle ferrous/non-ferrous metals, wood, and composites, ensuring precise material removal and surface finishing in workshops and industrial settings.",
          "label": "Grinding Features"
        },
        "specialtySection": {
          "title": "Specialty Grinding Solutions",
          "description": "Optimized for demanding tasks like knife profiling, convex grinding, and micro-finishing, these grinders support modular tooling arms, articulating work rests, and horizontal/vertical configurations. Built for heavy use, they ensure consistent performance for custom metalwork, blacksmithing, and high-volume production.",
          "label": "Advanced Grinding Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Grinding Solutions",
          "description": "Explore our Solutions section for ASTM B368-compliant protocols, guides for abrasive belt selection, and industry-specific applications to optimize your belt grinder workflows.",
          "image": "/productsListing/Belt_Grinders_Solutions.png",
          "label": "Tailored Grinding Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": products
          .filter((p) => p.categorySlug === "belt-grinders")
          .slice(0, 3)
          .map((p) => ({
            "id": p.id,
            "image": p.image,
            "alt": p.alt,
            "category": "Belt Grinders",
            "title": p.name,
            "description": p.description,
            "reviews": p.reviews,
            "rating": p.rating
          })),
        "products": products
          .filter((p) => p.categorySlug === "belt-grinders")
          .map((p) => ({
            "name": p.name,
            "image": p.image
          })),
        "items": [
          {
            "id": 1,
            "name": "Belt Grinders",
            "color": "rgba(70, 110, 150, 0.1)",
            "bgColor": "rgba(70, 110, 150, 0.1)",
            "subItems": products
              .filter((p) => p.categorySlug === "belt-grinders")
              .map((p) => ({
                "name": p.name,
                "apiCall": p.apiCall
              }))
          }
        ],
        "productCards": products
          .filter((p) => p.categorySlug === "belt-grinders")
          .map((p) => ({
            "id": p.id,
            "name": p.name,
            "tag": p.tag,
            "description": p.description,
            "image": p.image,
            "detail": p.detail,
            "delay": 0.1 * (p.id - 1)
          })),
        "specialtyProducts": [
          {
            "id": 1,
            "name": "MBG I",
            "description": "Compact 2x72-inch belt grinder with 1.5 HP variable-speed motor and quick-release belt system, optimized for knifemaking and small workshop tasks, compliant with ASTM B368.",
            "image": "/images/belt-grinders/mbg-i.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "MBG II",
            "description": "Heavy-duty 2x72-inch belt grinder with 3 HP motor, tilting chassis, and horizontal/vertical configurations, designed for industrial fabrication and high-volume metalwork.",
            "image": "/images/belt-grinders/mbg-ii.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": products
          .filter((p) => p.categorySlug === "belt-grinders")
          .map((p) => ({
            "id": p.slug,
            "name": p.name
          }))
      },
      {
        "name": "Heavy Duty Belt Grinder",
        "slug": "heavy-duty-belt-grinder",
        "heroImage": "/images/heavy-duty-belt-grinder/heavy-duty-belt-grinder.png",
        "intro": {
          "title": "Robust Heavy Duty Belt Grinder Solutions",
          "description": "The Heavy Duty Belt Grinder delivers unmatched performance for high-volume grinding, sharpening, and finishing in metalworking, bladesmithing, and fabrication. Compliant with ASTM B368, it features a powerful 3 HP motor, variable speed control (100-4000 ft/min), and compatibility with 2x72-inch abrasive belts, making it ideal for automotive, aerospace, and knifemaking industries.",
          "categoryLabel": "Explore our heavy duty belt grinder solutions",
          "buttons": [
            { "text": "Discover Heavy Duty Belt Grinder", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Heavy Duty Belt Grinder",
          "description": "Built for industrial demands, this grinder features a 3 HP motor, tilting steel chassis, and variable speed control for precise grinding. Compatible with ceramic, zirconia, and aluminum oxide belts, it handles tough materials like stainless steel, titanium, and composites, offering quick belt changes and horizontal/vertical configurations for versatility.",
          "label": "Grinding Features"
        },
        "specialtySection": {
          "title": "Specialty Grinding Solutions",
          "description": "Engineered for heavy-duty tasks like knife profiling, convex grinding, and surface finishing, the grinder supports modular attachments, articulating work rests, and robust contact wheels. Its durable design ensures consistent performance in high-throughput environments, from custom metalwork to large-scale fabrication.",
          "label": "Advanced Grinding Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Grinding Solutions",
          "description": "Explore our Solutions section for ASTM B368-compliant protocols, abrasive belt selection guides, and industry-specific applications to optimize your heavy duty belt grinder workflows.",
          "image": "/productsListing/Heavy_Duty_Belt_Grinder_Solutions.png",
          "label": "Tailored Grinding Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": products
          .filter((p) => p.categorySlug === "heavy-duty-belt-grinder")
          .slice(0, 3)
          .map((p) => ({
            "id": p.id,
            "image": p.image,
            "alt": p.alt,
            "category": "Heavy Duty Belt Grinder",
            "title": p.name,
            "description": p.description,
            "reviews": p.reviews,
            "rating": p.rating
          })),
        "products": products
          .filter((p) => p.categorySlug === "heavy-duty-belt-grinder")
          .map((p) => ({
            "name": p.name,
            "image": p.image
          })),
        "items": [
          {
            "id": 1,
            "name": "Heavy Duty Belt Grinder",
            "color": "rgba(80, 120, 150, 0.1)",
            "bgColor": "rgba(80, 120, 150, 0.1)",
            "subItems": products
              .filter((p) => p.categorySlug === "heavy-duty-belt-grinder")
              .map((p) => ({
                "name": p.name,
                "apiCall": p.apiCall
              }))
          }
        ],
        "productCards": products
          .filter((p) => p.categorySlug === "heavy-duty-belt-grinder")
          .map((p) => ({
            "id": p.id,
            "name": p.name,
            "tag": p.tag,
            "description": p.description,
            "image": p.image,
            "detail": p.detail,
            "delay": 0.1 * (p.id - 1)
          })),
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Standard Model",
            "description": "Powerful 3 HP belt grinder with 2x72-inch belt, variable speed (100-4000 ft/min), and tilting chassis, optimized for high-volume grinding in industrial metalworking and knifemaking.",
            "image": "/images/heavy-duty-belt-grinder/standard-model.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Vertical/Horizontal Model",
            "description": "Versatile 3 HP belt grinder with dual horizontal/vertical configurations, ideal for complex grinding tasks like blade profiling and large-scale fabrication in heavy-duty environments.",
            "image": "/images/heavy-duty-belt-grinder/vertical-horizontal-model.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": products
          .filter((p) => p.categorySlug === "heavy-duty-belt-grinder")
          .map((p) => ({
            "id": p.slug,
            "name": p.name
          }))
      },
    ]
  },

  // mainCategory: "Micro Hardness Tester"
  {
    mainCategory: "Micro Hardness Tester",
    categories: [
      {
        name: "Automatic Micro Hardness Tester",
        slug: "automatic-micro-hardness-tester",
        heroImage: "/images/automatic-micro-hardness-tester/automatic-micro-hardness-tester.png",
        intro: {
          title: "Precision Automatic Micro Hardness Testing",
          description:
            "The Automatic Micro Hardness Tester delivers precise Vickers, Knoop, and Brinell hardness measurements for thin materials, coatings, and small components. Fully compliant with ASTM E384 and ISO 4545, it features automated XY stage, auto-focus, and advanced software for high-throughput testing in automotive, aerospace, and metallurgical applications.",
          categoryLabel: "Explore our micro hardness testing solutions",
          buttons: [
            { text: "Discover Micro Hardness Tester", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Automatic Micro Hardness Tester",
          description:
            "Equipped with a motorized turret, CCD camera, and intuitive software, this tester automates load application, indentation measurement, and data analysis. With load ranges from 0.01 gf to 2 kgf, it ensures accurate, repeatable results for micro hardness testing of metals, ceramics, and coatings.",
          label: "Testing Features",
        },
        specialtySection: {
          title: "Specialty Hardness Testing Solutions",
          description:
            "For complex test patterns, case depth analysis, or high-volume production, the Automatic Micro Hardness Tester offers customizable templates, fully automated sequences, and integration with metallographic analysis tools.",
          label: "Advanced Testing Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Hardness Testing Solutions",
          description:
            "Explore our Solutions section for ASTM E384-compliant protocols, technical guides, and industry-specific applications to optimize your micro hardness testing workflows.",
          image: "/productsListing/Hardness_Testing_Solutions.png",
          label: "Tailored Testing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "automatic-micro-hardness-tester")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Automatic Micro Hardness Tester",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "automatic-micro-hardness-tester")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Automatic Micro Hardness Tester",
            color: "rgba(90, 110, 140, 0.1)",
            bgColor: "rgba(90, 110, 140, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "automatic-micro-hardness-tester")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "automatic-micro-hardness-tester")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Vickers Testing",
            description:
              "Automates Vickers hardness testing with a diamond pyramid indenter, delivering precise measurements for thin materials and coatings, compliant with ASTM E384.",
            image: "/images/automatic-micro-hardness-tester/vickers-testing.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Knoop Testing",
            description:
              "Performs Knoop hardness testing with a rhombic diamond indenter, optimized for brittle materials and thin layers, per ISO 4545.",
            image: "/images/automatic-micro-hardness-tester/knoop-testing.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "automatic-micro-hardness-tester")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Micro/Macro Hardness Tester (Load Cell Based)",
        slug: "micro-macro-hardness-tester-load-cell",
        heroImage: "/images/micro-macro-hardness-tester/micro-macro-hardness-tester.png",
        intro: {
          title: "Advanced Load Cell Based Hardness Testing",
          description:
            "The Micro/Macro Hardness Tester with load cell technology offers precise Vickers, Knoop, and Brinell testing across micro (0.01 gf to 1 kgf) and macro (1 kgf to 62.5 kgf) ranges. Compliant with ASTM E384, ISO 6507, and ASTM E10, it features closed-loop load control, automated XY stage, and intuitive software for high-throughput testing in metallurgical, automotive, and aerospace applications.",
          categoryLabel: "Explore our load cell hardness testing solutions",
          buttons: [
            { text: "Discover Hardness Tester", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Micro/Macro Hardness Tester",
          description:
            "Utilizing closed-loop load cell technology, this tester ensures accurate force application for Vickers, Knoop, and Brinell tests. With automated turret, CCD imaging, and touch-screen interface, it delivers repeatable results for micro and macro hardness testing of metals, ceramics, and coatings.",
          label: "Testing Features",
        },
        specialtySection: {
          title: "Specialty Hardness Testing Solutions",
          description:
            "For advanced applications like case depth analysis, hardness mapping, or high-volume production, this tester offers customizable test patterns, fully automated sequences, and integration with image analysis software for comprehensive material characterization.",
          label: "Advanced Testing Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Hardness Testing Solutions",
          description:
            "Explore our Solutions section for ASTM E384 and ISO 6507-compliant protocols, technical guides, and industry-specific applications to optimize your hardness testing workflows.",
          image: "/productsListing/Hardness_Testing_Solutions.png",
          label: "Tailored Testing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "micro-macro-hardness-tester-load-cell")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Micro/Macro Hardness Tester",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "micro-macro-hardness-tester-load-cell")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Micro/Macro Hardness Tester",
            color: "rgba(100, 120, 160, 0.1)",
            bgColor: "rgba(100, 120, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "micro-macro-hardness-tester-load-cell")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "micro-macro-hardness-tester-load-cell")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Vickers Testing",
            description:
              "Performs Vickers testing across micro (0.01 gf) to macro (62.5 kgf) ranges with a diamond pyramid indenter, ensuring ASTM E384 and ISO 6507 compliance.",
            image: "/images/micro-macro-hardness-tester/vickers-testing.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Closed-Loop Load Cell",
            description:
              "Employs advanced closed-loop load cell technology for precise force application, supporting a wide range of Vickers, Knoop, and Brinell tests.",
            image: "/images/micro-macro-hardness-tester/load-cell-system.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "micro-macro-hardness-tester-load-cell")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
    ],
  },

  // mainCategory: "Microscope and Image Analyzer"

  {
    mainCategory: "Microscope and Image Analyzer",
    categories: [
      {
        name: "Inverted Microscope",
        slug: "inverted-microscope",
        heroImage: "/images/inverted-microscope/inverted-microscope.png",
        intro: {
          title: "Precision Inverted Microscope Solutions",
          description:
            "Inverted Microscopes, including Metagraph-I and Metagraph-SPL, offer advanced imaging for metallurgical and biological applications. Compliant with ASTM E45 and ISO 4967, they feature high-magnification optics and inverted designs for large metal samples, polished surfaces, and live cell cultures. Ideal for metallurgy, materials science, and life sciences, these microscopes ensure precision and durability in quality control, research, and industrial inspection.",
          categoryLabel: "Explore our inverted microscope solutions",
          buttons: [
            { text: "Discover Inverted Microscopes", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Inverted Microscope",
          description:
            "Designed for large, heavy samples and live cell observation, our inverted microscopes feature objective lenses below the stage, brightfield and phase contrast illumination, and magnifications up to 1000x. The Metagraph-I and Metagraph-SPL models support metallographic analysis, grain sizing, and cell culture imaging, with robust stages and long working distance objectives for versatile applications.",
          label: "Microscopy Features",
        },
        specialtySection: {
          title: "Specialty Microscopy Solutions",
          description:
            "Optimized for microstructural analysis, surface defect inspection, and live cell imaging, these microscopes offer digital imaging integration, fluorescence capabilities, and customizable optics. Their inverted design accommodates bulky samples and ensures sterility in cell culture applications, meeting the demands of advanced research and industrial labs.",
          label: "Advanced Microscopy Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Microscopy Solutions",
          description:
            "Explore our Solutions section for ASTM E45 and ISO 4967-compliant protocols, guides for metallographic and cell culture imaging, and industry-specific applications to optimize your inverted microscope workflows.",
          image: "/productsListing/Inverted_Microscope_Solutions.png",
          label: "Tailored Microscopy Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Application", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "inverted-microscope")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Inverted Microscope",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "inverted-microscope")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Inverted Microscope",
            color: "rgba(80, 130, 160, 0.1)",
            bgColor: "rgba(80, 130, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "inverted-microscope")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "inverted-microscope")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Metagraph-I",
            description:
              "Robust inverted microscope with 50x-1000x magnification and brightfield illumination, optimized for metallographic analysis of large metal samples and polished surfaces, compliant with ASTM E45.",
            image: "/images/inverted-microscope/metagraph-i.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Metagraph-SPL",
            description:
              "Versatile inverted microscope with phase contrast and optional fluorescence capabilities, ideal for live cell imaging and advanced materials inspection, per ISO 4967.",
            image: "/images/inverted-microscope/metagraph-spl.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "inverted-microscope")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Upright Microscope",
        slug: "upright-microscope",
        heroImage: "/images/upright-microscope/upright-microscope.png",
        intro: {
          title: "Precision Upright Microscope Solutions",
          description:
            "The Upright Microscope, featuring the Metagraph (UP), delivers high-resolution imaging for metallurgical and materials science applications. Compliant with ASTM E45, ASTM E112, and ISO 4967, it is ideal for analyzing polished metal surfaces, inclusions, and microstructures. With advanced optics and robust design, the Metagraph (UP) serves quality control, failure analysis, and research in metallurgy, automotive, and aerospace industries.",
          categoryLabel: "Explore our upright microscope solutions",
          buttons: [
            { text: "Discover Metagraph (UP)", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Upright Microscope",
          description:
            "The Metagraph (UP) upright microscope offers magnifications from 50x to 1000x, with brightfield, darkfield, and polarized light capabilities. Its ergonomic design, large mechanical stage, and high-resolution objectives support precise grain size analysis, inclusion rating, and microstructural examination, making it a reliable choice for lab-based metallographic studies.",
          label: "Microscopy Features",
        },
        specialtySection: {
          title: "Specialty Microscopy Solutions",
          description:
            "Tailored for advanced metallographic and materials analysis, the Metagraph (UP) supports digital imaging, differential interference contrast (DIC), and customizable optics. Its robust construction accommodates a wide range of sample sizes, ensuring accurate results for failure analysis, phase identification, and quality assurance in industrial and research settings.",
          label: "Advanced Microscopy Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Microscopy Solutions",
          description:
            "Explore our Solutions section for ASTM E45 and ISO 4967-compliant protocols, technical guides for grain sizing and inclusion analysis, and industry-specific applications to optimize your upright microscope workflows.",
          image: "/productsListing/Upright_Microscope_Solutions.png",
          label: "Tailored Microscopy Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Application", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "upright-microscope")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Upright Microscope",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "upright-microscope")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Upright Microscope",
            color: "rgba(90, 120, 170, 0.1)",
            bgColor: "rgba(90, 120, 170, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "upright-microscope")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "upright-microscope")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Metagraph (UP)",
            description:
              "High-performance upright microscope with 50x-1000x magnification, brightfield, darkfield, and polarized light capabilities, optimized for precise metallographic analysis of polished metal surfaces, compliant with ASTM E45 and ISO 4967.",
            image: "/images/upright-microscope/metagraph-up.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Digital Imaging System",
            description:
              "Integrated high-resolution camera and software for capturing, analyzing, and documenting metallographic images, enhancing efficiency in quality control and research applications.",
            image: "/images/upright-microscope/digital-imaging.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "upright-microscope")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Stereo Microscope",
        slug: "stereo-microscope",
        heroImage: "/images/stereo-microscope/stereo-microscope.png",
        intro: {
          title: "Advanced Stereo Microscope Solutions",
          description:
            "The Stereo Microscope, featuring the Metagraph (ST), delivers high-quality 3D imaging for metallurgy, electronics, and biological applications. Compliant with ASTM E45, it offers low-magnification zoom (5x-80x), dual optical paths for depth perception, and ergonomic design. Ideal for quality control, circuit board inspection, and dissection in manufacturing, research, and education.",
          categoryLabel: "Explore our stereo microscope solutions",
          buttons: [
            { text: "Discover Metagraph (ST)", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Stereo Microscope",
          description:
            "The Metagraph (ST) stereo microscope provides zoom magnification from 5x to 80x, with brightfield and reflected LED illumination. Its dual optical paths ensure true 3D visualization, ideal for inspecting opaque samples like metal surfaces, circuit boards, and biological specimens. Ergonomic features and a large working distance support prolonged, fatigue-free operation.",
          label: "Microscopy Features",
        },
        specialtySection: {
          title: "Specialty Microscopy Solutions",
          description:
            "Designed for precision tasks, the Metagraph (ST) supports digital imaging, fluorescence, and modular accessories like boom stands and auxiliary lenses. Its Greenough optical design ensures high depth of field, making it perfect for intricate dissections, microelectronics assembly, and detailed surface analysis in advanced research and industrial settings.",
          label: "Advanced Microscopy Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Microscopy Solutions",
          description:
            "Explore our Solutions section for ASTM E45-compliant protocols, guides for 3D imaging and surface inspection, and industry-specific applications to optimize your stereo microscope workflows.",
          image: "/productsListing/Stereo_Microscope_Solutions.png",
          label: "Tailored Microscopy Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Application", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "stereo-microscope")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Stereo Microscope",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "stereo-microscope")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Stereo Microscope",
            color: "rgba(80, 140, 160, 0.1)",
            bgColor: "rgba(80, 140, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "stereo-microscope")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "stereo-microscope")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Metagraph (ST)",
            description:
              "Advanced stereo microscope with 5x-80x zoom, Greenough optics, and LED illumination, optimized for 3D inspection of metallographic samples and electronics, compliant with ASTM E45.",
            image: "/images/stereo-microscope/metagraph-st.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Digital Imaging Module",
            description:
              "Trinocular system with high-resolution camera for capturing and analyzing 3D images, streamlining documentation in quality control and research applications.",
            image: "/images/stereo-microscope/digital-imaging.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "stereo-microscope")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Particle Size Analysis Systems",
        slug: "particle-size-analysis-systems",
        heroImage: "/images/particle-size-analysis-systems/particle-size-analysis-systems.png",
        intro: {
          title: "Precision Particle Size Analysis Solutions",
          description:
            "Our Particle Size Analysis Systems provide advanced stereo and metallurgical microscopy solutions for precise particle analysis, fully compliant with ISO 16232. Featuring automated filter scanning, classification of metallic, non-metallic, and fiber particles, motorized stages, and customizable reporting, these systems cater to automotive, aerospace, metallurgical, and industrial applications.",
          categoryLabel: "Explore our particle analysis solutions",
          buttons: [
            { text: "Discover Particle Analysis Systems", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Particle Size Analysis Systems",
          description:
            "Our systems include Stereo models for particles >10 microns and Metallurgical models for particles >3 microns, both with automated filter scanning and ISO 16232-compliant classification. Metallurgical systems add particle height measurement and dual microscopy options for enhanced precision.",
          label: "Our Particle Analysis Products",
        },
        specialtySection: {
          title: "Specialty Particle Analysis Solutions",
          description:
            "For high-resolution, complex, or high-throughput applications, our specialty systems offer tailored automation, advanced microscopy, and custom reporting to meet stringent industry standards.",
          label: "Advanced Particle Analysis Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Particle Analysis Solutions",
          description:
            "Explore our Solutions section for ISO 16232-compliant methods, technical guides, and industry-specific applications to optimize your particle size analysis workflows.",
          image: "/productsListing/Particle_Analysis_Solutions.png",
          label: "Tailored Analysis Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "particle-size-analysis-systems")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Particle Size Analysis Systems",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "particle-size-analysis-systems")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Particle Size Analysis Systems",
            color: "rgba(70, 110, 160, 0.1)",
            bgColor: "rgba(70, 110, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "particle-size-analysis-systems")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "particle-size-analysis-systems")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "CleanView 100 (Stereo)",
            description:
              "Fully automatic stereo system with motorized stage, compliant with ISO 16232, featuring fast filter paper scanning and precise classification of particles >10 microns for cleanliness testing.",
            image: "/images/particle-size-analysis-systems/cleanview-100.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "MetalScan 300 (Metallurgical)",
            description:
              "Fully automatic metallurgical system with stereo and metallurgical microscopes, motorized stage, and particle height measurement, compliant with ISO 16232 for particles >3 microns.",
            image: "/images/particle-size-analysis-systems/metalscan-300.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "particle-size-analysis-systems")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Millipore Fluid Contamination Analysis Kit",
        slug: "millipore-fluid-contamination-analysis-kit",
        heroImage: "/images/millipore-fluid-contamination-analysis-kit/millipore-fluid-contamination-analysis-kit.png",
        intro: {
          title: "Comprehensive Fluid Contamination Analysis",
          description:
            "The Millipore Fluid Contamination Analysis Kit is a complete solution for analyzing particulate contamination in hydraulic fluids, lubricants, fuels, and water, compliant with ISO 16232 and other industry standards. Equipped with a vacuum/pressure pump, dispensing pressure vessel, filter paper, filter flask, solvent dispensers, petri slides, and dispensing bottles, this kit ensures accurate, reliable results for automotive, aerospace, and industrial quality control.",
          categoryLabel: "Explore our contamination analysis solutions",
          buttons: [
            { text: "Discover the Millipore Kit", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Millipore Fluid Contamination Analysis Kit",
          description:
            "Designed for field and laboratory use, this kit includes all necessary components for sampling, filtering, and analyzing fluid contamination. From vacuum filtration to precise solvent dispensing, the kit supports gravimetric, microscopic, and colorimetric analysis to ensure clean parts and fluids in critical applications.",
          label: "Kit Components",
        },
        specialtySection: {
          title: "Specialty Contamination Analysis Solutions",
          description:
            "For advanced applications requiring high-volume filtration, custom solvent handling, or specialized storage, the Millipore kit offers robust components and accessories to meet stringent quality control requirements in industries like automotive and aerospace.",
          label: "Advanced Contamination Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Contamination Analysis Solutions",
          description:
            "Browse our Solutions section for technical guides, ISO 16232-compliant protocols, and industry-specific applications to optimize your fluid contamination analysis processes.",
          image: "/productsListing/Contamination_Analysis_Solutions.png",
          label: "Tailored Analysis Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "millipore-fluid-contamination-analysis-kit")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Millipore Fluid Contamination Analysis Kit",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "millipore-fluid-contamination-analysis-kit")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Millipore Fluid Contamination Analysis Kit",
            color: "rgba(50, 140, 120, 0.1)",
            bgColor: "rgba(50, 140, 120, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "millipore-fluid-contamination-analysis-kit")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "millipore-fluid-contamination-analysis-kit")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Vacuum/Pressure Pump",
            description:
              "Portable vacuum/pressure pump with 25 L/min flow rate and 35 PSIG pressure, designed for field or lab filtration, featuring a thermal overload switch for reliability.",
            image: "/images/millipore-fluid-contamination-analysis-kit/vacuum-pressure-pump.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Dispensing Pressure Vessel",
            description:
              "Autoclavable stainless steel vessel (5-20 L) meeting ASME-UM standards, ideal for high-volume filtration with pressure-operated filter holders, featuring cam-lock closure.",
            image: "/images/millipore-fluid-contamination-analysis-kit/dispensing-pressure-vessel.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "millipore-fluid-contamination-analysis-kit")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        "name": "Image Analyzer",
        "slug": "image-analyzer",
        "heroImage": "/images/image-analyzer/image-analyzer.png",
        "intro": {
          "title": "Advanced Metallurgical Image Analysis",
          "description": "The Image Analyzer is a comprehensive solution for metallurgical and materials science analysis, compliant with ASTM E112 and ISO 643 standards. Featuring tools for grain analysis, phase analysis, nodularity, inclusions, welding, porosity, and more, it delivers precise, automated measurements with customizable reporting for quality control in automotive, aerospace, and industrial applications.",
          "categoryLabel": "Explore our image analysis solutions",
          "buttons": [
            { "text": "Discover Image Analyzer", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Image Analyzer",
          "description": "Equipped with advanced image processing algorithms, the Image Analyzer automates grain size measurement, phase quantification, nodularity analysis, and defect evaluation. Tools like intercept and planimetric methods, point counting, and porosity estimation ensure accurate, repeatable results for metallographic analysis.",
          "label": "Analysis Tools"
        },
        "specialtySection": {
          "title": "Specialty Image Analysis Solutions",
          "description": "For complex microstructures or specialized applications, the Image Analyzer offers tailored tools like B Type flake separation, welding analysis, and annotation, supporting detailed characterization and custom reporting.",
          "label": "Advanced Analysis Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Image Analysis Solutions",
          "description": "Browse our Solutions section for ASTM E112-compliant protocols, technical guides, and industry-specific applications to optimize your metallurgical analysis workflows.",
          "image": "/productsListing/Image_Analysis_Solutions.png",
          "label": "Tailored Analysis Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": products
          .filter((p) => p.categorySlug === "image-analyzer")
          .slice(0, 3)
          .map((p) => ({
            "id": p.id,
            "image": p.image,
            "alt": p.alt,
            "category": "Image Analyzer",
            "title": p.name,
            "description": p.description,
            "reviews": p.reviews,
            "rating": p.rating
          })),
        "products": products
          .filter((p) => p.categorySlug === "image-analyzer")
          .map((p) => ({
            "name": p.name,
            "image": p.image
          })),
        "items": [
          {
            "id": 1,
            "name": "Image Analyzer",
            "color": "rgba(80, 120, 150, 0.1)",
            "bgColor": "rgba(80, 120, 150, 0.1)",
            "subItems": products
              .filter((p) => p.categorySlug === "image-analyzer")
              .map((p) => ({
                "name": p.name,
                "apiCall": p.apiCall
              }))
          }
        ],
        "productCards": products
          .filter((p) => p.categorySlug === "image-analyzer")
          .map((p) => ({
            "id": p.id,
            "name": p.name,
            "tag": p.tag,
            "description": p.description,
            "image": p.image,
            "detail": p.detail,
            "delay": 0.1 * (p.id - 1)
          })),
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Grain Analysis (Intercept Method)",
            "description": "Automates ASTM E112-compliant intercept method, counting grain boundary intersections for precise grain size measurement, optimized for elongated grains.",
            "image": "/images/image-analyzer/grain-analysis-intercept.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Planimetry Method",
            "description": "Counts grains in a known area per ASTM E112, delivering ±0.25 grain size unit precision for equiaxed grains with automated marking and reporting.",
            "image": "/images/image-analyzer/planimetry-method.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": products
          .filter((p) => p.categorySlug === "image-analyzer")
          .map((p) => ({
            "id": p.slug,
            "name": p.name
          }))
      },
    ],
  },

  // mainCategory: "Other Machines"
  {
    mainCategory: "Other Machines",
    categories: [
      {
        name: "Electro Polishing Machine",
        slug: "electro-polishing-machine",
        heroImage: "/images/electro-polishing-machine/electro-polishing-machine.png",
        intro: {
          title: "Precision Electro Polishing Solutions",
          description:
            "The Electro Polishing Machine, featuring the Electropol system, delivers mirror-like, corrosion-resistant finishes on stainless steel, gold, silver, copper, and other metals. Compliant with ASTM B912 and ISO 13485, it offers automated, high-throughput polishing for medical devices, aerospace components, jewelry, and industrial parts, ensuring repeatable micro-tolerance surface roughness finishing.",
          categoryLabel: "Explore our electro polishing solutions",
          buttons: [
            { text: "Discover Electropol", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Electro Polishing Machine",
          description:
            "The Electropol system automates electrochemical polishing with advanced rectifiers (24V/48V), digital timers, and temperature controls. It removes micro-peaks and impurities, enhancing corrosion resistance and surface smoothness for complex geometries in medical, aerospace, and jewelry applications.",
          label: "Polishing Features",
        },
        specialtySection: {
          title: "Specialty Electro Polishing Solutions",
          description:
            "For intricate parts, high-volume production, or delicate materials, the Electropol system offers customizable fixtures, no-dead-angle polishing, and environmentally friendly processes, reducing chemical waste and ensuring high-quality finishes.",
          label: "Advanced Polishing Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Electro Polishing Solutions",
          description:
            "Explore our Solutions section for ASTM B912-compliant protocols, technical guides, and industry-specific applications to optimize your electro polishing workflows.",
          image: "/productsListing/Electro_Polishing_Solutions.png",
          label: "Tailored Polishing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "electro-polishing-machine")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Electro Polishing Machine",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "electro-polishing-machine")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Electro Polishing Machine",
            color: "rgba(70, 130, 180, 0.1)",
            bgColor: "rgba(70, 130, 180, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "electro-polishing-machine")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "electro-polishing-machine")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Electropol Tabletop",
            description:
              "Compact and portable 0.5-15 gallon system for small-scale electro polishing, perfect for medical device prototyping and jewelry finishing with 24V/48V rectifiers.",
            image: "/images/electro-polishing-machine/electropol-tabletop.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Electropol Large-Scale",
            description:
              "Custom-designed system with overhead hoist for polishing large parts, optimized for aerospace and industrial stainless steel applications with high-throughput.",
            image: "/images/electro-polishing-machine/electropol-large-scale.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "electro-polishing-machine")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "In-situ Metallography Kit",
        slug: "in-situ-metallography-kit",
        heroImage: "/images/in-situ-metallography-kit/in-situ-metallography-kit.png",
        intro: {
          title: "Portable In-situ Metallography Solutions",
          description:
            "The In-situ Metallography Kit enables non-destructive, on-site microstructural analysis for large or in-service components. Compliant with ASTM E1351 and ISO 643, it includes a Portable Microscope, Image Analyzer, Replica materials, Portpol Electro Polisher, and Portgrinder Grinder, ideal for power plants, pipelines, and weld inspections in automotive, aerospace, and industrial applications.",
          categoryLabel: "Explore our in-situ metallography solutions",
          buttons: [
            { text: "Discover In-situ Kit", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "In-situ Metallography Kit",
          description:
            "Designed for field use, this kit combines a high-magnification portable microscope, real-time image analysis, replication media, and portable polishing/grinding tools. It supports on-site microstructure observation, failure analysis, and weld quality checks without damaging components, with battery-powered operation for remote locations.",
          label: "Kit Components",
        },
        specialtySection: {
          title: "Specialty In-situ Metallography Solutions",
          description:
            "For challenging field conditions or complex alloys, the kit offers advanced replication techniques, high-resolution imaging, and custom polishing probes, ensuring accurate microstructure analysis and condition monitoring in critical applications.",
          label: "Advanced Metallography Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive In-situ Metallography Solutions",
          description:
            "Explore our Solutions section for ASTM E1351-compliant protocols, technical guides, and industry-specific applications to optimize your on-site metallographic analysis workflows.",
          image: "/productsListing/In-situ_Metallography_Solutions.png",
          label: "Tailored Metallography Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "in-situ-metallography-kit")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "In-situ Metallography Kit",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "in-situ-metallography-kit")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "In-situ Metallography Kit",
            color: "rgba(60, 140, 170, 0.1)",
            bgColor: "rgba(60, 140, 170, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "in-situ-metallography-kit")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "in-situ-metallography-kit")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Portable Microscope",
            description:
              "Battery-powered, portable microscope with 100x-800x magnification, X-Y stage scanning, and 3MP CMOS camera, ideal for on-site microstructure analysis of in-service components.",
            image: "/images/in-situ-metallography-kit/portable-microscope.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Replica",
            description:
              "Non-destructive replication using cellulose acetate film and SiliKem compound, providing 0.1μm accuracy for 3D surface replicas of flat or curved components.",
            image: "/images/in-situ-metallography-kit/replica.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "in-situ-metallography-kit")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Jominy End Quench Hardenability Set-up",
        slug: "jominy-end-quench-hardenability-setup",
        heroImage: "/images/jominy-end-quench/jominy-end-quench-setup.png",
        intro: {
          title: "Precision Jominy End Quench Hardenability Testing",
          description:
            "The Jominy End Quench Hardenability Set-up, featuring an advanced Hardness Fixture and Chiller, delivers precise hardenability testing per ASTM A255 and ISO 642. With a motorized fixture for successive hardness indentations and a fully automatic hardness tester with a motorized programmable stage, it ensures accurate, repeatable results for steel mills, metallurgical labs, and quality control in automotive and aerospace industries.",
          categoryLabel: "Explore our Jominy hardenability solutions",
          buttons: [
            { text: "Discover Jominy Set-up", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Jominy End Quench Hardenability Set-up",
          description:
            "This set-up automates the Jominy test with a motorized hardness fixture for precise indentation spacing (1.5 mm or 1/16 in.) and a chiller for consistent 24°C water quenching. The fully automatic hardness tester with a motorized programmable stage performs direct Rockwell (HRC) or Vickers (HV) measurements, plotting hardenability curves for alloy selection and heat treatment optimization.",
          label: "Testing Features",
        },
        specialtySection: {
          title: "Specialty Hardenability Testing Solutions",
          description:
            "Designed for low to medium hardenability steels (D1 = 1-6 in.), the set-up offers programmable test sequences, digital micrometer indexing, and integration with metallographic analysis software for comprehensive microstructure and hardness profiling.",
          label: "Advanced Testing Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Hardenability Testing Solutions",
          description:
            "Explore our Solutions section for ASTM A255-compliant protocols, Lamont charts for hardness correlation, and industry-specific applications to optimize your Jominy testing workflows.",
          image: "/productsListing/Hardenability_Testing_Solutions.png",
          label: "Tailored Testing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Alloy", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "jominy-end-quench-hardenability-setup")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Jominy End Quench Hardenability Set-up",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "jominy-end-quench-hardenability-setup")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Jominy End Quench Hardenability Set-up",
            color: "rgba(80, 120, 150, 0.1)",
            bgColor: "rgba(80, 120, 150, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "jominy-end-quench-hardenability-setup")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "jominy-end-quench-hardenability-setup")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Hardness Fixture",
            description:
              "Motorized fixture with digital micrometer indexing for precise, successive hardness indentations at 1.5 mm or 1/16 in. intervals, ensuring accurate Jominy hardenability testing per ASTM A255.",
            image: "/images/jominy-end-quench/hardness-fixture.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Automatic Hardness Tester",
            description:
              "Fully automatic hardness tester with a motorized programmable stage, enabling direct Rockwell or Vickers testing for rapid, reliable Jominy hardenability curve generation.",
            image: "/images/jominy-end-quench/automatic-hardness-tester.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "jominy-end-quench-hardenability-setup")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "CNC Tensile Sample Preparation Machines",
        slug: "cnc-tensile-sample-preparation-machines",
        heroImage: "/images/cnc-tensile-sample-preparation/cnc-tensile-sample-preparation.png",
        intro: {
          title: "Advanced CNC Tensile Sample Preparation",
          description:
            "CNC Tensile Sample Preparation Machines deliver precision milling for flat and round tensile specimens, ensuring repeatability and compliance with ASTM E8, ISO 6892, and ASTM A255 for Jominy testing. Featuring threading capabilities, floor and tabletop models, and powerful CNC programs, these machines minimize production time for high-throughput labs in aerospace, automotive, and steel industries.",
          categoryLabel: "Explore our tensile sample preparation solutions",
          buttons: [
            { text: "Discover CNC Machines", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "CNC Tensile Sample Preparation Machines",
          description:
            "Equipped with high-precision servo motors, intuitive TensileSoft™ software, and triple clamping fixtures, these machines offer 0.0003” accuracy for tensile and Jominy sample preparation. Automated threading, rapid milling, and preloaded ASTM/ISO standards ensure repeatable results with minimal operator effort, suitable for soft aluminum to hard Inconel materials.",
          label: "Preparation Features",
        },
        specialtySection: {
          title: "Specialty Sample Preparation Solutions",
          description:
            "Designed for diverse applications, these machines support custom fixturing, Jominy specimen preparation, and advanced CNC machining for complex geometries. Floor and tabletop models cater to labs of all sizes, with optional upgrades for impact testing and threading for button-head or threaded tensile bars.",
          label: "Advanced Preparation Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Sample Preparation Solutions",
          description:
            "Explore our Solutions section for ASTM E8 and ISO 6892-compliant protocols, Jominy test guides, and industry-specific applications to optimize your tensile sample preparation workflows.",
          image: "/productsListing/Tensile_Sample_Preparation_Solutions.png",
          label: "Tailored Preparation Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "cnc-tensile-sample-preparation-machines")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "CNC Tensile Sample Preparation Machines",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "cnc-tensile-sample-preparation-machines")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "CNC Tensile Sample Preparation Machines",
            color: "rgba(90, 130, 160, 0.1)",
            bgColor: "rgba(90, 130, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "cnc-tensile-sample-preparation-machines")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "cnc-tensile-sample-preparation-machines")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Tabletop Model",
            description:
              "Compact CNC machine with a 47” x 47” x 5” footprint, delivering 0.0003” precision for tensile and Jominy sample preparation, ideal for small labs with limited space.",
            image: "/images/cnc-tensile-sample-preparation/tabletop-model.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Jominy Sample Preparation",
            description:
              "Customizable milling and grinding for 25 mm x 100 mm Jominy specimens, ensuring precise surface finish and compliance with ASTM A255 for hardenability testing.",
            image: "/images/cnc-tensile-sample-preparation/jominy-sample-preparation.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "cnc-tensile-sample-preparation-machines")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Hardness Testers",
        slug: "hardness-testers",
        heroImage: "/images/hardness-testers/hardness-testers.png",
        intro: {
          title: "Precision Hardness Testing Solutions",
          description:
            "Hardness Testers measure a material’s resistance to indentation without residual deformation, critical for assessing the quality of metals and parts in automotive, aerospace, and manufacturing. Compliant with ASTM E18, ISO 6506, ISO 6507, and ISO 6508, our testers include Superficial Rockwell, Portable Leeb, Portable Brinell, Rockwell, and Portable Vickers models, suitable for ferrous metals, alloy steel, carbides, treated surfaces, cast iron, non-ferrous metals, and non-metallic materials like hard plastics and Bakelite.",
          categoryLabel: "Explore our hardness testing solutions",
          buttons: [
            { text: "Discover Hardness Testers", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Hardness Testers",
          description:
            "Designed for precision and versatility, our hardness testers evaluate material hardness for quality control. From Superficial Rockwell for treated surfaces and parallel planes to portable Leeb and Vickers for field testing, these systems support cast iron, steel, non-ferrous metals, and hard plastics, delivering accurate, repeatable results across lab and on-site applications.",
          label: "Testing Solutions",
        },
        specialtySection: {
          title: "Specialty Hardness Testing Solutions",
          description:
            "For demanding applications like carburized surfaces, large castings, or field inspections, our testers offer advanced features like digital displays, portable designs, and automated data logging, ensuring compliance with ASTM and ISO standards for diverse materials and geometries.",
          label: "Advanced Testing Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Hardness Testing Solutions",
          description:
            "Explore our Solutions section for ASTM E18 and ISO 6508-compliant protocols, technical guides, and industry-specific applications to optimize your hardness testing workflows.",
          image: "/productsListing/Hardness_Testing_Solutions.png",
          label: "Tailored Testing Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "hardness-testers")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Hardness Testers",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "hardness-testers")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Hardness Testers",
            color: "rgba(70, 110, 150, 0.1)",
            bgColor: "rgba(70, 110, 150, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "hardness-testers")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "hardness-testers")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Superficial Rockwell Hardness Tester",
            description:
              "Precision tester for superficial Rockwell scales (HR15N, HR30T), optimized for carburized, nitrided, and plated surfaces, with high repeatability for parallel planes, compliant with ASTM E18.",
            image: "/images/hardness-testers/superficial-rockwell.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Portable Leeb Hardness Tester",
            description:
              "Lightweight, handheld tester for on-site hardness measurement of large metal components, supporting multiple scales (HL, HB, HV, HRC) with data logging, per ISO 16859.",
            image: "/images/hardness-testers/portable-leeb.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "hardness-testers")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Vertical Band Saw",
        slug: "vertical-band-saw",
        heroImage: "/images/vertical-band-saw/vertical-band-saw.png",
        intro: {
          title: "Precision Vertical Band Saw Solutions",
          description:
            "The Vertical Band Saw delivers high-precision cutting for metals, plastics, and composites, ideal for metallurgical sample preparation, fabrication, and manufacturing. Compliant with ASTM E8 for tensile sample cutting, it features variable speed control, robust construction, and versatility for complex shapes, serving automotive, aerospace, and steel industries with reliable, high-throughput performance.",
          categoryLabel: "Explore our vertical band saw solutions",
          buttons: [
            { text: "Discover Vertical Band Saw", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Vertical Band Saw",
          description:
            "Designed for precision and durability, the Vertical Band Saw offers variable blade speeds (40-10,000 fpm), a tilting worktable (up to 45°), and heavy-duty steel frames. With blade widths from 1/8” to 1” and digital speed indicators, it ensures clean, accurate cuts for materials like stainless steel, aluminum, and hard plastics in lab and production environments.",
          label: "Cutting Features",
        },
        specialtySection: {
          title: "Specialty Cutting Solutions",
          description:
            "For intricate contours, large workpieces, or high-volume production, the Vertical Band Saw provides advanced features like hydraulic table feeds, mist coolant systems, and programmable speed settings, ensuring efficiency and precision in demanding applications.",
          label: "Advanced Cutting Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Cutting Solutions",
          description:
            "Explore our Solutions section for ASTM E8-compliant cutting protocols, technical guides, and industry-specific applications to optimize your Vertical Band Saw workflows.",
          image: "/productsListing/Vertical_Band_Saw_Solutions.png",
          label: "Tailored Cutting Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "vertical-band-saw")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Vertical Band Saw",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "vertical-band-saw")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Vertical Band Saw",
            color: "rgba(80, 120, 160, 0.1)",
            bgColor: "rgba(80, 120, 160, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "vertical-band-saw")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "vertical-band-saw")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Heavy-Duty Model",
            description:
              "Robust Vertical Band Saw with 26” throat depth, hydraulic table feed, and high-speed blades (up to 10,000 fpm), optimized for cutting tough alloys and large workpieces in high-volume production.",
            image: "/images/vertical-band-saw/heavy-duty-model.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Compact Model",
            description:
              "Space-saving Vertical Band Saw with 14” throat depth and digital controls, designed for precision cutting of tensile samples and small components in metallurgical labs.",
            image: "/images/vertical-band-saw/compact-model.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "vertical-band-saw")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        name: "Transparent Mould Making System",
        slug: "transparent-mould-making-system",
        heroImage: "/images/transmount/transmount-system.png",
        intro: {
          title: "Transmount Transparent Mould Making Solutions",
          description:
            "The Transmount Transparent Mould Making System revolutionizes mould creation with high-clarity silicone rubber, enabling precise monitoring of casting processes. Compliant with ASTM D412, it offers a 1:1 mixing ratio, bubble-free casting, and durability for resins, silicones, and low-melting-point metals, ideal for prototyping, jewelry, and industrial design in automotive, aerospace, and artisanal applications.",
          categoryLabel: "Explore our transparent mould making solutions",
          buttons: [
            { text: "Discover Transmount System", variant: "primary" },
            { text: "Contact Our Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Transmount Transparent Mould Making System",
          description:
            "The Transmount system uses translucent silicone rubber (Shore A 22-50) for moulds with excellent tear resistance and transparency, allowing real-time monitoring of resin flow and part formation. Features include a 1:1 mixing ratio, heat resistance up to 250°C, and compatibility with epoxy, polyurethane, and tin/lead casting, ensuring precision and repeatability for complex geometries.",
          label: "Mould Making Features",
        },
        specialtySection: {
          title: "Specialty Mould Making Solutions",
          description:
            "Optimized for intricate designs and high-detail replication, Transmount supports custom pigmentation, rapid-curing options, and food-grade applications. Its transparent nature aids in cutting partial seams for block moulds, making it perfect for one-off prototypes and high-volume production in demanding environments.",
          label: "Advanced Mould Making Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Mould Making Solutions",
          description:
            "Explore our Solutions section for ASTM D412-compliant protocols, technical guides for silicone mould making, and industry-specific applications to optimize your Transmount workflows.",
          image: "/productsListing/Transmount_Solutions.png",
          label: "Tailored Mould Making Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "transparent-mould-making-system")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Transmount Transparent Mould Making System",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "transparent-mould-making-system")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Transmount Transparent Mould Making System",
            color: "rgba(90, 140, 170, 0.1)",
            bgColor: "rgba(90, 140, 170, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "transparent-mould-making-system")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "transparent-mould-making-system")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 1),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "High-Temperature Kit",
            description:
              "2kg transparent silicone kit with heat resistance up to 250°C, optimized for casting low-melting-point metals and high-detail industrial prototypes.",
            image: "/images/transmount/high-temp-kit.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "Rapid-Cure Kit",
            description:
              "500g fast-curing translucent silicone kit, designed for rapid mould production with high tear resistance and clarity for artisanal and prototyping needs.",
            image: "/images/transmount/rapid-cure-kit.png",
            delay: 0.2,
            animationX: 50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "transparent-mould-making-system")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
    ],
  },
];

export const getCategoryBySlug = (slug) => {
  if (typeof slug !== "string" || !slug.trim()) return null;
  return categories.find((category) => category.slug === slug);
};

export const getSubCategoryById = (categorySlug, subCategoryId) => {
  if (typeof categorySlug !== "string" || !subCategoryId) return null;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.subCategories.find((sub) => sub.id === subCategoryId);
};

export const getProductBySlug = (categorySlug, subCategorySlug) => {
  if (typeof categorySlug !== "string" || typeof subCategorySlug !== "string") return null;
  return products.find((product) => product.categorySlug === categorySlug && product.slug === subCategorySlug);
}
