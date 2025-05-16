"use client";
import { React } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sansar from "../../../public/images/sansar.png";
import Person1 from "../../../public/images/vinod.png";
import humanAvatar from "../../../public/images/humanAvatar.png";
import { IoMdCall } from "react-icons/io";
import { FiMail, FiMapPin, FiAward } from "react-icons/fi";
import { FaLinkedin, FaIndustry, FaCogs } from "react-icons/fa";
import Link from "next/link";

const Experts = () => {
    const teamMembers = [
        {
            img: humanAvatar,
            name: "Mr. Y. Gowaikar",
            position: "CEO",
            description:
                "Mr. Y. Gowaikar leads Metatech Industries with over 25 years of experience in industrial machinery and automation solutions. His visionary leadership has positioned our company as an innovator in precision engineering. Under his guidance, we've expanded to serve 500+ clients across India with cutting-edge mechanical solutions. His expertise spans robotics, CNC systems, and large-scale industrial automation projects.",
            expertise: ["Industrial Automation", "Precision Engineering", "Strategic Growth"],
            linkedIn: "https://www.linkedin.com/in/vinod-t-41082314/",
        },
    ];

    const companyStats = [
        { value: "500+", label: "Clients Served", icon: <FaIndustry className="text-3xl" /> },
        { value: "40+", label: "Years Experience", icon: <FiAward className="text-3xl" /> }, 
        { value: "50+", label: "Machinery Types", icon: <FaCogs className="text-3xl" /> },
    ];

    return (
        <div className="flex flex-col gap-16 bg-gradient-to-b from-white to-[#f8fbff]">
            <section className="bg-gradient-to-r from-[#164574] to-[#4D96FF] text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        More clarification about our company.
                    </motion.p>
                </div>
            </section>
            {/* About Company Section - Enhanced with Stats */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Image Section with Floating Elements */}
                    <motion.div 
                        className="w-full lg:w-1/2 relative"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={sansar}
                                fill
                                alt="Metatech Industries Facility"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        
                        {/* Floating Stats Cards */}
                        <motion.div 
                            className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            {companyStats.map((stat, index) => (
                                <div key={index} className="bg-blue-100 p-4 rounded-xl shadow-lg border border-gray-100 text-center min-w-[120px]">
                                    <div className="text-[#4D96FF] mb-2 flex justify-center">{stat.icon}</div>
                                    <h3 className="text-2xl font-bold text-[#164574]">{stat.value}</h3>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div 
                        className="w-full lg:w-1/2 space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-[#164574] mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                Pioneering Mechanical <span className="text-[#4D96FF]">Innovation</span>
                            </motion.h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-[#164574] to-[#4D96FF] rounded-full" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                At <span className="font-semibold text-[#164574]">Metatech Industries</span>, we engineer the future of industrial automation. Since 2008, we've delivered <span className="font-semibold">precision machinery solutions</span> to manufacturers across India, combining German engineering standards with local expertise.
                            </p>

                            <div className="bg-[#f0f7ff] p-6 rounded-xl border-l-4 border-[#4D96FF]">
                                <div className="flex items-start gap-4">
                                    <FiMapPin className="text-[#4D96FF] text-2xl mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#164574] mb-2">Our Industrial Footprint</h4>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#4D96FF] rounded-full"></span> <span>HQ: Plot 45, MIDC Industrial Zone, Pune</span></li>
                                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#4D96FF] rounded-full"></span> <span>Regional Warehouses: Chennai, Bengaluru, Ahmedabad</span></li>
                                            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#4D96FF] rounded-full"></span> <span>5 New Service Centers Opening 2025</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-[#164574] flex items-center gap-2">
                                        <FaCogs className="text-[#4D96FF]" /> Our Specializations
                                    </h4>
                                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                        <li>• CNC Machinery</li>
                                        <li>• Industrial Robotics</li>
                                        <li>• Assembly Lines</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-[#164574] flex items-center gap-2">
                                        <FiAward className="text-[#4D96FF]" /> Certifications
                                    </h4>
                                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                        <li>• ISO 9001:2015 Certified</li>
                                        <li>• MSME Udyam Registered</li>
                                        <li>• CE Marked Equipment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Meet Our Experts Section - Completely Redesigned */}
            <div className="py-20 bg-gradient-to-b from-[#f0f9ff] to-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-[#164574] mb-3">
                            Meet Our <span className="text-[#4D96FF]">Engineering</span> Leadership
                        </h2>
                        <div className="h-1.5 w-24 bg-gradient-to-r from-[#164574] to-[#4D96FF] rounded-full mx-auto mb-4" />
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            The brilliant minds behind our mechanical innovations and industrial solutions
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Profile Card with Floating Elements */}
                                <div className="w-full lg:w-2/5 relative">
                                    <div className="relative aspect-square max-w-md mx-auto">
                                        {/* Background Decoration */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#164574]/10 to-[#4D96FF]/10 rounded-3xl -rotate-6 -z-10" />
                                        
                                        {/* Main Profile Image */}
                                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                                            <Image
                                                src={member.img}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        
                                        {/* LinkedIn Badge */}
                                        <Link
                                            href={member.linkedIn}
                                            target="_blank"
                                            className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-xl hover:scale-105 transition-transform"
                                        >
                                            <div className="bg-[#0077B5] p-2 rounded-full">
                                                <FaLinkedin className="text-white text-xl" />
                                            </div>
                                        </Link>
                                        
                                        {/* Expertise Badges */}
                                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                                            {member.expertise.map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="bg-[#164574] text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-md"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 + i * 0.1 }}
                                                >
                                                    {skill}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Profile Content */}
                                <div className="w-full lg:w-3/5 space-y-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[#164574]">{member.name}</h3>
                                        <p className="text-[#4D96FF] font-medium text-lg">{member.position}</p>
                                        <div className="h-1 w-20 bg-gradient-to-r from-[#164574] to-[#4D96FF] rounded-full my-4" />
                                    </div>
                                    
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {member.description}
                                    </p>
                                    
                                    {/* Key Achievements */}
                                    <div className="bg-[#f8fbff] p-5 rounded-xl border border-[#e1ecff]">
                                        <h4 className="font-semibold text-[#164574] mb-3">Key Achievements:</h4>
                                        <ul className="space-y-3 text-gray-700">
                                            <li className="flex items-start gap-3">
                                                <div className="bg-[#164574]/10 p-1 rounded-full mt-1">
                                                    <div className="bg-[#164574] w-2 h-2 rounded-full" />
                                                </div>
                                                <span>Led expansion to 3 new industrial regions in 2022</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-[#164574]/10 p-1 rounded-full mt-1">
                                                    <div className="bg-[#164574] w-2 h-2 rounded-full" />
                                                </div>
                                                <span>Pioneered our robotics division with 15+ automation solutions</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="bg-[#164574]/10 p-1 rounded-full mt-1">
                                                    <div className="bg-[#164574] w-2 h-2 rounded-full" />
                                                </div>
                                                <span>Recipient of "Industrial Innovator 2023" award</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* Contact Card */}
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Link
                                            href="tel:+919876543210"
                                            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg border border-gray-200 hover:border-[#4D96FF] transition-colors flex-1"
                                        >
                                            <div className="bg-[#164574]/10 p-2 rounded-full">
                                                <IoMdCall className="text-[#164574] text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Direct Contact</p>
                                                <p className="font-medium text-[#164574]">+91 9876543210</p>
                                            </div>
                                        </Link>
                                        <Link
                                            href="mailto:ceo@metatechind.com"
                                            className="flex items-center gap-3 bg-white px-5 py-3 rounded-lg border border-gray-200 hover:border-[#4D96FF] transition-colors flex-1"
                                        >
                                            <div className="bg-[#164574]/10 p-2 rounded-full">
                                                <FiMail className="text-[#164574] text-xl" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500">Email</p>
                                                <p className="font-medium text-[#164574]">ceo@metatechind.com</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;