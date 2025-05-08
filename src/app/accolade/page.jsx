'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaHandshake } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';

export default function AccoladesPage() {
  const [activeTab, setActiveTab] = useState('awards');

  const tabs = [
    { id: 'awards', label: 'Awards' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'milestones', label: 'Milestones' },
  ];

  const accolades = {
    awards: [
      {
        year: 2023,
        title: 'Materials Analysis Innovation Award',
        description: 'Recognized for pioneering advancements in automated electrolytic polishing techniques',
        icon: <FaTrophy className="text-yellow-500" />,
      },
      {
        year: 2021,
        title: 'Excellence in Metallography Solutions',
        description: 'Awarded by the International Materials Testing Association',
        icon: <FaMedal className="text-yellow-600" />,
      },
      {
        year: 2019,
        title: 'Quality Leadership Award',
        description: 'For maintaining exceptional standards in materials testing and analysis',
        icon: <FaAward className="text-yellow-400" />,
      },
      {
        year: 2018,
        title: 'Industry Partner of the Year',
        description: 'Presented by the Association of Aerospace Manufacturers',
        icon: <FaHandshake className="text-blue-500" />,
      },
      {
        year: 2015,
        title: 'Technology Pioneer Award',
        description: 'For introducing advanced image analysis capabilities to the metallography field',
        icon: <FaTrophy className="text-yellow-500" />,
      },
    ],
    certifications: [
      {
        year: 2024,
        title: 'ISO 9001:2015',
        description: 'Quality Management System Certification',
        icon: <FaCertificate className="text-blue-500" />,
      },
      {
        year: 2022,
        title: 'AS9100 Rev D',
        description: 'Aerospace Quality Management System',
        icon: <FaCertificate className="text-blue-500" />,
      },
      {
        year: 2020,
        title: 'ISO 17025',
        description: 'Testing and Calibration Laboratories Accreditation',
        icon: <FaCertificate className="text-blue-500" />,
      },
    ],
    partnerships: [
      {
        year: 2023,
        title: 'Strategic Partnership with AeroTech Industries',
        description: 'Collaborative research on advanced aerospace materials',
        icon: <FaHandshake className="text-green-500" />,
      },
      {
        year: 2021,
        title: 'Research Collaboration with MIT Materials Science Department',
        description: 'Joint development of next-generation material analysis methodologies',
        icon: <FaHandshake className="text-green-500" />,
      },
      {
        year: 2019,
        title: 'Government Defense Contract',
        description: 'Selected as primary materials analysis partner for defense applications',
        icon: <FaHandshake className="text-green-500" />,
      },
    ],
    milestones: [
      {
        year: 2024,
        title: '40 Years of Excellence',
        description: 'Celebrating four decades of industry leadership and innovation in materials analysis',
        icon: <FaTrophy className="text-purple-500" />,
      },
      {
        year: 2020,
        title: 'Global Expansion',
        description: 'Opened facilities in Asia and Europe to serve international clients',
        icon: <FaAward className="text-purple-500" />,
      },
      {
        year: 2015,
        title: 'Advanced Imaging Lab',
        description: 'Launched state-of-the-art imaging laboratory with proprietary analysis technology',
        icon: <FaAward className="text-purple-500" />,
      },
      {
        year: 2010,
        title: 'Research Publication Milestone',
        description: 'Published 100th research paper in collaboration with leading universities',
        icon: <FaAward className="text-purple-500" />,
      },
      {
        year: 1984,
        title: 'Company Founding',
        description: 'Established with a mission to revolutionize metallography and materials analysis',
        icon: <FaAward className="text-purple-500" />,
      },
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Accolades & Achievements
          </motion.h1>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Celebrating 40 years of excellence and innovation in materials analysis
          </motion.p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Partner in Materials Analysis Excellence</h2>
              <p className="text-lg mb-4 text-gray-600">
                At Metatech, we're not just a provider of Metallography solutions – we're your trusted partner in materials analysis and innovation. With over 40 years of industry experience, we've honed our expertise to offer a comprehensive suite of services and facilities that empower our clients to achieve their goals with confidence.
              </p>
              <p className="text-lg text-gray-600">
                With a proven track record of serving multinationals, research institutes, defense and aerospace laboratories, educational institutions, and clients across the globe, we're dedicated to delivering reliable results and exceeding expectations.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-blue-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Cutting-Edge Solutions</h3>
                <p className="mb-4 text-gray-700">
                  Our state-of-the-art facilities boast cutting-edge equipment and technology, including:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Abrasive & diamond sectioning</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Hot/cold mounting</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Manual/automatic polishing</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Electrolytic polishing</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Advanced microscopy</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Image analysis</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>Microhardness testing</span>
                  </li>
                  <li className="flex items-start">
                    <HiOutlineChevronDown className="text-blue-500 mt-1 mr-2" />
                    <span>In-situ metallography</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Accolades & Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Recognitions & Achievements</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="mt-8">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {accolades[activeTab].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="bg-blue-50 p-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-blue-800">{item.title}</div>
                    <div className="text-xl">{item.icon}</div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{item.year}</div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Metatech Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Trust Metatech to be your partner in pushing the boundaries of materials analysis and achieving success in your endeavors.
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-100 transition-colors duration-300 font-medium py-3 px-8 rounded-full shadow-lg">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  );
}