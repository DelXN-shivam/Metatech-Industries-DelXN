'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const expertiseData = [
        {
            title: 'Automatic Cutting',
            image: '/images/image_1.png',
            description: 'AI-powered precision cutting for industrial applications',
            category: 'Machining',
            icon: '⚙️'
        },
        {
            title: 'Spectro Grinding',
            image: '/images/image_2.jpg',
            description: 'Advanced surface finishing with real-time analytics',
            category: 'Finishing',
            icon: '🔧'
        },
        {
            title: 'Laser Systems',
            image: '/images/image_3.png',
            description: 'High-accuracy laser cutting for complex geometries',
            category: 'Cutting',
            icon: '✨'
        },
        {
            title: 'Nano-Polishing',
            image: '/images/image_4.png',
            description: 'Mirror-finish results with automated quality control',
            category: 'Finishing',
            icon: '🔍'
        },
        {
            title: 'Predictive Maintenance',
            image: '/images/image_5.png',
            description: 'IoT-enabled equipment monitoring and analytics',
            category: 'Services',
            icon: '📊'
        },
        {
            title: 'Smart Mounting',
            image: '/images/image_6.png',
            description: 'Automated temperature-controlled mounting solutions',
            category: 'Preparation',
            icon: '📌'
        },
    ];

    // Animation variants
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
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1]
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            transition: {
                duration: 0.4,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const imageVariants = {
        hover: {
            scale: 1.08,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1.0]
            }
        }
    };

    const buttonVariants = {
        hover: {
            backgroundColor: '#0c6a9e',
            transform: 'translateY(-3px)',
            boxShadow: '0 20px 25px -5px rgba(15, 125, 183, 0.3)',
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.97
        }
    };

    return (
        <section className="relative py-24 px-2 sm:px-4 md:px-6 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Premium background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Subtle noise texture */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbXBvc2l0ZSBpZD0ibm9pc2UiIG9wZXJhdG9yPSJhdG9wIiB4PSIwJSIgeT0iMCUiPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjA1IiBudW1PY3RhdmVzPSI1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmVDb21wb3NpdGU+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')] opacity-5"></div>

                {/* Dynamic floating blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0f7db7]/20 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
                <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#0f7db7]/10 rounded-full filter blur-3xl opacity-20 animate-float-medium"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#0c6a9e]/15 rounded-full filter blur-3xl opacity-25 animate-float-medium"></div>
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>

                {/* Diagonal lines */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="diagonal-pattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                            <line x1="0" y1="0" x2="0" y2="10" stroke="#0f7db7" strokeWidth="0.2" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
                    </svg>
                </div>

                {/* Dots overlay */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="#0f7db7" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
                    </svg>
                </div>

                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f7db7]/5 to-transparent"></div>
            </div>

            {/* Decorative elements */}
            {isMounted && (
                <>
                    <motion.div
                        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100/50 blur-3xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.4, 0.3]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-blue-200/50 blur-3xl"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </>
            )}

            <div className="max-w-full lg:max-w-[95%] xl:max-w-[90%] mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        className="inline-block px-4 py-1.5 text-sm font-medium tracking-wider text-blue-600 bg-blue-100 rounded-full mb-4 uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ color: '#0f7db7' }}
                    >
                        INDUSTRIAL SOLUTIONS
                    </motion.span>
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800"
                            style={{ backgroundImage: 'linear-gradient(to right, #0f7db7, #065686)' }}>
                            <span className="text-slate-800">Advanced</span> Manufacturing
                        </span> <span className="text-slate-800">Technologies</span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Cutting-edge solutions for precision manufacturing and industrial automation
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-white/20"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            {/* Card glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Image container */}
                            <motion.div
                                className="relative h-60 overflow-hidden"
                                variants={imageVariants}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={index < 3} // Only priority load first 3 images
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                                <div className="absolute bottom-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-md"
                                    style={{ backgroundColor: '#0f7db7' }}>
                                    {item.category}
                                </div>
                                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full text-xl">
                                    {item.icon}
                                </div>
                            </motion.div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                <div className="w-12 h-1 mb-4 rounded-full" style={{ backgroundColor: '#0f7db7' }} />
                                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <motion.a
                                        href="#"
                                        className="font-medium text-sm flex items-center transition-colors"
                                        style={{ color: '#0f7db7' }}
                                        whileHover={{ x: 5, color: '#065686' }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        View details
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.a>
                                    <span className="text-xs text-slate-400 font-mono">0{index + 1}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div
                        className="relative inline-block"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Glow effect */}
                        {isMounted && (
                            <motion.div
                                className="absolute -inset-2 rounded-xl blur-md opacity-0 group-hover:opacity-30"
                                style={{ backgroundColor: '#0f7db7' }}
                                animate={{
                                    scale: [0.9, 1.1, 0.9],
                                    opacity: [0, 0.2, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        )}

                        <motion.a
                            href="#"
                            className="relative inline-flex items-center px-8 py-4 text-white font-semibold rounded-xl shadow-lg"
                            style={{
                                background: 'linear-gradient(to right, #0f7db7, #0c6a9e)'
                            }}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <span className="mr-2">Explore All Solutions</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExpertiseSection;