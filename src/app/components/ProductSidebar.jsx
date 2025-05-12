'use client';

import React, { useState, useEffect } from 'react';
import { FaTools, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { mainCategories } from '@/app/data/categories';

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [openMainCategories, setOpenMainCategories] = useState({});
  const [openCategories, setOpenCategories] = useState({});
  const [openConsumables, setOpenConsumables] = useState({});

  const router = useRouter();
  const pathname = usePathname();
  const { categoryId, subCategoryId } = useParams();

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

  // Set active states based on current path
  useEffect(() => {
    if (categoryId) {
      setActiveCategory(categoryId);
    }
    if (subCategoryId) {
      setActiveSubCategory(subCategoryId);
    }
  }, [categoryId, subCategoryId, pathname]);

  // Toggle main category
  const toggleMainCategory = (mainCategory) => {
    setOpenMainCategories((prev) => ({
      ...prev,
      [mainCategory]: !prev[mainCategory],
    }));
  };

  // Toggle category
  const toggleCategory = (categorySlug) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categorySlug]: !prev[categorySlug],
    }));
  };

  // Toggle consumable
  const toggleConsumable = (consumableSlug) => {
    setOpenConsumables((prev) => ({
      ...prev,
      [consumableSlug]: !prev[consumableSlug],
    }));
  };

  return (
    <aside className="w-80 bg-white shadow-lg h-screen overflow-y-auto fixed top-0 left-0 z-40">
      <div className="p-6">
        {/* Product Categories Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center text-white">
              <FaTools className="text-lg" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Product Categories</h3>
          </div>

          <div className="space-y-2">
            {mainCategories && mainCategories.length > 0 ? (
              mainCategories.map((mainCat) => (
                <div key={mainCat.mainCategory}>
                  <button
                    onClick={() => toggleMainCategory(mainCat.mainCategory)}
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-all duration-200"
                  >
                    <span className="font-semibold text-sky-700">{mainCat.mainCategory}</span>
                    <FaAngleDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMainCategories[mainCat.mainCategory] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openMainCategories[mainCat.mainCategory] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 space-y-2"
                      >
                        {mainCat.categories.map((category) => (
                          <div key={category.slug}>
                            <div className="flex items-center justify-between">
                              <Link
                                href={`/categories/${category.slug}`}
                                onClick={() => {
                                  setActiveCategory(category.slug);
                                  setActiveSubCategory(null);
                                }}
                                className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                                  activeCategory === category.slug
                                    ? 'text-sky-700 font-medium bg-sky-50'
                                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    activeCategory === category.slug ? 'bg-sky-500' : 'bg-gray-400'
                                  }`}
                                />
                                {category.name}
                              </Link>
                              {category.subCategories && category.subCategories.length > 0 && (
                                <button
                                  onClick={() => toggleCategory(category.slug)}
                                  className="p-2"
                                >
                                  <FaAngleRight
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                      openCategories[category.slug] ? 'rotate-90' : ''
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            <AnimatePresence>
                              {openCategories[category.slug] && category.subCategories && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="ml-6 space-y-1"
                                >
                                  {category.subCategories.map((subCategory) => (
                                    <Link
                                      key={subCategory.id}
                                      href={`/categories/${category.slug}/${subCategory.id}`}
                                      onClick={() => {
                                        setActiveCategory(category.slug);
                                        setActiveSubCategory(subCategory.id);
                                      }}
                                      className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                                        activeCategory === category.slug &&
                                        activeSubCategory === subCategory.id
                                          ? 'text-sky-700 font-medium bg-sky-100'
                                          : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span
                                          className={`w-1 h-1 rounded-full ${
                                            activeCategory === category.slug &&
                                            activeSubCategory === subCategory.id
                                              ? 'bg-sky-500'
                                              : 'bg-gray-300'
                                          }`}
                                        />
                                        {subCategory.name}
                                      </div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))
            ) : (
              <div className="text-gray-500 py-2">No categories available</div>
            )}
          </div>
        </div>

        {/* Consumables Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center text-white">
              <span className="text-lg">⚙️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Consumables</h3>
          </div>

          <div className="space-y-2">
            {consumables.map((consumable) => (
              <div key={consumable.slug}>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/consumables/${consumable.slug}`}
                    onClick={() => {
                      setActiveCategory(consumable.slug);
                      setActiveSubCategory(null);
                    }}
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeCategory === consumable.slug
                        ? 'text-sky-700 font-medium bg-sky-50'
                        : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                    }`}
                  >
                    <span className="text-base">{consumable.icon}</span>
                    {consumable.title}
                  </Link>
                  <button onClick={() => toggleConsumable(consumable.slug)} className="p-2">
                    <FaAngleRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openConsumables[consumable.slug] ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                </div>
                <AnimatePresence>
                  {openConsumables[consumable.slug] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-6 space-y-1"
                    >
                      {consumable.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/consumables/${consumable.slug}/${item.slug}`}
                          onClick={() => {
                            setActiveCategory(consumable.slug);
                            setActiveSubCategory(item.slug);
                          }}
                          className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                            activeCategory === consumable.slug && activeSubCategory === item.slug
                              ? 'text-sky-700 font-medium bg-sky-100'
                              : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-1 h-1 rounded-full ${
                                activeCategory === consumable.slug && activeSubCategory === item.slug
                                  ? 'bg-sky-500'
                                  : 'bg-gray-300'
                              }`}
                            />
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;