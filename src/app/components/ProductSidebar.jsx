'use client';

import React, { useState, useEffect } from 'react';
import { FaTools, FaInfoCircle, FaTrophy, FaEnvelope, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { mainCategories } from '@/app/data/categories';

const Sidebar = () => {
    const [activeCategory, setActiveCategory] = useState(null);

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

    return (
        <aside className="bg-white shadow-lg fixed left-0 top-0 h-full overflow-y-auto">
            <h2 className="text-xl font-bold p-4 bg-sky-100 text-sky-700">Product Categories</h2>
            <div className="p-4">
                <div className="grid grid-cols-1 gap-y-2">
                    {mainCategories && mainCategories.length > 0 ? mainCategories.map((mainCat) => (
                        <div key={mainCat.mainCategory} className="mb-4">
                            <div className="font-semibold text-sky-700 mb-2">{mainCat.mainCategory}</div>
                            {mainCat.categories && mainCat.categories.map((category) => (
                                <div key={category.slug} className="mb-2">
                                    <div
                                        onClick={() => {
                                            setActiveCategory(activeCategory === category.slug ? null : category.slug);
                                        }}
                                        className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === category.slug
                                                ? 'text-sky-700 font-medium bg-sky-50'
                                                : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                                            }`}
                                    >
                                        <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === category.slug ? 'bg-sky-500' : 'bg-gray-400'}`} />
                                        {category.name}
                                        <span className={`ml-auto transform transition-transform duration-200 ${activeCategory === category.slug ? 'rotate-90' : ''}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.3z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                    <AnimatePresence>
                                        {activeCategory === category.slug && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-6 mt-1 space-y-1"
                                            >
                                                {category.subCategories && category.subCategories.length > 0 && category.subCategories.map((subCategory) => (
                                                    <Link
                                                        key={subCategory.id}
                                                        href={`/categories/${category.slug}/${subCategory.id}`}
                                                        className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${activeCategory === category.slug
                                                                ? 'text-sky-700 font-medium bg-sky-100'
                                                                : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <span className={`w-1 h-1 rounded-full ${activeCategory === category.slug ? 'bg-sky-500' : 'bg-gray-300'}`} />
                                                            {subCategory.name}
                                                        </div>
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    )) : (
                        <div className="text-gray-500 py-2">No categories available</div>
                    )}
                </div>
            </div>
            <div className="p-4">
            <h2 className="text-xl font-bold p-4 bg-sky-100 text-sky-700">Consumables</h2>
                <div className="grid grid-cols-1 gap-y-2">
                    {consumables.map((consumable) => (
                        <div key={consumable.slug} className="mb-4">
                            <div
                                onClick={() => {
                                    setActiveCategory(activeCategory === consumable.slug ? null : consumable.slug);
                                }}
                                className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 cursor-pointer ${activeCategory === consumable.slug
                                        ? 'text-sky-700 font-medium bg-sky-50'
                                        : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50/50'
                                    }`}
                            >
                                <span className="text-base">{consumable.icon}</span>
                                {consumable.title}
                                <span className={`ml-auto transform transition-transform duration-200 ${activeCategory === consumable.slug ? 'rotate-90' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M15.3 10.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.3z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeCategory === consumable.slug && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="ml-6 mt-2 space-y-2"
                                    >
                                        {consumable.items.map((item) => (
                                            <Link
                                                key={item.slug}
                                                href={`/consumables/${consumable.slug}/${item.slug}`}
                                                className={`block px-3 py-2 rounded-md text-sm transition-all duration-200 ${activeCategory === consumable.slug
                                                        ? 'text-sky-700 font-medium bg-sky-100'
                                                        : 'text-gray-600 hover:text-sky-600 hover:bg-sky-50'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-1 h-1 rounded-full ${activeCategory === consumable.slug ? 'bg-sky-500' : 'bg-gray-300'}`} />
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
        </aside>
    );
};

export default Sidebar;