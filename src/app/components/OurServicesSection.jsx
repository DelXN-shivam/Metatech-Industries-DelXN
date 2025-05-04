'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const services = [
    {
      icon: '/images/Coffee maker.png',
      image: '/images/microhardness-tester.jpg',
      title: 'Microhardness Tester with Image Analyser',
      description: 'Precision hardness testing with advanced image analysis capabilities',
      category: 'Testing'
    },
    {
      icon: '/images/Gears set.png',
      image: '/images/automatic-sectioning.jpg',
      title: 'Automatic Sectioning',
      description: 'High-precision automated sectioning for consistent sample preparation',
      category: 'Cutting'
    },
    {
      icon: '/images/Laser.png',
      image: '/images/polishing-grinding.jpg',
      title: 'Manual/Automatic Polishing',
      description: 'Surface preparation solutions for metallographic analysis',
      category: 'Finishing'
    },
    {
      icon: '/images/Coffee maker.png',
      image: '/images/3d-profilometry.jpg',
      title: '3D Surface Profilometry',
      description: 'Advanced surface measurement with nanometer-level resolution',
      category: 'Analysis'
    },
    {
      icon: '/images/Gears set.png',
      image: '/images/spectroscopic-analysis.jpg',
      title: 'Spectroscopic Analysis',
      description: 'Material composition analysis using advanced spectroscopy',
      category: 'Testing'
    },
    {
      icon: '/images/Laser.png',
      image: '/images/automated-mounting.jpg',
      title: 'Automated Mounting',
      description: 'Precision mounting systems for sample preparation',
      category: 'Preparation'
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-12 lg:py-16 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-[#e6f3fa]"
    >
      {/* Premium background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbXBvc2l0ZSBpZD0ibm9pc2UiIG9wZXJhdG9yPSJhdG9wIiB4PSIwJSIgeT0iMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmVDb21wb3NpdGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] opacity-5"></div>

        {/* Dynamic floating blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0f7db7]/10 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-slate-200 rounded-full filter blur-3xl opacity-20 animate-float-medium"></div>

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

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[90%] relative z-10">
        {/* Premium Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-[#0f7db7] uppercase rounded-full bg-[#0f7db7]/10 backdrop-blur-md border border-[#0f7db7]/20 mb-6"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Industrial Solutions
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Precision <span className="text-[#0f7db7]">Engineering</span> Services
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cutting-edge material testing and preparation solutions for industrial excellence
          </motion.p>
        </motion.div>

        {/* Premium Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Premium card container */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                {/* Card background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-500"></div>

                {/* Floating highlight effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f7db7]/0 via-[#0f7db7]/0 to-[#0f7db7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Reflective sheen effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-30 transform group-hover:rotate-12 transition-all duration-700"></div>
                </div>
              </div>

              {/* Card content */}
              <div className="relative h-full flex flex-col p-5 z-10">
                {/* Image container with parallax effect */}
                <motion.div
                  className="relative h-52 w-full rounded-2xl overflow-hidden mb-5"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

                  {/* Floating icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f7db7] to-[#0a5d86] shadow-lg flex items-center justify-center z-20"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                      <Image
                        src={service.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Category tag */}
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#0f7db7] text-white text-xs font-medium rounded-full shadow">
                    {service.category}
                  </span>
                </motion.div>

                {/* Title with subtle hover effect */}
                <motion.h3
                  className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0f7db7] transition-colors duration-300"
                  whileHover={{ x: 2 }}
                >
                  {service.title}
                </motion.h3>

                {/* Description with elegant typography */}
                <p className="text-slate-600 mb-5 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Premium action button */}
                <motion.div
                  className="flex justify-end"
                  whileHover={{ x: 2 }}
                >
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-[#0f7db7] rounded-lg group-hover:bg-[#0f7db7]/5 transition-all duration-300">
                    <span>Discover More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                      />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#0f7db7]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main button */}
            <button className="relative px-8 py-4 bg-gradient-to-r from-[#0f7db7] to-[#0a5d86] text-white text-lg font-medium rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-[length:200%_auto] bg-gradient-to-r from-[#0f7db7] to-[#0a5d86] opacity-100 hover:animate-shine"></div>

              {/* Content */}
              <span className="relative z-10 flex items-center">
                <span className="mr-3">Explore All Capabilities</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-15px, -15px) rotate(-1deg); }
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 12s ease-in-out infinite; }
        .animate-shine { animation: shine 2s linear infinite; }
      `}</style>
    </section>
  );
};

export default Services;