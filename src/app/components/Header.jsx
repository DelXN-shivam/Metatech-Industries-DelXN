'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTools, FaChalkboardTeacher, FaInfoCircle, FaTrophy, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { mainCategories } from '@/app/data/categories';

const Header = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState({});

  const router = useRouter();
  const pathname = usePathname();
  const { categoryId, subCategoryId } = useParams();

  // Toggle category expansion
  const toggleCategory = (categorySlug) => {
    setExpandedCategories(prev => {
      // Create a new object with all categories closed
      const newState = Object.keys(prev).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {});
      
      // Toggle the clicked category
      return {
        ...newState,
        [categorySlug]: !prev[categorySlug]
      };
    });
  };

  // Enhanced scroll detection for smoother animation
  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 40, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active states based on current path
  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
      // Auto-expand category if it has subcategories and is active
      if (mainCategories.some(mainCat => 
        mainCat.categories.some(cat => 
          cat.slug === categoryId && cat.subCategories && cat.subCategories.length > 0
        )
      )) {
        setExpandedCategories(prev => ({ ...prev, [categoryId]: true }));
      }
    }
    if (subCategoryId) {
      setActiveSubCategory(subCategoryId);
    }
  }, [categoryId, subCategoryId, pathname]);

  // Consumables data
  const consumables = [
    {
      title: 'Cutting Machine Consumables',
      slug: 'cutting-machine-consumables',
      icon: '🔪',
      items: [
        { name: 'Diamond Cutting Blades', slug: 'diamond-cutting-blades' },
        { name: 'Abrasive Cutting Wheels', slug: 'abrasive-cutting-wheels' },
        { name: 'Precision Wafering Blades', slug: 'precision-wafering-blades' },
        { name: 'Resin-Bonded Abrasive Blades', slug: 'resin-bonded-abrasive-blades' },
        { name: 'Cooling Lubricants', slug: 'cooling-lubricants' },
      ],
    },
    {
      title: 'Grinding Machine Consumables',
      slug: 'grinding-machine-consumables',
      icon: '⚙️',
      items: [
        { name: 'Grinding Wheels', slug: 'grinding-wheels' },
        { name: 'Silicon Carbide Grinding Papers', slug: 'silicon-carbide-grinding-papers' },
        { name: 'Electroplated Diamond Discs', slug: 'electroplated-diamond-discs' },
        { name: 'Grinding Lubricants', slug: 'grinding-lubricants' },
        { name: 'Abrasive Belts', slug: 'abrasive-belts' },
      ],
    },
  ];

  // Navigation items
  const navItems = [
    { name: 'Accolade', path: '/accolade', icon: <FaTrophy /> },
    { name: 'Courses', path: '/courses', icon: <FaChalkboardTeacher /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  // Calculate interpolated styles based on scroll progress
  const headerBgColor = scrollProgress > 0.99 ? 'white' : 'rgba(224, 242, 300, 1)';
  const headerPadding = 16 - (scrollProgress * 8);
  const shadowOpacity = scrollProgress * 0.1;

  return (
    <header
      style={{
        '--header-bg': headerBgColor,
        '--header-padding': `${headerPadding}px`,
        '--header-shadow': `0 4px 6px rgba(0, 0, 0, ${shadowOpacity})`,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div
        style={{
          background: 'var(--header-bg)',
          paddingTop: 'var(--header-padding)',
          paddingBottom: 'var(--header-padding)',
          boxShadow: 'var(--header-shadow)',
        }}
        className="w-full"
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="p-2 rounded-xl transition-all duration-300">
              <Image
                src="/images/metatech_logo.png"
                width={180}
                height={60}
                alt="Metatech Logo"
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-10">
            <nav className="flex items-center">
              <ul className="flex items-center space-x-1">
                {/* Home Link */}
                <li>
                  <Link
                    href="/"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${pathname === '/'
                      ? scrollProgress > 0.5
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-sky-700 bg-white'
                      : scrollProgress > 0.5
                        ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                        : 'text-sky-800 hover:text-sky-900 hover:bg-white/80'
                      }`}
                  >
                    <span className="hidden sm:inline-block">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    </span>
                    Home
                  </Link>
                </li>

                {/* Products Mega Menu */}
                <li className="relative">
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${productsDropdown
                      ? scrollProgress > 0.5
                        ? 'text-sky-600 bg-sky-50'
                        : 'text-sky-700 bg-white'
                      : scrollProgress > 0.5
                        ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                        : 'text-sky-800 hover:text-sky-900 hover:bg-white/80'
                      }`}
                    onMouseEnter={() => setProductsDropdown(true)}
                    onClick={() => setProductsDropdown(!productsDropdown)}
                    aria-expanded={productsDropdown}
                  >
                    <FaTools className="hidden sm:inline-block" />
                    Products
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${productsDropdown ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Enhanced Mega Menu Dropdown */}
                  <div
                    className="fixed left-0 w-full mt-2"
                    onMouseEnter={() => setProductsDropdown(true)}
                    onMouseLeave={() => setProductsDropdown(false)}
                  >
                    <AnimatePresence>
                      {productsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ 
                            duration: 0.25, 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20 
                          }}
                          className="container mx-auto bg-white backdrop-blur-lg bg-opacity-95 rounded-xl shadow-2xl border border-sky-100"
                          style={{
                            boxShadow: "0 10px 25px -5px rgba(0, 124, 186, 0.1), 0 8px 10px -6px rgba(0, 124, 186, 0.08)"
                          }}
                        >
                          <div className="flex p-6 gap-6">
                            <div className="w-full">
                              <div className="grid grid-cols-[1.5fr_0.5fr] gap-8">
                                {/* Product Categories - Left Side */}
                                <div>
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-sky-600 rounded-lg flex items-center justify-center text-white shadow-md">
                                      <FaTools className="text-lg" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 relative">
                                      Product Categories
                                      <span className="absolute -bottom-1 left-0 w-12 h-1 bg-sky-500 rounded-full"></span>
                                    </h3>
                                  </div>

                                  <div className="max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                                      {mainCategories && mainCategories.length > 0 ? mainCategories.map((mainCat, idx) => (
                                        <div key={mainCat.mainCategory} className="mb-4">
                                          <div className="font-semibold text-xl text-sky-700 mb-2 relative pl-3 py-1 border-l-4 border-sky-300 rounded-sm bg-sky-50/50">
                                            {mainCat.mainCategory}
                                          </div>
                                          {mainCat.categories && mainCat.categories.map((category) => (
                                            <div key={category.slug} className="mb-2">
                                              <div className="flex items-center gap-1 group">
                                                {category.subCategories && category.subCategories.length > 0 && (
                                                  <button
                                                    onClick={() => toggleCategory(category.slug)}
                                                    className="text-gray-400 group-hover:text-sky-600 transition-colors w-5 h-5 flex items-center justify-center rounded"
                                                    aria-label={expandedCategories[category.slug] ? 'Collapse' : 'Expand'}
                                                  >
                                                    <svg
                                                      className={`w-3.5 h-3.5 transition-transform duration-300 ${expandedCategories[category.slug] ? 'rotate-90' : ''}`}
                                                      fill="none"
                                                      stroke="currentColor"
                                                      viewBox="0 0 24 24"
                                                    >
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                  </button>
                                                )}
                                                <Link
                                                  href={`/categories/${category.slug}`}
                                                  onClick={() => {
                                                    setActiveCategory(category.slug);
                                                    setActiveSubCategory(null);
                                                    setProductsDropdown(false);
                                                  }}
                                                  className={`flex items-center gap-2 py-2 px-2 rounded-lg transition-all duration-200 flex-1 group-hover:bg-sky-50/80 ${activeCategory === category.slug
                                                    ? 'text-sky-700 font-bold bg-sky-50 shadow-sm'
                                                    : 'text-gray-700 font-bold hover:text-sky-600'
                                                    }`}
                                                >
                                                  <span
                                                    className={`relative flex items-center justify-center ${activeCategory === category.slug ? '' : ''}`}
                                                  >
                                                    <span className={`
                                                      w-1.5 h-1.5 rounded-full transition-all duration-300 
                                                      ${activeCategory === category.slug ? 'bg-sky-500 scale-125' : 'bg-gray-400 group-hover:bg-sky-400'}
                                                    `} />
                                                  </span>
                                                  {category.name}
                                                  {activeCategory === category.slug && (
                                                    <motion.span 
                                                      className="ml-1 text-xs bg-sky-100 text-sky-700 px-1.5 py-0.5 rounded-full"
                                                      initial={{ opacity: 0, scale: 0.8 }}
                                                      animate={{ opacity: 1, scale: 1 }}
                                                      transition={{ duration: 0.2 }}
                                                    >
                                                      active
                                                    </motion.span>
                                                  )}
                                                </Link>
                                              </div>
                                              {category.subCategories && category.subCategories.length > 0 && (
                                                <AnimatePresence>
                                                  {(expandedCategories[category.slug] || activeCategory === category.slug) && (
                                                    <motion.div
                                                      initial={{ height: 0, opacity: 0 }}
                                                      animate={{ height: 'auto', opacity: 1 }}
                                                      exit={{ height: 0, opacity: 0 }}
                                                      transition={{ duration: 0.25, ease: "easeInOut" }}
                                                      className="ml-6 mt-1 space-y-1 overflow-hidden border-l border-sky-100 pl-2"
                                                    >
                                                      {category.subCategories.map((subCategory) => (
                                                        <Link
                                                          key={subCategory.id}
                                                          href={`/categories/${category.slug}/${subCategory.id}`}
                                                          onClick={() => {
                                                            setActiveCategory(category.slug);
                                                            setActiveSubCategory(subCategory.id);
                                                            setProductsDropdown(false);
                                                          }}
                                                          className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 group ${activeCategory === category.slug && activeSubCategory === subCategory.id
                                                            ? 'text-sky-700 font-medium bg-sky-100 shadow-sm'
                                                            : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                                                            }`}
                                                        >
                                                          <div className="flex items-center gap-2">
                                                            <span className={`text-xs transition-transform duration-200 
                                                              ${activeCategory === category.slug && activeSubCategory === subCategory.id
                                                                ? 'text-sky-500 rotate-0'
                                                                : 'text-gray-300 -rotate-90 group-hover:rotate-0 group-hover:text-sky-400'
                                                              }`}>
                                                              ▶
                                                            </span>
                                                            {subCategory.name}
                                                          </div>
                                                        </Link>
                                                      ))}
                                                    </motion.div>
                                                  )}
                                                </AnimatePresence>
                                              )}
                                            </div>
                                          ))}
                                        </div>
                                      )) : (
                                        <div className="text-gray-500 py-2">No categories available</div>
                                      )}
                                    </div>
                                  </div>
                                </div>

                                {/* Consumables Section - Right Side */}
                                <div>
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white shadow-md">
                                      <span className="text-lg">⚙️</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 relative">
                                      Consumables
                                      <span className="absolute -bottom-1 left-0 w-12 h-1 bg-green-400 rounded-full"></span>
                                    </h3>
                                  </div>

                                  <div className="max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="grid grid-cols-1 gap-x-4 gap-y-2">
                                      {consumables.map((consumable, index) => (
                                        <div key={consumable.slug} className="mb-4 bg-green-50/40 rounded-lg p-3 border border-green-100/50">
                                          <Link
                                            href={`/consumables/${consumable.slug}`}
                                            onClick={() => {
                                              setActiveCategory(consumable.slug);
                                              setActiveSubCategory(null);
                                              setProductsDropdown(false);
                                            }}
                                            className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${activeCategory === consumable.slug
                                              ? 'text-green-700 font-medium bg-green-100 shadow-sm'
                                              : 'text-gray-700 hover:text-green-600 hover:bg-green-50/80'
                                              }`}
                                          >
                                            <span className="text-base bg-white w-8 h-8 flex items-center justify-center rounded-full shadow-sm">{consumable.icon}</span>
                                            <span className="font-medium">{consumable.title}</span>
                                          </Link>

                                          <div className="ml-6 mt-2 space-y-2 grid grid-cols-1 gap-1">
                                            {consumable.items.map((item) => (
                                              <Link
                                                key={item.slug}
                                                href={`/consumables/${consumable.slug}/${item.slug}`}
                                                onClick={() => {
                                                  setActiveCategory(consumable.slug);
                                                  setActiveSubCategory(item.slug);
                                                  setProductsDropdown(false);
                                                }}
                                                className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 group ${activeCategory === consumable.slug && activeSubCategory === item.slug
                                                  ? 'text-green-700 font-medium bg-green-100 shadow-sm'
                                                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50/80'
                                                  }`}
                                              >
                                                <div className="flex items-center gap-2">
                                                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200
                                                    ${activeCategory === consumable.slug && activeSubCategory === item.slug
                                                      ? 'bg-green-500 scale-125'
                                                      : 'bg-gray-300 group-hover:bg-green-400'
                                                    }`} />
                                                  {item.name}
                                                </div>
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Enhanced Footer with View All Products CTA */}
                          <div className="p-4 bg-gradient-to-r from-sky-50 to-sky-100 rounded-b-xl border-t border-sky-100 flex justify-between items-center">
                            <p className="text-gray-600 text-sm">
                              Explore our complete product catalog for all your material science needs
                            </p>
                            <Link
                              href="/all-products"
                              onClick={() => setProductsDropdown(false)}
                              className="px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 text-sm font-medium flex items-center gap-2 shadow-sm hover:shadow group"
                            >
                              View All Products
                              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>

                {/* Remaining Navigation Items */}
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[15px] font-medium transition-all duration-200 ${pathname === item.path
                        ? scrollProgress > 0.5
                          ? 'text-sky-600 bg-sky-50'
                          : 'text-sky-700 bg-white'
                        : scrollProgress > 0.5
                          ? 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                          : 'text-sky-800 hover:text-sky-900 hover:bg-white/80'
                        }`}
                    >
                      <span className="hidden sm:inline-block">{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Login Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${scrollProgress > 0.5
                ? 'text-white bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 shadow-sm hover:shadow'
                : 'text-sky-800 bg-white hover:bg-sky-50 hover:text-sky-900'
                }`}
            >
              <FaUserCircle className="text-lg" />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <svg
                className={`w-6 h-6 ${scrollProgress > 0.5 ? 'text-gray-700' : 'text-sky-800'}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-xl z-50 md:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <div className="p-5 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-32">
                    <Image
                      src="/images/metatech_logo.png"
                      width={130}
                      height={45}
                      alt="Metatech Logo"
                      className="h-8 w-auto"
                    />
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto">
                  <ul className="space-y-1">
                    {/* Home - First Position */}
                    <li>
                      <Link
                        href="/"
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === '/'
                          ? 'bg-sky-50 text-sky-700'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        </span>
                        <span className="font-medium">Home</span>
                      </Link>
                    </li>

                    {/* Products - Second Position */}
                    <li>
                      <button
                        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors ${productsDropdown
                          ? 'bg-sky-50 text-sky-700'
                          : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        onClick={() => setProductsDropdown(!productsDropdown)}
                      >
                        <div className="flex items-center gap-3">
                          <FaTools className="text-lg" />
                          <span className="font-medium">Products</span>
                        </div>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${productsDropdown ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {productsDropdown && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 px-4">
                              <div className="mb-3">
                                <h4 className="font-medium text-sky-800 py-2">Product Categories</h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {mainCategories && mainCategories.length > 0 ? mainCategories.map((mainCat) => (
                                    <div key={mainCat.mainCategory}>
                                      <h5 className="font-medium text-sky-700 py-1">{mainCat.mainCategory}</h5>
                                      {mainCat.categories && mainCat.categories.map((category) => (
                                        <div key={category.slug} className="mb-2">
                                          <div className="flex items-center">
                                            {category.subCategories && category.subCategories.length > 0 && (
                                              <button
                                                onClick={() => toggleCategory(category.slug)}
                                                className="text-gray-500 hover:text-gray-700 transition-colors mr-1"
                                              >
                                                <svg
                                                  className={`w-4 h-4 transition-transform ${expandedCategories[category.slug] ? 'rotate-90' : ''}`}
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                              </button>
                                            )}
                                            <Link
                                              href={`/categories/${category.slug}`}
                                              className={`block py-2 px-2 rounded-md text-sm flex-1 ${activeCategory === category.slug
                                                ? 'text-sky-700 font-medium bg-sky-50'
                                                : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                              onClick={() => {
                                                setActiveCategory(category.slug);
                                                setActiveSubCategory(null);
                                                setIsMenuOpen(false);
                                              }}
                                            >
                                              {category.name}
                                            </Link>
                                          </div>

                                          {category.subCategories && category.subCategories.length > 0 && (
                                            <AnimatePresence>
                                              {(expandedCategories[category.slug] || activeCategory === category.slug) && (
                                                <motion.div
                                                  initial={{ height: 0, opacity: 0 }}
                                                  animate={{ height: 'auto', opacity: 1 }}
                                                  exit={{ height: 0, opacity: 0 }}
                                                  transition={{ duration: 0.2 }}
                                                  className="ml-6 space-y-1 mt-1 overflow-hidden"
                                                >
                                                  {category.subCategories.map((subCategory) => (
                                                    <Link
                                                      key={subCategory.id}
                                                      href={`/categories/${category.slug}/${subCategory.id}`}
                                                      className={`block py-1.5 px-3 rounded-md text-xs ${activeCategory === category.slug && activeSubCategory === subCategory.id
                                                        ? 'text-sky-700 font-medium bg-sky-50'
                                                        : 'text-gray-600 hover:bg-gray-50'
                                                        }`}
                                                      onClick={() => {
                                                        setActiveCategory(category.slug);
                                                        setActiveSubCategory(subCategory.id);
                                                        setIsMenuOpen(false);
                                                      }}
                                                    >
                                                      {subCategory.name}
                                                    </Link>
                                                  ))}
                                                </motion.div>
                                              )}
                                            </AnimatePresence>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )) : (
                                    <div className="text-gray-500 py-2">No categories available</div>
                                  )}
                                </div>
                              </div>

                              <div className="mt-4">
                                <h4 className="font-medium text-sky-800 py-2">Consumables</h4>
                                <div className="grid grid-cols-1 gap-2">
                                  {consumables.map((consumable) => (
                                    <div key={consumable.slug} className="mb-2">
                                      <Link
                                        href={`/consumables/${consumable.slug}`}
                                        className={`flex items-center gap-2 py-2 px-3 rounded-md text-sm ${activeCategory === consumable.slug
                                          ? 'text-sky-700 font-medium bg-sky-50'
                                          : 'text-gray-700 hover:bg-gray-50'
                                          }`}
                                        onClick={() => {
                                          setActiveCategory(consumable.slug);
                                          setActiveSubCategory(null);
                                          setIsMenuOpen(false);
                                        }}
                                      >
                                        <span>{consumable.icon}</span>
                                        {consumable.title}
                                      </Link>

                                      <div className="ml-4 space-y-1 mt-1">
                                        {consumable.items.map((item) => (
                                          <Link
                                            key={item.slug}
                                            href={`/consumables/${consumable.slug}/${item.slug}`}
                                            className={`block py-1.5 px-3 rounded-md text-xs ${activeCategory === consumable.slug && activeSubCategory === item.slug
                                              ? 'text-sky-700 font-medium bg-sky-50'
                                              : 'text-gray-600 hover:bg-gray-50'
                                              }`}
                                            onClick={() => {
                                              setActiveCategory(consumable.slug);
                                              setActiveSubCategory(item.slug);
                                              setIsMenuOpen(false);
                                            }}
                                          >
                                            {item.name}
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>

                    {/* Remaining Navigation Items */}
                    {navItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          href={item.path}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${pathname === item.path
                            ? 'bg-sky-50 text-sky-700'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Login Button */}
                <div className="pt-4 mt-auto border-t border-gray-100">
                  <Link
                    href="/login"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FaUserCircle />
                    <span className="font-medium">Login to Your Account</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;