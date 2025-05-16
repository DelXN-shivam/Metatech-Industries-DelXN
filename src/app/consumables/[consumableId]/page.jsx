'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mainConsumables, consumables } from '@/app/data/categories';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '@/app/components/ProductSidebar';

export default function ConsumableCategoryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Find the consumable category by slug
  const category = (() => {
    const found = mainConsumables.find(cat => cat.slug === params.consumableId);
    if (found) {
      const categoryProducts = consumables.filter(prod => 
        found.items.some(item => item.slug === prod.slug)
      );
      return { ...found, products: categoryProducts };
    }
    return null;
  })();

  // Handle resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    if (!category?.products) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const visibleItems = getVisibleItems();
        const maxSlide = category.products.length > visibleItems ? category.products.length - visibleItems : 0;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [category?.products]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Calculate how many items to show based on screen width
  const getVisibleItems = () => {
    const width = screenSize.width;
    if (width >= 1280) return 4; // xl
    if (width >= 1024) return 3; // lg
    if (width >= 768) return 2; // md
    return 1; // sm and xs
  };

  // Calculate slide width percentage based on visible items
  const getSlideWidth = () => {
    const visibleItems = getVisibleItems();
    return 100 / visibleItems;
  };

  // Get product translation percentage for carousel
  const getProductTranslation = () => {
    const visibleItems = getVisibleItems();
    return currentSlide * (100 / visibleItems);
  };

  // Fallback if category not found
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
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
        className={`${sidebarOpen ? 'fixed inset-0 z-30 bg-white bg-opacity-50' : 'hidden'} lg:bg-transparent lg:relative lg:block`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSidebarOpen(false);
          }
        }}
      >
        <motion.div
          className={`w-full sm:w-80 bg-white border-r border-gray-100 h-screen overflow-y-auto lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] z-40 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          } transition-transform duration-300 ease-in-out`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 w-full overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-4">{category.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{category.title}</h1>
          </div>

          {/* Product Carousel */}
          <div className="mb-12">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${getProductTranslation()}%)` }}
              >
                {category.products.map((product, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 px-2 sm:px-4`}
                    style={{ width: `${getSlideWidth()}%` }}
                  >
                    <Link href={`/consumables/${category.slug}/${product.slug}`}>
                      <div className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                        <div className="relative overflow-hidden rounded-lg mb-4 w-full h-32 sm:h-48 group-hover:shadow-md transition-all duration-300">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="px-3 pb-3 text-sm sm:text-lg font-semibold text-gray-800 group-hover:text-[#0f7db7] transition-colors duration-300 text-center">
                          {product.name}
                        </h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

              {/* Carousel Navigation Dots */}
              <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(category.products.length / getVisibleItems()) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-[#0f7db7] w-4' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, index) => (
              <Link
                key={index}
                href={`/consumables/${category.slug}/${product.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4 w-full h-48 group-hover:shadow-md transition-all duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#0f7db7] transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {product.details.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 