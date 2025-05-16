'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const dataList = [
    {
      id: 1,
      name: "Automatic Cutting Machine",
      model: "Auto Cut",
      image: "/cutting/automatic-cutting-machines/autocut.png",
      description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking, Smart cutting feed.",
      headline: "Automatic Cutting Machine- Auto Cut",
      ctaText: "Explore Features",
      totalSlides: 6,
      configStatus: "open",
      sidebarText: "Discover Auto Cut"
    },
    {
      id: 2,
      name: "Image Analysis System",
      model: "Image Analysers",
      image: "/images/imageanalyser.png",
      description: "Grain Analysis (Intercept & Planimetry Methods): Measures average grain size and distribution. \nGrain Size Distribution & Phase Analysis: Assesses grain variance and identifies material phases. \nNodularity, Graphite, and Flake Separation: Analyzes graphite content and nodularity in cast irons. \nPoint Counter: Used for quantitative image analysis based on point counting methods.",
      headline: "Image Analysis System",
      ctaText: "VIEW ALL",
      totalSlides: 5,
      configStatus: "closed",
      sidebarText: "Discover Image Analysers"
    },
    {
      id: 3,
      name: "Electro Hydraulic Press",
      model: "Automount EH",
      image: "/moulding-grinding-polishing/moulding-machines/electro-hydraulic-press.png",
      description: "It prepares samples by encapsulating them in thermosetting resin under controlled heat and pressure. Dual-chamber design allows simultaneous processing of two samples. Equipped with a touchscreen interface for setting pressure, time, and temperature parameters.",
      headline: "Electro Hydraulic Press - Automount EH",
      ctaText: "EXPLORE FEATURES",
      totalSlides: 7,
      configStatus: "open",
      sidebarText: "Discover Automount EH"
    },
    {
      id: 4,
      name: "Metallography",
      model: "Consumables",
      image: "/images/metallographyconsumables.png",
      description: "Cutting Blades & Mounting Powders: For sectioning and mounting specimens. \nPolishing Suspensions & Pastes: Used to achieve mirror-like finishes on samples. \nAbrasive Papers & Cloths: For grinding and intermediate polishing stages.",
      headline: "Metallography Consumables",
      ctaText: "VIEW ALL",
      totalSlides: 4,
      configStatus: "closed",
      sidebarText: "Discover Metallography Consumables"
    }
  ];

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const currentData = dataList[currentDataIndex];
  const [progressValue, setProgressValue] = useState(0);

  // Auto-rotation effect with progress bar
  useEffect(() => {
    let progressInterval;
    let rotationTimer;
    
    if (!isTransitioning) {
      setProgressValue(0);
      
      // Increment progress value
      progressInterval = setInterval(() => {
        setProgressValue(prev => Math.min(prev + 1, 100));
      }, 50); // 50ms * 100 = 5000ms (5s)
      
      // Set up next rotation
      rotationTimer = setTimeout(() => {
        setDirection('right');
        setIsTransitioning(true);
        clearInterval(progressInterval);
        
        setTimeout(() => {
          setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
        }, 300);
      }, 5000);
    }
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(rotationTimer);
    };
  }, [isTransitioning, dataList.length]);

  const nextModel = () => {
    setDirection('right');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const prevModel = () => {
    setDirection('left');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  return (
    // Full viewport container with white background
    <div className="py-6 relative w-full overflow-hidden bg-white">
      {/* Center container with max-width and responsive padding */}
      <motion.div 
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10"
      >
        {/* Main showcase container with white background */}
        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl p-10 bg-white">
          {/* Enhanced background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Responsive floating blobs */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0.1 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.1, 0.25, 0.1],
                x: [-20, 30, -20],
                y: [-30, 10, -30]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 18,
                ease: "easeInOut"
              }}
              className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-48 sm:w-96 h-48 sm:h-96 bg-blue-50/30 rounded-full filter blur-xl sm:blur-3xl"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0.15 }}
              animate={{ 
                scale: [0.9, 1.3, 0.9],
                opacity: [0.15, 0.3, 0.15],
                x: [30, -20, 30],
                y: [20, -40, 20]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-20 sm:-bottom-40 -right-10 sm:-right-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-50/20 rounded-full filter blur-xl sm:blur-3xl"
            />
            
            {/* Decorative pattern - responsive sizing */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="blue" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
          
          {/* Content container */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Top section with responsive typography and spacing */}
            <div className="flex justify-between items-start h-[15%] min-h-[60px] sm:min-h-[80px]">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`header-${currentDataIndex}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-[70%]"
                >
                  <h3 className="text-blue-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-1">Premium Equipment</h3>
                  <h1 className="text-xl text-blue-800 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                    {currentData.name}
                  </h1>
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-600 mt-1 font-light">
                    {currentData.model}
                  </h2>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation controls with responsive sizing */}
              <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevModel} 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border border-blue-100"
                  aria-label="Previous model"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextModel} 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-blue-50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border border-blue-100"
                  aria-label="Next model"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Center section with responsive image container */}
            <div className="flex-grow flex items-center justify-center py-2 sm:py-4 md:py-6 lg:py-8">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`image-${currentDataIndex}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotateY: direction === 'right' ? -15 : 15
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotateY: 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    rotateY: direction === 'right' ? 15 : -15
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {/* Responsive product image container */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Subtle glow effect with responsive sizing */}
                    <div className="absolute inset-0 -m-2 sm:-m-4 md:-m-6 rounded-full bg-blue-100/50 filter blur-xl sm:blur-2xl"></div>
                    
                    <img 
                      src={`${currentData.image}`}
                      alt={`${currentData.model}`} 
                      className="max-w-[90%] max-h-[70%] object-contain h-auto w-auto"
                      style={{ 
                        filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
                        maxHeight: "clamp(200px, 50vh, 500px)"
                      }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Bottom section with responsive layout */}
            <div className="h-[20%] min-h-[80px] sm:min-h-[100px] flex flex-col justify-between">
              {/* Feature tags with responsive sizing */}
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`features-${currentDataIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-1 sm:gap-2"
                  >
                    {currentData.description.split(' ').slice(0, 5).map((feature, idx) => (
                      <motion.span 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-2 py-0.5 sm:px-3 sm:py-1 text-blue-700 bg-blue-50 rounded-full text-xs font-medium whitespace-nowrap border border-blue-100"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Bottom controls with responsive design */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                {/* CTA button with responsive sizing */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={`cta-${currentDataIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.button 
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full bg-blue-50 text-blue-700 uppercase text-xs tracking-widest font-medium transition-all duration-300 shadow-sm border border-blue-100 flex items-center gap-1 sm:gap-2"
                    >
                      {currentData.ctaText}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
                
                {/* Dot indicators with responsive sizing */}
                <div className="flex gap-1 sm:gap-2">
                  {dataList.map((item, index) => (
                    <motion.button 
                      key={item.id} 
                      onClick={() => {
                        setDirection(index > currentDataIndex ? 'right' : 'left');
                        setIsTransitioning(true);
                        
                        setTimeout(() => {
                          setCurrentDataIndex(index);
                          
                          setTimeout(() => {
                            setIsTransitioning(false);
                          }, 300);
                        }, 300);
                      }}
                      className="relative"
                      aria-label={`View ${item.name}`}
                    >
                      <motion.div 
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          currentDataIndex === index 
                            ? 'bg-blue-600' 
                            : 'bg-blue-200'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                      
                      {currentDataIndex === index && (
                        <motion.div 
                          layoutId="activeDot"
                          className="absolute -inset-1 rounded-full border border-blue-600"
                          transition={{ duration: 0.3, type: "spring" }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements with responsive positioning */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute -bottom-8 sm:-bottom-16 -left-8 sm:-left-16 w-16 sm:w-32 h-16 sm:h-32 bg-blue-100 rounded-full filter blur-xl sm:blur-3xl z-0"
        />
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute -top-8 sm:-top-16 -right-8 sm:-right-16 w-16 sm:w-32 h-16 sm:h-32 bg-blue-100 rounded-full filter blur-xl sm:blur-3xl z-0"
        />
      </motion.div>
    </div>
  );
}




// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';

// export default function HeroSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

//   const dataList = [
//     {
//       id: 1,
//       name: "Automatic Cutting Machine",
//       model: "Auto Cut",
//       image: "/images/autopol2.png",
//       description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking, Smart cutting feed.",
//       headline: "Automatic Cutting Machine- Auto Cut",
//       ctaText: "Explore Features",
//       totalSlides: 6,
//       configStatus: "open",
//       sidebarText: "Discover Auto Cut",
//       color: "bg-gradient-to-br from-slate-800 to-blue-900"
//     },
//     {
//       id: 2,
//       name: "Image Analysis System",
//       model: "Image Analysers",
//       image: "/images/imageanalyser.png",
//       description: "Grain Analysis (Intercept & Planimetry Methods): Measures average grain size and distribution. \nGrain Size Distribution & Phase Analysis: Assesses grain variance and identifies material phases. \nNodularity, Graphite, and Flake Separation: Analyzes graphite content and nodularity in cast irons. \nPoint Counter: Used for quantitative image analysis based on point counting methods.",
//       headline: "Image Analysis System",
//       ctaText: "VIEW ALL",
//       totalSlides: 5,
//       configStatus: "closed",
//       sidebarText: "Discover Image Analysers",
//       color: "bg-gradient-to-br from-indigo-800 to-violet-900"
//     },
//     {
//       id: 3,
//       name: "Electro Hydraulic Press",
//       model: "Automount EH",
//       image: "/images/electrohydraulic.png",
//       description: "It prepares samples by encapsulating them in thermosetting resin under controlled heat and pressure. Dual-chamber design allows simultaneous processing of two samples. Equipped with a touchscreen interface for setting pressure, time, and temperature parameters.",
//       headline: "Electro Hydraulic Press - Automount EH",
//       ctaText: "EXPLORE FEATURES",
//       totalSlides: 7,
//       configStatus: "open",
//       sidebarText: "Discover Automount EH",
//       color: "bg-gradient-to-br from-blue-900 to-cyan-900"
//     },
//     {
//       id: 4,
//       name: "Metallography",
//       model: "Consumables",
//       image: "/images/metallographyconsumables.png",
//       description: "Cutting Blades & Mounting Powders: For sectioning and mounting specimens. \nPolishing Suspensions & Pastes: Used to achieve mirror-like finishes on samples. \nAbrasive Papers & Cloths: For grinding and intermediate polishing stages.",
//       headline: "Metallography Consumables",
//       ctaText: "VIEW ALL",
//       totalSlides: 4,
//       configStatus: "closed",
//       sidebarText: "Discover Metallography Consumables",
//       color: "bg-gradient-to-br from-slate-900 to-blue-950"
//     }
//   ];

//   const [currentDataIndex, setCurrentDataIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState('right');
//   const currentData = dataList[currentDataIndex];
//   const [progressValue, setProgressValue] = useState(0);

//   // Auto-rotation effect with progress bar
//   useEffect(() => {
//     let progressInterval;
//     let rotationTimer;
    
//     if (!isTransitioning) {
//       setProgressValue(0);
      
//       // Increment progress value
//       progressInterval = setInterval(() => {
//         setProgressValue(prev => Math.min(prev + 1, 100));
//       }, 50); // 50ms * 100 = 5000ms (5s)
      
//       // Set up next rotation
//       rotationTimer = setTimeout(() => {
//         setDirection('right');
//         setIsTransitioning(true);
//         clearInterval(progressInterval);
        
//         setTimeout(() => {
//           setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
          
//           setTimeout(() => {
//             setIsTransitioning(false);
//           }, 300);
//         }, 300);
//       }, 5000);
//     }
    
//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(rotationTimer);
//     };
//   }, [isTransitioning, dataList.length]);

//   const nextModel = () => {
//     setDirection('right');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 300);
//     }, 300);
//   };

//   const prevModel = () => {
//     setDirection('left');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 300);
//     }, 300);
//   };

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-blue-50 min-h-screen flex justify-center items-center sm:p-6 md:p-8 overflow-hidden">
//       {/* Enhanced hero container */}
//       <motion.div 
//         ref={sectionRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="w-full max-w-5xl mx-auto relative"
//       >
//         {/* Main showcase card with enhanced design */}
//         <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-3xl shadow-2xl">
//           {/* Dynamic background with gradient based on current item */}
//           <motion.div 
//             key={`bg-${currentDataIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`absolute inset-0 ${currentData.color}`}
//           />
          
//           {/* Enhanced background elements */}
//           <div className="absolute inset-0 z-0 overflow-hidden">
//             {/* Improved modern floating blobs with animation */}
//             <motion.div 
//               initial={{ scale: 0.8, opacity: 0.1 }}
//               animate={{ 
//                 scale: [0.8, 1.2, 0.8],
//                 opacity: [0.1, 0.25, 0.1],
//                 x: [-20, 30, -20],
//                 y: [-30, 10, -30]
//               }}
//               transition={{ 
//                 repeat: Infinity, 
//                 duration: 18,
//                 ease: "easeInOut"
//               }}
//               className="absolute -top-40 -left-40 w-96 h-96 bg-white/30 rounded-full filter blur-3xl"
//             />
            
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0.15 }}
//               animate={{ 
//                 scale: [0.9, 1.3, 0.9],
//                 opacity: [0.15, 0.3, 0.15],
//                 x: [30, -20, 30],
//                 y: [20, -40, 20]
//               }}
//               transition={{ 
//                 repeat: Infinity, 
//                 duration: 15,
//                 ease: "easeInOut",
//                 delay: 2
//               }}
//               className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/20 rounded-full filter blur-3xl"
//             />
            
//             {/* Modern gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
            
//             {/* Decorative pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
//                     <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" fill="url(#grid)" />
//               </svg>
//             </div>
//           </div>
          
//           {/* Content container with improved layout and fixed heights */}
//           <div className="relative z-10 h-full flex flex-col p-8 md:p-12 text-white">
//             {/* Top section with brand information - fixed height */}
//             <div className="flex justify-between items-start h-[15%]">
//               <AnimatePresence mode="wait">
//                 <motion.div 
//                   key={`header-${currentDataIndex}`}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <h3 className="text-blue-200 text-sm font-medium tracking-widest uppercase mb-1">Premium Equipment</h3>
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//                     {currentData.name}
//                   </h1>
//                   <h2 className="text-xl sm:text-2xl text-blue-200 mt-2 font-light">
//                     {currentData.model}
//                   </h2>
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Enhanced navigation controls */}
//               <div className="space-y-3">
//                 <motion.button 
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={prevModel} 
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
//                   aria-label="Previous model"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </motion.button>
                
//                 <motion.button 
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={nextModel} 
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
//                   aria-label="Next model"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </motion.button>
//               </div>
//             </div>
            
//             {/* Center section with product showcase - fixed height container */}
//             <div className="h-[55%] flex items-center justify-center">
//               <AnimatePresence mode="wait">
//                 <motion.div 
//                   key={`image-${currentDataIndex}`}
//                   initial={{ 
//                     opacity: 0, 
//                     scale: 0.8,
//                     rotateY: direction === 'right' ? -15 : 15
//                   }}
//                   animate={{ 
//                     opacity: 1, 
//                     scale: 1,
//                     rotateY: 0
//                   }}
//                   exit={{ 
//                     opacity: 0, 
//                     scale: 0.8,
//                     rotateY: direction === 'right' ? 15 : -15
//                   }}
//                   transition={{ 
//                     duration: 0.5, 
//                     ease: [0.22, 1, 0.36, 1] 
//                   }}
//                   className="w-full flex items-center justify-center"
//                 >
//                   {/* Enhanced product image with uniform container size */}
//                   <div className="relative h-[300px] flex items-center justify-center">
//                     {/* Subtle glow effect behind product */}
//                     <div className="absolute inset-0 -m-6 rounded-full bg-white/20 filter blur-2xl"></div>
                    
//                     <motion.img 
//                       src={`${currentData.image}`}
//                       alt={`${currentData.model}`} 
//                       className="max-w-full max-h-[300px] object-contain"
//                       style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.25))" }}
//                       whileHover={{ 
//                         scale: 1.05,
//                         rotateZ: 2,
//                         transition: { duration: 0.3 }
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
            
//             {/* Bottom section with fixed height for consistent CTA positioning */}
//             <div className="h-[30%] flex flex-col justify-between">
//               {/* Feature tags */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 <AnimatePresence mode="wait">
//                   <motion.div 
//                     key={`features-${currentDataIndex}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-wrap gap-2"
//                   >
//                     {currentData.description.split(' ').slice(0, 5).map((feature, idx) => (
//                       <motion.span 
//                         key={idx}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: idx * 0.1 }}
//                         className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium"
//                       >
//                         {feature}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
              
//               {/* Enhanced bottom controls with fixed position call-to-action */}
//               <div className="flex justify-between items-center">
//                 {/* Call to action button with enhanced design - now in fixed position */}
//                 <AnimatePresence mode="wait">
//                   <motion.div 
//                     key={`cta-${currentDataIndex}`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <motion.button 
//                       whileHover={{ 
//                         scale: 1.05, 
//                         backgroundColor: "rgba(255,255,255,0.25)"
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-8 py-2 rounded-full bg-white/15 text-white backdrop-blur-sm uppercase text-sm tracking-widest font-medium transition-all duration-300 shadow-lg border border-white/20 flex items-center gap-2"
//                     >
//                       {currentData.ctaText}
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </motion.button>
//                   </motion.div>
//                 </AnimatePresence>
                
//                 {/* Enhanced dot indicators */}
//                 <div className="flex space-x-2">
//                   {dataList.map((item, index) => (
//                     <motion.button 
//                       key={item.id} 
//                       onClick={() => {
//                         setDirection(index > currentDataIndex ? 'right' : 'left');
//                         setIsTransitioning(true);
                        
//                         setTimeout(() => {
//                           setCurrentDataIndex(index);
                          
//                           setTimeout(() => {
//                             setIsTransitioning(false);
//                           }, 300);
//                         }, 300);
//                       }}
//                       className="relative"
//                       aria-label={`View ${item.name}`}
//                     >
//                       <motion.div 
//                         className={`w-3 h-3 rounded-full ${
//                           currentDataIndex === index 
//                             ? 'bg-white' 
//                             : 'bg-white/30'
//                         }`}
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                       />
                      
//                       {currentDataIndex === index && (
//                         <motion.div 
//                           layoutId="activeDot"
//                           className="absolute -inset-1 rounded-full border-2 border-white"
//                           transition={{ duration: 0.3, type: "spring" }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Decorative elements outside the main card */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-600/30 rounded-full filter blur-3xl z-0"
//         />
        
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-600/30 rounded-full filter blur-3xl z-0"
//         />
//       </motion.div>
//     </div>
//   );
// }





// // 'use client';

// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion, AnimatePresence, useInView } from 'framer-motion';

// // export default function HeroSection() {
// //   const sectionRef = useRef(null);
// //   const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

// //   const dataList = [
// //     {
// //       id: 1,
// //       name: "Automatic Cutting Machine",
// //       model: "Auto Cut",
// //       image: "/images/autopol2.png",
// //       description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking, Smart cutting feed.",
// //       headline: "Automatic Cutting Machine- Auto Cut",
// //       ctaText: "Explore Features",
// //       totalSlides: 6,
// //       configStatus: "open",
// //       sidebarText: "Discover Auto Cut",
// //       color: "bg-gradient-to-br from-slate-800 to-blue-900"
// //     },
// //     {
// //       id: 2,
// //       name: "Image Analysis System",
// //       model: "Image Analysers",
// //       image: "/images/imageanalyser.png",
// //       description: "Grain Analysis (Intercept & Planimetry Methods): Measures average grain size and distribution. \nGrain Size Distribution & Phase Analysis: Assesses grain variance and identifies material phases. \nNodularity, Graphite, and Flake Separation: Analyzes graphite content and nodularity in cast irons. \nPoint Counter: Used for quantitative image analysis based on point counting methods.",
// //       headline: "Image Analysis System",
// //       ctaText: "VIEW ALL",
// //       totalSlides: 5,
// //       configStatus: "closed",
// //       sidebarText: "Discover Image Analysers",
// //       color: "bg-gradient-to-br from-indigo-800 to-violet-900"
// //     },
// //     {
// //       id: 3,
// //       name: "Electro Hydraulic Press",
// //       model: "Automount EH",
// //       image: "/images/electrohydraulic.png",
// //       description: "It prepares samples by encapsulating them in thermosetting resin under controlled heat and pressure. Dual-chamber design allows simultaneous processing of two samples. Equipped with a touchscreen interface for setting pressure, time, and temperature parameters.",
// //       headline: "Electro Hydraulic Press - Automount EH",
// //       ctaText: "EXPLORE FEATURES",
// //       totalSlides: 7,
// //       configStatus: "open",
// //       sidebarText: "Discover Automount EH",
// //       color: "bg-gradient-to-br from-blue-900 to-cyan-900"
// //     },
// //     {
// //       id: 4,
// //       name: "Metallography",
// //       model: "Consumables",
// //       image: "/images/metallographyconsumables.png",
// //       description: "Cutting Blades & Mounting Powders: For sectioning and mounting specimens. \nPolishing Suspensions & Pastes: Used to achieve mirror-like finishes on samples. \nAbrasive Papers & Cloths: For grinding and intermediate polishing stages.",
// //       headline: "Metallography Consumables",
// //       ctaText: "VIEW ALL",
// //       totalSlides: 4,
// //       configStatus: "closed",
// //       sidebarText: "Discover Metallography Consumables",
// //       color: "bg-gradient-to-br from-slate-900 to-blue-950"
// //     }
// //   ];

// //   const [currentDataIndex, setCurrentDataIndex] = useState(0);
// //   const [currentSlide, setCurrentSlide] = useState(1);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [direction, setDirection] = useState('right');
// //   const currentData = dataList[currentDataIndex];
// //   const [progressValue, setProgressValue] = useState(0);

// //   // Auto-rotation effect with progress bar
// //   useEffect(() => {
// //     let progressInterval;
// //     let rotationTimer;
    
// //     if (!isTransitioning) {
// //       setProgressValue(0);
      
// //       // Increment progress value
// //       progressInterval = setInterval(() => {
// //         setProgressValue(prev => Math.min(prev + 1, 100));
// //       }, 50); // 50ms * 100 = 5000ms (5s)
      
// //       // Set up next rotation
// //       rotationTimer = setTimeout(() => {
// //         setDirection('right');
// //         setIsTransitioning(true);
// //         clearInterval(progressInterval);
        
// //         setTimeout(() => {
// //           setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
// //           setCurrentSlide(1);
          
// //           setTimeout(() => {
// //             setIsTransitioning(false);
// //           }, 300);
// //         }, 300);
// //       }, 5000);
// //     }
    
// //     return () => {
// //       clearInterval(progressInterval);
// //       clearTimeout(rotationTimer);
// //     };
// //   }, [isTransitioning, dataList.length]);

// //   const nextSlide = () => {
// //     setCurrentSlide(current => 
// //       current === currentData.totalSlides ? 1 : current + 1
// //     );
// //   };

// //   const prevSlide = () => {
// //     setCurrentSlide(current => 
// //       current === 1 ? currentData.totalSlides : current - 1
// //     );
// //   };

// //   const nextModel = () => {
// //     setDirection('right');
// //     setIsTransitioning(true);
    
// //     setTimeout(() => {
// //       setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
// //       setCurrentSlide(1);
      
// //       setTimeout(() => {
// //         setIsTransitioning(false);
// //       }, 300);
// //     }, 300);
// //   };

// //   const prevModel = () => {
// //     setDirection('left');
// //     setIsTransitioning(true);
    
// //     setTimeout(() => {
// //       setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
// //       setCurrentSlide(1);
      
// //       setTimeout(() => {
// //         setIsTransitioning(false);
// //       }, 300);
// //     }, 300);
// //   };

// //   // Format description to handle line breaks
// //   const formatDescription = (text) => {
// //     return text.split('\n').map((line, index) => (
// //       <React.Fragment key={index}>
// //         {line}
// //         {index < text.split('\n').length - 1 && <br />}
// //       </React.Fragment>
// //     ));
// //   };

// //   return (
// //     <div className="bg-slate-100 min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 overflow-hidden">
// //       {/* Main container with glassmorphism effect */}
// //       <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row relative gap-6">
// //         {/* Left section with modern design */}
// //         <motion.section
// //           ref={sectionRef}
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
// //           className="relative w-full lg:w-2/3 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-8 lg:p-10 flex flex-col rounded-3xl shadow-xl"
// //         >
// //           {/* Modern background elements */}
// //           <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl">
// //             {/* Glassmorphism base */}
// //             <div className="absolute inset-0 bg-white/40 backdrop-blur-md"></div>
            
// //             {/* Modern floating blobs */}
// //             <motion.div 
// //               initial={{ scale: 0.8, opacity: 0.3 }}
// //               animate={{ 
// //                 scale: [0.8, 1.2, 0.8],
// //                 opacity: [0.3, 0.6, 0.3],
// //                 x: [-20, 30, -20],
// //                 y: [-30, 10, -30]
// //               }}
// //               transition={{ 
// //                 repeat: Infinity, 
// //                 duration: 18,
// //                 ease: "easeInOut"
// //               }}
// //               className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/30 rounded-full filter blur-3xl"
// //             />
// //             <motion.div 
// //               initial={{ scale: 0.9, opacity: 0.2 }}
// //               animate={{ 
// //                 scale: [0.9, 1.1, 0.9],
// //                 opacity: [0.2, 0.5, 0.2],
// //                 x: [30, -20, 30],
// //                 y: [20, -40, 20]
// //               }}
// //               transition={{ 
// //                 repeat: Infinity, 
// //                 duration: 15,
// //                 ease: "easeInOut",
// //                 delay: 2
// //               }}
// //               className="absolute -bottom-40 -right-20 w-80 h-80 bg-indigo-300/30 rounded-full filter blur-3xl"
// //             />
            
// //             {/* Subtle mesh gradient */}
// //             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-indigo-50/30 mix-blend-overlay"></div>
// //           </div>

// //           {/* Structured content with modern positioning */}
// //           <div className="w-full h-full flex flex-col relative overflow-hidden z-10">
// //             {/* Top section with model name and navigation */}
// //             <div className="flex justify-between items-start mb-4 h-[10%]">
// //               <AnimatePresence mode="wait">
// //                 <motion.div 
// //                   key={currentDataIndex}
// //                   initial={{ 
// //                     opacity: 0, 
// //                     x: direction === 'right' ? 50 : -50 
// //                   }}
// //                   animate={{ 
// //                     opacity: 1, 
// //                     x: 0 
// //                   }}
// //                   exit={{ 
// //                     opacity: 0, 
// //                     x: direction === 'right' ? -50 : 50 
// //                   }}
// //                   transition={{ 
// //                     duration: 0.5, 
// //                     ease: [0.22, 1, 0.36, 1] 
// //                   }}
// //                   className="text-left"
// //                 >
// //                   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-blue-950">
// //                     {currentData.name}
// //                   </h1>
// //                   <h2 className="text-lg sm:text-xl tracking-wide text-blue-600 opacity-90 font-medium">
// //                     {currentData.model}
// //                   </h2>
// //                 </motion.div>
// //               </AnimatePresence>
              
// //               {/* Modern model navigation buttons */}
// //               <div className="flex space-x-3 z-10">
// //                 <motion.button 
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={prevModel} 
// //                   className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center hover:bg-blue-200 transition-all duration-300 shadow-md"
// //                   aria-label="Previous model"
// //                 >
// //                   <span className="text-lg">←</span>
// //                 </motion.button>
// //                 <motion.button 
// //                   whileHover={{ scale: 1.1 }}
// //                   whileTap={{ scale: 0.95 }}
// //                   onClick={nextModel} 
// //                   className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-md"
// //                   aria-label="Next model"
// //                 >
// //                   <span className="text-lg">→</span>
// //                 </motion.button>
// //               </div>
// //             </div>

// //             {/* Middle section with image - with modern animation */}
// //             <div className="h-[65%] flex items-center justify-center">
// //               <AnimatePresence mode="wait">
// //                 <motion.div 
// //                   key={currentDataIndex}
// //                   initial={{ 
// //                     opacity: 0, 
// //                     scale: 0.8,
// //                     rotateY: direction === 'right' ? -15 : 15
// //                   }}
// //                   animate={{ 
// //                     opacity: 1, 
// //                     scale: 1,
// //                     rotateY: 0
// //                   }}
// //                   exit={{ 
// //                     opacity: 0, 
// //                     scale: 0.8,
// //                     rotateY: direction === 'right' ? 15 : -15
// //                   }}
// //                   transition={{ 
// //                     duration: 0.5, 
// //                     ease: [0.22, 1, 0.36, 1] 
// //                   }}
// //                   className="w-full h-full flex items-center justify-center"
// //                 >
// //                   <motion.img 
// //                     src={`${currentData.image}`}
// //                     alt={`${currentData.model}`} 
// //                     className="max-w-[85%] max-h-[90%] object-contain"
// //                     style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.15))" }}
// //                     whileHover={{ 
// //                       scale: 1.02,
// //                       transition: { duration: 0.2 }
// //                     }}
// //                   />
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>

// //             {/* Bottom section with modern CTA and indicators */}
// //             <div className="h-[25%] flex flex-col justify-end">
// //               {/* Modern Call to Action button */}
// //               <AnimatePresence mode="wait">
// //                 <motion.div 
// //                   key={currentDataIndex}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                   transition={{ 
// //                     duration: 0.5, 
// //                     ease: [0.22, 1, 0.36, 1],
// //                     delay: 0.2
// //                   }}
// //                   className="mb-8 flex justify-center"
// //                 >
// //                   <motion.button 
// //                     whileHover={{ 
// //                       scale: 1.05, 
// //                       backgroundColor: "rgb(29, 78, 216)",
// //                       color: "white"
// //                     }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className="px-8 py-3 rounded-full bg-blue-100 text-blue-900 uppercase text-sm tracking-widest font-medium transition-all duration-300 shadow-lg shadow-blue-200/50"
// //                   >
// //                     {currentData.ctaText}
// //                   </motion.button>
// //                 </motion.div>
// //               </AnimatePresence>

// //               {/* Modern indicators for models */}
// //               <div className="flex justify-center space-x-4 z-10 mb-2">
// //                 {dataList.map((item, index) => (
// //                   <motion.button 
// //                     key={item.id} 
// //                     onClick={() => {
// //                       setDirection(index > currentDataIndex ? 'right' : 'left');
// //                       setIsTransitioning(true);
                      
// //                       setTimeout(() => {
// //                         setCurrentDataIndex(index);
// //                         setCurrentSlide(1);
                        
// //                         setTimeout(() => {
// //                           setIsTransitioning(false);
// //                         }, 300);
// //                       }, 300);
// //                     }}
// //                     className={`relative w-12 h-2 rounded-full transition-all duration-300 overflow-hidden ${
// //                       currentDataIndex === index 
// //                         ? 'bg-blue-100' 
// //                         : 'bg-slate-200'
// //                     }`}
// //                     whileHover={{
// //                       scale: 1.1,
// //                       backgroundColor: currentDataIndex === index ? "rgb(219, 234, 254)" : "rgb(226, 232, 240)"
// //                     }}
// //                     whileTap={{ scale: 0.95 }}
// //                     aria-label={`View ${item.name}`}
// //                   >
// //                     {currentDataIndex === index && (
// //                       <motion.div 
// //                         className="absolute left-0 top-0 bottom-0 bg-blue-500 rounded-full"
// //                         initial={{ width: 0 }}
// //                         animate={{ width: "100%" }}
// //                         transition={{ duration: 5 }}
// //                       />
// //                     )}
// //                   </motion.button>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         </motion.section>
        
// //         {/* Right section with modern design */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
// //           className={`w-full lg:w-1/3 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] text-white p-6 sm:p-8 lg:p-10 flex flex-col ${currentData.color} relative overflow-hidden rounded-3xl shadow-xl`}
// //         >
// //           {/* Modern backdrop pattern */}
// //           <div className="absolute inset-0 opacity-20">
// //             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
// //               <defs>
// //                 <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
// //                   <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
// //                 </pattern>
// //               </defs>
// //               <rect width="100%" height="100%" fill="url(#grid)" />
// //             </svg>
// //           </div>
          
// //           {/* Subtle radial gradient */}
// //           <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/5 mix-blend-overlay"></div>
          
// //           {/* Top navigation with modern design */}
// //           <div className="flex justify-between text-xs mb-6 relative z-10 h-[5%]">
// //             <motion.span 
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5, delay: 0.4 }}
// //               className="px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/10 text-white/80 font-medium"
// //             >
// //               0{currentSlide}/0{currentData.totalSlides}
// //             </motion.span>
// //           </div>

// //                       {/* Main content with modern animation */}
// //           <AnimatePresence mode="wait">
// //             <motion.div 
// //               key={`${currentDataIndex}-${currentSlide}`}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0, y: -20 }}
// //               transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
// //               className="h-[75%] flex flex-col relative z-10 overflow-hidden"
// //             >
// //               <h3 className="uppercase text-xl sm:text-2xl lg:text-3xl tracking-wide font-bold mb-6 leading-tight">
// //                 <span className="text-blue-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-indigo-200">
// //                   {currentData.headline.split(' ').slice(0, 2).join(' ')}
// //                 </span>
// //                 <br />
// //                 {currentData.headline.split(' ').slice(2).join(' ')}
// //               </h3>
              
// //               {/* Modern scrollable content area */}
// //               <div className="flex-1 overflow-y-auto text-sm sm:text-base text-slate-200 pr-4 custom-scrollbar">
// //                 <motion.div
// //                   key={`content-${currentDataIndex}-${currentSlide}`}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -10 }}
// //                   transition={{ duration: 0.3 }}
// //                 >
// //                   <div className="flex items-center justify-between mb-4">
// //                     <span className="text-lg font-medium text-blue-200">Slide {currentSlide}</span>
// //                     <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Feature {currentSlide} of {currentData.totalSlides}</span>
// //                   </div>
// //                   {formatDescription(currentData.description)}
// //                 </motion.div>
// //               </div>
// //             </motion.div>
// //           </AnimatePresence>

// //           {/* Lower navigation with modern buttons */}
// //           <div className="h-[20%] flex flex-col justify-end relative z-10">
// //             <div className="flex justify-center space-x-12 mb-6">
          
// //             </div>
            
// //             <AnimatePresence mode="wait">
// //               <motion.div 
// //                 key={currentDataIndex}
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 transition={{ duration: 0.3 }}
// //                 className="text-center"
// //               >
// //                 <p className="uppercase text-slate-300 tracking-wider font-medium text-sm">
// //                   Configurator 
// //                   <motion.span 
// //                     initial={{ opacity: 0.6 }}
// //                     animate={{ opacity: [0.6, 1, 0.6] }}
// //                     transition={{ repeat: Infinity, duration: 2 }}
// //                     className="ml-2 text-blue-300"
// //                   >
// //                     {currentData.configStatus}
// //                   </motion.span>
// //                 </p>
// //                 <p className="mt-2 text-xs text-slate-400">
// //                   0{currentSlide}/0{currentData.totalSlides}
// //                 </p>
// //               </motion.div>
// //             </AnimatePresence>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';

// export default function HeroSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

//   const dataList = [
//     {
//       id: 1,
//       name: "Automatic Cutting Machine",
//       model: "Auto Cut",
//       image: "/images/autopol2.png",
//       description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking, Smart cutting feed.",
//       headline: "Automatic Cutting Machine- Auto Cut",
//       ctaText: "Explore Features",
//       totalSlides: 6,
//       configStatus: "open",
//       sidebarText: "Discover Auto Cut",
//       color: "bg-gradient-to-br from-slate-800 to-blue-900"
//     },
//     {
//       id: 2,
//       name: "Image Analysis System",
//       model: "Image Analysers",
//       image: "/images/imageanalyser.png",
//       description: "Grain Analysis (Intercept & Planimetry Methods): Measures average grain size and distribution. \nGrain Size Distribution & Phase Analysis: Assesses grain variance and identifies material phases. \nNodularity, Graphite, and Flake Separation: Analyzes graphite content and nodularity in cast irons. \nPoint Counter: Used for quantitative image analysis based on point counting methods.",
//       headline: "Image Analysis System",
//       ctaText: "VIEW ALL",
//       totalSlides: 5,
//       configStatus: "closed",
//       sidebarText: "Discover Image Analysers",
//       color: "bg-gradient-to-br from-indigo-800 to-violet-900"
//     },
//     {
//       id: 3,
//       name: "Electro Hydraulic Press",
//       model: "Automount EH",
//       image: "/images/electrohydraulic.png",
//       description: "It prepares samples by encapsulating them in thermosetting resin under controlled heat and pressure. Dual-chamber design allows simultaneous processing of two samples. Equipped with a touchscreen interface for setting pressure, time, and temperature parameters.",
//       headline: "Electro Hydraulic Press - Automount EH",
//       ctaText: "EXPLORE FEATURES",
//       totalSlides: 7,
//       configStatus: "open",
//       sidebarText: "Discover Automount EH",
//       color: "bg-gradient-to-br from-blue-900 to-cyan-900"
//     },
//     {
//       id: 4,
//       name: "Metallography",
//       model: "Consumables",
//       image: "/images/metallographyconsumables.png",
//       description: "Cutting Blades & Mounting Powders: For sectioning and mounting specimens. \nPolishing Suspensions & Pastes: Used to achieve mirror-like finishes on samples. \nAbrasive Papers & Cloths: For grinding and intermediate polishing stages.",
//       headline: "Metallography Consumables",
//       ctaText: "VIEW ALL",
//       totalSlides: 4,
//       configStatus: "closed",
//       sidebarText: "Discover Metallography Consumables",
//       color: "bg-gradient-to-br from-slate-900 to-blue-950"
//     }
//   ];

//   const [currentDataIndex, setCurrentDataIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState('right');
//   const currentData = dataList[currentDataIndex];
//   const [progressValue, setProgressValue] = useState(0);

//   // Auto-rotation effect with progress bar
//   useEffect(() => {
//     let progressInterval;
//     let rotationTimer;
    
//     if (!isTransitioning) {
//       setProgressValue(0);
      
//       // Increment progress value
//       progressInterval = setInterval(() => {
//         setProgressValue(prev => Math.min(prev + 1, 100));
//       }, 50); // 50ms * 100 = 5000ms (5s)
      
//       // Set up next rotation
//       rotationTimer = setTimeout(() => {
//         setDirection('right');
//         setIsTransitioning(true);
//         clearInterval(progressInterval);
        
//         setTimeout(() => {
//           setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
          
//           setTimeout(() => {
//             setIsTransitioning(false);
//           }, 300);
//         }, 300);
//       }, 5000);
//     }
    
//     return () => {
//       clearInterval(progressInterval);
//       clearTimeout(rotationTimer);
//     };
//   }, [isTransitioning, dataList.length]);

//   const nextModel = () => {
//     setDirection('right');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 300);
//     }, 300);
//   };

//   const prevModel = () => {
//     setDirection('left');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 300);
//     }, 300);
//   };

//   return (
//     <div className="bg-gradient-to-b from-slate-50 to-blue-50 min-h-screen flex justify-center items-center p-4 sm:p-6 md:p-8 overflow-hidden">
//       {/* Enhanced hero container */}
//       <motion.div 
//         ref={sectionRef}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//         className="w-full max-w-5xl mx-auto relative"
//       >
//         {/* Main showcase card with enhanced design */}
//         <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-3xl shadow-2xl">
//           {/* Dynamic background with gradient based on current item */}
//           <motion.div 
//             key={`bg-${currentDataIndex}`}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6 }}
//             className={`absolute inset-0 ${currentData.color}`}
//           />
          
//           {/* Enhanced background elements */}
//           <div className="absolute inset-0 z-0 overflow-hidden">
//             {/* Improved modern floating blobs with animation */}
//             <motion.div 
//               initial={{ scale: 0.8, opacity: 0.1 }}
//               animate={{ 
//                 scale: [0.8, 1.2, 0.8],
//                 opacity: [0.1, 0.25, 0.1],
//                 x: [-20, 30, -20],
//                 y: [-30, 10, -30]
//               }}
//               transition={{ 
//                 repeat: Infinity, 
//                 duration: 18,
//                 ease: "easeInOut"
//               }}
//               className="absolute -top-40 -left-40 w-96 h-96 bg-white/30 rounded-full filter blur-3xl"
//             />
            
//             <motion.div 
//               initial={{ scale: 0.9, opacity: 0.15 }}
//               animate={{ 
//                 scale: [0.9, 1.3, 0.9],
//                 opacity: [0.15, 0.3, 0.15],
//                 x: [30, -20, 30],
//                 y: [20, -40, 20]
//               }}
//               transition={{ 
//                 repeat: Infinity, 
//                 duration: 15,
//                 ease: "easeInOut",
//                 delay: 2
//               }}
//               className="absolute -bottom-40 -right-20 w-96 h-96 bg-white/20 rounded-full filter blur-3xl"
//             />
            
//             {/* Modern gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
            
//             {/* Decorative pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                   <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
//                     <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
//                   </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" fill="url(#grid)" />
//               </svg>
//             </div>
//           </div>
          
//           {/* Content container with improved layout */}
//           <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
//             {/* Top section with brand information */}
//             <div className="flex justify-between items-start">
//               <AnimatePresence mode="wait">
//                 <motion.div 
//                   key={`header-${currentDataIndex}`}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <h3 className="text-blue-200 text-sm font-medium tracking-widest uppercase mb-1">Premium Equipment</h3>
//                   <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
//                     {currentData.name}
//                   </h1>
//                   <h2 className="text-xl sm:text-2xl text-blue-200 mt-2 font-light">
//                     {currentData.model}
//                   </h2>
//                 </motion.div>
//               </AnimatePresence>
              
//               {/* Enhanced navigation controls */}
//               <div className="space-y-3">
//                 <motion.button 
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={prevModel} 
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
//                   aria-label="Previous model"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </motion.button>
                
//                 <motion.button 
//                   whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.25)" }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={nextModel} 
//                   className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg"
//                   aria-label="Next model"
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </motion.button>
//               </div>
//             </div>
            
//             {/* Center section with product showcase - enhanced with animations */}
//             <div className="flex-1 flex items-center justify-center py-6 md:py-8">
//               <AnimatePresence mode="wait">
//                 <motion.div 
//                   key={`image-${currentDataIndex}`}
//                   initial={{ 
//                     opacity: 0, 
//                     scale: 0.8,
//                     rotateY: direction === 'right' ? -15 : 15
//                   }}
//                   animate={{ 
//                     opacity: 1, 
//                     scale: 1,
//                     rotateY: 0
//                   }}
//                   exit={{ 
//                     opacity: 0, 
//                     scale: 0.8,
//                     rotateY: direction === 'right' ? 15 : -15
//                   }}
//                   transition={{ 
//                     duration: 0.5, 
//                     ease: [0.22, 1, 0.36, 1] 
//                   }}
//                   className="w-full h-full flex items-center justify-center relative"
//                 >
//                   {/* Enhanced product image with glow effect */}
//                   <div className="relative">
//                     {/* Subtle glow effect behind product */}
//                     <div className="absolute inset-0 -m-6 rounded-full bg-white/20 filter blur-2xl"></div>
                    
//                     <motion.img 
//                       src={`${currentData.image}`}
//                       alt={`${currentData.model}`} 
//                       className="max-w-full max-h-[350px] object-contain"
//                       style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.25))" }}
//                       whileHover={{ 
//                         scale: 1.05,
//                         rotateZ: 2,
//                         transition: { duration: 0.3 }
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
            
//             {/* Bottom section with enhanced CTA and indicators */}
//             <div className="flex flex-col space-y-6">
//               {/* Feature tags */}
//               <div className="flex flex-wrap gap-2">
//                 <AnimatePresence mode="wait">
//                   <motion.div 
//                     key={`features-${currentDataIndex}`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-wrap "
//                   >
//                     {currentData.description.split(' ').slice(0, 5).map((feature, idx) => (
//                       <motion.span 
//                         key={idx}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: idx * 0.1 }}
//                         className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium"
//                       >
//                         {feature}
//                       </motion.span>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
              
//               {/* Enhanced bottom controls with call-to-action */}
//               <div className="flex justify-between items-center">
//                 {/* Call to action button with enhanced design */}
//                 <AnimatePresence mode="wait">
//                   <motion.div 
//                     key={`cta-${currentDataIndex}`}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -20 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <motion.button 
//                       whileHover={{ 
//                         scale: 1.05, 
//                         backgroundColor: "rgba(255,255,255,0.25)"
//                       }}
//                       whileTap={{ scale: 0.98 }}
//                       className="px-8 py-2 rounded-full bg-white/15 text-white backdrop-blur-sm uppercase text-sm tracking-widest font-medium transition-all duration-300 shadow-lg border border-white/20 flex items-center gap-2"
//                     >
//                       {currentData.ctaText}
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </motion.button>
//                   </motion.div>
//                 </AnimatePresence>
                
//                 {/* Enhanced dot indicators */}
//                 <div className="flex space-x-2">
//                   {dataList.map((item, index) => (
//                     <motion.button 
//                       key={item.id} 
//                       onClick={() => {
//                         setDirection(index > currentDataIndex ? 'right' : 'left');
//                         setIsTransitioning(true);
                        
//                         setTimeout(() => {
//                           setCurrentDataIndex(index);
                          
//                           setTimeout(() => {
//                             setIsTransitioning(false);
//                           }, 300);
//                         }, 300);
//                       }}
//                       className="relative"
//                       aria-label={`View ${item.name}`}
//                     >
//                       <motion.div 
//                         className={`w-3 h-3 rounded-full ${
//                           currentDataIndex === index 
//                             ? 'bg-white' 
//                             : 'bg-white/30'
//                         }`}
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                       />
                      
//                       {currentDataIndex === index && (
//                         <motion.div 
//                           layoutId="activeDot"
//                           className="absolute -inset-1 rounded-full border-2 border-white"
//                           transition={{ duration: 0.3, type: "spring" }}
//                         />
//                       )}
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Decorative elements outside the main card */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-600/30 rounded-full filter blur-3xl z-0"
//         />
        
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="absolute -top-16 -right-16 w-32 h-32 bg-indigo-600/30 rounded-full filter blur-3xl z-0"
//         />
//       </motion.div>
//     </div>
//   );
// }