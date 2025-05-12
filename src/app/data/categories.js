const products = [
  // Automatic Cutting Machines
  {
    id: 1,
    categorySlug: "automatic-cutting-machines",
    name: "AutoCut",
    slug: "autocut",
    description: "The AutoCut is a high-precision automatic cutting machine designed for metallographic and materialographic sample preparation. It features motorized XYZ motions and automatic serial cutting for efficient and accurate sectioning.",
    image: "/images/automatic-cutting-machines/autocut.png",
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
      "/product/AutoCut1.jpg",
      "/product/AutoCut2.jpg",
      "/product/AutoCut3.jpg",
      "/product/AutoCut4.jpg"
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
        image: "/product/cuttingWheels.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For precision cutting",
        image: "/product/coolantFluid.png"
      },
      {
        title: "Strainer Kit",
        subtitle: "For small cut sections and sludge collection",
        image: "/product/strainerKit.png"
      },
      {
        title: "Anti-Splash Guard",
        subtitle: "For operator safety",
        image: "/product/antiSplashGuard.png"
      }
    ],
    literature: [
      { title: "AutoCut User Manual", image: "/product/autocut-manual.png" },
      { title: "AutoCut Brochure", image: "/product/autocut-brochure.png" },
      { title: "Precision Cutting Guide", image: "/product/cutting-guide.png" }
    ]
  },
  {
    id: 2,
    categorySlug: "automatic-cutting-machines",
    name: "Auto S",
    slug: "auto-s",
    description: "Semi-automatic cutting system with intelligent feed control for optimal cutting performance and safety.",
    image: "/images/automatic-cutting-machines/auto-s.png",
    alt: "Automatic Cutting Machine - Auto S",
    rating: 4.4,
    reviews: 35,
    tag: "Semi-Automatic",
    detail: "Manual override",
    apiCall: "/api/automatic-cutting/auto-s",
  },
  {
    id: 3,
    categorySlug: "automatic-cutting-machines",
    name: "MetaCut SACT 50/80",
    slug: "metacut-sact-50-80",
    description: "The MetaCut SACT 50/80 is a versatile cutting machine designed for precision sectioning of hardened materials. With options for 50mm or 80mm cutting capacity and advanced features like laser marking and hydraulic automation, it is ideal for metallographic analysis.",
    image: "/images/automatic-cutting-machines/metacut-sact-50-80.png",
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
      "/product/MetaCut1.jpg",
      "/product/MetaCut2.jpg",
      "/product/MetaCut3.jpg",
      "/product/MetaCut4.jpg"
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
        image: "/product/abrasiveWheels.png"
      },
      {
        title: "Cutting Fluid",
        subtitle: "For hardened material cutting",
        image: "/product/cuttingFluid.png"
      },
      {
        title: "Sample Holders",
        subtitle: "For secure sample positioning",
        image: "/product/sampleHolders.png"
      }
    ],
    literature: [
      { title: "MetaCut SACT 50/80 User Manual", image: "/product/metacut-manual.png" },
      { title: "MetaCut SACT Brochure", image: "/product/metacut-brochure.png" },
      { title: "Hardened Material Cutting Guide", image: "/product/hardened-cutting-guide.png" }
    ]
  },
  {
    id: 4,
    categorySlug: "automatic-cutting-machines",
    name: "Oscillating Abrasive Cut-off",
    slug: "oscillating-abrasive",
    description: "Designed for fast and precise cutting of hard materials using oscillating abrasive blades for minimal burring.",
    image: "/images/automatic-cutting-machines/oscillating-cut-off.png",
    alt: "Oscillating Abrasive Cut-off Machine",
    rating: 4.5,
    reviews: 30,
    tag: "Hard Material",
    detail: "Low burring",
    apiCall: "/api/automatic-cutting/oscillating-abrasive",
  },
  {
    id: 12,
    categorySlug: "automatic-cutting-machines",
    name: "Metacut",
    slug: "metacut",
    description: "The Metacut is a compact and efficient cutting machine designed for precision sectioning of materials with a cutting capacity of 40mm diameter. Powered by a 3 HP motor, it is ideal for metallographic sample preparation.",
    image: "/images/automatic-cutting-machines/metacut.png",
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
      "/product/Metacut1.jpg",
      "/product/Metacut2.jpg",
      "/product/Metacut3.jpg",
      "/product/Metacut4.jpg"
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
        subtitle: "For 40mm cutting",
        image: "/product/abrasiveWheelsMetacut.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For precision cutting",
        image: "/product/coolantFluidMetacut.png"
      },
      {
        title: "Sample Clamps",
        subtitle: "For secure sample holding",
        image: "/product/sampleClamps.png"
      }
    ],
    literature: [
      { title: "Metacut User Manual", image: "/product/metacut-manual.png" },
      { title: "Metacut Brochure", image: "/product/metacut-brochure.png" },
      { title: "Precision Cutting Guide", image: "/product/precision-cutting-guide.png" }
    ]
  },
  {
    id: 13,
    categorySlug: "automatic-cutting-machines",
    name: "Metacut-I Auto",
    slug: "metacut-i-auto",
    description: "The Metacut-I Auto is an advanced automatic cutting machine with PLC-controlled programming and a 200mm cutting stroke. It features auto cutting in the Y direction and precise motor positioning, making it ideal for automated metallographic sample preparation.",
    image: "/images/automatic-cutting-machines/metacut-i-auto.png",
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
      "/product/MetacutIAuto1.jpg",
      "/product/MetacutIAuto2.jpg",
      "/product/MetacutIAuto3.jpg",
      "/product/MetacutIAuto4.jpg"
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
        subtitle: "For 40mm cutting",
        image: "/product/abrasiveWheelsMetacutIAuto.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For automated cutting",
        image: "/product/coolantFluidMetacutIAuto.png"
      },
      {
        title: "Sample Holders",
        subtitle: "For secure sample positioning",
        image: "/product/sampleHoldersMetacutIAuto.png"
      }
    ],
    literature: [
      { title: "Metacut-I Auto User Manual", image: "/product/metacut-i-auto-manual.png" },
      { title: "Metacut-I Auto Brochure", image: "/product/metacut-i-auto-brochure.png" },
      { title: "Automated Cutting Guide", image: "/product/automated-cutting-guide.png" }
    ]
  },
  {
    id: 6,
    categorySlug: "automatic-cutting-machines",
    name: "Tube Cutting Machine",
    slug: "tube-cutting",
    description: "Specialized cutting equipment for tubes and cylindrical specimens ensuring clean cuts without deformation.",
    image: "/images/automatic-cutting-machines/tube-cutting.png",
    alt: "Tube Cutting Machine",
    rating: 4.6,
    reviews: 32,
    tag: "Specialized",
    detail: "Tubular parts",
    apiCall: "/api/automatic-cutting/tube-cutting",
  },
  {
    id: 7,
    categorySlug: "automatic-cutting-machines",
    name: "High-Precision Servo Cut",
    slug: "high-precision-cut",
    description: "Servo-controlled cutting system offering unmatched accuracy and smooth motion control for critical applications.",
    image: "/images/automatic-cutting-machines/high-precision-cut.png",
    alt: "High-Precision Servo Cut Machine",
    rating: 4.8,
    reviews: 35,
    tag: "Servo-Controlled",
    detail: "Critical tolerance",
    apiCall: "/api/automatic-cutting/high-precision-cut",
  },
  {
    id: 8,
    categorySlug: "automatic-cutting-machines",
    name: "SimpliMet 4000",
    slug: "simplimet-4000",
    description: "The SimpliMet 4000 Compression Mounting press is a robust machine designed to encapsulate metallographic samples. It mounts samples from 1 to 1.5in (25 to 40mm) in molds.",
    image: "/images/automatic-cutting-machines/simplimet-4000.png",
    alt: "SimpliMet 4000 Compression Mounting Press",
    rating: 4.8,
    reviews: 45,
    tag: "Compression Mounting",
    detail: "Dual mount capability",
    apiCall: "/api/automatic-cutting/simplimet-4000",
    features: [
      "Reduced cycle time – under 8 minutes",
      "SmartCool feature actively monitors for safe handling",
      "Programmable control system for reproducible results",
      "Robust design with high efficiency heating and cooling",
      "Water-saving automatic cooling circuit",
      "Duplex spacer enables the machine to create 2 fully cured mounts in one cycle",
    ],
    additionalFeatures: [
      "Programmable height which saves benchtop space",
      "Multiple machines can be conveniently lined up side by side, optimizing space usage",
    ],
    images: [
      "/product/Simplimate1.jpg",
      "/product/Simplimate2.jpg",
      "/product/Simplimate3.jpg",
      "/product/Simplimate4.jpg",
    ],
    video: "/product/SimpliMet_4000.mp4",
    specifications: [
      { param: "Operation", value: "Automatic | Semi-Automatic" },
      { param: "Mounting Mold Sizes", value: "English: 1in, 1.25in, 1.5in<br/>Metric: 25mm, 30mm, 40mm" },
      { param: "Pressure", value: "600 - 4500psi (4.1 - 310bar) operational pressure range<br/>Adjustable in 50psi increments" },
      { param: "Heat Time", value: "User selectable from 1-99 minutes" },
      { param: "Curing Temperature", value: "150°F - 392°F (65°C - 200°C) selectable temperature range" },
      { param: "Heating Power", value: "1000 Watts (110VAC) / 1500 Watts (230VAC)" },
    ],
    ordering: [
      { part: "20-1311-500", mold: "1in Mold", voltage: "85-264VAC, 50/60Hz" },
      { part: "20-1311-502", mold: "30mm Mold", voltage: "85-264VAC, 50/60Hz" },
      { part: "20-1311-512", mold: "1.25in Mold", voltage: "85-264VAC, 50/60Hz" },
      { part: "20-1311-514", mold: "40mm Mold", voltage: "85-264VAC, 50/60Hz" },
    ],
    consumables: [
      {
        title: "Compression Mounting Compound",
        subtitle: "for SimpliMet 4000",
        image: "/product/compressionMountingCompound.png",
      },
      {
        title: "Release Agent",
        subtitle: "for compression mounting",
        image: "/product/releaseAgent.png",
      },
      {
        title: "Mounting Accessories",
        subtitle: "Support Clips / Sample Holders",
        image: "/product/mountingAccessories.png",
      },
    ],
    literature: [
      { title: "Compression Mounting Guide", image: "/product/mounting-guide.png" },
      { title: "SimpliMet 4000 Brochure", image: "/product/simplimet-brochure.png" },
      { title: "Buehler Product Catalog", image: "/product/product-catalog.png" },
    ],
  },
  // Oscillating Abrasive Cut-off Machine
  {
    id: 9,
    categorySlug: "oscillating-abrasive-cut-off-machines",
    name: "Oscicut",
    slug: "oscicut",
    description: "The Oscicut is a robust oscillating abrasive cut-off machine designed for large cross-section cutting. With a capacity of 120mm to 160mm and a 15 HP motor, it utilizes a cam-based oscillation technology for minimal burn and precise cuts, ideal for large components.",
    image: "/images/oscillating-abrasive-cut-off-machines/oscicut.png",
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
      "/product/Oscicut1.jpg",
      "/product/Oscicut2.jpg",
      "/product/Oscicut3.jpg",
      "/product/Oscicut4.jpg"
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
        image: "/product/abrasiveWheelsOscicut.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For minimal burn cutting",
        image: "/product/coolantFluidOscicut.png"
      },
      {
        title: "Vice Inserts",
        subtitle: "For double parallel vice",
        image: "/product/viceInserts.png"
      }
    ],
    literature: [
      { title: "Oscicut User Manual", image: "/product/oscicut-manual.png" },
      { title: "Oscicut Brochure", image: "/product/oscicut-brochure.png" },
      { title: "Large Section Cutting Guide", image: "/product/large-section-cutting-guide.png" }
    ]
  },
  // Large Component Cutting Machine
  {
    id: 14,
    categorySlug: "large-component-cutting-machines",
    name: "Metacut L 10 / L 15",
    slug: "metacut-l-10-15",
    description: "The Metacut L series (L 10 and L 15) is designed for heavy-duty cutting of large components, offering manual and automatic modes for cross-sectional or longitudinal cutting of hardened materials. With robust 10 HP or 15 HP motors and smart cutting features, it ensures precision and efficiency.",
    image: "/images/large-component-cutting-machines/metacut-l-10-15.png",
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
      "/product/MetacutL1.jpg",
      "/product/MetacutL2.jpg",
      "/product/MetacutL3.jpg",
      "/product/MetacutL4.jpg"
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
        image: "/product/abrasiveWheelsMetacutL.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For heavy-duty cutting",
        image: "/product/coolantFluidMetacutL.png"
      },
      {
        title: "T-Slot Clamps",
        subtitle: "For securing large components",
        image: "/product/tSlotClamps.png"
      },
      {
        title: "Pulse Cutting Kit",
        subtitle: "For hardness variation cutting",
        image: "/product/pulseCuttingKit.png"
      }
    ],
    literature: [
      { title: "Metacut L Series User Manual", image: "/product/metacut-l-manual.png" },
      { title: "Metacut L Series Brochure", image: "/product/metacut-l-brochure.png" },
      { title: "Large Component Cutting Guide", image: "/product/large-component-cutting-guide.png" }
    ]
  },
  // Diamond Cutting Machine
  {
    id: 15,
    categorySlug: "diamond-cutting-machines",
    name: "DCM",
    slug: "dcm",
    description: "The DCM is a precision diamond cutting machine engineered for sectioning hard samples, including those with nitriding layers and aluminum, while preserving material integrity for retained austenite estimation. Equipped with a 0.3mm thick diamond wheel and variable speed control from 200 to 500 rpm, it ensures minimal damage and high accuracy.",
    image: "/images/diamond-cutting-machines/dcm.png",
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
      "/product/DCM1.jpg",
      "/product/DCM2.jpg",
      "/product/DCM3.jpg",
      "/product/DCM4.jpg"
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
        image: "/product/diamondWheelsDCM.png"
      },
      {
        title: "Coolant Fluid",
        subtitle: "For low-temperature cutting",
        image: "/product/coolantFluidDCM.png"
      },
      {
        title: "Sample Holders",
        subtitle: "For hard and nitrided samples",
        image: "/product/sampleHoldersDCM.png"
      }
    ],
    literature: [
      { title: "DCM User Manual", image: "/product/dcm-manual.png" },
      { title: "DCM Brochure", image: "/product/dcm-brochure.png" },
      { title: "Diamond Cutting Guide", image: "/product/diamond-cutting-guide.png" }
    ]
  },
  // Moulding Machines
  {
    id: 16,
    categorySlug: "moulding-machines",
    name: "Automount Pneumatic Press",
    slug: "automount-pneumatic-press",
    description: "The Automount Pneumatic Press is a high-efficiency mounting press designed for metallographic sample preparation. Utilizing pneumatic pressure, it offers rapid and reliable sample encapsulation, ideal for high-volume laboratories.",
    image: "/images/moulding-machines/automount-pneumatic.png",
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
      "/product/AutomountPneumatic1.jpg",
      "/product/AutomountPneumatic2.jpg",
      "/product/AutomountPneumatic3.jpg",
      "/product/AutomountPneumatic4.jpg"
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
        title: "Phenolic Mounting Compound",
        subtitle: "For pneumatic mounting",
        image: "/product/phenolicCompound.png"
      },
      {
        title: "Release Agent",
        subtitle: "For easy mould release",
        image: "/product/releaseAgentPneumatic.png"
      },
      {
        title: "Mould Sleeves",
        subtitle: "Interchangeable mould sizes",
        image: "/product/mouldSleeves.png"
      }
    ],
    literature: [
      { title: "Automount Pneumatic Press User Manual", image: "/product/automount-pneumatic-manual.png" },
      { title: "Automount Pneumatic Brochure", image: "/product/automount-pneumatic-brochure.png" },
      { title: "Metallographic Mounting Guide", image: "/product/mounting-guide.png" }
    ]
  },
  {
    id: 17,
    categorySlug: "moulding-machines",
    name: "Automount E Electro Press",
    slug: "automount-e-electro-press",
    description: "The Automount E Electro Press is a fully electromechanical mounting press designed for precise metallographic sample preparation. Its complete electromechanical operation ensures consistent pressure and temperature control, making it ideal for laboratories requiring high precision.",
    image: "/images/moulding-machines/automount-e-electro.png",
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
      "/product/AutomountE1.jpg",
      "/product/AutomountE2.jpg",
      "/product/AutomountE3.jpg",
      "/product/AutomountE4.jpg"
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
        title: "Mounting Compound",
        subtitle: "For electromechanical mounting",
        image: "/product/mountingCompoundE.png"
      },
      {
        title: "Release Agent",
        subtitle: "For easy mould release",
        image: "/product/releaseAgentE.png"
      },
      {
        title: "Mould Sleeves",
        subtitle: "Interchangeable mould sizes",
        image: "/product/mouldSleevesE.png"
      }
    ],
    literature: [
      { title: "Automount E Electro Press User Manual", image: "/product/automount-e-manual.png" },
      { title: "Automount E Electro Brochure", image: "/product/automount-e-brochure.png" },
      { title: "Metallographic Mounting Guide", image: "/product/mounting-guide.png" }
    ]
  },
  {
    id: 18,
    categorySlug: "moulding-machines",
    name: "Automount EH Electro Hydraulic Press",
    slug: "automount-eh-electro-hydraulic",
    description: "The Automount EH Electro Hydraulic Press is a high-throughput mounting press with four-mould capability and dual mould cylinders, delivering up to 300 bar pressure. Designed for simultaneous mounting of four samples, it is optimized for integration with auto grinder polishers in metallographic laboratories.",
    image: "/images/moulding-machines/automount-eh-electro-hydraulic.png",
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
      "/product/AutomountEH1.jpg",
      "/product/AutomountEH2.jpg",
      "/product/AutomountEH3.jpg",
      "/product/AutomountEH4.jpg"
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
        title: "Mounting Compound",
        subtitle: "For high-pressure mounting",
        image: "/product/mountingCompoundEH.png"
      },
      {
        title: "Release Agent",
        subtitle: "For four-mould release",
        image: "/product/releaseAgentEH.png"
      },
      {
        title: "Mould Sleeves",
        subtitle: "Interchangeable four-mould sizes",
        image: "/product/mouldSleevesEH.png"
      }
    ],
    literature: [
      { title: "Automount EH Electro Hydraulic Press User Manual", image: "/product/automount-eh-manual.png" },
      { title: "Automount EH Electro Hydraulic Brochure", image: "/product/automount-eh-brochure.png" },
      { title: "Metallographic Mounting Guide", image: "/product/mounting-guide.png" }
    ]
  },
  // Grinding, Polishing Machine
  {
    id: 19,
    categorySlug: "grinding-polishing-machines",
    name: "Metapol DC II",
    slug: "metapol-dc-ii",
    description: "The Metapol DC II is a manual grinding and polishing machine designed for metallographic sample preparation. With disc diameters of 200mm or 250mm and optional magnetic fixation, it offers flexibility and precision for laboratory applications.",
    image: "/images/grinding-polishing-machines/metapol-dc-ii.png",
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
      "/product/MetapolDCII1.jpg",
      "/product/MetapolDCII2.jpg",
      "/product/MetapolDCII3.jpg",
      "/product/MetapolDCII4.jpg"
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
        image: "/product/grindingDiscsMetapol.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Self-adhesive, for fine polishing",
        image: "/product/polishingClothsMetapol.png"
      },
      {
        title: "Diamond Suspensions",
        subtitle: "For precision polishing",
        image: "/product/diamondSuspensions.png"
      }
    ],
    literature: [
      { title: "Metapol DC II User Manual", image: "/product/metapol-dc-ii-manual.png" },
      { title: "Metapol DC II Brochure", image: "/product/metapol-dc-ii-brochure.png" },
      { title: "Metallographic Grinding Polishing Guide", image: "/product/grinding-polishing-guide.png" }
    ]
  },
  // Belt Grinder
  {
    id: 20,
    categorySlug: "belt-grinders",
    name: "MBG I / MBG II",
    slug: "mbg-i-ii",
    description: "The MBG I and MBG II are compact belt grinders designed for initial rough grinding in metallographic preparation. Featuring a 4x9 inch belt size, 1/2 HP motor, and dry operation, they offer easy belt replacement and an optional suction arrangement for dust control.",
    image: "/images/belt-grinders/mbg-i-ii.png",
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
      "/product/MBG1.jpg",
      "/product/MBG2.jpg",
      "/product/MBG3.jpg",
      "/product/MBG4.jpg"
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
        title: "Abrasive Belts",
        subtitle: "4x9 inch for rough grinding",
        image: "/product/abrasiveBeltsMBG.png"
      },
      {
        title: "Suction Filters",
        subtitle: "For optional dust suction system",
        image: "/product/suctionFiltersMBG.png"
      },
      {
        title: "Belt Tensioning Kit",
        subtitle: "For belt replacement and adjustment",
        image: "/product/beltTensioningKit.png"
      }
    ],
    literature: [
      { title: "MBG I / MBG II User Manual", image: "/product/mbg-i-ii-manual.png" },
      { title: "MBG I / MBG II Brochure", image: "/product/mbg-i-ii-brochure.png" },
      { title: "Belt Grinding Guide", image: "/product/belt-grinding-guide.png" }
    ]
  },
  // Heavy Duty Belt Grinder
  {
    id: 21,
    categorySlug: "heavy-duty-belt-grinders",
    name: "Heavy Duty Belt Grinder",
    slug: "heavy-duty-belt-grinder",
    description: "The Heavy Duty Belt Grinder is a robust machine designed for industrial metallographic and material preparation. With a 150x2000mm belt, 3 HP motor, and twin RPM settings (1800/2400), it features V-belt drive, suction facility, guards, starter, and a belt tracking and tensioning system for optimal performance.",
    image: "/images/heavy-duty-belt-grinders/heavy-duty-belt-grinder.png",
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
      "/product/HeavyDutyBeltGrinder1.jpg",
      "/product/HeavyDutyBeltGrinder2.jpg",
      "/product/HeavyDutyBeltGrinder3.jpg",
      "/product/HeavyDutyBeltGrinder4.jpg"
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
      { title: "Heavy Duty Belt Grinder User Manual", image: "/product/heavy-duty-belt-grinder-manual.png" },
      { title: "Heavy Duty Belt Grinder Brochure", image: "/product/heavy-duty-belt-grinder-brochure.png" },
      { title: "Industrial Grinding Guide", image: "/product/industrial-grinding-guide.png" }
    ]
  },
  // Automatic Spectro Sample Grinding Machine
  {
    id: 22,
    categorySlug: "automatic-spectro-sample-grinding-machines",
    name: "Spectro Pol Auto",
    slug: "spectro-pol-auto",
    description: "The Spectro Pol Auto is an advanced automatic spectro sample grinding machine designed for high-precision preparation of three samples simultaneously. Featuring a 200x2000mm belt, pneumatic grinding force, electromagnetic sample attachment, and an HMI/PLC operation panel, it ensures consistent and efficient sample preparation for spectrographic analysis.",
    image: "/images/automatic-spectro-sample-grinding-machines/spectro-pol-auto.png",
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
      "/product/SpectroPolAuto1.jpg",
      "/product/SpectroPolAuto2.jpg",
      "/product/SpectroPolAuto3.jpg",
      "/product/SpectroPolAuto4.jpg"
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
        image: "/product/abrasiveBeltsSpectroPol.png"
      },
      {
        title: "Suction Filters",
        subtitle: "For dust suction system",
        image: "/product/suctionFiltersSpectroPol.png"
      },
      {
        title: "Sample Holders",
        subtitle: "For electromagnetic attachment",
        image: "/product/sampleHoldersSpectroPol.png"
      }
    ],
    literature: [
      { title: "Spectro Pol Auto User Manual", image: "/product/spectro-pol-auto-manual.png" },
      { title: "Spectro Pol Auto Brochure", image: "/product/spectro-pol-auto-brochure.png" },
      { title: "Spectrographic Grinding Guide", image: "/product/spectro-grinding-guide.png" }
    ]
  },
  // Semi Automatic Grinding Polishing Machine
  {
    id: 23,
    categorySlug: "semi-automatic-grinding-polishing-machines",
    name: "Autopol",
    slug: "autopol",
    description: "The Autopol is a semi-automatic grinding and polishing machine designed for metallographic sample preparation. With independent force application and the ability to process six specimens simultaneously, it offers flexibility and precision through pneumatic or electrical operation and a PLC-based programmable operation panel.",
    image: "/images/semi-automatic-grinding-polishing-machines/autopol.png",
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
      "/product/Autopol1.jpg",
      "/product/Autopol2.jpg",
      "/product/Autopol3.jpg",
      "/product/Autopol4.jpg"
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
        title: "Grinding Discs",
        subtitle: "For 200mm, 250mm, 300mm diameters",
        image: "/product/grindingDiscsAutopol.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/product/polishingClothsAutopol.png"
      },
      {
        title: "Diamond Suspensions",
        subtitle: "For precision polishing",
        image: "/product/diamondSuspensionsAutopol.png"
      }
    ],
    literature: [
      { title: "Autopol User Manual", image: "/product/autopol-manual.png" },
      { title: "Autopol Brochure", image: "/product/autopol-brochure.png" },
      { title: "Metallographic Grinding Polishing Guide", image: "/product/grinding-polishing-guide.png" }
    ]
  },
  {
    id: 24,
    categorySlug: "semi-automatic-grinding-polishing-machines",
    name: "Autopol Dual",
    slug: "autopol-dual",
    description: "The Autopol Dual is a semi-automatic dual-disc grinding and polishing machine for metallographic sample preparation. It supports independent force application for six specimens, with pneumatic or electrical operation and a PLC-based programmable operation panel, ensuring high precision and throughput.",
    image: "/images/semi-automatic-grinding-polishing-machines/autopol-dual.png",
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
      "/product/AutopolDual1.jpg",
      "/product/AutopolDual2.jpg",
      "/product/AutopolDual3.jpg",
      "/product/AutopolDual4.jpg"
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
        title: "Grinding Discs",
        subtitle: "For 200mm, 250mm, 300mm diameters",
        image: "/product/grindingDiscsAutopolDual.png"
      },
      {
        title: "Polishing Cloths",
        subtitle: "Magnetic-backed for fine polishing",
        image: "/product/polishingClothsAutopolDual.png"
      },
      {
        title: "Diamond Suspensions",
        subtitle: "For precision polishing",
        image: "/product/diamondSuspensionsAutopolDual.png"
      }
    ],
    literature: [
      { title: "Autopol Dual User Manual", image: "/product/autopol-dual-manual.png" },
      { title: "Autopol Dual Brochure", image: "/product/autopol-dual-brochure.png" },
      { title: "Metallographic Grinding Polishing Guide", image: "/product/grinding-polishing-guide.png" }
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
    id: 9,
    categorySlug: "microscope-and-image-analyzer",
    name: "Inverted Microscope",
    slug: "inverted-microscope",
    description: "High-resolution inverted microscope for precise imaging of flat, mounted samples in material science.",
    image: "/images/microscope-and-image-analyzer/inverted-microscope.png",
    alt: "Inverted Microscope",
    rating: 4.8,
    reviews: 42,
    tag: "Metallography",
    detail: "High magnification",
    apiCall: "/api/microscope/inverted",
  },
  {
    id: 10,
    categorySlug: "microscope-and-image-analyzer",
    name: "Upright Microscope",
    slug: "upright-microscope",
    description: "Upright microscope for high-magnification imaging of non-flat or mounted samples in various applications.",
    image: "/images/microscope-and-image-analyzer/upright-microscope.png",
    alt: "Upright Microscope",
    rating: 4.6,
    reviews: 39,
    tag: "Versatile",
    detail: "Multi-light sources",
    apiCall: "/api/microscope/upright",
  },
  {
    id: 11,
    categorySlug: "microscope-and-image-analyzer",
    name: "Stereo Microscope",
    slug: "stereo-microscope",
    description: "Zoom stereo microscope designed for large sample analysis and multi-focal imaging.",
    image: "/images/microscope-and-image-analyzer/stereo-microscope.png",
    alt: "Stereo Microscope",
    rating: 4.5,
    reviews: 37,
    tag: "Macro Imaging",
    detail: "Wide field of view",
    apiCall: "/api/microscope/stereo",
  },
  {
    id: 12,
    categorySlug: "microscope-and-image-analyzer",
    name: "OmniMet Software",
    slug: "omnimet-software",
    description: "Advanced image analysis software for quantitative measurements, including grain size and phase analysis.",
    image: "/images/microscope-and-image-analyzer/omnimet-software.png",
    alt: "OmniMet Image Analysis Software",
    rating: 4.7,
    reviews: 34,
    tag: "Image Analysis",
    detail: "Quantitative analysis",
    apiCall: "/api/image-analyzer/omnimet",
  },
  {
    id: 13,
    categorySlug: "microscope-and-image-analyzer",
    name: "Metallurgical Image Analyzer",
    slug: "metallurgical-analyzer",
    description: "Dedicated system for metallographic analysis, including nodularity and inclusion measurements.",
    image: "/images/microscope-and-image-analyzer/metallurgical-analyzer.png",
    alt: "Metallurgical Image Analyzer",
    rating: 4.6,
    reviews: 31,
    tag: "Specialized",
    detail: "Standards-compliant",
    apiCall: "/api/image-analyzer/metallurgical",
  },
  {
    id: 14,
    categorySlug: "microscope-and-image-analyzer",
    name: "Confocal Microscope",
    slug: "confocal-microscope",
    description: "Confocal microscope for high-resolution 3D imaging and advanced material characterization.",
    image: "/images/microscope-and-image-analyzer/confocal-microscope.png",
    alt: "Confocal Microscope",
    rating: 4.9,
    reviews: 40,
    tag: "3D Imaging",
    detail: "3D reconstruction",
    apiCall: "/api/microscope/confocal",
  },

  // Automatic Micro Hardness Tester
  {
    id: 26,
    categorySlug: "automatic-micro-hardness-testers",
    name: "Fully Automatic MVH-V",
    slug: "fully-automatic-mvh-v",
    description: "The Fully Automatic MVH-V is a state-of-the-art micro Vickers hardness tester designed for precise and automated hardness testing. Featuring motorized X-Y and Z motion, autofocus, auto reading, and automatic effective case graph generation, it supports a load range of 1g to 2000g (3000g optional). With manual override for all automation and an optional overview camera for component imaging and hardness profile direction, it is ideal for metallographic laboratories and quality control.",
    image: "/images/automatic-micro-hardness-testers/mvh-v.png",
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
    categorySlug: "micro-macro-hardness-testers",
    name: "MVH-I C",
    slug: "mvh-i-c",
    description: "The MVH-I C is a versatile micro/macro hardness tester with load cell-based technology and closed-loop control, offering both manual and computerized operation. With a load range from 10gf to 30kgf, optional autofocus, and an optional auto XY stage, it is designed for precise Vickers and Knoop hardness testing in metallographic and quality control applications.",
    image: "/images/micro-macro-hardness-testers/mvh-i-c.png",
    alt: "MVH-I C Micro Macro Hardness Tester",
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
    categorySlug: "electro-polishing-machines",
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
    categorySlug: "in-situ-metallography-kits",
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
    categorySlug: "in-situ-metallography-kits",
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
    categorySlug: "in-situ-metallography-kits",
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
    categorySlug: "in-situ-metallography-kits",
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

  // Transparent Mould Making System 
  {
    id: 40,
    categorySlug: "transparent-mould-making-system",
    name: "Transmount",
    slug: "transmount",
    description: "The Transmount is a high-clarity, non-toxic transparent mould making system designed for precision casting of resin, wax, soap, and other materials. Featuring a 1:1 mix ratio clear silicone rubber with self-debubbling properties, it enables easy creation of durable, flexible moulds for DIY crafting, prototyping, and small-scale production, ensuring excellent detail reproduction and optical transparency.",
    image: "/images/transparent-mould-making/transmount.png",
    alt: "Transmount Transparent Mould Making System",
    rating: 4.7,
    reviews: 35,
    tag: "Transparent Mould Making",
    detail: "Clear silicone for precision casting",
    apiCall: "/api/transparent-mould-making/transmount",
    features: [
      "High-clarity, non-toxic clear silicone rubber with 1:1 mix ratio by weight",
      "Self-debubbling formula eliminates need for vacuum degassing",
      "Cures in 12 hours at room temperature for durable, flexible moulds",
      "Excellent tear strength (25 N/mm) and elongation (500%) for repeated use",
      "Supports casting of epoxy resin, polyurethane, wax, soap, and clay",
      "Ideal for jewellery, figurines, candle moulds, and prototyping",
      "Compliant with safety standards for non-food applications"
    ],
    additionalFeatures: [
      "UV-resistant to prevent yellowing over time",
      "Low viscosity for easy pouring and detailed reproduction",
      "Includes mixing cups and stirring sticks for convenient use",
      "Reusable moulds withstand up to 50+ castings",
      "Optional accelerator for faster curing (6 hours)"
    ],
    images: [
      "/product/Transmount1.jpg",
      "/product/Transmount2.jpg",
      "/product/Transmount3.jpg",
      "/product/Transmount4.jpg"
    ],
    video: "/product/Transmount.mp4",
    specifications: [
      { param: "Operation", value: "Manual" },
      { param: "Material", value: "Clear Silicone Rubber" },
      { param: "Mix Ratio", value: "1:1 by weight" },
      { param: "Cure Time", value: "12 hours at 25°C (6 hours with accelerator)" },
      { param: "Shore Hardness", value: "20A" },
      { param: "Tear Strength", value: "25 N/mm" },
      { param: "Elongation", value: "500%" },
      { param: "Viscosity", value: "5000 cps" },
      { param: "Working Temperature", value: "-50°C to 200°C" },
      { param: "Kit Weight", value: "1 kg (Part A: 500g, Part B: 500g)" }
    ],
    ordering: [
      { part: "230-3411-100", config: "Transmount 1kg Kit with Mixing Accessories", voltage: "None" }
    ],
    consumables: [
      {
        title: "Clear Silicone Rubber Refill",
        subtitle: "1kg (500g Part A, 500g Part B)",
        image: "/product/clearSiliconeRefill.png"
      },
      {
        title: "Mixing Cups and Sticks",
        subtitle: "For precise mixing",
        image: "/product/mixingCupsSticks.png"
      },
      {
        title: "Cure Accelerator",
        subtitle: "For 6-hour curing",
        image: "/product/cureAccelerator.png"
      }
    ],
    literature: [
      { title: "Transmount User Manual", image: "/product/transmount-manual.png" },
      { title: "Transmount Brochure", image: "/product/transmount-brochure.png" },
      { title: "Transparent Mould Making Guide", image: "/product/mould-making-guide.png" }
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
        "name": "Oscillating Abrasive Cut-off Machines",
        "slug": "oscillating-abrasive-cut-off-machines",
        "heroImage": "/images/oscillating-abrasive-cut-off-machines/oscillating-abrasive-cut-off-machines.png",
        "intro": {
          "title": "Advanced Oscillating Cutting Technology",
          "description": "Our Oscillating Abrasive Cut-off Machines provide precision and efficiency for cutting hard materials in industrial and laboratory settings. Featuring advanced oscillation technology, these machines ensure minimal thermal damage and superior surface finish for metallographic and materialographic applications.",
          "categoryLabel": "Explore our oscillating cutting solutions",
          "buttons": [
            { "text": "Discover Oscillating Machines", "variant": "primary" },
            { "text": "Contact Our Team", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Oscillating Abrasive Cut-off Machines",
          "description": "Enhance productivity with oscillating cut-off machines that process samples with reduced contact area, ensuring high-quality cuts and extended wheel life. Ideal for hard materials and high-volume applications.",
          "label": "Our Oscillating Products"
        },
        "specialtySection": {
          "title": "Specialty Oscillating Cutting Solutions",
          "description": "For applications requiring exceptional precision, flatness, or surface finish, our specialty oscillating cut-off machines deliver unmatched performance tailored to your needs.",
          "label": "Precision Cutting Solutions"
        },
        "solutionsBanner": {
          "title": "Complete Oscillating Cutting Solutions",
          "description": "Dive into our Solutions section for technical insights, recommended cutting techniques, and industry-specific applications to optimize your cutting processes.",
          "image": "/productsListing/Oscillating_Solutions.png",
          "label": "Tailored Cutting Solutions",
          "buttons": [
            { "text": "Industry-Specific Solutions", "variant": "primary" },
            { "text": "Material-Specific Solutions", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/oscillating-abrasive-cut-off-machines/axitom.png",
            "alt": "Axitom Oscillating Cut-off Machine",
            "category": "Oscillating Cutting Machines",
            "title": "Axitom",
            "description": "Fully automatic high-volume cutting machine with oscillating ExciCut mode for minimal thermal damage.",
            "reviews": 12,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/oscillating-abrasive-cut-off-machines/servocut-602.png",
            "alt": "SERVOCUT 602 Oscillating Cut-off Machine",
            "category": "Oscillating Cutting Machines",
            "title": "SERVOCUT 602",
            "description": "Advanced high-capacity machine with 4-axis cutting and oscillation for complex specimens.",
            "reviews": 8,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/oscillating-abrasive-cut-off-machines/metacut-302.png",
            "alt": "METACUT 302 Oscillating Cut-off Machine",
            "category": "Oscillating Cutting Machines",
            "title": "METACUT 302",
            "description": "Versatile machine for wet cutting of large and irregularly shaped workpieces with oscillation.",
            "reviews": 10,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Oscicut", "image": "/images/oscillating-abrasive-cut-off-machines/oscicut.png" },
          { "name": "SERVOCUT 602", "image": "/images/oscillating-abrasive-cut-off-machines/servocut-602.png" },
          { "name": "METACUT 302", "image": "/images/oscillating-abrasive-cut-off-machines/metacut-302.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Oscillating Abrasive Cut-off Machines",
            "color": "rgba(50, 168, 82, 0.1)",
            "bgColor": "rgba(50, 168, 82, 0.1)",
            "subItems": [
              { "name": "Oscicut", "apiCall": "/api/products/axitom" },
              { "name": "SERVOCUT 602", "apiCall": "/api/products/servocut-602" },
              { "name": "METACUT 302", "apiCall": "/api/products/metacut-302" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Oscicut",
            "tag": "High-Volume Cutting",
            "description": "Fully automatic high-volume cutting machine with oscillating ExciCut mode for minimal thermal damage and enhanced wheel life.",
            "image": "/images/oscillating-abrasive-cut-off-machines/oscicut.png",
            "detail": "/products/oscicut",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "SERVOCUT 602",
            "tag": "4-Axis Precision",
            "description": "Advanced high-capacity machine with 4-axis cutting and oscillation for complex specimens, featuring a large rotary table.",
            "image": "/images/oscillating-abrasive-cut-off-machines/servocut-602.png",
            "detail": "/products/servocut-602",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "METACUT 302",
            "tag": "Versatile Cutting",
            "description": "Designed for wet cutting of large and irregularly shaped workpieces with oscillation for improved surface finish.",
            "image": "/images/oscillating-abrasive-cut-off-machines/metacut-302.png",
            "detail": "/products/metacut-302",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Oscicut",
            "description": "Fully automatic high-volume cutting machine with ExciCut oscillating mode to reduce thermal damage and enhance cutting precision. Ideal for automotive and metallographic applications.",
            "image": "/images/oscillating-abrasive-cut-off-machines/oscicut.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "SERVOCUT 602",
            "description": "High-capacity cutting machine with 4-axis capability and oscillation for complex and large specimens, perfect for advanced materialographic labs.",
            "image": "/images/oscillating-abrasive-cut-off-machines/servocut-602.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "oscicut", "name": "Oscicut" },
          { "id": "servocut-602", "name": "SERVOCUT 602" },
          { "id": "metacut-302", "name": "METACUT 302" }
        ]
      },
      {
        "name": "Large Component Cutting Machines",
        "slug": "large-component-cutting-machines",
        "heroImage": "/images/large-component-cutting-machines/large-component-cutting-machines.png",
        "intro": {
          "title": "Heavy-Duty Cutting for Oversized Components",
          "description": "Our Large Component Cutting Machines are engineered for precision and power, tackling massive workpieces in industries like aerospace, automotive, and heavy manufacturing. Designed for large-scale CNC machining, these machines deliver exceptional accuracy and efficiency for complex, oversized parts.",
          "categoryLabel": "Explore our large component cutting solutions",
          "buttons": [
            { "text": "Discover Large Cutting Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Large Component Cutting Machines",
          "description": "Handle oversized components with ease using our advanced CNC cutting machines, capable of milling, turning, and boring large parts with tight tolerances. Perfect for high-volume and prototype production in demanding industries.",
          "label": "Our Large Cutting Products"
        },
        "specialtySection": {
          "title": "Specialty Large Component Cutting Solutions",
          "description": "For unique challenges requiring extreme precision or specialized processes, our large component cutting machines provide tailored solutions for complex geometries and heavy-duty materials.",
          "label": "Advanced Large-Scale Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Large Component Cutting Solutions",
          "description": "Explore our Solutions section for technical articles, recommended machining methods, and industry-specific applications to optimize your large component cutting processes.",
          "image": "/productsListing/Large_Component_Solutions.png",
          "label": "Industry-Tailored Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/large-component-cutting-machines/metacut-l-10-15.png",
            "alt": "Metacut L 10 / L 15 Large Component Cutting Machine",
            "category": "Large Component Cutting Machines",
            "title": "Metacut L 10 / L 15",
            "description": "A 5-axis CNC machining center for large-scale assembly tools, offering precision up to 42 microns over a 46-foot X-axis. Ideal for aerospace components.",
            "reviews": 15,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/large-component-cutting-machines/maf-180c.png",
            "alt": "MAF-180C Large Component Cutting Machine",
            "category": "Large Component Cutting Machines",
            "title": "MAF-180C",
            "description": "High-power CNC machine with 85 kW spindle for large diameter turning and deep boring, designed for heavy-duty industrial applications.",
            "reviews": 10,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/large-component-cutting-machines/hexram-gantry.png",
            "alt": "Hexram Gantry Large Component Cutting Machine",
            "category": "Large Component Cutting Machines",
            "title": "Hexram Gantry",
            "description": "Gantry-style CNC mill for 5-sided machining of tall, heavy parts, with advanced chip management and high rigidity.",
            "reviews": 8,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Metacut L 10 / L 15", "image": "/images/large-component-cutting-machines/metacut-l-10-15.png" },
          { "name": "MAF-180C", "image": "/images/large-component-cutting-machines/maf-180c.png" },
          { "name": "Hexram Gantry", "image": "/images/large-component-cutting-machines/hexram-gantry.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Large Component Cutting Machines",
            "color": "rgba(120, 50, 183, 0.1)",
            "bgColor": "rgba(120, 50, 183, 0.1)",
            "subItems": [
              { "name": "Metacut L 10 / L 15", "apiCall": "/api/products/metacut-l-10-15" },
              { "name": "MAF-180C", "apiCall": "/api/products/maf-180c" },
              { "name": "Hexram Gantry", "apiCall": "/api/products/hexram-gantry" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Metacut L 10 / L 15",
            "tag": "5-Axis Precision",
            "description": "A massive 5-axis CNC machining center with laser trackers for precision cutting of large aerospace and automotive components, capable of handling parts up to 100 tons.",
            "image": "/images/large-component-cutting-machines/metacut-l-10-15.png",
            "detail": "/products/metacut-l-10-15",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "MAF-180C",
            "tag": "High-Power Machining",
            "description": "Designed for large-scale turning and boring, this CNC machine features an 85 kW spindle and hydrostatic slide ways for heavy-duty applications.",
            "image": "/images/large-component-cutting-machines/maf-180c.png",
            "detail": "/products/maf-180c",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Hexram Gantry",
            "tag": "Versatile Gantry Milling",
            "description": "A gantry-style CNC mill for 5-sided machining of oversized parts, offering superior chip management and high rigidity for heavy industries.",
            "image": "/images/large-component-cutting-machines/hexram-gantry.png",
            "detail": "/products/hexram-gantry",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Metacut L 10 / L 15",
            "description": "A 5-axis CNC machining center designed for large-scale assembly tools, with laser trackers ensuring precision for aerospace and automotive applications. Handles parts up to 100 tons.",
            "image": "/images/large-component-cutting-machines/metacut-l-10-15.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "MAF-180C",
            "description": "High-power CNC machine with an 85 kW spindle for large diameter turning and deep boring, ideal for heavy-duty industrial components with minimal thermal expansion.",
            "image": "/images/large-component-cutting-machines/maf-180c.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "metacut-l-10-15", "name": "Metacut L 10 / L 15" },
          { "id": "maf-180c", "name": "MAF-180C" },
          { "id": "hexram-gantry", "name": "Hexram Gantry" }
        ]
      },
      {
        "name": "Diamond Cutting Machines",
        "slug": "diamond-cutting-machines",
        "heroImage": "/images/diamond-cutting-machines/diamond-cutting-machines.png",
        "intro": {
          "title": "Precision Diamond Cutting Technology",
          "description": "Our Diamond Cutting Machines offer unmatched precision and efficiency for processing natural and lab-grown diamonds. From laser sawing to advanced 4P cutting and fancy shaping, these machines are designed for jewelers and manufacturers seeking high-quality results with minimal material loss.",
          "categoryLabel": "Explore our diamond cutting solutions",
          "buttons": [
            { "text": "Discover Diamond Cutting Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Diamond Cutting Machines",
          "description": "Process rough diamonds with precision using our advanced laser and CNC-based cutting machines. These systems ensure maximum yield, minimal breakage, and high-quality finishes for both jewelry and industrial applications.",
          "label": "Our Diamond Cutting Products"
        },
        "specialtySection": {
          "title": "Specialty Diamond Cutting Solutions",
          "description": "For intricate designs, fancy shapes, or high-volume production, our specialty diamond cutting machines deliver tailored performance for complex requirements in the jewelry and gemstone industries.",
          "label": "Advanced Diamond Processing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Diamond Cutting Solutions",
          "description": "Visit our Solutions section for technical guides, cutting techniques, and industry-specific applications to optimize your diamond processing workflow.",
          "image": "/productsListing/Diamond_Cutting_Solutions.png",
          "label": "Tailored Diamond Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/diamond-cutting-machines/dcm.png",
            "alt": "Diamond Cutting Machine",
            "category": "Diamond Cutting Machines",
            "title": "DCM",
            "description": "Automated cutting robot for unparalleled precision, capable of processing complex shapes and stones in just one hour, ideal for high-end jewelry production.",
            "reviews": 18,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/diamond-cutting-machines/lasermax-sawing.png",
            "alt": "Lasermax Sawing Machine",
            "category": "Diamond Cutting Machines",
            "title": "Lasermax Sawing",
            "description": "High-performance laser sawing machine for natural and CVD diamonds, offering smooth cuts and minimal weight loss.",
            "reviews": 12,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/diamond-cutting-machines/davinci-factory.png",
            "alt": "DaVinci Diamond Factory",
            "category": "Diamond Cutting Machines",
            "title": "DaVinci Diamond Factory",
            "description": "Automated laser system for cutting and shaping rough diamonds into brilliant cuts with up to 57 facets in a single process.",
            "reviews": 10,
            "rating": 4.8
          }
        ],
        "products": [
          { "name": "DCM", "image": "/images/diamond-cutting-machines/dcm.png" },
          { "name": "Lasermax Sawing", "image": "/images/diamond-cutting-machines/lasermax-sawing.png" },
          { "name": "DaVinci Diamond Factory", "image": "/images/diamond-cutting-machines/davinci-factory.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Diamond Cutting Machines",
            "color": "rgba(200, 50, 100, 0.1)",
            "bgColor": "rgba(200, 50, 100, 0.1)",
            "subItems": [
              { "name": "DCM", "apiCall": "/api/products/dcm" },
              { "name": "Lasermax Sawing", "apiCall": "/api/products/lasermax-sawing" },
              { "name": "DaVinci Diamond Factory", "apiCall": "/api/products/davinci-factory" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "DCM",
            "tag": "Automated Precision",
            "description": "Revolutionary cutting robot that processes diamonds with unmatched accuracy, handling complex shapes and stones in one hour, perfect for high-end jewelry.",
            "image": "/images/diamond-cutting-machines/dcm.png",
            "detail": "/products/dcm",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Lasermax Sawing",
            "tag": "Laser Efficiency",
            "description": "Advanced laser sawing machine for natural and CVD diamonds, designed for high performance, low maintenance, and smooth surface finishes.",
            "image": "/images/diamond-cutting-machines/lasermax-sawing.png",
            "detail": "/products/lasermax-sawing",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "DaVinci Diamond Factory",
            "tag": "Multi-Facet Cutting",
            "description": "Automated laser system for transforming rough diamonds into brilliant cuts with up to 57 facets, supporting fancy shaping with minimal material loss.",
            "image": "/images/diamond-cutting-machines/davinci-factory.png",
            "detail": "/products/davinci-factory",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "DCM",
            "description": "Developed by Antwerp’s Scientific and Technical Research Center, this cutting robot offers precision and versatility for complex diamond shapes, completing tasks in one hour that take human cutters a day.",
            "image": "/images/diamond-cutting-machines/dcm.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "DaVinci Diamond Factory",
            "description": "Automated laser cutting and shaping system using Synova’s Laser MicroJet technology, capable of producing brilliant cut diamonds with up to 57 facets in a single process, ideal for high-volume production.",
            "image": "/images/diamond-cutting-machines/davinci-factory.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "dcm", "name": "DCM" },
          { "id": "lasermax-sawing", "name": "Lasermax Sawing" },
          { "id": "davinci-factory", "name": "DaVinci Diamond Factory" }
        ]
      },
    ]
  },

  // Moulding / Grinding / Polishing
  {
    mainCategory: "Moulding / Grinding / Polishing",
    categories: [
      {
        "name": "Moulding Machines",
        "slug": "moulding-machines",
        "heroImage": "/images/moulding-machines/moulding-machines.png",
        "intro": {
          "title": "High-Precision Moulding Solutions",
          "description": "Our Moulding Machines deliver advanced technology for shaping plastics, metals, and composites with unmatched precision and efficiency. From injection moulding to blow moulding and compression moulding, our solutions cater to industries like automotive, packaging, and medical device manufacturing.",
          "categoryLabel": "Explore our moulding solutions",
          "buttons": [
            { "text": "Discover Moulding Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Moulding Machines",
          "description": "Our range of moulding machines, including hydraulic, electric, and hybrid models, ensures high-speed production, energy efficiency, and precision for diverse applications, from small components to large industrial parts.",
          "label": "Our Moulding Products"
        },
        "specialtySection": {
          "title": "Specialty Moulding Solutions",
          "description": "For complex geometries, cleanroom applications, or high-volume production, our specialty moulding machines provide customized solutions to meet stringent industry requirements.",
          "label": "Advanced Moulding Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Moulding Solutions",
          "description": "Browse our Solutions section for technical resources, process optimization guides, and industry-specific applications to enhance your moulding operations.",
          "image": "/productsListing/Moulding_Solutions.png",
          "label": "Tailored Moulding Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/moulding-machines/engel-victory.png",
            "alt": "ENGEL Victory Injection Moulding Machine",
            "category": "Moulding Machines",
            "title": "ENGEL Victory",
            "description": "Tie-bar-less injection moulding machine with clamping forces from 280 to 5000 kN, ideal for large moulds and precision parts in automotive and packaging industries.",
            "reviews": 20,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/moulding-machines/shibaura-ecsxiii.png",
            "alt": "Shibaura ECSXIII Injection Moulding Machine",
            "category": "Moulding Machines",
            "title": "Shibaura ECSXIII",
            "description": "All-electric injection moulding machine with 60 to 1300-ton clamping force, offering high precision and energy efficiency for medical and consumer goods.",
            "reviews": 15,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/moulding-machines/windsor-sprint.png",
            "alt": "Windsor Sprint Injection Moulding Machine",
            "category": "Moulding Machines",
            "title": "Windsor Sprint",
            "description": "Hydro-mechanical injection moulding machine with 150 to 350-ton capacity, designed for high-speed production of packaging and household items.",
            "reviews": 12,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "ENGEL Victory", "image": "/images/moulding-machines/engel-victory.png" },
          { "name": "Shibaura ECSXIII", "image": "/images/moulding-machines/shibaura-ecsxiii.png" },
          { "name": "Windsor Sprint", "image": "/images/moulding-machines/windsor-sprint.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Moulding Machines",
            "color": "rgba(30, 150, 70, 0.1)",
            "bgColor": "rgba(30, 150, 70, 0.1)",
            "subItems": [
              { "name": "ENGEL Victory", "apiCall": "/api/products/engel-victory" },
              { "name": "Shibaura ECSXIII", "apiCall": "/api/products/shibaura-ecsxiii" },
              { "name": "Windsor Sprint", "apiCall": "/api/products/windsor-sprint" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "ENGEL Victory",
            "tag": "Tie-Bar-Less Design",
            "description": "Versatile injection moulding machine with tie-bar-less technology, supporting large moulds and multi-cavity production for automotive and packaging applications.",
            "image": "/images/moulding-machines/engel-victory.png",
            "detail": "/products/engel-victory",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Shibaura ECSXIII",
            "tag": "All-Electric Precision",
            "description": "High-performance all-electric machine with servo control for accurate motion, ideal for cleanroom medical device manufacturing and consumer electronics.",
            "image": "/images/moulding-machines/shibaura-ecsxiii.png",
            "detail": "/products/shibaura-ecsxiii",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Windsor Sprint",
            "tag": "High-Speed Production",
            "description": "Hydro-mechanical moulding machine optimized for fast cycle times, suitable for mass production of packaging components and household goods.",
            "image": "/images/moulding-machines/windsor-sprint.png",
            "detail": "/products/windsor-sprint",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "ENGEL Victory",
            "description": "Tie-bar-less injection moulding machine with clamping forces from 280 to 5000 kN, offering flexibility for large moulds and high-precision parts in automotive and packaging sectors.",
            "image": "/images/moulding-machines/engel-victory.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Shibaura ECSXIII",
            "description": "All-electric injection moulding machine with advanced servo technology, providing energy-efficient and precise production for medical devices and intricate consumer goods.",
            "image": "/images/moulding-machines/shibaura-ecsxiii.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "engel-victory", "name": "ENGEL Victory" },
          { "id": "shibaura-ecsxiii", "name": "Shibaura ECSXIII" },
          { "id": "windsor-sprint", "name": "Windsor Sprint" }
        ]
      },
      {
        "name": "Grinding and Polishing Machines",
        "slug": "grinding-polishing-machines",
        "heroImage": "/images/grinding-polishing-machines/grinding-polishing-machines.png",
        "intro": {
          "title": "Superior Surface Finishing Solutions",
          "description": "Our Grinding and Polishing Machines deliver exceptional surface quality for metallographic, materialographic, and industrial applications. From semi-automatic grinders to fully automated polishing systems, our machines ensure precision, consistency, and efficiency for laboratory and production environments.",
          "categoryLabel": "Explore our grinding and polishing solutions",
          "buttons": [
            { "text": "Discover Grinding & Polishing Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Grinding and Polishing Machines",
          "description": "Achieve high-quality surface finishes with our range of grinding and polishing machines, designed for both manual and automated processes. Ideal for preparing samples for analysis or finishing industrial components with precision.",
          "label": "Our Grinding & Polishing Products"
        },
        "specialtySection": {
          "title": "Specialty Grinding and Polishing Solutions",
          "description": "For applications requiring ultra-fine finishes, complex geometries, or high-throughput production, our specialty grinding and polishing machines offer customized performance to meet the most demanding specifications.",
          "label": "Advanced Surface Finishing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Grinding and Polishing Solutions",
          "description": "Explore our Solutions section for technical insights, recommended preparation methods, and industry-specific applications to optimize your surface finishing processes.",
          "image": "/productsListing/Grinding_Polishing_Solutions.png",
          "label": "Tailored Finishing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/grinding-polishing-machines/tegramin.png",
            "alt": "Tegramin Grinding and Polishing Machine",
            "category": "Grinding and Polishing Machines",
            "title": "Tegramin",
            "description": "Fully automatic system for precise grinding and polishing, ideal for high-quality metallographic sample preparation with consistent results.",
            "reviews": 16,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/grinding-polishing-machines/ecopol-6.png",
            "alt": "EcoPol-6 Grinding and Polishing Machine",
            "category": "Grinding and Polishing Machines",
            "title": "EcoPol-6",
            "description": "Dual-spindle machine for efficient grinding and polishing, designed for both laboratory and industrial applications with variable speed control.",
            "reviews": 12,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/grinding-polishing-machines/labopol-30.png",
            "alt": "LaboPol-30 Grinding and Polishing Machine",
            "category": "Grinding and Polishing Machines",
            "title": "LaboPol-30",
            "description": "Vers年齢 machine for manual and semi-automatic grinding and polishing, suitable for a wide range of materials and sample sizes.",
            "reviews": 10,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Tegramin", "image": "/images/grinding-polishing-machines/tegramin.png" },
          { "name": "EcoPol-6", "image": "/images/grinding-polishing-machines/ecopol-6.png" },
          { "name": "LaboPol-30", "image": "/images/grinding-polishing-machines/labopol-30.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Grinding and Polishing Machines",
            "color": "rgba(80, 120, 200, 0.1)",
            "bgColor": "rgba(80, 120, 200, 0.1)",
            "subItems": [
              { "name": "Tegramin", "apiCall": "/api/products/tegramin" },
              { "name": "EcoPol-6", "apiCall": "/api/products/ecopol-6" },
              { "name": "LaboPol-30", "apiCall": "/api/products/labopol-30" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Tegramin",
            "tag": "Automated Precision",
            "description": "Fully automatic grinding and polishing system with advanced dosing and force control, perfect for metallographic and materialographic sample preparation.",
            "image": "/images/grinding-polishing-machines/tegramin.png",
            "detail": "/products/tegramin",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "EcoPol-6",
            "tag": "Dual-Spindle Efficiency",
            "description": "Dual-spindle machine with variable speed and robust design, ideal for high-throughput grinding and polishing in laboratory and industrial settings.",
            "image": "/images/grinding-polishing-machines/ecopol-6.png",
            "detail": "/products/ecopol-6",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "LaboPol-30",
            "tag": "Versatile Finishing",
            "description": "Flexible machine for manual and semi-automatic grinding and polishing, supporting a wide range of materials and sample sizes with ease.",
            "image": "/images/grinding-polishing-machines/labopol-30.png",
            "detail": "/products/labopol-30",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Tegramin",
            "description": "Fully automatic grinding and polishing system with precise dosing and force control, designed for high-quality metallographic sample preparation in advanced laboratories.",
            "image": "/images/grinding-polishing-machines/tegramin.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "EcoPol-6",
            "description": "Dual-spindle grinding and polishing machine with variable speed control, offering efficient processing for both laboratory research and industrial production.",
            "image": "/images/grinding-polishing-machines/ecopol-6.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "tegramin", "name": "Tegramin" },
          { "id": "ecopol-6", "name": "EcoPol-6" },
          { "id": "labopol-30", "name": "LaboPol-30" }
        ]
      },
      {
        "name": "Automatic Spectro Sample Grinding Machines",
        "slug": "automatic-spectro-sample-grinding-machines",
        "heroImage": "/images/automatic-spectro-sample-grinding-machines/automatic-spectro-sample-grinding-machines.png",
        "intro": {
          "title": "Precision Grinding for Spectroscopic Analysis",
          "description": "Our Automatic Spectro Sample Grinding Machines are designed for high-precision preparation of metallic samples for spectroscopic analysis. These machines ensure flat, uniform surfaces with minimal operator intervention, ideal for metallurgical labs and quality control in steel and metal industries.",
          "categoryLabel": "Explore our spectro grinding solutions",
          "buttons": [
            { "text": "Discover Spectro Grinding Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Automatic Spectro Sample Grinding Machines",
          "description": "Automate the grinding process for spectroscopic samples with our advanced machines, delivering consistent surface finishes and high throughput for demanding laboratory and industrial applications.",
          "label": "Our Spectro Grinding Products"
        },
        "specialtySection": {
          "title": "Specialty Spectro Grinding Solutions",
          "description": "For unique sample sizes, shapes, or stringent surface quality requirements, our specialty spectro grinding machines provide tailored solutions for optimal spectroscopic analysis.",
          "label": "Advanced Spectro Grinding Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Spectro Grinding Solutions",
          "description": "Visit our Solutions section for technical guides, recommended grinding techniques, and industry-specific applications to enhance your spectroscopic sample preparation.",
          "image": "/productsListing/Spectro_Grinding_Solutions.png",
          "label": "Tailored Spectro Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/automatic-spectro-sample-grinding-machines/spectrogrind-200.png",
            "alt": "SpectroGrind 200 Automatic Grinding Machine",
            "category": "Spectro Sample Grinding Machines",
            "title": "SpectroGrind 200",
            "description": "Fully automatic grinding machine for spectroscopic samples, featuring programmable cycles and high-precision surface finishing.",
            "reviews": 14,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/automatic-spectro-sample-grinding-machines/spectromax.png",
            "alt": "SpectroMax Automatic Grinding Machine",
            "category": "Spectro Sample Grinding Machines",
            "title": "SpectroMax",
            "description": "High-throughput machine with dual grinding stations for rapid preparation of metallic samples for OES and XRF analysis.",
            "reviews": 10,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/automatic-spectro-sample-grinding-machines/spectroprep-300.png",
            "alt": "SpectroPrep 300 Automatic Grinding Machine",
            "category": "Spectro Sample Grinding Machines",
            "title": "SpectroPrep 300",
            "description": "Versatile automatic grinder with customizable settings for various sample sizes and materials, ideal for metallurgical labs.",
            "reviews": 8,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "SpectroGrind 200", "image": "/images/automatic-spectro-sample-grinding-machines/spectrogrind-200.png" },
          { "name": "SpectroMax", "image": "/images/automatic-spectro-sample-grinding-machines/spectromax.png" },
          { "name": "SpectroPrep 300", "image": "/images/automatic-spectro-sample-grinding-machines/spectroprep-300.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Automatic Spectro Sample Grinding Machines",
            "color": "rgba(40, 140, 90, 0.1)",
            "bgColor": "rgba(40, 140, 90, 0.1)",
            "subItems": [
              { "name": "SpectroGrind 200", "apiCall": "/api/products/spectrogrind-200" },
              { "name": "SpectroMax", "apiCall": "/api/products/spectromax" },
              { "name": "SpectroPrep 300", "apiCall": "/api/products/spectroprep-300" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "SpectroGrind 200",
            "tag": "Programmable Precision",
            "description": "Fully automatic grinding machine with programmable cycles, ensuring consistent surface finishes for spectroscopic analysis in metallurgical labs.",
            "image": "/images/automatic-spectro-sample-grinding-machines/spectrogrind-200.png",
            "detail": "/products/spectrogrind-200",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "SpectroMax",
            "tag": "High Throughput",
            "description": "Dual-station automatic grinder designed for rapid preparation of samples for OES and XRF, with minimal operator intervention.",
            "image": "/images/automatic-spectro-sample-grinding-machines/spectromax.png",
            "detail": "/products/spectromax",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "SpectroPrep 300",
            "tag": "Versatile Grinding",
            "description": "Automatic grinder with customizable settings for various sample sizes and materials, optimized for metallurgical and quality control applications.",
            "image": "/images/automatic-spectro-sample-grinding-machines/spectroprep-300.png",
            "detail": "/products/spectroprep-300",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "SpectroGrind 200",
            "description": "Fully automatic spectro sample grinding machine with programmable cycles and advanced force control, ideal for high-precision metallurgical sample preparation.",
            "image": "/images/automatic-spectro-sample-grinding-machines/spectrogrind-200.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "SpectroMax",
            "description": "High-throughput automatic grinder with dual stations, designed for rapid and consistent preparation of metallic samples for spectroscopic analysis.",
            "image": "/images/automatic-spectro-sample-grinding-machines/spectromax.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "spectrogrind-200", "name": "SpectroGrind 200" },
          { "id": "spectromax", "name": "SpectroMax" },
          { "id": "spectroprep-300", "name": "SpectroPrep 300" }
        ]
      },
      {
        "name": "Semi Automatic Grinding Polishing Machines",
        "slug": "semi-automatic-grinding-polishing-machines",
        "heroImage": "/images/semi-automatic-grinding-polishing-machines/semi-automatic-grinding-polishing-machines.png",
        "intro": {
          "title": "Flexible Grinding and Polishing Solutions",
          "description": "Our Semi Automatic Grinding Polishing Machines combine operator control with automated precision, delivering high-quality surface finishes for metallographic, materialographic, and industrial applications. Perfect for labs and workshops requiring flexibility and consistency.",
          "categoryLabel": "Explore our semi-automatic solutions",
          "buttons": [
            { "text": "Discover Semi-Automatic Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Semi Automatic Grinding Polishing Machines",
          "description": "Enhance productivity with semi-automatic machines that offer user-friendly controls and automated grinding/polishing cycles, ensuring repeatable results for diverse materials and sample types.",
          "label": "Our Semi-Automatic Products"
        },
        "specialtySection": {
          "title": "Specialty Semi-Automatic Solutions",
          "description": "For applications requiring tailored processes or specific surface finishes, our specialty semi-automatic machines provide flexible solutions for complex grinding and polishing tasks.",
          "label": "Advanced Semi-Automatic Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Semi-Automatic Solutions",
          "description": "Browse our Solutions section for technical resources, preparation techniques, and industry-specific applications to optimize your grinding and polishing workflows.",
          "image": "/productsListing/Semi_Automatic_Solutions.png",
          "label": "Tailored Finishing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/semi-automatic-grinding-polishing-machines/labopol-60.png",
            "alt": "LaboPol-60 Semi-Automatic Grinding Polishing Machine",
            "category": "Semi-Automatic Grinding Polishing Machines",
            "title": "LaboPol-60",
            "description": "Versatile semi-automatic machine with variable speed control, ideal for grinding and polishing a wide range of materials in laboratory settings.",
            "reviews": 12,
            "rating": 4.7
          },
          {
            "id": 2,
            "image": "/images/semi-automatic-grinding-polishing-machines/metapol-2.png",
            "alt": "MetaPol-2 Semi-Automatic Grinding Polishing Machine",
            "category": "Semi-Automatic Grinding Polishing Machines",
            "title": "MetaPol-2",
            "description": "Dual-spindle semi-automatic machine for efficient grinding and polishing, designed for metallographic and industrial applications.",
            "reviews": 10,
            "rating": 4.6
          },
          {
            "id": 3,
            "image": "/images/semi-automatic-grinding-polishing-machines/grindmaster-50.png",
            "alt": "GrindMaster-50 Semi-Automatic Grinding Polishing Machine",
            "category": "Semi-Automatic Grinding Polishing Machines",
            "title": "GrindMaster-50",
            "description": "Compact semi-automatic machine with intuitive controls, perfect for small labs needing reliable grinding and polishing performance.",
            "reviews": 8,
            "rating": 4.5
          }
        ],
        "products": [
          { "name": "LaboPol-60", "image": "/images/semi-automatic-grinding-polishing-machines/labopol-60.png" },
          { "name": "MetaPol-2", "image": "/images/semi-automatic-grinding-polishing-machines/metapol-2.png" },
          { "name": "GrindMaster-50", "image": "/images/semi-automatic-grinding-polishing-machines/grindmaster-50.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Semi Automatic Grinding Polishing Machines",
            "color": "rgba(100, 60, 180, 0.1)",
            "bgColor": "rgba(100, 60, 180, 0.1)",
            "subItems": [
              { "name": "LaboPol-60", "apiCall": "/api/products/labopol-60" },
              { "name": "MetaPol-2", "apiCall": "/api/products/metapol-2" },
              { "name": "GrindMaster-50", "apiCall": "/api/products/grindmaster-50" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "LaboPol-60",
            "tag": "Versatile Performance",
            "description": "Semi-automatic grinding and polishing machine with variable speed and user-friendly controls, ideal for metallographic and materialographic labs.",
            "image": "/images/semi-automatic-grinding-polishing-machines/labopol-60.png",
            "detail": "/products/labopol-60",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "MetaPol-2",
            "tag": "Dual-Spindle Efficiency",
            "description": "Dual-spindle semi-automatic machine for high-throughput grinding and polishing, suitable for both laboratory and industrial applications.",
            "image": "/images/semi-automatic-grinding-polishing-machines/metapol-2.png",
            "detail": "/products/metapol-2",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "GrindMaster-50",
            "tag": "Compact Design",
            "description": "Compact semi-automatic machine with intuitive controls, designed for small labs requiring reliable and precise surface finishing.",
            "image": "/images/semi-automatic-grinding-polishing-machines/grindmaster-50.png",
            "detail": "/products/grindmaster-50",
            "delay": 0.3
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "LaboPol-60",
            "description": "Versatile semi-automatic grinding and polishing machine with variable speed control, perfect for preparing a wide range of materials in laboratory settings.",
            "image": "/images/semi-automatic-grinding-polishing-machines/labopol-60.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "MetaPol-2",
            "description": "Dual-spindle semi-automatic machine with robust design, offering efficient grinding and polishing for metallographic and industrial applications.",
            "image": "/images/semi-automatic-grinding-polishing-machines/metapol-2.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "labopol-60", "name": "LaboPol-60" },
          { "id": "metapol-2", "name": "MetaPol-2" },
          { "id": "grindmaster-50", "name": "GrindMaster-50" }
        ]
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
        "slides": [
          {
            "id": 1,
            "image": "/images/multi-specimen-grinding-polishing-machines/hexamatic.png",
            "alt": "Hexamatic Multi-Specimen Grinding Polishing Machine",
            "category": "Multi-Specimen Grinding Polishing Machines",
            "title": "Hexamatic",
            "description": "Fully automatic system for simultaneous grinding and polishing of up to 12 specimens, ideal for high-volume metallographic labs.",
            "reviews": 18,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/multi-specimen-grinding-polishing-machines/multiprep-8.png",
            "alt": "MultiPrep-8 Multi-Specimen Grinding Polishing Machine",
            "category": "Multi-Specimen Grinding Polishing Machines",
            "title": "MultiPrep-8",
            "description": "Semi-automatic machine for processing up to 8 specimens, with programmable settings for consistent surface finishes.",
            "reviews": 14,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/multi-specimen-grinding-polishing-machines/polymatic.png",
            "alt": "PolyMatic Multi-Specimen Grinding Polishing Machine",
            "category": "Multi-Specimen Grinding Polishing Machines",
            "title": "PolyMatic",
            "description": "Automated machine for up to 6 specimens, designed for high-throughput applications with minimal operator intervention.",
            "reviews": 10,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Hexamatic", "image": "/images/multi-specimen-grinding-polishing-machines/hexamatic.png" },
          { "name": "MultiPrep-8", "image": "/images/multi-specimen-grinding-polishing-machines/multiprep-8.png" },
          { "name": "PolyMatic", "image": "/images/multi-specimen-grinding-polishing-machines/polymatic.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Multi-specimen Grinding Polishing Machines",
            "color": "rgba(150, 80, 50, 0.1)",
            "bgColor": "rgba(150, 80, 50, 0.1)",
            "subItems": [
              { "name": "Hexamatic", "apiCall": "/api/products/hexamatic" },
              { "name": "MultiPrep-8", "apiCall": "/api/products/multiprep-8" },
              { "name": "PolyMatic", "apiCall": "/api/products/polymatic" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Hexamatic",
            "tag": "High-Volume Automation",
            "description": "Fully automatic system for simultaneous grinding and polishing of up to 12 specimens, perfect for high-volume metallographic and materialographic labs.",
            "image": "/images/multi-specimen-grinding-polishing-machines/hexamatic.png",
            "detail": "/products/hexamatic",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "MultiPrep-8",
            "tag": "Programmable Efficiency",
            "description": "Semi-automatic machine for processing up to 8 specimens, with programmable settings for consistent and repeatable surface finishes.",
            "image": "/images/multi-specimen-grinding-polishing-machines/multiprep-8.png",
            "detail": "/products/multiprep-8",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "PolyMatic",
            "tag": "Compact Automation",
            "description": "Automated machine for up to 6 specimens, designed for high-throughput applications with user-friendly controls and minimal maintenance.",
            "image": "/images/multi-specimen-grinding-polishing-machines/polymatic.png",
            "detail": "/products/polymatic",
            "delay": 0.3
          }
        ],
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
        "subCategories": [
          { "id": "hexamatic", "name": "Hexamatic" },
          { "id": "multiprep-8", "name": "MultiPrep-8" },
          { "id": "polymatic", "name": "PolyMatic" }
        ]
      },
    ]
  },

  // mainCategory: "Microscope and Image Analyzer"
  {
    mainCategory: "Microscope and Image Analyzer",
    categories: [
      {
        name: "Microscope and Image Analyzer",
        slug: "microscope-and-image-analyzer",
        heroImage: "/images/microscope-and-image-analyzer/microscope-and-image-analyzer.png",
        intro: {
          title: "Advanced Imaging for Precision Analysis",
          description:
            "Our Microscope and Image Analyzer systems provide cutting-edge solutions for detailed material characterization and quantitative analysis. From inverted and upright microscopes to advanced image analysis software, explore tools designed for metallography, biomedical research, and quality control.",
          categoryLabel: "Browse our imaging solutions",
          buttons: [
            { text: "Explore Microscopes", variant: "primary" },
            { text: "Contact Experts", variant: "secondary", link: "/contact" },
          ],
        },
        semiAutomaticSection: {
          title: "Microscopes",
          description:
            "High-resolution microscopes for precise imaging of microstructures, equipped with advanced optics and digital cameras for seamless integration with image analysis software.",
          label: "Our Products",
        },
        specialtySection: {
          title: "Image Analysis Software",
          description:
            "Powerful software solutions for quantitative analysis, including grain size measurement, phase analysis, and 3D reconstruction, tailored for research and industrial applications.",
          label: "Advanced Solutions",
        },
        solutionsBanner: {
          title: "Comprehensive Microscopy Solutions",
          description:
            "Dive into our Solutions section for technical insights, application notes, and industry-specific microscopy and image analysis techniques.",
          image: "/productsListing/Find_Your_Solutions.png",
          label: "Comprehensive Solutions",
          buttons: [
            { text: "Solutions by Industry", variant: "primary" },
            { text: "Solutions by Material", variant: "secondary" },
          ],
        },
        slides: products
          .filter((p) => p.categorySlug === "microscope-and-image-analyzer")
          .slice(0, 3)
          .map((p) => ({
            id: p.id,
            image: p.image,
            alt: p.alt,
            category: "Microscopes",
            title: p.name,
            description: p.description,
            reviews: p.reviews,
            rating: p.rating,
          })),
        products: products
          .filter((p) => p.categorySlug === "microscope-and-image-analyzer")
          .map((p) => ({
            name: p.name,
            image: p.image,
          })),
        items: [
          {
            id: 1,
            name: "Microscopes",
            color: "rgba(15, 125, 183, 0.1)",
            bgColor: "rgba(15, 125, 183, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "microscope-and-image-analyzer" && p.tag !== "Image Analysis" && p.tag !== "Specialized")
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
          {
            id: 2,
            name: "Image Analyzers",
            bgColor: "rgba(15, 125, 183, 0.1)",
            subItems: products
              .filter((p) => p.categorySlug === "microscope-and-image-analyzer" && (p.tag === "Image Analysis" || p.tag === "Specialized"))
              .map((p) => ({
                name: p.name,
                apiCall: p.apiCall,
              })),
          },
        ],
        productCards: products
          .filter((p) => p.categorySlug === "microscope-and-image-analyzer")
          .map((p) => ({
            id: p.id,
            name: p.name,
            tag: p.tag,
            description: p.description,
            image: p.image,
            detail: p.detail,
            delay: 0.1 * (p.id - 9),
          })),
        specialtyProducts: [
          {
            id: 1,
            name: "Confocal Microscope",
            description:
              "Advanced confocal microscope for high-resolution 3D imaging and quantitative analysis in research and industrial applications.",
            image: "/images/microscope-and-image-analyzer/confocal-microscope.png",
            delay: 0.1,
            animationX: -50,
            buttons: [
              { text: "Product Details", variant: "primary" },
              { text: "Technical Specs", variant: "secondary" },
            ],
          },
          {
            id: 2,
            name: "More Solutions",
            description:
              "Explore our full range of microscopy and image analysis solutions for unique research challenges.",
            image: null,
            delay: 0.2,
            animationX: 50,
            buttons: [{ text: "Explore All", variant: "primary" }],
          },
        ],
        subCategories: products
          .filter((p) => p.categorySlug === "microscope-and-image-analyzer")
          .map((p) => ({
            id: p.slug,
            name: p.name,
          })),
      },
      {
        "name": "Particle Size Analysis Systems",
        "slug": "particle-size-analysis-systems",
        "heroImage": "/images/particle-size-analysis-systems/particle-size-analysis-systems.png",
        "intro": {
          "title": "Precision Particle Size Analysis Solutions",
          "description": "Our Particle Size Analysis Systems provide advanced stereo and metallurgical microscopy solutions for precise particle analysis, fully compliant with ISO 16232. Featuring automated filter scanning, classification of metallic, non-metallic, and fiber particles, motorized stages, and customizable reporting, these systems cater to automotive, aerospace, metallurgical, and industrial applications.",
          "categoryLabel": "Explore our particle analysis solutions",
          "buttons": [
            { "text": "Discover Particle Analysis Systems", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Particle Size Analysis Systems",
          "description": "Our systems include Stereo models for particles >10 microns and Metallurgical models for particles >3 microns, both with automated filter scanning and ISO 16232-compliant classification. Metallurgical systems add particle height measurement and dual microscopy options for enhanced precision.",
          "label": "Our Particle Analysis Products"
        },
        "specialtySection": {
          "title": "Specialty Particle Analysis Solutions",
          "description": "For high-resolution, complex, or high-throughput applications, our specialty systems offer tailored automation, advanced microscopy, and custom reporting to meet stringent industry standards.",
          "label": "Advanced Particle Analysis Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Particle Analysis Solutions",
          "description": "Explore our Solutions section for ISO 16232-compliant methods, technical guides, and industry-specific applications to optimize your particle size analysis workflows.",
          "image": "/productsListing/Particle_Analysis_Solutions.png",
          "label": "Tailored Analysis Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/particle-size-analysis-systems/cleanview-100.png",
            "alt": "CleanView 100 Stereo Particle Analysis System",
            "category": "Particle Size Analysis Systems",
            "title": "CleanView 100 (Stereo)",
            "description": "Fully automatic stereo system with motorized stage for ISO 16232-compliant analysis of particles >10 microns, featuring fast filter scanning and particle classification.",
            "reviews": 15,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/particle-size-analysis-systems/metalscan-300.png",
            "alt": "MetalScan 300 Metallurgical Particle Analysis System",
            "category": "Particle Size Analysis Systems",
            "title": "MetalScan 300 (Metallurgical)",
            "description": "Advanced system with stereo and metallurgical microscopes, motorized stage, and particle height measurement for ISO 16232-compliant analysis of particles >3 microns.",
            "reviews": 18,
            "rating": 4.9
          },
          {
            "id": 3,
            "image": "/images/particle-size-analysis-systems/partiscan-200.png",
            "alt": "PartiScan 200 Stereo Particle Analysis System",
            "category": "Particle Size Analysis Systems",
            "title": "PartiScan 200 (Stereo)",
            "description": "High-throughput stereo system with polarization for metallic/non-metallic particle differentiation and ISO 16232-compliant reporting.",
            "reviews": 12,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "CleanView 100 (Stereo)", "image": "/images/particle-size-analysis-systems/cleanview-100.png" },
          { "name": "MetalScan 300 (Metallurgical)", "image": "/images/particle-size-analysis-systems/metalscan-300.png" },
          { "name": "PartiScan 200 (Stereo)", "image": "/images/particle-size-analysis-systems/partiscan-200.png" },
          { "name": "PreciScope 500 (Metallurgical)", "image": "/images/particle-size-analysis-systems/preciscope-500.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Particle Size Analysis Systems",
            "color": "rgba(70, 110, 160, 0.1)",
            "bgColor": "rgba(70, 110, 160, 0.1)",
            "subItems": [
              { "name": "CleanView 100 (Stereo)", "apiCall": "/api/products/cleanview-100" },
              { "name": "MetalScan 300 (Metallurgical)", "apiCall": "/api/products/metalscan-300" },
              { "name": "PartiScan 200 (Stereo)", "apiCall": "/api/products/partiscan-200" },
              { "name": "PreciScope 500 (Metallurgical)", "apiCall": "/api/products/preciscope-500" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "CleanView 100 (Stereo)",
            "tag": "High-Precision Stereo",
            "description": "ISO 16232-compliant stereo system with motorized stage, automated filter scanning, and classification of metallic, non-metallic, and fiber particles >10 microns.",
            "image": "/images/particle-size-analysis-systems/cleanview-100.png",
            "detail": "/products/cleanview-100",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "MetalScan 300 (Metallurgical)",
            "tag": "Dual Microscopy Precision",
            "description": "ISO 16232-compliant system with stereo and metallurgical microscopes, motorized stage, and particle height measurement for particles >3 microns.",
            "image": "/images/particle-size-analysis-systems/metalscan-300.png",
            "detail": "/products/metalscan-300",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "PartiScan 200 (Stereo)",
            "tag": "Advanced Polarization",
            "description": "High-throughput stereo system with optical polarization for accurate metallic/non-metallic particle differentiation and customizable ISO 16232 reports.",
            "image": "/images/particle-size-analysis-systems/partiscan-200.png",
            "detail": "/products/partiscan-200",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "PreciScope 500 (Metallurgical)",
            "tag": "High-Resolution Analysis",
            "description": "Advanced metallurgical system with dual microscopy options, automated filter scanning, and precise particle classification with height measurement.",
            "image": "/images/particle-size-analysis-systems/preciscope-500.png",
            "detail": "/products/preciscope-500",
            "delay": 0.4
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "CleanView 100 (Stereo)",
            "description": "Fully automatic stereo system with motorized stage, compliant with ISO 16232, featuring fast filter paper scanning and precise classification of particles >10 microns for cleanliness testing.",
            "image": "/images/particle-size-analysis-systems/cleanview-100.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "MetalScan 300 (Metallurgical)",
            "description": "Fully automatic metallurgical system with stereo and metallurgical microscopes, motorized stage, and particle height measurement, compliant with ISO 16232 for particles >3 microns.",
            "image": "/images/particle-size-analysis-systems/metalscan-300.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "cleanview-100", "name": "CleanView 100 (Stereo)" },
          { "id": "metalscan-300", "name": "MetalScan 300 (Metallurgical)" },
          { "id": "partiscan-200", "name": "PartiScan 200 (Stereo)" },
          { "id": "preciscope-500", "name": "PreciScope 500 (Metallurgical)" }
        ]
      },
      {
        "name": "Millipore Fluid Contamination Analysis Kit",
        "slug": "millipore-fluid-contamination-analysis-kit",
        "heroImage": "/images/millipore-fluid-contamination-analysis-kit/millipore-fluid-contamination-analysis-kit.png",
        "intro": {
          "title": "Comprehensive Fluid Contamination Analysis",
          "description": "The Millipore Fluid Contamination Analysis Kit is a complete solution for analyzing particulate contamination in hydraulic fluids, lubricants, fuels, and water, compliant with ISO 16232 and other industry standards. Equipped with a vacuum/pressure pump, dispensing pressure vessel, filter paper, filter flask, solvent dispensers, petri slides, and dispensing bottles, this kit ensures accurate, reliable results for automotive, aerospace, and industrial quality control.",
          "categoryLabel": "Explore our contamination analysis solutions",
          "buttons": [
            { "text": "Discover the Millipore Kit", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Millipore Fluid Contamination Analysis Kit",
          "description": "Designed for field and laboratory use, this kit includes all necessary components for sampling, filtering, and analyzing fluid contamination. From vacuum filtration to precise solvent dispensing, the kit supports gravimetric, microscopic, and colorimetric analysis to ensure clean parts and fluids in critical applications.",
          "label": "Kit Components"
        },
        "specialtySection": {
          "title": "Specialty Contamination Analysis Solutions",
          "description": "For advanced applications requiring high-volume filtration, custom solvent handling, or specialized storage, the Millipore kit offers robust components and accessories to meet stringent quality control requirements in industries like automotive and aerospace.",
          "label": "Advanced Contamination Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Contamination Analysis Solutions",
          "description": "Browse our Solutions section for technical guides, ISO 16232-compliant protocols, and industry-specific applications to optimize your fluid contamination analysis processes.",
          "image": "/productsListing/Contamination_Analysis_Solutions.png",
          "label": "Tailored Analysis Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/millipore-fluid-contamination-analysis-kit/vacuum-pressure-pump.png",
            "alt": "Vacuum/Pressure Pump for Fluid Contamination Analysis",
            "category": "Millipore Fluid Contamination Analysis Kit",
            "title": "Vacuum/Pressure Pump",
            "description": "Portable pump with 25 L/min flow rate and 35 PSIG pressure, ideal for vacuum filtration in remote or lab settings, with thermal overload protection.",
            "reviews": 12,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-pressure-vessel.png",
            "alt": "Dispensing Pressure Vessel for Fluid Contamination Analysis",
            "category": "Millipore Fluid Contamination Analysis Kit",
            "title": "Dispensing Pressure Vessel",
            "description": "Stainless steel vessel (5-20 L) for filtration through pressure-operated filter holders, ASME-UM compliant with autoclavable design.",
            "reviews": 10,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/millipore-fluid-contamination-analysis-kit/filter-jet-solvent-dispenser.png",
            "alt": "Filter Jet Solvent Dispenser for Fluid Contamination Analysis",
            "category": "Millipore Fluid Contamination Analysis Kit",
            "title": "Filter Jet Solvent Dispenser",
            "description": "Hand-operated dispenser with stainless steel filter holder for spraying ultra-clean solvent jets to clean surfaces, compatible with 25 mm filters.",
            "reviews": 8,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Vacuum/Pressure Pump", "image": "/images/millipore-fluid-contamination-analysis-kit/vacuum-pressure-pump.png" },
          { "name": "Dispensing Pressure Vessel", "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-pressure-vessel.png" },
          { "name": "Filter Paper", "image": "/images/millipore-fluid-contamination-analysis-kit/filter-paper.png" },
          { "name": "Filter Flask", "image": "/images/millipore-fluid-contamination-analysis-kit/filter-flask.png" },
          { "name": "Filter Jet Solvent Dispenser", "image": "/images/millipore-fluid-contamination-analysis-kit/filter-jet-solvent-dispenser.png" },
          { "name": "Solvent Filtering Dispenser", "image": "/images/millipore-fluid-contamination-analysis-kit/solvent-filtering-dispenser.png" },
          { "name": "Petri Slides", "image": "/images/millipore-fluid-contamination-analysis-kit/petri-slides.png" },
          { "name": "Dispensing Bottles", "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-bottles.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Millipore Fluid Contamination Analysis Kit",
            "color": "rgba(50, 140, 120, 0.1)",
            "bgColor": "rgba(50, 140, 120, 0.1)",
            "subItems": [
              { "name": "Vacuum/Pressure Pump", "apiCall": "/api/products/vacuum-pressure-pump" },
              { "name": "Dispensing Pressure Vessel", "apiCall": "/api/products/dispensing-pressure-vessel" },
              { "name": "Filter Paper", "apiCall": "/api/products/filter-paper" },
              { "name": "Filter Flask", "apiCall": "/api/products/filter-flask" },
              { "name": "Filter Jet Solvent Dispenser", "apiCall": "/api/products/filter-jet-solvent-dispenser" },
              { "name": "Solvent Filtering Dispenser", "apiCall": "/api/products/solvent-filtering-dispenser" },
              { "name": "Petri Slides", "apiCall": "/api/products/petri-slides" },
              { "name": "Dispensing Bottles", "apiCall": "/api/products/dispensing-bottles" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Vacuum/Pressure Pump",
            "tag": "Portable Filtration",
            "description": "Compact pump with 25 L/min flow and 35 PSIG pressure, featuring a permanently lubricated motor and thermal overload protection for reliable vacuum filtration.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/vacuum-pressure-pump.png",
            "detail": "/products/vacuum-pressure-pump",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Dispensing Pressure Vessel",
            "tag": "High-Volume Filtration",
            "description": "ASME-UM compliant stainless steel vessel (5-20 L) for pressure-driven filtration, autoclavable with cam-lock closure and fluoroelastomer gaskets.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-pressure-vessel.png",
            "detail": "/products/dispensing-pressure-vessel",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Filter Paper",
            "tag": "Precision Filtration",
            "description": "Mixed cellulose ester membranes (47 mm, 5.0 µm) for capturing particulate contaminants, ensuring compatibility with solvents and ISO 16232 standards.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/filter-paper.png",
            "detail": "/products/filter-paper",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Filter Flask",
            "tag": "Robust Collection",
            "description": "Borosilicate glass flask (1 L) with silicone stopper and stainless steel filter holder, designed for vacuum filtration of contaminated fluids.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/filter-flask.png",
            "detail": "/products/filter-flask",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Filter Jet Solvent Dispenser",
            "tag": "Targeted Cleaning",
            "description": "Hand-operated dispenser with stainless steel holder for 25 mm filters, delivering ultra-clean solvent jets for surface cleaning.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/filter-jet-solvent-dispenser.png",
            "detail": "/products/filter-jet-solvent-dispenser",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Solvent Filtering Dispenser",
            "tag": "Squeeze-Bottle Action",
            "description": "Hand-pressure dispenser with filter holder and delivery tube for ultra-clean solvent dispensing, compatible with 25 mm membrane filters.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/solvent-filtering-dispenser.png",
            "detail": "/products/solvent-filtering-dispenser",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Petri Slides",
            "tag": "Secure Storage",
            "description": "Transparent petri slides for 47 mm membrane filter storage, allowing microscopic examination without removal, with rounded corners for microscope compatibility.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/petri-slides.png",
            "detail": "/products/petri-slides",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Dispensing Bottles",
            "tag": "Convenient Dispensing",
            "description": "Squeeze-action bottles for precise dispensing of ultra-clean solvents or rinse solutions, integrated with filter holders for contamination-free handling.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-bottles.png",
            "detail": "/products/dispensing-bottles",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Vacuum/Pressure Pump",
            "description": "Portable vacuum/pressure pump with 25 L/min flow rate and 35 PSIG pressure, designed for field or lab filtration, featuring a thermal overload switch for reliability.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/vacuum-pressure-pump.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Dispensing Pressure Vessel",
            "description": "Autoclavable stainless steel vessel (5-20 L) meeting ASME-UM standards, ideal for high-volume filtration with pressure-operated filter holders, featuring cam-lock closure.",
            "image": "/images/millipore-fluid-contamination-analysis-kit/dispensing-pressure-vessel.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "vacuum-pressure-pump", "name": "Vacuum/Pressure Pump" },
          { "id": "dispensing-pressure-vessel", "name": "Dispensing Pressure Vessel" },
          { "id": "filter-paper", "name": "Filter Paper" },
          { "id": "filter-flask", "name": "Filter Flask" },
          { "id": "filter-jet-solvent-dispenser", "name": "Filter Jet Solvent Dispenser" },
          { "id": "solvent-filtering-dispenser", "name": "Solvent Filtering Dispenser" },
          { "id": "petri-slides", "name": "Petri Slides" },
          { "id": "dispensing-bottles", "name": "Dispensing Bottles" }
        ]
      },
      // Image Analyzers
      {
        "name": "Image Analyzers",
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
        "slides": [
          {
            "id": 1,
            "image": "/images/image-analyzer/grain-analysis-intercept.png",
            "alt": "Grain Analysis Intercept Method",
            "category": "Image Analyzer",
            "title": "Grain Analysis (Intercept Method)",
            "description": "Automates grain size measurement by counting grain boundary intersections with test lines, compliant with ASTM E112, ideal for elongated grains.",
            "reviews": 15,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/image-analyzer/planimetry-method.png",
            "alt": "Planimetry Method",
            "category": "Image Analyzer",
            "title": "Planimetry Method",
            "description": "Counts grains within a known area for precise ASTM E112-compliant grain size determination, achieving ±0.25 grain size unit precision.",
            "reviews": 12,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/image-analyzer/phase-analysis.png",
            "alt": "Phase Analysis",
            "category": "Image Analyzer",
            "title": "Phase Analysis",
            "description": "Quantifies phase fractions in multiphase materials using automated detection and point counting, supporting custom reporting.",
            "reviews": 10,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Grain Analysis (Intercept Method)", "image": "/images/image-analyzer/grain-analysis-intercept.png" },
          { "name": "Planimetry Method", "image": "/images/image-analyzer/planimetry-method.png" },
          { "name": "Grain Size Distribution", "image": "/images/image-analyzer/grain-size-distribution.png" },
          { "name": "Phase Analysis", "image": "/images/image-analyzer/phase-analysis.png" },
          { "name": "Nodularity Analysis", "image": "/images/image-analyzer/nodularity-analysis.png" },
          { "name": "Graphite", "image": "/images/image-analyzer/graphite.png" },
          { "name": "B Type Flake Separation", "image": "/images/image-analyzer/b-type-flake-separation.png" },
          { "name": "Point Counter", "image": "/images/image-analyzer/point-counter.png" },
          { "name": "Linear Measurement", "image": "/images/image-analyzer/linear-measurement.png" },
          { "name": "Inclusion", "image": "/images/image-analyzer/inclusion.png" },
          { "name": "Welding Analysis Setup", "image": "/images/image-analyzer/welding-analysis-setup.png" },
          { "name": "Porosity Estimation", "image": "/images/image-analyzer/porosity-estimation.png" },
          { "name": "Annotation", "image": "/images/image-analyzer/annotation.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Image Analyzer",
            "color": "rgba(80, 120, 150, 0.1)",
            "bgColor": "rgba(80, 120, 150, 0.1)",
            "subItems": [
              { "name": "Grain Analysis (Intercept Method)", "apiCall": "/api/products/grain-analysis-intercept" },
              { "name": "Planimetry Method", "apiCall": "/api/products/planimetry-method" },
              { "name": "Grain Size Distribution", "apiCall": "/api/products/grain-size-distribution" },
              { "name": "Phase Analysis", "apiCall": "/api/products/phase-analysis" },
              { "name": "Nodularity Analysis", "apiCall": "/api/products/nodularity-analysis" },
              { "name": "Graphite", "apiCall": "/api/products/graphite" },
              { "name": "B Type Flake Separation", "apiCall": "/api/products/b-type-flake-separation" },
              { "name": "Point Counter", "apiCall": "/api/products/point-counter" },
              { "name": "Linear Measurement", "apiCall": "/api/products/linear-measurement" },
              { "name": "Inclusion", "apiCall": "/api/products/inclusion" },
              { "name": "Welding Analysis Setup", "apiCall": "/api/products/welding-analysis-setup" },
              { "name": "Porosity Estimation", "apiCall": "/api/products/porosity-estimation" },
              { "name": "Annotation", "apiCall": "/api/products/annotation" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Grain Analysis (Intercept Method)",
            "tag": "High Accuracy",
            "description": "Automates ASTM E112-compliant intercept method, counting grain boundary intersections for grain size measurement, ideal for elongated grains.",
            "image": "/images/image-analyzer/grain-analysis-intercept.png",
            "detail": "/products/grain-analysis-intercept",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Planimetry Method",
            "tag": "Precision Counting",
            "description": "Counts grains in a known area per ASTM E112, offering ±0.25 grain size unit precision for equiaxed grains, with automated marking.",
            "image": "/images/image-analyzer/planimetry-method.png",
            "detail": "/products/planimetry-method",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Grain Size Distribution",
            "tag": "Statistical Analysis",
            "description": "Generates log-normal grain size distributions, analyzing areas, diameters, or intercept lengths for unimodal structures per ASTM E112.",
            "image": "/images/image-analyzer/grain-size-distribution.png",
            "detail": "/products/grain-size-distribution",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Phase Analysis",
            "tag": "Multiphase Quantification",
            "description": "Quantifies phase fractions in multiphase materials using automated detection and point counting, with exportable phase reports.",
            "image": "/images/image-analyzer/phase-analysis.png",
            "detail": "/products/phase-analysis",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Nodularity Analysis",
            "tag": "Cast Iron Evaluation",
            "description": "Measures nodularity by count, area, and density in cast iron, grouping nodules by size (1-8) with automated detection.",
            "image": "/images/image-analyzer/nodularity-analysis.png",
            "detail": "/products/nodularity-analysis",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Graphite",
            "tag": "Graphite Characterization",
            "description": "Evaluates graphite content and morphology in cast iron, supporting automated spheroidal graphite segmentation and reporting.",
            "image": "/images/image-analyzer/graphite.png",
            "detail": "/products/graphite",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "B Type Flake Separation",
            "tag": "Specialized Graphite",
            "description": "Isolates B-type graphite flakes in cast iron, enabling precise morphological analysis and classification.",
            "image": "/images/image-analyzer/b-type-flake-separation.png",
            "detail": "/products/b-type-flake-separation",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Point Counter",
            "tag": "Manual Quantification",
            "description": "Facilitates manual point counting for phase or feature quantification, supporting ASTM E112-compliant phase analysis.",
            "image": "/images/image-analyzer/point-counter.png",
            "detail": "/products/point-counter",
            "delay": 0.8
          },
          {
            "id": 9,
            "name": "Linear Measurement",
            "tag": "Dimension Analysis",
            "description": "Performs precise linear measurements of microstructural features, such as lamella spacing or grain boundaries.",
            "image": "/images/image-analyzer/linear-measurement.png",
            "detail": "/products/linear-measurement",
            "delay": 0.9
          },
          {
            "id": 10,
            "name": "Inclusion",
            "tag": "Defect Detection",
            "description": "Detects and classifies inclusions (A, B, C, D, thin/thick) per ASTM standards, identifying oversized inclusions.",
            "image": "/images/image-analyzer/inclusion.png",
            "detail": "/products/inclusion",
            "delay": 1.0
          },
          {
            "id": 11,
            "name": "Welding Analysis Setup",
            "tag": "Weld Imperfection",
            "description": "Analyzes weld imperfections, measuring geometry, inclusions, and porosity in weld zones with customizable setups.",
            "image": "/images/image-analyzer/welding-analysis-setup.png",
            "detail": "/products/welding-analysis-setup",
            "delay": 1.1
          },
          {
            "id": 12,
            "name": "Porosity Estimation",
            "tag": "Void Analysis",
            "description": "Quantifies porosity in 2D/3D, distinguishing gas pores, shrinkage cavities, and cracks, compliant with BDG P 203.",
            "image": "/images/image-analyzer/porosity-estimation.png",
            "detail": "/products/porosity-estimation",
            "delay": 1.2
          },
          {
            "id": 13,
            "name": "Annotation",
            "tag": "Custom Labeling",
            "description": "Enables manual or automated annotation of microstructural features for documentation and reporting purposes.",
            "image": "/images/image-analyzer/annotation.png",
            "detail": "/products/annotation",
            "delay": 1.3
          }
        ],
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
        "subCategories": [
          { "id": "grain-analysis-intercept", "name": "Grain Analysis (Intercept Method)" },
          { "id": "planimetry-method", "name": "Planimetry Method" },
          { "id": "grain-size-distribution", "name": "Grain Size Distribution" },
          { "id": "phase-analysis", "name": "Phase Analysis" },
          { "id": "nodularity-analysis", "name": "Nodularity Analysis" },
          { "id": "graphite", "name": "Graphite" },
          { "id": "b-type-flake-separation", "name": "B Type Flake Separation" },
          { "id": "point-counter", "name": "Point Counter" },
          { "id": "linear-measurement", "name": "Linear Measurement" },
          { "id": "inclusion", "name": "Inclusion" },
          { "id": "welding-analysis-setup", "name": "Welding Analysis Setup" },
          { "id": "porosity-estimation", "name": "Porosity Estimation" },
          { "id": "annotation", "name": "Annotation" }
        ]
      },
    ]
  },

  // maincategory: "Micro Hardness Tester"
  {
    mainCategory: "Micro Hardness Tester",
    categories: [
      {
        "name": "Automatic Micro Hardness Tester",
        "slug": "automatic-micro-hardness-tester",
        "heroImage": "/images/automatic-micro-hardness-tester/automatic-micro-hardness-tester.png",
        "intro": {
          "title": "Precision Automatic Micro Hardness Testing",
          "description": "The Automatic Micro Hardness Tester delivers precise Vickers, Knoop, and Brinell hardness measurements for thin materials, coatings, and small components. Fully compliant with ASTM E384 and ISO 4545, it features automated XY stage, auto-focus, and advanced software for high-throughput testing in automotive, aerospace, and metallurgical applications.",
          "categoryLabel": "Explore our micro hardness testing solutions",
          "buttons": [
            { "text": "Discover Micro Hardness Tester", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Automatic Micro Hardness Tester",
          "description": "Equipped with a motorized turret, CCD camera, and intuitive software, this tester automates load application, indentation measurement, and data analysis. With load ranges from 0.01 gf to 2 kgf, it ensures accurate, repeatable results for micro hardness testing of metals, ceramics, and coatings.",
          "label": "Testing Features"
        },
        "specialtySection": {
          "title": "Specialty Hardness Testing Solutions",
          "description": "For complex test patterns, case depth analysis, or high-volume production, the Automatic Micro Hardness Tester offers customizable templates, fully automated sequences, and integration with metallographic analysis tools.",
          "label": "Advanced Testing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Hardness Testing Solutions",
          "description": "Explore our Solutions section for ASTM E384-compliant protocols, technical guides, and industry-specific applications to optimize your micro hardness testing workflows.",
          "image": "/productsListing/Hardness_Testing_Solutions.png",
          "label": "Tailored Testing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/automatic-micro-hardness-tester/vickers-testing.png",
            "alt": "Vickers Hardness Testing",
            "category": "Automatic Micro Hardness Tester",
            "title": "Vickers Testing",
            "description": "Automates Vickers hardness testing with a diamond pyramid indenter, ideal for thin materials and coatings, compliant with ASTM E384.",
            "reviews": 18,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/automatic-micro-hardness-tester/knoop-testing.png",
            "alt": "Knoop Hardness Testing",
            "category": "Automatic Micro Hardness Tester",
            "title": "Knoop Testing",
            "description": "Performs Knoop hardness testing with a rhombic diamond indenter, perfect for brittle materials and thin layers, per ISO 4545.",
            "reviews": 15,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/automatic-micro-hardness-tester/auto-focus-system.png",
            "alt": "Auto-Focus System",
            "category": "Automatic Micro Hardness Tester",
            "title": "Auto-Focus System",
            "description": "Ensures sharp indentation images with automated focus and fast image optimization for repeatable, accurate measurements.",
            "reviews": 12,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Vickers Testing", "image": "/images/automatic-micro-hardness-tester/vickers-testing.png" },
          { "name": "Knoop Testing", "image": "/images/automatic-micro-hardness-tester/knoop-testing.png" },
          { "name": "Brinell Testing", "image": "/images/automatic-micro-hardness-tester/brinell-testing.png" },
          { "name": "Auto-Focus System", "image": "/images/automatic-micro-hardness-tester/auto-focus-system.png" },
          { "name": "Motorized XY Stage", "image": "/images/automatic-micro-hardness-tester/motorized-xy-stage.png" },
          { "name": "Automated Turret", "image": "/images/automatic-micro-hardness-tester/automated-turret.png" },
          { "name": "CCD Image Acquisition", "image": "/images/automatic-micro-hardness-tester/ccd-image-acquisition.png" },
          { "name": "Hardness Mapping", "image": "/images/automatic-micro-hardness-tester/hardness-mapping.png" },
          { "name": "Case Depth Analysis", "image": "/images/automatic-micro-hardness-tester/case-depth-analysis.png" },
          { "name": "Data Export & Reporting", "image": "/images/automatic-micro-hardness-tester/data-export-reporting.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Automatic Micro Hardness Tester",
            "color": "rgba(90, 110, 140, 0.1)",
            "bgColor": "rgba(90, 110, 140, 0.1)",
            "subItems": [
              { "name": "Vickers Testing", "apiCall": "/api/products/vickers-testing" },
              { "name": "Knoop Testing", "apiCall": "/api/products/knoop-testing" },
              { "name": "Brinell Testing", "apiCall": "/api/products/brinell-testing" },
              { "name": "Auto-Focus System", "apiCall": "/api/products/auto-focus-system" },
              { "name": "Motorized XY Stage", "apiCall": "/api/products/motorized-xy-stage" },
              { "name": "Automated Turret", "apiCall": "/api/products/automated-turret" },
              { "name": "CCD Image Acquisition", "apiCall": "/api/products/ccd-image-acquisition" },
              { "name": "Hardness Mapping", "apiCall": "/api/products/hardness-mapping" },
              { "name": "Case Depth Analysis", "apiCall": "/api/products/case-depth-analysis" },
              { "name": "Data Export & Reporting", "apiCall": "/api/products/data-export-reporting" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Vickers Testing",
            "tag": "High Precision",
            "description": "Automates Vickers hardness testing with a diamond pyramid indenter, ideal for thin materials and coatings, compliant with ASTM E384.",
            "image": "/images/automatic-micro-hardness-tester/vickers-testing.png",
            "detail": "/products/vickers-testing",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Knoop Testing",
            "tag": "Brittle Materials",
            "description": "Performs Knoop hardness testing with a rhombic diamond indenter, suited for brittle materials and thin layers, per ISO 4545.",
            "image": "/images/automatic-micro-hardness-tester/knoop-testing.png",
            "detail": "/products/knoop-testing",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Brinell Testing",
            "tag": "Small Load Range",
            "description": "Supports Brinell hardness testing in the micro range (up to 62.5 kgf), ideal for softer materials and small components.",
            "image": "/images/automatic-micro-hardness-tester/brinell-testing.png",
            "detail": "/products/brinell-testing",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Auto-Focus System",
            "tag": "Image Clarity",
            "description": "Ensures sharp indentation images with automated focus and fast image optimization, reducing operator error.",
            "image": "/images/automatic-micro-hardness-tester/auto-focus-system.png",
            "detail": "/products/auto-focus-system",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Motorized XY Stage",
            "tag": "Precise Positioning",
            "description": "Automates sample positioning with high-precision motorized XY stage for complex test patterns and high-throughput testing.",
            "image": "/images/automatic-micro-hardness-tester/motorized-xy-stage.png",
            "detail": "/products/motorized-xy-stage",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Automated Turret",
            "tag": "Efficient Workflow",
            "description": "Features a 6-position automated turret for quick switching between indenters and lenses, streamlining test sequences.",
            "image": "/images/automatic-micro-hardness-tester/automated-turret.png",
            "detail": "/products/automated-turret",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "CCD Image Acquisition",
            "tag": "Advanced Imaging",
            "description": "Captures high-resolution indentation images via CCD camera, enabling automated measurement and analysis.",
            "image": "/images/automatic-micro-hardness-tester/ccd-image-acquisition.png",
            "detail": "/products/ccd-image-acquisition",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Hardness Mapping",
            "tag": "Surface Profiling",
            "description": "Generates detailed hardness maps across sample surfaces, ideal for analyzing heat-treated zones and coatings.",
            "image": "/images/automatic-micro-hardness-tester/hardness-mapping.png",
            "detail": "/products/hardness-mapping",
            "delay": 0.8
          },
          {
            "id": 9,
            "name": "Case Depth Analysis",
            "tag": "Depth Profiling",
            "description": "Automates case hardness depth (CHD) testing, measuring hardness gradients in heat-treated components.",
            "image": "/images/automatic-micro-hardness-tester/case-depth-analysis.png",
            "detail": "/products/case-depth-analysis",
            "delay": 0.9
          },
          {
            "id": 10,
            "name": "Data Export & Reporting",
            "tag": "Custom Reporting",
            "description": "Exports test results in customizable formats with statistical analysis, supporting USB, VGA, and LAN interfaces.",
            "image": "/images/automatic-micro-hardness-tester/data-export-reporting.png",
            "detail": "/products/data-export-reporting",
            "delay": 1.0
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Vickers Testing",
            "description": "Automates Vickers hardness testing with a diamond pyramid indenter, delivering precise measurements for thin materials and coatings, compliant with ASTM E384.",
            "image": "/images/automatic-micro-hardness-tester/vickers-testing.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Knoop Testing",
            "description": "Performs Knoop hardness testing with a rhombic diamond indenter, optimized for brittle materials and thin layers, per ISO 4545.",
            "image": "/images/automatic-micro-hardness-tester/knoop-testing.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "vickers-testing", "name": "Vickers Testing" },
          { "id": "knoop-testing", "name": "Knoop Testing" },
          { "id": "brinell-testing", "name": "Brinell Testing" },
          { "id": "auto-focus-system", "name": "Auto-Focus System" },
          { "id": "motorized-xy-stage", "name": "Motorized XY Stage" },
          { "id": "automated-turret", "name": "Automated Turret" },
          { "id": "ccd-image-acquisition", "name": "CCD Image Acquisition" },
          { "id": "hardness-mapping", "name": "Hardness Mapping" },
          { "id": "case-depth-analysis", "name": "Case Depth Analysis" },
          { "id": "data-export-reporting", "name": "Data Export & Reporting" }
        ]
      },
      {
        "name": "Micro/Macro Hardness Tester (Load Cell Based)",
        "slug": "micro-macro-hardness-tester-load-cell",
        "heroImage": "/images/micro-macro-hardness-tester/micro-macro-hardness-tester.png",
        "intro": {
          "title": "Advanced Load Cell Based Hardness Testing",
          "description": "The Micro/Macro Hardness Tester with load cell technology offers precise Vickers, Knoop, and Brinell testing across micro (0.01 gf to 1 kgf) and macro (1 kgf to 62.5 kgf) ranges. Compliant with ASTM E384, ISO 6507, and ASTM E10, it features closed-loop load control, automated XY stage, and intuitive software for high-throughput testing in metallurgical, automotive, and aerospace applications.",
          "categoryLabel": "Explore our load cell hardness testing solutions",
          "buttons": [
            { "text": "Discover Hardness Tester", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Micro/Macro Hardness Tester",
          "description": "Utilizing closed-loop load cell technology, this tester ensures accurate force application for Vickers, Knoop, and Brinell tests. With automated turret, CCD imaging, and touch-screen interface, it delivers repeatable results for micro and macro hardness testing of metals, ceramics, and coatings.",
          "label": "Testing Features"
        },
        "specialtySection": {
          "title": "Specialty Hardness Testing Solutions",
          "description": "For advanced applications like case depth analysis, hardness mapping, or high-volume production, this tester offers customizable test patterns, fully automated sequences, and integration with image analysis software for comprehensive material characterization.",
          "label": "Advanced Testing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Hardness Testing Solutions",
          "description": "Explore our Solutions section for ASTM E384 and ISO 6507-compliant protocols, technical guides, and industry-specific applications to optimize your hardness testing workflows.",
          "image": "/productsListing/Hardness_Testing_Solutions.png",
          "label": "Tailored Testing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/micro-macro-hardness-tester/vickers-testing.png",
            "alt": "Vickers Hardness Testing",
            "category": "Micro/Macro Hardness Tester",
            "title": "Vickers Testing",
            "description": "Performs Vickers testing with loads from 0.01 gf to 62.5 kgf using a diamond pyramid indenter, compliant with ASTM E384 and ISO 6507.",
            "reviews": 20,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/micro-macro-hardness-tester/knoop-testing.png",
            "alt": "Knoop Hardness Testing",
            "category": "Micro/Macro Hardness Tester",
            "title": "Knoop Testing",
            "description": "Conducts Knoop testing for brittle materials and thin coatings with loads up to 2 kgf, per ISO 4545, using a rhombic indenter.",
            "reviews": 16,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/micro-macro-hardness-tester/load-cell-system.png",
            "alt": "Closed-Loop Load Cell System",
            "category": "Micro/Macro Hardness Tester",
            "title": "Closed-Loop Load Cell",
            "description": "Ensures precise force application across micro and macro ranges with closed-loop control, minimizing operator error.",
            "reviews": 14,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Vickers Testing", "image": "/images/micro-macro-hardness-tester/vickers-testing.png" },
          { "name": "Knoop Testing", "image": "/images/micro-macro-hardness-tester/knoop-testing.png" },
          { "name": "Brinell Testing", "image": "/images/micro-macro-hardness-tester/brinell-testing.png" },
          { "name": "Closed-Loop Load Cell", "image": "/images/micro-macro-hardness-tester/load-cell-system.png" },
          { "name": "Auto-Focus System", "image": "/images/micro-macro-hardness-tester/auto-focus-system.png" },
          { "name": "Motorized XY Stage", "image": "/images/micro-macro-hardness-tester/motorized-xy-stage.png" },
          { "name": "Automated Turret", "image": "/images/micro-macro-hardness-tester/automated-turret.png" },
          { "name": "CCD Image Acquisition", "image": "/images/micro-macro-hardness-tester/ccd-image-acquisition.png" },
          { "name": "Hardness Mapping", "image": "/images/micro-macro-hardness-tester/hardness-mapping.png" },
          { "name": "Data Export & Reporting", "image": "/images/micro-macro-hardness-tester/data-export-reporting.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Micro/Macro Hardness Tester",
            "color": "rgba(100, 120, 160, 0.1)",
            "bgColor": "rgba(100, 120, 160, 0.1)",
            "subItems": [
              { "name": "Vickers Testing", "apiCall": "/api/products/vickers-testing" },
              { "name": "Knoop Testing", "apiCall": "/api/products/knoop-testing" },
              { "name": "Brinell Testing", "apiCall": "/api/products/brinell-testing" },
              { "name": "Closed-Loop Load Cell", "apiCall": "/api/products/closed-loop-load-cell" },
              { "name": "Auto-Focus System", "apiCall": "/api/products/auto-focus-system" },
              { "name": "Motorized XY Stage", "apiCall": "/api/products/motorized-xy-stage" },
              { "name": "Automated Turret", "apiCall": "/api/products/automated-turret" },
              { "name": "CCD Image Acquisition", "apiCall": "/api/products/ccd-image-acquisition" },
              { "name": "Hardness Mapping", "apiCall": "/api/products/hardness-mapping" },
              { "name": "Data Export & Reporting", "apiCall": "/api/products/data-export-reporting" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Vickers Testing",
            "tag": "Versatile Precision",
            "description": "Supports Vickers testing with loads from 0.01 gf to 62.5 kgf, ideal for micro and macro applications, compliant with ASTM E384 and ISO 6507.",
            "image": "/images/micro-macro-hardness-tester/vickers-testing.png",
            "detail": "/products/vickers-testing",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Knoop Testing",
            "tag": "Thin Layer Analysis",
            "description": "Performs Knoop testing with loads up to 2 kgf, optimized for brittle materials and thin coatings, per ISO 4545.",
            "image": "/images/micro-macro-hardness-tester/knoop-testing.png",
            "detail": "/products/knoop-testing",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Brinell Testing",
            "tag": "Light Load Range",
            "description": "Conducts Brinell testing with loads up to 62.5 kgf, suitable for softer materials and small components, per ASTM E10.",
            "image": "/images/micro-macro-hardness-tester/brinell-testing.png",
            "detail": "/products/brinell-testing",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Closed-Loop Load Cell",
            "tag": "Accurate Force",
            "description": "Utilizes closed-loop load cell technology for precise force application across micro and macro ranges, reducing variability.",
            "image": "/images/micro-macro-hardness-tester/load-cell-system.png",
            "detail": "/products/closed-loop-load-cell",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Auto-Focus System",
            "tag": "Image Clarity",
            "description": "Automates focus for sharp indentation images, enhancing measurement accuracy and repeatability.",
            "image": "/images/micro-macro-hardness-tester/auto-focus-system.png",
            "detail": "/products/auto-focus-system",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Motorized XY Stage",
            "tag": "High Throughput",
            "description": "Enables precise sample positioning for complex test patterns and automated multi-point testing.",
            "image": "/images/micro-macro-hardness-tester/motorized-xy-stage.png",
            "detail": "/products/motorized-xy-stage",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Automated Turret",
            "tag": "Streamlined Operation",
            "description": "Features a 6-position auto turret for seamless switching between indenters and objectives, boosting efficiency.",
            "image": "/images/micro-macro-hardness-tester/automated-turret.png",
            "detail": "/products/automated-turret",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "CCD Image Acquisition",
            "tag": "High-Resolution Imaging",
            "description": "Captures high-resolution indentation images for automated measurement and analysis via CCD camera.",
            "image": "/images/micro-macro-hardness-tester/ccd-image-acquisition.png",
            "detail": "/products/ccd-image-acquisition",
            "delay": 0.8
          },
          {
            "id": 9,
            "name": "Hardness Mapping",
            "tag": "Surface Analysis",
            "description": "Generates detailed hardness maps for heat-treated zones, coatings, and welds, enhancing material characterization.",
            "image": "/images/micro-macro-hardness-tester/hardness-mapping.png",
            "detail": "/products/hardness-mapping",
            "delay": 0.9
          },
          {
            "id": 10,
            "name": "Data Export & Reporting",
            "tag": "Customizable Output",
            "description": "Exports test results with statistical analysis in customizable formats, supporting USB, LAN, and thermal printing.",
            "image": "/images/micro-macro-hardness-tester/data-export-reporting.png",
            "detail": "/products/data-export-reporting",
            "delay": 1.0
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Vickers Testing",
            "description": "Performs Vickers testing across micro (0.01 gf) to macro (62.5 kgf) ranges with a diamond pyramid indenter, ensuring ASTM E384 and ISO 6507 compliance.",
            "image": "/images/micro-macro-hardness-tester/vickers-testing.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Closed-Loop Load Cell",
            "description": "Employs advanced closed-loop load cell technology for precise force application, supporting a wide range of Vickers, Knoop, and Brinell tests.",
            "image": "/images/micro-macro-hardness-tester/load-cell-system.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "vickers-testing", "name": "Vickers Testing" },
          { "id": "knoop-testing", "name": "Knoop Testing" },
          { "id": "brinell-testing", "name": "Brinell Testing" },
          { "id": "closed-loop-load-cell", "name": "Closed-Loop Load Cell" },
          { "id": "auto-focus-system", "name": "Auto-Focus System" },
          { "id": "motorized-xy-stage", "name": "Motorized XY Stage" },
          { "id": "automated-turret", "name": "Automated Turret" },
          { "id": "ccd-image-acquisition", "name": "CCD Image Acquisition" },
          { "id": "hardness-mapping", "name": "Hardness Mapping" },
          { "id": "data-export-reporting", "name": "Data Export & Reporting" }
        ]
      },
    ]
  },

  // mainCategory: "Other Machines"
  {
    mainCategory: "Other Machines",
    categories: [
      {
        "name": "Electro Polishing Machine",
        "slug": "electro-polishing-machine",
        "heroImage": "/images/electro-polishing-machine/electro-polishing-machine.png",
        "intro": {
          "title": "Precision Electro Polishing Solutions",
          "description": "The Electro Polishing Machine, featuring the Electropol system, delivers mirror-like, corrosion-resistant finishes on stainless steel, gold, silver, copper, and other metals. Compliant with ASTM B912 and ISO 13485, it offers automated, high-throughput polishing for medical devices, aerospace components, jewelry, and industrial parts, ensuring repeatable micro-tolerance surface roughness finishing.",
          "categoryLabel": "Explore our electro polishing solutions",
          "buttons": [
            { "text": "Discover Electropol", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Electro Polishing Machine",
          "description": "The Electropol system automates electrochemical polishing with advanced rectifiers (24V/48V), digital timers, and temperature controls. It removes micro-peaks and impurities, enhancing corrosion resistance and surface smoothness for complex geometries in medical, aerospace, and jewelry applications.",
          "label": "Polishing Features"
        },
        "specialtySection": {
          "title": "Specialty Electro Polishing Solutions",
          "description": "For intricate parts, high-volume production, or delicate materials, the Electropol system offers customizable fixtures, no-dead-angle polishing, and environmentally friendly processes, reducing chemical waste and ensuring high-quality finishes.",
          "label": "Advanced Polishing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Electro Polishing Solutions",
          "description": "Explore our Solutions section for ASTM B912-compliant protocols, technical guides, and industry-specific applications to optimize your electro polishing workflows.",
          "image": "/productsListing/Electro_Polishing_Solutions.png",
          "label": "Tailored Polishing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/electro-polishing-machine/electropol-tabletop.png",
            "alt": "Electropol Tabletop System",
            "category": "Electro Polishing Machine",
            "title": "Electropol Tabletop",
            "description": "Compact 0.5-15 gallon system for prototyping and small-scale production, ideal for medical devices and jewelry, with 24V/48V rectifiers.",
            "reviews": 15,
            "rating": 4.8
          },
          {
            "id": 2,
            "image": "/images/electro-polishing-machine/electropol-wet-bench.png",
            "alt": "Electropol Wet Bench",
            "category": "Electro Polishing Machine",
            "title": "Electropol Wet Bench",
            "description": "All-in-one console integrating washing, rinsing, polishing, and drying, designed for high-throughput industrial applications.",
            "reviews": 12,
            "rating": 4.7
          },
          {
            "id": 3,
            "image": "/images/electro-polishing-machine/electropol-large-scale.png",
            "alt": "Electropol Large-Scale System",
            "category": "Electro Polishing Machine",
            "title": "Electropol Large-Scale",
            "description": "Custom-designed system with overhead hoist for large parts, suited for aerospace and industrial stainless steel polishing.",
            "reviews": 10,
            "rating": 4.6
          }
        ],
        "products": [
          { "name": "Electropol Tabletop", "image": "/images/electro-polishing-machine/electropol-tabletop.png" },
          { "name": "Electropol Wet Bench", "image": "/images/electro-polishing-machine/electropol-wet-bench.png" },
          { "name": "Electropol Large-Scale", "image": "/images/electro-polishing-machine/electropol-large-scale.png" },
          { "name": "Automated Rectifier Control", "image": "/images/electro-polishing-machine/automated-rectifier-control.png" },
          { "name": "No-Dead-Angle Polishing", "image": "/images/electro-polishing-machine/no-dead-angle-polishing.png" },
          { "name": "Electrolyte Recovery System", "image": "/images/electro-polishing-machine/electrolyte-recovery-system.png" },
          { "name": "Custom Fixtures", "image": "/images/electro-polishing-machine/custom-fixtures.png" },
          { "name": "Digital Process Monitoring", "image": "/images/electro-polishing-machine/digital-process-monitoring.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Electro Polishing Machine",
            "color": "rgba(70, 130, 180, 0.1)",
            "bgColor": "rgba(70, 130, 180, 0.1)",
            "subItems": [
              { "name": "Electropol Tabletop", "apiCall": "/api/products/electropol-tabletop" },
              { "name": "Electropol Wet Bench", "apiCall": "/api/products/electropol-wet-bench" },
              { "name": "Electropol Large-Scale", "apiCall": "/api/products/electropol-large-scale" },
              { "name": "Automated Rectifier Control", "apiCall": "/api/products/automated-rectifier-control" },
              { "name": "No-Dead-Angle Polishing", "apiCall": "/api/products/no-dead-angle-polishing" },
              { "name": "Electrolyte Recovery System", "apiCall": "/api/products/electrolyte-recovery-system" },
              { "name": "Custom Fixtures", "apiCall": "/api/products/custom-fixtures" },
              { "name": "Digital Process Monitoring", "apiCall": "/api/products/digital-process-monitoring" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Electropol Tabletop",
            "tag": "Compact Precision",
            "description": "Portable 0.5-15 gallon system for small to medium parts, ideal for laboratory prototyping and jewelry polishing, with 24V/48V rectifiers.",
            "image": "/images/electro-polishing-machine/electropol-tabletop.png",
            "detail": "/products/electropol-tabletop",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Electropol Wet Bench",
            "tag": "Integrated Efficiency",
            "description": "Multi-tank console combining washing, rinsing, polishing, and drying, constructed with polypropylene tanks and stainless steel frames.",
            "image": "/images/electro-polishing-machine/electropol-wet-bench.png",
            "detail": "/products/electropol-wet-bench",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Electropol Large-Scale",
            "tag": "High-Volume Production",
            "description": "Custom system with overhead hoist or jib crane for large parts, optimized for aerospace and industrial stainless steel applications.",
            "image": "/images/electro-polishing-machine/electropol-large-scale.png",
            "detail": "/products/electropol-large-scale",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Automated Rectifier Control",
            "tag": "Precise Current Delivery",
            "description": "Features 24V/48V rectifiers with digital timers and temperature controls for consistent polishing results across metals.",
            "image": "/images/electro-polishing-machine/automated-rectifier-control.png",
            "detail": "/products/automated-rectifier-control",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "No-Dead-Angle Polishing",
            "tag": "Complex Geometries",
            "description": "Ensures uniform polishing of intricate parts, ideal for jewelry and medical devices, without compromising sharp edges.",
            "image": "/images/electro-polishing-machine/no-dead-angle-polishing.png",
            "detail": "/products/no-dead-angle-polishing",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Electrolyte Recovery System",
            "tag": "Sustainable Processing",
            "description": "Recovers 95-98% of dissolved metal from electrolyte, reducing waste and operational costs in high-volume polishing.",
            "image": "/images/electro-polishing-machine/electrolyte-recovery-system.png",
            "detail": "/products/electrolyte-recovery-system",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Custom Fixtures",
            "tag": "Tailored Handling",
            "description": "Designed to securely hold complex or delicate parts, ensuring precise polishing without damage to intricate geometries.",
            "image": "/images/electro-polishing-machine/custom-fixtures.png",
            "detail": "/products/custom-fixtures",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Digital Process Monitoring",
            "tag": "Real-Time Control",
            "description": "HMI panel for intuitive monitoring of current, temperature, and process duration, ensuring repeatable, high-quality finishes.",
            "image": "/images/electro-polishing-machine/digital-process-monitoring.png",
            "detail": "/products/digital-process-monitoring",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Electropol Tabletop",
            "description": "Compact and portable 0.5-15 gallon system for small-scale electro polishing, perfect for medical device prototyping and jewelry finishing with 24V/48V rectifiers.",
            "image": "/images/electro-polishing-machine/electropol-tabletop.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Electropol Large-Scale",
            "description": "Custom-designed system with overhead hoist for polishing large parts, optimized for aerospace and industrial stainless steel applications with high-throughput.",
            "image": "/images/electro-polishing-machine/electropol-large-scale.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "electropol-tabletop", "name": "Electropol Tabletop" },
          { "id": "electropol-wet-bench", "name": "Electropol Wet Bench" },
          { "id": "electropol-large-scale", "name": "Electropol Large-Scale" },
          { "id": "automated-rectifier-control", "name": "Automated Rectifier Control" },
          { "id": "no-dead-angle-polishing", "name": "No-Dead-Angle Polishing" },
          { "id": "electrolyte-recovery-system", "name": "Electrolyte Recovery System" },
          { "id": "custom-fixtures", "name": "Custom Fixtures" },
          { "id": "digital-process-monitoring", "name": "Digital Process Monitoring" }
        ]
      },
      {
        "name": "In-situ Metallography Kit",
        "slug": "in-situ-metallography-kit",
        "heroImage": "/images/in-situ-metallography-kit/in-situ-metallography-kit.png",
        "intro": {
          "title": "Portable In-situ Metallography Solutions",
          "description": "The In-situ Metallography Kit enables non-destructive, on-site microstructural analysis for large or in-service components. Compliant with ASTM E1351 and ISO 643, it includes a Portable Microscope, Image Analyzer, Replica materials, Portpol Electro Polisher, and Portgrinder Grinder, ideal for power plants, pipelines, and weld inspections in automotive, aerospace, and industrial applications.",
          "categoryLabel": "Explore our in-situ metallography solutions",
          "buttons": [
            { "text": "Discover In-situ Kit", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "In-situ Metallography Kit",
          "description": "Designed for field use, this kit combines a high-magnification portable microscope, real-time image analysis, replication media, and portable polishing/grinding tools. It supports on-site microstructure observation, failure analysis, and weld quality checks without damaging components, with battery-powered operation for remote locations.",
          "label": "Kit Components"
        },
        "specialtySection": {
          "title": "Specialty In-situ Metallography Solutions",
          "description": "For challenging field conditions or complex alloys, the kit offers advanced replication techniques, high-resolution imaging, and custom polishing probes, ensuring accurate microstructure analysis and condition monitoring in critical applications.",
          "label": "Advanced Metallography Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive In-situ Metallography Solutions",
          "description": "Explore our Solutions section for ASTM E1351-compliant protocols, technical guides, and industry-specific applications to optimize your on-site metallographic analysis workflows.",
          "image": "/productsListing/In-situ_Metallography_Solutions.png",
          "label": "Tailored Metallography Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/in-situ-metallography-kit/portable-microscope.png",
            "alt": "Portable Microscope for In-situ Metallography",
            "category": "In-situ Metallography Kit",
            "title": "Portable Microscope",
            "description": "Battery-powered microscope with up to 800x magnification, featuring X-Y stage scanning and CMOS camera for on-site microstructure analysis.",
            "reviews": 18,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/in-situ-metallography-kit/image-analyzer.png",
            "alt": "Image Analyzer for In-situ Metallography",
            "category": "In-situ Metallography Kit",
            "title": "Image Analyzer",
            "description": "Laptop-based software with high-resolution USB camera for real-time image capture, analysis, and database generation, enabling on-site reporting.",
            "reviews": 15,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/in-situ-metallography-kit/portgrinder.png",
            "alt": "Portgrinder Portable Grinder",
            "category": "In-situ Metallography Kit",
            "title": "Portgrinder",
            "description": "Variable-speed, high-torque grinder with 38 mm PSA discs and flexible shaft, powered by 230V AC for field surface preparation.",
            "reviews": 12,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Portable Microscope", "image": "/images/in-situ-metallography-kit/portable-microscope.png" },
          { "name": "Image Analyzer", "image": "/images/in-situ-metallography-kit/image-analyzer.png" },
          { "name": "Replica", "image": "/images/in-situ-metallography-kit/replica.png" },
          { "name": "Portpol Electro Polisher", "image": "/images/in-situ-metallography-kit/portpol.png" },
          { "name": "Portgrinder Grinder", "image": "/images/in-situ-metallography-kit/portgrinder.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "In-situ Metallography Kit",
            "color": "rgba(60, 140, 170, 0.1)",
            "bgColor": "rgba(60, 140, 170, 0.1)",
            "subItems": [
              { "name": "Portable Microscope", "apiCall": "/api/products/portable-microscope" },
              { "name": "Image Analyzer", "apiCall": "/api/products/image-analyzer" },
              { "name": "Replica", "apiCall": "/api/products/replica" },
              { "name": "Portpol Electro Polisher", "apiCall": "/api/products/portpol" },
              { "name": "Portgrinder Grinder", "apiCall": "/api/products/portgrinder" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Portable Microscope",
            "tag": "High Magnification",
            "description": "Lightweight, battery-powered microscope with 100x-800x magnification, X-Y stage, and 3MP CMOS camera for on-site metallographic inspection.",
            "image": "/images/in-situ-metallography-kit/portable-microscope.png",
            "detail": "/products/portable-microscope",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Image Analyzer",
            "tag": "Real-Time Analysis",
            "description": "Laptop-integrated software with USB camera for image capture, microstructure analysis, and data export, streamlining on-site reporting.",
            "image": "/images/in-situ-metallography-kit/image-analyzer.png",
            "detail": "/products/image-analyzer",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Replica",
            "tag": "Non-Destructive",
            "description": "Cellulose acetate and SiliKem replication media for 3D surface replicas, offering 0.1μm accuracy for flat and curved surfaces.",
            "image": "/images/in-situ-metallography-kit/replica.png",
            "detail": "/products/replica",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Portpol Electro Polisher",
            "tag": "Portable Polishing",
            "description": "Pen-type probe with 0.5L electrolyte reservoir and 25W pump, offering up to 60V for polishing and etching in the field.",
            "image": "/images/in-situ-metallography-kit/portpol.png",
            "detail": "/products/portpol",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Portgrinder Grinder",
            "tag": "Field Grinding",
            "description": "High-torque, variable-speed grinder with 38 mm PSA discs, 90-degree handle, and 230V AC supply for on-site surface prep.",
            "image": "/images/in-situ-metallography-kit/portgrinder.png",
            "detail": "/products/portgrinder",
            "delay": 0.5
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Portable Microscope",
            "description": "Battery-powered, portable microscope with 100x-800x magnification, X-Y stage scanning, and 3MP CMOS camera, ideal for on-site microstructure analysis of in-service components.",
            "image": "/images/in-situ-metallography-kit/portable-microscope.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Replica",
            "description": "Non-destructive replication using cellulose acetate film and SiliKem compound, providing 0.1μm accuracy for 3D surface replicas of flat or curved components.",
            "image": "/images/in-situ-metallography-kit/replica.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "portable-microscope", "name": "Portable Microscope" },
          { "id": "image-analyzer", "name": "Image Analyzer" },
          { "id": "replica", "name": "Replica" },
          { "id": "portpol", "name": "Portpol Electro Polisher" },
          { "id": "portgrinder", "name": "Portgrinder Grinder" }
        ]
      },
      {
        "name": "Jominy End Quench Hardenability Set-up",
        "slug": "jominy-end-quench-hardenability-setup",
        "heroImage": "/images/jominy-end-quench/jominy-end-quench-setup.png",
        "intro": {
          "title": "Precision Jominy End Quench Hardenability Testing",
          "description": "The Jominy End Quench Hardenability Set-up, featuring an advanced Hardness Fixture and Chiller, delivers precise hardenability testing per ASTM A255 and ISO 642. With a motorized fixture for successive hardness indentations and a fully automatic hardness tester with a motorized programmable stage, it ensures accurate, repeatable results for steel mills, metallurgical labs, and quality control in automotive and aerospace industries.",
          "categoryLabel": "Explore our Jominy hardenability solutions",
          "buttons": [
            { "text": "Discover Jominy Set-up", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Jominy End Quench Hardenability Set-up",
          "description": "This set-up automates the Jominy test with a motorized hardness fixture for precise indentation spacing (1.5 mm or 1/16 in.) and a chiller for consistent 24°C water quenching. The fully automatic hardness tester with a motorized programmable stage performs direct Rockwell (HRC) or Vickers (HV) measurements, plotting hardenability curves for alloy selection and heat treatment optimization.",
          "label": "Testing Features"
        },
        "specialtySection": {
          "title": "Specialty Hardenability Testing Solutions",
          "description": "Designed for low to medium hardenability steels (D1 = 1-6 in.), the set-up offers programmable test sequences, digital micrometer indexing, and integration with metallographic analysis software for comprehensive microstructure and hardness profiling.",
          "label": "Advanced Testing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Hardenability Testing Solutions",
          "description": "Explore our Solutions section for ASTM A255-compliant protocols, Lamont charts for hardness correlation, and industry-specific applications to optimize your Jominy testing workflows.",
          "image": "/productsListing/Hardenability_Testing_Solutions.png",
          "label": "Tailored Testing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Alloy", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/jominy-end-quench/hardness-fixture.png",
            "alt": "Motorized Hardness Fixture",
            "category": "Jominy End Quench Set-up",
            "title": "Hardness Fixture",
            "description": "Motorized fixture with digital micrometer for precise 1.5 mm indentation spacing, ensuring accurate hardness measurements along Jominy specimen.",
            "reviews": 20,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/jominy-end-quench/chiller-system.png",
            "alt": "Chiller System",
            "category": "Jominy End Quench Set-up",
            "title": "Chiller System",
            "description": "Maintains 24°C water temperature with ±0.5°C accuracy for consistent quenching, compliant with ASTM A255 standards.",
            "reviews": 18,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/jominy-end-quench/automatic-hardness-tester.png",
            "alt": "Automatic Hardness Tester",
            "category": "Jominy End Quench Set-up",
            "title": "Automatic Hardness Tester",
            "description": "Fully automatic tester with motorized programmable stage for direct Rockwell or Vickers hardness testing, streamlining Jominy curve generation.",
            "reviews": 15,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Hardness Fixture", "image": "/images/jominy-end-quench/hardness-fixture.png" },
          { "name": "Chiller System", "image": "/images/jominy-end-quench/chiller-system.png" },
          { "name": "Automatic Hardness Tester", "image": "/images/jominy-end-quench/automatic-hardness-tester.png" },
          { "name": "Motorized Programmable Stage", "image": "/images/jominy-end-quench/motorized-stage.png" },
          { "name": "Digital Micrometer Indexing", "image": "/images/jominy-end-quench/digital-micrometer.png" },
          { "name": "Quenching Jet System", "image": "/images/jominy-end-quench/quenching-jet.png" },
          { "name": "Specimen Holder", "image": "/images/jominy-end-quench/specimen-holder.png" },
          { "name": "Hardenability Software", "image": "/images/jominy-end-quench/hardenability-software.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Jominy End Quench Hardenability Set-up",
            "color": "rgba(80, 120, 150, 0.1)",
            "bgColor": "rgba(80, 120, 150, 0.1)",
            "subItems": [
              { "name": "Hardness Fixture", "apiCall": "/api/products/hardness-fixture" },
              { "name": "Chiller System", "apiCall": "/api/products/chiller-system" },
              { "name": "Automatic Hardness Tester", "apiCall": "/api/products/automatic-hardness-tester" },
              { "name": "Motorized Programmable Stage", "apiCall": "/api/products/motorized-stage" },
              { "name": "Digital Micrometer Indexing", "apiCall": "/api/products/digital-micrometer" },
              { "name": "Quenching Jet System", "apiCall": "/api/products/quenching-jet" },
              { "name": "Specimen Holder", "apiCall": "/api/products/specimen-holder" },
              { "name": "Hardenability Software", "apiCall": "/api/products/hardenability-software" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Hardness Fixture",
            "tag": "Precision Indentation",
            "description": "Motorized fixture with digital micrometer for successive 1.5 mm or 1/16 in. indentations, ensuring precise positioning on Jominy specimens.",
            "image": "/images/jominy-end-quench/hardness-fixture.png",
            "detail": "/products/hardness-fixture",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Chiller System",
            "tag": "Consistent Quenching",
            "description": "Maintains water at 24°C ±0.5°C with a 13 mm orifice jet, meeting ASTM A255 quenching requirements for reproducible hardenability results.",
            "image": "/images/jominy-end-quench/chiller-system.png",
            "detail": "/products/chiller-system",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Automatic Hardness Tester",
            "tag": "Fully Automated",
            "description": "Performs direct Rockwell (HRC) or Vickers (HV) tests with a motorized programmable stage, automating Jominy hardness curve generation.",
            "image": "/images/jominy-end-quench/automatic-hardness-tester.png",
            "detail": "/products/automatic-hardness-tester",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Motorized Programmable Stage",
            "tag": "High Accuracy",
            "description": "Enables precise movement for automated hardness testing at specified intervals, supporting 1.5 mm or 1/16 in. spacing per ISO 642.",
            "image": "/images/jominy-end-quench/motorized-stage.png",
            "detail": "/products/motorized-stage",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Digital Micrometer Indexing",
            "tag": "Accurate Spacing",
            "description": "Provides digital indexing for precise indentation positioning, reducing operator error during hardness measurements.",
            "image": "/images/jominy-end-quench/digital-micrometer.png",
            "detail": "/products/digital-micrometer",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Quenching Jet System",
            "tag": "Controlled Cooling",
            "description": "Delivers a 12.5 mm ±0.5 mm water jet for rapid quenching, ensuring consistent cooling rates along the Jominy specimen.",
            "image": "/images/jominy-end-quench/quenching-jet.png",
            "detail": "/products/quenching-jet",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Specimen Holder",
            "tag": "Secure Positioning",
            "description": "Automatically centers 25 mm x 100 mm Jominy specimens, ensuring alignment with the water jet for accurate quenching.",
            "image": "/images/jominy-end-quench/specimen-holder.png",
            "detail": "/products/specimen-holder",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Hardenability Software",
            "tag": "Data Analysis",
            "description": "Plots hardenability curves, integrates with Lamont charts, and exports data for alloy selection and quality control reporting.",
            "image": "/images/jominy-end-quench/hardenability-software.png",
            "detail": "/products/hardenability-software",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Hardness Fixture",
            "description": "Motorized fixture with digital micrometer indexing for precise, successive hardness indentations at 1.5 mm or 1/16 in. intervals, ensuring accurate Jominy hardenability testing per ASTM A255.",
            "image": "/images/jominy-end-quench/hardness-fixture.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Automatic Hardness Tester",
            "description": "Fully automatic hardness tester with a motorized programmable stage, enabling direct Rockwell or Vickers testing for rapid, reliable Jominy hardenability curve generation.",
            "image": "/images/jominy-end-quench/automatic-hardness-tester.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "hardness-fixture", "name": "Hardness Fixture" },
          { "id": "chiller-system", "name": "Chiller System" },
          { "id": "automatic-hardness-tester", "name": "Automatic Hardness Tester" },
          { "id": "motorized-stage", "name": "Motorized Programmable Stage" },
          { "id": "digital-micrometer", "name": "Digital Micrometer Indexing" },
          { "id": "quenching-jet", "name": "Quenching Jet System" },
          { "id": "specimen-holder", "name": "Specimen Holder" },
          { "id": "hardenability-software", "name": "Hardenability Software" }
        ]
      },
      {
        "name": "CNC Tensile Sample Preparation Machines",
        "slug": "cnc-tensile-sample-preparation-machines",
        "heroImage": "/images/cnc-tensile-sample-preparation/cnc-tensile-sample-preparation.png",
        "intro": {
          "title": "Advanced CNC Tensile Sample Preparation",
          "description": "CNC Tensile Sample Preparation Machines deliver precision milling for flat and round tensile specimens, ensuring repeatability and compliance with ASTM E8, ISO 6892, and ASTM A255 for Jominy testing. Featuring threading capabilities, floor and tabletop models, and powerful CNC programs, these machines minimize production time for high-throughput labs in aerospace, automotive, and steel industries.",
          "categoryLabel": "Explore our tensile sample preparation solutions",
          "buttons": [
            { "text": "Discover CNC Machines", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "CNC Tensile Sample Preparation Machines",
          "description": "Equipped with high-precision servo motors, intuitive TensileSoft™ software, and triple clamping fixtures, these machines offer 0.0003” accuracy for tensile and Jominy sample preparation. Automated threading, rapid milling, and preloaded ASTM/ISO standards ensure repeatable results with minimal operator effort, suitable for soft aluminum to hard Inconel materials.",
          "label": "Preparation Features"
        },
        "specialtySection": {
          "title": "Specialty Sample Preparation Solutions",
          "description": "Designed for diverse applications, these machines support custom fixturing, Jominy specimen preparation, and advanced CNC machining for complex geometries. Floor and tabletop models cater to labs of all sizes, with optional upgrades for impact testing and threading for button-head or threaded tensile bars.",
          "label": "Advanced Preparation Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Sample Preparation Solutions",
          "description": "Explore our Solutions section for ASTM E8 and ISO 6892-compliant protocols, Jominy test guides, and industry-specific applications to optimize your tensile sample preparation workflows.",
          "image": "/productsListing/Tensile_Sample_Preparation_Solutions.png",
          "label": "Tailored Preparation Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/cnc-tensile-sample-preparation/flat-tensile-preparation.png",
            "alt": "Flat Tensile Sample Preparation",
            "category": "CNC Tensile Sample Preparation",
            "title": "Flat Tensile Preparation",
            "description": "Mills flat tensile specimens up to 14” long, 2” wide, and 0.5” thick with 0.0003” accuracy, meeting ASTM E8 and ISO 6892 standards.",
            "reviews": 22,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/cnc-tensile-sample-preparation/round-tensile-preparation.png",
            "alt": "Round Tensile Sample Preparation",
            "category": "CNC Tensile Sample Preparation",
            "title": "Round Tensile Preparation",
            "description": "Prepares round tensile specimens up to 4” diameter and 12” length, including threaded and button-head bars, compliant with ASTM E8.",
            "reviews": 18,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/cnc-tensile-sample-preparation/jominy-sample-preparation.png",
            "alt": "Jominy Sample Preparation",
            "category": "CNC Tensile Sample Preparation",
            "title": "Jominy Sample Preparation",
            "description": "Supports Jominy specimen preparation (25 mm x 100 mm) with precise grinding and milling for hardenability testing per ASTM A255.",
            "reviews": 15,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Flat Tensile Preparation", "image": "/images/cnc-tensile-sample-preparation/flat-tensile-preparation.png" },
          { "name": "Round Tensile Preparation", "image": "/images/cnc-tensile-sample-preparation/round-tensile-preparation.png" },
          { "name": "Jominy Sample Preparation", "image": "/images/cnc-tensile-sample-preparation/jominy-sample-preparation.png" },
          { "name": "Threading Facility", "image": "/images/cnc-tensile-sample-preparation/threading-facility.png" },
          { "name": "Tabletop Model", "image": "/images/cnc-tensile-sample-preparation/tabletop-model.png" },
          { "name": "Floor Model", "image": "/images/cnc-tensile-sample-preparation/floor-model.png" },
          { "name": "TensileSoft™ Software", "image": "/images/cnc-tensile-sample-preparation/tensilesoft-software.png" },
          { "name": "Auto Tool Changer", "image": "/images/cnc-tensile-sample-preparation/auto-tool-changer.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "CNC Tensile Sample Preparation Machines",
            "color": "rgba(90, 130, 160, 0.1)",
            "bgColor": "rgba(90, 130, 160, 0.1)",
            "subItems": [
              { "name": "Flat Tensile Preparation", "apiCall": "/api/products/flat-tensile-preparation" },
              { "name": "Round Tensile Preparation", "apiCall": "/api/products/round-tensile-preparation" },
              { "name": "Jominy Sample Preparation", "apiCall": "/api/products/jominy-sample-preparation" },
              { "name": "Threading Facility", "apiCall": "/api/products/threading-facility" },
              { "name": "Tabletop Model", "apiCall": "/api/products/tabletop-model" },
              { "name": "Floor Model", "apiCall": "/api/products/floor-model" },
              { "name": "TensileSoft™ Software", "apiCall": "/api/products/tensilesoft-software" },
              { "name": "Auto Tool Changer", "apiCall": "/api/products/auto-tool-changer" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Flat Tensile Preparation",
            "tag": "High Precision",
            "description": "Mills flat tensile specimens with 0.0003” accuracy, supporting ASTM E8 and ISO 6892, with triple clamping for up to three 1.0” thick stacks.",
            "image": "/images/cnc-tensile-sample-preparation/flat-tensile-preparation.png",
            "detail": "/products/flat-tensile-preparation",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Round Tensile Preparation",
            "tag": "Versatile Machining",
            "description": "Prepares round specimens up to 4” diameter, including threaded and button-head bars, with high-speed milling for ASTM E8 compliance.",
            "image": "/images/cnc-tensile-sample-preparation/round-tensile-preparation.png",
            "detail": "/products/round-tensile-preparation",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Jominy Sample Preparation",
            "tag": "Hardenability Testing",
            "description": "Mills and grinds 25 mm x 100 mm Jominy specimens with precise surface finish for ASTM A255 hardenability testing, with custom fixturing options.",
            "image": "/images/cnc-tensile-sample-preparation/jominy-sample-preparation.png",
            "detail": "/products/jominy-sample-preparation",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Threading Facility",
            "tag": "Advanced Capability",
            "description": "Automates threading for tensile bars and button-head specimens, ensuring precise thread geometry with minimal operator intervention.",
            "image": "/images/cnc-tensile-sample-preparation/threading-facility.png",
            "detail": "/products/threading-facility",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Tabletop Model",
            "tag": "Compact Design",
            "description": "Compact CNC machine with 47” x 47” x 5” footprint, ideal for small labs, offering precision milling for tensile and Jominy samples.",
            "image": "/images/cnc-tensile-sample-preparation/tabletop-model.png",
            "detail": "/products/tabletop-model",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Floor Model",
            "tag": "High Volume",
            "description": "Robust floor model with extended table (31.5” x 9.4”) for high-volume tensile and Jominy sample preparation, handling tougher materials.",
            "image": "/images/cnc-tensile-sample-preparation/floor-model.png",
            "detail": "/products/floor-model",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "TensileSoft™ Software",
            "tag": "User-Friendly",
            "description": "Intuitive software with touch-screen interface and preloaded ASTM/ISO standards, enabling rapid setup and repeatable milling results.",
            "image": "/images/cnc-tensile-sample-preparation/tensilesoft-software.png",
            "detail": "/products/tensilesoft-software",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Auto Tool Changer",
            "tag": "Time-Saving",
            "description": "Enhances efficiency with automatic tool changes, supporting complex milling tasks for tensile, Jominy, and custom specimens.",
            "image": "/images/cnc-tensile-sample-preparation/auto-tool-changer.png",
            "detail": "/products/auto-tool-changer",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Tabletop Model",
            "description": "Compact CNC machine with a 47” x 47” x 5” footprint, delivering 0.0003” precision for tensile and Jominy sample preparation, ideal for small labs with limited space.",
            "image": "/images/cnc-tensile-sample-preparation/tabletop-model.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Jominy Sample Preparation",
            "description": "Customizable milling and grinding for 25 mm x 100 mm Jominy specimens, ensuring precise surface finish and compliance with ASTM A255 for hardenability testing.",
            "image": "/images/cnc-tensile-sample-preparation/jominy-sample-preparation.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "flat-tensile-preparation", "name": "Flat Tensile Preparation" },
          { "id": "round-tensile-preparation", "name": "Round Tensile Preparation" },
          { "id": "jominy-sample-preparation", "name": "Jominy Sample Preparation" },
          { "id": "threading-facility", "name": "Threading Facility" },
          { "id": "tabletop-model", "name": "Tabletop Model" },
          { "id": "floor-model", "name": "Floor Model" },
          { "id": "tensilesoft-software", "name": "TensileSoft™ Software" },
          { "id": "auto-tool-changer", "name": "Auto Tool Changer" }
        ]
      },
      {
        "name": "Hardness Testers",
        "slug": "hardness-testers",
        "heroImage": "/images/hardness-testers/hardness-testers.png",
        "intro": {
          "title": "Precision Hardness Testing Solutions",
          "description": "Hardness Testers measure a material’s resistance to indentation without residual deformation, critical for assessing the quality of metals and parts in automotive, aerospace, and manufacturing. Compliant with ASTM E18, ISO 6506, ISO 6507, and ISO 6508, our testers include Superficial Rockwell, Portable Leeb, Portable Brinell, Rockwell, and Portable Vickers models, suitable for ferrous metals, alloy steel, carbides, treated surfaces, cast iron, non-ferrous metals, and non-metallic materials like hard plastics and Bakelite.",
          "categoryLabel": "Explore our hardness testing solutions",
          "buttons": [
            { "text": "Discover Hardness Testers", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Hardness Testers",
          "description": "Designed for precision and versatility, our hardness testers evaluate material hardness for quality control. From Superficial Rockwell for treated surfaces and parallel planes to portable Leeb and Vickers for field testing, these systems support cast iron, steel, non-ferrous metals, and hard plastics, delivering accurate, repeatable results across lab and on-site applications.",
          "label": "Testing Solutions"
        },
        "specialtySection": {
          "title": "Specialty Hardness Testing Solutions",
          "description": "For demanding applications like carburized surfaces, large castings, or field inspections, our testers offer advanced features like digital displays, portable designs, and automated data logging, ensuring compliance with ASTM and ISO standards for diverse materials and geometries.",
          "label": "Advanced Testing Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Hardness Testing Solutions",
          "description": "Explore our Solutions section for ASTM E18 and ISO 6508-compliant protocols, technical guides, and industry-specific applications to optimize your hardness testing workflows.",
          "image": "/productsListing/Hardness_Testing_Solutions.png",
          "label": "Tailored Testing Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/hardness-testers/superficial-rockwell.png",
            "alt": "Superficial Rockwell Hardness Tester",
            "category": "Hardness Testers",
            "title": "Superficial Rockwell Hardness Tester",
            "description": "Precision tester for superficial Rockwell scales (HR15N, HR30T), ideal for treated surfaces and parallel planes, compliant with ASTM E18.",
            "reviews": 20,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/hardness-testers/portable-leeb.png",
            "alt": "Portable Leeb Hardness Tester",
            "category": "Hardness Testers",
            "title": "Portable Leeb Hardness Tester",
            "description": "Handheld tester for on-site hardness measurement using rebound method, suitable for large metal parts, per ISO 16859.",
            "reviews": 18,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/hardness-testers/rockwell.png",
            "alt": "Rockwell Hardness Tester",
            "category": "Hardness Testers",
            "title": "Rockwell Hardness Tester",
            "description": "Versatile tester for HRC, HRB scales, designed for cast iron, steel, and non-ferrous metals, compliant with ISO 6508.",
            "reviews": 16,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Superficial Rockwell Hardness Tester", "image": "/images/hardness-testers/superficial-rockwell.png" },
          { "name": "Portable Leeb Hardness Tester", "image": "/images/hardness-testers/portable-leeb.png" },
          { "name": "Portable Brinell Hardness Tester", "image": "/images/hardness-testers/portable-brinell.png" },
          { "name": "Rockwell Hardness Tester", "image": "/images/hardness-testers/rockwell.png" },
          { "name": "Portable Vickers Hardness Tester", "image": "/images/hardness-testers/portable-vickers.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Hardness Testers",
            "color": "rgba(70, 110, 150, 0.1)",
            "bgColor": "rgba(70, 110, 150, 0.1)",
            "subItems": [
              { "name": "Superficial Rockwell Hardness Tester", "apiCall": "/api/products/superficial-rockwell" },
              { "name": "Portable Leeb Hardness Tester", "apiCall": "/api/products/portable-leeb" },
              { "name": "Portable Brinell Hardness Tester", "apiCall": "/api/products/portable-brinell" },
              { "name": "Rockwell Hardness Tester", "apiCall": "/api/products/rockwell" },
              { "name": "Portable Vickers Hardness Tester", "apiCall": "/api/products/portable-vickers" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Superficial Rockwell Hardness Tester",
            "tag": "Precision Measurement",
            "description": "Measures superficial Rockwell hardness (HR15N, HR30T) for ferrous metals, alloy steel, and treated surfaces, with high accuracy for parallel planes, per ASTM E18.",
            "image": "/images/hardness-testers/superficial-rockwell.png",
            "detail": "/products/superficial-rockwell",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Portable Leeb Hardness Tester",
            "tag": "Field Testing",
            "description": "Handheld device using rebound method for on-site testing of large metal parts, supporting multiple scales (HL, HB, HV), compliant with ISO 16859.",
            "image": "/images/hardness-testers/portable-leeb.png",
            "detail": "/products/portable-leeb",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Portable Brinell Hardness Tester",
            "tag": "On-Site Versatility",
            "description": "Portable tester for Brinell hardness (HB) of soft alloys and castings, with hydraulic or ultrasonic methods, compliant with ISO 6506.",
            "image": "/images/hardness-testers/portable-brinell.png",
            "detail": "/products/portable-brinell",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Rockwell Hardness Tester",
            "tag": "Broad Material Range",
            "description": "Tests Rockwell hardness (HRC, HRB) for cast iron, steel, and non-ferrous metals, with digital display and auto-load, per ISO 6508.",
            "image": "/images/hardness-testers/rockwell.png",
            "detail": "/products/rockwell",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Portable Vickers Hardness Tester",
            "tag": "Micro Hardness",
            "description": "Portable tester for Vickers hardness (HV) of thin coatings and small parts, with digital imaging and lightweight design, compliant with ISO 6507.",
            "image": "/images/hardness-testers/portable-vickers.png",
            "detail": "/products/portable-vickers",
            "delay": 0.5
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Superficial Rockwell Hardness Tester",
            "description": "Precision tester for superficial Rockwell scales (HR15N, HR30T), optimized for carburized, nitrided, and plated surfaces, with high repeatability for parallel planes, compliant with ASTM E18.",
            "image": "/images/hardness-testers/superficial-rockwell.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Portable Leeb Hardness Tester",
            "description": "Lightweight, handheld tester for on-site hardness measurement of large metal components, supporting multiple scales (HL, HB, HV, HRC) with data logging, per ISO 16859.",
            "image": "/images/hardness-testers/portable-leeb.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "superficial-rockwell", "name": "Superficial Rockwell Hardness Tester" },
          { "id": "portable-leeb", "name": "Portable Leeb Hardness Tester" },
          { "id": "portable-brinell", "name": "Portable Brinell Hardness Tester" },
          { "id": "rockwell", "name": "Rockwell Hardness Tester" },
          { "id": "portable-vickers", "name": "Portable Vickers Hardness Tester" }
        ]
      },
      {
        "name": "Vertical Band Saw",
        "slug": "vertical-band-saw",
        "heroImage": "/images/vertical-band-saw/vertical-band-saw.png",
        "intro": {
          "title": "Precision Vertical Band Saw Solutions",
          "description": "The Vertical Band Saw delivers high-precision cutting for metals, plastics, and composites, ideal for metallurgical sample preparation, fabrication, and manufacturing. Compliant with ASTM E8 for tensile sample cutting, it features variable speed control, robust construction, and versatility for complex shapes, serving automotive, aerospace, and steel industries with reliable, high-throughput performance.",
          "categoryLabel": "Explore our vertical band saw solutions",
          "buttons": [
            { "text": "Discover Vertical Band Saw", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Vertical Band Saw",
          "description": "Designed for precision and durability, the Vertical Band Saw offers variable blade speeds (40-10,000 fpm), a tilting worktable (up to 45°), and heavy-duty steel frames. With blade widths from 1/8” to 1” and digital speed indicators, it ensures clean, accurate cuts for materials like stainless steel, aluminum, and hard plastics in lab and production environments.",
          "label": "Cutting Features"
        },
        "specialtySection": {
          "title": "Specialty Cutting Solutions",
          "description": "For intricate contours, large workpieces, or high-volume production, the Vertical Band Saw provides advanced features like hydraulic table feeds, mist coolant systems, and programmable speed settings, ensuring efficiency and precision in demanding applications.",
          "label": "Advanced Cutting Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Cutting Solutions",
          "description": "Explore our Solutions section for ASTM E8-compliant cutting protocols, technical guides, and industry-specific applications to optimize your Vertical Band Saw workflows.",
          "image": "/productsListing/Vertical_Band_Saw_Solutions.png",
          "label": "Tailored Cutting Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/vertical-band-saw/standard-model.png",
            "alt": "Standard Vertical Band Saw",
            "category": "Vertical Band Saw",
            "title": "Standard Model",
            "description": "Versatile saw with 20” throat depth, 12” work height, and variable speeds (40-5,000 fpm), ideal for general-purpose cutting of metals and plastics.",
            "reviews": 25,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/vertical-band-saw/heavy-duty-model.png",
            "alt": "Heavy-Duty Vertical Band Saw",
            "category": "Vertical Band Saw",
            "title": "Heavy-Duty Model",
            "description": "Robust saw with 26” throat depth, hydraulic table feed, and high-speed blades (up to 10,000 fpm) for cutting tough alloys and large workpieces.",
            "reviews": 20,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/vertical-band-saw/compact-model.png",
            "alt": "Compact Vertical Band Saw",
            "category": "Vertical Band Saw",
            "title": "Compact Model",
            "description": "Space-saving saw with 14” throat depth and digital controls, designed for small labs and precision cutting of tensile samples.",
            "reviews": 18,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Standard Model", "image": "/images/vertical-band-saw/standard-model.png" },
          { "name": "Heavy-Duty Model", "image": "/images/vertical-band-saw/heavy-duty-model.png" },
          { "name": "Compact Model", "image": "/images/vertical-band-saw/compact-model.png" },
          { "name": "Variable Speed Control", "image": "/images/vertical-band-saw/variable-speed-control.png" },
          { "name": "Tilting Worktable", "image": "/images/vertical-band-saw/tilting-worktable.png" },
          { "name": "Mist Coolant System", "image": "/images/vertical-band-saw/mist-coolant-system.png" },
          { "name": "Digital Speed Indicator", "image": "/images/vertical-band-saw/digital-speed-indicator.png" },
          { "name": "Blade Tensioning System", "image": "/images/vertical-band-saw/blade-tensioning-system.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Vertical Band Saw",
            "color": "rgba(80, 120, 160, 0.1)",
            "bgColor": "rgba(80, 120, 160, 0.1)",
            "subItems": [
              { "name": "Standard Model", "apiCall": "/api/products/standard-model" },
              { "name": "Heavy-Duty Model", "apiCall": "/api/products/heavy-duty-model" },
              { "name": "Compact Model", "apiCall": "/api/products/compact-model" },
              { "name": "Variable Speed Control", "apiCall": "/api/products/variable-speed-control" },
              { "name": "Tilting Worktable", "apiCall": "/api/products/tilting-worktable" },
              { "name": "Mist Coolant System", "apiCall": "/api/products/mist-coolant-system" },
              { "name": "Digital Speed Indicator", "apiCall": "/api/products/digital-speed-indicator" },
              { "name": "Blade Tensioning System", "apiCall": "/api/products/blade-tensioning-system" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Standard Model",
            "tag": "Versatile Cutting",
            "description": "Features 20” throat depth, 12” work height, and variable speeds (40-5,000 fpm) for precise cutting of metals, plastics, and composites.",
            "image": "/images/vertical-band-saw/standard-model.png",
            "detail": "/products/standard-model",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "Heavy-Duty Model",
            "tag": "High Capacity",
            "description": "Equipped with 26” throat depth, hydraulic table feed, and high-speed blades (up to 10,000 fpm) for tough alloys and large workpieces.",
            "image": "/images/vertical-band-saw/heavy-duty-model.png",
            "detail": "/products/heavy-duty-model",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Compact Model",
            "tag": "Space-Saving",
            "description": "Designed for small labs with 14” throat depth, digital controls, and precision cutting for tensile samples and small components.",
            "image": "/images/vertical-band-saw/compact-model.png",
            "detail": "/products/compact-model",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Variable Speed Control",
            "tag": "Flexible Performance",
            "description": "Adjustable blade speeds (40-10,000 fpm) via digital controls, optimizing cutting for soft plastics to hard stainless steel.",
            "image": "/images/vertical-band-saw/variable-speed-control.png",
            "detail": "/products/variable-speed-control",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Tilting Worktable",
            "tag": "Angled Cutting",
            "description": "Tilts up to 45° for bevel and contour cuts, enhancing versatility for complex shapes and metallurgical samples.",
            "image": "/images/vertical-band-saw/tilting-worktable.png",
            "detail": "/products/tilting-worktable",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Mist Coolant System",
            "tag": "Enhanced Cutting",
            "description": "Reduces heat and extends blade life with mist coolant, ideal for high-speed cutting of tough materials.",
            "image": "/images/vertical-band-saw/mist-coolant-system.png",
            "detail": "/products/mist-coolant-system",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Digital Speed Indicator",
            "tag": "User-Friendly",
            "description": "Displays real-time blade speed for precise adjustments, ensuring optimal performance across various materials.",
            "image": "/images/vertical-band-saw/digital-speed-indicator.png",
            "detail": "/products/digital-speed-indicator",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Blade Tensioning System",
            "tag": "Reliable Operation",
            "description": "Ensures consistent blade tension with hydraulic or manual controls, minimizing blade wear and improving cut accuracy.",
            "image": "/images/vertical-band-saw/blade-tensioning-system.png",
            "detail": "/products/blade-tensioning-system",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "Heavy-Duty Model",
            "description": "Robust Vertical Band Saw with 26” throat depth, hydraulic table feed, and high-speed blades (up to 10,000 fpm), optimized for cutting tough alloys and large workpieces in high-volume production.",
            "image": "/images/vertical-band-saw/heavy-duty-model.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Compact Model",
            "description": "Space-saving Vertical Band Saw with 14” throat depth and digital controls, designed for precision cutting of tensile samples and small components in metallurgical labs.",
            "image": "/images/vertical-band-saw/compact-model.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "standard-model", "name": "Standard Model" },
          { "id": "heavy-duty-model", "name": "Heavy-Duty Model" },
          { "id": "compact-model", "name": "Compact Model" },
          { "id": "variable-speed-control", "name": "Variable Speed Control" },
          { "id": "tilting-worktable", "name": "Tilting Worktable" },
          { "id": "mist-coolant-system", "name": "Mist Coolant System" },
          { "id": "digital-speed-indicator", "name": "Digital Speed Indicator" },
          { "id": "blade-tensioning-system", "name": "Blade Tensioning System" }
        ]
      },
      {
        "name": "Transparent Mould Making System - Transmount",
        "slug": "transparent-mould-making-system-transmount",
        "heroImage": "/images/transmount/transmount-system.png",
        "intro": {
          "title": "Transmount Transparent Mould Making Solutions",
          "description": "The Transmount Transparent Mould Making System revolutionizes mould creation with high-clarity silicone rubber, enabling precise monitoring of casting processes. Compliant with ASTM D412, it offers a 1:1 mixing ratio, bubble-free casting, and durability for resins, silicones, and low-melting-point metals, ideal for prototyping, jewelry, and industrial design in automotive, aerospace, and artisanal applications.",
          "categoryLabel": "Explore our transparent mould making solutions",
          "buttons": [
            { "text": "Discover Transmount System", "variant": "primary" },
            { "text": "Contact Our Experts", "variant": "secondary", "link": "/contact" }
          ]
        },
        "semiAutomaticSection": {
          "title": "Transmount Transparent Mould Making System",
          "description": "The Transmount system uses translucent silicone rubber (Shore A 22-50) for moulds with excellent tear resistance and transparency, allowing real-time monitoring of resin flow and part formation. Features include a 1:1 mixing ratio, heat resistance up to 250°C, and compatibility with epoxy, polyurethane, and tin/lead casting, ensuring precision and repeatability for complex geometries.",
          "label": "Mould Making Features"
        },
        "specialtySection": {
          "title": "Specialty Mould Making Solutions",
          "description": "Optimized for intricate designs and high-detail replication, Transmount supports custom pigmentation, rapid-curing options, and food-grade applications. Its transparent nature aids in cutting partial seams for block moulds, making it perfect for one-off prototypes and high-volume production in demanding environments.",
          "label": "Advanced Mould Making Solutions"
        },
        "solutionsBanner": {
          "title": "Comprehensive Mould Making Solutions",
          "description": "Explore our Solutions section for ASTM D412-compliant protocols, technical guides for silicone mould making, and industry-specific applications to optimize your Transmount workflows.",
          "image": "/productsListing/Transmount_Solutions.png",
          "label": "Tailored Mould Making Solutions",
          "buttons": [
            { "text": "Solutions by Industry", "variant": "primary" },
            { "text": "Solutions by Material", "variant": "secondary" }
          ]
        },
        "slides": [
          {
            "id": 1,
            "image": "/images/transmount/standard-kit.png",
            "alt": "Transmount Standard Kit",
            "category": "Transmount System",
            "title": "Standard Kit",
            "description": "1kg translucent silicone kit with 1:1 mixing ratio, ideal for small-scale prototyping and jewelry casting with bubble-free results.",
            "reviews": 22,
            "rating": 4.9
          },
          {
            "id": 2,
            "image": "/images/transmount/high-temp-kit.png",
            "alt": "Transmount High-Temperature Kit",
            "category": "Transmount System",
            "title": "High-Temperature Kit",
            "description": "2kg kit with heat-resistant silicone (up to 250°C), designed for casting low-melting-point metals like tin and lead.",
            "reviews": 18,
            "rating": 4.8
          },
          {
            "id": 3,
            "image": "/images/transmount/rapid-cure-kit.png",
            "alt": "Transmount Rapid-Cure Kit",
            "category": "Transmount System",
            "title": "Rapid-Cure Kit",
            "description": "500g fast-curing silicone kit for quick turnaround, perfect for high-detail moulds in time-sensitive projects.",
            "reviews": 15,
            "rating": 4.7
          }
        ],
        "products": [
          { "name": "Standard Kit", "image": "/images/transmount/standard-kit.png" },
          { "name": "High-Temperature Kit", "image": "/images/transmount/high-temp-kit.png" },
          { "name": "Rapid-Cure Kit", "image": "/images/transmount/rapid-cure-kit.png" },
          { "name": "Silicone Pigments", "image": "/images/transmount/silicone-pigments.png" },
          { "name": "Release Agent", "image": "/images/transmount/release-agent.png" },
          { "name": "Mixing Tools", "image": "/images/transmount/mixing-tools.png" },
          { "name": "Vacuum Degassing Chamber", "image": "/images/transmount/vacuum-degassing-chamber.png" },
          { "name": "Mould Box System", "image": "/images/transmount/mould-box-system.png" }
        ],
        "items": [
          {
            "id": 1,
            "name": "Transmount Transparent Mould Making System",
            "color": "rgba(90, 140, 170, 0.1)",
            "bgColor": "rgba(90, 140, 170, 0.1)",
            "subItems": [
              { "name": "Standard Kit", "apiCall": "/api/products/standard-kit" },
              { "name": "High-Temperature Kit", "apiCall": "/api/products/high-temp-kit" },
              { "name": "Rapid-Cure Kit", "apiCall": "/api/products/rapid-cure-kit" },
              { "name": "Silicone Pigments", "apiCall": "/api/products/silicone-pigments" },
              { "name": "Release Agent", "apiCall": "/api/products/release-agent" },
              { "name": "Mixing Tools", "apiCall": "/api/products/mixing-tools" },
              { "name": "Vacuum Degassing Chamber", "apiCall": "/api/products/vacuum-degassing-chamber" },
              { "name": "Mould Box System", "apiCall": "/api/products/mould-box-system" }
            ]
          }
        ],
        "productCards": [
          {
            "id": 1,
            "name": "Standard Kit",
            "tag": "Versatile Casting",
            "description": "1kg translucent silicone with 1:1 mixing ratio, perfect for resin and polyurethane casting with minimal bubbles and high detail.",
            "image": "/images/transmount/standard-kit.png",
            "detail": "/products/standard-kit",
            "delay": 0.1
          },
          {
            "id": 2,
            "name": "High-Temperature Kit",
            "tag": "Heat Resistant",
            "description": "2kg silicone kit resistant up to 250°C, ideal for casting low-melting-point metals like tin and lead in industrial applications.",
            "image": "/images/transmount/high-temp-kit.png",
            "detail": "/products/high-temp-kit",
            "delay": 0.2
          },
          {
            "id": 3,
            "name": "Rapid-Cure Kit",
            "tag": "Fast Turnaround",
            "description": "500g fast-curing silicone for quick mould production, ensuring high-detail replication in time-sensitive projects.",
            "image": "/images/transmount/rapid-cure-kit.png",
            "detail": "/products/rapid-cure-kit",
            "delay": 0.3
          },
          {
            "id": 4,
            "name": "Silicone Pigments",
            "tag": "Customizable Color",
            "description": "Specialized pigments for coloring transparent silicone, enabling vibrant, elastic moulds with precise detail reproduction.",
            "image": "/images/transmount/silicone-pigments.png",
            "detail": "/products/silicone-pigments",
            "delay": 0.4
          },
          {
            "id": 5,
            "name": "Release Agent",
            "tag": "Easy Demoulding",
            "description": "Non-stick agent ensures smooth mould release, preserving intricate details and extending mould lifespan.",
            "image": "/images/transmount/release-agent.png",
            "detail": "/products/release-agent",
            "delay": 0.5
          },
          {
            "id": 6,
            "name": "Mixing Tools",
            "tag": "Precision Mixing",
            "description": "Includes cups, stirrers, and spatulas for accurate 1:1 silicone mixing, reducing waste and ensuring uniformity.",
            "image": "/images/transmount/mixing-tools.png",
            "detail": "/products/mixing-tools",
            "delay": 0.6
          },
          {
            "id": 7,
            "name": "Vacuum Degassing Chamber",
            "tag": "Bubble-Free Casting",
            "description": "Removes air bubbles from silicone before pouring, ensuring flawless, transparent moulds with high clarity.",
            "image": "/images/transmount/vacuum-degassing-chamber.png",
            "detail": "/products/vacuum-degassing-chamber",
            "delay": 0.7
          },
          {
            "id": 8,
            "name": "Mould Box System",
            "tag": "Stable Moulding",
            "description": "Reusable mould boxes for secure silicone pouring, accommodating various part sizes and complex geometries.",
            "image": "/images/transmount/mould-box-system.png",
            "detail": "/products/mould-box-system",
            "delay": 0.8
          }
        ],
        "specialtyProducts": [
          {
            "id": 1,
            "name": "High-Temperature Kit",
            "description": "2kg transparent silicone kit with heat resistance up to 250°C, optimized for casting low-melting-point metals and high-detail industrial prototypes.",
            "image": "/images/transmount/high-temp-kit.png",
            "delay": 0.1,
            "animationX": -50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          },
          {
            "id": 2,
            "name": "Rapid-Cure Kit",
            "description": "500g fast-curing translucent silicone kit, designed for rapid mould production with high tear resistance and clarity for artisanal and prototyping needs.",
            "image": "/images/transmount/rapid-cure-kit.png",
            "delay": 0.2,
            "animationX": 50,
            "buttons": [
              { "text": "Product Details", "variant": "primary" },
              { "text": "Technical Specs", "variant": "secondary" }
            ]
          }
        ],
        "subCategories": [
          { "id": "standard-kit", "name": "Standard Kit" },
          { "id": "high-temp-kit", "name": "High-Temperature Kit" },
          { "id": "rapid-cure-kit", "name": "Rapid-Cure Kit" },
          { "id": "silicone-pigments", "name": "Silicone Pigments" },
          { "id": "release-agent", "name": "Release Agent" },
          { "id": "mixing-tools", "name": "Mixing Tools" },
          { "id": "vacuum-degassing-chamber", "name": "Vacuum Degassing Chamber" },
          { "id": "mould-box-system", "name": "Mould Box System" }
        ]
      },
    ]
  }
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
