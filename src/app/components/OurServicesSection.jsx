'use client';
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const services = [
    {
      icon: '/images/Coffee maker.png',
      image: '/images/Microhardness-Tester-with-Image-Analyser.jpg',
      title: 'Microhardness Tester with Image Analyser',
      description: 'Precision hardness testing with advanced image analysis capabilities',
      category: 'Testing',
    },
    {
      icon: '/images/Gears set.png',
      image: '/images/Automatic-Sectioning.png',
      title: 'Automatic Sectioning',
      description: 'High-precision automated sectioning for consistent sample preparation',
      category: 'Cutting',
    },
    {
      icon: '/images/Laser.png',
      image: '/images/Manual-Automatic-Polishing.png',
      title: 'Manual/Automatic Polishing',
      description: 'Surface preparation solutions for metallographic analysis',
      category: 'Finishing',
    },
    {
      icon: '/images/Coffee maker.png',
      image: '/images/3D-Surface-Profilometry.png',
      title: '3D Surface Profilometry',
      description: 'Advanced surface measurement with nanometer-level resolution',
      category: 'Analysis',
    },
    {
      icon: '/images/Gears set.png',
      image: '/images/Spectroscopic-Analysis.jpg',
      title: 'Spectroscopic Analysis',
      description: 'Material composition analysis using advanced spectroscopy',
      category: 'Testing',
    },
    {
      icon: '/images/Laser.png',
      image: '/images/Automated-Mounting.png',
      title: 'Automated Mounting',
      description: 'Precision mounting systems for sample preparation',
      category: 'Preparation',
    },
  ];

  const categories = ['All', ...new Set(services.map((s) => s.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    hover: {
      y: -10,
      transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-12 lg:py-16 w-full overflow-hidden bg-gradient-to-br from-[#f1f5f9] to-[#e0f2fe]"
    >
      {/* Subtle Accent Circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#0f7db7]/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-[#0f7db7]/10 rounded-full blur-3xl opacity-20" />

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-[90%] relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-[#0f7db7] uppercase rounded-full bg-[#0f7db7]/10 backdrop-blur-md border border-[#0f7db7]/20 mb-6">
            Industrial Solutions
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Precision <span className="text-[#0f7db7]">Engineering</span> Services
          </motion.h2>
          <motion.p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Cutting-edge material testing and preparation solutions for industrial excellence
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#0f7db7] text-white shadow'
                  : 'bg-white text-[#0f7db7] border border-[#0f7db7]'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative h-full"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-100 shadow-sm group-hover:shadow-md transition-all duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0f7db7]/0 via-[#0f7db7]/0 to-[#0f7db7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative h-full flex flex-col p-5 z-10">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f7db7] to-[#0a5d86] shadow-lg flex items-center justify-center z-20"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm">
                      <Image src={service.icon} alt="" width={20} height={20} className="object-contain" />
                    </div>
                  </motion.div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 text-xs font-medium bg-white/80 text-slate-700 rounded-full shadow-sm backdrop-blur-sm border border-slate-200">
                    {service.category}
                  </span>
                </motion.div>

                <motion.h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#0f7db7] transition-colors duration-300">
                  {service.title}
                </motion.h3>
                <p className="text-slate-600 mb-5 leading-relaxed flex-grow">{service.description}</p>

                <motion.div className="flex justify-end" whileHover={{ x: 2 }}>
                  <button className="flex items-center px-4 py-2 text-sm font-medium text-[#0f7db7] rounded-lg group-hover:bg-[#0f7db7]/5 transition-all duration-300">
                    <span>Discover More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
