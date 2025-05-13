'use client';

import React, { useEffect } from "react";
import CardsLayout from "./CardsLayout";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Eye, Target, Star, Award, TrendingUp, Users, Heart, Shield } from 'lucide-react';

const VisionMission = () => {
  // For scroll-triggered animations
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const valuesControls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
    if (valuesInView) valuesControls.start('visible');
  }, [controls, inView, valuesControls, valuesInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
    }
  };

  // Core values data
  const coreValues = [
    {
      icon: <Star className="h-8 w-8 text-yellow-400" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, exceeding expectations through superior quality and performance.",
      color: "from-yellow-500 to-amber-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-400" />,
      title: "Innovation",
      description: "We embrace innovation and creative thinking to develop cutting-edge solutions that drive our clients forward.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnerships to achieve exceptional results for our clients.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-400" />,
      title: "Passion",
      description: "We approach every project with enthusiasm and dedication, committed to making a positive impact.",
      color: "from-rose-500 to-pink-600"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards, building trust through honest and transparent practices.",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Award className="h-8 w-8 text-cyan-400" />,
      title: "Quality",
      description: "We are committed to delivering premium quality solutions that stand the test of time and exceed expectations.",
      color: "from-cyan-500 to-sky-600"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-400 via-slate-100 to-slate-100 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 20, y: 20 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 8 }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full opacity-10 blur-3xl"
          initial={{ x: 0, y: 0 }}
          animate={{ x: -30, y: 30 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 10 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500 rounded-full opacity-10 blur-3xl"
          initial={{ x: 0, y: 0 }}
          animate={{ x: 25, y: -25 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 9 }}
        />
      </div>

      {/* Glow effects around the section */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-blue-600/5 to-blue-900/10"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Vision & Mission Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/80 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
              Vision & Mission
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision Card */}
            <motion.div
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl"></div>
              <motion.div
                className="relative bg-gradient-to-b from-gray-800/90 to-gray-900/90 p-8 lg:p-10 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
                variants={cardVariants}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 text-center">Vision</h3>
                <p className="text-lg text-blue-100/80 text-center leading-relaxed">
                  To be the leading provider of innovative and transformative IT solutions that empower businesses worldwide.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 mt-8"></div>
              </motion.div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="group relative"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 blur-xl"></div>
              <motion.div
                className="relative bg-gradient-to-b from-gray-800/90 to-gray-900/90 p-8 lg:p-10 rounded-2xl border border-cyan-500/30 backdrop-blur-sm"
                variants={cardVariants}
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md"></div>
                    <div className="relative bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 text-center">Mission</h3>
                <p className="text-lg text-cyan-100/80 text-center leading-relaxed">
                  To deliver custom, high-quality IT services and solutions that drive growth, and success for our clients.
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 mt-8"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesControls}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/80 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              What Drives Us
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Modern Card Layout for Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-20 rounded-xl transform group-hover:opacity-30 transition-opacity duration-300 blur-xl`}></div>
                <div className="relative h-full bg-gray-800/80 border border-gray-700 backdrop-blur-sm p-6 rounded-xl group-hover:border-opacity-50 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-5">{value.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm flex-grow">{value.description}</p>
                    <div className={`w-12 h-1 bg-gradient-to-r ${value.color} rounded-full mt-4`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;