'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GoogleMap from './MapService';
import { MapPin, User, Mail, Phone, Package, Send, MessageSquare } from 'lucide-react';

const QueryAndMap = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle visibility check with improved threshold
    const checkVisibility = () => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Initial check on mount

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            // Reset form after submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                product: '',
                description: '',
            });
            // Show success message (could be implemented with a toast)
        }, 1500);
    };

    // Enhanced animations with staggered children
    const containerAnimation = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    const leftAnimation = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" 
            } 
        },
    };

    const rightAnimation = {
        hidden: { opacity: 0, x: 30 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.7, 
                ease: "easeOut" 
            } 
        },
    };

    const fadeInAnimation = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5, 
                ease: "easeOut" 
            } 
        },
    };

    return (
        <div className="w-full bg-gradient-to-b from-white to-gray-100 py-12">
            <section
                ref={sectionRef}
                className="max-w-full mx-auto px-4 sm:px-6 lg:px-6"
            >
                {/* Section Title with accent */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
                        Request a Machine
                        <span className="block h-1 w-1/2 mx-auto mt-2 bg-[#0f7db7] rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Fill out the form below to request a machine or product. Our team will get back to you as soon as possible.
                    </p>
                </motion.div>

                {/* Content Wrapper */}
                <motion.div
                    className="flex flex-col lg:flex-row items-stretch gap-4 w-full"
                    variants={containerAnimation}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    
                    {/* Map Section with Animation */}
                    <motion.div
                        className="w-full lg:w-1/2 rounded-xl overflow-hidden"
                        variants={leftAnimation}
                    >
                        <div className="bg-white p-3 rounded-xl shadow-xl h-full">
                            <div className="flex items-center mb-2 text-[#0f7db7]">
                                <MapPin size={20} className="mr-2" />
                                <h3 className="text-lg font-semibold">Find Us</h3>
                            </div>
                            <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md border border-[#0f7db7]/20">
                                <GoogleMap />
                            </div>
                            <div className="mt-3 p-3 bg-[#0f7db7]/10 rounded-lg text-sm">
                                <p className="font-medium text-gray-700">
                                    <strong>Office Location</strong>: 123 Business Park, Technology Avenue
                                </p>
                                <p className="text-gray-600">
                                    <strong>Contact</strong>: +1 (555) 123-4567
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Section with Animation */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={rightAnimation}
                    >
                        <div className="bg-white p-4 rounded-xl shadow-xl h-full border-t-4 border-[#0f7db7]">
                            <div className="flex items-center mb-3 text-[#0f7db7]">
                                <MessageSquare size={20} className="mr-2" />
                                <h3 className="text-lg font-semibold">Request Information</h3>
                            </div>
                            
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Input Fields with icons */}
                                <motion.div 
                                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                                    variants={containerAnimation}
                                >
                                    <motion.div variants={fadeInAnimation} className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-[#0f7db7]">
                                            <User size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            required
                                            className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:border-transparent transition-all duration-300"
                                        />
                                    </motion.div>
                                    
                                    <motion.div variants={fadeInAnimation} className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-[#0f7db7]">
                                            <Mail size={16} />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            required
                                            className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:border-transparent transition-all duration-300"
                                        />
                                    </motion.div>
                                    
                                    <motion.div variants={fadeInAnimation} className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-[#0f7db7]">
                                            <Phone size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            required
                                            className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:border-transparent transition-all duration-300"
                                        />
                                    </motion.div>
                                    
                                    <motion.div variants={fadeInAnimation} className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none text-[#0f7db7]">
                                            <Package size={16} />
                                        </div>
                                        <input
                                            type="text"
                                            name="product"
                                            value={formData.product}
                                            onChange={handleInputChange}
                                            placeholder="Product Name/Type"
                                            required
                                            className="w-full pl-8 pr-2 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:border-transparent transition-all duration-300"
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Textarea with icon */}
                                <motion.div variants={fadeInAnimation} className="relative">
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        placeholder="Describe the product requirements in detail..."
                                        required
                                        className="w-full p-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0f7db7] focus:border-transparent transition-all duration-300 min-h-24"
                                    ></textarea>
                                </motion.div>

                                {/* Submit Button with animation */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex items-center justify-center w-full bg-[#0f7db7] hover:bg-[#0a6998] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-1px] disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center">
                                            <Send size={16} className="mr-2" />
                                            <span>Send Request</span>
                                        </div>
                                    )}
                                </motion.button>
                            </form>
                            
                            {/* Contact Information */}
                            <div className="mt-4 pt-3 border-t border-gray-200">
                                <p className="text-gray-600 text-xs">
                                    By submitting this form, you agree to our <a href="#" className="text-[#0f7db7] hover:underline">terms and conditions</a>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default QueryAndMap;