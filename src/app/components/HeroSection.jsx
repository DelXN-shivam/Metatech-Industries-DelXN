'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const dataList = [
    {
      id: 1,
      name: "Automatic Cutting Machine",
      model: "Auto Cut",
      image: "/images/autopol2.png",
      description: "Automatic precision cutting Motorized XYZ motions Automatic Serial cutting T slotted bed with swivelling option Lazer marking ,Smart cutting feed.",
      headline: "Automatic Cutting Machine- Auto Cut",
      ctaText: "Ecplore Features",
      totalSlides: 6,
      configStatus: "open",
      sidebarText: "Discover Auto Cut",
      color: "bg-slate-500"
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
      color: "bg-slate-500"
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
      color: "bg-slate-600"
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
      color: "bg-slate-700"
    }
  ];

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const currentData = dataList[currentDataIndex];

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentDataIndex((prev) => (prev + 1) % dataList.length);
        setCurrentSlide(1);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }, 5000); // Change car every 5 seconds
    
    return () => clearInterval(timer);
  }, [dataList.length]);

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

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-full max-w-[1850px] h-full md:h-[100vh] bg-white flex flex-col md:flex-row shadow-lg relative mx-auto">
        {/* Left section */}
        <div className="w-full md:w-3/4 h-1/2 md:h-full p-4 md:p-8 flex flex-col relative overflow-hidden justify-center">
         
          {/* Model navigation buttons */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex space-x-2 md:space-x-4 z-10">
            <button 
              onClick={prevModel} 
              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300 text-2xl md:text-base"
            >
              ←
            </button>
            <button 
              onClick={nextModel} 
              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300 text-2xl md:text-base"
            >
              →
            </button>
          </div>

          {/* Main Content */}
          <div className={`text-center mb-4 md:mb-8 transition-all duration-500 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}` 
              : 'transform translate-x-0 opacity-100'
          }`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl tracking-widest mb-2 text-blue-900">{currentData.name}</h1>
            <h2 className="text-lg sm:text-xl md:text-xl tracking-widest text-blue-800">{currentData.model}</h2>
          </div>

          {/* Data Image */}
          <div className={`flex-grow flex items-center justify-center transition-all duration-700 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? 'scale-75 opacity-0' : 'scale-75 opacity-0'}` 
              : 'transform scale-100 opacity-100'
          }`}>
            <img 
              src={`${currentData.image}`}
              alt={`${currentData.model}`} 
              className="max-w-[90%] max-h-[200px] sm:max-h-[250px] md:max-h-[300px] lg:max-h-[350px] object-contain"
            />
          </div>

          {/* Call to Action */}
          <div className={`mt-4 md:mt-8 flex justify-center transition-all duration-500 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? 'translate-y-10 opacity-0' : 'translate-y-10 opacity-0'}` 
              : 'transform translate-y-0 opacity-100'
          }`}>
            <button className="border border-blue-900 rounded-full px-8 sm:px-10 md:px-12 py-1 md:py-2 uppercase text-xs sm:text-sm tracking-widest hover:bg-blue-900 hover:text-white transition-colors duration-300 text-blue-900">
              {currentData.ctaText}
            </button>
          </div>
        </div>

        {/* Right section (dark) */}
        <div className={`w-full md:w-1/4 lg:w-1/3 h-1/2 md:h-full text-white p-4 md:p-8 flex flex-col transition-colors duration-700 ${currentData.color}`}>
          {/* Top navigation */}
          <div className="flex justify-between text-xs mb-8 sm:mb-12 md:mb-16">
            <span className="transition-all duration-500 opacity-70 hover:opacity-100">
              0{currentSlide}/0{currentData.totalSlides}
            </span>
          </div>

          {/* Main content */}
          <div className={`flex-grow transition-all duration-700 ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-8' 
              : 'opacity-100 transform translate-y-0'
          }`}>
            <h3 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-2 sm:mb-3 md:mb-4">
              <span className="text-blue-400">{currentData.headline.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {currentData.headline.split(' ').slice(2).join(' ')}
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 mt-2 sm:mt-3 md:mt-4 leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Lower navigation */}
          <div className="mt-6 sm:mt-8 md:mt-12">
            <div className="flex justify-center space-x-12 sm:space-x-16 mb-4 sm:mb-6 md:mb-8">
              <button 
                className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
                onClick={prevSlide}
              >
                &lt;
              </button>
              <button 
                className="w-6 h-6 border border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:border-white hover:bg-white hover:bg-opacity-10" 
                onClick={nextSlide}
              >
                &gt;
              </button>
            </div>
            <div className={`text-center text-xs mt-4 sm:mt-6 md:mt-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <p className="uppercase text-slate-300 tracking-wider">
                Configurator {currentData.configStatus}
              </p>
              <p className="mt-2 sm:mt-3 md:mt-4 text-xs text-slate-400">
                0{currentSlide}/0{currentData.totalSlides}
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar for auto-rotation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-200">
          <div 
            className="h-full bg-blue-700"
            style={{ 
              width: isTransitioning ? '0%' : '100%',
              transition: 'width 5s linear'
            }}
          ></div>
        </div>

        {/* Left vertical sidebar - Hidden on mobile */}
        <div className={`hidden md:flex absolute left-0 top-0 h-full ${currentData.color} w-16 lg:w-20 flex-col justify-center items-center text-white`}>
          <div className={`transform -rotate-90 uppercase tracking-widest text-xs whitespace-nowrap transition-all duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {currentData.sidebarText}
          </div>
        </div>

        {/* Circular indicator showing current model */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {dataList.map((car, index) => (
            <div 
              key={car.id} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentDataIndex === index ? 'bg-blue-700 scale-125' : 'bg-slate-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}




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