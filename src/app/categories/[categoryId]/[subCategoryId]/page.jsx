'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '@/app/components/ProductSidebar';
import { getProductBySlug } from '@/app/data/categories';

export default function SubCategoryPage({ params: paramsPromise }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const params = React.use(paramsPromise);
  const { categoryId, subCategoryId } = params;
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Get product directly using the updated function
  const product = getProductBySlug(categoryId, subCategoryId);

  // Update document title when product is loaded
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Metatech Industries`;
    }
  }, [product]);

  // Default video thumbnails if not provided
  const videoThumbnails = product?.videos || [
    { id: 1, title: `${product?.name || 'Product'}`, duration: '3:45' },
    { id: 2, title: `${product?.name || 'Product'} Introduction`, duration: '2:18' },
    { id: 3, title: `${product?.name || 'Product'} Demo`, duration: '4:22' },
    { id: 4, title: `${product?.name || 'Product'} Operation Guide`, duration: '5:10' },
  ];

  // Default images if not provided
  const productImages = product?.images || [
    product?.image || '/auto_cutting/placeholder1.jpg',
    '/auto_cutting/placeholder2.jpg',
    '/auto_cutting/placeholder3.jpg',
    '/auto_cutting/placeholder4.jpg',
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Auto-rotate carousel
  useEffect(() => {
    if (!isVideoPlaying) {
      const interval = setInterval(() => {
        setActiveVideoIndex((prevIndex) =>
          prevIndex === videoThumbnails.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVideoPlaying, videoThumbnails.length]);

  // Video play/pause toggle
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <p className="text-gray-600 text-lg">Product not found.</p>
      </div>
    );
  }
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Head>
        <title>{`${product.name} | Metatech`}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      <div className="flex flex-col lg:flex-row gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden sticky top-16 z-40 bg-white shadow-sm p-4">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center w-full bg-[#0f7db7] hover:bg-[#4babe5] text-white py-2 px-4 rounded-lg transition-all duration-300"
          >
            {sidebarOpen ? <X size={20} className="mr-2" /> : <Menu size={20} className="mr-2" />}
            {sidebarOpen ? "Close Categories" : "Browse Categories"}
          </button>
        </div>

        {/* Enhanced Sidebar - Responsive */}
        <motion.div
          className={`${sidebarOpen ? 'fixed inset-0 z-30 bg-white bg-opacity-50' : 'hidden'
            } lg:bg-transparent lg:relative lg:block`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSidebarOpen(false);
            }
          }}
        >
          <motion.div
            className={`w-full sm:w-80 bg-white border-r border-gray-100 h-screen overflow-y-auto lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] z-40 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
              } transition-transform duration-300 ease-in-out`}
          // initial={{ x: -100, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.5 }}
          >
            <Sidebar />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 w-full overflow-hidden">
          {/* Hero Banner with Parallax Effect */}
          <div
            className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/Spectroscopic-Analysis.jpg')",
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] opacity-80"></div>
            <motion.div
              className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="w-full max-w-[2000px] mx-auto">
                <motion.h1
                  className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {product.name.toUpperCase()}
                </motion.h1>
                <motion.h2
                  className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {product.tag.toUpperCase()}
                </motion.h2>
                <motion.div
                  className="mt-4 sm:mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#0f7db7] px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow-lg hover:bg-[#0f7db7]/10 hover:text-white transition duration-300 text-sm sm:text-base inline-flex items-center"
                  >
                    Explore Product
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Breadcrumbs */}
          <div className="w-full bg-gray-100 py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-12 shadow-sm">
            <div className="w-full max-w-[2000px] mx-auto flex items-center justify-center text-xs sm:text-sm">
              <Link href="/" className="text-[#0f7db7] hover:text-[#4babe5] transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/categories/${categoryId}`}
                className="text-[#0f7db7] hover:text-[#4babe5] transition-colors"
              >
                {categoryId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600">{product.name}</span>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="w-auto py-4 sm:py-6 md:py-8 bg-white">
            <div className="w-full max-w-[2000px] mx-auto px-20">
              {/* Product Showcase */}
              <motion.div className="w-full" initial="hidden" animate="visible" variants={slideUp}>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                  {/* Product Image Carousel */}
                  <motion.div
                    className="w-full lg:w-1/2 relative p-3 sm:p-4 md:p-6 rounded-xl shadow-md overflow-hidden flex flex-col items-center"
                    whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Added Logo in top-right corner */}
                    {product.omnitechLogo && (
                      <div className="absolute top-2 right-2 z-10 w-16 h-16 md:w-20 md:h-20">
                        <img
                          src={product.omnitechLogo}
                          alt="Omnitech Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}

                    <div className="space-y-3 sm:space-y-4 w-[120%]">
                      {/* Main Display Area */}
                      <motion.div
                        className="aspect-square w-[70%] mx-auto relative overflow-hidden rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {selectedImage === productImages.length && product.video ? (
                          <div className="relative w-full h-full">
                            <video
                              ref={videoRef}
                              className="w-full h-full object-contain"
                              controls
                              src={product.video}
                            />
                            <button
                              onClick={togglePlayPause}
                              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                            >
                              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                            </button>
                          </div>
                        ) : (
                          <motion.img
                            src={productImages[selectedImage]}
                            alt={`${product.name} view ${selectedImage + 1}`}
                            className="w-full h-full object-contain"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>

                      {/* Thumbnail Gallery */}
                      <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center">
                        {productImages.map((image, index) => (
                          <motion.button
                            key={`img-${index}`}
                            onClick={() => setSelectedImage(index)}
                            className={`relative aspect-square w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-[#0f7db7]' : 'hover:ring-2 hover:ring-gray-300'
                              } rounded-md overflow-hidden`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.img
                              src={image}
                              alt={`${product.name} thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                              whileHover={{ scale: 1.1 }}
                            />
                          </motion.button>
                        ))}
                        {product.video && (
                          <motion.button
                            key="video-thumb"
                            onClick={() => {
                              setSelectedImage(productImages.length);
                              setIsPlaying(false);
                            }}
                            className={`relative aspect-square w-12 sm:w-14 md:w-16 lg:w-20 flex-shrink-0 ${selectedImage === productImages.length
                              ? 'ring-2 ring-[#0f7db7]'
                              : 'hover:ring-2 hover:ring-gray-300'
                              } rounded-md overflow-hidden`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div className="relative w-full h-full bg-gray-200">
                              <video
                                className="w-full h-full object-cover"
                                muted
                                preload="metadata"
                                src={`${product.video}#t=0.1`}
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                                <div className="bg-[#0f7db7] rounded-full p-2 text-white">
                                  <i className="fas fa-play text-xs"></i>
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Product Description */}
                  <div className="w-full lg:w-1/2">
                    <motion.div
                      className="border-l-4 border-[#0f7db7] pl-3 sm:pl-4 mb-4 sm:mb-6"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f7db7]">{product.name}</h2>
                      <p className="text-[#0f7db7] font-medium text-sm sm:text-base md:text-lg">{product.tag}</p>
                    </motion.div>

                    <motion.div
                      className="text-gray-700 space-y-3 sm:space-y-4 text-sm sm:text-base"
                      variants={staggerChildren}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.p variants={fadeIn}>{product.description}</motion.p>

                      {product.features && (
                        <motion.div variants={fadeIn}>
                          <h3 className="text-[#0f7db7] font-bold flex items-center">
                            <i className="fas fa-star mr-2"></i>
                            {product.name} Key Benefits
                          </h3>
                          <ul className="list-none ml-6 space-y-2 mt-3">
                            {product.features.map((benefit, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                                <span>{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      {product.additionalFeatures && (
                        <motion.div
                          variants={fadeIn}
                          className="bg-gradient-to-r from-[#0f7db7]/10 to-[#4babe5]/10 p-4 rounded-lg border-l-4 border-[#0f7db7] mt-6"
                        >
                          <h3 className="text-[#0f7db7] font-bold flex items-center">
                            <i className="fas fa-lightbulb mr-2"></i>
                            Additional Features
                          </h3>
                          <ul className="list-none ml-6 mt-2 space-y-2">
                            {product.additionalFeatures.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <i className="fas fa-angle-right text-[#0f7db7] mt-1 mr-2"></i>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      <div className="flex justify-end mt-6">
                        <motion.button
                          className="bg-[#0f7db7] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#4babe5] transition duration-300 flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <i className="fas fa-download mr-2"></i>
                          Download Brochure
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Consumables and Accessories */}
              {product.consumables && product.literature && (
                <div className="mt-16 flex flex-col md:flex-row gap-8">
                  <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800">Consumables and Accessories</h2>
                      <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.consumables.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300"
                          whileHover={{ y: -5 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <div className="h-48 relative overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={300}
                              height={240}
                              className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 text-center bg-gradient-to-b from-white to-gray-50">
                            <h3 className="text-[#0f7db7] font-bold text-lg">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.subtitle}</p>
                            <motion.button
                              className="mt-3 text-[#0f7db7] hover:text-[#4babe5] text-sm font-medium flex items-center justify-center mx-auto"
                              whileHover={{ scale: 1.05 }}
                            >
                              View Details
                              <i className="fas fa-chevron-right ml-1 text-xs"></i>
                            </motion.button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-800">Product Literature</h2>
                      <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.literature.map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 group hover:shadow-xl transition-all duration-300"
                          whileHover={{
                            y: -5,
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                          }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4 }}
                        >
                          <div className="h-48 relative overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              width={300}
                              height={240}
                              className="object-contain w-full h-full p-4 group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="font-bold text-lg text-[#0f7db7]">{item.title}</h3>
                            <div className="mt-4 flex justify-center space-x-3">
                              <motion.button
                                className="bg-[#0f7db7] text-white px-4 py-2 rounded-md flex items-center hover:bg-[#4babe5] transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                View
                              </motion.button>
                              <motion.button
                                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center hover:bg-gray-200 transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Download
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && (
                <motion.div
                  className="mt-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Specifications</h2>
                    <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
                  </div>
                  <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] text-white">
                          <th className="py-4 px-6 text-left rounded-tl-xl">Description</th>
                          <th className="py-4 px-6 text-left rounded-tr-xl">{product.name}</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700 divide-y divide-gray-200">
                        {product.specifications.map((spec, index) => (
                          <motion.tr
                            key={index}
                            className="hover:bg-[#0f7db7]/10 transition-colors cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + 0.2 }}
                          >
                            <td className="py-3 px-6 font-medium">{spec.param}</td>
                            <td className="py-3 px-6" dangerouslySetInnerHTML={{ __html: spec.value }}></td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <motion.button
                      className="bg-[#0f7db7] text-white px-6 py-2 rounded-lg flex items-center hover:bg-[#4babe5] transition duration-300 shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <i className="fas fa-file-download mr-2"></i>
                      Download Complete Specifications
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

