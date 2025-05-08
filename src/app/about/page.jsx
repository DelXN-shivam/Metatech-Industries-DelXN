'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VisionMission from '../components/VisionAndCoreValues';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Icons
import { CheckCircle, ChevronRight, Globe, Award, Shield, Users } from 'lucide-react';

const AboutUsPage = () => {
  // For parallax scrolling effect on hero section
  const { scrollY } = useScroll();
  const heroBackgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // For scroll-triggered animations
  const experienceControls = useAnimation();
  const servicesControls = useAnimation();
  const statsControls = useAnimation();
  
  const [experienceRef, experienceInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  // Trigger animations when sections come into view
  useEffect(() => {
    if (experienceInView) experienceControls.start('visible');
    if (servicesInView) servicesControls.start('visible');
    if (statsInView) statsControls.start('visible');
  }, [experienceInView, servicesInView, statsInView, experienceControls, servicesControls, statsControls]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const statCounter = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  // Service cards data
  const services = [
    {
      title: "Metallography Analysis",
      description: "Detailed analysis of material properties through advanced metallography techniques with precision instruments.",
      icon: <CheckCircle className="h-8 w-8 text-emerald-500" />,
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Materials Testing",
      description: "Comprehensive testing services to assess material quality and performance under various conditions.",
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-200"
    },
    {
      title: "Consulting & Support",
      description: "Expert consulting services to guide your projects and ensure optimal material choices for any application.",
      icon: <Users className="h-8 w-8 text-violet-500" />,
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Advanced Imaging",
      description: "State-of-the-art imaging technology to capture and analyze material structures with unprecedented detail.",
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-50",
      borderColor: "border-sky-200"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure accuracy and reliability in all our analysis.",
      icon: <Award className="h-8 w-8 text-red-500" />,
      bgColor: "bg-gradient-to-br from-rose-50 to-red-50",
      borderColor: "border-rose-200"
    },
    {
      title: "Global Standards Compliance",
      description: "Ensuring your materials meet international standards and specifications for global markets.",
      icon: <Globe className="h-8 w-8 text-green-500" />,
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    }
  ];

  // Stats data
  const stats = [
    { value: "40+", label: "Years Experience", delay: 0 },
    { value: "5000+", label: "Projects Completed", delay: 1 },
    { value: "300+", label: "Global Clients", delay: 2 },
    { value: "50+", label: "Countries Served", delay: 3 }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/images/aboutus_bg.jpg')",
            y: heroBackgroundY
          }}
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/60 z-0"></div>

        {/* Content Container */}
        <motion.div 
          className="relative z-10 h-full flex flex-col"
          style={{ opacity: heroOpacity }}
        >

          <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
            <motion.div
              className="md:w-1/2 flex justify-center mb-8 md:mb-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image 
                src="/images/40_Years_Image.png" 
                alt="40 Years in Service" 
                width={550} 
                height={550} 
                className="drop-shadow-2xl animate-pulse-slow" 
              />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 text-white space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium mb-4">
                Celebrating 40 Years of Excellence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
                About Us
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-lg">
                At Metatech, we're not just a provider of Metallography solutions – we're your trusted partner in materials
                analysis and innovation. With over 40 years of industry experience, we've honed our expertise to offer a comprehensive
                suite of services and facilities that empower our clients to achieve their goals with confidence.
              </p>
              <motion.button 
                className="mt-6 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Our Story <ChevronRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="text-white text-sm mb-2">Scroll Down</div>
            <div className="w-1 h-10 bg-gradient-to-b from-white to-transparent rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision and Mission Section */}
      <VisionMission />

      {/* Our Experience Section */}
      <motion.section
        ref={experienceRef}
        className="py-20 px-6 md:px-16 lg:px-24"
        initial="hidden"
        animate={experienceControls}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              className="md:w-1/2"
              variants={fadeInUp}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">Experience</span> That Makes <br />a Difference
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
                Trusted Globally, Recognized Locally
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                With a proven track record of serving multinationals, research institutes, defense and aerospace laboratories,
                educational institutions, and clients across the globe, we're dedicated to delivering reliable results and exceeding expectations.
                Trust Metatech to be your partner in pushing the boundaries of materials analysis and achieving success in your endeavors.
              </p>
              
              <div className="space-y-4">
                {['Industry-leading expertise', 'Advanced analytical techniques', 'Dedicated support team'].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3"
                    variants={itemFadeIn}
                  >
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              variants={scaleIn}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-70"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-100 rounded-full blur-3xl opacity-70"></div>
              
              {/* Main image with hover effects */}
              <div className="relative z-10 rounded-2xl overflow-hidden group">
                <Image 
                  src="/images/experience.png" 
                  alt="Our Experiences" 
                  width={600} 
                  height={450} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Counter Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
        initial="hidden"
        animate={statsControls}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                custom={index}
                variants={statCounter}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: 2,
                    delay: 0.5 + (index * 0.2) 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <motion.section
        ref={servicesRef}
        className="py-20 px-6 md:px-16 lg:px-24"
        initial="hidden"
        animate={servicesControls}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Premium</span> Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our comprehensive range of metallography and materials analysis services designed to meet the most demanding requirements.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${service.bgColor} ${service.borderColor} border p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300`}
              variants={itemFadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <motion.button 
                className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <motion.button 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Services
          </motion.button>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {[
              {
                quote: "Metatech's analysis capabilities have been instrumental in improving our product quality and reliability.",
                author: "Sarah Johnson",
                position: "Chief Materials Engineer, AeroTech Industries",
                image: "/api/placeholder/80/80"
              },
              {
                quote: "The team's attention to detail and technical expertise is unmatched in the industry. Highly recommended.",
                author: "Dr. Michael Chen",
                position: "Research Director, Global Materials Institute",
                image: "/api/placeholder/80/80"  
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                variants={scaleIn}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      width={80} 
                      height={80} 
                      className="object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to partner with the industry leader?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Join the hundreds of organizations worldwide who trust Metatech for their materials analysis needs.
          </p>
          <motion.button 
            className="px-8 py-3 bg-white text-blue-700 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Experts
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default AboutUsPage;

// Add these to your globals.css or tailwind.config.js
//