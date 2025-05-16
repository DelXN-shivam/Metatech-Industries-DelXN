'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mainConsumables } from '@/app/data/categories';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/app/components/ProductSidebar';

export default function ConsumablesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

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
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Consumables</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainConsumables.map((category, index) => (
              <Link
                key={index}
                href={`/consumables/${category.slug}`}
                className="group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#0f7db7] transition-colors duration-300">
                      {category.title}
                    </h2>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 hover:text-[#0f7db7] transition-colors duration-300 flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 