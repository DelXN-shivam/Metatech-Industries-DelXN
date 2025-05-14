"use client";

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CoursesPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [animateIndexes, setAnimateIndexes] = useState([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer to trigger animations when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Staggered animation for cards
  useEffect(() => {
    if (isInView) {
      const indexes = [];
      services.forEach((_, index) => {
        setTimeout(() => {
          setAnimateIndexes(prev => [...prev, index]);
        }, 100 * index);
        indexes.push(index);
      });
      
      return () => {
        setAnimateIndexes([]);
      };
    }
  }, [isInView]);

  // Service data
  const services = [
    {
      id: 1,
      title: "Comprehensive Testing",
      description: "State-of-the-art testing laboratory specialized in thorough failure investigations and in-situ applications.",
      icon: <TestTube className="h-6 w-6 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Failure analysis", "Material characterization", "In-situ testing", "Environmental testing"],
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
    },
    {
      id: 2,
      title: "Automatic Sectioning",
      description: "Precision cutting services with computer-controlled equipment to preserve material microstructure.",
      icon: <Cutting className="h-6 w-6 text-red-600" />,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Abrasive cutting", "Precision sectioning", "Large sample capacity", "Minimal deformation"],
      color: "bg-gradient-to-br from-red-500 to-red-200",
    },
    {
      id: 3,
      title: "Diamond Sectioning",
      description: "Specialized cutting for hard or delicate materials requiring exceptional precision.",
      icon: <Diamond className="h-6 w-6 text-cyan-600" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Ultra-thin sectioning", "Delicate material handling", "Minimal heat generation", "Precision control"],
      color: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/20",
    },
    {
      id: 4,
      title: "Hot/Cold Mounting",
      description: "Advanced specimen preparation using both hot and cold mounting techniques for optimal results.",
      icon: <Mounting className="h-6 w-6 text-amber-600" />,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Hot compression mounting", "Cold epoxy mounting", "Edge retention", "Custom mounts"],
      color: "bg-gradient-to-br from-amber-500/10 to-amber-600/20",
    },
    {
      id: 5,
      title: "Polishing & Grinding",
      description: "Manual and automatic polishing systems producing mirror-like surfaces for microstructural examination.",
      icon: <Polishing className="h-6 w-6 text-emerald-600" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Multi-stage polishing", "Automated processes", "Custom protocols", "Final polishing <1μm"],
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/20",
    },
    {
      id: 6,
      title: "Electrolytic Polishing",
      description: "Advanced electrochemical process providing deformation-free surfaces for superior analysis.",
      icon: <Electrolytic className="h-6 w-6 text-indigo-600" />,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Deformation-free surfaces", "Selective etching", "Process monitoring", "Custom electrolytes"],
      color: "bg-gradient-to-br from-indigo-500/10 to-indigo-600/20",
    },
    {
      id: 7,
      title: "Microscopy Analysis",
      description: "High-resolution optical microscopy delivering detailed material analysis across multiple magnifications.",
      icon: <Microscope className="h-6 w-6 text-purple-600" />,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
      capabilities: ["50x-1000x magnification", "Dark field imaging", "Polarized light", "Digital imaging"],
      color: "bg-gradient-to-br from-purple-500/10 to-purple-600/20",
    },
    {
      id: 8,
      title: "Image Analysis",
      description: "Sophisticated digital systems for quantitative measurements and feature recognition in materials.",
      icon: <ImageAnalysis className="h-6 w-6 text-fuchsia-600" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Phase distribution", "Grain size analysis", "Porosity measurement", "Custom algorithms"],
      color: "bg-gradient-to-br from-fuchsia-500 to-fuchsia-200",
    },
    {
      id: 9,
      title: "Microhardness Testing",
      description: "Precision hardness testing with integrated imaging for comprehensive material characterization.",
      icon: <Hardness className="h-6 w-6 text-rose-600" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Vickers testing", "Knoop testing", "Automated mapping", "Low-load precision"],
      color: "bg-gradient-to-br from-rose-500/10 to-rose-600/20",
    },
    {
      id: 10,
      title: "In-Situ Metallography",
      description: "Portable equipment enabling on-site material analysis without destructive sample removal.",
      icon: <Metallography className="h-6 w-6 text-blue-600" />,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      capabilities: ["Field replication", "Non-destructive testing", "Digital documentation", "Immediate results"],
      color: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
    },
  ];

  // Icon components for simplicity (since we're keeping everything in one file)
  function TestTube(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v17.5A2.5 2.5 0 0 0 11.5 22h1a2.5 2.5 0 0 0 2.5-2.5V2"></path>
        <path d="M12 2a4 4 0 0 0-2 7.5"></path>
        <path d="M12 2a4 4 0 0 1 2 7.5"></path>
      </svg>
    );
  }

  function Cutting(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="18" cy="18" r="3"></circle>
        <path d="M20 4 8.12 15.88"></path>
        <path d="M14.47 14.48 20 20"></path>
        <path d="M8.12 8.12 12 12"></path>
      </svg>
    );
  }

  function Diamond(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
      </svg>
    );
  }

  function Mounting(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15A7 7 0 1 0 12 1a7 7 0 0 0 0 14Z"></path>
        <path d="M12 5v2"></path>
        <path d="M12 15v2"></path>
        <path d="M5 12H3"></path>
        <path d="M21 12h-2"></path>
        <path d="m7.6 6.6-1.4-1.4"></path>
        <path d="m17.4 16.4-1.4-1.4"></path>
        <path d="m16 7-1.4 1.4"></path>
        <path d="m7.5 16.5-1 1"></path>
        <path d="M16 16a4 4 0 0 1-8 0"></path>
      </svg>
    );
  }

  function Polishing(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="1"></circle>
      </svg>
    );
  }

  function Electrolytic(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31"></path>
        <path d="M14 9.3V1.99"></path>
        <path d="M8.5 2h7"></path>
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
        <path d="M5.52 16h12.96"></path>
      </svg>
    );
  }

  function Microscope(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8"></path>
        <path d="M3 22h18"></path>
        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
        <path d="M9 14h2"></path>
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path>
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
      </svg>
    );
  }

  function ImageAnalysis(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
        <line x1="16" x2="22" y1="5" y2="5"></line>
        <line x1="19" x2="19" y1="2" y2="8"></line>
        <circle cx="9" cy="9" r="2"></circle>
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
      </svg>
    );
  }

  function Hardness(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M12 8v8"></path>
        <path d="M8 12h8"></path>
      </svg>
    );
  }

  function Metallography(props) {
    return (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 15-9-9-9 9"></path>
        <path d="m21 11-9-9-9 9"></path>
      </svg>
    );
  }

  // Simple badge component
  const Badge = ({ children, className, ...props }) => {
    return (
      <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 ${className}`} {...props}>
        {children}
      </div>
    );
  }

  // Simple card component
  const Card = ({ children, className, onClick, ...props }) => {
    return (
      <div 
        className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Simple separator component
  const Separator = ({ className, ...props }) => {
    return (
      <div className={`shrink-0 bg-border h-[1px] w-full ${className}`} {...props} />
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50"
      id="services"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl opacity-30 animate-float-medium"></div>
        
        {/* Animated background mesh */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWMTZoMnY2em0wLThoLTJWOGgydjR6bTYgMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTYgMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bS0xMiAyNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTYtNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTYtNmgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-out`}>
          <div 
            className={`inline-flex px-4 py-1.5 rounded-full bg-white border-blue-200 text-blue-600 font-medium mb-6 backdrop-blur-sm shadow-sm ${isInView ? 'animate-bounce-subtle' : ''}`}
          >
            Material Analysis Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Precision <span className="text-blue-600 relative">
              Metallurgical Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Cutting-edge material testing and preparation solutions for industrial and research applications, 
            backed by decades of expertise and state-of-the-art equipment.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`transform transition-all duration-700 ease-out ${
                animateIndexes.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card 
                className={`h-full overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-xl transition-all duration-300 ${
                  activeService === service.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                {/* Card top gradient bar */}
                <div className={`h-1.5 w-full ${service.color.replace(/\/\d+/g, '')}`}></div>
                
                {/* Service image with overlay - conditionally show */}
                {activeService === service.id && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      {/* Image overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"></div>
                    </div>
                    {/* Service title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Service icon and title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg ${service.color}`}>
                      {service.icon}
                    </div>
                    {activeService !== service.id && (
                      <h3 className="text-xl font-bold text-gray-900 pt-1.5">
                        {service.title}
                      </h3>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Capabilities - show only when active */}
                  {activeService === service.id && (
                    <div className="mt-4">
                      <Separator className="mb-4" />
                      <h4 className="font-medium text-gray-900 mb-3">Key Capabilities:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((capability, i) => (
                          <Badge key={i} className="bg-gray-100 text-gray-800 hover:bg-gray-200 border-transparent">
                            {capability}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Call to action */}
                  <div className={`flex justify-between items-center mt-4 ${activeService === service.id ? 'pt-4' : ''}`}>
                    <span className="text-sm text-blue-600 font-medium">
                      {activeService === service.id ? 'View details' : 'Explore service'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 max-w-4xl mx-auto transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-500 ease-out`}>
          <div className="relative overflow-hidden rounded-2xl">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600"></div>
            
            {/* Animated dot pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] animate-[pulse_3s_ease-in-out_infinite]"></div>
            </div>
            
            <div className="relative z-10 px-8 py-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
              <div className="max-w-md">
                <h3 className="text-white text-3xl font-bold mb-4">
                  Ready to solve your material challenges?
                </h3>
                <p className="text-blue-100 mb-6">
                  Our expert metallurgical engineers and state-of-the-art equipment are ready to help with your most complex material analysis needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="px-6 py-3 bg-white text-blue-800 hover:bg-blue-50 rounded-lg font-medium shadow-xl flex items-center justify-center"
                  >
                    Request a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button 
                    className="px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-lg font-medium flex items-center justify-center"
                  >
                    Download Capabilities Brochure
                  </button>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="hidden md:block relative w-32 h-32">
                <div className="absolute w-full h-full rounded-full border-4 border-white/20 animate-spin-slow"></div>
                <div className="absolute w-full h-full rounded-full border-4 border-t-white/50 border-r-transparent border-b-transparent border-l-transparent rotate-45 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
                <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Microscope className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by section */}
        <div className={`mt-24 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-700 ease-out`}>
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Logos would go here - using placeholder shapes instead */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="h-12 w-32 bg-gray-200/50 rounded-md flex items-center justify-center group"
              >
                <div className="text-gray-400 font-medium group-hover:text-gray-500 transition-colors">
                  LOGO {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adding required CSS animations for the components */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -15px) rotate(-1deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 12s ease-in-out infinite;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CoursesPage;
