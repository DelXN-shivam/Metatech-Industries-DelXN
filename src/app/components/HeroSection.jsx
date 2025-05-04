'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  // Car models data array
  const carModels = [
    {
      id: 1,
      name: "BLACK BADGE",
      model: "WRAITH",
      image: "/images/autopol2.png",
      description: "Black Badge is not a metaphor. It is simply our most powerful expression of Wraith. The Spirit of Ecstasy darkens into shadow as a powerful statement of intent. Expect uncompromised elegance married to a darker, more assertive character.",
      headline: "UNLEASH A DARKER DYNAMISM",
      ctaText: "MORE FORMATS",
      totalSlides: 6,
      configStatus: "open",
      sidebarText: "Discover Wraith",
      color: "bg-slate-800" // Dark slate for industrial feel
    },
    {
      id: 2,
      name: "BLACK BADGE",
      model: "GHOST",
      image: "/images/imageanalyser.png",
      description: "The purest Black Badge expression yet. Ghost's potent 6.75-litre V12 engine is enhanced with an additional 29PS, for a total of 600PS. The result is a discreet yet potent drive, embodying the alter ego of Rolls-Royce.",
      headline: "EMBRACE THE NIGHT",
      ctaText: "VIEW SPECIFICATIONS",
      totalSlides: 5,
      configStatus: "closed",
      sidebarText: "Discover Ghost",
      color: "bg-slate-700" // Slightly lighter slate
    },
    {
      id: 3,
      name: "BLACK BADGE",
      model: "CULLINAN",
      image: "/images/electrohydraulic.png",
      description: "The dark, edgy expression of the world's most capable SUV. With increased power and torque, Cullinan Black Badge delivers an assured and dynamic drive, with an enhanced exhaust note that leaves no doubt about its audacious character.",
      headline: "KING OF THE NIGHT",
      ctaText: "EXPLORE FEATURES",
      totalSlides: 7,
      configStatus: "open",
      sidebarText: "Discover Cullinan",
      color: "bg-slate-800" // Dark slate
    },
    {
      id: 4,
      name: "BESPOKE",
      model: "PHANTOM",
      image: "/images/metallographyconsumables.png",
      description: "The pinnacle of luxury and presence. Phantom is the flagship of the Rolls-Royce brand, presenting an unmistakable formal styling that tells the world of your arrival. The most silent motor car in the world, with peerless comfort.",
      headline: "ULTIMATE LUXURY",
      ctaText: "COMMISSION YOURS",
      totalSlides: 4,
      configStatus: "closed",
      sidebarText: "Discover Phantom",
      color: "bg-slate-700" // Slightly lighter slate
    }
  ];

  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('right');
  const currentCar = carModels[currentModelIndex];

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('right');
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentModelIndex((prev) => (prev + 1) % carModels.length);
        setCurrentSlide(1);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
      }, 500);
    }, 5000); // Change car every 5 seconds
    
    return () => clearInterval(timer);
  }, [carModels.length]);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === currentCar.totalSlides ? 1 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 1 ? currentCar.totalSlides : current - 1
    );
  };

  const nextModel = () => {
    setDirection('right');
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentModelIndex((prev) => (prev + 1) % carModels.length);
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
      setCurrentModelIndex((prev) => (prev - 1 + carModels.length) % carModels.length);
      setCurrentSlide(1);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  return (
    <div className="bg-slate-100 flex items-center justify-center w-full h-screen">
      <div className="w-full h-full bg-white flex flex-col md:flex-row shadow-lg relative">
        {/* Left section */}
        <div className="w-full md:w-3/4 h-1/2 md:h-full p-4 md:p-8 flex flex-col relative overflow-hidden justify-center">
         
          {/* Model navigation buttons */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex space-x-2 md:space-x-4 z-10">
            <button 
              onClick={prevModel} 
              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              ←
            </button>
            <button 
              onClick={nextModel} 
              className="text-blue-800 px-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
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
            <h1 className="text-3xl tracking-widest mb-2 text-blue-900">{currentCar.name}</h1>
            <h2 className="text-xl tracking-widest text-blue-800">{currentCar.model}</h2>
          </div>

          {/* Car Image */}
          <div className={`flex-grow flex items-center justify-center transition-all duration-700 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? 'scale-75 opacity-0' : 'scale-75 opacity-0'}` 
              : 'transform scale-100 opacity-100'
          }`}>
            <img 
              src={`${currentCar.image}`}
              alt={`Rolls Royce ${currentCar.name} ${currentCar.model}`} 
              className="max-w-full max-h-40 md:max-h-64 object-contain"
            />
          </div>

          {/* Call to Action */}
          <div className={`mt-4 md:mt-8 flex justify-center transition-all duration-500 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? 'translate-y-10 opacity-0' : 'translate-y-10 opacity-0'}` 
              : 'transform translate-y-0 opacity-100'
          }`}>
            <button className="border border-blue-900 rounded-full px-12 py-2 uppercase text-sm tracking-widest hover:bg-blue-900 hover:text-white transition-colors duration-300 text-blue-900">
              {currentCar.ctaText}
            </button>
          </div>
        </div>

        {/* Right section (dark) */}
        <div className={`w-full md:w-1/3 h-1/2 md:h-full text-white p-4 md:p-8 flex flex-col transition-colors duration-700 ${currentCar.color}`}>
          {/* Top navigation */}
          <div className="flex justify-between text-xs mb-16">
            <span className="transition-all duration-500 opacity-70 hover:opacity-100">
              0{currentSlide}/0{currentCar.totalSlides}
            </span>
          </div>

          {/* Main content */}
          <div className={`flex-grow transition-all duration-700 ${
            isTransitioning 
              ? 'opacity-0 transform translate-y-8' 
              : 'opacity-100 transform translate-y-0'
          }`}>
            <h3 className="uppercase text-4xl tracking-widest mb-4">
              <span className="text-blue-400">{currentCar.headline.split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {currentCar.headline.split(' ').slice(2).join(' ')}
            </h3>
            <p className="text-xl text-slate-300 mt-4 leading-relaxed">
              {currentCar.description}
            </p>
          </div>

          {/* Lower navigation */}
          <div className="mt-12">
            <div className="flex justify-center space-x-16 mb-8">
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
            <div className={`text-center text-xs mt-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <p className="uppercase text-slate-300 tracking-wider">
                Configurator {currentCar.configStatus}
              </p>
              <p className="mt-4 text-xs text-slate-400">
                0{currentSlide}/0{currentCar.totalSlides}
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

        {/* Left vertical sidebar */}
        <div className="hidden md:flex absolute left-0 top-0 h-full bg-blue-900 w-20 flex-col justify-center items-center text-white">
          <div className={`transform -rotate-90 uppercase tracking-widest text-xs whitespace-nowrap transition-all duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            {currentCar.sidebarText}
          </div>
        </div>

        {/* Circular indicator showing current model */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carModels.map((car, index) => (
            <div 
              key={car.id} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentModelIndex === index ? 'bg-blue-700 scale-125' : 'bg-slate-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}