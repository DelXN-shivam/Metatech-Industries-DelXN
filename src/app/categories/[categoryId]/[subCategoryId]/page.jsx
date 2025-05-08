'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getCategoryBySlug, getProductBySlug } from '@/app/data/categories';

export default function SubCategoryPage({ params: paramsPromise }) {
  const params = React.use(paramsPromise); // Unwrap the params Promise
  const { categoryId, subCategoryId } = params;
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const category = getCategoryBySlug(categoryId);
  const product = getProductBySlug(categoryId, subCategoryId);
  
  // Update document title when category is loaded
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

  if (!category || !product) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <p className="text-gray-600 text-lg">Product or category not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-pink-500">
      <Head>
        <title>{`${product.name} | Buehler`}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>


      {/* Hero Banner with Parallax Effect */}
      <div
        className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/api/placeholder/1600/300')",
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
                <i className="fas fa-play-circle mr-2"></i>
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
            href={`/categories/${category.slug}`}
            className="text-[#0f7db7] hover:text-[#4babe5] transition-colors"
          >
            {category.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{product.name}</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8">
        <div className="w-full max-w-[2000px] mx-auto px-20">
          {/* Product Showcase */}
          <motion.div className="w-full" initial="hidden" animate="visible" variants={slideUp}>
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
              {/* Product Image Carousel */}
              <motion.div
                className="w-full lg:w-1/2 relative bg-gradient-to-br from-[#0f7db7]/10 to-[#4babe5]/10 p-3 sm:p-4 md:p-6 rounded-xl shadow-md overflow-hidden flex flex-col items-center"
                whileHover={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-3 sm:space-y-4 w-[85%]">
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

          {/* Features Highlights */}
          <motion.div
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[
              {
                title: 'High Performance',
                description: 'Optimized for high throughput and precision, ensuring consistent results across applications.',
                image: '/product/high-performance.png',
                icon: 'fas fa-tachometer-alt',
              },
              {
                title: 'User-Friendly Design',
                description: 'Intuitive controls and programmable settings for ease of use and repeatable outcomes.',
                image: '/product/user-friendly.png',
                icon: 'fas fa-tachometer-alt',
              },
              {
                title: 'Robust Construction',
                description: 'Built for durability and reliability in demanding industrial and laboratory environments.',
                image: '/product/robust-construction.png',
                icon: 'fas fa-tachometer-alt',
              },
              {
                title: 'Advanced Technology',
                description: 'Incorporates cutting-edge features for enhanced performance and efficiency.',
                image: '/product/advanced-technology.jpg',
                icon: 'fas fa-tachometer-alt',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="h-40 relative overflow-hidden">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center p-6">
                    <i className={`${feature.icon} text-white text-5xl`}></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-[#0f7db7]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ordering Section */}
          {product.ordering && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Ordering</h2>
                <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] text-white">
                      <th className="py-3 px-4 text-left">Part Number</th>
                      <th className="py-3 px-4 text-left">{product.name}</th>
                      <th className="py-3 px-4 text-left">Voltage</th>
                      <th className="py-3 px-4 text-left"></th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {product.ordering.map((item, index) => (
                      <motion.tr
                        key={index}
                        className={index % 2 === 0 ? 'bg-white hover:bg-[#0f7db7]/10' : 'bg-gray-50 hover:bg-[#0f7db7]/10'}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <td className="py-3 px-4 border-b">
                          {item.part} with {item.mold}
                        </td>
                        <td className="py-3 px-4 border-b"></td>
                        <td className="py-3 px-4 border-b">{item.voltage}</td>
                        <td className="py-3 px-4 border-b">
                          <motion.button
                            className="bg-[#0f7db7] text-white px-4 py-2 rounded hover:bg-[#4babe5] transition duration-300 shadow"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            REQUEST A QUOTE
                          </motion.button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

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
                            <i className="fas fa-eye mr-2"></i>
                            View
                          </motion.button>
                          <motion.button
                            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center hover:bg-gray-200 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <i className="fas fa-download mr-2"></i>
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

          {/* Videos Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Videos</h2>
              <div className="flex-grow ml-4 h-0.5 bg-gradient-to-r from-[#0f7db7] to-transparent"></div>
            </div>
            <div className="flex flex-col lg:flex-row">
              {/* Main Video Player */}
              <div className="lg:w-2/3 relative bg-black aspect-video">
                <video
                  key={`video-${activeVideoIndex}`}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  autoPlay
                  controls
                  muted
                  onEnded={() => setIsVideoPlaying(false)}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src={`/product/video${activeVideoIndex + 1}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-70">
                    <motion.div
                      className="text-center px-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold mb-3 text-[#0f7db7]">{product.name}</h3>
                      <p className="mb-6 text-lg text-[#4babe5]">{videoThumbnails[activeVideoIndex].title}</p>
                      <motion.button
                        className="bg-[#0f7db7] text-white px-8 py-3 rounded-full flex items-center mx-auto hover:bg-[#4babe5] transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const videoElement = document.querySelector('video');
                          videoElement.play();
                          setIsVideoPlaying(true);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Play Video
                      </motion.button>
                    </motion.div>
                  </div>
                )}
              </div>

              {/* Separator with Gradient */}
              <div className="hidden lg:flex flex-col items-center mx-4">
                <div className="w-px h-full bg-gradient-to-b from-transparent via-[#0f7db7] to-transparent opacity-50"></div>
                <div className="absolute top-1/2 -translate-y-1/2 bg-[#0f7db7] rounded-full p-2 shadow-lg">
                  <i className="fas fa-play text-white text-sm"></i>
                </div>
              </div>

              {/* Video List */}
              <div className="lg:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 p-4 overflow-y-auto max-h-[600px] border-l border-gray-700">
                <h3 className="text-white mb-4 font-semibold flex items-center">
                  <i className="fas fa-list-ul mr-2 text-[#0f7db7]"></i>
                  Related Videos
                </h3>
                <div className="space-y-4">
                  {videoThumbnails.map((video, index) => (
                    <motion.div
                      key={video.id}
                      className={`cursor-pointer group ${index === activeVideoIndex ? 'ring-2 ring-[#0f7db7]' : ''}`}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => {
                        setActiveVideoIndex(index);
                        setIsVideoPlaying(true);
                        setTimeout(() => {
                          const videoElement = document.querySelector('video');
                          videoElement.play();
                        }, 100);
                      }}
                    >
                      <div className="relative aspect-video bg-gray-700 overflow-hidden rounded-lg">
                        <video
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          muted
                          preload="metadata"
                        >
                          <source src={`/product/video${index + 1}.mp4#t=0.5`} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-[#0f7db7] bg-opacity-80 rounded-full p-2">
                            <i className="fas fa-play text-white"></i>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-white text-sm font-medium truncate">{video.title}</h4>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowDown, ArrowUp, ChevronDown, ChevronUp, Download, FileText } from "lucide-react";
// import { getProductById } from "../../../../data/products.js";

// // Utility function for className concatenation
// const cn = (...classes) => {
//   return classes.filter(Boolean).join(' ');
// };

// // Inline UI components
// const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
//   const variantStyles = {
//     default: "bg-primary text-primary-foreground hover:bg-primary/90",
//     destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//     outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//     secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//     ghost: "hover:bg-accent hover:text-accent-foreground",
//     link: "text-primary underline-offset-4 hover:underline",
//   };
  
//   const sizeStyles = {
//     default: "h-10 px-4 py-2",
//     sm: "h-9 rounded-md px-3",
//     lg: "h-11 rounded-md px-8",
//     icon: "h-10 w-10",
//   };

//   return (
//     <button
//       ref={ref}
//       className={cn(
//         "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//         variantStyles[variant],
//         sizeStyles[size],
//         className
//       )}
//       {...props}
//     />
//   );
// });
// Button.displayName = "Button";

// const Badge = ({ className, variant = 'default', ...props }) => {
//   const variantStyles = {
//     default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
//     secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
//     destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
//     outline: "text-foreground",
//   };

//   return (
//     <div className={cn(
//       "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
//       variantStyles[variant],
//       className
//     )} {...props} />
//   );
// };

// const Card = ({ className, ...props }) => (
//   <div
//     className={cn(
//       "rounded-lg border bg-card text-card-foreground shadow-sm",
//       className
//     )}
//     {...props}
//   />
// );

// const CardHeader = ({ className, ...props }) => (
//   <div
//     className={cn("flex flex-col space-y-1.5 p-6", className)}
//     {...props}
//   />
// );

// const CardTitle = ({ className, ...props }) => (
//   <h3
//     className={cn(
//       "text-2xl font-semibold leading-none tracking-tight",
//       className
//     )}
//     {...props}
//   />
// );

// const CardDescription = ({ className, ...props }) => (
//   <p
//     className={cn("text-sm text-muted-foreground", className)}
//     {...props}
//   />
// );

// const CardContent = ({ className, ...props }) => (
//   <div className={cn("p-6 pt-0", className)} {...props} />
// );

// const CardFooter = ({ className, ...props }) => (
//   <div
//     className={cn("flex items-center p-6 pt-0", className)}
//     {...props}
//   />
// );

// const Tabs = ({ value, onValueChange, className, children, ...props }) => (
//   <div className={className} {...props}>{children}</div>
// );

// const TabsList = React.forwardRef(({ className, ...props }, ref) => (
//   <div
//     ref={ref}
//     className={cn(
//       "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsList.displayName = "TabsList";

// const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => (
//   <button
//     ref={ref}
//     data-state={props['aria-selected'] ? 'active' : 'inactive'}
//     className={cn(
//       "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsTrigger.displayName = "TabsTrigger";

// const TabsContent = React.forwardRef(({ className, value, ...props }, ref) => (
//   <div
//     ref={ref}
//     data-state={props['aria-hidden'] ? 'inactive' : 'active'}
//     className={cn(
//       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
//       className
//     )}
//     {...props}
//   />
// ));
// TabsContent.displayName = "TabsContent";

// // MediaGallery component
// const MediaGallery = ({ images, video }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoIndex = images.length; // Video is always after all images
  
//   // Check if current selection is a video
//   const isVideoSelected = video && selectedIndex === videoIndex;

//   const handleVideoToggle = () => {
//     const videoElement = document.querySelector('video');
//     if (videoElement) {
//       if (isPlaying) {
//         videoElement.pause();
//       } else {
//         videoElement.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <Card className="overflow-hidden border-0 shadow-lg">
//       <div className="p-0">
//         <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
//           {isVideoSelected ? (
//             <div className="relative w-full h-full">
//               <video
//                 className="w-full h-full object-contain"
//                 controls
//                 src={video}
//                 onPlay={() => setIsPlaying(true)}
//                 onPause={() => setIsPlaying(false)}
//               />
//               <Button 
//                 variant="secondary" 
//                 size="sm" 
//                 className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
//                 onClick={handleVideoToggle}
//               >
//                 {isPlaying ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
//               </Button>
//             </div>
//           ) : (
//             <img
//               src={images[selectedIndex]}
//               alt={`Product view ${selectedIndex + 1}`}
//               className="w-full h-full object-contain"
//             />
//           )}
//         </div>

//         {/* Thumbnail Gallery */}
//         <div className="flex gap-2 p-4 overflow-x-auto scrollbar-hide bg-white border-t">
//           {images.map((image, index) => (
//             <button
//               key={`img-${index}`}
//               onClick={() => setSelectedIndex(index)}
//               className={`relative aspect-square w-16 md:w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
//                 selectedIndex === index ? 'border-blue-600 shadow-md' : 'border-transparent hover:border-gray-300'
//               }`}
//             >
//               <img
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </button>
//           ))}
          
//           {video && (
//             <button
//               onClick={() => setSelectedIndex(videoIndex)}
//               className={`relative aspect-square w-16 md:w-20 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
//                 selectedIndex === videoIndex ? 'border-blue-600 shadow-md' : 'border-transparent hover:border-gray-300'
//               }`}
//             >
//               <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
//                 <ChevronUp className="h-6 w-6 text-white" />
//               </div>
//             </button>
//           )}
//         </div>
//       </div>
//     </Card>
//   );
// };

// // ProductFeature component
// const ProductFeature = ({
//   title,
//   description,
//   icon,
//   gradient = "from-blue-500 to-blue-700",
//   badge,
//   action
// }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -5 }}
//       transition={{ duration: 0.3 }}
//     >
//       <Card className="overflow-hidden h-full border-0 shadow-md hover:shadow-xl transition-all duration-300">
//         <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>
//         <CardHeader className="pb-2">
//           {badge && <Badge variant="outline" className="mb-2 w-fit">{badge}</Badge>}
//           <div className="flex items-center gap-3">
//             {icon && <div className="text-blue-500">{icon}</div>}
//             <CardTitle className="text-lg">{title}</CardTitle>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-600 text-sm">{description}</p>
//         </CardContent>
//         {action && (
//           <CardFooter className="pt-0">
//             <Button 
//               variant="ghost" 
//               className="w-full justify-start hover:bg-blue-50 hover:text-blue-700" 
//               onClick={action.onClick}
//             >
//               {action.text}
//             </Button>
//           </CardFooter>
//         )}
//       </Card>
//     </motion.div>
//   );
// };

// // Main ProductPage component
// const ProductPage = () => {
//   const { categoryId, subcategoryId } = useParams();
//   const [activeTab, setActiveTab] = useState("overview");
//   const [activeVideoIndex, setActiveVideoIndex] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
//   // Refs for scroll navigation
//   const overviewRef = useRef(null);
//   const featuresRef = useRef(null);
//   const specsRef = useRef(null);
//   const orderingRef = useRef(null);
//   const accessoriesRef = useRef(null);
//   const literatureRef = useRef(null);
//   const videosRef = useRef(null);
//   const technotesRef = useRef(null);

//   // Get product data from JSON
//   const product = getProductById(subcategoryId) || {};

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.6 } },
//   };

//   const slideUp = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 },
//     },
//   };

//   // Handle scroll to section
//   const scrollToSection = (sectionId) => {
//     const sectionRefs = {
//       overview: overviewRef,
//       features: featuresRef,
//       specs: specsRef,
//       ordering: orderingRef,
//       accessories: accessoriesRef,
//       literature: literatureRef,
//       videos: videosRef,
//       technotes: technotesRef
//     };

//     const section = sectionRefs[sectionId];
//     if (section && section.current) {
//       section.current.scrollIntoView({ behavior: 'smooth' });
//       setActiveTab(sectionId);
//     }
//   };

//   // Observe sections to update active tab during scrolling
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;
      
//       const sections = [
//         { id: "overview", ref: overviewRef },
//         { id: "features", ref: featuresRef },
//         { id: "specs", ref: specsRef },
//         { id: "ordering", ref: orderingRef },
//         { id: "accessories", ref: accessoriesRef },
//         { id: "literature", ref: literatureRef },
//         { id: "videos", ref: videosRef },
//         { id: "technotes", ref: technotesRef }
//       ];

//       for (let i = sections.length - 1; i >= 0; i--) {
//         const section = sections[i];
//         if (section.ref.current && section.ref.current.offsetTop <= scrollPosition) {
//           setActiveTab(section.id);
//           break;
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Feature highlight data
//   const featureHighlights = [
//     {
//       title: "High Performance",
//       description: "Optimized for high throughput and precision, ensuring consistent results across applications.",
//       gradient: "from-blue-500 to-cyan-400"
//     },
//     {
//       title: "User-Friendly Design",
//       description: "Intuitive controls and programmable settings for ease of use and repeatable outcomes.",
//       gradient: "from-purple-500 to-indigo-500"
//     },
//     {
//       title: "Robust Construction",
//       description: "Built for durability and reliability in demanding industrial and laboratory environments.",
//       gradient: "from-green-500 to-emerald-600"
//     },
//     {
//       title: "Advanced Technology",
//       description: "Incorporates cutting-edge features for enhanced performance and efficiency.",
//       gradient: "from-amber-500 to-orange-600"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* Hero Banner with Parallax Effect */}
//       <div
//         className="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')",
//           backgroundAttachment: 'fixed',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-700/70"></div>
//         <motion.div
//           className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 text-center"
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//         >
//           <div className="w-full max-w-[1400px] mx-auto">
//             <motion.h1
//               className="text-white text-3xl md:text-5xl font-bold mb-2"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {product.name}
//             </motion.h1>
//             <motion.p
//               className="text-white/90 text-lg md:text-2xl font-medium mb-6"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {product.tag}
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//             >
//               <Button
//                 size="lg"
//                 variant="secondary"
//                 className="group hover:bg-white/95 transition-all duration-300 shadow-lg"
//                 onClick={() => scrollToSection("overview")}
//               >
//                 <span className="mr-2">Explore Product</span>
//                 <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
//               </Button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Breadcrumbs Navigation */}
//       <div className="w-full bg-white py-3 px-4 sm:px-6 md:px-8 shadow-sm border-b">
//         <div className="w-full max-w-[1400px] mx-auto flex items-center text-sm">
//           <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
//             Home
//           </a>
//           <span className="mx-2 text-gray-400">/</span>
//           <a href={`/categories/${categoryId}`} className="text-blue-600 hover:text-blue-800 transition-colors">
//             Products
//           </a>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-gray-600 font-medium">{product.name}</span>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-12">
//         <div className="w-full max-w-[1400px] mx-auto">
//           {/* Main Content Tabs */}
//           <div className="sticky top-0 bg-white z-50 shadow-md">
//             <Tabs value={activeTab} onValueChange={scrollToSection} className="w-full">
//               <TabsList className="w-full bg-white mb-0 flex border-b justify-start overflow-x-auto no-scrollbar">
//                 <TabsTrigger 
//                   value="overview" 
//                   aria-selected={activeTab === "overview"}
//                   onClick={() => scrollToSection("overview")}
//                 >
//                   Overview
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="features" 
//                   aria-selected={activeTab === "features"}
//                   onClick={() => scrollToSection("features")}
//                 >
//                   Features
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="specs" 
//                   aria-selected={activeTab === "specs"}
//                   onClick={() => scrollToSection("specs")}
//                 >
//                   Specifications
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="ordering" 
//                   aria-selected={activeTab === "ordering"}
//                   onClick={() => scrollToSection("ordering")}
//                 >
//                   Ordering
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="accessories" 
//                   aria-selected={activeTab === "accessories"}
//                   onClick={() => scrollToSection("accessories")}
//                 >
//                   Accessories
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="literature" 
//                   aria-selected={activeTab === "literature"}
//                   onClick={() => scrollToSection("literature")}
//                 >
//                   Literature
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="videos" 
//                   aria-selected={activeTab === "videos"}
//                   onClick={() => scrollToSection("videos")}
//                 >
//                   Videos
//                 </TabsTrigger>
//                 <TabsTrigger 
//                   value="technotes" 
//                   aria-selected={activeTab === "technotes"}
//                   onClick={() => scrollToSection("technotes")}
//                 >
//                   Tech Notes
//                 </TabsTrigger>
//               </TabsList>
//             </Tabs>
//           </div>
            
//           {/* Overview Section */}
//           <section ref={overviewRef} className="pt-10" id="overview">
//             <div className="flex flex-col lg:flex-row gap-8">
//               {/* Product Image Carousel */}
//               <motion.div 
//                 className="w-full lg:w-1/2"
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <MediaGallery 
//                   images={product.images || []}
//                   video={product.video}
//                 />
//               </motion.div>

//               {/* Product Description */}
//               <motion.div 
//                 className="w-full lg:w-1/2"
//                 initial={{ opacity: 0, x: 30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <Card className="border-0 shadow-lg h-full">
//                   <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
//                     <Badge variant="outline" className="w-fit mb-2 text-blue-700 border-blue-200 bg-blue-50">Premium Product</Badge>
//                     <CardTitle className="text-2xl text-blue-900">{product.name}</CardTitle>
//                     <CardDescription className="text-blue-700 font-medium">{product.tag}</CardDescription>
//                   </CardHeader>
                  
//                   <CardContent className="pt-6 space-y-6">
//                     <div>
//                       <p className="text-gray-700">{product.description}</p>
//                     </div>

//                     {product.features && (
//                       <div className="space-y-3">
//                         <h3 className="text-lg font-medium text-blue-800 flex items-center">
//                           <span className="mr-2">★</span>
//                           Key Benefits
//                         </h3>
//                         <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                           {product.features.map((benefit, index) => (
//                             <li 
//                               key={index} 
//                               className="flex items-start gap-2 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-2 rounded-md"
//                             >
//                               <span className="text-green-500 mt-1">✓</span>
//                               <span className="text-gray-700 text-sm">{benefit}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}

//                     {product.additionalFeatures && (
//                       <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg border-l-4 border-indigo-500">
//                         <h3 className="text-lg font-medium text-indigo-800 flex items-center">
//                           <span className="mr-2">💡</span>
//                           Additional Features
//                         </h3>
//                         <ul className="mt-2 space-y-1">
//                           {product.additionalFeatures.map((feature, index) => (
//                             <li key={index} className="flex items-start gap-2 text-sm">
//                               <span className="text-indigo-500 mt-1">→</span>
//                               <span className="text-gray-700">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </CardContent>

//                   <CardFooter className="flex justify-between items-center border-t pt-4 bg-gradient-to-r from-gray-50 to-gray-100">
//                     <div className="flex items-center">
//                       <Badge variant="outline" className="mr-2">v5.2</Badge>
//                       <span className="text-sm text-gray-500">Updated 2025</span>
//                     </div>
//                     <Button className="bg-blue-700 hover:bg-blue-800">
//                       <Download className="h-4 w-4 mr-2" />
//                       Download Brochure
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             </div>

//             {/* Feature Highlights */}
//             <motion.div
//               className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               {featureHighlights.map((feature, index) => (
//                 <ProductFeature 
//                   key={index}
//                   title={feature.title}
//                   description={feature.description}
//                   gradient={feature.gradient}
//                 />
//               ))}
//             </motion.div>
//           </section>

//           {/* Features Section */}
//           <section ref={featuresRef} className="pt-20 scroll-mt-20" id="features">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Product Features</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Complete Feature Overview</CardTitle>
//                 <CardDescription>
//                   Comprehensive features of the {product.name}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Key Benefits</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="space-y-2">
//                         {product.features?.map((feature, index) => (
//                           <li key={index} className="flex items-start gap-2">
//                             <span className="text-green-500 mt-1">✓</span>
//                             <span>{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
                  
//                   <Card>
//                     <CardHeader>
//                       <CardTitle className="text-lg">Additional Features</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <ul className="space-y-2">
//                         {product.additionalFeatures?.map((feature, index) => (
//                           <li key={index} className="flex items-start gap-2">
//                             <span className="text-blue-500 mt-1">→</span>
//                             <span>{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Specifications Section */}
//           <section ref={specsRef} className="pt-20 scroll-mt-20" id="specs">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Technical Specifications</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Detailed Specifications</CardTitle>
//                 <CardDescription>
//                   Complete technical details for the {product.name}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-blue-50 text-left">
//                         <th className="py-3 px-4 font-medium text-blue-900 border-b">Parameter</th>
//                         <th className="py-3 px-4 font-medium text-blue-900 border-b">Value</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {product.specifications?.map((spec, index) => (
//                         <tr key={index} className="hover:bg-gray-50">
//                           <td className="py-3 px-4 font-medium">{spec.param}</td>
//                           <td className="py-3 px-4">{spec.value}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="mt-6 flex justify-end">
//                   <Button>
//                     <Download className="h-4 w-4 mr-2" />
//                     Download Complete Specifications
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Ordering Section */}
//           <section ref={orderingRef} className="pt-20 scroll-mt-20" id="ordering">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Ordering Information</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Product Configurations</CardTitle>
//                 <CardDescription>Select the configuration that best fits your needs</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="overflow-x-auto">
//                   <table className="w-full border-collapse">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-left">
//                         <th className="py-3 px-4 font-medium rounded-tl-lg">Part Number</th>
//                         <th className="py-3 px-4 font-medium">Configuration</th>
//                         <th className="py-3 px-4 font-medium">Voltage</th>
//                         <th className="py-3 px-4 font-medium rounded-tr-lg"></th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {product.ordering?.map((item, index) => (
//                         <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                           <td className="py-4 px-4">{item.part}</td>
//                           <td className="py-4 px-4">{item.mold}</td>
//                           <td className="py-4 px-4">{item.voltage}</td>
//                           <td className="py-4 px-4 text-right">
//                             <Button variant="outline">Request Quote</Button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Accessories Section */}
//           <section ref={accessoriesRef} className="pt-20 scroll-mt-20" id="accessories">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Accessories & Consumables</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Compatible Accessories</CardTitle>
//                 <CardDescription>
//                   Enhance your {product.name} with these compatible products
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                   {product.accessories?.map((item, index) => (
//                     <Card key={index} className="overflow-hidden border hover:shadow-lg transition-all">
//                       <div className="aspect-square relative overflow-hidden bg-gray-100">
//                         <img 
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
//                         />
//                       </div>
//                       <CardHeader className="py-4">
//                         <CardTitle className="text-lg">{item.title}</CardTitle>
//                         <CardDescription>{item.subtitle}</CardDescription>
//                       </CardHeader>
//                       <CardFooter className="pt-0">
//                         <Button variant="outline" className="w-full">View Details</Button>
//                       </CardFooter>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Literature Section */}
//           <section ref={literatureRef} className="pt-20 scroll-mt-20" id="literature">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Product Literature</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Documentation</CardTitle>
//                 <CardDescription>Documentation and guides for the {product.name}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                   {product.literature?.map((item, index) => (
//                     <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
//                       <div className="aspect-video relative overflow-hidden bg-gray-100">
//                         <img 
//                           src={item.image}
//                           alt={item.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                           <h3 className="text-white font-medium">{item.title}</h3>
//                         </div>
//                       </div>
//                       <CardFooter className="flex justify-between pt-4">
//                         <Button variant="outline" size="sm">
//                           <FileText className="h-4 w-4 mr-2" />
//                           View
//                         </Button>
//                         <Button variant="secondary" size="sm">
//                           <Download className="h-4 w-4 mr-2" />
//                           Download
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Videos Section */}
//           <section ref={videosRef} className="pt-20 scroll-mt-20" id="videos">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Product Videos</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Watch & Learn</CardTitle>
//                 <CardDescription>Watch tutorials and demonstrations of the {product.name}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-col lg:flex-row gap-6">
//                   {/* Main Video Player */}
//                   <div className="lg:w-2/3">
//                     <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
//                       <video
//                         className="w-full h-full object-contain"
//                         controls
//                         poster={product.images ? product.images[0] : ""}
//                       >
//                         <source src="/example-video.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                     <div className="mt-4">
//                       <h3 className="text-xl font-medium">{product.videos && product.videos[activeVideoIndex]?.title}</h3>
//                       <p className="text-gray-500 text-sm">Duration: {product.videos && product.videos[activeVideoIndex]?.duration}</p>
//                     </div>
//                   </div>

//                   {/* Video List */}
//                   <div className="lg:w-1/3 space-y-4">
//                     <h3 className="font-medium text-gray-700">Related Videos</h3>
//                     <div className="bg-gray-50 rounded-lg p-4 space-y-3 h-[400px] overflow-y-auto">
//                       {product.videos?.map((video, index) => (
//                         <div
//                           key={video.id}
//                           className={`cursor-pointer flex gap-3 p-2 rounded-lg ${
//                             index === activeVideoIndex ? 'bg-blue-100 ring-1 ring-blue-400' : 'hover:bg-gray-100'
//                           }`}
//                           onClick={() => {
//                             setActiveVideoIndex(index);
//                             setIsVideoPlaying(true);
//                           }}
//                         >
//                           <div className="aspect-video w-24 bg-gray-200 relative rounded overflow-hidden">
//                             <img 
//                               src={product.images ? product.images[index % product.images.length] : ""} 
//                               alt="" 
//                               className="object-cover w-full h-full" 
//                             />
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/30">
//                               <ChevronUp className="h-6 w-6 text-white" />
//                             </div>
//                             <div className="absolute bottom-1 right-1 text-white text-xs bg-black/60 px-1 rounded">
//                               {video.duration}
//                             </div>
//                           </div>
//                           <div className="flex-1">
//                             <h4 className="font-medium text-sm">{video.title}</h4>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Tech Notes Section */}
//           <section ref={technotesRef} className="pt-20 pb-20 scroll-mt-20" id="technotes">
//             <div className="section-heading mb-8">
//               <h2 className="text-3xl font-bold text-gray-800">Tech Notes</h2>
//               <div className="h-1 w-20 bg-blue-600 mt-2"></div>
//             </div>
            
//             <Card>
//               <CardHeader>
//                 <CardTitle>Technical Documentation</CardTitle>
//                 <CardDescription>Technical documentation and research notes for professionals</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {product.technotes?.map((note, index) => (
//                     <Card key={index} className="overflow-hidden border hover:shadow-lg transition-all">
//                       <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
//                       <CardHeader>
//                         <Badge variant="outline" className="mb-2 w-fit">Technical</Badge>
//                         <CardTitle className="text-lg">{note.title}</CardTitle>
//                         <CardDescription className="text-xs">
//                           {note.date} • {note.author}
//                         </CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-sm text-gray-600">{note.description}</p>
//                       </CardContent>
//                       <CardFooter className="pt-0 flex justify-between">
//                         <Button variant="outline" size="sm">Preview</Button>
//                         <Button variant="secondary" size="sm">
//                           <Download className="h-4 w-4 mr-2" />
//                           Download
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </section>

//           {/* Quick navigation buttons */}
//           <div className="fixed bottom-6 right-6 space-y-2">
//             <Button 
//               variant="secondary"
//               size="icon"
//               className="rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700"
//               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             >
//               <ArrowUp className="h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
