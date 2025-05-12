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
  {
    mainCategory: "Micro Hardness Tester",
    categories:[

    ]
  },
  {
    mainCategory: "Other Machines",
    categories: [
      
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
