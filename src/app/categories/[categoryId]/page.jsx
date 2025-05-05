'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, FileText, BookOpen, FlaskConical, Download, ArrowRight, MessageSquareText, Menu, X } from 'lucide-react';
import { IoIosArrowForward } from 'react-icons/io';
import { useRouter, useParams } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { getCategoryBySlug } from '@/app/data/categories';

export default function CategoryPage() {
  const router = useRouter();
  const { categoryId } = useParams();
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentInfoSlide, setCurrentInfoSlide] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Find the category by slug
  const category = getCategoryBySlug(categoryId);

  // Update document title when category is loaded
  useEffect(() => {
    if (category) {
      document.title = `${category.name} | Metatech Industries`;
    }
  }, [category]);

  // Handle resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Auto-close sidebar on larger screens
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fallback if category not found
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
      </div>
    );
  }

  const { slides, products, items, productCards, specialtyProducts } = category;
  const totalInfoSlides = slides.length;

  // Auto-rotate info slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInfoSlide((prev) => (prev === totalInfoSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalInfoSlides]);

  const nextInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev === totalInfoSlides - 1 ? 0 : prev + 1));
  };

  const prevInfoSlide = () => {
    setCurrentInfoSlide((prev) => (prev === 0 ? totalInfoSlides - 1 : prev - 1));
  };

  // Auto-rotate product slides with responsive considerations
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductSlide((prev) => {
        const visibleItems = getVisibleItems();
        const maxSlide = products.length > visibleItems ? products.length - visibleItems : 0;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length, screenSize.width]);

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

  const toggleSublist = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Get product translation percentage for carousel
  const getProductTranslation = () => {
    const visibleItems = getVisibleItems();
    return currentProductSlide * (100 / visibleItems);
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="flex flex-col lg:flex-row bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
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
          className={`${sidebarOpen ? 'fixed inset-0 z-30 bg-black bg-opacity-50' : 'hidden'
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
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] p-6">
              <h2 className="text-white font-bold text-xl tracking-wide">Product Categories</h2>
            </div>
            <nav className="p-6">
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <motion.li
                    key={item.id}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                  >
                    <div
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 bg-${item.color} text-gray-700 font-medium flex items-center justify-between group-hover:translate-x-1 border border-transparent hover:border-[#0f7db7]/20 hover:text-[#0f7db7] hover:bg-[#0f7db7]/10 cursor-pointer`}
                      onClick={() => toggleSublist(index)}
                    >
                      <div className="flex items-center">
                        <span
                          className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''
                            }`}
                        >
                          <IoIosArrowForward className="w-5 h-5" />
                        </span>
                        <span className="ml-3">{item.name}</span>
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-[#4babe5]">
                        {item.subItems.length} items
                      </span>
                    </div>
                    {openIndex === index && (
                      <motion.ul
                        className="mt-2 ml-8 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.subItems.map((subItem, subIndex) => {
                          // Find the corresponding product to get its slug
                          const product = category.subCategories.find(
                            (sub) => sub.name === subItem.name
                          );
                          const subCategorySlug = product?.id || subItem.name.toLowerCase().replace(/ /g, '-');
                          return (
                            <motion.li
                              key={subIndex}
                              className="px-4 py-2.5 rounded-lg text-gray-600 hover:text-[#0f7db7] hover:bg-[#0f7db7]/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#0f7db7]/20"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05, duration: 0.3 }}
                            >
                              <Link
                                href={`/categories/${categoryId}/${subCategorySlug}`}
                                className="flex items-center w-full"
                                onClick={() => setSidebarOpen(false)}
                              >
                                <span className="w-1.5 h-1.5 bg-[#4babe5] rounded-full mr-3"></span>
                                {subItem.name}
                              </Link>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 w-full overflow-hidden">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 bg-white">
            {/* Product Carousel - Responsive */}
            <div className="mb-8 sm:mb-16">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${getProductTranslation()}%)` }}
                >
                  {products.map((product, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 px-2 sm:px-4`}
                      style={{ width: `${getSlideWidth()}%` }}
                    >
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
                    </div>
                  ))}
                </div>

                {/* Carousel Navigation Dots */}
                <div className="flex justify-center mt-4">
                  {Array.from({ length: Math.ceil(products.length / getVisibleItems()) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductSlide(index)}
                      className={`w-2 h-2 mx-1 rounded-full ${currentProductSlide === index ? 'bg-[#0f7db7]' : 'bg-gray-300'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Banner - Responsive */}
            <motion.div
              className="relative w-full h-36 sm:h-48 md:h-56 mb-8 sm:mb-16 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${category.heroImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              {/* Optional: Dark gradient or solid overlay */}
              <div className="absolute inset-0 bg-black opacity-60"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h1
                  className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide px-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {category.name}
                </motion.h1>
              </div>
            </motion.div>

            {/* Modern Intro Section with Stacked Card Design - Responsive */}
            <div className="w-full overflow-x-hidden px-2 sm:px-4">
              <motion.div
                className="mb-12 sm:mb-24 max-w-screen-xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '0px' }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
                  {/* Image Carousel - Left side */}
                  <motion.div
                    className="lg:w-1/2 w-full relative"
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="relative w-full">
                      {/* Main Featured Card */}
                      <motion.div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl w-full"
                        whileHover={{ y: -10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="relative h-40 sm:h-48 w-full">
                          <motion.img
                            key={currentInfoSlide}
                            src={slides[currentInfoSlide].image}
                            alt={slides[currentInfoSlide].alt}
                            className="w-full h-40 sm:h-48 object-contain"
                            loading="lazy"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 text-[#0f7db7] text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                            {slides[currentInfoSlide].category}
                          </span>
                        </div>
                        <motion.div
                          className="p-4 sm:p-6 w-full"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{slides[currentInfoSlide].title}</h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{slides[currentInfoSlide].description}</p>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                            <motion.button
                              className="bg-[#0f7db7] hover:bg-[#4babe5] text-white font-medium py-2 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:shadow-md text-sm sm:text-base"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Learn More
                            </motion.button>
                            <div className="flex items-center">
                              <div className="flex text-yellow-400 mr-2 text-sm sm:text-base">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>
                                    {i < Math.floor(slides[currentInfoSlide].rating) ? '★' : '☆'}
                                  </span>
                                ))}
                              </div>
                              <span className="text-gray-500 text-xs sm:text-sm">({slides[currentInfoSlide].reviews})</span>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Navigation and Thumbnails */}
                      <div className="mt-6 sm:mt-8 w-full">
                        <div className="flex justify-between items-center mb-3 sm:mb-4 w-full">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Featured Solutions</h3>
                          <div className="flex space-x-2">
                            <motion.button
                              onClick={prevInfoSlide}
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Previous slide"
                            >
                              <ChevronLeft className="text-gray-600" size={16} />
                            </motion.button>
                            <motion.button
                              onClick={nextInfoSlide}
                              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Next slide"
                            >
                              <ChevronRight className="text-gray-600" size={16} />
                            </motion.button>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full">
                          {slides.map((slide, index) => (
                            <motion.button
                              key={slide.id}
                              onClick={() => setCurrentInfoSlide(index)}
                              className={`relative h-16 sm:h-24 rounded-xl overflow-hidden transition-all duration-300 w-full ${currentInfoSlide === index ? 'ring-2 ring-[#0f7db7]' : 'opacity-80 hover:opacity-100'
                                }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View ${slide.title}`}
                            >
                              <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                              <div
                                className={`absolute inset-0 ${currentInfoSlide === index ? 'bg-black/20' : 'bg-black/30'
                                  }`}
                              ></div>
                              <span className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 text-white text-xs font-medium truncate w-[calc(100%-8px)] sm:w-[calc(100%-16px)]">
                                {slide.title}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Content - Right side */}
                  <motion.div
                    className="lg:w-1/2 w-full px-2 sm:px-4 mt-8 lg:mt-0"
                    initial={{ scale: 0.98, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4">
                      {category.intro.categoryLabel}
                    </span>
                    <motion.h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4 sm:mb-6 relative pb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      {category.intro.title}
                    </motion.h2>
                    <motion.p
                      className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      {category.intro.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {category.intro.buttons.map((button, index) => (
                        <motion.button
                          key={index}
                          onClick={() => button.link ? router.push(button.link) : null}
                          className={
                            button.variant === 'primary'
                              ? 'bg-[#0f7db7] hover:bg-[#4babe5] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base'
                              : 'border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base'
                          }
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        >
                          {button.text}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Semi-Automatic Section with Card Grid - Responsive */}
            <motion.div
              className="mb-16 sm:mb-28"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center mb-8 sm:mb-16">
                <motion.span
                  className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category.semiAutomaticSection.label}
                </motion.span>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f7db7] mb-3 sm:mb-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {category.semiAutomaticSection.title}
                </motion.h2>
                <motion.div
                  className="max-w-3xl mx-auto px-4"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{category.semiAutomaticSection.description}</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                {productCards.map((product) => {
                  // Find the corresponding subcategory slug
                  const subCategory = category.subCategories.find((sub) => sub.name === product.name);
                  const subCategorySlug = subCategory?.id || product.name.toLowerCase().replace(/ /g, '-');
                  return (
                    <Link
                      key={product.id}
                      href={`/categories/${categoryId}/${subCategorySlug}`}
                      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: product.delay }}
                        whileHover={{ y: -10 }}
                      >
                        <div className="relative h-48 sm:h-60 overflow-hidden">
                          <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <span className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-[#0f7db7]/90 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            {product.tag}
                          </span>
                        </div>

                        <div className="p-4 sm:p-6">
                          <div className="flex justify-between items-start mb-3 sm:mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-[#0f7db7]">{product.name}</h3>
                          </div>

                          <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">{product.description}</p>

                          <div className="flex justify-between items-center">
                            <motion.span
                              className="text-[#0f7db7] hover:text-[#4babe5] font-medium flex items-center transition-colors duration-300 text-sm sm:text-base"
                              whileHover={{ x: 5 }}
                            >
                              View Details
                              <ArrowRight className="ml-2" size={16} />
                            </motion.span>
                            <span className="text-xs text-gray-500">{product.detail}</span>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Specialty Machines Section */}
            <div className="w-full overflow-x-hidden">
              <motion.div
                className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 mx-auto px-4 sm:px-6 lg:px-8 max-w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-center mb-8 sm:mb-12 md:mb-16 w-full">
                  <motion.span
                    className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.specialtySection.label}
                  </motion.span>
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f7db7] mb-3 sm:mb-4 px-2 sm:px-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {category.specialtySection.title}
                  </motion.h2>
                  <motion.div
                    className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4 w-full"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{category.specialtySection.description}</p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 w-full max-w-7xl mx-auto">
                  {specialtyProducts.map((product) => {
                    // Find the corresponding subcategory slug for navigation (if applicable)
                    const subCategory = category.subCategories.find((sub) => sub.name === product.name);
                    const subCategorySlug = subCategory?.id || product.name.toLowerCase().replace(/ /g, '-');
                    return (
                      <motion.div
                        key={product.id}
                        className="bg-gradient-to-br from-[#0f7db7]/5 to-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: product.delay }}
                        whileHover={{ y: -5, scale: 1.01 }}
                      >
                        <div className="w-full md:w-1/3 min-w-0">
                          <motion.div
                            className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-square bg-gray-100 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <FileText className="text-gray-400 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16" />
                            )}
                          </motion.div>
                        </div>
                        <div className="w-full md:w-2/3 min-w-0 mt-4 md:mt-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#0f7db7] mb-2 sm:mb-3">{product.name}</h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{product.description}</p>
                          <div className="flex flex-wrap gap-2 sm:gap-4">
                            {product.buttons.map((button, index) => (
                              <motion.button
                                key={index}
                                onClick={() =>
                                  button.text === 'Product Details' && subCategory
                                    ? router.push(`/categories/${categoryId}/${subCategorySlug}`)
                                    : null
                                }
                                className={`${button.variant === 'primary'
                                  ? 'bg-[#0f7db7] hover:bg-[#4babe5] text-white'
                                  : 'border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10'
                                  } px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-md`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {button.text}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Solutions Banner with Parallax Effect */}
            <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-28 mx-4 sm:mx-6 lg:mx-8">
              <div className="h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${category.solutionsBanner.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-4 sm:px-8 text-white max-w-xs sm:max-w-lg md:max-w-2xl">
                    <span className="inline-block bg-white/20 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-4 backdrop-blur-sm">
                      {category.solutionsBanner.label}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">{category.solutionsBanner.title}</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-8 leading-relaxed">{category.solutionsBanner.description}</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {category.solutionsBanner.buttons.map((button, index) => (
                        <button
                          key={index}
                          className={
                            button.variant === 'primary'
                              ? 'bg-white text-[#0f7db7] hover:bg-gray-100 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg'
                              : 'border border-white text-white hover:bg-white/10 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300'
                          }
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Section with Floating Cards */}
            <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-28 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-4">
                  We're Here to Help
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f7db7] mb-2 sm:mb-4">Need Additional Help?</h2>
                <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    Do you want to improve your process? Reach out for one-on-one help from our applications experts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
                {/* Contact Lab Team */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
                    <img
                      src="/productsListing/contact_lab_team.png"
                      alt="Contact Lab Team"
                      className="h-20 sm:h-24 md:h-32 object-contain"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f7db7] mb-2 sm:mb-4">Contact Lab Team</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      Get expert advice on laboratory equipment setup and processes from our technical specialists.
                    </p>
                    <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-md w-full">
                      Contact Lab Experts
                    </button>
                  </div>
                </div>

                {/* Contact Customer Care */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
                    <img
                      src="/productsListing/contact_customer_care.png"
                      alt="Contact Customer Care"
                      className="h-20 sm:h-24 md:h-32 object-contain"
                    />
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0f7db7] mb-2 sm:mb-4">Contact Customer Care</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                      Questions about orders, shipping, or product availability? Our support team is ready to assist.
                    </p>
                    <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-md w-full">
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links Section */}
            <div className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-[#0f7db7]/5 to-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                  <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2 sm:mb-4">
                    Quick Access
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f7db7] mb-2 sm:mb-4">Explore Our Resources</h2>
                  <p className="text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                    Quickly access important information and resources for your laboratory needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  {/* Product Catalog */}
                  <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                        <FileText size={16} className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">Product Catalog</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-6">
                        View all products in our comprehensive catalog with detailed specifications.
                      </p>
                      <button className="inline-flex items-center text-[#0f7db7] text-sm sm:text-base font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                        Browse Catalog
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Methods by Material */}
                  <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                        <FlaskConical size={16} className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">Methods by Material</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-6">
                        Find optimized preparation methods for your specific material types.
                      </p>
                      <button className="inline-flex items-center text-[#0f7db7] text-sm sm:text-base font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                        View Methods
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Safety Data Sheets */}
                  <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                        <Download size={16} className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">Safety Data Sheets</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-6">
                        Access all safety documentation for our products and chemicals.
                      </p>
                      <button className="inline-flex items-center text-[#0f7db7] text-sm sm:text-base font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                        Search SDS
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Product Literature */}
                  <div className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
                        <BookOpen size={16} className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-3">Product Literature</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-6">
                        Download brochures, manuals, and technical documents.
                      </p>
                      <button className="inline-flex items-center text-[#0f7db7] text-sm sm:text-base font-medium group-hover:text-[#4babe5] transition-colors duration-300">
                        View Resources
                        <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional CTA */}
                <div className="mt-8 sm:mt-12 md:mt-16 text-center">
                  <p className="text-gray-600 mb-3 sm:mb-6 text-sm sm:text-base">Looking for something else?</p>
                  <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Contact Our Support Team
                    <MessageSquareText className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}





// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ChevronLeft, ChevronRight, Phone, Mail, FileText, BookOpen, FlaskConical, Download, ArrowRight, MessageSquareText } from 'lucide-react';
// import { IoIosArrowForward } from 'react-icons/io';
// import { useRouter, useParams } from 'next/navigation';
// import Header from '@/app/components/Header';
// import Footer from '@/app/components/Footer';
// import { motion } from 'framer-motion';
// import { categories } from '@/app/data/categories';

// export default function CategoryPage() {
//   const router = useRouter();
//   const { categoryId } = useParams();
//   const [currentProductSlide, setCurrentProductSlide] = useState(0);
//   const [currentInfoSlide, setCurrentInfoSlide] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);

//   // Find the category by slug
//   const category = categories.find(cat => cat.slug === categoryId);

//   // Fallback if category not found
//   if (!category) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold text-gray-800">Category not found</h1>
//       </div>
//     );
//   }

//   const { slides, products, items, productCards, specialtyProducts } = category;
//   const totalInfoSlides = slides.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentInfoSlide((prev) =>
//         prev === totalInfoSlides - 1 ? 0 : prev + 1
//       );
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [totalInfoSlides]);

//   const nextInfoSlide = () => {
//     setCurrentInfoSlide((prev) =>
//       prev === totalInfoSlides - 1 ? 0 : prev + 1
//     );
//   };

//   const prevInfoSlide = () => {
//     setCurrentInfoSlide((prev) => (prev === 0 ? totalInfoSlides - 1 : prev - 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentProductSlide((prev) => {
//         const maxSlide =
//           products.length > 4 ? products.length - 4 : products.length - 2;
//         return prev >= maxSlide ? 0 : prev + 1;
//       });
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   const toggleSublist = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//       <div className='sticky top-0 z-50'>
//         <Header />
//       </div>
//       <div className='flex bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
//         {/* Enhanced Sidebar */}
//         <motion.div
//           className="w-80 bg-white border-r border-gray-100 sticky top-0 h-[calc(100vh-64px)] overflow-y-auto"
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="bg-gradient-to-r from-[#0f7db7] to-[#4babe5] p-6">
//             <h2 className="text-white font-bold text-xl tracking-wide">Categories</h2>
//           </div>
//           <nav className="p-6">
//             <ul className="space-y-3">
//               {items.map((item, index) => (
//                 <motion.li
//                   key={item.id}
//                   className="group"
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05, duration: 0.5 }}
//                 >
//                   <button
//                     className={`w-full text-left p-4 rounded-xl transition-all duration-300 bg-${item.color} text-gray-700 font-medium flex items-center justify-between group-hover:translate-x-1 border border-transparent border-${item.color} hover:text-[#0f7db7] hover:bg-${item.bgColor}`}
//                     onClick={() => toggleSublist(index)}
//                   >
//                     <div className="flex items-center">
//                       <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`}>
//                         <IoIosArrowForward className="w-5 h-5" />
//                       </span>
//                       <span className="ml-3">{item.name}</span>
//                     </div>
//                     <span className="text-sm text-gray-400 group-hover:text-[#4babe5]">
//                       {item.subItems.length} items
//                     </span>
//                   </button>
//                   {openIndex === index && (
//                     <motion.ul
//                       className="mt-2 ml-8 space-y-2"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {item.subItems.map((subItem, subIndex) => (
//                         <motion.li
//                           key={subIndex}
//                           className="px-4 py-2.5 rounded-lg text-gray-600 hover:text-[#0f7db7] 
//                         hover:bg-[#0f7db7]/10 transition-all duration-300 cursor-pointer
//                         border border-transparent hover:border-[#0f7db7]/20
//                         flex items-center"
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ delay: subIndex * 0.05, duration: 0.3 }}
//                         >
//                           <Link href={subItem.apiCall} className="flex items-center w-full">
//                             <span className="w-1.5 h-1.5 bg-[#4babe5] rounded-full mr-3"></span>
//                             {subItem.name}
//                           </Link>
//                         </motion.li>
//                       ))}
//                     </motion.ul>
//                   )}
//                 </motion.li>
//               ))}
//             </ul>
//           </nav>
//         </motion.div>

//         {/* Main Content */}
//         <div className="flex-1">
//           <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
//             {/* Product Carousel */}
//             <div className="mb-16">
//               <div className="relative overflow-hidden">
//                 <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProductSlide * (products.length > 4 ? 25 : 50)}%)` }}>
//                   {products.map((product, index) => (
//                     <div key={index} className={`flex-shrink-0 ${products.length > 4 ? 'w-1/4' : 'w-1/2'} p-4`}>
//                       <div className="flex flex-col items-center bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
//                         <div className="relative overflow-hidden rounded-lg mb-4 w-full h-48 group-hover:shadow-md transition-all duration-300">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                         </div>
//                         <h3 className="px-3 text-lg font-semibold text-gray-800 group-hover:text-[#0f7db7] transition-colors duration-300">{product.name}</h3>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Hero Banner */}
//             <motion.div
//               className="relative w-full h-48 md:h-56 mb-16 rounded-lg overflow-hidden shadow-md"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="absolute inset-0 bg-[url('/images/automatic-cutting-machines/automatic-cutting-machines.png')] bg-cover bg-center"></div>
//               <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <motion.h1
//                   className="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                 >
//                   {category.name}
//                 </motion.h1>
//               </div>
//             </motion.div>

//             {/* Modern Intro Section with Stacked Card Design */}
//             <div className="w-full overflow-x-hidden px-4">
//               <motion.div
//                 className="mb-24 max-w-screen-xl mx-auto"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true, margin: "0px" }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="flex flex-col lg:flex-row gap-12 items-start w-full">
//                   {/* Image Carousel - Left side */}
//                   <motion.div
//                     className="lg:w-1/2 w-full relative"
//                     initial={{ scale: 0.98, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.2 }}
//                   >
//                     <div className="relative w-full">
//                       {/* Main Featured Card */}
//                       <motion.div
//                         className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl w-full"
//                         whileHover={{ y: -10 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       >
//                         <div className="relative h-48 w-full">
//                           <motion.img
//                             key={currentInfoSlide}
//                             src={slides[currentInfoSlide].image}
//                             alt={slides[currentInfoSlide].alt}
//                             className="w-full h-48 object-contain"
//                             loading="lazy"
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                           <span className="absolute top-4 left-4 bg-white/90 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full">
//                             {slides[currentInfoSlide].category}
//                           </span>
//                         </div>
//                         <motion.div
//                           className="p-6 w-full"
//                           initial={{ y: 20, opacity: 0 }}
//                           animate={{ y: 0, opacity: 1 }}
//                           transition={{ delay: 0.2, duration: 0.5 }}
//                         >
//                           <h3 className="text-xl font-bold text-gray-800 mb-3">{slides[currentInfoSlide].title}</h3>
//                           <p className="text-gray-600 mb-6">{slides[currentInfoSlide].description}</p>
//                           <div className="flex justify-between items-center">
//                             <motion.button
//                               className="bg-[#0f7db7] hover:bg-[#4babe5] text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-md"
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               Learn More
//                             </motion.button>
//                             <div className="flex items-center">
//                               <div className="flex text-yellow-400 mr-2">
//                                 {[...Array(5)].map((_, i) => (
//                                   <span key={i}>
//                                     {i < Math.floor(slides[currentInfoSlide].rating) ? '★' : '☆'}
//                                   </span>
//                                 ))}
//                               </div>
//                               <span className="text-gray-500 text-sm">({slides[currentInfoSlide].reviews})</span>
//                             </div>
//                           </div>
//                         </motion.div>
//                       </motion.div>

//                       {/* Navigation and Thumbnails */}
//                       <div className="mt-8 w-full">
//                         <div className="flex justify-between items-center mb-4 w-full">
//                           <h3 className="text-lg font-semibold text-gray-800">Featured Solutions</h3>
//                           <div className="flex space-x-2">
//                             <motion.button
//                               onClick={prevInfoSlide}
//                               className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               aria-label="Previous slide"
//                             >
//                               <ChevronLeft className="text-gray-600" size={18} />
//                             </motion.button>
//                             <motion.button
//                               onClick={nextInfoSlide}
//                               className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:bg-[#0f7db7]/10 hover:border-[#0f7db7]/50 transition-all"
//                               whileHover={{ scale: 1.1 }}
//                               whileTap={{ scale: 0.9 }}
//                               aria-label="Next slide"
//                             >
//                               <ChevronRight className="text-gray-600" size={18} />
//                             </motion.button>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-3 gap-4 w-full">
//                           {slides.map((slide, index) => (
//                             <motion.button
//                               key={slide.id}
//                               onClick={() => setCurrentInfoSlide(index)}
//                               className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 w-full ${currentInfoSlide === index ? 'ring-2 ring-[#0f7db7]' : 'opacity-80 hover:opacity-100'
//                                 }`}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                               aria-label={`View ${slide.title}`}
//                             >
//                               <img
//                                 src={slide.image}
//                                 alt={slide.alt}
//                                 className="w-full h-full object-cover"
//                               />
//                               <div className={`absolute inset-0 ${currentInfoSlide === index ? 'bg-black/20' : 'bg-black/30'
//                                 }`}></div>
//                               <span className="absolute bottom-2 left-2 text-white text-xs font-medium truncate w-[calc(100%-16px)]">
//                                 {slide.title}
//                               </span>
//                             </motion.button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>

//                   {/* Text Content - Right side */}
//                   <motion.div
//                     className="lg:w-1/2 w-full px-4"
//                     initial={{ scale: 0.98, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: 0.4 }}
//                   >
//                     <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
//                       {category.intro.categoryLabel}
//                     </span>
//                     <motion.h2
//                       className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-6 relative pb-3"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.5, duration: 0.6 }}
//                     >
//                       {category.intro.title}
//                     </motion.h2>
//                     <motion.p
//                       className="text-gray-700 mb-8 leading-relaxed text-lg"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.6, duration: 0.6 }}
//                     >
//                       {category.intro.description}
//                     </motion.p>
//                     <div className="flex flex-wrap gap-4">
//                       {category.intro.buttons.map((button, index) => (
//                         <motion.button
//                           key={index}
//                           onClick={() => button.link ? router.push(button.link) : null}
//                           className={button.variant === 'primary'
//                             ? "bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
//                             : "border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10 px-6 py-3 rounded-lg font-medium transition-all duration-300"}
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
//                         >
//                           {button.text}
//                         </motion.button>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </div>

//             {/* Semi-Automatic Section with Card Grid */}
//             <motion.div
//               className="mb-28"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="text-center mb-16">
//                 <motion.span
//                   className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   {category.semiAutomaticSection.label}
//                 </motion.span>
//                 <motion.h2
//                   className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4"
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   {category.semiAutomaticSection.title}
//                 </motion.h2>
//                 <motion.div
//                   className="max-w-3xl mx-auto"
//                   initial={{ opacity: 0, y: -20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {category.semiAutomaticSection.description}
//                   </p>
//                 </motion.div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {productCards.map((product) => (
//                   <motion.div
//                     key={product.id}
//                     className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
//                     initial={{ opacity: 0, y: 50 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: product.delay }}
//                     whileHover={{ y: -10 }}
//                   >
//                     <div className="relative h-60 overflow-hidden">
//                       <motion.img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         whileHover={{ scale: 1.1 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     </div>

//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-4">
//                         <h3 className="text-xl font-bold text-[#0f7db7]">{product.name}</h3>
//                         <span className="bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-2 py-1 rounded">
//                           {product.tag}
//                         </span>
//                       </div>

//                       <p className="text-gray-600 mb-6">
//                         {product.description}
//                       </p>

//                       <div className="flex justify-between items-center">
//                         <motion.button
//                           className="text-[#0f7db7] hover:text-[#4babe5] font-medium flex items-center transition-colors duration-300"
//                           whileHover={{ x: 5 }}
//                         >
//                           View Details
//                           <ArrowRight className="ml-2" size={16} />
//                         </motion.button>
//                         <span className="text-xs text-gray-500">{product.detail}</span>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Specialty Machines Section */}
//             <div className="w-full overflow-x-hidden">
//               <motion.div
//                 className="mb-28 mx-auto max-w-[calc(100vw-1rem)]"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8 }}
//               >
//                 <div className="text-center mb-16 px-4 w-full">
//                   <motion.span
//                     className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     {category.specialtySection.label}
//                   </motion.span>
//                   <motion.h2
//                     className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4 px-4"
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                   >
//                     {category.specialtySection.title}
//                   </motion.h2>
//                   <motion.div
//                     className="max-w-3xl mx-auto px-4 w-full"
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     <p className="text-gray-700 text-lg leading-relaxed">
//                       {category.specialtySection.description}
//                     </p>
//                   </motion.div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 w-full max-w-[calc(100vw-2rem)] mx-auto">
//                   {specialtyProducts.map((product) => (
//                     <motion.div
//                       key={product.id}
//                       className="bg-gradient-to-br from-[#0f7db7]/5 to-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 w-full"
//                       initial={{ opacity: 0, scale: 0.95 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.6, delay: product.delay }}
//                       whileHover={{ y: -10 }}
//                     >
//                       <div className="md:w-1/3 w-full min-w-0">
//                         <motion.div
//                           className="relative overflow-hidden rounded-xl aspect-square bg-gray-100 flex items-center justify-center"
//                           whileHover={{ scale: 1.05 }}
//                           transition={{ type: "spring", stiffness: 300 }}
//                         >
//                           {product.image ? (
//                             <img
//                               src={product.image}
//                               alt={product.name}
//                               className="w-full h-full object-cover"
//                             />
//                           ) : (
//                             <FileText className="text-gray-400" size={48} />
//                           )}
//                         </motion.div>
//                       </div>
//                       <div className="md:w-2/3 w-full min-w-0">
//                         <h3 className="text-2xl font-bold text-[#0f7db7] mb-3">{product.name}</h3>
//                         <p className="text-gray-600 mb-6">{product.description}</p>
//                         <div className="flex flex-wrap gap-4">
//                           {product.buttons.map((button, index) => (
//                             <motion.button
//                               key={index}
//                               className={`${button.variant === 'primary'
//                                 ? 'bg-[#0f7db7] hover:bg-[#4babe5] text-white'
//                                 : 'border border-[#0f7db7] text-[#0f7db7] hover:bg-[#0f7db7]/10'} 
//                             px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md`}
//                               whileHover={{ scale: 1.05 }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               {button.text}
//                             </motion.button>
//                           ))}
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Solutions Banner with Parallax Effect */}
//             <div className="relative mb-28 h-[500px] overflow-hidden rounded-2xl shadow-xl">
//               <div className="absolute inset-0 bg-[url('/productsListing/Find_Your_Solutions.png')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"></div>
//               <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>

//               <div className="relative h-full flex items-center">
//                 <div className="container mx-auto px-8 text-white max-w-2xl">
//                   <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4 backdrop-blur-sm">
//                     {category.solutionsBanner.label}
//                   </span>
//                   <h2 className="text-4xl font-bold mb-6">
//                     {category.solutionsBanner.title}
//                   </h2>
//                   <p className="text-lg mb-8 leading-relaxed">
//                     {category.solutionsBanner.description}
//                   </p>
//                   <div className="flex flex-wrap gap-4">
//                     {category.solutionsBanner.buttons.map((button, index) => (
//                       <button
//                         key={index}
//                         className={button.variant === 'primary'
//                           ? "bg-white text-[#0f7db7] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
//                           : "border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-all duration-300"}
//                       >
//                         {button.text}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Help Section with Floating Cards */}
//             <div className="mb-28">
//               <div className="text-center mb-16">
//                 <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
//                   We're Here to Help
//                 </span>
//                 <h2 className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4">
//                   Need Additional Help?
//                 </h2>
//                 <div className="max-w-3xl mx-auto">
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     Do you want to improve your process? Reach out for one-on-one help from our applications experts.
//                   </p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//                 {/* Contact Lab Team */}
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
//                   <div className="h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
//                     <img
//                       src="/productsListing/contact_lab_team.png"
//                       alt="Contact Lab Team"
//                       className="h-32 object-contain"
//                     />
//                   </div>
//                   <div className="p-8">
//                     <h3 className="text-xl font-bold text-[#0f7db7] mb-4">Contact Lab Team</h3>
//                     <p className="text-gray-600 mb-6">
//                       Get expert advice on laboratory equipment setup and processes from our technical specialists.
//                     </p>
//                     <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md w-full">
//                       Contact Lab Experts
//                     </button>
//                   </div>
//                 </div>

//                 {/* Contact Customer Care */}
//                 <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
//                   <div className="h-48 bg-gradient-to-r from-[#0f7db7] to-[#4babe5] flex items-center justify-center">
//                     <img
//                       src="/productsListing/contact_customer_care.png"
//                       alt="Contact Customer Care"
//                       className="h-32 object-contain"
//                     />
//                   </div>
//                   <div className="p-8">
//                     <h3 className="text-xl font-bold text-[#0f7db7] mb-4">Contact Customer Care</h3>
//                     <p className="text-gray-600 mb-6">
//                       Questions about orders, shipping, or product availability? Our support team is ready to assist.
//                     </p>
//                     <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-md w-full">
//                       Contact Support
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Quick Links Section */}
//             <div className="py-16 bg-gradient-to-br from-[#0f7db7]/5 to-white">
//               <div className="container mx-auto px-4">
//                 <div className="text-center mb-16">
//                   <span className="inline-block bg-[#0f7db7]/10 text-[#0f7db7] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
//                     Quick Access
//                   </span>
//                   <h2 className="text-3xl md:text-4xl font-bold text-[#0f7db7] mb-4">
//                     Explore Our Resources
//                   </h2>
//                   <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//                     Quickly access important information and resources for your laboratory needs.
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                   {/* Product Catalog */}
//                   <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
//                     <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//                     <div className="p-8 flex flex-col items-center text-center">
//                       <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
//                         <FileText size={28} className="transition-all duration-500" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">Product Catalog</h3>
//                       <p className="text-gray-600 mb-6">
//                         View all products in our comprehensive catalog with detailed specifications.
//                       </p>
//                       <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
//                         Browse Catalog
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Methods by Material */}
//                   <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
//                     <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//                     <div className="p-8 flex flex-col items-center text-center">
//                       <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
//                         <FlaskConical size={28} className="transition-all duration-500" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">Methods by Material</h3>
//                       <p className="text-gray-600 mb-6">
//                         Find optimized preparation methods for your specific material types.
//                       </p>
//                       <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
//                         View Methods
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Safety Data Sheets */}
//                   <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
//                     <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//                     <div className="p-8 flex flex-col items-center text-center">
//                       <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
//                         <Download size={28} className="transition-all duration-500" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">Safety Data Sheets</h3>
//                       <p className="text-gray-600 mb-6">
//                         Access all safety documentation for our products and chemicals.
//                       </p>
//                       <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
//                         Search SDS
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Product Literature */}
//                   <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
//                     <div className="absolute inset-0 bg-[#0f7db7] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
//                     <div className="p-8 flex flex-col items-center text-center">
//                       <div className="w-20 h-20 bg-[#0f7db7]/10 text-[#0f7db7] rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#0f7db7] group-hover:text-white">
//                         <BookOpen size={28} className="transition-all duration-500" />
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">Product Literature</h3>
//                       <p className="text-gray-600 mb-6">
//                         Download brochures, manuals, and technical documents.
//                       </p>
//                       <button className="inline-flex items-center text-[#0f7db7] font-medium group-hover:text-[#4babe5] transition-colors duration-300">
//                         View Resources
//                         <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Additional CTA */}
//                 <div className="mt-16 text-center">
//                   <p className="text-gray-600 mb-6">Looking for something else?</p>
//                   <button className="bg-[#0f7db7] hover:bg-[#4babe5] text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
//                     Contact Our Support Team
//                     <MessageSquareText className="ml-2" size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }