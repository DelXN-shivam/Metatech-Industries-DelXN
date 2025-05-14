'use client';

import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegHandPointRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 200);
    }, []);

    const socialIcons = [
        { Icon: FaFacebookF, href: "#", color: "#3b5998" },
        { Icon: FaInstagram, href: "#", color: "#c13584" },
        { Icon: FaLinkedinIn, href: "#", color: "#0077b5" },
        { Icon: FaYoutube, href: "#", color: "#ff0000" }
    ];

    const products = [
        "Abrasive Sectioning",
        "Diamond Sectioning",
        "Hot/Cold Mounting",
        "Manual/Automatic Polishing",
        "Microscopes"
    ];

    const quickLinks = [
        "Home",
        "Products",
        "Lab Service",
        "Course",
        "Contact",
        "FAQs"
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <footer
            className={`relative text-white transition-opacity duration-1000 overflow-hidden ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Modern Background with Tech-inspired Pattern */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#021b34] to-[#0a2c4e] z-0">
                {/* Circuit board pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0,20 L40,20 M20,0 L20,40 M10,10 L30,30 M30,10 L10,30" stroke="#0f7db7" strokeWidth="0.5" fill="none" />
                            <circle cx="20" cy="20" r="2" fill="#0f7db7" />
                            <circle cx="0" cy="20" r="1.5" fill="#0f7db7" />
                            <circle cx="40" cy="20" r="1.5" fill="#0f7db7" />
                            <circle cx="20" cy="0" r="1.5" fill="#0f7db7" />
                            <circle cx="20" cy="40" r="1.5" fill="#0f7db7" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#circuit)" />
                    </svg>
                </div>

                {/* Glowing orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#0f7db7]/20 blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#0f7db7]/15 blur-3xl opacity-20"></div>

                {/* Digital flow lines */}
                <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#0f7db7]/20 to-transparent"></div>
                <div className="absolute left-2/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#0f7db7]/15 to-transparent"></div>
                <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#0f7db7]/20 to-transparent"></div>
            </div>

            <div className="relative pt-12 pb-4 container mx-auto z-10">
                <motion.div
                    className="flex flex-wrap justify-between px-6 lg:px-10 gap-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Logo & About Section */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start gap-6 w-full lg:w-1/4"
                        variants={itemVariants}
                    >
                        <motion.a
                            href="/"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="bg-white p-4 rounded-xl shadow-lg shadow-blue-500/20">
                                <img src="/images/metatech_logo.png" alt="Metatech Logo" className="w-56" />
                            </div>
                        </motion.a>
                        {/* <div className="bg-[#0f7db7]/10 backdrop-blur-sm p-6 rounded-xl border border-[#0f7db7]/20 shadow-xl shadow-blue-900/20">
                            <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                                <span className="w-10 h-1 bg-[#0f7db7] rounded-full mr-3"></span>
                                Why Choose Us?
                            </h4>
                            <p className="text-gray-300 leading-relaxed">
                                With decades of expertise, cutting-edge technology, and unparalleled customer service, Metatech Industries is your trusted partner.
                            </p>
                        </div> */}

                        {/* Contact Us Section */}
                        <motion.div
                            className="w-full"
                            variants={itemVariants}
                        >
                            <h3 className="text-xl font-bold mb-6 text-white relative inline-flex items-center">
                                <span className="w-2 h-6 bg-[#0f7db7] rounded-sm mr-3"></span>
                                Contact Us
                            </h3>
                            <div className="bg-[#0f7db7]/10 backdrop-blur-sm rounded-xl p-6 border border-[#0f7db7]/20 shadow-xl shadow-blue-900/20">
                                <div className="flex items-start mb-4">
                                    <div className="bg-[#0f7db7] p-2 rounded-lg mr-4 flex-shrink-0">
                                        <FaMapMarkerAlt className="text-white" />
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        Cosmos Bank Bldg, 476, Laxmi Rd, Bhatancha Bol, Narayan Peth, Pune, Maharashtra 411030
                                    </p>
                                </div>

                                <div className="flex items-center mb-4">
                                    <div className="bg-[#0f7db7] p-2 rounded-lg mr-4 flex-shrink-0">
                                        <FaPhoneAlt className="text-white" />
                                    </div>
                                    <a href="tel:+919422526706" className="text-gray-300 hover:text-white transition-colors">
                                        +91 94225 26706
                                    </a>
                                </div>

                                <div className="flex items-center mb-6">
                                    <div className="bg-[#0f7db7] p-2 rounded-lg mr-4 flex-shrink-0">
                                        <FaEnvelope className="text-white" />
                                    </div>
                                    <a href="mailto:sales@metatechind.com" className="text-gray-300 hover:text-white transition-colors">
                                        sales@metatechind.com
                                    </a>
                                </div>

                                {/* Social Media Icons */}
                                {/* <div className="flex justify-start space-x-3 mt-4">
                                    {socialIcons.map(({ Icon, href, color }, index) => (
                                        <motion.a
                                            key={index}
                                            href={href}
                                            className="p-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:text-white transition"
                                            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                                            whileHover={{
                                                scale: 1.15,
                                                backgroundColor: color,
                                                boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    ))}
                                </div> */}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Our Products Section */}
                    <motion.div
                        className="w-full lg:w-1/5"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-flex items-center">
                            <span className="w-2 h-6 bg-[#0f7db7] rounded-sm mr-3"></span>
                            Our Products
                        </h3>
                        <ul className="space-y-3">
                            {products.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="cursor-pointer text-gray-300 hover:text-white relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-[#0f7db7] hover:translate-x-1 transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Quick Links Section */}
                    <motion.div
                        className="w-full lg:w-1/5"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-flex items-center">
                            <span className="w-2 h-6 bg-[#0f7db7] rounded-sm mr-3"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    className="cursor-pointer text-gray-300 hover:text-white relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:rounded-full before:bg-[#0f7db7] hover:translate-x-1 transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    <a href={`#${link.toLowerCase().replace(" ", "-")}`}>{link}</a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Us Section */}
                    <motion.div
                        className="w-full lg:w-1/4"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-bold mb-6 text-white relative inline-flex items-center">
                            <span className="w-2 h-6 bg-[#0f7db7] rounded-sm mr-3"></span>
                            Accessibility
                        </h3>
                        <div className="bg-[#0f7db7]/10 backdrop-blur-sm rounded-xl p-6 border border-[#0f7db7]/20 shadow-xl shadow-blue-900/20">
                            <div className="flex items-start mb-4">
                                <div className="bg-[#0f7db7] p-2 rounded-lg mr-4 flex-shrink-0">
                                    <FaRegHandPointRight className="text-white" />
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Metatech Industries is committed to ensuring our website is accessible to everyone, including individuals with disabilities. If you are experiencing any difficulty using our website, please contact us at support@metatechind.com or call us at +91 94225 26706 to describe the issue or concern.
                                </p>
                            </div>

                            <div className="flex items-center mb-4">
                                <div className="bg-[#0f7db7] p-2 rounded-lg mr-4 flex-shrink-0">
                                    <FaPhoneAlt className="text-white" />
                                </div>
                                <p href="" className="text-gray-300">
                                    If you need assistance accessing the products, services, or information available on our website, we encourage you to reach out by phone at <a href="tel:+919422526706" className="text-purple-400 hover:text-white transition-colors">
                                        +91 94225 26706
                                    </a> or via email at <a href='mailto:support@metatechind.com' className='text-amber-500'>support@metatechind.com</a>. We are here to help and will be happy to assist you.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Footer Bottom */}
                <div className="relative mt-4 pt-8 text-center text-gray-400 border-t border-[#0f7db7]/20">
                    <div className="px-6 max-w-4xl mx-auto">
                        © 2025 <motion.span
                            className="text-[#0f7db7] font-medium"
                            whileHover={{ color: "#fff" }}
                        >
                            <a href="/#">Metatech Industries</a>
                        </motion.span>.
                        All rights reserved. Managed by
                        <motion.span
                            className="font-medium"
                            whileHover={{ color: "#ff4b4b" }}
                        >
                            <a href="https://delxntech.com/" target="_blank" rel="noopener noreferrer"> DelXN Technologies</a>
                        </motion.span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;