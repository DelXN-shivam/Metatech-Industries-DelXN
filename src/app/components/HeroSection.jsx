'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HeroSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const dataList = [
    {
      id: 1,
      name: "Automatic Cutting Machine",
      model: "Auto Cut",
      image: "/images/autopol2.png",
      description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking, Smart cutting feed.",
      headline: "Automatic Cutting Machine- Auto Cut",
      ctaText: "Explore Features",
      totalSlides: 6,
      configStatus: "open",
      sidebarText: "Discover Auto Cut",
      color: "bg-gradient-to-br from-slate-500 to-slate-700"
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
      sidebarText: "Discover Image Analysers",
      color: "bg-gradient-to-br from-slate-500 to-slate-700"
    },
    {
      id: 3,
      name: "Electro Hydraulic Press",
      model: "Automount EH",
      image: "/images/electrohydraulic.png",
      description: "It prepares samples by encapsulating them in thermosetting resin under controlled heat and pressure. Dual-chamber design allows simultaneous processing of two samples. Equipped with a touchscreen interface for setting pressure, time, and temperature parameters.",
      headline: "Electro Hydraulic Press - Automount EH",
      ctaText: "EXPLORE FEATURES",
      totalSlides: 7,
      configStatus: "open",
      sidebarText: "Discover Automount EH",
      color: "bg-gradient-to-br from-slate-600 to-slate-800"
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
      sidebarText: "Discover Metallography Consumables",
      color: "bg-gradient-to-br from-slate-700 to-slate-900"
    }
  ];

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
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
          setCurrentSlide(1);
          
          setTimeout(() => {
            setIsTransitioning(false);
          }, 500);
        }, 500);
      }, 5000);
    }
    
    return () => {
      clearInterval(progressInterval);
      clearTimeout(rotationTimer);
    };
  }, [isTransitioning, dataList.length]);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === currentData.totalSlides ? 1 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 1 ? currentData.totalSlides : current - 1
    );
  };

  const nextModel = () => {
    setDirection('right');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
      setCurrentSlide(1);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  const prevModel = () => {
    setDirection('left');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
      setCurrentSlide(1);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  // Format description to handle line breaks
  const formatDescription = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="bg-slate-50  flex justify-center p-2 sm:p-4 md:p-6">
      {/* Main container with fixed height approach for better consistent scaling */}
      <div className="w-full px-16 mx-auto  flex flex-col lg:flex-row relative gap-4">
        {/* Left section with consistent height approach */}
        <section
          ref={sectionRef}
          className="relative w-full lg:w-2/3 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-[#e6f3fa] p-4 sm:p-6 lg:p-8 flex flex-col rounded-2xl shadow-xl"
        >
          {/* Premium background elements */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
            {/* Subtle noise texture */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbXBvc2l0ZSBpZD0ibm9pc2UiIG9wZXJhdG9yPSJhdG9wIiB4PSIwJSIgeT0iMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmVDb21wb3NpdGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] opacity-5"></div>

            {/* Dynamic floating blobs with better positioning */}
            <div className="absolute -top-20 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#0f7db7]/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
            <div className="absolute -bottom-20 -right-20 w-64 sm:w-80 h-64 sm:h-80 bg-slate-200 rounded-full filter blur-3xl opacity-20 animate-float-medium"></div>

            {/* Geometric grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>
          </div>

          {/* Structure the content with fixed positions */}
          <div className="w-full h-full flex flex-col relative overflow-hidden z-10">
            {/* Top section with model name and navigation */}
            <div className="flex justify-between items-start mb-2 h-[10%]">
              <div className={`text-left transition-all duration-500 ${
                isTransitioning 
                  ? `transform ${direction === 'right' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}` 
                  : 'transform translate-x-0 opacity-100'
              }`}>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-blue-900">{currentData.name}</h1>
                <h2 className="text-lg sm:text-xl tracking-wide text-blue-800 opacity-80">{currentData.model}</h2>
              </div>
              
              {/* Model navigation buttons */}
              <div className="flex space-x-3 z-10">
                <button 
                  onClick={prevModel} 
                  className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-blue-800 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-white/50 transition-all duration-300 shadow-sm"
                  aria-label="Previous model"
                >
                  <span className="text-lg font-medium">←</span>
                </button>
                <button 
                  onClick={nextModel} 
                  className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm text-blue-800 flex items-center justify-center opacity-70 hover:opacity-100 hover:bg-white/50 transition-all duration-300 shadow-sm"
                  aria-label="Next model"
                >
                  <span className="text-lg font-medium">→</span>
                </button>
              </div>
            </div>

            {/* Middle section with image - fixed height container */}
            <div className="h-[65%] flex items-center justify-center">
              <div className={`w-full h-full flex items-center justify-center transition-all duration-700 ${
                isTransitioning 
                  ? `transform ${direction === 'right' ? 'scale-75 opacity-0' : 'scale-75 opacity-0'}` 
                  : 'transform scale-100 opacity-100'
              }`}>
                <img 
                  src={`${currentData.image}`}
                  alt={`${currentData.model}`} 
                  className="max-w-[85%] max-h-[90%] object-contain drop-shadow-lg"
                />
              </div>
            </div>

            {/* Bottom section with fixed height for CTA and indicators */}
            <div className="h-[25%] flex flex-col justify-end">
              {/* Call to Action button with fixed position */}
              <div className={`mb-6 transition-all duration-500 flex justify-center ${
                isTransitioning 
                  ? `transform ${direction === 'right' ? 'translate-y-10 opacity-0' : 'translate-y-10 opacity-0'}` 
                  : 'transform translate-y-0 opacity-100'
              }`}>
                <button className="border-2 border-blue-900 rounded-full px-6 sm:px-8 md:px-10 py-2 uppercase text-xs sm:text-sm tracking-widest font-medium hover:bg-blue-900 hover:text-white transition-colors duration-300 text-blue-900 shadow-sm">
                  {currentData.ctaText}
                </button>
              </div>

              {/* Circular indicators for models with fixed position */}
              <div className="flex justify-center space-x-3 z-10 mb-2">
                {dataList.map((item, index) => (
                  <button 
                    key={item.id} 
                    onClick={() => {
                      setDirection(index > currentDataIndex ? 'right' : 'left');
                      setIsTransitioning(true);
                      
                      setTimeout(() => {
                        setCurrentDataIndex(index);
                        setCurrentSlide(1);
                        
                        setTimeout(() => {
                          setIsTransitioning(false);
                        }, 500);
                      }, 500);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentDataIndex === index 
                        ? 'bg-blue-600 scale-125 shadow-md shadow-blue-500/50' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`View ${item.name}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Progress bar for left section auto-rotation */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200/30 backdrop-blur-sm rounded-b-2xl">
              <div 
                className="h-full bg-blue-600 rounded-b-2xl"
                style={{ 
                  width: `${progressValue}%`,
                  transition: 'width 50ms linear'
                }}
              ></div>
            </div>
          </div>
        </section>
        
        {/* Right section with matching height to left section */}
        <div className={`w-full lg:w-1/3 h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] text-white p-4 sm:p-6 lg:p-8 flex flex-col transition-all duration-700 ${currentData.color} relative overflow-hidden rounded-2xl shadow-xl`}>
          {/* Overlay pattern for texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent opacity-70 rounded-2xl"></div>
          
          {/* Top navigation with fixed height */}
          <div className="flex justify-between text-xs mb-4 relative z-10 h-[5%]">
            <span className="transition-all duration-500 opacity-70 hover:opacity-100 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
              0{currentSlide}/0{currentData.totalSlides}
            </span>
          </div>

          {/* Main content with fixed proportions */}
          <div className={`h-[75%] flex flex-col transition-all duration-700 relative z-10 overflow-hidden ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-8' 
              : 'opacity-100 transform translate-y-0'
          }`}>
            <h3 className="uppercase text-xl sm:text-2xl lg:text-3xl tracking-wide font-medium mb-4 leading-tight">
              <span className="text-blue-300">{currentData.headline.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {currentData.headline.split(' ').slice(2).join(' ')}
            </h3>
            
            {/* Scrollable content area with consistent height */}
            <div className="flex-1 overflow-y-auto text-sm sm:text-base text-slate-200 pr-2 custom-scrollbar">
              {formatDescription(currentData.description)}
            </div>
          </div>

          {/* Lower navigation - fixed height at bottom */}
          <div className="h-[20%] flex flex-col justify-end relative z-10">
            <div className="flex justify-center space-x-8 sm:space-x-12 mb-4">
              <button 
                className="w-8 h-8 border border-blue-300 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95" 
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                &lt;
              </button>
              <button 
                className="w-8 h-8 border border-blue-300 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95" 
                onClick={nextSlide}
                aria-label="Next slide"
              >
                &gt;
              </button>
            </div>
            <div className={`text-center text-xs transition-all duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <p className="uppercase text-slate-300 tracking-wider font-medium">
                Configurator <span className="text-blue-300">{currentData.configStatus}</span>
              </p>
              <p className="mt-2 text-xs text-slate-400">
                0{currentSlide}/0{currentData.totalSlides}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useInView } from 'framer-motion';

// export default function HeroSection() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

//   const dataList = [
//     {
//       id: 1,
//       name: "Automatic Cutting Machine",
//       model: "Auto Cut",
//       image: "/images/autopol2.png",
//       description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking ,Smart cutting feed.",
//       headline: "Automatic Cutting Machine- Auto Cut",
//       ctaText: "Ecplore Features",
//       totalSlides: 6,
//       configStatus: "open",
//       sidebarText: "Discover Auto Cut",
//       color: "bg-slate-500"
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
//       color: "bg-slate-500"
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
//       color: "bg-slate-600"
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
//       color: "bg-slate-700"
//     }
//   ];

//   const [currentDataIndex, setCurrentDataIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState('right');
//   const currentData = dataList[currentDataIndex];

//   // Auto-rotation effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection('right');
//       setIsTransitioning(true);
      
//       setTimeout(() => {
//         setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
//         setCurrentSlide(1);
        
//         setTimeout(() => {
//           setIsTransitioning(false);
//         }, 500);
//       }, 500);
//     }, 5000); // Change car every 5 seconds
    
//     return () => clearInterval(timer);
//   }, [dataList.length]);

//   const nextSlide = () => {
//     setCurrentSlide(current => 
//       current === currentData.totalSlides ? 1 : current + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(current => 
//       current === 1 ? currentData.totalSlides : current - 1
//     );
//   };

//   const nextModel = () => {
//     setDirection('right');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
//       setCurrentSlide(1);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }, 500);
//   };

//   const prevModel = () => {
//     setDirection('left');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
//       setCurrentSlide(1);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }, 500);
//   };

//   return (
//     <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center">
//       <div className="w-full h-full md:h-[100vh] bg-white flex flex-col md:flex-row shadow-lg relative mx-auto">
//         {/* Left section */}
//         <section
//       ref={sectionRef}
//       className="relative py-24 sm:py-12 lg:py-16 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-[#e6f3fa] rounded-4xl m-4"
//     >
//       {/* Premium background elements */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         {/* Subtle noise texture */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbXBvc2l0ZSBpZD0ibm9pc2UiIG9wZXJhdG9yPSJhdG9wIiB4PSIwJSIgeT0iMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmVDb21wb3NpdGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] opacity-5"></div>

//         {/* Dynamic floating blobs */}
//         <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0f7db7]/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
//         <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-slate-200 rounded-full filter blur-3xl opacity-20 animate-float-medium"></div>

//         {/* Geometric grid pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
//               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" />
//             </pattern>
//             <rect width="100%" height="100%" fill="url(#grid-pattern)" />
//           </svg>
//         </div>
//       </div>

//       <div className="w-full md:w-3/4 h-1/2 md:h-full p-4 md:p-8 flex flex-col relative overflow-hidden justify-center">
         
//          {/* Model navigation buttons */}
//          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex space-x-2 md:space-x-4 z-10">
//            <button 
//              onClick={prevModel} 
//              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300 text-2xl md:text-base"
//            >
//              ←
//            </button>
//            <button 
//              onClick={nextModel} 
//              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300 text-2xl md:text-base"
//            >
//              →
//            </button>
//          </div>

//          {/* Main Content */}
//          <div className={`text-center mb-4 md:mb-8 transition-all duration-500 ${
//            isTransitioning 
//              ? `transform ${direction === 'right' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}` 
//              : 'transform translate-x-0 opacity-100'
//          }`}>
//            <h1 className="text-xl sm:text-2xl md:text-3xl tracking-widest mb-2 text-blue-900">{currentData.name}</h1>
//            <h2 className="text-lg sm:text-xl md:text-xl tracking-widest text-blue-800">{currentData.model}</h2>
//          </div>

//          {/* Data Image */}
//          <div className={`flex-grow flex items-center justify-center transition-all duration-700 ${
//            isTransitioning 
//              ? `transform ${direction === 'right' ? 'scale-75 opacity-0' : 'scale-75 opacity-0'}` 
//              : 'transform scale-100 opacity-100'
//          }`}>
//            <img 
//              src={`${currentData.image}`}
//              alt={`${currentData.model}`} 
//              className="max-w-[90%] max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain"
//            />
//          </div>

//          {/* Call to Action */}
//          <div className={`mt-4 md:mt-8 flex justify-center transition-all duration-500 ${
//            isTransitioning 
//              ? `transform ${direction === 'right' ? 'translate-y-10 opacity-0' : 'translate-y-10 opacity-0'}` 
//              : 'transform translate-y-0 opacity-100'
//          }`}>
//            <button className="border border-blue-900 rounded-full px-8 sm:px-10 md:px-12 py-1 md:py-2 uppercase text-xs sm:text-sm tracking-widest hover:bg-blue-900 hover:text-white transition-colors duration-300 text-blue-900">
//              {currentData.ctaText}
//            </button>
//          </div>
//        </div>

//       </section>
        
//         {/* Right section (dark) */}
//         <div className={`w-full md:w-1/4 lg:w-1/3 h-1/2 md:h-full text-white p-4 md:p-8 flex flex-col transition-colors duration-700 ${currentData.color}  rounded-4xl m-4`}>
//           {/* Top navigation */}
//           <div className="flex justify-between text-xs mb-8 sm:mb-12 md:mb-16">
//             <span className="transition-all duration-500 opacity-70 hover:opacity-100">
//               0{currentSlide}/0{currentData.totalSlides}
//             </span>
//           </div>

//           {/* Main content */}
//           <div className={`flex-grow transition-all duration-700 ${
//             isTransitioning 
//               ? 'opacity-0 transform translate-y-8' 
//               : 'opacity-100 transform translate-y-0'
//           }`}>
//             <h3 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-2 sm:mb-3 md:mb-4">
//               <span className="text-blue-400">{currentData.headline.split(' ').slice(0, 2).join(' ')}</span>
//               <br />
//               {currentData.headline.split(' ').slice(2).join(' ')}
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mt-2 sm:mt-3 md:mt-4 leading-relaxed">
//               {currentData.description}
//             </p>
//           </div>

//           {/* Lower navigation */}
//           <div className="mt-6 sm:mt-8 md:mt-12">
//             <div className="flex justify-center space-x-12 sm:space-x-16 mb-4 sm:mb-6 md:mb-8">
//               <button 
//                 className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
//                 onClick={prevSlide}
//               >
//                 &lt;
//               </button>
//               <button 
//                 className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
//                 onClick={nextSlide}
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className={`text-center text-xs mt-4 sm:mt-6 md:mt-8 transition-all duration-500 ${
//               isTransitioning ? 'opacity-0' : 'opacity-100'
//             }`}>
//               <p className="uppercase text-slate-300 tracking-wider">
//                 Configurator {currentData.configStatus}
//               </p>
//               <p className="mt-2 sm:mt-3 md:mt-4 text-xs text-slate-400">
//                 0{currentSlide}/0{currentData.totalSlides}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Progress bar for auto-rotation */}
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200">
//           <div 
//             className="h-full bg-blue-700"
//             style={{ 
//               width: isTransitioning ? '0%' : '100%',
//               transition: 'width 5s linear'
//             }}
//           ></div>
//         </div>

//         {/* Circular indicator showing current model */}
//         <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {dataList.map((car, index) => (
//             <div 
//               key={car.id} 
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 currentDataIndex === index ? 'bg-blue-700 scale-125' : 'bg-slate-300'
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';

// export default function HeroSection() {
//   const dataList = [
//     {
//       id: 1,
//       name: "Automatic Cutting Machine",
//       model: "Auto Cut",
//       image: "/images/autopol2.png",
//       description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking ,Smart cutting feed.",
//       headline: "Automatic Cutting Machine- Auto Cut",
//       ctaText: "Ecplore Features",
//       totalSlides: 6,
//       configStatus: "open",
//       sidebarText: "Discover Auto Cut",
//       color: "bg-slate-400"
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
//       color: "bg-slate-500"
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
//       color: "bg-slate-600"
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
//       color: "bg-slate-700"
//     }
//   ];

//   const [currentDataIndex, setCurrentDataIndex] = useState(0);
//   const [currentSlide, setCurrentSlide] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [direction, setDirection] = useState('right');
//   const currentData = dataList[currentDataIndex];

//   // Auto-rotation effect
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setDirection('right');
//       setIsTransitioning(true);
      
//       setTimeout(() => {
//         setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
//         setCurrentSlide(1);
        
//         setTimeout(() => {
//           setIsTransitioning(false);
//         }, 500);
//       }, 500);
//     }, 5000); // Change car every 5 seconds
    
//     return () => clearInterval(timer);
//   }, [dataList.length]);

//   const nextSlide = () => {
//     setCurrentSlide(current => 
//       current === currentData.totalSlides ? 1 : current + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(current => 
//       current === 1 ? currentData.totalSlides : current - 1
//     );
//   };

//   const nextModel = () => {
//     setDirection('right');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
//       setCurrentSlide(1);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }, 500);
//   };

//   const prevModel = () => {
//     setDirection('left');
//     setIsTransitioning(true);
    
//     setTimeout(() => {
//       setCurrentDataIndex((prev) => (prev - 1 + dataList.length) % dataList.length);
//       setCurrentSlide(1);
      
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 500);
//     }, 500);
//   };

//   return (
//     <div className="bg-slate-100 flex items-center justify-center w-full h-screen">
//       <div className="w-full h-full bg-white flex flex-col md:flex-row shadow-lg relative">
//         {/* Left section */}
//         <div className="w-full md:w-3/4 h-1/2 md:h-full p-4 md:p-8 flex flex-col relative overflow-hidden justify-center">
         
//           {/* Model navigation buttons */}
//           <div className="absolute top-4 right-4 md:top-8 md:right-8 flex space-x-2 md:space-x-4 z-10">
//             <button 
//               onClick={prevModel} 
//               className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
//             >
//               ←
//             </button>
//             <button 
//               onClick={nextModel} 
//               className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
//             >
//               →
//             </button>
//           </div>

//           {/* Main Content */}
//           <div className={`text-center mb-4 md:mb-8 transition-all duration-500 ${
//             isTransitioning 
//               ? `transform ${direction === 'right' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}` 
//               : 'transform translate-x-0 opacity-100'
//           }`}>
//             <h1 className="text-3xl tracking-widest mb-2 text-blue-900">{currentData.name}</h1>
//             <h2 className="text-xl tracking-widest text-blue-800">{currentData.model}</h2>
//           </div>

//           {/* Data Image */}
//           <div className={`flex-grow flex items-center justify-center transition-all duration-700 ${
//             isTransitioning 
//               ? `transform ${direction === 'right' ? 'scale-75 opacity-0' : 'scale-75 opacity-0'}` 
//               : 'transform scale-100 opacity-100'
//           }`}>
//             <img 
//               src={`${currentData.image}`}
//               alt={`${currentData.model}`} 
//               className="max-w-full max-h-48 md:max-h-64 object-contain"
//             />
//           </div>

//           {/* Call to Action */}
//           <div className={`mt-4 md:mt-8 flex justify-center transition-all duration-500 ${
//             isTransitioning 
//               ? `transform ${direction === 'right' ? 'translate-y-10 opacity-0' : 'translate-y-10 opacity-0'}` 
//               : 'transform translate-y-0 opacity-100'
//           }`}>
//             <button className="border border-blue-900 rounded-full px-12 py-2 uppercase text-sm tracking-widest hover:bg-blue-900 hover:text-white transition-colors duration-300 text-blue-900">
//               {currentData.ctaText}
//             </button>
//           </div>
//         </div>

//         {/* Right section (dark) */}
//         <div className={`w-full md:w-1/3 h-1/2 md:h-full text-white p-4 md:p-8 flex flex-col transition-colors duration-700 ${currentData.color}`}>
//           {/* Top navigation */}
//           <div className="flex justify-between text-xs mb-16">
//             <span className="transition-all duration-500 opacity-70 hover:opacity-100">
//               0{currentSlide}/0{currentData.totalSlides}
//             </span>
//           </div>

//           {/* Main content */}
//           <div className={`flex-grow transition-all duration-700 ${
//             isTransitioning 
//               ? 'opacity-0 transform translate-y-8' 
//               : 'opacity-100 transform translate-y-0'
//           }`}>
//             <h3 className="uppercase text-4xl tracking-widest mb-4">
//               <span className="text-blue-400">{currentData.headline.split(' ').slice(0, 2).join(' ')}</span>
//               <br />
//               {currentData.headline.split(' ').slice(2).join(' ')}
//             </h3>
//             <p className="text-xl text-slate-300 mt-4 leading-relaxed">
//               {currentData.description}
//             </p>
//           </div>

//           {/* Lower navigation */}
//           <div className="mt-12">
//             <div className="flex justify-center space-x-16 mb-8">
//               <button 
//                 className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
//                 onClick={prevSlide}
//               >
//                 &lt;
//               </button>
//               <button 
//                 className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
//                 onClick={nextSlide}
//               >
//                 &gt;
//               </button>
//             </div>
//             <div className={`text-center text-xs mt-8 transition-all duration-500 ${
//               isTransitioning ? 'opacity-0' : 'opacity-100'
//             }`}>
//               <p className="uppercase text-slate-300 tracking-wider">
//                 Configurator {currentData.configStatus}
//               </p>
//               <p className="mt-4 text-xs text-slate-400">
//                 0{currentSlide}/0{currentData.totalSlides}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Progress bar for auto-rotation */}
//         <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200">
//           <div 
//             className="h-full bg-blue-700"
//             style={{ 
//               width: isTransitioning ? '0%' : '100%',
//               transition: 'width 5s linear'
//             }}
//           ></div>
//         </div>

//         {/* Left vertical sidebar */}
//         <div className="hidden md:flex absolute left-0 top-0 h-full bg-blue-900 w-20 flex-col justify-center items-center text-white">
//           <div className={`transform -rotate-90 uppercase tracking-widest text-xs whitespace-nowrap transition-all duration-500 ${
//             isTransitioning ? 'opacity-0' : 'opacity-100'
//           }`}>
//             {currentData.sidebarText}
//           </div>
//         </div>

//         {/* Circular indicator showing current model */}
//         <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {dataList.map((car, index) => (
//             <div 
//               key={car.id} 
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 currentDataIndex === index ? 'bg-blue-700 scale-125' : 'bg-slate-300'
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }