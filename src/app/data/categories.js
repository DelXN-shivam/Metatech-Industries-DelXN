const products = [
    // Automatic Cutting Machines
    {
      id: 1,
      categorySlug: "automatic-cutting-machines",
      name: "Auto Cut",
      slug: "auto-cut",
      description: "Fully automatic cutting machine designed for high precision and repeatability in material sectioning.",
      image: "/images/automatic-cutting-machines/auto-cut.png",
      alt: "Automatic Cutting Machine - Auto Cut",
      rating: 4.6,
      reviews: 38,
      tag: "Fully Automatic",
      detail: "High throughput",
      apiCall: "/api/automatic-cutting/auto-cut",
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
      name: "MetaCut",
      slug: "metacut",
      description: "High-performance automatic cutting solution ideal for laboratory environments requiring precision and consistency.",
      image: "/images/automatic-cutting-machines/meta-cut.png",
      alt: "Automatic Cutting Machine - MetaCut",
      rating: 4.7,
      reviews: 40,
      tag: "Laboratory Grade",
      detail: "Ideal for R&D",
      apiCall: "/api/automatic-cutting/metacut",
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
      id: 5,
      categorySlug: "automatic-cutting-machines",
      name: "MetaCut-I",
      slug: "metacut-i",
      description: "Entry-level automatic cutting machine offering consistent results for routine cutting tasks in industrial labs.",
      image: "/images/automatic-cutting-machines/metacut-i.png",
      alt: "MetaCut-I Cutting Machine",
      rating: 4.3,
      reviews: 28,
      tag: "Entry-level",
      detail: "Cost-effective",
      apiCall: "/api/automatic-cutting/metacut-i",
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
        "/auto_cutting/simplimet1.jpg",
        "/auto_cutting/simplimet2.jpg",
        "/auto_cutting/simplimet3.jpg",
        "/auto_cutting/simplimet4.jpg",
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
  
  export const categories = [
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
  };




// export const categories = [
//     {
//         "name": "Automatic Cutting Machines",
//         "slug": "automatic-cutting-machines",
//         "heroImage": "/images/automatic-cutting-machines/automatic-cutting-machines.png",
//         "intro": {
//             "title": "Precision Cutting for Every Application",
//             "description": "Our Automatic Cutting Machines deliver high precision and efficiency for diverse industrial and laboratory applications. From Auto Cut and MetaCut systems to oscillating abrasive and tube-cutting machines, find the ideal solution for your sample preparation needs.",
//             "categoryLabel": "Browse our cutting solutions",
//             "buttons": [
//                 {
//                     "text": "Explore Cutting Machines",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Contact Experts",
//                     "variant": "secondary",
//                     "link": "/contact"
//                 }
//             ]
//         },
//         "semiAutomaticSection": {
//             "title": "Automatic Cutting Machines",
//             "description": "Process multiple samples automatically to increase throughput while freeing up users for other tasks. Automatic processing ensures consistent sample quality cycle to cycle.",
//             "label": "Our Products"
//         },
//         "specialtySection": {
//             "title": "Specialty Autocutting Machines",
//             "description": "When typical grinders can't meet your requirements for flatness or surface finish, our specialty solutions deliver exceptional results.",
//             "label": "Advanced Solutions"
//         },
//         "solutionsBanner": {
//             "title": "Full Lab Autocutting Solutions",
//             "description": "Looking for more information? Browse through our Solutions section to view technical articles, find recommended processing methods, and discover industry-specific solutions.",
//             "image": "/productsListing/Find_Your_Solutions.png",
//             "label": "Comprehensive Solutions",
//             "buttons": [
//                 {
//                     "text": "Solutions by Industry",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Solutions by Material",
//                     "variant": "secondary"
//                 }
//             ]
//         },
//         "slides": [
//             {
//                 "id": 1,
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "alt": "Automatic Cutting Machine - Auto Cut",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - Auto Cut",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning.",
//                 "reviews": 38,
//                 "rating": 4.6
//             },
//             {
//                 "id": 2,
//                 "image": "/images/automatic-cutting-machines/auto-s.png",
//                 "alt": "Automatic Cutting Machine - Auto S",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - Auto S",
//                 "description": "Semi-automatic cutting system with intelligent feed control for optimal cutting performance and safety.",
//                 "reviews": 35,
//                 "rating": 4.4
//             },
//             {
//                 "id": 3,
//                 "image": "/images/automatic-cutting-machines/meta-cut.png",
//                 "alt": "Automatic Cutting Machine - MetaCut",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - MetaCut",
//                 "description": "High-performance automatic cutting solution ideal for laboratory environments requiring precision and consistency.",
//                 "reviews": 40,
//                 "rating": 4.7
//             }
//         ],
//         "products": [
//             {
//                 "name": "Automatic Cutting Machines - Auto Cut",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png"
//             },
//             {
//                 "name": "Automatic Cutting Machines - Auto S",
//                 "image": "/images/automatic-cutting-machines/auto-s.png"
//             },
//             {
//                 "name": "Automatic Cutting Machines - MetaCut",
//                 "image": "/images/automatic-cutting-machines/meta-cut.png"
//             },
//             {
//                 "name": "Oscillating Abrasive Cut-off Machines",
//                 "image": "/images/automatic-cutting-machines/oscillating-cut-off.png"
//             },
//             {
//                 "name": "MetaCut-I",
//                 "image": "/images/automatic-cutting-machines/metacut-i.png"
//             },
//             {
//                 "name": "Tube Cutting Machines",
//                 "image": "/images/automatic-cutting-machines/tube-cutting.png"
//             },
//             {
//                 "name": "High-Precision Servo Cut",
//                 "image": "/images/automatic-cutting-machines/high-precision-cut.png"
//             }
//         ],
//         "items": [
//             {
//                 "id": 1,
//                 "name": "Automatic Cutting Machines",
//                 "color": "[#0f7db7]/10",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Automatic Cutting Machines - Auto Cut",
//                         "apiCall": "/api/automatic-cutting/auto-cut"
//                     },
//                     {
//                         "name": "Automatic Cutting Machines - Auto-S",
//                         "apiCall": "/api/automatic-cutting/auto-s"
//                     },
//                     {
//                         "name": "Automatic Cutting Machines - MetaCut",
//                         "apiCall": "/api/automatic-cutting/metacut"
//                     },
//                     {
//                         "name": "Oscillating Abrasive Cut-off Machines",
//                         "apiCall": "/api/automatic-cutting/oscillating-abrasive"
//                     },
//                     {
//                         "name": "Metacut-I",
//                         "apiCall": "/api/automatic-cutting/metacut-i"
//                     },
//                     {
//                         "name": "Tube Cutting Machines",
//                         "apiCall": "/api/automatic-cutting/tube-cutting"
//                     }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "Microscope and Image Analyzer",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Inverted Microscope",
//                         "apiCall": "/api/microscope/inverted"
//                     },
//                     {
//                         "name": "Inverted Microscope - Metagraph",
//                         "apiCall": "/api/microscope/metagraph"
//                     },
//                     {
//                         "name": "Upright Microscope",
//                         "apiCall": "/api/microscope/upright"
//                     },
//                     { "name": "Stereo Microscope", "apiCall": "/api/microscope/stereo" }
//                 ]
//             },
//             {
//                 "id": 3,
//                 "name": "Hardness Tester",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Portable Vickers Hardness Tester",
//                         "apiCall": "/api/hardness-tester/portable-vickers"
//                     },
//                     {
//                         "name": "Portable Brinell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/portable-brinell"
//                     },
//                     {
//                         "name": "Rockwell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/rockwell"
//                     },
//                     {
//                         "name": "Brinell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/brinell"
//                     },
//                     {
//                         "name": "Leeb Hardness Tester",
//                         "apiCall": "/api/hardness-tester/leeb"
//                     }
//                 ]
//             },
//             {
//                 "id": 4,
//                 "name": "Diamond Cutting Machines",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     { "name": "DCM", "apiCall": "/api/diamond-cutting/dcm" },
//                     {
//                         "name": "HI Speed DCM",
//                         "apiCall": "/api/diamond-cutting/hi-speed-dcm"
//                     }
//                 ]
//             },
//             {
//                 "id": 5,
//                 "name": "Image Analyzer",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Grain Analysis",
//                         "apiCall": "/api/image-analyzer/grain-analysis"
//                     },
//                     {
//                         "name": "Planimetry Method",
//                         "apiCall": "/api/image-analyzer/planimetry"
//                     },
//                     {
//                         "name": "Phase Analysis",
//                         "apiCall": "/api/image-analyzer/phase-analysis"
//                     },
//                     { "name": "Graphite", "apiCall": "/api/image-analyzer/graphite" },
//                     {
//                         "name": "Point Counter",
//                         "apiCall": "/api/image-analyzer/point-counter"
//                     },
//                     { "name": "Inclusion", "apiCall": "/api/image-analyzer/inclusion" }
//                 ]
//             },
//             {
//                 "id": 6,
//                 "name": "Portable & Manual Cutting Machines",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Portable Abrasive Cutter",
//                         "apiCall": "/api/manual-cutting/portable-abrasive-cutter"
//                     },
//                     {
//                         "name": "Manual Benchtop Cutting Machine",
//                         "apiCall": "/api/manual-cutting/manual-benchtop"
//                     },
//                     {
//                         "name": "Hydraulic Tube Cutting Machine",
//                         "apiCall": "/api/manual-cutting/hydraulic-tube-cutter"
//                     }
//                 ]
//             },
//             {
//                 "id": 7,
//                 "name": "Laser Cutting Systems",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Fiber Laser Cutting Machine",
//                         "apiCall": "/api/laser-cutting/fiber-laser"
//                     },
//                     {
//                         "name": "CO2 Laser Cutting System",
//                         "apiCall": "/api/laser-cutting/co2-laser"
//                     },
//                     {
//                         "name": "Precision Sheet Metal Laser Cutter",
//                         "apiCall": "/api/laser-cutting/sheet-metal-cutter"
//                     }
//                 ]
//             }
//         ],
//         "productCards": [
//             {
//                 "id": 1,
//                 "name": "Auto Cut",
//                 "tag": "Fully Automatic",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning.",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "detail": "High throughput",
//                 "delay": 0.1
//             },
//             {
//                 "id": 2,
//                 "name": "Auto S",
//                 "tag": "Semi-Automatic",
//                 "description": "Semi-automatic cutting system with intelligent feed control for optimal cutting performance and safety.",
//                 "image": "/images/automatic-cutting-machines/auto-s.png",
//                 "detail": "Manual override",
//                 "delay": 0.2
//             },
//             {
//                 "id": 3,
//                 "name": "MetaCut",
//                 "tag": "Laboratory Grade",
//                 "description": "High-performance automatic cutting solution ideal for laboratory environments requiring precision and consistency.",
//                 "image": "/images/automatic-cutting-machines/meta-cut.png",
//                 "detail": "Ideal for R&D",
//                 "delay": 0.3
//             },
//             {
//                 "id": 4,
//                 "name": "Oscillating Abrasive Cut-off",
//                 "tag": "Hard Material",
//                 "description": "Designed for fast and precise cutting of hard materials using oscillating abrasive blades for minimal burring.",
//                 "image": "/images/automatic-cutting-machines/oscillating-cut-off.png",
//                 "detail": "Low burring",
//                 "delay": 0.4
//             },
//             {
//                 "id": 5,
//                 "name": "MetaCut-I",
//                 "tag": "Entry-level",
//                 "description": "Entry-level automatic cutting machine offering consistent results for routine cutting tasks in industrial labs.",
//                 "image": "/images/automatic-cutting-machines/metacut-i.png",
//                 "detail": "Cost-effective",
//                 "delay": 0.5
//             },
//             {
//                 "id": 6,
//                 "name": "Tube Cutting Machine",
//                 "tag": "Specialized",
//                 "description": "Specialized cutting equipment for tubes and cylindrical specimens ensuring clean cuts without deformation.",
//                 "image": "/images/automatic-cutting-machines/tube-cutting.png",
//                 "detail": "Tubular parts",
//                 "delay": 0.6
//             },
//             {
//                 "id": 7,
//                 "name": "High-Precision Servo Cut",
//                 "tag": "Servo-Controlled",
//                 "description": "Servo-controlled cutting system offering unmatched accuracy and smooth motion control for critical applications.",
//                 "image": "/images/automatic-cutting-machines/high-precision-cut.png",
//                 "detail": "Critical tolerance",
//                 "delay": 0.7
//             }
//         ],
//         "specialtyProducts": [
//             {
//                 "id": 1,
//                 "name": "Automatic Cutting Machine - Auto Cut",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning. Ideal for industrial and laboratory environments requiring consistent performance.",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "delay": 0.1,
//                 "animationX": -50,
//                 "buttons": [
//                     { "text": "Product Details", "variant": "primary" },
//                     { "text": "Technical Specs", "variant": "secondary" }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "More Solutions",
//                 "description": "Discover our full range of specialty solutions for unique sample preparation challenges.",
//                 "image": null,
//                 "delay": 0.2,
//                 "animationX": 50,
//                 "buttons": [{ "text": "Explore All", "variant": "primary" }]
//             }
//         ],
//         "subCategories": [
//             { "id": "auto-cut", "name": "Auto Cut" },
//             { "id": "auto-s", "name": "Auto S" },
//         ]
//     },
//     {
//         "name": "Microscope and Image Analyzer",
//         "slug": "microscope-and-image-analyzer",
//         "heroImage": "/images/microscope-and-image-analyzer/microscope-and-image-analyzer.png",
//         "intro": {
//             "title": "Advanced Imaging for Precision Analysis",
//             "description": "Our Microscope and Image Analyzer systems provide cutting-edge solutions for detailed material characterization and quantitative analysis. From inverted and upright microscopes to advanced image analysis software, explore tools designed for metallography, biomedical research, and quality control.",
//             "categoryLabel": "Browse our imaging solutions",
//             "buttons": [
//                 {
//                     "text": "Explore Microscopes",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Contact Experts",
//                     "variant": "secondary",
//                     "link": "/contact"
//                 }
//             ]
//         },
//         "semiAutomaticSection": {
//             "title": "Microscopes",
//             "description": "High-resolution microscopes for precise imaging of microstructures, equipped with advanced optics and digital cameras for seamless integration with image analysis software.",
//             "label": "Our Products"
//         },
//         "specialtySection": {
//             "title": "Image Analysis Software",
//             "description": "Powerful software solutions for quantitative analysis, including grain size measurement, phase analysis, and 3D reconstruction, tailored for research and industrial applications.",
//             "label": "Advanced Solutions"
//         },
//         "solutionsBanner": {
//             "title": "Comprehensive Microscopy Solutions",
//             "description": "Dive into our Solutions section for technical insights, application notes, and industry-specific microscopy and image analysis techniques.",
//             "image": "/productsListing/Find_Your_Solutions.png",
//             "label": "Comprehensive Solutions",
//             "buttons": [
//                 {
//                     "text": "Solutions by Industry",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Solutions by Material",
//                     "variant": "secondary"
//                 }
//             ]
//         },
//         "slides": [
//             {
//                 "id": 1,
//                 "image": "/images/microscope-and-image-analyzer/inverted-microscope.png",
//                 "alt": "Inverted Microscope",
//                 "category": "Microscopes",
//                 "title": "Inverted Microscope",
//                 "description": "High-resolution inverted microscope ideal for metallographic and material science applications.",
//                 "reviews": 42,
//                 "rating": 4.8
//             },
//             {
//                 "id": 2,
//                 "image": "/images/microscope-and-image-analyzer/upright-microscope.png",
//                 "alt": "Upright Microscope",
//                 "category": "Microscopes",
//                 "title": "Upright Microscope",
//                 "description": "Versatile upright microscope for high-magnification imaging of non-flat or mounted samples.",
//                 "reviews": 39,
//                 "rating": 4.6
//             },
//             {
//                 "id": 3,
//                 "image": "/images/microscope-and-image-analyzer/stereo-microscope.png",
//                 "alt": "Stereo Microscope",
//                 "category": "Microscopes",
//                 "title": "Stereo Microscope",
//                 "description": "Zoom stereo microscope for large sample analysis and multi-focal imaging.",
//                 "reviews": 37,
//                 "rating": 4.5
//             }
//         ],
//         "products": [
//             {
//                 "name": "Inverted Microscope",
//                 "image": "/images/microscope-and-image-analyzer/inverted-microscope.png"
//             },
//             {
//                 "name": "Upright Microscope",
//                 "image": "/images/microscope-and-image-analyzer/upright-microscope.png"
//             },
//             {
//                 "name": "Stereo Microscope",
//                 "image": "/images/microscope-and-image-analyzer/stereo-microscope.png"
//             },
//             {
//                 "name": "Image Analysis Software - OmniMet",
//                 "image": "/images/microscope-and-image-analyzer/omnimet-software.png"
//             },
//             {
//                 "name": "Metallurgical Image Analyzer",
//                 "image": "/images/microscope-and-image-analyzer/metallurgical-analyzer.png"
//             },
//             {
//                 "name": "Confocal Microscope",
//                 "image": "/images/microscope-and-image-analyzer/confocal-microscope.png"
//             }
//         ],
//         "items": [
//             {
//                 "id": 1,
//                 "name": "Microscopes",
//                 "color": "[#0f7db7]/10",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Inverted Microscope",
//                         "apiCall": "/api/microscope/inverted"
//                     },
//                     {
//                         "name": "Upright Microscope",
//                         "apiCall": "/api/microscope/upright"
//                     },
//                     {
//                         "name": "Stereo Microscope",
//                         "apiCall": "/api/microscope/stereo"
//                     },
//                     {
//                         "name": "Confocal Microscope",
//                         "apiCall": "/api/microscope/confocal"
//                     }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "Image Analyzers",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Image Analysis Software - OmniMet",
//                         "apiCall": "/api/image-analyzer/omnimet"
//                     },
//                     {
//                         "name": "Metallurgical Image Analyzer",
//                         "apiCall": "/api/image-analyzer/metallurgical"
//                     },
//                     {
//                         "name": "Grain Size Analysis",
//                         "apiCall": "/api/image-analyzer/grain-size"
//                     },
//                     {
//                         "name": "Phase Analysis",
//                         "apiCall": "/api/image-analyzer/phase"
//                     }
//                 ]
//             }
//         ],
//         "productCards": [
//             {
//                 "id": 1,
//                 "name": "Inverted Microscope",
//                 "tag": "Metallography",
//                 "description": "High-resolution inverted microscope for precise imaging of flat, mounted samples in material science.",
//                 "image": "/images/microscope-and-image-analyzer/inverted-microscope.png",
//                 "detail": "High magnification",
//                 "delay": 0.1
//             },
//             {
//                 "id": 2,
//                 "name": "Upright Microscope",
//                 "tag": "Versatile",
//                 "description": "Upright microscope for high-magnification imaging of non-flat or mounted samples in various applications.",
//                 "image": "/images/microscope-and-image-analyzer/upright-microscope.png",
//                 "detail": "Multi-light sources",
//                 "delay": 0.2
//             },
//             {
//                 "id": 3,
//                 "name": "Stereo Microscope",
//                 "tag": "Macro Imaging",
//                 "description": "Zoom stereo microscope designed for large sample analysis and multi-focal imaging.",
//                 "image": "/images/microscope-and-image-analyzer/stereo-microscope.png",
//                 "detail": "Wide field of view",
//                 "delay": 0.3
//             },
//             {
//                 "id": 4,
//                 "name": "OmniMet Software",
//                 "tag": "Image Analysis",
//                 "description": "Advanced image analysis software for quantitative measurements, including grain size and phase analysis.",
//                 "image": "/images/microscope-and-image-analyzer/omnimet-software.png",
//                 "detail": "Quantitative analysis",
//                 "delay": 0.4
//             },
//             {
//                 "id": 5,
//                 "name": "Metallurgical Image Analyzer",
//                 "tag": "Specialized",
//                 "description": "Dedicated system for metallographic analysis, including nodularity and inclusion measurements.",
//                 "image": "/images/microscope-and-image-analyzer/metallurgical-analyzer.png",
//                 "detail": "Standards-compliant",
//                 "delay": 0.5
//             },
//             {
//                 "id": 6,
//                 "name": "Confocal Microscope",
//                 "tag": "3D Imaging",
//                 "description": "Confocal microscope for high-resolution 3D imaging and advanced material characterization.",
//                 "image": "/images/microscope-and-image-analyzer/confocal-microscope.png",
//                 "detail": "3D reconstruction",
//                 "delay": 0.6
//             }
//         ],
//         "specialtyProducts": [
//             {
//                 "id": 1,
//                 "name": "Confocal Microscope",
//                 "description": "Advanced confocal microscope for high-resolution 3D imaging and quantitative analysis in research and industrial applications.",
//                 "image": "/images/microscope-and-image-analyzer/confocal-microscope.png",
//                 "delay": 0.1,
//                 "animationX": -50,
//                 "buttons": [
//                     { "text": "Product Details", "variant": "primary" },
//                     { "text": "Technical Specs", "variant": "secondary" }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "More Solutions",
//                 "description": "Explore our full range of microscopy and image analysis solutions for unique research challenges.",
//                 "image": null,
//                 "delay": 0.2,
//                 "animationX": 50,
//                 "buttons": [{ "text": "Explore All", "variant": "primary" }]
//             }
//         ],
//         "subCategories": [
//             { "id": "inverted-microscope", "name": "Inverted Microscope" },
//             { "id": "upright-microscope", "name": "Upright Microscope" }
//         ]
//     }
// ];

// export const getCategoryBySlug = (slug) => {
//     return categories.find(category => category.slug === slug);
// };

// export const getSubCategoryById = (categorySlug, subCategoryId) => {
//     const category = getCategoryBySlug(categorySlug);
//     if (!category) return null;
//     return category.items.find(item => item.id === subCategoryId);
// };





// export const categories = [
//     {
//         "name": "Automatic Cutting Machines",
//         "slug": "automatic-cutting-machines",
//         "heroImage": "/images/automatic-cutting-machines/automatic-cutting-machines.png",
//         "intro": {
//             "title": "Precision Cutting for Every Application",
//             "description": "Our Automatic Cutting Machines deliver high precision and efficiency for diverse industrial and laboratory applications. From Auto Cut and MetaCut systems to oscillating abrasive and tube-cutting machines, find the ideal solution for your sample preparation needs.",
//             "categoryLabel": "Browse our cutting solutions",
//             "buttons": [
//                 {
//                     "text": "Explore Cutting Machines",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Contact Experts",
//                     "variant": "secondary",
//                     "link": "/contact"
//                 }
//             ]
//         },
//         "semiAutomaticSection": {
//             "title": "Automatic Cutting Machines",
//             "description": "Process multiple samples automatically to increase throughput while freeing up users for other tasks. Automatic processing ensures consistent sample quality cycle to cycle.",
//             "label": "Our Products"
//         },
//         "specialtySection": {
//             "title": "Specialty Autocutting Machines",
//             "description": "When typical grinders can't meet your requirements for flatness or surface finish, our specialty solutions deliver exceptional results.",
//             "label": "Advanced Solutions"
//         },
//         "solutionsBanner": {
//             "title": "Full Lab Autocutting Solutions",
//             "description": "Looking for more information? Browse through our Solutions section to view technical articles, find recommended processing methods, and discover industry-specific solutions.",
//             "image": "/productsListing/Find_Your_Solutions.png",
//             "label": "Comprehensive Solutions",
//             "buttons": [
//                 {
//                     "text": "Solutions by Industry",
//                     "variant": "primary"
//                 },
//                 {
//                     "text": "Solutions by Material",
//                     "variant": "secondary"
//                 }
//             ]
//         },
//         "slides": [
//             {
//                 "id": 1,
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "alt": "Automatic Cutting Machine - Auto Cut",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - Auto Cut",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning.",
//                 "reviews": 38,
//                 "rating": 4.6
//             },
//             {
//                 "id": 2,
//                 "image": "/images/automatic-cutting-machines/auto-s.png",
//                 "alt": "Automatic Cutting Machine - Auto S",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - Auto S",
//                 "description": "Semi-automatic cutting system with intelligent feed control for optimal cutting performance and safety.",
//                 "reviews": 35,
//                 "rating": 4.4
//             },
//             {
//                 "id": 3,
//                 "image": "/images/automatic-cutting-machines/meta-cut.png",
//                 "alt": "Automatic Cutting Machine - MetaCut",
//                 "category": "Cutting Machines",
//                 "title": "Automatic Cutting Machine - MetaCut",
//                 "description": "High-performance automatic cutting solution ideal for laboratory environments requiring precision and consistency.",
//                 "reviews": 40,
//                 "rating": 4.7
//             }
//         ],
//         "products": [
//             {
//                 "name": "Automatic Cutting Machines - Auto Cut",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png"
//             },
//             {
//                 "name": "Automatic Cutting Machines - Auto S",
//                 "image": "/images/automatic-cutting-machines/auto-s.png"
//             },
//             {
//                 "name": "Automatic Cutting Machines - MetaCut",
//                 "image": "/images/automatic-cutting-machines/meta-cut.png"
//             },
//             {
//                 "name": "Oscillating Abrasive Cut-off Machines",
//                 "image": "/images/automatic-cutting-machines/oscillating-cut-off.png"
//             },
//             {
//                 "name": "MetaCut-I",
//                 "image": "/images/automatic-cutting-machines/metacut-i.png"
//             },
//             {
//                 "name": "Tube Cutting Machines",
//                 "image": "/images/automatic-cutting-machines/tube-cutting.png"
//             },
//             {
//                 "name": "High-Precision Servo Cut",
//                 "image": "/images/automatic-cutting-machines/high-precision-cut.png"
//             }
//         ],
//         "items": [
//             {
//                 "id": 1,
//                 "name": "Automatic Cutting Machines",
//                 "color": "[#0f7db7]/10",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Automatic Cutting Machines - Auto Cut",
//                         "apiCall": "/api/automatic-cutting/auto-cut"
//                     },
//                     {
//                         "name": "Automatic Cutting Machines - Auto-S",
//                         "apiCall": "/api/automatic-cutting/auto-s"
//                     },
//                     {
//                         "name": "Automatic Cutting Machines - MetaCut",
//                         "apiCall": "/api/automatic-cutting/metacut"
//                     },
//                     {
//                         "name": "Oscillating Abrasive Cut-off Machines",
//                         "apiCall": "/api/automatic-cutting/oscillating-abrasive"
//                     },
//                     {
//                         "name": "Metacut-I",
//                         "apiCall": "/api/automatic-cutting/metacut-i"
//                     },
//                     {
//                         "name": "Tube Cutting Machines",
//                         "apiCall": "/api/automatic-cutting/tube-cutting"
//                     }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "Microscope and Image Analyzer",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Inverted Microscope",
//                         "apiCall": "/api/microscope/inverted"
//                     },
//                     {
//                         "name": "Inverted Microscope - Metagraph",
//                         "apiCall": "/api/microscope/metagraph"
//                     },
//                     {
//                         "name": "Upright Microscope",
//                         "apiCall": "/api/microscope/upright"
//                     },
//                     { "name": "Stereo Microscope", "apiCall": "/api/microscope/stereo" }
//                 ]
//             },
//             {
//                 "id": 3,
//                 "name": "Hardness Tester",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Portable Vickers Hardness Tester",
//                         "apiCall": "/api/hardness-tester/portable-vickers"
//                     },
//                     {
//                         "name": "Portable Brinell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/portable-brinell"
//                     },
//                     {
//                         "name": "Rockwell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/rockwell"
//                     },
//                     {
//                         "name": "Brinell Hardness Tester",
//                         "apiCall": "/api/hardness-tester/brinell"
//                     },
//                     {
//                         "name": "Leeb Hardness Tester",
//                         "apiCall": "/api/hardness-tester/leeb"
//                     }
//                 ]
//             },
//             {
//                 "id": 4,
//                 "name": "Diamond Cutting Machines",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     { "name": "DCM", "apiCall": "/api/diamond-cutting/dcm" },
//                     {
//                         "name": "HI Speed DCM",
//                         "apiCall": "/api/diamond-cutting/hi-speed-dcm"
//                     }
//                 ]
//             },
//             {
//                 "id": 5,
//                 "name": "Image Analyzer",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Grain Analysis",
//                         "apiCall": "/api/image-analyzer/grain-analysis"
//                     },
//                     {
//                         "name": "Planimetry Method",
//                         "apiCall": "/api/image-analyzer/planimetry"
//                     },
//                     {
//                         "name": "Phase Analysis",
//                         "apiCall": "/api/image-analyzer/phase-analysis"
//                     },
//                     { "name": "Graphite", "apiCall": "/api/image-analyzer/graphite" },
//                     {
//                         "name": "Point Counter",
//                         "apiCall": "/api/image-analyzer/point-counter"
//                     },
//                     { "name": "Inclusion", "apiCall": "/api/image-analyzer/inclusion" }
//                 ]
//             },
//             {
//                 "id": 6,
//                 "name": "Portable & Manual Cutting Machines",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Portable Abrasive Cutter",
//                         "apiCall": "/api/manual-cutting/portable-abrasive-cutter"
//                     },
//                     {
//                         "name": "Manual Benchtop Cutting Machine",
//                         "apiCall": "/api/manual-cutting/manual-benchtop"
//                     },
//                     {
//                         "name": "Hydraulic Tube Cutting Machine",
//                         "apiCall": "/api/manual-cutting/hydraulic-tube-cutter"
//                     }
//                 ]
//             },
//             {
//                 "id": 7,
//                 "name": "Laser Cutting Systems",
//                 "bgColor": "[#0f7db7]/10",
//                 "subItems": [
//                     {
//                         "name": "Fiber Laser Cutting Machine",
//                         "apiCall": "/api/laser-cutting/fiber-laser"
//                     },
//                     {
//                         "name": "CO2 Laser Cutting System",
//                         "apiCall": "/api/laser-cutting/co2-laser"
//                     },
//                     {
//                         "name": "Precision Sheet Metal Laser Cutter",
//                         "apiCall": "/api/laser-cutting/sheet-metal-cutter"
//                     }
//                 ]
//             }
//         ],
//         "productCards": [
//             {
//                 "id": 1,
//                 "name": "Auto Cut",
//                 "tag": "Fully Automatic",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning.",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "detail": "High throughput",
//                 "delay": 0.1
//             },
//             {
//                 "id": 2,
//                 "name": "Auto S",
//                 "tag": "Semi-Automatic",
//                 "description": "Semi-automatic cutting system with intelligent feed control for optimal cutting performance and safety.",
//                 "image": "/images/automatic-cutting-machines/auto-s.png",
//                 "detail": "Manual override",
//                 "delay": 0.2
//             },
//             {
//                 "id": 3,
//                 "name": "MetaCut",
//                 "tag": "Laboratory Grade",
//                 "description": "High-performance automatic cutting solution ideal for laboratory environments requiring precision and consistency.",
//                 "image": "/images/automatic-cutting-machines/meta-cut.png",
//                 "detail": "Ideal for R&D",
//                 "delay": 0.3
//             },
//             {
//                 "id": 4,
//                 "name": "Oscillating Abrasive Cut-off",
//                 "tag": "Hard Material",
//                 "description": "Designed for fast and precise cutting of hard materials using oscillating abrasive blades for minimal burring.",
//                 "image": "/images/automatic-cutting-machines/oscillating-cut-off.png",
//                 "detail": "Low burring",
//                 "delay": 0.4
//             },
//             {
//                 "id": 5,
//                 "name": "MetaCut-I",
//                 "tag": "Entry-level",
//                 "description": "Entry-level automatic cutting machine offering consistent results for routine cutting tasks in industrial labs.",
//                 "image": "/images/automatic-cutting-machines/metacut-i.png",
//                 "detail": "Cost-effective",
//                 "delay": 0.5
//             },
//             {
//                 "id": 6,
//                 "name": "Tube Cutting Machine",
//                 "tag": "Specialized",
//                 "description": "Specialized cutting equipment for tubes and cylindrical specimens ensuring clean cuts without deformation.",
//                 "image": "/images/automatic-cutting-machines/tube-cutting.png",
//                 "detail": "Tubular parts",
//                 "delay": 0.6
//             },
//             {
//                 "id": 7,
//                 "name": "High-Precision Servo Cut",
//                 "tag": "Servo-Controlled",
//                 "description": "Servo-controlled cutting system offering unmatched accuracy and smooth motion control for critical applications.",
//                 "image": "/images/automatic-cutting-machines/high-precision-cut.png",
//                 "detail": "Critical tolerance",
//                 "delay": 0.7
//             }
//         ],
//         "specialtyProducts": [
//             {
//                 "id": 1,
//                 "name": "Automatic Cutting Machine - Auto Cut",
//                 "description": "Fully automatic cutting machine designed for high precision and repeatability in material sectioning. Ideal for industrial and laboratory environments requiring consistent performance.",
//                 "image": "/images/automatic-cutting-machines/auto-cut.png",
//                 "delay": 0.1,
//                 "animationX": -50,
//                 "buttons": [
//                     { "text": "Product Details", "variant": "primary" },
//                     { "text": "Technical Specs", "variant": "secondary" }
//                 ]
//             },
//             {
//                 "id": 2,
//                 "name": "More Solutions",
//                 "description": "Discover our full range of specialty solutions for unique sample preparation challenges.",
//                 "image": null,
//                 "delay": 0.2,
//                 "animationX": 50,
//                 "buttons": [{ "text": "Explore All", "variant": "primary" }]
//             }
//         ],
//         "subCategories": [
//             { "id": "auto-cut", "name": "Auto Cut" },
//             { "id": "auto-s", "name": "Auto S" },
//         ],
//     }
// ];

// export const getCategoryBySlug = (slug) => {
//     return categories.find(category => category.slug === slug);
// };

// export const getSubCategoryById = (categorySlug, subCategoryId) => {
//     const category = getCategoryBySlug(categorySlug);
//     if (!category) return null;
//     return category.items.find(item => item.id === subCategoryId);
// };