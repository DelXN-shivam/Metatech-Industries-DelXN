'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FaTools } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { categories } from '@/app/data/categories';

const Header = () => {
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { categoryId } = useParams();

  // Consumables data (consistent with previous implementation)
  const consumables = [
    {
      title: 'Cutting Machine Consumables',
      slug: 'cutting-machine-consumables',
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
      items: [
        { name: 'Grinding Wheels', slug: 'grinding-wheels' },
        { name: 'Silicon Carbide Grinding Papers', slug: 'silicon-carbide-grinding-papers' },
        { name: 'Electroplated Diamond Discs', slug: 'electroplated-diamond-discs' },
        { name: 'Grinding Lubricants', slug: 'grinding-lubricants' },
        { name: 'Abrasive Belts', slug: 'abrasive-belts' },
      ],
    },
    {
      title: 'Polishing Consumables',
      slug: 'polishing-consumables',
      items: [
        { name: 'Polishing Pads', slug: 'polishing-pads' },
        { name: 'Diamond Paste', slug: 'diamond-paste' },
        { name: 'Polycrystalline Diamond Suspension', slug: 'polycrystalline-diamond-suspension' },
        { name: 'Monocrystalline Diamond Suspension', slug: 'monocrystalline-diamond-suspension' },
        { name: 'Alumina Polishing Powders', slug: 'alumina-polishing-powders' },
      ],
    },
    {
      title: 'Mounting Consumables',
      slug: 'mounting-consumables',
      items: [
        { name: 'Mounting Resin', slug: 'mounting-resin' },
        { name: 'Epoxy Compounds', slug: 'epoxy-compounds' },
        { name: 'Phenolic Powders', slug: 'phenolic-powders' },
        { name: 'Cold Mounting Kits', slug: 'cold-mounting-kits' },
        { name: 'Release Agents', slug: 'release-agents' },
      ],
    },
  ];

  return (
    <header className="py-6 bg-gradient-to-t from-[#0f7db7] to-[#4babe5] relative z-50">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 gap-32">
        {/* Logo */}
        <div>
          <Link href="/">
            <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image
                src="/images/metatech_logo.png"
                width={230}
                height={80}
                alt="Metatech Logo"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav>
            <ul className="flex flex-row items-center space-x-8">
              <li>
                <Link
                  href="/"
                  className={`text-lg font-semibold py-3 px-5 rounded-full transition-all duration-300 ${
                    !categoryId ? 'text-blue-500 bg-slate-100' : 'text-white hover:text-blue-500 hover:bg-slate-100'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Products Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setProductsDropdown(true)}
                onMouseLeave={() => setProductsDropdown(false)}
              >
                <button
                  className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full transition-all duration-300"
                  aria-expanded={productsDropdown}
                  aria-label="Toggle Products Dropdown"
                >
                  Products
                </button>

                <AnimatePresence>
                  {productsDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] max-w-[90vw] bg-white shadow-xl rounded-xl p-6 z-50 border border-gray-100"
                    >
                      <div className="flex flex-row gap-8">
                        {/* Categories Section */}
                        <div className="w-2/3">
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FaTools className="text-blue-600" />
                            </span>
                            Categories
                          </h3>
                          <div className="grid grid-cols-2 gap-6">
                            {categories.map((category) => (
                              <div key={category.id} className="group">
                                <Link
                                  href={`/categories/${category.slug}`}
                                  onClick={() => setActiveCategory(category.id)}
                                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                    activeCategory === category.id || categoryId === category.slug
                                      ? 'bg-blue-50 border border-blue-200'
                                      : 'bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3 mb-3">
                                    <span
                                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                        activeCategory === category.id || categoryId === category.slug
                                          ? 'bg-blue-100'
                                          : 'bg-gray-100 group-hover:bg-blue-100'
                                      }`}
                                    >
                                      <FaTools
                                        className={`${
                                          activeCategory === category.id || categoryId === category.slug
                                            ? 'text-blue-600'
                                            : 'text-gray-600 group-hover:text-blue-600'
                                        }`}
                                      />
                                    </span>
                                    <span
                                      className={`font-semibold ${
                                        activeCategory === category.id || categoryId === category.slug
                                          ? 'text-blue-800'
                                          : 'text-gray-800 group-hover:text-blue-800'
                                      }`}
                                    >
                                      {category.name}
                                    </span>
                                  </div>
                                  <ul className="space-y-2 pl-13">
                                    {category.subCategories.map((subCategory) => (
                                      <li key={subCategory.id} className="text-gray-600 text-sm">
                                        <Link
                                          href={`/categories/${category.slug}/${subCategory.id}`}
                                          className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400"></span>
                                          {subCategory.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Consumables Section */}
                        <div className="w-1/3">
                          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              <FaTools className="text-green-600" />
                            </span>
                            Consumables
                          </h3>
                          <div className="grid grid-cols-1 gap-4">
                            {consumables.map((consumable) => (
                              <div key={consumable.slug} className="group">
                                <Link
                                  href={`/consumables/${consumable.slug}`}
                                  onClick={() => setActiveCategory(consumable.slug)}
                                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                    activeCategory === consumable.slug
                                      ? 'bg-green-50 border border-green-200'
                                      : 'bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50'
                                  }`}
                                >
                                  <div className="flex items-center gap-3 mb-3">
                                    <span
                                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                        activeCategory === consumable.slug
                                          ? 'bg-green-100'
                                          : 'bg-gray-100 group-hover:bg-green-100'
                                      }`}
                                    >
                                      <FaTools
                                        className={`${
                                          activeCategory === consumable.slug
                                            ? 'text-green-600'
                                            : 'text-gray-600 group-hover:text-green-600'
                                        }`}
                                      />
                                    </span>
                                    <span
                                      className={`font-semibold ${
                                        activeCategory === consumable.slug
                                          ? 'text-green-800'
                                          : 'text-gray-800 group-hover:text-green-800'
                                      }`}
                                    >
                                      {consumable.title}
                                    </span>
                                  </div>
                                  <ul className="space-y-2 pl-13">
                                    {consumable.items.map((item) => (
                                      <li key={item.slug} className="text-gray-600 text-sm">
                                        <Link
                                          href={`/consumables/${consumable.slug}/${item.slug}`}
                                          className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-green-400"></span>
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  href="/courses"
                  className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full transition-all duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-white hover:underline hover:text-blue-700 text-lg font-semibold transition-all duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-6 mx-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className={`block text-gray-700 hover:text-[#0f7db7] font-medium ${
                    !categoryId ? 'text-[#0f7db7] font-bold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left text-gray-700 hover:text-[#0f7db7] font-medium flex items-center justify-between"
                  onClick={() => setProductsDropdown(!productsDropdown)}
                  aria-expanded={productsDropdown}
                >
                  Products
                  <IoIosArrowForward
                    className={`transform transition-transform duration-300 ${productsDropdown ? 'rotate-90' : ''}`}
                  />
                </button>
                {productsDropdown && (
                  <div className="pl-4 mt-2 space-y-4">
                    {categories.map((category) => (
                      <div key={category.id}>
                        <Link
                          href={`/categories/${category.slug}`}
                          className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.name}
                        </Link>
                        <ul className="pl-4 mt-2 space-y-2">
                          {category.subCategories.map((subCategory) => (
                            <li key={subCategory.id}>
                              <Link
                                href={`/categories/${category.slug}/${subCategory.id}`}
                                className="block text-gray-600 hover:text-[#0f7db7] text-sm"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subCategory.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="mt-4">
                      <h4 className="text-gray-800 font-semibold">Consumables</h4>
                      <ul className="pl-4 mt-2 space-y-2">
                        {consumables.map((consumable) => (
                          <li key={consumable.slug}>
                            <Link
                              href={`/consumables/${consumable.slug}`}
                              className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {consumable.title}
                            </Link>
                            <ul className="pl-4 mt-2 space-y-2">
                              {consumable.items.map((item) => (
                                <li key={item.slug}>
                                  <Link
                                    href={`/consumables/${consumable.slug}/${item.slug}`}
                                    className="block text-gray-600 hover:text-[#0f7db7] text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="/courses"
                  className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="block text-gray-700 hover:text-[#0f7db7] font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;




// 'use client';
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { IoIosArrowForward } from "react-icons/io";
// import { FaTools } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { categories } from '@/app/data/categories';

// const Header = () => {
//     const [productsDropdown, setProductsDropdown] = useState(false);
//     const [activeCategory, setActiveCategory] = useState(null);
//     const router = useRouter();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const consumables = [
//         {
//             title: "Cutting Machine Consumables",
//             route: "/consumables/cutting-machine-consumables",
//             items: [
//                 "Diamond Cutting Blades",
//                 "Abrasive Cutting Wheels",
//                 "Precision Wafering Blades",
//                 "Resin-Bonded Abrasive Blades",
//                 "Cooling Lubricants",
//             ],
//         },
//         {
//             title: "Grinding Machine Consumables",
//             route: "/consumables/grinding-machine-consumables",
//             items: [
//                 "Grinding Wheels",
//                 "Silicon Carbide Grinding Papers",
//                 "Electroplated Diamond Discs",
//                 "Grinding Lubricants",
//                 "Abrasive Belts",
//             ],
//         },
//         {
//             title: "Polishing Consumables",
//             route: "/consumables/polishing-consumables",
//             items: [
//                 "Polishing Pads",
//                 "Diamond Paste",
//                 "Polycrystalline Diamond Suspension",
//                 "Monocrystalline Diamond Suspension",
//                 "Alumina Polishing Powders",
//             ],
//         },
//         {
//             title: "Mounting Consumables",
//             route: "/consumables/mounting-consumables",
//             items: [
//                 "Mounting Resin",
//                 "Epoxy Compounds",
//                 "Phenolic Powders",
//                 "Cold Mounting Kits",
//                 "Release Agents",
//             ],
//         },
//     ];

//     return (
//         <header className="py-6 bg-gradient-to-t from-[#0f7db7] to-[#4babe5]">
//             <div className='flex flex-row gap-32 items-center justify-center'>
//                 <div>
//                     <a href="/">
//                         <div className="bg-white p-4 rounded-lg">
//                             <Image
//                                 src="/images/metatech_logo.png"
//                                 width={230}
//                                 height={80}
//                                 alt="Metatech Logo"
//                             />
//                         </div>
//                     </a>
//                 </div>
//                 <div className="flex justify-center items-center p-0">
//                     <nav>
//                         <ul className="flex flex-row items-center space-x-8">
//                             <li>
//                                 <a href="/" className="text-blue-500 text-lg font-semibold bg-slate-100 py-3 px-5 rounded-full">
//                                     Home
//                                 </a>
//                             </li>

//                             {/* Products Dropdown */}
//                             <li
//                                 className="relative"
//                                 onMouseEnter={() => setProductsDropdown(true)}
//                                 onMouseLeave={() => setProductsDropdown(false)}
//                             >
//                                 <button className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full transition-all duration-300">
//                                     Products
//                                 </button>

//                                 <AnimatePresence>
//                                     {productsDropdown && (
//                                         <motion.div
//                                             initial={{ opacity: 0, y: -10 }}
//                                             animate={{ opacity: 1, y: 0 }}
//                                             exit={{ opacity: 0, y: -10 }}
//                                             transition={{ duration: 0.2 }}
//                                             className="absolute -left-[500px] mt-2 w-[1200px] bg-white shadow-xl rounded-xl p-6 z-50 border border-gray-100"
//                                         >
//                                             <div className="flex flex-row gap-8">
//                                                 {/* Categories Section */}
//                                                 <div className="w-2/3">
//                                                     <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                                                         <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
//                                                             <FaTools className="text-blue-600" />
//                                                         </span>
//                                                         Categories
//                                                     </h3>
//                                                     <div className="grid grid-cols-2 gap-6">
//                                                         {categories.map((category, index) => (
//                                                             <div key={index} className="group">
//                                                                 <button
//                                                                     onClick={() => router.push(`/categories/${category.slug}`)}
//                                                                     className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeCategory === category.id
//                                                                             ? 'bg-blue-50 border border-blue-200'
//                                                                             : 'bg-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50'
//                                                                         }`}
//                                                                 >
//                                                                     <div className="flex items-center gap-3 mb-3">
//                                                                         <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeCategory === category.id
//                                                                                 ? 'bg-blue-100'
//                                                                                 : 'bg-gray-100 group-hover:bg-blue-100'
//                                                                             }`}>
//                                                                             <FaTools className={`${activeCategory === category.id
//                                                                                     ? 'text-blue-600'
//                                                                                     : 'text-gray-600 group-hover:text-blue-600'
//                                                                                 }`} />
//                                                                         </span>
//                                                                         <span className={`font-semibold ${activeCategory === category.id
//                                                                                 ? 'text-blue-800'
//                                                                                 : 'text-gray-800 group-hover:text-blue-800'
//                                                                             }`}>
//                                                                             {category.name}
//                                                                         </span>
//                                                                     </div>
//                                                                     <ul className="space-y-2 pl-13">
//                                                                         {category.subCategories.map((subCategory, i) => (
//                                                                             <li key={i} className="text-gray-600 text-sm">
//                                                                                 <Link
//                                                                                     href={`/categories/${category.id}/${subCategory.id}`}
//                                                                                     className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200"
//                                                                                 >
//                                                                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-400"></span>
//                                                                                     {subCategory.name}
//                                                                                 </Link>
//                                                                             </li>
//                                                                         ))}
//                                                                     </ul>
//                                                                 </button>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>

//                                                 {/* Consumables Section */}
//                                                 <div className="w-1/3">
//                                                     <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                                                         <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
//                                                             <FaTools className="text-green-600" />
//                                                         </span>
//                                                         Consumables
//                                                     </h3>
//                                                     <div className="grid grid-cols-1 gap-4">
//                                                         {consumables.map((consumable, index) => (
//                                                             <div key={index} className="group">
//                                                                 <button
//                                                                     onClick={() => router.push(`/productlisting/${consumable.title}`)}
//                                                                     className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeCategory === consumable.title
//                                                                             ? 'bg-green-50 border border-green-200'
//                                                                             : 'bg-white border border-gray-100 hover:border-green-200 hover:bg-green-50'
//                                                                         }`}
//                                                                 >
//                                                                     <div className="flex items-center gap-3 mb-3">
//                                                                         <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeCategory === consumable.title
//                                                                                 ? 'bg-green-100'
//                                                                                 : 'bg-gray-100 group-hover:bg-green-100'
//                                                                             }`}>
//                                                                             <FaTools className={`${activeCategory === consumable.title
//                                                                                     ? 'text-green-600'
//                                                                                     : 'text-gray-600 group-hover:text-green-600'
//                                                                                 }`} />
//                                                                         </span>
//                                                                         <span className={`font-semibold ${activeCategory === consumable.title
//                                                                                 ? 'text-green-800'
//                                                                                 : 'text-gray-800 group-hover:text-green-800'
//                                                                             }`}>
//                                                                             {consumable.title}
//                                                                         </span>
//                                                                     </div>
//                                                                     <ul className="space-y-2 pl-13">
//                                                                         {consumable.items.map((item, i) => (
//                                                                             <li key={i} className="text-gray-600 text-sm">
//                                                                                 <Link
//                                                                                     href={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                                                                                     className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200"
//                                                                                 >
//                                                                                     <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-green-400"></span>
//                                                                                     {item}
//                                                                                 </Link>
//                                                                             </li>
//                                                                         ))}
//                                                                     </ul>
//                                                                 </button>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </motion.div>
//                                     )}
//                                 </AnimatePresence>
//                             </li>

//                             <li>
//                                 <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
//                                     Courses
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
//                                     About
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-white hover:text-blue-500 text-lg font-semibold hover:bg-slate-100 py-3 px-5 rounded-full">
//                                     Contact
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-white hover:underline hover:text-blue-700 text-lg font-semibold">
//                                     Login
//                                 </a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//                 className="md:hidden text-gray-700"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//                 <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     {isMenuOpen ? (
//                         <path d="M6 18L18 6M6 6l12 12" />
//                     ) : (
//                         <path d="M4 6h16M4 12h16M4 18h16" />
//                     )}
//                 </svg>
//             </button>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <motion.div
//                     className="md:hidden mt-4"
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                 >
//                     {categories.map((category) => (
//                         <div key={category.id} className="py-2">
//                             <Link
//                                 href={`/categories/${category.id}`}
//                                 className="block text-gray-700 hover:text-[#0f7db7] font-medium"
//                             >
//                                 {category.name}
//                             </Link>
//                             <div className="pl-4 mt-2 space-y-2">
//                                 {Array.isArray(category.subCategories) && category.subCategories.map((subCategory) => (
//                                     <Link
//                                         key={subCategory.id}
//                                         href={`/categories/${category.id}/${subCategory.id}`}
//                                         className="block text-gray-600 hover:text-[#0f7db7]"
//                                     >
//                                         {subCategory.name}
//                                     </Link>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>
//             )}
//         </header>
//     );
// };

// export default Header;