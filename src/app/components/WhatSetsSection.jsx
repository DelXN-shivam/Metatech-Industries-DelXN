'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect,useState } from 'react';
import { useInView } from 'framer-motion';

export default function WhatSetsUsApart() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const features = [
        {
            title: '40+ Years of Expertise',
            description: 'Decades of Mastery in Metallography',
            icon: '👨‍🔬'
        },
        {
            title: 'State-of-the-Art Equipment',
            description: 'Equipped with Cutting-Edge Technology',
            icon: '⚙️'
        },
        {
            title: 'Customizable Solutions',
            description: 'Tailored to Meet Your Unique Needs',
            icon: '🛠️'
        },
        {
            title: 'Excellent After-Sales Support',
            description: 'Unmatched After-Sales Support You Can Rely On',
            icon: '📞'
        },
        {
            title: 'Trusted by Leading Brands',
            description: 'Collaborating with Industry Leaders to Drive Excellence and Innovation',
            icon: '🏆'
        },
    ];

    // Fixed positions for decorative elements
    const circlePositions = [
        { top: '10%', left: '5%', size: '120px' },
        { top: '30%', left: '80%', size: '150px' },
        // ... other fixed positions
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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

    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section
            ref={ref}
            className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                {isClient && (
                    <>
                        {circlePositions.map((pos, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full bg-blue-100/50"
                                style={{
                                    width: pos.size,
                                    height: pos.size,
                                    top: pos.top,
                                    left: pos.left,
                                }}
                                animate={{
                                    y: [0, 10, 0],
                                    transition: {
                                        duration: 5 + i,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }
                                }}
                            />
                        ))}
                    </>
                )}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Title */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.span
                        className="inline-block px-4 py-1.5 text-sm font-medium tracking-wider text-blue-600 bg-blue-100 rounded-full mb-4 uppercase"
                        variants={titleVariants}
                    >
                        Our Differentiators
                    </motion.span>
                    <motion.h2
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
                        variants={titleVariants}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-700">
                            What Sets Us Apart
                        </span>
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"
                        variants={titleVariants}
                    />
                </motion.div>

                {/* Features grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.slice(0, 3).map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl border border-white/20"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <motion.div
                                className="text-4xl mb-6"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, 10, -5, 0],
                                    transition: { duration: 0.6 }
                                }}
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full" />
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                            {/* Floating dots decoration */}
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-blue-400/10 group-hover:bg-blue-400/20 transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom row - larger cards */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {features.slice(3, 5).map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl border border-white/20"
                            variants={itemVariants}
                            whileHover="hover"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <motion.div
                                className="text-4xl mb-6"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, 10, -5, 0],
                                    transition: { duration: 0.6 }
                                }}
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                            <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full" />
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                            {/* Animated decoration */}
                            <motion.div
                                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-400/10"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.1, 0.2, 0.1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}