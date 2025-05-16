'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mainConsumables, consumables } from '@/app/data/categories';
import { Menu, X, ChevronLeft, ChevronRight, FileText, BookOpen, FlaskConical, Download, ArrowRight, MessageSquareText } from 'lucide-react';
import Sidebar from '@/app/components/ProductSidebar';

export default function ConsumableProductPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Find the product by slug
  const product = (() => {
    const found = consumables.find(prod => prod.slug === params.productId);
    return found || null;
  })();

  // Find the category
  const category = (() => {
    const found = mainConsumables.find(cat => cat.slug === params.consumableId);
    return found || null;
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Fallback if product not found
  if (!product || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
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
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <Link href="/consumables" className="hover:text-[#0f7db7]">
              Consumables
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/consumables/${category.slug}`} className="hover:text-[#0f7db7]">
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>

          {/* Product Header */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Product Image */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.details.description}</p>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <FileText className="w-6 h-6 text-[#0f7db7] mb-2" />
                  <span className="text-sm text-gray-600">Datasheet</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-[#0f7db7] mb-2" />
                  <span className="text-sm text-gray-600">Manual</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <FlaskConical className="w-6 h-6 text-[#0f7db7] mb-2" />
                  <span className="text-sm text-gray-600">MSDS</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <Download className="w-6 h-6 text-[#0f7db7] mb-2" />
                  <span className="text-sm text-gray-600">Downloads</span>
                </button>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-[#0f7db7] hover:bg-[#4babe5] text-white py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                <MessageSquareText className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            {product.details.features && product.details.features.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
                <ul className="space-y-2">
                  {product.details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#0f7db7] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications */}
            {product.details.applications && product.details.applications.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Applications</h2>
                <ul className="space-y-2">
                  {product.details.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="w-5 h-5 text-[#0f7db7] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {Object.keys(product.details.specifications).length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h2>
                <dl className="space-y-2">
                  {Object.entries(product.details.specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between">
                      <dt className="text-gray-600">{key}</dt>
                      <dd className="text-gray-900 font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Additional Information */}
          {product.details.note && (
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Note</h2>
              <p className="text-gray-600">{product.details.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 